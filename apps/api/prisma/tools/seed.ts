import { PrismaClient } from '@prisma/client';
import {
  createRandomUser,
  createRandomBook,
  createRandomUserBook,
  createRandomShelf,
} from './seed.data'; // Import your fake data generation functions

const prisma = new PrismaClient();

async function main() {
  // Generate fake data
  const users = Array.from({ length: 10 }, createRandomUser);
  const books = Array.from({ length: 10 }, createRandomBook);
  const userBooks = Array.from({ length: 10 }, () =>
    createRandomUserBook(users),
  );
  const shelves = Array.from({ length: 10 }, () => createRandomShelf(users));

  await Promise.all(
    users.map((user) => {
      return prisma.user.create({
        data: {
          id: user.id,
          email: user.email,
          username: user.username,
          hashedPassword: user.hashedPassword,
          hashedRefreshToken: user.hashedRefreshToken,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    }),
  );

  await Promise.all(
    books.map((book) => {
      return prisma.book.create({
        data: {
          id: book.id,
          title: book.title,
          author: book.author,
          pubDate: book.pubDate,
          publisher: book.publisher,
          coverImage: book.coverImage,
          description: book.description,
          pageNum: book.pageNum,
          isbn: book.isbn,
        },
      });
    }),
  );

  await Promise.all(
    userBooks.map(async (userBook, idx) => {
      const { id, status, rating, dateStarted, dateFinished, userId } =
        userBook;
      const bookId = books[idx].id;
      // You can access user and book like userBook.user and userBook.book
      // Create a UserBook record
      await prisma.userBook.create({
        data: {
          id,
          userId,
          bookId,
          status,
          rating,
          dateStarted,
          dateFinished,
        },
      });
    }),
  );

  await Promise.all(
    shelves.map(async (shelf) => {
      const { id, shelfName, shelfDescription, userId } = shelf;
      // You can access user and book like userBook.user and userBook.book
      await prisma.shelf.create({
        data: {
          id,
          userId,
          shelfName,
          shelfDescription,
        },
      });
    }),
  );
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
