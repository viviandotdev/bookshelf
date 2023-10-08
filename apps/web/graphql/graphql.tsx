import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String'];
  expiresIn: Scalars['Float'];
  refreshToken: Scalars['String'];
  user: User;
};

export type Book = {
  __typename?: 'Book';
  _count: BookCount;
  author?: Maybe<Scalars['String']>;
  categories?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  pageNum?: Maybe<Scalars['Int']>;
  pubDate?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  userBook?: Maybe<Array<UserBook>>;
};

export type BookAvgAggregate = {
  __typename?: 'BookAvgAggregate';
  pageNum?: Maybe<Scalars['Float']>;
};

export type BookCount = {
  __typename?: 'BookCount';
  userBook: Scalars['Int'];
};

export type BookCountAggregate = {
  __typename?: 'BookCountAggregate';
  _all: Scalars['Int'];
  author: Scalars['Int'];
  categories: Scalars['Int'];
  coverImage: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  pageNum: Scalars['Int'];
  pubDate: Scalars['Int'];
  publisher: Scalars['Int'];
  title: Scalars['Int'];
};

export type BookCreateInput = {
  author?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Scalars['String']>;
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  pageNum?: InputMaybe<Scalars['Int']>;
  pubDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  userBook?: InputMaybe<UserBookCreateNestedManyWithoutBookInput>;
};

export type BookCreateNestedOneWithoutUserBookInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutUserBookInput>;
  create?: InputMaybe<BookCreateWithoutUserBookInput>;
};

export type BookCreateOrConnectWithoutUserBookInput = {
  create: BookCreateWithoutUserBookInput;
  where: BookWhereUniqueInput;
};

