import { User } from 'libs/generated-db-types';

export const USERS_SEED_DATA: User[] = [
  {
    id: '1',
    email: 'admin@bookcue.com',
    name: 'Administrator Bookcue',
    password: '$2b$10$kRW9o24vrKjquuKVXLSeoOwOLjSfByooHwSp3BnIyjUBSVM2aJv8S',
  },
];
