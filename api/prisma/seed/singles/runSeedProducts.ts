import { PrismaClient, Operator } from '../../generated'
import seedProductsOriginal from '../seedProducts'

async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    console.log('Connected to database to run seedProducts.')

    // Fetch an existing operator
    const operator = await prisma.operator.findFirst({
      // where: { name: 'MainCasinoOperator' }, // Or fetch the first one
    })

    if (!operator) {
      console.error('No operator found. Cannot run seedProducts. Please run the main seed first.')
      return
    }

    const defaultCurrencyID = 'USD' // As Currency model is deprecated, use a placeholder or update seedProductsOriginal logic

    console.log(
      `Using operator ID: ${operator.id} and currency ID: ${defaultCurrencyID} for products.`
    )
    await seedProductsOriginal(prisma, { id: operator.id }, defaultCurrencyID)

    console.log('Standalone seedProducts script finished successfully.')
  } catch (e) {
    console.error('Error running standalone seedProducts script:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    console.log('Disconnected from database.')
  }
}

main()
