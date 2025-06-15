import { PrismaClient, Todo } from '../generated/'
import { faker } from '@faker-js/faker'

export async function seedTodos(prisma: PrismaClient, count: number = 5): Promise<Todo[]> {
  console.log('Seeding todos...')
  const createdTodos: Todo[] = []

  for (let i = 0; i < count; i++) {
    const todo = await prisma.todo.create({
      data: {
        // id is auto-incrementing
        text: faker.lorem.sentence({ min: 3, max: 7 }),
        completed: faker.datatype.boolean(),
      },
    })
    createdTodos.push(todo)
  }

  console.log(`Seeded ${createdTodos.length} todos.`)
  return createdTodos
}