export type BookCreateWithoutUserBookInput = {
  author?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Scalars['String']>;
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  pageNum?: InputMaybe<Scalars['Int']>;
  pubDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type BookMaxAggregate = {
  __typename?: 'BookMaxAggregate';
  author?: Maybe<Scalars['String']>;
  categories?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  pageNum?: Maybe<Scalars['Int']>;
  pubDate?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BookMinAggregate = {
  __typename?: 'BookMinAggregate';
  author?: Maybe<Scalars['String']>;
  categories?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  pageNum?: Maybe<Scalars['Int']>;
  pubDate?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BookRelationFilter = {
  is?: InputMaybe<BookWhereInput>;
  isNot?: InputMaybe<BookWhereInput>;
};

export type BookSumAggregate = {
  __typename?: 'BookSumAggregate';
  pageNum?: Maybe<Scalars['Int']>;
};

export type BookUpdateOneWithoutUserBookNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutUserBookInput>;
  create?: InputMaybe<BookCreateWithoutUserBookInput>;
  delete?: InputMaybe<BookWhereInput>;
  disconnect?: InputMaybe<BookWhereInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutUserBookInput>;
  upsert?: InputMaybe<BookUpsertWithoutUserBookInput>;
};

export type BookUpdateToOneWithWhereWithoutUserBookInput = {
  data: BookUpdateWithoutUserBookInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateWithoutUserBookInput = {
  author?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Scalars['String']>;
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  pageNum?: InputMaybe<Scalars['Int']>;
  pubDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BookUpsertWithoutUserBookInput = {
  create: BookCreateWithoutUserBookInput;
  update: BookUpdateWithoutUserBookInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookWhereInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  author?: InputMaybe<StringFilter>;
  categories?: InputMaybe<StringFilter>;
  coverImage?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  pageNum?: InputMaybe<IntFilter>;
  pubDate?: InputMaybe<StringFilter>;
  publisher?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookListRelationFilter>;
};

export type BookWhereUniqueInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  author?: InputMaybe<StringFilter>;
  categories?: InputMaybe<StringFilter>;
  coverImage?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']>;
  pageNum?: InputMaybe<IntFilter>;
  pubDate?: InputMaybe<StringFilter>;
  publisher?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookListRelationFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['Timestamp']>;
  gt?: InputMaybe<Scalars['Timestamp']>;
  gte?: InputMaybe<Scalars['Timestamp']>;
  in?: InputMaybe<Array<Scalars['Timestamp']>>;
  lt?: InputMaybe<Scalars['Timestamp']>;
  lte?: InputMaybe<Scalars['Timestamp']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['Timestamp']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type LogInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
  createShelf: Shelf;
  createUser: User;
  deleteShelf?: Maybe<Shelf>;
  logout: Scalars['Boolean'];
  refreshAuth: RefreshResponse;
  removeUserBook: Scalars['Boolean'];
  signin: AuthResponse;
  signup: User;
  updateShelf?: Maybe<Shelf>;
  updateUserBook: UserBook;
};


export type MutationCreateBookArgs = {
  data: BookCreateInput;
};


export type MutationCreateShelfArgs = {
  data: ShelfCreateInput;
};


export type MutationCreateUserArgs = {
  userCreateInput: UserCreateInput;
};


export type MutationDeleteShelfArgs = {
  where: ShelfWhereUniqueInput;
};


export type MutationLogoutArgs = {
  id: Scalars['String'];
};


export type MutationRemoveUserBookArgs = {
  where: UserBookIdentifierCompoundUniqueInput;
};


export type MutationSigninArgs = {
  logInInput: LogInInput;
};


export type MutationSignupArgs = {
  registerInput: RegisterInput;
};


export type MutationUpdateShelfArgs = {
  data: ShelfUpdateInput;
  where: ShelfWhereUniqueInput;
};


export type MutationUpdateUserBookArgs = {
  data: UserBookUpdateInput;
  where: UserBookIdentifierCompoundUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  shelves: Array<Shelf>;
  userBook?: Maybe<UserBook>;
};


export type QueryUserBookArgs = {
  where: UserBookIdentifierCompoundUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshResponse = {
  __typename?: 'RefreshResponse';
  accessToken: Scalars['String'];
  expiresIn: Scalars['Float'];
  refreshToken: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Shelf = {
  __typename?: 'Shelf';
  _count: ShelfCount;
  dateTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  shelfEntries?: Maybe<Array<ShelfEntry>>;
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type ShelfCount = {
  __typename?: 'ShelfCount';
  shelfEntries: Scalars['Int'];
};

export type ShelfCountAggregate = {
  __typename?: 'ShelfCountAggregate';
  _all: Scalars['Int'];
  dateTime: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShelfCreateInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shelfEntries?: InputMaybe<ShelfEntryCreateNestedManyWithoutShelfInput>;
  user?: InputMaybe<UserCreateNestedOneWithoutShelvesInput>;
};

export type ShelfCreateManyUserInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ShelfCreateManyUserInputEnvelope = {
  data: Array<ShelfCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ShelfCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ShelfWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ShelfCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ShelfCreateWithoutUserInput>>;
  createMany?: InputMaybe<ShelfCreateManyUserInputEnvelope>;
};

export type ShelfCreateNestedOneWithoutShelfEntriesInput = {
  connect?: InputMaybe<ShelfWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShelfCreateOrConnectWithoutShelfEntriesInput>;
  create?: InputMaybe<ShelfCreateWithoutShelfEntriesInput>;
};

export type ShelfCreateOrConnectWithoutShelfEntriesInput = {
  create: ShelfCreateWithoutShelfEntriesInput;
  where: ShelfWhereUniqueInput;
};

export type ShelfCreateOrConnectWithoutUserInput = {
  create: ShelfCreateWithoutUserInput;
  where: ShelfWhereUniqueInput;
};

export type ShelfCreateWithoutShelfEntriesInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  user?: InputMaybe<UserCreateNestedOneWithoutShelvesInput>;
};

export type ShelfCreateWithoutUserInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shelfEntries?: InputMaybe<ShelfEntryCreateNestedManyWithoutShelfInput>;
};

export type ShelfEntry = {
  __typename?: 'ShelfEntry';
  dateTime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  shelf: Shelf;
  shelfId: Scalars['String'];
  userBook: UserBook;
  userBookId: Scalars['String'];
};

export type ShelfEntryCountAggregate = {
  __typename?: 'ShelfEntryCountAggregate';
  _all: Scalars['Int'];
  dateTime: Scalars['Int'];
  id: Scalars['Int'];
  shelfId: Scalars['Int'];
  userBookId: Scalars['Int'];
};

export type ShelfEntryCreateManyShelfInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  userBookId: Scalars['String'];
};

export type ShelfEntryCreateManyShelfInputEnvelope = {
  data: Array<ShelfEntryCreateManyShelfInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ShelfEntryCreateNestedManyWithoutShelfInput = {
  connect?: InputMaybe<Array<ShelfEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ShelfEntryCreateOrConnectWithoutShelfInput>>;
  create?: InputMaybe<Array<ShelfEntryCreateWithoutShelfInput>>;
  createMany?: InputMaybe<ShelfEntryCreateManyShelfInputEnvelope>;
};

export type ShelfEntryCreateNestedOneWithoutUserBookInput = {
  connect?: InputMaybe<ShelfEntryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShelfEntryCreateOrConnectWithoutUserBookInput>;
  create?: InputMaybe<ShelfEntryCreateWithoutUserBookInput>;
};

export type ShelfEntryCreateOrConnectWithoutShelfInput = {
  create: ShelfEntryCreateWithoutShelfInput;
  where: ShelfEntryWhereUniqueInput;
};

export type ShelfEntryCreateOrConnectWithoutUserBookInput = {
  create: ShelfEntryCreateWithoutUserBookInput;
  where: ShelfEntryWhereUniqueInput;
};

export type ShelfEntryCreateWithoutShelfInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  userBook: UserBookCreateNestedOneWithoutShelfEntryInput;
};

export type ShelfEntryCreateWithoutUserBookInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  shelf: ShelfCreateNestedOneWithoutShelfEntriesInput;
};

export type ShelfEntryListRelationFilter = {
  every?: InputMaybe<ShelfEntryWhereInput>;
  none?: InputMaybe<ShelfEntryWhereInput>;
  some?: InputMaybe<ShelfEntryWhereInput>;
};

export type ShelfEntryMaxAggregate = {
  __typename?: 'ShelfEntryMaxAggregate';
  dateTime?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  shelfId?: Maybe<Scalars['String']>;
  userBookId?: Maybe<Scalars['String']>;
};

export type ShelfEntryMinAggregate = {
  __typename?: 'ShelfEntryMinAggregate';
  dateTime?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  shelfId?: Maybe<Scalars['String']>;
  userBookId?: Maybe<Scalars['String']>;
};

export type ShelfEntryRelationFilter = {
  is?: InputMaybe<ShelfEntryWhereInput>;
  isNot?: InputMaybe<ShelfEntryWhereInput>;
};

export type ShelfEntryScalarWhereInput = {
  AND?: InputMaybe<Array<ShelfEntryScalarWhereInput>>;
  NOT?: InputMaybe<Array<ShelfEntryScalarWhereInput>>;
  OR?: InputMaybe<Array<ShelfEntryScalarWhereInput>>;
  dateTime?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  shelfId?: InputMaybe<StringFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type ShelfEntryUpdateManyMutationInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type ShelfEntryUpdateManyWithWhereWithoutShelfInput = {
  data: ShelfEntryUpdateManyMutationInput;
  where: ShelfEntryScalarWhereInput;
};

export type ShelfEntryUpdateManyWithoutShelfNestedInput = {
  connect?: InputMaybe<Array<ShelfEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ShelfEntryCreateOrConnectWithoutShelfInput>>;
  create?: InputMaybe<Array<ShelfEntryCreateWithoutShelfInput>>;
  createMany?: InputMaybe<ShelfEntryCreateManyShelfInputEnvelope>;
  delete?: InputMaybe<Array<ShelfEntryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ShelfEntryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ShelfEntryWhereUniqueInput>>;
  set?: InputMaybe<Array<ShelfEntryWhereUniqueInput>>;
  update?: InputMaybe<Array<ShelfEntryUpdateWithWhereUniqueWithoutShelfInput>>;
  updateMany?: InputMaybe<Array<ShelfEntryUpdateManyWithWhereWithoutShelfInput>>;
  upsert?: InputMaybe<Array<ShelfEntryUpsertWithWhereUniqueWithoutShelfInput>>;
};

export type ShelfEntryUpdateOneWithoutUserBookNestedInput = {
  connect?: InputMaybe<ShelfEntryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShelfEntryCreateOrConnectWithoutUserBookInput>;
  create?: InputMaybe<ShelfEntryCreateWithoutUserBookInput>;
  delete?: InputMaybe<ShelfEntryWhereInput>;
  disconnect?: InputMaybe<ShelfEntryWhereInput>;
  update?: InputMaybe<ShelfEntryUpdateToOneWithWhereWithoutUserBookInput>;
  upsert?: InputMaybe<ShelfEntryUpsertWithoutUserBookInput>;
};

export type ShelfEntryUpdateToOneWithWhereWithoutUserBookInput = {
  data: ShelfEntryUpdateWithoutUserBookInput;
  where?: InputMaybe<ShelfEntryWhereInput>;
};

export type ShelfEntryUpdateWithWhereUniqueWithoutShelfInput = {
  data: ShelfEntryUpdateWithoutShelfInput;
  where: ShelfEntryWhereUniqueInput;
};

export type ShelfEntryUpdateWithoutShelfInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  userBook?: InputMaybe<UserBookUpdateOneRequiredWithoutShelfEntryNestedInput>;
};

export type ShelfEntryUpdateWithoutUserBookInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  shelf?: InputMaybe<ShelfUpdateOneRequiredWithoutShelfEntriesNestedInput>;
};

export type ShelfEntryUpsertWithWhereUniqueWithoutShelfInput = {
  create: ShelfEntryCreateWithoutShelfInput;
  update: ShelfEntryUpdateWithoutShelfInput;
  where: ShelfEntryWhereUniqueInput;
};

export type ShelfEntryUpsertWithoutUserBookInput = {
  create: ShelfEntryCreateWithoutUserBookInput;
  update: ShelfEntryUpdateWithoutUserBookInput;
  where?: InputMaybe<ShelfEntryWhereInput>;
};

export type ShelfEntryWhereInput = {
  AND?: InputMaybe<Array<ShelfEntryWhereInput>>;
  NOT?: InputMaybe<Array<ShelfEntryWhereInput>>;
  OR?: InputMaybe<Array<ShelfEntryWhereInput>>;
  dateTime?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  shelf?: InputMaybe<ShelfRelationFilter>;
  shelfId?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type ShelfEntryWhereUniqueInput = {
  AND?: InputMaybe<Array<ShelfEntryWhereInput>>;
  NOT?: InputMaybe<Array<ShelfEntryWhereInput>>;
  OR?: InputMaybe<Array<ShelfEntryWhereInput>>;
  dateTime?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']>;
  shelf?: InputMaybe<ShelfRelationFilter>;
  shelfId?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<Scalars['String']>;
};

export type ShelfIdentifierCompoundUniqueInput = {
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type ShelfListRelationFilter = {
  every?: InputMaybe<ShelfWhereInput>;
  none?: InputMaybe<ShelfWhereInput>;
  some?: InputMaybe<ShelfWhereInput>;
};

export type ShelfMaxAggregate = {
  __typename?: 'ShelfMaxAggregate';
  dateTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ShelfMinAggregate = {
  __typename?: 'ShelfMinAggregate';
  dateTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ShelfRelationFilter = {
  is?: InputMaybe<ShelfWhereInput>;
  isNot?: InputMaybe<ShelfWhereInput>;
};

export type ShelfScalarWhereInput = {
  AND?: InputMaybe<Array<ShelfScalarWhereInput>>;
  NOT?: InputMaybe<Array<ShelfScalarWhereInput>>;
  OR?: InputMaybe<Array<ShelfScalarWhereInput>>;
  dateTime?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ShelfUpdateInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  shelfEntries?: InputMaybe<ShelfEntryUpdateManyWithoutShelfNestedInput>;
  user?: InputMaybe<UserUpdateOneWithoutShelvesNestedInput>;
};

export type ShelfUpdateManyMutationInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ShelfUpdateManyWithWhereWithoutUserInput = {
  data: ShelfUpdateManyMutationInput;
  where: ShelfScalarWhereInput;
};

export type ShelfUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ShelfWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ShelfCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ShelfCreateWithoutUserInput>>;
  createMany?: InputMaybe<ShelfCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ShelfWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ShelfScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ShelfWhereUniqueInput>>;
  set?: InputMaybe<Array<ShelfWhereUniqueInput>>;
  update?: InputMaybe<Array<ShelfUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ShelfUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ShelfUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ShelfUpdateOneRequiredWithoutShelfEntriesNestedInput = {
  connect?: InputMaybe<ShelfWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShelfCreateOrConnectWithoutShelfEntriesInput>;
  create?: InputMaybe<ShelfCreateWithoutShelfEntriesInput>;
  update?: InputMaybe<ShelfUpdateToOneWithWhereWithoutShelfEntriesInput>;
  upsert?: InputMaybe<ShelfUpsertWithoutShelfEntriesInput>;
};

export type ShelfUpdateToOneWithWhereWithoutShelfEntriesInput = {
  data: ShelfUpdateWithoutShelfEntriesInput;
  where?: InputMaybe<ShelfWhereInput>;
};

export type ShelfUpdateWithWhereUniqueWithoutUserInput = {
  data: ShelfUpdateWithoutUserInput;
  where: ShelfWhereUniqueInput;
};

export type ShelfUpdateWithoutShelfEntriesInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserUpdateOneWithoutShelvesNestedInput>;
};

export type ShelfUpdateWithoutUserInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  shelfEntries?: InputMaybe<ShelfEntryUpdateManyWithoutShelfNestedInput>;
};

export type ShelfUpsertWithWhereUniqueWithoutUserInput = {
  create: ShelfCreateWithoutUserInput;
  update: ShelfUpdateWithoutUserInput;
  where: ShelfWhereUniqueInput;
};

export type ShelfUpsertWithoutShelfEntriesInput = {
  create: ShelfCreateWithoutShelfEntriesInput;
  update: ShelfUpdateWithoutShelfEntriesInput;
  where?: InputMaybe<ShelfWhereInput>;
};

export type ShelfWhereInput = {
  AND?: InputMaybe<Array<ShelfWhereInput>>;
  NOT?: InputMaybe<Array<ShelfWhereInput>>;
  OR?: InputMaybe<Array<ShelfWhereInput>>;
  dateTime?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  shelfEntries?: InputMaybe<ShelfEntryListRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ShelfWhereUniqueInput = {
  AND?: InputMaybe<Array<ShelfWhereInput>>;
  NOT?: InputMaybe<Array<ShelfWhereInput>>;
  OR?: InputMaybe<Array<ShelfWhereInput>>;
  dateTime?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<ShelfIdentifierCompoundUniqueInput>;
  name?: InputMaybe<StringFilter>;
  shelfEntries?: InputMaybe<ShelfEntryListRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  createdAt: Scalars['Timestamp'];
  email: Scalars['String'];
  id: Scalars['ID'];
  shelves?: Maybe<Array<Shelf>>;
  updatedAt: Scalars['Timestamp'];
  userBooks?: Maybe<Array<UserBook>>;
  username?: Maybe<Scalars['String']>;
};

export type UserBook = {
  __typename?: 'UserBook';
  ShelfEntry?: Maybe<ShelfEntry>;
  book?: Maybe<Book>;
  bookId: Scalars['String'];
  dateFinished?: Maybe<Scalars['String']>;
  dateStarted?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  rating?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type UserBookAvgAggregate = {
  __typename?: 'UserBookAvgAggregate';
  rating?: Maybe<Scalars['Float']>;
};

export type UserBookCountAggregate = {
  __typename?: 'UserBookCountAggregate';
  _all: Scalars['Int'];
  bookId: Scalars['Int'];
  dateFinished: Scalars['Int'];
  dateStarted: Scalars['Int'];
  id: Scalars['Int'];
  rating: Scalars['Int'];
  status: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserBookCreateManyBookInput = {
  dateFinished?: InputMaybe<Scalars['String']>;
  dateStarted?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  status: Scalars['String'];
  userId: Scalars['String'];
};

export type UserBookCreateManyBookInputEnvelope = {
  data: Array<UserBookCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserBookCreateManyUserInput = {
  bookId: Scalars['String'];
  dateFinished?: InputMaybe<Scalars['String']>;
  dateStarted?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  status: Scalars['String'];
};

export type UserBookCreateManyUserInputEnvelope = {
  data: Array<UserBookCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserBookCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<UserBookCreateWithoutBookInput>>;
  createMany?: InputMaybe<UserBookCreateManyBookInputEnvelope>;
};

export type UserBookCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserBookCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserBookCreateManyUserInputEnvelope>;
};

export type UserBookCreateNestedOneWithoutShelfEntryInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutShelfEntryInput>;
  create?: InputMaybe<UserBookCreateWithoutShelfEntryInput>;
};

export type UserBookCreateOrConnectWithoutBookInput = {
  create: UserBookCreateWithoutBookInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookCreateOrConnectWithoutShelfEntryInput = {
  create: UserBookCreateWithoutShelfEntryInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookCreateOrConnectWithoutUserInput = {
  create: UserBookCreateWithoutUserInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookCreateWithoutBookInput = {
  ShelfEntry?: InputMaybe<ShelfEntryCreateNestedOneWithoutUserBookInput>;
  dateFinished?: InputMaybe<Scalars['String']>;
  dateStarted?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  status: Scalars['String'];
  user?: InputMaybe<UserCreateNestedOneWithoutUserBooksInput>;
};

export type UserBookCreateWithoutShelfEntryInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutUserBookInput>;
  dateFinished?: InputMaybe<Scalars['String']>;
  dateStarted?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  status: Scalars['String'];
  user?: InputMaybe<UserCreateNestedOneWithoutUserBooksInput>;
};

export type UserBookCreateWithoutUserInput = {
  ShelfEntry?: InputMaybe<ShelfEntryCreateNestedOneWithoutUserBookInput>;
  book?: InputMaybe<BookCreateNestedOneWithoutUserBookInput>;
  dateFinished?: InputMaybe<Scalars['String']>;
  dateStarted?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  status: Scalars['String'];
};

export type UserBookIdentifierCompoundUniqueInput = {
  bookId: Scalars['String'];
  userId: Scalars['String'];
};

export type UserBookListRelationFilter = {
  every?: InputMaybe<UserBookWhereInput>;
  none?: InputMaybe<UserBookWhereInput>;
  some?: InputMaybe<UserBookWhereInput>;
};

export type UserBookMaxAggregate = {
  __typename?: 'UserBookMaxAggregate';
  bookId?: Maybe<Scalars['String']>;
  dateFinished?: Maybe<Scalars['String']>;
  dateStarted?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserBookMinAggregate = {
  __typename?: 'UserBookMinAggregate';
  bookId?: Maybe<Scalars['String']>;
  dateFinished?: Maybe<Scalars['String']>;
  dateStarted?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserBookRelationFilter = {
  is?: InputMaybe<UserBookWhereInput>;
  isNot?: InputMaybe<UserBookWhereInput>;
};

export type UserBookScalarWhereInput = {
  AND?: InputMaybe<Array<UserBookScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserBookScalarWhereInput>>;
  OR?: InputMaybe<Array<UserBookScalarWhereInput>>;
  bookId?: InputMaybe<StringFilter>;
  dateFinished?: InputMaybe<StringFilter>;
  dateStarted?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  status?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserBookSumAggregate = {
  __typename?: 'UserBookSumAggregate';
  rating?: Maybe<Scalars['Int']>;
};

export type UserBookUpdateInput = {
  ShelfEntry?: InputMaybe<ShelfEntryUpdateOneWithoutUserBookNestedInput>;
  book?: InputMaybe<BookUpdateOneWithoutUserBookNestedInput>;
  dateFinished?: InputMaybe<Scalars['String']>;
  dateStarted?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserUpdateOneWithoutUserBooksNestedInput>;
};

export type UserBookUpdateManyMutationInput = {
  dateFinished?: InputMaybe<Scalars['String']>;
  dateStarted?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};

export type UserBookUpdateManyWithWhereWithoutUserInput = {
  data: UserBookUpdateManyMutationInput;
  where: UserBookScalarWhereInput;
};

export type UserBookUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserBookCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserBookCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserBookScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  set?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  update?: InputMaybe<Array<UserBookUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserBookUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserBookUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserBookUpdateOneRequiredWithoutShelfEntryNestedInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutShelfEntryInput>;
  create?: InputMaybe<UserBookCreateWithoutShelfEntryInput>;
  update?: InputMaybe<UserBookUpdateToOneWithWhereWithoutShelfEntryInput>;
  upsert?: InputMaybe<UserBookUpsertWithoutShelfEntryInput>;
};

export type UserBookUpdateToOneWithWhereWithoutShelfEntryInput = {
  data: UserBookUpdateWithoutShelfEntryInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpdateWithWhereUniqueWithoutUserInput = {
  data: UserBookUpdateWithoutUserInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookUpdateWithoutShelfEntryInput = {
  book?: InputMaybe<BookUpdateOneWithoutUserBookNestedInput>;
  dateFinished?: InputMaybe<Scalars['String']>;
  dateStarted?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserUpdateOneWithoutUserBooksNestedInput>;
};

export type UserBookUpdateWithoutUserInput = {
  ShelfEntry?: InputMaybe<ShelfEntryUpdateOneWithoutUserBookNestedInput>;
  book?: InputMaybe<BookUpdateOneWithoutUserBookNestedInput>;
  dateFinished?: InputMaybe<Scalars['String']>;
  dateStarted?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};

export type UserBookUpsertWithWhereUniqueWithoutUserInput = {
  create: UserBookCreateWithoutUserInput;
  update: UserBookUpdateWithoutUserInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookUpsertWithoutShelfEntryInput = {
  create: UserBookCreateWithoutShelfEntryInput;
  update: UserBookUpdateWithoutShelfEntryInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookWhereInput = {
  AND?: InputMaybe<Array<UserBookWhereInput>>;
  NOT?: InputMaybe<Array<UserBookWhereInput>>;
  OR?: InputMaybe<Array<UserBookWhereInput>>;
  ShelfEntry?: InputMaybe<ShelfEntryRelationFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  dateFinished?: InputMaybe<StringFilter>;
  dateStarted?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  status?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserBookWhereUniqueInput = {
  AND?: InputMaybe<Array<UserBookWhereInput>>;
  NOT?: InputMaybe<Array<UserBookWhereInput>>;
  OR?: InputMaybe<Array<UserBookWhereInput>>;
  ShelfEntry?: InputMaybe<ShelfEntryRelationFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  dateFinished?: InputMaybe<StringFilter>;
  dateStarted?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<UserBookIdentifierCompoundUniqueInput>;
  rating?: InputMaybe<IntFilter>;
  status?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserCount = {
  __typename?: 'UserCount';
  shelves: Scalars['Int'];
  userBooks: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateNestedOneWithoutShelvesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutShelvesInput>;
  create?: InputMaybe<UserCreateWithoutShelvesInput>;
};

export type UserCreateNestedOneWithoutUserBooksInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserBooksInput>;
  create?: InputMaybe<UserCreateWithoutUserBooksInput>;
};

export type UserCreateOrConnectWithoutShelvesInput = {
  create: UserCreateWithoutShelvesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserBooksInput = {
  create: UserCreateWithoutUserBooksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutShelvesInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutUserBooksInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  username?: Maybe<Scalars['String']>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateOneWithoutShelvesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutShelvesInput>;
  create?: InputMaybe<UserCreateWithoutShelvesInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutShelvesInput>;
  upsert?: InputMaybe<UserUpsertWithoutShelvesInput>;
};

export type UserUpdateOneWithoutUserBooksNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserBooksInput>;
  create?: InputMaybe<UserCreateWithoutUserBooksInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUserBooksInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserBooksInput>;
};

export type UserUpdateToOneWithWhereWithoutShelvesInput = {
  data: UserUpdateWithoutShelvesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUserBooksInput = {
  data: UserUpdateWithoutUserBooksInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutShelvesInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserUpdateWithoutUserBooksInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserUpsertWithoutShelvesInput = {
  create: UserCreateWithoutShelvesInput;
  update: UserUpdateWithoutShelvesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUserBooksInput = {
  create: UserCreateWithoutUserBooksInput;
  update: UserUpdateWithoutUserBooksInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  shelves?: InputMaybe<ShelfListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userBooks?: InputMaybe<UserBookListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']>;
  shelves?: InputMaybe<ShelfListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userBooks?: InputMaybe<UserBookListRelationFilter>;
  username?: InputMaybe<Scalars['String']>;
};

export type SignInMutationVariables = Exact<{
  input: LogInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signin: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, expiresIn: number, user: { __typename?: 'User', email: string, username?: string | null, id: string } } };

export type SignUpMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', email: string, id: string, username?: string | null } };

export type RefreshAuthMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshAuthMutation = { __typename?: 'Mutation', refreshAuth: { __typename?: 'RefreshResponse', accessToken: string, refreshToken: string, expiresIn: number } };

export type LogoutMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type CreateBookMutationVariables = Exact<{
  data: BookCreateInput;
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook: { __typename?: 'Book', author?: string | null, categories?: string | null, coverImage?: string | null, description?: string | null, id: string, pageNum?: number | null, pubDate?: string | null, publisher?: string | null, title: string } };

export type CreateShelfMutationVariables = Exact<{
  data: ShelfCreateInput;
}>;


export type CreateShelfMutation = { __typename?: 'Mutation', createShelf: { __typename?: 'Shelf', id: string, name: string, description?: string | null } };

export type DeleteShelfMutationVariables = Exact<{
  where: ShelfWhereUniqueInput;
}>;


export type DeleteShelfMutation = { __typename?: 'Mutation', deleteShelf?: { __typename?: 'Shelf', id: string } | null };

export type UpdateShelfMutationVariables = Exact<{
  data: ShelfUpdateInput;
  where: ShelfWhereUniqueInput;
}>;


export type UpdateShelfMutation = { __typename?: 'Mutation', updateShelf?: { __typename?: 'Shelf', id: string, name: string } | null };

export type UpdateUserBookMutationVariables = Exact<{
  data: UserBookUpdateInput;
  where: UserBookIdentifierCompoundUniqueInput;
}>;


export type UpdateUserBookMutation = { __typename?: 'Mutation', updateUserBook: { __typename?: 'UserBook', status: string } };

export type RemoveUserBookMutationVariables = Exact<{
  where: UserBookIdentifierCompoundUniqueInput;
}>;


export type RemoveUserBookMutation = { __typename?: 'Mutation', removeUserBook: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, email: string } };

export type ShelvesQueryVariables = Exact<{ [key: string]: never; }>;


export type ShelvesQuery = { __typename?: 'Query', shelves: Array<{ __typename?: 'Shelf', id: string, name: string }> };

export type UserBookQueryVariables = Exact<{
  where: UserBookIdentifierCompoundUniqueInput;
}>;


export type UserBookQuery = { __typename?: 'Query', userBook?: { __typename?: 'UserBook', userId: string, bookId: string, status: string } | null };


export const SignInDocument = gql`
    mutation SignIn($input: LogInInput!) {
  signin(logInInput: $input) {
    accessToken
    refreshToken
    expiresIn
    user {
      email
      username
      id
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($input: RegisterInput!) {
  signup(registerInput: $input) {
    email
    id
    username
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const RefreshAuthDocument = gql`
    mutation RefreshAuth {
  refreshAuth {
    accessToken
    refreshToken
    expiresIn
  }
}
    `;
export type RefreshAuthMutationFn = Apollo.MutationFunction<RefreshAuthMutation, RefreshAuthMutationVariables>;

/**
 * __useRefreshAuthMutation__
 *
 * To run a mutation, you first call `useRefreshAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshAuthMutation, { data, loading, error }] = useRefreshAuthMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshAuthMutation(baseOptions?: Apollo.MutationHookOptions<RefreshAuthMutation, RefreshAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshAuthMutation, RefreshAuthMutationVariables>(RefreshAuthDocument, options);
      }
export type RefreshAuthMutationHookResult = ReturnType<typeof useRefreshAuthMutation>;
export type RefreshAuthMutationResult = Apollo.MutationResult<RefreshAuthMutation>;
export type RefreshAuthMutationOptions = Apollo.BaseMutationOptions<RefreshAuthMutation, RefreshAuthMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout($id: String!) {
  logout(id: $id)
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreateBookDocument = gql`
    mutation CreateBook($data: BookCreateInput!) {
  createBook(data: $data) {
    author
    categories
    coverImage
    description
    id
    pageNum
    pubDate
    publisher
    title
  }
}
    `;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, options);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const CreateShelfDocument = gql`
    mutation CreateShelf($data: ShelfCreateInput!) {
  createShelf(data: $data) {
    id
    name
    description
  }
}
    `;
export type CreateShelfMutationFn = Apollo.MutationFunction<CreateShelfMutation, CreateShelfMutationVariables>;

/**
 * __useCreateShelfMutation__
 *
 * To run a mutation, you first call `useCreateShelfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShelfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShelfMutation, { data, loading, error }] = useCreateShelfMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateShelfMutation(baseOptions?: Apollo.MutationHookOptions<CreateShelfMutation, CreateShelfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShelfMutation, CreateShelfMutationVariables>(CreateShelfDocument, options);
      }
export type CreateShelfMutationHookResult = ReturnType<typeof useCreateShelfMutation>;
export type CreateShelfMutationResult = Apollo.MutationResult<CreateShelfMutation>;
export type CreateShelfMutationOptions = Apollo.BaseMutationOptions<CreateShelfMutation, CreateShelfMutationVariables>;
export const DeleteShelfDocument = gql`
    mutation DeleteShelf($where: ShelfWhereUniqueInput!) {
  deleteShelf(where: $where) {
    id
  }
}
    `;
export type DeleteShelfMutationFn = Apollo.MutationFunction<DeleteShelfMutation, DeleteShelfMutationVariables>;

/**
 * __useDeleteShelfMutation__
 *
 * To run a mutation, you first call `useDeleteShelfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShelfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShelfMutation, { data, loading, error }] = useDeleteShelfMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteShelfMutation(baseOptions?: Apollo.MutationHookOptions<DeleteShelfMutation, DeleteShelfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteShelfMutation, DeleteShelfMutationVariables>(DeleteShelfDocument, options);
      }
export type DeleteShelfMutationHookResult = ReturnType<typeof useDeleteShelfMutation>;
export type DeleteShelfMutationResult = Apollo.MutationResult<DeleteShelfMutation>;
export type DeleteShelfMutationOptions = Apollo.BaseMutationOptions<DeleteShelfMutation, DeleteShelfMutationVariables>;
export const UpdateShelfDocument = gql`
    mutation UpdateShelf($data: ShelfUpdateInput!, $where: ShelfWhereUniqueInput!) {
  updateShelf(data: $data, where: $where) {
    id
    name
  }
}
    `;
export type UpdateShelfMutationFn = Apollo.MutationFunction<UpdateShelfMutation, UpdateShelfMutationVariables>;

/**
 * __useUpdateShelfMutation__
 *
 * To run a mutation, you first call `useUpdateShelfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShelfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShelfMutation, { data, loading, error }] = useUpdateShelfMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateShelfMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShelfMutation, UpdateShelfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateShelfMutation, UpdateShelfMutationVariables>(UpdateShelfDocument, options);
      }
export type UpdateShelfMutationHookResult = ReturnType<typeof useUpdateShelfMutation>;
export type UpdateShelfMutationResult = Apollo.MutationResult<UpdateShelfMutation>;
export type UpdateShelfMutationOptions = Apollo.BaseMutationOptions<UpdateShelfMutation, UpdateShelfMutationVariables>;
export const UpdateUserBookDocument = gql`
    mutation UpdateUserBook($data: UserBookUpdateInput!, $where: UserBookIdentifierCompoundUniqueInput!) {
  updateUserBook(data: $data, where: $where) {
    status
  }
}
    `;
export type UpdateUserBookMutationFn = Apollo.MutationFunction<UpdateUserBookMutation, UpdateUserBookMutationVariables>;

/**
 * __useUpdateUserBookMutation__
 *
 * To run a mutation, you first call `useUpdateUserBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserBookMutation, { data, loading, error }] = useUpdateUserBookMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateUserBookMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserBookMutation, UpdateUserBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserBookMutation, UpdateUserBookMutationVariables>(UpdateUserBookDocument, options);
      }
export type UpdateUserBookMutationHookResult = ReturnType<typeof useUpdateUserBookMutation>;
export type UpdateUserBookMutationResult = Apollo.MutationResult<UpdateUserBookMutation>;
export type UpdateUserBookMutationOptions = Apollo.BaseMutationOptions<UpdateUserBookMutation, UpdateUserBookMutationVariables>;
export const RemoveUserBookDocument = gql`
    mutation RemoveUserBook($where: UserBookIdentifierCompoundUniqueInput!) {
  removeUserBook(where: $where)
}
    `;
export type RemoveUserBookMutationFn = Apollo.MutationFunction<RemoveUserBookMutation, RemoveUserBookMutationVariables>;

/**
 * __useRemoveUserBookMutation__
 *
 * To run a mutation, you first call `useRemoveUserBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserBookMutation, { data, loading, error }] = useRemoveUserBookMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemoveUserBookMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserBookMutation, RemoveUserBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserBookMutation, RemoveUserBookMutationVariables>(RemoveUserBookDocument, options);
      }
export type RemoveUserBookMutationHookResult = ReturnType<typeof useRemoveUserBookMutation>;
export type RemoveUserBookMutationResult = Apollo.MutationResult<RemoveUserBookMutation>;
export type RemoveUserBookMutationOptions = Apollo.BaseMutationOptions<RemoveUserBookMutation, RemoveUserBookMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ShelvesDocument = gql`
    query Shelves {
  shelves {
    id
    name
  }
}
    `;

/**
 * __useShelvesQuery__
 *
 * To run a query within a React component, call `useShelvesQuery` and pass it any options that fit your needs.
 * When your component renders, `useShelvesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShelvesQuery({
 *   variables: {
 *   },
 * });
 */
export function useShelvesQuery(baseOptions?: Apollo.QueryHookOptions<ShelvesQuery, ShelvesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShelvesQuery, ShelvesQueryVariables>(ShelvesDocument, options);
      }
export function useShelvesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShelvesQuery, ShelvesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShelvesQuery, ShelvesQueryVariables>(ShelvesDocument, options);
        }
export type ShelvesQueryHookResult = ReturnType<typeof useShelvesQuery>;
export type ShelvesLazyQueryHookResult = ReturnType<typeof useShelvesLazyQuery>;
export type ShelvesQueryResult = Apollo.QueryResult<ShelvesQuery, ShelvesQueryVariables>;
export const UserBookDocument = gql`
    query UserBook($where: UserBookIdentifierCompoundUniqueInput!) {
  userBook(where: $where) {
    userId
    bookId
    status
  }
}
    `;

/**
 * __useUserBookQuery__
 *
 * To run a query within a React component, call `useUserBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserBookQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserBookQuery(baseOptions: Apollo.QueryHookOptions<UserBookQuery, UserBookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserBookQuery, UserBookQueryVariables>(UserBookDocument, options);
      }
export function useUserBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserBookQuery, UserBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserBookQuery, UserBookQueryVariables>(UserBookDocument, options);
        }
export type UserBookQueryHookResult = ReturnType<typeof useUserBookQuery>;
export type UserBookLazyQueryHookResult = ReturnType<typeof useUserBookLazyQuery>;
export type UserBookQueryResult = Apollo.QueryResult<UserBookQuery, UserBookQueryVariables>;