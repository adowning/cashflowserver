import { PrismaClient } from '../../generated'
import { seedTodos as seedTodosOriginal } from '../seedTodo'

async function main() {
  const prisma = new PrismaClient()
  try {
    await prisma.$connect()
    console.log('Connected to database to run seedTodos.')

    const numberOfTodosToSeed = 5 // Or make this configurable
    await seedTodosOriginal(prisma, numberOfTodosToSeed)

    console.log('Standalone seedTodos script finished successfully.')
  } catch (e) {
    console.error('Error running standalone seedTodos script:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    console.log('Disconnected from database.')
  }
}

main()
