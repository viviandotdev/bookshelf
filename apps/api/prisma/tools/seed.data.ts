import {
  User,
  Book,
  UserBook,
  Shelf,
  ShelfEntry,
} from 'src/generated-db-types'; // Import your Prisma models here
import { faker } from '@faker-js/faker';

// Function to create a random user
export function createRandomUser(): User {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    hashedPassword: faker.internet.password(),
    hashedRefreshToken: faker.string.uuid(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    // userBooks: userBooks,
    // shelves: shelves,
  };
}

// Function to create a random book
export function createRandomBook(): Book {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(),
    author: faker.person.fullName(),
    pubDate: faker.date.past().toISOString(),
    publisher: faker.company.name(),
    coverImage: faker.image.url(),
    description: faker.lorem.sentence(),
    pageNum: faker.number.int({ min: 1, max: 1000 }),
    categories: faker.lorem.words(),
  };
}

// Function to create a random user book
export function createRandomUserBook(users: User[]): UserBook {
  const user = faker.helpers.arrayElement(users);
  //   const book = faker.helpers.arrayElement(books);

  return {
    id: faker.string.uuid(),
    userId: user.id,
    bookId: faker.string.uuid(),
    status: faker.helpers.arrayElement(['Reading', 'Completed']),
    rating: faker.number.int({ min: 1, max: 5 }),
    dateStarted: faker.date.past().toISOString(),
    dateFinished: faker.date.recent().toISOString(),
  };
}

// Function to create a random shelf
export function createRandomShelf(users: User[]): Shelf {
  const user = faker.helpers.arrayElement(users);
  return {
    id: faker.string.uuid(),
    name: faker.word.noun(),
    description: faker.lorem.sentence(),
    userId: user.id,
    dateTime: faker.date.recent().toISOString(),
  };
}

// Function to create a random shelf entry
export function createRandomShelfEntry(
  shelves: Shelf[],
  userBooks: UserBook[],
): ShelfEntry {
  const shelf = faker.helpers.arrayElement(shelves);
  const userBook = faker.helpers.arrayElement(userBooks);

  return {
    id: faker.datatype.uuid(),
    shelfId: shelf.id,
    userBookId: userBook.id,
    dateTime: faker.date.recent().toISOString(),
    shelf: shelf,
    userBook: userBook,
  };
}
