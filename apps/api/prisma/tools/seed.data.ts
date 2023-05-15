import { User } from 'libs/generated-db-types';

export const USERS_SEED_DATA: User[] = [
  {
    id: '1',
    email: 'admin@bookcue.com',
    username: 'Administrator Bookcue',
    hashedPassword:
      '$2b$10$kRW9o24vrKjquuKVXLSeoOwOLjSfByooHwSp3BnIyjUBSVM2aJv8S',
    hashedRefreshToken:
      'asdfasdfkRW9o24vrKjquuKVXLSeoOwOLjSfByooHwSp3BnIyjUBSVM2aJv8S',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
