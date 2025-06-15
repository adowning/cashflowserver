import * as productsData from './Json/products.json' // Ensure path is correct
import { PrismaClient, Product as PrismaProduct, Operator } from '../generated/' // Adjust imports
import { faker } from '@faker-js/faker'

interface ProductInput {
  id?: string
  title: string
  priceInCents: number
  description?: string
  url?: string // Changed from image to url to match schema
  iconUrl?: string
  operatorId?: string // Changed from shopId
  totalDiscountInCents?: number
  currencyId?: string // Changed from currency_id
  productType?: string
  bonusCode?: string
  bonusTotalInCredits?: number
  isActive?: boolean
  amountToReceiveInCredits?: number
  bestValue?: number
  discountInCents?: number
  bonusSpins?: number
  isPromo?: boolean
  [key: string]: unknown // For any additional properties
}

export default async function seedProducts( // Renamed from loadProducts for clarity
  prisma: PrismaClient,
  operatorKey: { id: string }, // Changed from key to operatorKey
  currencyID: string
): Promise<PrismaProduct[]> {
  console.log('Loading products from products.json...')
  // await prisma.product.deleteMany({ where: { operatorId: operatorKey.id } }); // Deletion managed by main script

  const productsToProcess = (productsData as any).default || productsData // Handle if 'default' key exists

  const mappedProducts: ProductInput[] = productsToProcess.map((product: any) => ({
    ...product, // Spread original product data
    title: product.title ?? `Product ${faker.commerce.productName()}`,
    url: product.url ?? product.image ?? faker.image.urlLoremFlickr({ category: 'technics' }), // Map 'image' to 'url'
    operatorId: operatorKey.id,
    currencyId: currencyID,
    // Ensure defaults for potentially missing fields from JSON if they are required by schema
    description: product.description ?? faker.commerce.productDescription(),
    productType: product.productType ?? 'DEPOSIT_PACKAGE',
    priceInCents: product.priceInCents ?? 0,
    amountToReceiveInCredits: product.amountToReceiveInCredits ?? 0,
    isActive: typeof product.isActive === 'boolean' ? product.isActive : true,
  }))

  const createdProducts: PrismaProduct[] = []
  for (const productInput of mappedProducts) {
    try {
      const createdProduct = await prisma.product.create({
        data: {
          title: productInput.title,
          description: productInput.description,
          url: productInput.url,
          iconUrl: productInput.iconUrl,
          productType: productInput.productType!,
          bonusCode: productInput.bonusCode,
          bonusTotalInCredits: productInput.bonusTotalInCredits,
          isActive: productInput.isActive,
          priceInCents: productInput.priceInCents,
          amountToReceiveInCredits: productInput.amountToReceiveInCredits,
          bestValue: productInput.bestValue,
          discountInCents: productInput.discountInCents,
          bonusSpins: productInput.bonusSpins,
          isPromo: productInput.isPromo,
          totalDiscountInCents: productInput.totalDiscountInCents,
          operator: { connect: { id: productInput.operatorId! } },
          // currency: { connect: { id: productInput.currencyId! } },
        },
      })
      createdProducts.push(createdProduct)
    } catch (error) {
      console.error(`Error creating product "${productInput.title}":`, error)
    }
  }
  console.log(`Finished processing ${createdProducts.length} products from products.json.`)
  return createdProducts
}
