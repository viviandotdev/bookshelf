import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Delete data from all tables except User
    await prisma.account.deleteMany();
    await prisma.userBookShelves.deleteMany();
    await prisma.userBook.deleteMany();
    await prisma.shelf.deleteMany();
    await prisma.cover.deleteMany();
    await prisma.identifier.deleteMany();
    await prisma.book.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.passwordResetToken.deleteMany();
    await prisma.readingProgress.deleteMany();
    await prisma.readDate.deleteMany();
    await prisma.user.deleteMany();

    console.log('Data cleared from all tables except User.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
