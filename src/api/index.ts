import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

    await prisma.user.create({
    data: {
      name: 'Janet',
      email: 'janet@prisma.io',
    },
  })


  const allUsers = await prisma.user.findMany({
    include: {
      notes: true,
      tbrList: true,
    }
  })
  console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })