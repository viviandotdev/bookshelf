import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: { input: any; output: any; }
};

export enum Action {
  Comment = 'COMMENT',
  Like = 'LIKE',
  Log = 'LOG',
  Rate = 'RATE',
  Review = 'REVIEW',
  Shelve = 'SHELVE',
  StatusUpdate = 'STATUS_UPDATE'
}

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int']['output'];
  access_token: Scalars['Int']['output'];
  expires_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  id_token: Scalars['Int']['output'];
  provider: Scalars['Int']['output'];
  providerAccountId: Scalars['Int']['output'];
  refresh_token: Scalars['Int']['output'];
  scope: Scalars['Int']['output'];
  session_state: Scalars['Int']['output'];
  token_type: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
};

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringFilter>;
  expires_at?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringFilter>;
  scope?: InputMaybe<StringFilter>;
  session_state?: InputMaybe<StringFilter>;
  token_type?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  expires_at?: Maybe<Scalars['Int']['output']>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringFilter>;
  expires_at?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringFilter>;
  scope?: InputMaybe<StringFilter>;
  session_state?: InputMaybe<StringFilter>;
  token_type?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringFilter>;
  expires_at?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
  refresh_token?: InputMaybe<StringFilter>;
  scope?: InputMaybe<StringFilter>;
  session_state?: InputMaybe<StringFilter>;
  token_type?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ActivitiesResponse = {
  __typename?: 'ActivitiesResponse';
  activities?: Maybe<Array<AuditLog>>;
  hasMore: Scalars['Boolean']['output'];
  totalActivities: Scalars['Float']['output'];
};

export type AuditLog = {
  __typename?: 'AuditLog';
  action: Action;
  actionContent?: Maybe<Scalars['String']['output']>;
  book?: Maybe<Book>;
  bookId: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['Timestamp']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type AuditLogCountAggregate = {
  __typename?: 'AuditLogCountAggregate';
  _all: Scalars['Int']['output'];
  action: Scalars['Int']['output'];
  actionContent: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AuditLogCreateManyBookInput = {
  action: Action;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userId: Scalars['String']['input'];
};

export type AuditLogCreateManyBookInputEnvelope = {
  data: Array<AuditLogCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuditLogCreateManyUserInput = {
  action: Action;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  bookId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type AuditLogCreateManyUserInputEnvelope = {
  data: Array<AuditLogCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuditLogCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuditLogCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<AuditLogCreateWithoutBookInput>>;
  createMany?: InputMaybe<AuditLogCreateManyBookInputEnvelope>;
};

export type AuditLogCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuditLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AuditLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<AuditLogCreateManyUserInputEnvelope>;
};

export type AuditLogCreateOrConnectWithoutBookInput = {
  create: AuditLogCreateWithoutBookInput;
  where: AuditLogWhereUniqueInput;
};

export type AuditLogCreateOrConnectWithoutUserInput = {
  create: AuditLogCreateWithoutUserInput;
  where: AuditLogWhereUniqueInput;
};

export type AuditLogCreateWithoutBookInput = {
  action: Action;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutAuditLogInput>;
};

export type AuditLogCreateWithoutUserInput = {
  action: Action;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  book?: InputMaybe<BookCreateNestedOneWithoutAuditLogInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type AuditLogListRelationFilter = {
  every?: InputMaybe<AuditLogWhereInput>;
  none?: InputMaybe<AuditLogWhereInput>;
  some?: InputMaybe<AuditLogWhereInput>;
};

export type AuditLogMaxAggregate = {
  __typename?: 'AuditLogMaxAggregate';
  action?: Maybe<Action>;
  actionContent?: Maybe<Scalars['String']['output']>;
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AuditLogMinAggregate = {
  __typename?: 'AuditLogMinAggregate';
  action?: Maybe<Action>;
  actionContent?: Maybe<Scalars['String']['output']>;
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AuditLogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AuditLogOrderByWithRelationInput = {
  action?: InputMaybe<SortOrder>;
  actionContent?: InputMaybe<SortOrderInput>;
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AuditLogScalarWhereInput = {
  AND?: InputMaybe<Array<AuditLogScalarWhereInput>>;
  NOT?: InputMaybe<Array<AuditLogScalarWhereInput>>;
  OR?: InputMaybe<Array<AuditLogScalarWhereInput>>;
  action?: InputMaybe<EnumActionFilter>;
  actionContent?: InputMaybe<StringFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AuditLogUpdateManyMutationInput = {
  action?: InputMaybe<Action>;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type AuditLogUpdateManyWithWhereWithoutBookInput = {
  data: AuditLogUpdateManyMutationInput;
  where: AuditLogScalarWhereInput;
};

export type AuditLogUpdateManyWithWhereWithoutUserInput = {
  data: AuditLogUpdateManyMutationInput;
  where: AuditLogScalarWhereInput;
};

export type AuditLogUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuditLogCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<AuditLogCreateWithoutBookInput>>;
  createMany?: InputMaybe<AuditLogCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AuditLogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  set?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  update?: InputMaybe<Array<AuditLogUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<AuditLogUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<AuditLogUpsertWithWhereUniqueWithoutBookInput>>;
};

export type AuditLogUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuditLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AuditLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<AuditLogCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AuditLogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  set?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  update?: InputMaybe<Array<AuditLogUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AuditLogUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AuditLogUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AuditLogUpdateWithWhereUniqueWithoutBookInput = {
  data: AuditLogUpdateWithoutBookInput;
  where: AuditLogWhereUniqueInput;
};

export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
  data: AuditLogUpdateWithoutUserInput;
  where: AuditLogWhereUniqueInput;
};

export type AuditLogUpdateWithoutBookInput = {
  action?: InputMaybe<Action>;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutAuditLogNestedInput>;
};

export type AuditLogUpdateWithoutUserInput = {
  action?: InputMaybe<Action>;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  book?: InputMaybe<BookUpdateOneWithoutAuditLogNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type AuditLogUpsertWithWhereUniqueWithoutBookInput = {
  create: AuditLogCreateWithoutBookInput;
  update: AuditLogUpdateWithoutBookInput;
  where: AuditLogWhereUniqueInput;
};

export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
  create: AuditLogCreateWithoutUserInput;
  update: AuditLogUpdateWithoutUserInput;
  where: AuditLogWhereUniqueInput;
};

export type AuditLogWhereInput = {
  AND?: InputMaybe<Array<AuditLogWhereInput>>;
  NOT?: InputMaybe<Array<AuditLogWhereInput>>;
  OR?: InputMaybe<Array<AuditLogWhereInput>>;
  action?: InputMaybe<EnumActionFilter>;
  actionContent?: InputMaybe<StringFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AuditLogWhereUniqueInput = {
  AND?: InputMaybe<Array<AuditLogWhereInput>>;
  NOT?: InputMaybe<Array<AuditLogWhereInput>>;
  OR?: InputMaybe<Array<AuditLogWhereInput>>;
  action?: InputMaybe<EnumActionFilter>;
  actionContent?: InputMaybe<StringFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken?: Maybe<Scalars['String']['output']>;
  expiresIn?: Maybe<Scalars['Float']['output']>;
  isNewUser?: Maybe<Scalars['Boolean']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  user: User;
  verificationToken?: Maybe<Scalars['String']['output']>;
};

export type Book = {
  __typename?: 'Book';
  AuditLog?: Maybe<Array<AuditLog>>;
  _count: BookCount;
  authors?: Maybe<Array<Scalars['String']['output']>>;
  covers?: Maybe<Array<Cover>>;
  id: Scalars['ID']['output'];
  identifiers?: Maybe<Array<Identifier>>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  ratings?: Maybe<Array<Rating>>;
  reviews?: Maybe<Array<Review>>;
  slug: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  userBook?: Maybe<UserBook>;
  yearPublished?: Maybe<Scalars['String']['output']>;
};

export type BookAvgAggregate = {
  __typename?: 'BookAvgAggregate';
  pageCount?: Maybe<Scalars['Float']['output']>;
};

export type BookCount = {
  __typename?: 'BookCount';
  AuditLog: Scalars['Int']['output'];
  covers: Scalars['Int']['output'];
  identifiers: Scalars['Int']['output'];
  ratings: Scalars['Int']['output'];
  reviews: Scalars['Int']['output'];
};

export type BookCountAggregate = {
  __typename?: 'BookCountAggregate';
  _all: Scalars['Int']['output'];
  authors: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  subtitle: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  yearPublished: Scalars['Int']['output'];
};

export type BookCountsResponse = {
  __typename?: 'BookCountsResponse';
  finishedCount: Scalars['Float']['output'];
  readingCount: Scalars['Float']['output'];
  upNextCount: Scalars['Float']['output'];
  wantsToReadCount: Scalars['Float']['output'];
};

export type BookCreateNestedOneWithoutAuditLogInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutAuditLogInput>;
  create?: InputMaybe<BookCreateWithoutAuditLogInput>;
};

export type BookCreateNestedOneWithoutCoversInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutCoversInput>;
  create?: InputMaybe<BookCreateWithoutCoversInput>;
};

export type BookCreateNestedOneWithoutIdentifiersInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutIdentifiersInput>;
  create?: InputMaybe<BookCreateWithoutIdentifiersInput>;
};

export type BookCreateNestedOneWithoutRatingsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutRatingsInput>;
  create?: InputMaybe<BookCreateWithoutRatingsInput>;
};

export type BookCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<BookCreateWithoutReviewsInput>;
};

export type BookCreateNestedOneWithoutUserBookInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutUserBookInput>;
  create?: InputMaybe<BookCreateWithoutUserBookInput>;
};

export type BookCreateOrConnectWithoutAuditLogInput = {
  create: BookCreateWithoutAuditLogInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutCoversInput = {
  create: BookCreateWithoutCoversInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutIdentifiersInput = {
  create: BookCreateWithoutIdentifiersInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutRatingsInput = {
  create: BookCreateWithoutRatingsInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutReviewsInput = {
  create: BookCreateWithoutReviewsInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutUserBookInput = {
  create: BookCreateWithoutUserBookInput;
  where: BookWhereUniqueInput;
};

export type BookCreateWithoutAuditLogInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverCreateNestedManyWithoutBookInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<IdentifierCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  ratings?: InputMaybe<RatingCreateNestedManyWithoutBookInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  slug: Scalars['String']['input'];
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutBookInput>;
  yearPublished?: InputMaybe<Scalars['String']['input']>;
};

export type BookCreateWithoutCoversInput = {
  AuditLog?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<IdentifierCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  ratings?: InputMaybe<RatingCreateNestedManyWithoutBookInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  slug: Scalars['String']['input'];
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutBookInput>;
  yearPublished?: InputMaybe<Scalars['String']['input']>;
};

export type BookCreateWithoutIdentifiersInput = {
  AuditLog?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverCreateNestedManyWithoutBookInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  ratings?: InputMaybe<RatingCreateNestedManyWithoutBookInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  slug: Scalars['String']['input'];
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutBookInput>;
  yearPublished?: InputMaybe<Scalars['String']['input']>;
};

export type BookCreateWithoutRatingsInput = {
  AuditLog?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverCreateNestedManyWithoutBookInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<IdentifierCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  slug: Scalars['String']['input'];
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutBookInput>;
  yearPublished?: InputMaybe<Scalars['String']['input']>;
};

export type BookCreateWithoutReviewsInput = {
  AuditLog?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverCreateNestedManyWithoutBookInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<IdentifierCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  ratings?: InputMaybe<RatingCreateNestedManyWithoutBookInput>;
  slug: Scalars['String']['input'];
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutBookInput>;
  yearPublished?: InputMaybe<Scalars['String']['input']>;
};

export type BookCreateWithoutUserBookInput = {
  AuditLog?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverCreateNestedManyWithoutBookInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<IdentifierCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  ratings?: InputMaybe<RatingCreateNestedManyWithoutBookInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  slug: Scalars['String']['input'];
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  yearPublished?: InputMaybe<Scalars['String']['input']>;
};

export type BookDataInput = {
  authors: Array<Scalars['String']['input']>;
  covers: Array<CoverCreateInput>;
  identifiers: Array<IdentifierCreateInput>;
  pageCount: Scalars['Float']['input'];
  ratings: Array<RatingCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  yearPublished?: InputMaybe<Scalars['String']['input']>;
};

export type BookItemInput = {
  id: Scalars['String']['input'];
  order: Scalars['Float']['input'];
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type BookMaxAggregate = {
  __typename?: 'BookMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  yearPublished?: Maybe<Scalars['String']['output']>;
};

export type BookMinAggregate = {
  __typename?: 'BookMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  yearPublished?: Maybe<Scalars['String']['output']>;
};

export type BookOrderByWithRelationInput = {
  AuditLog?: InputMaybe<AuditLogOrderByRelationAggregateInput>;
  authors?: InputMaybe<SortOrder>;
  covers?: InputMaybe<CoverOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  identifiers?: InputMaybe<IdentifierOrderByRelationAggregateInput>;
  pageCount?: InputMaybe<SortOrderInput>;
  ratings?: InputMaybe<RatingOrderByRelationAggregateInput>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  subtitle?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  userBook?: InputMaybe<UserBookOrderByWithRelationInput>;
  yearPublished?: InputMaybe<SortOrderInput>;
};

export type BookRelationFilter = {
  is?: InputMaybe<BookWhereInput>;
  isNot?: InputMaybe<BookWhereInput>;
};

export type BookSumAggregate = {
  __typename?: 'BookSumAggregate';
  pageCount?: Maybe<Scalars['Int']['output']>;
};

export type BookUpdateOneRequiredWithoutUserBookNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutUserBookInput>;
  create?: InputMaybe<BookCreateWithoutUserBookInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutUserBookInput>;
  upsert?: InputMaybe<BookUpsertWithoutUserBookInput>;
};

export type BookUpdateOneWithoutAuditLogNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutAuditLogInput>;
  create?: InputMaybe<BookCreateWithoutAuditLogInput>;
  delete?: InputMaybe<BookWhereInput>;
  disconnect?: InputMaybe<BookWhereInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutAuditLogInput>;
  upsert?: InputMaybe<BookUpsertWithoutAuditLogInput>;
};

export type BookUpdateOneWithoutReviewsNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<BookCreateWithoutReviewsInput>;
  delete?: InputMaybe<BookWhereInput>;
  disconnect?: InputMaybe<BookWhereInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutReviewsInput>;
  upsert?: InputMaybe<BookUpsertWithoutReviewsInput>;
};

export type BookUpdateToOneWithWhereWithoutAuditLogInput = {
  data: BookUpdateWithoutAuditLogInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateToOneWithWhereWithoutReviewsInput = {
  data: BookUpdateWithoutReviewsInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateToOneWithWhereWithoutUserBookInput = {
  data: BookUpdateWithoutUserBookInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateWithoutAuditLogInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverUpdateManyWithoutBookNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<IdentifierUpdateManyWithoutBookNestedInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  ratings?: InputMaybe<RatingUpdateManyWithoutBookNestedInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutBookNestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userBook?: InputMaybe<UserBookUpdateOneWithoutBookNestedInput>;
  yearPublished?: InputMaybe<Scalars['String']['input']>;
};

export type BookUpdateWithoutReviewsInput = {
  AuditLog?: InputMaybe<AuditLogUpdateManyWithoutBookNestedInput>;
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverUpdateManyWithoutBookNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<IdentifierUpdateManyWithoutBookNestedInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  ratings?: InputMaybe<RatingUpdateManyWithoutBookNestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userBook?: InputMaybe<UserBookUpdateOneWithoutBookNestedInput>;
  yearPublished?: InputMaybe<Scalars['String']['input']>;
};

export type BookUpdateWithoutUserBookInput = {
  AuditLog?: InputMaybe<AuditLogUpdateManyWithoutBookNestedInput>;
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverUpdateManyWithoutBookNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<IdentifierUpdateManyWithoutBookNestedInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  ratings?: InputMaybe<RatingUpdateManyWithoutBookNestedInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutBookNestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  yearPublished?: InputMaybe<Scalars['String']['input']>;
};

export type BookUpsertWithoutAuditLogInput = {
  create: BookCreateWithoutAuditLogInput;
  update: BookUpdateWithoutAuditLogInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpsertWithoutReviewsInput = {
  create: BookCreateWithoutReviewsInput;
  update: BookUpdateWithoutReviewsInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpsertWithoutUserBookInput = {
  create: BookCreateWithoutUserBookInput;
  update: BookUpdateWithoutUserBookInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookWhereInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  AuditLog?: InputMaybe<AuditLogListRelationFilter>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  authors?: InputMaybe<StringListFilter>;
  covers?: InputMaybe<CoverListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  identifiers?: InputMaybe<IdentifierListRelationFilter>;
  pageCount?: InputMaybe<IntFilter>;
  ratings?: InputMaybe<RatingListRelationFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  yearPublished?: InputMaybe<StringFilter>;
};

export type BookWhereUniqueInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  AuditLog?: InputMaybe<AuditLogListRelationFilter>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  authors?: InputMaybe<StringListFilter>;
  covers?: InputMaybe<CoverListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<IdentifierListRelationFilter>;
  pageCount?: InputMaybe<IntFilter>;
  ratings?: InputMaybe<RatingListRelationFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  yearPublished?: InputMaybe<StringFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BoolFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  review?: Maybe<Review>;
  reviewId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  _all: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  reviewId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type CommentCreateManyReviewInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateManyReviewInputEnvelope = {
  data: Array<CommentCreateManyReviewInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateManyUserInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  reviewId?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateManyUserInputEnvelope = {
  data: Array<CommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateNestedManyWithoutReviewInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutReviewInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutReviewInput>>;
  createMany?: InputMaybe<CommentCreateManyReviewInputEnvelope>;
};

export type CommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
};

export type CommentCreateOrConnectWithoutReviewInput = {
  create: CommentCreateWithoutReviewInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutReviewInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateWithoutUserInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<ReviewCreateNestedOneWithoutCommentsInput>;
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  reviewId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  reviewId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  reviewId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CommentUpdateManyMutationInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CommentUpdateManyWithWhereWithoutReviewInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutUserInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutReviewNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutReviewInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutReviewInput>>;
  createMany?: InputMaybe<CommentCreateManyReviewInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutReviewInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutReviewInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutReviewInput>>;
};

export type CommentUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutReviewInput = {
  data: CommentUpdateWithoutReviewInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutUserInput = {
  data: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutReviewInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutCommentsNestedInput>;
};

export type CommentUpdateWithoutUserInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<ReviewUpdateOneWithoutCommentsNestedInput>;
};

export type CommentUpsertWithWhereUniqueWithoutReviewInput = {
  create: CommentCreateWithoutReviewInput;
  update: CommentUpdateWithoutReviewInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  update: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  review?: InputMaybe<ReviewRelationFilter>;
  reviewId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<ReviewRelationFilter>;
  reviewId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Cover = {
  __typename?: 'Cover';
  book?: Maybe<Book>;
  bookId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  size: Size;
  source: Source;
  url: Scalars['String']['output'];
};

export type CoverCountAggregate = {
  __typename?: 'CoverCountAggregate';
  _all: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  size: Scalars['Int']['output'];
  source: Scalars['Int']['output'];
  url: Scalars['Int']['output'];
};

export type CoverCreateInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutCoversInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  size: Size;
  source: Source;
  url: Scalars['String']['input'];
};

export type CoverCreateManyBookInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  size: Size;
  source: Source;
  url: Scalars['String']['input'];
};

export type CoverCreateManyBookInputEnvelope = {
  data: Array<CoverCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CoverCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<CoverWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CoverCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<CoverCreateWithoutBookInput>>;
  createMany?: InputMaybe<CoverCreateManyBookInputEnvelope>;
};

export type CoverCreateOrConnectWithoutBookInput = {
  create: CoverCreateWithoutBookInput;
  where: CoverWhereUniqueInput;
};

export type CoverCreateWithoutBookInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  size: Size;
  source: Source;
  url: Scalars['String']['input'];
};

export type CoverListRelationFilter = {
  every?: InputMaybe<CoverWhereInput>;
  none?: InputMaybe<CoverWhereInput>;
  some?: InputMaybe<CoverWhereInput>;
};

export type CoverMaxAggregate = {
  __typename?: 'CoverMaxAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Size>;
  source?: Maybe<Source>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CoverMinAggregate = {
  __typename?: 'CoverMinAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Size>;
  source?: Maybe<Source>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CoverOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CoverScalarWhereInput = {
  AND?: InputMaybe<Array<CoverScalarWhereInput>>;
  NOT?: InputMaybe<Array<CoverScalarWhereInput>>;
  OR?: InputMaybe<Array<CoverScalarWhereInput>>;
  bookId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  size?: InputMaybe<EnumSizeFilter>;
  source?: InputMaybe<EnumSourceFilter>;
  url?: InputMaybe<StringFilter>;
};

export type CoverUpdateManyMutationInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Size>;
  source?: InputMaybe<Source>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CoverUpdateManyWithWhereWithoutBookInput = {
  data: CoverUpdateManyMutationInput;
  where: CoverScalarWhereInput;
};

export type CoverUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<CoverWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CoverCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<CoverCreateWithoutBookInput>>;
  createMany?: InputMaybe<CoverCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<CoverWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CoverScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CoverWhereUniqueInput>>;
  set?: InputMaybe<Array<CoverWhereUniqueInput>>;
  update?: InputMaybe<Array<CoverUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<CoverUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<CoverUpsertWithWhereUniqueWithoutBookInput>>;
};

export type CoverUpdateWithWhereUniqueWithoutBookInput = {
  data: CoverUpdateWithoutBookInput;
  where: CoverWhereUniqueInput;
};

export type CoverUpdateWithoutBookInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Size>;
  source?: InputMaybe<Source>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CoverUpsertWithWhereUniqueWithoutBookInput = {
  create: CoverCreateWithoutBookInput;
  update: CoverUpdateWithoutBookInput;
  where: CoverWhereUniqueInput;
};

export type CoverWhereInput = {
  AND?: InputMaybe<Array<CoverWhereInput>>;
  NOT?: InputMaybe<Array<CoverWhereInput>>;
  OR?: InputMaybe<Array<CoverWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  size?: InputMaybe<EnumSizeFilter>;
  source?: InputMaybe<EnumSourceFilter>;
  url?: InputMaybe<StringFilter>;
};

export type CoverWhereUniqueInput = {
  AND?: InputMaybe<Array<CoverWhereInput>>;
  NOT?: InputMaybe<Array<CoverWhereInput>>;
  OR?: InputMaybe<Array<CoverWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<EnumSizeFilter>;
  source?: InputMaybe<EnumSourceFilter>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['Timestamp']['input']>;
  gt?: InputMaybe<Scalars['Timestamp']['input']>;
  gte?: InputMaybe<Scalars['Timestamp']['input']>;
  in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  lt?: InputMaybe<Scalars['Timestamp']['input']>;
  lte?: InputMaybe<Scalars['Timestamp']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
};

export type EnumActionFilter = {
  equals?: InputMaybe<Action>;
  in?: InputMaybe<Array<Action>>;
  not?: InputMaybe<EnumActionFilter>;
  notIn?: InputMaybe<Array<Action>>;
};

export type EnumProgress_TypeFilter = {
  equals?: InputMaybe<Progress_Type>;
  in?: InputMaybe<Array<Progress_Type>>;
  not?: InputMaybe<EnumProgress_TypeFilter>;
  notIn?: InputMaybe<Array<Progress_Type>>;
};

export type EnumReading_StatusFilter = {
  equals?: InputMaybe<Reading_Status>;
  in?: InputMaybe<Array<Reading_Status>>;
  not?: InputMaybe<EnumReading_StatusFilter>;
  notIn?: InputMaybe<Array<Reading_Status>>;
};

export type EnumSizeFilter = {
  equals?: InputMaybe<Size>;
  in?: InputMaybe<Array<Size>>;
  not?: InputMaybe<EnumSizeFilter>;
  notIn?: InputMaybe<Array<Size>>;
};

export type EnumSourceFilter = {
  equals?: InputMaybe<Source>;
  in?: InputMaybe<Array<Source>>;
  not?: InputMaybe<EnumSourceFilter>;
  notIn?: InputMaybe<Array<Source>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Identifier = {
  __typename?: 'Identifier';
  book?: Maybe<Book>;
  bookId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  source: Source;
  sourceId: Scalars['String']['output'];
};

export type IdentifierCountAggregate = {
  __typename?: 'IdentifierCountAggregate';
  _all: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  source: Scalars['Int']['output'];
  sourceId: Scalars['Int']['output'];
};

export type IdentifierCreateInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutIdentifiersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  source: Source;
  sourceId: Scalars['String']['input'];
};

export type IdentifierCreateManyBookInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  source: Source;
  sourceId: Scalars['String']['input'];
};

export type IdentifierCreateManyBookInputEnvelope = {
  data: Array<IdentifierCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdentifierCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<IdentifierWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IdentifierCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<IdentifierCreateWithoutBookInput>>;
  createMany?: InputMaybe<IdentifierCreateManyBookInputEnvelope>;
};

export type IdentifierCreateOrConnectWithoutBookInput = {
  create: IdentifierCreateWithoutBookInput;
  where: IdentifierWhereUniqueInput;
};

export type IdentifierCreateWithoutBookInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  source: Source;
  sourceId: Scalars['String']['input'];
};

export type IdentifierListRelationFilter = {
  every?: InputMaybe<IdentifierWhereInput>;
  none?: InputMaybe<IdentifierWhereInput>;
  some?: InputMaybe<IdentifierWhereInput>;
};

export type IdentifierMaxAggregate = {
  __typename?: 'IdentifierMaxAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Source>;
  sourceId?: Maybe<Scalars['String']['output']>;
};

export type IdentifierMinAggregate = {
  __typename?: 'IdentifierMinAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Source>;
  sourceId?: Maybe<Scalars['String']['output']>;
};

export type IdentifierOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type IdentifierScalarWhereInput = {
  AND?: InputMaybe<Array<IdentifierScalarWhereInput>>;
  NOT?: InputMaybe<Array<IdentifierScalarWhereInput>>;
  OR?: InputMaybe<Array<IdentifierScalarWhereInput>>;
  bookId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  source?: InputMaybe<EnumSourceFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type IdentifierUpdateManyMutationInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Source>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
};

export type IdentifierUpdateManyWithWhereWithoutBookInput = {
  data: IdentifierUpdateManyMutationInput;
  where: IdentifierScalarWhereInput;
};

export type IdentifierUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<IdentifierWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IdentifierCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<IdentifierCreateWithoutBookInput>>;
  createMany?: InputMaybe<IdentifierCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<IdentifierWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IdentifierScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IdentifierWhereUniqueInput>>;
  set?: InputMaybe<Array<IdentifierWhereUniqueInput>>;
  update?: InputMaybe<Array<IdentifierUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<IdentifierUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<IdentifierUpsertWithWhereUniqueWithoutBookInput>>;
};

export type IdentifierUpdateWithWhereUniqueWithoutBookInput = {
  data: IdentifierUpdateWithoutBookInput;
  where: IdentifierWhereUniqueInput;
};

export type IdentifierUpdateWithoutBookInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Source>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
};

export type IdentifierUpsertWithWhereUniqueWithoutBookInput = {
  create: IdentifierCreateWithoutBookInput;
  update: IdentifierUpdateWithoutBookInput;
  where: IdentifierWhereUniqueInput;
};

export type IdentifierWhereInput = {
  AND?: InputMaybe<Array<IdentifierWhereInput>>;
  NOT?: InputMaybe<Array<IdentifierWhereInput>>;
  OR?: InputMaybe<Array<IdentifierWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  source?: InputMaybe<EnumSourceFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type IdentifierWhereUniqueInput = {
  AND?: InputMaybe<Array<IdentifierWhereInput>>;
  NOT?: InputMaybe<Array<IdentifierWhereInput>>;
  OR?: InputMaybe<Array<IdentifierWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<EnumSourceFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LogInInput = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type MeResponse = {
  __typename?: 'MeResponse';
  email?: Maybe<Scalars['String']['output']>;
  isOAuth?: Maybe<Scalars['Boolean']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBookToShelf: UserBook;
  addIdentifierToBook: Book;
  createIdentifiers: Array<Identifier>;
  createShelf: Shelf;
  createUserBook: UserBook;
  deleteShelf: Shelf;
  follow: User;
  forgotPassword: Scalars['Boolean']['output'];
  importUserBooks: Scalars['Boolean']['output'];
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  oAuth: AuthResponse;
  refreshAuth: RefreshResponse;
  register: User;
  removeBookFromShelf: Scalars['Boolean']['output'];
  removeUserBook: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  updateEmail: User;
  updateReadDate: ReadDate;
  updateReadingProgress: ReadingProgress;
  updateShelf: Shelf;
  updateUser: User;
  updateUserBook: UserBook;
  updateUserBookOrder: Array<UserBook>;
  verifyToken: AuthResponse;
};


export type MutationAddBookToShelfArgs = {
  shelf: Scalars['String']['input'];
  where: UserBookWhereUniqueInput;
};


export type MutationAddIdentifierToBookArgs = {
  identifier: IdentifierCreateInput;
  where: BookWhereUniqueInput;
};


export type MutationCreateIdentifiersArgs = {
  identifiers: Array<IdentifierCreateInput>;
};


export type MutationCreateShelfArgs = {
  data: ShelfCreateInput;
};


export type MutationCreateUserBookArgs = {
  data: BookDataInput;
};


export type MutationDeleteShelfArgs = {
  where: ShelfWhereUniqueInput;
};


export type MutationFollowArgs = {
  value: Scalars['Boolean']['input'];
  where: UserWhereUniqueInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationImportUserBooksArgs = {
  content: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  logInInput: LogInInput;
};


export type MutationLogoutArgs = {
  id: Scalars['String']['input'];
};


export type MutationOAuthArgs = {
  oAuthInput: OAuthInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationRemoveBookFromShelfArgs = {
  shelf: Scalars['String']['input'];
  where: UserBookWhereUniqueInput;
};


export type MutationRemoveUserBookArgs = {
  where: UserBookWhereUniqueInput;
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationUpdateEmailArgs = {
  data: UpdateEmailInput;
};


export type MutationUpdateReadDateArgs = {
  finishedDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateReadingProgressArgs = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  progress: Scalars['Int']['input'];
  readingProgressId: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type MutationUpdateShelfArgs = {
  data: ShelfUpdateInput;
  where: ShelfWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationUpdateUserBookArgs = {
  data: UserBookUpdateInput;
  where: UserBookWhereUniqueInput;
};


export type MutationUpdateUserBookOrderArgs = {
  data: UserBookUpdateOrderInput;
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String']['input'];
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type OAuthInput = {
  access_token: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  scope: Scalars['String']['input'];
  token_type: Scalars['String']['input'];
  type: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export enum Progress_Type {
  Pages = 'PAGES',
  Percentage = 'PERCENTAGE'
}

export type PasswordResetTokenCountAggregate = {
  __typename?: 'PasswordResetTokenCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type PasswordResetTokenMaxAggregate = {
  __typename?: 'PasswordResetTokenMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type PasswordResetTokenMinAggregate = {
  __typename?: 'PasswordResetTokenMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  auditLogs: ActivitiesResponse;
  bookCountsByUserId: BookCountsResponse;
  booksByShelf?: Maybe<Shelf>;
  countUserBooks: Scalars['Int']['output'];
  findBookByIdentifier?: Maybe<Book>;
  getBookByIdentifiers: Array<Identifier>;
  getMyBookShelves?: Maybe<Array<UserBookShelves>>;
  getUserBooks: UserBooksResponse;
  me: MeResponse;
  readDates: Array<ReadDate>;
  searchMyLibrary: Array<Book>;
  shelves?: Maybe<Array<Shelf>>;
  user?: Maybe<User>;
  userBook?: Maybe<UserBook>;
};


export type QueryAuditLogsArgs = {
  action?: InputMaybe<Action>;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  orderBy?: InputMaybe<AuditLogOrderByWithRelationInput>;
  where?: InputMaybe<UserBookWhereUniqueInput>;
};


export type QueryBookCountsByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryBooksByShelfArgs = {
  slug: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type QueryCountUserBooksArgs = {
  where?: InputMaybe<UserBookWhereInput>;
};


export type QueryFindBookByIdentifierArgs = {
  identifier: IdentifierCreateInput;
};


export type QueryGetBookByIdentifiersArgs = {
  identifiers: Array<IdentifierCreateInput>;
};


export type QueryGetMyBookShelvesArgs = {
  where?: InputMaybe<UserBookWhereUniqueInput>;
};


export type QueryGetUserBooksArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  orderBy?: InputMaybe<UserBookOrderByWithRelationInput>;
  where?: InputMaybe<UserBookWhereInput>;
};


export type QueryReadDatesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  userBookIds: Array<Scalars['String']['input']>;
};


export type QuerySearchMyLibraryArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  query: Scalars['String']['input'];
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserBookArgs = {
  where: BookWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Reading_Status {
  DidNotFinish = 'DID_NOT_FINISH',
  Finished = 'FINISHED',
  Reading = 'READING',
  UpNext = 'UP_NEXT',
  WantToRead = 'WANT_TO_READ'
}

export type Rating = {
  __typename?: 'Rating';
  book?: Maybe<Book>;
  bookId?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  maxScore: Scalars['Float']['output'];
  score: Scalars['Float']['output'];
  source: Source;
};

export type RatingAvgAggregate = {
  __typename?: 'RatingAvgAggregate';
  count?: Maybe<Scalars['Float']['output']>;
  maxScore?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

export type RatingCountAggregate = {
  __typename?: 'RatingCountAggregate';
  _all: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  maxScore: Scalars['Int']['output'];
  score: Scalars['Int']['output'];
  source: Scalars['Int']['output'];
};

export type RatingCreateInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutRatingsInput>;
  count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxScore: Scalars['Float']['input'];
  score: Scalars['Float']['input'];
  source: Source;
};

export type RatingCreateManyBookInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxScore: Scalars['Float']['input'];
  score: Scalars['Float']['input'];
  source: Source;
};

export type RatingCreateManyBookInputEnvelope = {
  data: Array<RatingCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RatingCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<RatingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RatingCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<RatingCreateWithoutBookInput>>;
  createMany?: InputMaybe<RatingCreateManyBookInputEnvelope>;
};

export type RatingCreateOrConnectWithoutBookInput = {
  create: RatingCreateWithoutBookInput;
  where: RatingWhereUniqueInput;
};

export type RatingCreateWithoutBookInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxScore: Scalars['Float']['input'];
  score: Scalars['Float']['input'];
  source: Source;
};

export type RatingListRelationFilter = {
  every?: InputMaybe<RatingWhereInput>;
  none?: InputMaybe<RatingWhereInput>;
  some?: InputMaybe<RatingWhereInput>;
};

export type RatingMaxAggregate = {
  __typename?: 'RatingMaxAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxScore?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Source>;
};

export type RatingMinAggregate = {
  __typename?: 'RatingMinAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxScore?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Source>;
};

export type RatingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RatingScalarWhereInput = {
  AND?: InputMaybe<Array<RatingScalarWhereInput>>;
  NOT?: InputMaybe<Array<RatingScalarWhereInput>>;
  OR?: InputMaybe<Array<RatingScalarWhereInput>>;
  bookId?: InputMaybe<StringFilter>;
  count?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  maxScore?: InputMaybe<FloatFilter>;
  score?: InputMaybe<FloatFilter>;
  source?: InputMaybe<EnumSourceFilter>;
};

export type RatingSumAggregate = {
  __typename?: 'RatingSumAggregate';
  count?: Maybe<Scalars['Int']['output']>;
  maxScore?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

export type RatingUpdateManyMutationInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxScore?: InputMaybe<Scalars['Float']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  source?: InputMaybe<Source>;
};

export type RatingUpdateManyWithWhereWithoutBookInput = {
  data: RatingUpdateManyMutationInput;
  where: RatingScalarWhereInput;
};

export type RatingUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<RatingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RatingCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<RatingCreateWithoutBookInput>>;
  createMany?: InputMaybe<RatingCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<RatingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RatingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RatingWhereUniqueInput>>;
  set?: InputMaybe<Array<RatingWhereUniqueInput>>;
  update?: InputMaybe<Array<RatingUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<RatingUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<RatingUpsertWithWhereUniqueWithoutBookInput>>;
};

export type RatingUpdateWithWhereUniqueWithoutBookInput = {
  data: RatingUpdateWithoutBookInput;
  where: RatingWhereUniqueInput;
};

export type RatingUpdateWithoutBookInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxScore?: InputMaybe<Scalars['Float']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  source?: InputMaybe<Source>;
};

export type RatingUpsertWithWhereUniqueWithoutBookInput = {
  create: RatingCreateWithoutBookInput;
  update: RatingUpdateWithoutBookInput;
  where: RatingWhereUniqueInput;
};

export type RatingWhereInput = {
  AND?: InputMaybe<Array<RatingWhereInput>>;
  NOT?: InputMaybe<Array<RatingWhereInput>>;
  OR?: InputMaybe<Array<RatingWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  count?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  maxScore?: InputMaybe<FloatFilter>;
  score?: InputMaybe<FloatFilter>;
  source?: InputMaybe<EnumSourceFilter>;
};

export type RatingWhereUniqueInput = {
  AND?: InputMaybe<Array<RatingWhereInput>>;
  NOT?: InputMaybe<Array<RatingWhereInput>>;
  OR?: InputMaybe<Array<RatingWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  count?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxScore?: InputMaybe<FloatFilter>;
  score?: InputMaybe<FloatFilter>;
  source?: InputMaybe<EnumSourceFilter>;
};

export type ReadDate = {
  __typename?: 'ReadDate';
  active: Scalars['Boolean']['output'];
  finishedDate?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['ID']['output'];
  readingProgress?: Maybe<ReadingProgress>;
  startDate: Scalars['Timestamp']['output'];
  userBook?: Maybe<UserBook>;
  userBookId?: Maybe<Scalars['String']['output']>;
};

export type ReadDateCountAggregate = {
  __typename?: 'ReadDateCountAggregate';
  _all: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  finishedDate: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  startDate: Scalars['Int']['output'];
  userBookId: Scalars['Int']['output'];
};

export type ReadDateCreateManyUserBookInput = {
  active: Scalars['Boolean']['input'];
  finishedDate?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ReadDateCreateManyUserBookInputEnvelope = {
  data: Array<ReadDateCreateManyUserBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReadDateCreateNestedManyWithoutUserBookInput = {
  connect?: InputMaybe<Array<ReadDateWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReadDateCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<ReadDateCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<ReadDateCreateManyUserBookInputEnvelope>;
};

export type ReadDateCreateOrConnectWithoutUserBookInput = {
  create: ReadDateCreateWithoutUserBookInput;
  where: ReadDateWhereUniqueInput;
};

export type ReadDateCreateWithoutUserBookInput = {
  active: Scalars['Boolean']['input'];
  finishedDate?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  readingProgress?: InputMaybe<ReadingProgressCreateNestedOneWithoutReadDateInput>;
  startDate?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ReadDateListRelationFilter = {
  every?: InputMaybe<ReadDateWhereInput>;
  none?: InputMaybe<ReadDateWhereInput>;
  some?: InputMaybe<ReadDateWhereInput>;
};

export type ReadDateMaxAggregate = {
  __typename?: 'ReadDateMaxAggregate';
  active?: Maybe<Scalars['Boolean']['output']>;
  finishedDate?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Timestamp']['output']>;
  userBookId?: Maybe<Scalars['String']['output']>;
};

export type ReadDateMinAggregate = {
  __typename?: 'ReadDateMinAggregate';
  active?: Maybe<Scalars['Boolean']['output']>;
  finishedDate?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Timestamp']['output']>;
  userBookId?: Maybe<Scalars['String']['output']>;
};

export type ReadDateOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReadDateRelationFilter = {
  is?: InputMaybe<ReadDateWhereInput>;
  isNot?: InputMaybe<ReadDateWhereInput>;
};

export type ReadDateScalarWhereInput = {
  AND?: InputMaybe<Array<ReadDateScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReadDateScalarWhereInput>>;
  OR?: InputMaybe<Array<ReadDateScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  finishedDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type ReadDateUpdateManyMutationInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  finishedDate?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ReadDateUpdateManyWithWhereWithoutUserBookInput = {
  data: ReadDateUpdateManyMutationInput;
  where: ReadDateScalarWhereInput;
};

export type ReadDateUpdateManyWithoutUserBookNestedInput = {
  connect?: InputMaybe<Array<ReadDateWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReadDateCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<ReadDateCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<ReadDateCreateManyUserBookInputEnvelope>;
  delete?: InputMaybe<Array<ReadDateWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReadDateScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReadDateWhereUniqueInput>>;
  set?: InputMaybe<Array<ReadDateWhereUniqueInput>>;
  update?: InputMaybe<Array<ReadDateUpdateWithWhereUniqueWithoutUserBookInput>>;
  updateMany?: InputMaybe<Array<ReadDateUpdateManyWithWhereWithoutUserBookInput>>;
  upsert?: InputMaybe<Array<ReadDateUpsertWithWhereUniqueWithoutUserBookInput>>;
};

export type ReadDateUpdateWithWhereUniqueWithoutUserBookInput = {
  data: ReadDateUpdateWithoutUserBookInput;
  where: ReadDateWhereUniqueInput;
};

export type ReadDateUpdateWithoutUserBookInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  finishedDate?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  readingProgress?: InputMaybe<ReadingProgressUpdateOneWithoutReadDateNestedInput>;
  startDate?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ReadDateUpsertWithWhereUniqueWithoutUserBookInput = {
  create: ReadDateCreateWithoutUserBookInput;
  update: ReadDateUpdateWithoutUserBookInput;
  where: ReadDateWhereUniqueInput;
};

export type ReadDateWhereInput = {
  AND?: InputMaybe<Array<ReadDateWhereInput>>;
  NOT?: InputMaybe<Array<ReadDateWhereInput>>;
  OR?: InputMaybe<Array<ReadDateWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  finishedDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  readingProgress?: InputMaybe<ReadingProgressRelationFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type ReadDateWhereUniqueInput = {
  AND?: InputMaybe<Array<ReadDateWhereInput>>;
  NOT?: InputMaybe<Array<ReadDateWhereInput>>;
  OR?: InputMaybe<Array<ReadDateWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  finishedDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  readingProgress?: InputMaybe<ReadingProgressRelationFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type ReadingProgress = {
  __typename?: 'ReadingProgress';
  capacity: Scalars['Int']['output'];
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  progress: Scalars['Int']['output'];
  readDate: ReadDate;
  readDateId: Scalars['String']['output'];
  type: Progress_Type;
};

export type ReadingProgressAvgAggregate = {
  __typename?: 'ReadingProgressAvgAggregate';
  capacity?: Maybe<Scalars['Float']['output']>;
  progress?: Maybe<Scalars['Float']['output']>;
};

export type ReadingProgressCountAggregate = {
  __typename?: 'ReadingProgressCountAggregate';
  _all: Scalars['Int']['output'];
  capacity: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  progress: Scalars['Int']['output'];
  readDateId: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type ReadingProgressCreateNestedOneWithoutReadDateInput = {
  connect?: InputMaybe<ReadingProgressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReadingProgressCreateOrConnectWithoutReadDateInput>;
  create?: InputMaybe<ReadingProgressCreateWithoutReadDateInput>;
};

export type ReadingProgressCreateOrConnectWithoutReadDateInput = {
  create: ReadingProgressCreateWithoutReadDateInput;
  where: ReadingProgressWhereUniqueInput;
};

export type ReadingProgressCreateWithoutReadDateInput = {
  capacity: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  progress: Scalars['Int']['input'];
  type: Progress_Type;
};

export type ReadingProgressMaxAggregate = {
  __typename?: 'ReadingProgressMaxAggregate';
  capacity?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  progress?: Maybe<Scalars['Int']['output']>;
  readDateId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Progress_Type>;
};

export type ReadingProgressMinAggregate = {
  __typename?: 'ReadingProgressMinAggregate';
  capacity?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  progress?: Maybe<Scalars['Int']['output']>;
  readDateId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Progress_Type>;
};

export type ReadingProgressRelationFilter = {
  is?: InputMaybe<ReadingProgressWhereInput>;
  isNot?: InputMaybe<ReadingProgressWhereInput>;
};

export type ReadingProgressSumAggregate = {
  __typename?: 'ReadingProgressSumAggregate';
  capacity?: Maybe<Scalars['Int']['output']>;
  progress?: Maybe<Scalars['Int']['output']>;
};

export type ReadingProgressUpdateOneWithoutReadDateNestedInput = {
  connect?: InputMaybe<ReadingProgressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReadingProgressCreateOrConnectWithoutReadDateInput>;
  create?: InputMaybe<ReadingProgressCreateWithoutReadDateInput>;
  delete?: InputMaybe<ReadingProgressWhereInput>;
  disconnect?: InputMaybe<ReadingProgressWhereInput>;
  update?: InputMaybe<ReadingProgressUpdateToOneWithWhereWithoutReadDateInput>;
  upsert?: InputMaybe<ReadingProgressUpsertWithoutReadDateInput>;
};

export type ReadingProgressUpdateToOneWithWhereWithoutReadDateInput = {
  data: ReadingProgressUpdateWithoutReadDateInput;
  where?: InputMaybe<ReadingProgressWhereInput>;
};

export type ReadingProgressUpdateWithoutReadDateInput = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  progress?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Progress_Type>;
};

export type ReadingProgressUpsertWithoutReadDateInput = {
  create: ReadingProgressCreateWithoutReadDateInput;
  update: ReadingProgressUpdateWithoutReadDateInput;
  where?: InputMaybe<ReadingProgressWhereInput>;
};

export type ReadingProgressWhereInput = {
  AND?: InputMaybe<Array<ReadingProgressWhereInput>>;
  NOT?: InputMaybe<Array<ReadingProgressWhereInput>>;
  OR?: InputMaybe<Array<ReadingProgressWhereInput>>;
  capacity?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  progress?: InputMaybe<IntFilter>;
  readDate?: InputMaybe<ReadDateRelationFilter>;
  readDateId?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumProgress_TypeFilter>;
};

export type ReadingProgressWhereUniqueInput = {
  AND?: InputMaybe<Array<ReadingProgressWhereInput>>;
  NOT?: InputMaybe<Array<ReadingProgressWhereInput>>;
  OR?: InputMaybe<Array<ReadingProgressWhereInput>>;
  capacity?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  progress?: InputMaybe<IntFilter>;
  readDate?: InputMaybe<ReadDateRelationFilter>;
  readDateId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumProgress_TypeFilter>;
};

export type RefreshResponse = {
  __typename?: 'RefreshResponse';
  accessToken: Scalars['String']['output'];
  expiresIn: Scalars['Float']['output'];
  refreshToken: Scalars['String']['output'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type Review = {
  __typename?: 'Review';
  _count: ReviewCount;
  book?: Maybe<Book>;
  bookId?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Comment>>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  likeCount: Scalars['Int']['output'];
  likedBy?: Maybe<Array<User>>;
  spoilers: Scalars['Boolean']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReviewAvgAggregate = {
  __typename?: 'ReviewAvgAggregate';
  likeCount?: Maybe<Scalars['Float']['output']>;
};

export type ReviewCount = {
  __typename?: 'ReviewCount';
  comments: Scalars['Int']['output'];
  likedBy: Scalars['Int']['output'];
};

export type ReviewCountAggregate = {
  __typename?: 'ReviewCountAggregate';
  _all: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  likeCount: Scalars['Int']['output'];
  spoilers: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ReviewCreateManyBookInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewCreateManyBookInputEnvelope = {
  data: Array<ReviewCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateManyUserInput = {
  bookId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateManyUserInputEnvelope = {
  data: Array<ReviewCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutBookInput>>;
  createMany?: InputMaybe<ReviewCreateManyBookInputEnvelope>;
};

export type ReviewCreateNestedManyWithoutLikedByInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutLikedByInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutLikedByInput>>;
};

export type ReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
};

export type ReviewCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<ReviewCreateWithoutCommentsInput>;
};

export type ReviewCreateOrConnectWithoutBookInput = {
  create: ReviewCreateWithoutBookInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutCommentsInput = {
  create: ReviewCreateWithoutCommentsInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutLikedByInput = {
  create: ReviewCreateWithoutLikedByInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateWithoutBookInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutReviewInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  likedBy?: InputMaybe<UserCreateNestedManyWithoutLikedReviewsInput>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
};

export type ReviewCreateWithoutCommentsInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  likedBy?: InputMaybe<UserCreateNestedManyWithoutLikedReviewsInput>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
};

export type ReviewCreateWithoutLikedByInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutReviewInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
};

export type ReviewCreateWithoutUserInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutReviewInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  likedBy?: InputMaybe<UserCreateNestedManyWithoutLikedReviewsInput>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>;
  none?: InputMaybe<ReviewWhereInput>;
  some?: InputMaybe<ReviewWhereInput>;
};

export type ReviewMaxAggregate = {
  __typename?: 'ReviewMaxAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  likeCount?: Maybe<Scalars['Int']['output']>;
  spoilers?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReviewMinAggregate = {
  __typename?: 'ReviewMinAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  likeCount?: Maybe<Scalars['Int']['output']>;
  spoilers?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReviewRelationFilter = {
  is?: InputMaybe<ReviewWhereInput>;
  isNot?: InputMaybe<ReviewWhereInput>;
};

export type ReviewScalarWhereInput = {
  AND?: InputMaybe<Array<ReviewScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReviewScalarWhereInput>>;
  OR?: InputMaybe<Array<ReviewScalarWhereInput>>;
  bookId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  likeCount?: InputMaybe<IntFilter>;
  spoilers?: InputMaybe<BoolFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReviewSumAggregate = {
  __typename?: 'ReviewSumAggregate';
  likeCount?: Maybe<Scalars['Int']['output']>;
};

export type ReviewUpdateManyMutationInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewUpdateManyWithWhereWithoutBookInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutLikedByInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutUserInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutBookInput>>;
  createMany?: InputMaybe<ReviewCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutBookInput>>;
};

export type ReviewUpdateManyWithoutLikedByNestedInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutLikedByInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutLikedByInput>>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutLikedByInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutLikedByInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutLikedByInput>>;
};

export type ReviewUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ReviewUpdateOneWithoutCommentsNestedInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<ReviewCreateWithoutCommentsInput>;
  delete?: InputMaybe<ReviewWhereInput>;
  disconnect?: InputMaybe<ReviewWhereInput>;
  update?: InputMaybe<ReviewUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<ReviewUpsertWithoutCommentsInput>;
};

export type ReviewUpdateToOneWithWhereWithoutCommentsInput = {
  data: ReviewUpdateWithoutCommentsInput;
  where?: InputMaybe<ReviewWhereInput>;
};

export type ReviewUpdateWithWhereUniqueWithoutBookInput = {
  data: ReviewUpdateWithoutBookInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutLikedByInput = {
  data: ReviewUpdateWithoutLikedByInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithoutBookInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutReviewNestedInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  likedBy?: InputMaybe<UserUpdateManyWithoutLikedReviewsNestedInput>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutReviewsNestedInput>;
};

export type ReviewUpdateWithoutCommentsInput = {
  book?: InputMaybe<BookUpdateOneWithoutReviewsNestedInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  likedBy?: InputMaybe<UserUpdateManyWithoutLikedReviewsNestedInput>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutReviewsNestedInput>;
};

export type ReviewUpdateWithoutLikedByInput = {
  book?: InputMaybe<BookUpdateOneWithoutReviewsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutReviewNestedInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutReviewsNestedInput>;
};

export type ReviewUpdateWithoutUserInput = {
  book?: InputMaybe<BookUpdateOneWithoutReviewsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutReviewNestedInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  likedBy?: InputMaybe<UserUpdateManyWithoutLikedReviewsNestedInput>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewUpsertWithWhereUniqueWithoutBookInput = {
  create: ReviewCreateWithoutBookInput;
  update: ReviewUpdateWithoutBookInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutLikedByInput = {
  create: ReviewCreateWithoutLikedByInput;
  update: ReviewUpdateWithoutLikedByInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  update: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithoutCommentsInput = {
  create: ReviewCreateWithoutCommentsInput;
  update: ReviewUpdateWithoutCommentsInput;
  where?: InputMaybe<ReviewWhereInput>;
};

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  likeCount?: InputMaybe<IntFilter>;
  likedBy?: InputMaybe<UserListRelationFilter>;
  spoilers?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReviewWhereUniqueInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<IntFilter>;
  likedBy?: InputMaybe<UserListRelationFilter>;
  spoilers?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum Size {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export enum Source {
  Amazon = 'AMAZON',
  Goodreads = 'GOODREADS',
  Google = 'GOOGLE',
  Isbn_10 = 'ISBN_10',
  Isbn_13 = 'ISBN_13',
  OpenLibrary = 'OPEN_LIBRARY'
}

export type Shelf = {
  __typename?: 'Shelf';
  _count: ShelfCount;
  dateTime?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  user?: Maybe<User>;
  userBooks?: Maybe<Array<UserBookShelves>>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ShelfCount = {
  __typename?: 'ShelfCount';
  userBooks: Scalars['Int']['output'];
};

export type ShelfCountAggregate = {
  __typename?: 'ShelfCountAggregate';
  _all: Scalars['Int']['output'];
  dateTime: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ShelfCreateInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  user?: InputMaybe<UserCreateNestedOneWithoutShelvesInput>;
  userBooks?: InputMaybe<UserBookShelvesCreateNestedManyWithoutShelfInput>;
};

export type ShelfCreateManyUserInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type ShelfCreateManyUserInputEnvelope = {
  data: Array<ShelfCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShelfCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ShelfWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ShelfCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ShelfCreateWithoutUserInput>>;
  createMany?: InputMaybe<ShelfCreateManyUserInputEnvelope>;
};

export type ShelfCreateNestedOneWithoutUserBooksInput = {
  connect?: InputMaybe<ShelfWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShelfCreateOrConnectWithoutUserBooksInput>;
  create?: InputMaybe<ShelfCreateWithoutUserBooksInput>;
};

export type ShelfCreateOrConnectWithoutUserBooksInput = {
  create: ShelfCreateWithoutUserBooksInput;
  where: ShelfWhereUniqueInput;
};

export type ShelfCreateOrConnectWithoutUserInput = {
  create: ShelfCreateWithoutUserInput;
  where: ShelfWhereUniqueInput;
};

export type ShelfCreateWithoutUserBooksInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  user?: InputMaybe<UserCreateNestedOneWithoutShelvesInput>;
};

export type ShelfCreateWithoutUserInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  userBooks?: InputMaybe<UserBookShelvesCreateNestedManyWithoutShelfInput>;
};

export type ShelfIdentifierCompoundUniqueInput = {
  name: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type ShelfListRelationFilter = {
  every?: InputMaybe<ShelfWhereInput>;
  none?: InputMaybe<ShelfWhereInput>;
  some?: InputMaybe<ShelfWhereInput>;
};

export type ShelfMaxAggregate = {
  __typename?: 'ShelfMaxAggregate';
  dateTime?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ShelfMinAggregate = {
  __typename?: 'ShelfMinAggregate';
  dateTime?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ShelfOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
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
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ShelfUpdateInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutShelvesNestedInput>;
  userBooks?: InputMaybe<UserBookShelvesUpdateManyWithoutShelfNestedInput>;
};

export type ShelfUpdateManyMutationInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
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

export type ShelfUpdateOneRequiredWithoutUserBooksNestedInput = {
  connect?: InputMaybe<ShelfWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShelfCreateOrConnectWithoutUserBooksInput>;
  create?: InputMaybe<ShelfCreateWithoutUserBooksInput>;
  update?: InputMaybe<ShelfUpdateToOneWithWhereWithoutUserBooksInput>;
  upsert?: InputMaybe<ShelfUpsertWithoutUserBooksInput>;
};

export type ShelfUpdateToOneWithWhereWithoutUserBooksInput = {
  data: ShelfUpdateWithoutUserBooksInput;
  where?: InputMaybe<ShelfWhereInput>;
};

export type ShelfUpdateWithWhereUniqueWithoutUserInput = {
  data: ShelfUpdateWithoutUserInput;
  where: ShelfWhereUniqueInput;
};

export type ShelfUpdateWithoutUserBooksInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutShelvesNestedInput>;
};

export type ShelfUpdateWithoutUserInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  userBooks?: InputMaybe<UserBookShelvesUpdateManyWithoutShelfNestedInput>;
};

export type ShelfUpsertWithWhereUniqueWithoutUserInput = {
  create: ShelfCreateWithoutUserInput;
  update: ShelfUpdateWithoutUserInput;
  where: ShelfWhereUniqueInput;
};

export type ShelfUpsertWithoutUserBooksInput = {
  create: ShelfCreateWithoutUserBooksInput;
  update: ShelfUpdateWithoutUserBooksInput;
  where?: InputMaybe<ShelfWhereInput>;
};

export type ShelfWhereInput = {
  AND?: InputMaybe<Array<ShelfWhereInput>>;
  NOT?: InputMaybe<Array<ShelfWhereInput>>;
  OR?: InputMaybe<Array<ShelfWhereInput>>;
  dateTime?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userBooks?: InputMaybe<UserBookShelvesListRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ShelfWhereUniqueInput = {
  AND?: InputMaybe<Array<ShelfWhereInput>>;
  NOT?: InputMaybe<Array<ShelfWhereInput>>;
  OR?: InputMaybe<Array<ShelfWhereInput>>;
  dateTime?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<ShelfIdentifierCompoundUniqueInput>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelationFilter>;
  userBooks?: InputMaybe<UserBookShelvesListRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateEmailInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type UpdateUserInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  AuditLog?: Maybe<Array<AuditLog>>;
  _count: UserCount;
  accounts?: Maybe<Array<Account>>;
  bio?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['Timestamp']['output'];
  dob?: Maybe<Scalars['Timestamp']['output']>;
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['Timestamp']['output']>;
  followerCount: Scalars['Float']['output'];
  followers?: Maybe<Array<User>>;
  following?: Maybe<Array<User>>;
  followingCount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isFollowing: Scalars['Boolean']['output'];
  likedReviews?: Maybe<Array<Review>>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reviews?: Maybe<Array<Review>>;
  shelves?: Maybe<Array<Shelf>>;
  updatedAt: Scalars['Timestamp']['output'];
  userBooks?: Maybe<Array<UserBook>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserBook = {
  __typename?: 'UserBook';
  _count: UserBookCount;
  book: Book;
  bookId: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  readDates?: Maybe<Array<ReadDate>>;
  shelves?: Maybe<Array<UserBookShelves>>;
  status: Reading_Status;
  updatedAt: Scalars['Timestamp']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UserBookAvgAggregate = {
  __typename?: 'UserBookAvgAggregate';
  order?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

export type UserBookCount = {
  __typename?: 'UserBookCount';
  readDates: Scalars['Int']['output'];
  shelves: Scalars['Int']['output'];
};

export type UserBookCountAggregate = {
  __typename?: 'UserBookCountAggregate';
  _all: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserBookCreateManyUserInput = {
  bookId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  status: Reading_Status;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type UserBookCreateManyUserInputEnvelope = {
  data: Array<UserBookCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserBookCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserBookCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserBookCreateManyUserInputEnvelope>;
};

export type UserBookCreateNestedOneWithoutBookInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutBookInput>;
  create?: InputMaybe<UserBookCreateWithoutBookInput>;
};

export type UserBookCreateNestedOneWithoutShelvesInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutShelvesInput>;
  create?: InputMaybe<UserBookCreateWithoutShelvesInput>;
};

export type UserBookCreateOrConnectWithoutBookInput = {
  create: UserBookCreateWithoutBookInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookCreateOrConnectWithoutShelvesInput = {
  create: UserBookCreateWithoutShelvesInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookCreateOrConnectWithoutUserInput = {
  create: UserBookCreateWithoutUserInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookCreateWithoutBookInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  readDates?: InputMaybe<ReadDateCreateNestedManyWithoutUserBookInput>;
  shelves?: InputMaybe<UserBookShelvesCreateNestedManyWithoutUserBookInput>;
  status: Reading_Status;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user: UserCreateNestedOneWithoutUserBooksInput;
};

export type UserBookCreateWithoutShelvesInput = {
  book: BookCreateNestedOneWithoutUserBookInput;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  readDates?: InputMaybe<ReadDateCreateNestedManyWithoutUserBookInput>;
  status: Reading_Status;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user: UserCreateNestedOneWithoutUserBooksInput;
};

export type UserBookCreateWithoutUserInput = {
  book: BookCreateNestedOneWithoutUserBookInput;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  readDates?: InputMaybe<ReadDateCreateNestedManyWithoutUserBookInput>;
  shelves?: InputMaybe<UserBookShelvesCreateNestedManyWithoutUserBookInput>;
  status: Reading_Status;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type UserBookIdentifierCompoundUniqueInput = {
  bookId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserBookListRelationFilter = {
  every?: InputMaybe<UserBookWhereInput>;
  none?: InputMaybe<UserBookWhereInput>;
  some?: InputMaybe<UserBookWhereInput>;
};

export type UserBookMaxAggregate = {
  __typename?: 'UserBookMaxAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Reading_Status>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserBookMinAggregate = {
  __typename?: 'UserBookMinAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Reading_Status>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserBookOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserBookOrderByWithRelationInput = {
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrderInput>;
  readDates?: InputMaybe<ReadDateOrderByRelationAggregateInput>;
  shelves?: InputMaybe<UserBookShelvesOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumReading_StatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserBookShelves = {
  __typename?: 'UserBookShelves';
  shelf: Shelf;
  shelfId: Scalars['String']['output'];
  userBook: UserBook;
  userBookId: Scalars['String']['output'];
};

export type UserBookShelvesCountAggregate = {
  __typename?: 'UserBookShelvesCountAggregate';
  _all: Scalars['Int']['output'];
  shelfId: Scalars['Int']['output'];
  userBookId: Scalars['Int']['output'];
};

export type UserBookShelvesCreateManyShelfInput = {
  userBookId: Scalars['String']['input'];
};

export type UserBookShelvesCreateManyShelfInputEnvelope = {
  data: Array<UserBookShelvesCreateManyShelfInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserBookShelvesCreateManyUserBookInput = {
  shelfId: Scalars['String']['input'];
};

export type UserBookShelvesCreateManyUserBookInputEnvelope = {
  data: Array<UserBookShelvesCreateManyUserBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserBookShelvesCreateNestedManyWithoutShelfInput = {
  connect?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookShelvesCreateOrConnectWithoutShelfInput>>;
  create?: InputMaybe<Array<UserBookShelvesCreateWithoutShelfInput>>;
  createMany?: InputMaybe<UserBookShelvesCreateManyShelfInputEnvelope>;
};

export type UserBookShelvesCreateNestedManyWithoutUserBookInput = {
  connect?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookShelvesCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<UserBookShelvesCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<UserBookShelvesCreateManyUserBookInputEnvelope>;
};

export type UserBookShelvesCreateOrConnectWithoutShelfInput = {
  create: UserBookShelvesCreateWithoutShelfInput;
  where: UserBookShelvesWhereUniqueInput;
};

export type UserBookShelvesCreateOrConnectWithoutUserBookInput = {
  create: UserBookShelvesCreateWithoutUserBookInput;
  where: UserBookShelvesWhereUniqueInput;
};

export type UserBookShelvesCreateWithoutShelfInput = {
  userBook: UserBookCreateNestedOneWithoutShelvesInput;
};

export type UserBookShelvesCreateWithoutUserBookInput = {
  shelf: ShelfCreateNestedOneWithoutUserBooksInput;
};

export type UserBookShelvesListRelationFilter = {
  every?: InputMaybe<UserBookShelvesWhereInput>;
  none?: InputMaybe<UserBookShelvesWhereInput>;
  some?: InputMaybe<UserBookShelvesWhereInput>;
};

export type UserBookShelvesMaxAggregate = {
  __typename?: 'UserBookShelvesMaxAggregate';
  shelfId?: Maybe<Scalars['String']['output']>;
  userBookId?: Maybe<Scalars['String']['output']>;
};

export type UserBookShelvesMinAggregate = {
  __typename?: 'UserBookShelvesMinAggregate';
  shelfId?: Maybe<Scalars['String']['output']>;
  userBookId?: Maybe<Scalars['String']['output']>;
};

export type UserBookShelvesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserBookShelvesScalarWhereInput = {
  AND?: InputMaybe<Array<UserBookShelvesScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserBookShelvesScalarWhereInput>>;
  OR?: InputMaybe<Array<UserBookShelvesScalarWhereInput>>;
  shelfId?: InputMaybe<StringFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type UserBookShelvesUncheckedUpdateManyWithoutShelfInput = {
  userBookId?: InputMaybe<Scalars['String']['input']>;
};

export type UserBookShelvesUncheckedUpdateManyWithoutUserBookInput = {
  shelfId?: InputMaybe<Scalars['String']['input']>;
};

export type UserBookShelvesUpdateManyWithWhereWithoutShelfInput = {
  data: UserBookShelvesUncheckedUpdateManyWithoutShelfInput;
  where: UserBookShelvesScalarWhereInput;
};

export type UserBookShelvesUpdateManyWithWhereWithoutUserBookInput = {
  data: UserBookShelvesUncheckedUpdateManyWithoutUserBookInput;
  where: UserBookShelvesScalarWhereInput;
};

export type UserBookShelvesUpdateManyWithoutShelfNestedInput = {
  connect?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookShelvesCreateOrConnectWithoutShelfInput>>;
  create?: InputMaybe<Array<UserBookShelvesCreateWithoutShelfInput>>;
  createMany?: InputMaybe<UserBookShelvesCreateManyShelfInputEnvelope>;
  delete?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserBookShelvesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  set?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  update?: InputMaybe<Array<UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput>>;
  updateMany?: InputMaybe<Array<UserBookShelvesUpdateManyWithWhereWithoutShelfInput>>;
  upsert?: InputMaybe<Array<UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput>>;
};

export type UserBookShelvesUpdateManyWithoutUserBookNestedInput = {
  connect?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookShelvesCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<UserBookShelvesCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<UserBookShelvesCreateManyUserBookInputEnvelope>;
  delete?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserBookShelvesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  set?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  update?: InputMaybe<Array<UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput>>;
  updateMany?: InputMaybe<Array<UserBookShelvesUpdateManyWithWhereWithoutUserBookInput>>;
  upsert?: InputMaybe<Array<UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput>>;
};

export type UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput = {
  data: UserBookShelvesUpdateWithoutShelfInput;
  where: UserBookShelvesWhereUniqueInput;
};

export type UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput = {
  data: UserBookShelvesUpdateWithoutUserBookInput;
  where: UserBookShelvesWhereUniqueInput;
};

export type UserBookShelvesUpdateWithoutShelfInput = {
  userBook?: InputMaybe<UserBookUpdateOneRequiredWithoutShelvesNestedInput>;
};

export type UserBookShelvesUpdateWithoutUserBookInput = {
  shelf?: InputMaybe<ShelfUpdateOneRequiredWithoutUserBooksNestedInput>;
};

export type UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput = {
  create: UserBookShelvesCreateWithoutShelfInput;
  update: UserBookShelvesUpdateWithoutShelfInput;
  where: UserBookShelvesWhereUniqueInput;
};

export type UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput = {
  create: UserBookShelvesCreateWithoutUserBookInput;
  update: UserBookShelvesUpdateWithoutUserBookInput;
  where: UserBookShelvesWhereUniqueInput;
};

export type UserBookShelvesUserBookIdShelfIdCompoundUniqueInput = {
  shelfId: Scalars['String']['input'];
  userBookId: Scalars['String']['input'];
};

export type UserBookShelvesWhereInput = {
  AND?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  NOT?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  OR?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  shelf?: InputMaybe<ShelfRelationFilter>;
  shelfId?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type UserBookShelvesWhereUniqueInput = {
  AND?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  NOT?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  OR?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  shelf?: InputMaybe<ShelfRelationFilter>;
  shelfId?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
  userBookId_shelfId?: InputMaybe<UserBookShelvesUserBookIdShelfIdCompoundUniqueInput>;
};

export type UserBookSumAggregate = {
  __typename?: 'UserBookSumAggregate';
  order?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

export type UserBookUpdateInput = {
  rating?: InputMaybe<Scalars['Float']['input']>;
  shelves?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Reading_Status>;
};

export type UserBookUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Reading_Status>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
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

export type UserBookUpdateOneRequiredWithoutShelvesNestedInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutShelvesInput>;
  create?: InputMaybe<UserBookCreateWithoutShelvesInput>;
  update?: InputMaybe<UserBookUpdateToOneWithWhereWithoutShelvesInput>;
  upsert?: InputMaybe<UserBookUpsertWithoutShelvesInput>;
};

export type UserBookUpdateOneWithoutBookNestedInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutBookInput>;
  create?: InputMaybe<UserBookCreateWithoutBookInput>;
  delete?: InputMaybe<UserBookWhereInput>;
  disconnect?: InputMaybe<UserBookWhereInput>;
  update?: InputMaybe<UserBookUpdateToOneWithWhereWithoutBookInput>;
  upsert?: InputMaybe<UserBookUpsertWithoutBookInput>;
};

export type UserBookUpdateOrderInput = {
  items?: InputMaybe<Array<BookItemInput>>;
};

export type UserBookUpdateToOneWithWhereWithoutBookInput = {
  data: UserBookUpdateWithoutBookInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpdateToOneWithWhereWithoutShelvesInput = {
  data: UserBookUpdateWithoutShelvesInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpdateWithWhereUniqueWithoutUserInput = {
  data: UserBookUpdateWithoutUserInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookUpdateWithoutBookInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  readDates?: InputMaybe<ReadDateUpdateManyWithoutUserBookNestedInput>;
  shelves?: InputMaybe<UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
  status?: InputMaybe<Reading_Status>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserBooksNestedInput>;
};

export type UserBookUpdateWithoutShelvesInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutUserBookNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  readDates?: InputMaybe<ReadDateUpdateManyWithoutUserBookNestedInput>;
  status?: InputMaybe<Reading_Status>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserBooksNestedInput>;
};

export type UserBookUpdateWithoutUserInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutUserBookNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  readDates?: InputMaybe<ReadDateUpdateManyWithoutUserBookNestedInput>;
  shelves?: InputMaybe<UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
  status?: InputMaybe<Reading_Status>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type UserBookUpsertWithWhereUniqueWithoutUserInput = {
  create: UserBookCreateWithoutUserInput;
  update: UserBookUpdateWithoutUserInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookUpsertWithoutBookInput = {
  create: UserBookCreateWithoutBookInput;
  update: UserBookUpdateWithoutBookInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpsertWithoutShelvesInput = {
  create: UserBookCreateWithoutShelvesInput;
  update: UserBookUpdateWithoutShelvesInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookWhereInput = {
  AND?: InputMaybe<Array<UserBookWhereInput>>;
  NOT?: InputMaybe<Array<UserBookWhereInput>>;
  OR?: InputMaybe<Array<UserBookWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  readDates?: InputMaybe<ReadDateListRelationFilter>;
  shelves?: InputMaybe<UserBookShelvesListRelationFilter>;
  status?: InputMaybe<EnumReading_StatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserBookWhereUniqueInput = {
  AND?: InputMaybe<Array<UserBookWhereInput>>;
  NOT?: InputMaybe<Array<UserBookWhereInput>>;
  OR?: InputMaybe<Array<UserBookWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<UserBookIdentifierCompoundUniqueInput>;
  order?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  readDates?: InputMaybe<ReadDateListRelationFilter>;
  shelves?: InputMaybe<UserBookShelvesListRelationFilter>;
  status?: InputMaybe<EnumReading_StatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserBooksResponse = {
  __typename?: 'UserBooksResponse';
  hasMore: Scalars['Boolean']['output'];
  totalBooks: Scalars['Float']['output'];
  userBooks?: Maybe<Array<UserBook>>;
};

export type UserCount = {
  __typename?: 'UserCount';
  AuditLog: Scalars['Int']['output'];
  accounts: Scalars['Int']['output'];
  comments: Scalars['Int']['output'];
  followers: Scalars['Int']['output'];
  following: Scalars['Int']['output'];
  likedReviews: Scalars['Int']['output'];
  reviews: Scalars['Int']['output'];
  shelves: Scalars['Int']['output'];
  userBooks: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  bio: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  dob: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  emailVerified: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type UserCreateNestedManyWithoutFollowersInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutFollowersInput>>;
  create?: InputMaybe<Array<UserCreateWithoutFollowersInput>>;
};

export type UserCreateNestedManyWithoutFollowingInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  create?: InputMaybe<Array<UserCreateWithoutFollowingInput>>;
};

export type UserCreateNestedManyWithoutLikedReviewsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutLikedReviewsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutLikedReviewsInput>>;
};

export type UserCreateNestedOneWithoutAuditLogInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAuditLogInput>;
  create?: InputMaybe<UserCreateWithoutAuditLogInput>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<UserCreateWithoutReviewsInput>;
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

export type UserCreateOrConnectWithoutAuditLogInput = {
  create: UserCreateWithoutAuditLogInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLikedReviewsInput = {
  create: UserCreateWithoutLikedReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutShelvesInput = {
  create: UserCreateWithoutShelvesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserBooksInput = {
  create: UserCreateWithoutUserBooksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAuditLogInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutCommentsInput = {
  AuditLog?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutFollowersInput = {
  AuditLog?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutFollowingInput = {
  AuditLog?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutLikedReviewsInput = {
  AuditLog?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutReviewsInput = {
  AuditLog?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutShelvesInput = {
  AuditLog?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutUserBooksInput = {
  AuditLog?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  dob?: Maybe<Scalars['Timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  dob?: Maybe<Scalars['Timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  AuditLog?: InputMaybe<AuditLogOrderByRelationAggregateInput>;
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  bio?: InputMaybe<SortOrderInput>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  followers?: InputMaybe<UserOrderByRelationAggregateInput>;
  following?: InputMaybe<UserOrderByRelationAggregateInput>;
  hashedPassword?: InputMaybe<SortOrderInput>;
  hashedRefreshToken?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  likedReviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  location?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  shelves?: InputMaybe<ShelfOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  userBooks?: InputMaybe<UserBookOrderByRelationAggregateInput>;
  username?: InputMaybe<SortOrderInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  bio?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dob?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserUpdateManyMutationInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateManyWithWhereWithoutFollowersInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutFollowingInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutLikedReviewsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutFollowersNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutFollowersInput>>;
  create?: InputMaybe<Array<UserCreateWithoutFollowersInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutFollowersInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutFollowersInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutFollowersInput>>;
};

export type UserUpdateManyWithoutFollowingNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  create?: InputMaybe<Array<UserCreateWithoutFollowingInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutFollowingInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutFollowingInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutFollowingInput>>;
};

export type UserUpdateManyWithoutLikedReviewsNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutLikedReviewsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutLikedReviewsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutLikedReviewsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutLikedReviewsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutLikedReviewsInput>>;
};

export type UserUpdateOneRequiredWithoutUserBooksNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserBooksInput>;
  create?: InputMaybe<UserCreateWithoutUserBooksInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUserBooksInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserBooksInput>;
};

export type UserUpdateOneWithoutAuditLogNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAuditLogInput>;
  create?: InputMaybe<UserCreateWithoutAuditLogInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAuditLogInput>;
  upsert?: InputMaybe<UserUpsertWithoutAuditLogInput>;
};

export type UserUpdateOneWithoutCommentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneWithoutReviewsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<UserCreateWithoutReviewsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutReviewsInput>;
  upsert?: InputMaybe<UserUpsertWithoutReviewsInput>;
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

export type UserUpdateToOneWithWhereWithoutAuditLogInput = {
  data: UserUpdateWithoutAuditLogInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCommentsInput = {
  data: UserUpdateWithoutCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutReviewsInput = {
  data: UserUpdateWithoutReviewsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutShelvesInput = {
  data: UserUpdateWithoutShelvesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUserBooksInput = {
  data: UserUpdateWithoutUserBooksInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithWhereUniqueWithoutFollowersInput = {
  data: UserUpdateWithoutFollowersInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
  data: UserUpdateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutLikedReviewsInput = {
  data: UserUpdateWithoutLikedReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutAuditLogInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutCommentsInput = {
  AuditLog?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutFollowersInput = {
  AuditLog?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutFollowingInput = {
  AuditLog?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutLikedReviewsInput = {
  AuditLog?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutReviewsInput = {
  AuditLog?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutShelvesInput = {
  AuditLog?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutUserBooksInput = {
  AuditLog?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpsertWithWhereUniqueWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  update: UserUpdateWithoutFollowersInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  update: UserUpdateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutLikedReviewsInput = {
  create: UserCreateWithoutLikedReviewsInput;
  update: UserUpdateWithoutLikedReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutAuditLogInput = {
  create: UserCreateWithoutAuditLogInput;
  update: UserUpdateWithoutAuditLogInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  update: UserUpdateWithoutReviewsInput;
  where?: InputMaybe<UserWhereInput>;
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
  AuditLog?: InputMaybe<AuditLogListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  bio?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dob?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeFilter>;
  followers?: InputMaybe<UserListRelationFilter>;
  following?: InputMaybe<UserListRelationFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  likedReviews?: InputMaybe<ReviewListRelationFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  shelves?: InputMaybe<ShelfListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userBooks?: InputMaybe<UserBookListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  AuditLog?: InputMaybe<AuditLogListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  bio?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dob?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<DateTimeFilter>;
  followers?: InputMaybe<UserListRelationFilter>;
  following?: InputMaybe<UserListRelationFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringFilter>;
  likedReviews?: InputMaybe<ReviewListRelationFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  shelves?: InputMaybe<ShelfListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userBooks?: InputMaybe<UserBookListRelationFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type VerificationTokenCountAggregate = {
  __typename?: 'VerificationTokenCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  existingEmail: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type VerificationTokenMaxAggregate = {
  __typename?: 'VerificationTokenMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  existingEmail?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMinAggregate = {
  __typename?: 'VerificationTokenMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  existingEmail?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type LoginMutationVariables = Exact<{
  input: LogInInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken?: string | null, refreshToken?: string | null, verificationToken?: string | null, expiresIn?: number | null, user: { __typename?: 'User', email: string, username?: string | null, emailVerified?: any | null, id: string } } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type VerifyTokenMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyTokenMutation = { __typename?: 'Mutation', verifyToken: { __typename?: 'AuthResponse', accessToken?: string | null, refreshToken?: string | null, verificationToken?: string | null, expiresIn?: number | null, user: { __typename?: 'User', email: string, username?: string | null, emailVerified?: any | null, id: string } } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', email: string, id: string, username?: string | null } };

export type OAuthMutationVariables = Exact<{
  input: OAuthInput;
}>;


export type OAuthMutation = { __typename?: 'Mutation', oAuth: { __typename?: 'AuthResponse', accessToken?: string | null, refreshToken?: string | null, expiresIn?: number | null, user: { __typename?: 'User', email: string, username?: string | null, id: string } } };

export type RefreshAuthMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshAuthMutation = { __typename?: 'Mutation', refreshAuth: { __typename?: 'RefreshResponse', accessToken: string, refreshToken: string, expiresIn: number } };

export type LogoutMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type AddIdentifierToBookMutationVariables = Exact<{
  where: BookWhereUniqueInput;
  identifier: IdentifierCreateInput;
}>;


export type AddIdentifierToBookMutation = { __typename?: 'Mutation', addIdentifierToBook: { __typename?: 'Book', id: string } };

export type UpdateReadDateMutationVariables = Exact<{
  id: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['String']['input']>;
  finishedDate?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateReadDateMutation = { __typename?: 'Mutation', updateReadDate: { __typename?: 'ReadDate', id: string, userBookId?: string | null, startDate: any, finishedDate?: any | null, active: boolean, readingProgress?: { __typename?: 'ReadingProgress', capacity: number, type: Progress_Type, progress: number } | null } };

export type UpdateReadingProgressMutationVariables = Exact<{
  readingProgressId: Scalars['String']['input'];
  type: Scalars['String']['input'];
  capacity?: InputMaybe<Scalars['Int']['input']>;
  progress: Scalars['Int']['input'];
}>;


export type UpdateReadingProgressMutation = { __typename?: 'Mutation', updateReadingProgress: { __typename?: 'ReadingProgress', id: string, type: Progress_Type, capacity: number, progress: number } };

export type CreateShelfMutationVariables = Exact<{
  data: ShelfCreateInput;
}>;


export type CreateShelfMutation = { __typename?: 'Mutation', createShelf: { __typename?: 'Shelf', id: string, name: string, _count: { __typename?: 'ShelfCount', userBooks: number } } };

export type DeleteShelfMutationVariables = Exact<{
  where: ShelfWhereUniqueInput;
}>;


export type DeleteShelfMutation = { __typename?: 'Mutation', deleteShelf: { __typename?: 'Shelf', id: string, name: string, _count: { __typename?: 'ShelfCount', userBooks: number } } };

export type UpdateShelfMutationVariables = Exact<{
  data: ShelfUpdateInput;
  where: ShelfWhereUniqueInput;
}>;


export type UpdateShelfMutation = { __typename?: 'Mutation', updateShelf: { __typename?: 'Shelf', id: string, name: string, _count: { __typename?: 'ShelfCount', userBooks: number } } };

export type FollowMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  value: Scalars['Boolean']['input'];
}>;


export type FollowMutation = { __typename?: 'Mutation', follow: { __typename?: 'User', id: string } };

export type UpdateUserMutationVariables = Exact<{
  data: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, username?: string | null, email: string } };

export type UpdateEmailMutationVariables = Exact<{
  data: UpdateEmailInput;
}>;


export type UpdateEmailMutation = { __typename?: 'Mutation', updateEmail: { __typename?: 'User', id: string, email: string } };

export type CreateUserBookMutationVariables = Exact<{
  data: BookDataInput;
}>;


export type CreateUserBookMutation = { __typename?: 'Mutation', createUserBook: { __typename?: 'UserBook', status: Reading_Status, id: string, book: { __typename?: 'Book', title: string } } };

export type UpdateUserBookMutationVariables = Exact<{
  data: UserBookUpdateInput;
  where: UserBookWhereUniqueInput;
}>;


export type UpdateUserBookMutation = { __typename?: 'Mutation', updateUserBook: { __typename: 'UserBook', status: Reading_Status, id: string, book: { __typename: 'Book' }, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string, slug: string } }> | null } };

export type RemoveUserBookMutationVariables = Exact<{
  where: UserBookWhereUniqueInput;
}>;


export type RemoveUserBookMutation = { __typename?: 'Mutation', removeUserBook: boolean };

export type ImportUserBooksMutationVariables = Exact<{
  content: Scalars['String']['input'];
}>;


export type ImportUserBooksMutation = { __typename?: 'Mutation', importUserBooks: boolean };

export type UpdateUserBookOrderMutationVariables = Exact<{
  data: UserBookUpdateOrderInput;
}>;


export type UpdateUserBookOrderMutation = { __typename?: 'Mutation', updateUserBookOrder: Array<{ __typename?: 'UserBook', id: string, order: number }> };

export type AddUserBookToShelfMutationVariables = Exact<{
  where: UserBookWhereUniqueInput;
  shelf: Scalars['String']['input'];
}>;


export type AddUserBookToShelfMutation = { __typename?: 'Mutation', addBookToShelf: { __typename?: 'UserBook', id: string, status: Reading_Status } };

export type RemoveUserBookFromShelfMutationVariables = Exact<{
  where: UserBookWhereUniqueInput;
  shelf: Scalars['String']['input'];
}>;


export type RemoveUserBookFromShelfMutation = { __typename?: 'Mutation', removeBookFromShelf: boolean };

export type GetAuditLogsQueryVariables = Exact<{
  where?: InputMaybe<UserBookWhereUniqueInput>;
  action?: InputMaybe<Action>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuditLogOrderByWithRelationInput>;
}>;


export type GetAuditLogsQuery = { __typename?: 'Query', auditLogs: { __typename?: 'ActivitiesResponse', hasMore: boolean, totalActivities: number, activities?: Array<{ __typename?: 'AuditLog', id: string, action: Action, createdAt: any, updatedAt: any, actionContent?: string | null, user?: { __typename?: 'User', id: string, username?: string | null, email: string } | null, book?: { __typename?: 'Book', id: string, title: string, authors?: Array<string> | null, pageCount?: number | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null } | null }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'MeResponse', email?: string | null, username?: string | null, isOAuth?: boolean | null } };

export type FindBookByIdentifierQueryVariables = Exact<{
  identifier: IdentifierCreateInput;
}>;


export type FindBookByIdentifierQuery = { __typename?: 'Query', findBookByIdentifier?: { __typename?: 'Book', id: string, slug: string, title: string, authors?: Array<string> | null, pageCount?: number | null, userBook?: { __typename?: 'UserBook', id: string, status: Reading_Status, rating?: number | null, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string, slug: string } }> | null } | null, identifiers?: Array<{ __typename?: 'Identifier', source: Source, sourceId: string }> | null, covers?: Array<{ __typename?: 'Cover', url: string, source: Source, size: Size }> | null, ratings?: Array<{ __typename?: 'Rating', source: Source, score: number }> | null } | null };

export type SearchMyLibraryQueryVariables = Exact<{
  query: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchMyLibraryQuery = { __typename?: 'Query', searchMyLibrary: Array<{ __typename?: 'Book', id: string, slug: string, title: string, authors?: Array<string> | null, pageCount?: number | null, userBook?: { __typename?: 'UserBook', id: string, status: Reading_Status, rating?: number | null, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string, slug: string } }> | null } | null, identifiers?: Array<{ __typename?: 'Identifier', source: Source, sourceId: string }> | null, covers?: Array<{ __typename?: 'Cover', url: string, source: Source, size: Size }> | null, ratings?: Array<{ __typename?: 'Rating', source: Source, score: number }> | null }> };

export type ReadDatesQueryVariables = Exact<{
  userBookIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  active?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ReadDatesQuery = { __typename?: 'Query', readDates: Array<{ __typename?: 'ReadDate', id: string, userBookId?: string | null, startDate: any, finishedDate?: any | null, active: boolean, readingProgress?: { __typename?: 'ReadingProgress', id: string, capacity: number, type: Progress_Type, progress: number } | null }> };

export type ShelvesQueryVariables = Exact<{ [key: string]: never; }>;


export type ShelvesQuery = { __typename?: 'Query', shelves?: Array<{ __typename?: 'Shelf', id: string, name: string, slug: string, userId?: string | null, _count: { __typename?: 'ShelfCount', userBooks: number }, user?: { __typename?: 'User', id: string } | null }> | null };

export type GetMyBookShelvesQueryVariables = Exact<{
  where: UserBookWhereUniqueInput;
}>;


export type GetMyBookShelvesQuery = { __typename?: 'Query', getMyBookShelves?: Array<{ __typename?: 'UserBookShelves', userBook: { __typename?: 'UserBook', id: string }, shelf: { __typename?: 'Shelf', id: string, name: string, slug: string } }> | null };

export type BooksByShelfQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type BooksByShelfQuery = { __typename?: 'Query', booksByShelf?: { __typename?: 'Shelf', id: string, name: string, slug: string, user?: { __typename?: 'User', id: string, username?: string | null } | null, userBooks?: Array<{ __typename?: 'UserBookShelves', userBook: { __typename?: 'UserBook', book: { __typename?: 'Book', id: string, slug: string, authors?: Array<string> | null, title: string, identifiers?: Array<{ __typename?: 'Identifier', source: Source, sourceId: string }> | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null, ratings?: Array<{ __typename?: 'Rating', source: Source, score: number }> | null } } }> | null, _count: { __typename?: 'ShelfCount', userBooks: number } } | null };

export type ShelvesWithBookCoversQueryVariables = Exact<{ [key: string]: never; }>;


export type ShelvesWithBookCoversQuery = { __typename?: 'Query', shelves?: Array<{ __typename?: 'Shelf', id: string, name: string, slug: string, userId?: string | null, userBooks?: Array<{ __typename?: 'UserBookShelves', userBook: { __typename?: 'UserBook', id: string, book: { __typename?: 'Book', id: string, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null } } }> | null, _count: { __typename?: 'ShelfCount', userBooks: number } }> | null };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, username?: string | null, email: string, bio?: string | null } | null };

export type UserBookQueryVariables = Exact<{
  where: BookWhereUniqueInput;
}>;


export type UserBookQuery = { __typename?: 'Query', userBook?: { __typename?: 'UserBook', userId: string, status: Reading_Status, rating?: number | null, user: { __typename?: 'User', id: string }, book: { __typename?: 'Book', slug: string, id: string, title: string, authors?: Array<string> | null, pageCount?: number | null, yearPublished?: string | null, identifiers?: Array<{ __typename?: 'Identifier', source: Source, sourceId: string }> | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null, ratings?: Array<{ __typename?: 'Rating', score: number, source: Source }> | null }, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string } }> | null } | null };

export type GetUserBooksQueryVariables = Exact<{
  where?: InputMaybe<UserBookWhereInput>;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  orderBy?: InputMaybe<UserBookOrderByWithRelationInput>;
}>;


export type GetUserBooksQuery = { __typename?: 'Query', getUserBooks: { __typename?: 'UserBooksResponse', hasMore: boolean, totalBooks: number, userBooks?: Array<{ __typename?: 'UserBook', id: string, userId: string, status: Reading_Status, rating?: number | null, createdAt: any, updatedAt: any, order: number, user: { __typename?: 'User', id: string }, book: { __typename?: 'Book', id: string, slug: string, title: string, authors?: Array<string> | null, pageCount?: number | null, yearPublished?: string | null, identifiers?: Array<{ __typename?: 'Identifier', source: Source, sourceId: string }> | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null, ratings?: Array<{ __typename?: 'Rating', score: number, source: Source }> | null }, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string } }> | null, _count: { __typename?: 'UserBookCount', shelves: number } }> | null } };

export type CountUserBooksQueryVariables = Exact<{
  where?: InputMaybe<UserBookWhereInput>;
}>;


export type CountUserBooksQuery = { __typename?: 'Query', countUserBooks: number };

export type BookCountsByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type BookCountsByUserIdQuery = { __typename?: 'Query', bookCountsByUserId: { __typename?: 'BookCountsResponse', wantsToReadCount: number, readingCount: number, finishedCount: number, upNextCount: number } };


export const LoginDocument = gql`
    mutation Login($input: LogInInput!) {
  login(logInInput: $input) {
    accessToken
    refreshToken
    verificationToken
    expiresIn
    user {
      email
      username
      emailVerified
      id
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($input: ResetPasswordInput!) {
  resetPassword(resetPasswordInput: $input)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const VerifyTokenDocument = gql`
    mutation VerifyToken($token: String!) {
  verifyToken(token: $token) {
    accessToken
    refreshToken
    verificationToken
    expiresIn
    user {
      email
      username
      emailVerified
      id
    }
  }
}
    `;
export type VerifyTokenMutationFn = Apollo.MutationFunction<VerifyTokenMutation, VerifyTokenMutationVariables>;

/**
 * __useVerifyTokenMutation__
 *
 * To run a mutation, you first call `useVerifyTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyTokenMutation, { data, loading, error }] = useVerifyTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyTokenMutation(baseOptions?: Apollo.MutationHookOptions<VerifyTokenMutation, VerifyTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyTokenMutation, VerifyTokenMutationVariables>(VerifyTokenDocument, options);
      }
export type VerifyTokenMutationHookResult = ReturnType<typeof useVerifyTokenMutation>;
export type VerifyTokenMutationResult = Apollo.MutationResult<VerifyTokenMutation>;
export type VerifyTokenMutationOptions = Apollo.BaseMutationOptions<VerifyTokenMutation, VerifyTokenMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(registerInput: $input) {
    email
    id
    username
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const OAuthDocument = gql`
    mutation OAuth($input: OAuthInput!) {
  oAuth(oAuthInput: $input) {
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
export type OAuthMutationFn = Apollo.MutationFunction<OAuthMutation, OAuthMutationVariables>;

/**
 * __useOAuthMutation__
 *
 * To run a mutation, you first call `useOAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [oAuthMutation, { data, loading, error }] = useOAuthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOAuthMutation(baseOptions?: Apollo.MutationHookOptions<OAuthMutation, OAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OAuthMutation, OAuthMutationVariables>(OAuthDocument, options);
      }
export type OAuthMutationHookResult = ReturnType<typeof useOAuthMutation>;
export type OAuthMutationResult = Apollo.MutationResult<OAuthMutation>;
export type OAuthMutationOptions = Apollo.BaseMutationOptions<OAuthMutation, OAuthMutationVariables>;
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
export const AddIdentifierToBookDocument = gql`
    mutation AddIdentifierToBook($where: BookWhereUniqueInput!, $identifier: IdentifierCreateInput!) {
  addIdentifierToBook(where: $where, identifier: $identifier) {
    id
  }
}
    `;
export type AddIdentifierToBookMutationFn = Apollo.MutationFunction<AddIdentifierToBookMutation, AddIdentifierToBookMutationVariables>;

/**
 * __useAddIdentifierToBookMutation__
 *
 * To run a mutation, you first call `useAddIdentifierToBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddIdentifierToBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addIdentifierToBookMutation, { data, loading, error }] = useAddIdentifierToBookMutation({
 *   variables: {
 *      where: // value for 'where'
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export function useAddIdentifierToBookMutation(baseOptions?: Apollo.MutationHookOptions<AddIdentifierToBookMutation, AddIdentifierToBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddIdentifierToBookMutation, AddIdentifierToBookMutationVariables>(AddIdentifierToBookDocument, options);
      }
export type AddIdentifierToBookMutationHookResult = ReturnType<typeof useAddIdentifierToBookMutation>;
export type AddIdentifierToBookMutationResult = Apollo.MutationResult<AddIdentifierToBookMutation>;
export type AddIdentifierToBookMutationOptions = Apollo.BaseMutationOptions<AddIdentifierToBookMutation, AddIdentifierToBookMutationVariables>;
export const UpdateReadDateDocument = gql`
    mutation UpdateReadDate($id: String!, $startDate: String, $finishedDate: String) {
  updateReadDate(id: $id, startDate: $startDate, finishedDate: $finishedDate) {
    id
    userBookId
    startDate
    finishedDate
    active
    readingProgress {
      capacity
      type
      progress
    }
  }
}
    `;
export type UpdateReadDateMutationFn = Apollo.MutationFunction<UpdateReadDateMutation, UpdateReadDateMutationVariables>;

/**
 * __useUpdateReadDateMutation__
 *
 * To run a mutation, you first call `useUpdateReadDateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReadDateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReadDateMutation, { data, loading, error }] = useUpdateReadDateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      startDate: // value for 'startDate'
 *      finishedDate: // value for 'finishedDate'
 *   },
 * });
 */
export function useUpdateReadDateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReadDateMutation, UpdateReadDateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReadDateMutation, UpdateReadDateMutationVariables>(UpdateReadDateDocument, options);
      }
export type UpdateReadDateMutationHookResult = ReturnType<typeof useUpdateReadDateMutation>;
export type UpdateReadDateMutationResult = Apollo.MutationResult<UpdateReadDateMutation>;
export type UpdateReadDateMutationOptions = Apollo.BaseMutationOptions<UpdateReadDateMutation, UpdateReadDateMutationVariables>;
export const UpdateReadingProgressDocument = gql`
    mutation UpdateReadingProgress($readingProgressId: String!, $type: String!, $capacity: Int, $progress: Int!) {
  updateReadingProgress(
    readingProgressId: $readingProgressId
    type: $type
    capacity: $capacity
    progress: $progress
  ) {
    id
    type
    capacity
    progress
  }
}
    `;
export type UpdateReadingProgressMutationFn = Apollo.MutationFunction<UpdateReadingProgressMutation, UpdateReadingProgressMutationVariables>;

/**
 * __useUpdateReadingProgressMutation__
 *
 * To run a mutation, you first call `useUpdateReadingProgressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReadingProgressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReadingProgressMutation, { data, loading, error }] = useUpdateReadingProgressMutation({
 *   variables: {
 *      readingProgressId: // value for 'readingProgressId'
 *      type: // value for 'type'
 *      capacity: // value for 'capacity'
 *      progress: // value for 'progress'
 *   },
 * });
 */
export function useUpdateReadingProgressMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReadingProgressMutation, UpdateReadingProgressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReadingProgressMutation, UpdateReadingProgressMutationVariables>(UpdateReadingProgressDocument, options);
      }
export type UpdateReadingProgressMutationHookResult = ReturnType<typeof useUpdateReadingProgressMutation>;
export type UpdateReadingProgressMutationResult = Apollo.MutationResult<UpdateReadingProgressMutation>;
export type UpdateReadingProgressMutationOptions = Apollo.BaseMutationOptions<UpdateReadingProgressMutation, UpdateReadingProgressMutationVariables>;
export const CreateShelfDocument = gql`
    mutation CreateShelf($data: ShelfCreateInput!) {
  createShelf(data: $data) {
    id
    name
    _count {
      userBooks
    }
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
    name
    _count {
      userBooks
    }
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
    _count {
      userBooks
    }
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
export const FollowDocument = gql`
    mutation Follow($where: UserWhereUniqueInput!, $value: Boolean!) {
  follow(where: $where, value: $value) {
    id
  }
}
    `;
export type FollowMutationFn = Apollo.MutationFunction<FollowMutation, FollowMutationVariables>;

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      where: // value for 'where'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useFollowMutation(baseOptions?: Apollo.MutationHookOptions<FollowMutation, FollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, options);
      }
export type FollowMutationHookResult = ReturnType<typeof useFollowMutation>;
export type FollowMutationResult = Apollo.MutationResult<FollowMutation>;
export type FollowMutationOptions = Apollo.BaseMutationOptions<FollowMutation, FollowMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UpdateUserInput!) {
  updateUser(data: $data) {
    id
    username
    email
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateEmailDocument = gql`
    mutation UpdateEmail($data: UpdateEmailInput!) {
  updateEmail(data: $data) {
    id
    email
  }
}
    `;
export type UpdateEmailMutationFn = Apollo.MutationFunction<UpdateEmailMutation, UpdateEmailMutationVariables>;

/**
 * __useUpdateEmailMutation__
 *
 * To run a mutation, you first call `useUpdateEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmailMutation, { data, loading, error }] = useUpdateEmailMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateEmailMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEmailMutation, UpdateEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEmailMutation, UpdateEmailMutationVariables>(UpdateEmailDocument, options);
      }
export type UpdateEmailMutationHookResult = ReturnType<typeof useUpdateEmailMutation>;
export type UpdateEmailMutationResult = Apollo.MutationResult<UpdateEmailMutation>;
export type UpdateEmailMutationOptions = Apollo.BaseMutationOptions<UpdateEmailMutation, UpdateEmailMutationVariables>;
export const CreateUserBookDocument = gql`
    mutation CreateUserBook($data: BookDataInput!) {
  createUserBook(data: $data) {
    status
    id
    book {
      title
    }
  }
}
    `;
export type CreateUserBookMutationFn = Apollo.MutationFunction<CreateUserBookMutation, CreateUserBookMutationVariables>;

/**
 * __useCreateUserBookMutation__
 *
 * To run a mutation, you first call `useCreateUserBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserBookMutation, { data, loading, error }] = useCreateUserBookMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserBookMutation, CreateUserBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserBookMutation, CreateUserBookMutationVariables>(CreateUserBookDocument, options);
      }
export type CreateUserBookMutationHookResult = ReturnType<typeof useCreateUserBookMutation>;
export type CreateUserBookMutationResult = Apollo.MutationResult<CreateUserBookMutation>;
export type CreateUserBookMutationOptions = Apollo.BaseMutationOptions<CreateUserBookMutation, CreateUserBookMutationVariables>;
export const UpdateUserBookDocument = gql`
    mutation UpdateUserBook($data: UserBookUpdateInput!, $where: UserBookWhereUniqueInput!) {
  updateUserBook(data: $data, where: $where) {
    status
    id
    book {
      __typename
    }
    shelves {
      shelf {
        id
        name
        slug
      }
    }
    __typename
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
    mutation RemoveUserBook($where: UserBookWhereUniqueInput!) {
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
export const ImportUserBooksDocument = gql`
    mutation ImportUserBooks($content: String!) {
  importUserBooks(content: $content)
}
    `;
export type ImportUserBooksMutationFn = Apollo.MutationFunction<ImportUserBooksMutation, ImportUserBooksMutationVariables>;

/**
 * __useImportUserBooksMutation__
 *
 * To run a mutation, you first call `useImportUserBooksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportUserBooksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importUserBooksMutation, { data, loading, error }] = useImportUserBooksMutation({
 *   variables: {
 *      content: // value for 'content'
 *   },
 * });
 */
export function useImportUserBooksMutation(baseOptions?: Apollo.MutationHookOptions<ImportUserBooksMutation, ImportUserBooksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImportUserBooksMutation, ImportUserBooksMutationVariables>(ImportUserBooksDocument, options);
      }
export type ImportUserBooksMutationHookResult = ReturnType<typeof useImportUserBooksMutation>;
export type ImportUserBooksMutationResult = Apollo.MutationResult<ImportUserBooksMutation>;
export type ImportUserBooksMutationOptions = Apollo.BaseMutationOptions<ImportUserBooksMutation, ImportUserBooksMutationVariables>;
export const UpdateUserBookOrderDocument = gql`
    mutation UpdateUserBookOrder($data: UserBookUpdateOrderInput!) {
  updateUserBookOrder(data: $data) {
    id
    order
  }
}
    `;
export type UpdateUserBookOrderMutationFn = Apollo.MutationFunction<UpdateUserBookOrderMutation, UpdateUserBookOrderMutationVariables>;

/**
 * __useUpdateUserBookOrderMutation__
 *
 * To run a mutation, you first call `useUpdateUserBookOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserBookOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserBookOrderMutation, { data, loading, error }] = useUpdateUserBookOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserBookOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserBookOrderMutation, UpdateUserBookOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserBookOrderMutation, UpdateUserBookOrderMutationVariables>(UpdateUserBookOrderDocument, options);
      }
export type UpdateUserBookOrderMutationHookResult = ReturnType<typeof useUpdateUserBookOrderMutation>;
export type UpdateUserBookOrderMutationResult = Apollo.MutationResult<UpdateUserBookOrderMutation>;
export type UpdateUserBookOrderMutationOptions = Apollo.BaseMutationOptions<UpdateUserBookOrderMutation, UpdateUserBookOrderMutationVariables>;
export const AddUserBookToShelfDocument = gql`
    mutation AddUserBookToShelf($where: UserBookWhereUniqueInput!, $shelf: String!) {
  addBookToShelf(where: $where, shelf: $shelf) {
    id
    status
  }
}
    `;
export type AddUserBookToShelfMutationFn = Apollo.MutationFunction<AddUserBookToShelfMutation, AddUserBookToShelfMutationVariables>;

/**
 * __useAddUserBookToShelfMutation__
 *
 * To run a mutation, you first call `useAddUserBookToShelfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserBookToShelfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserBookToShelfMutation, { data, loading, error }] = useAddUserBookToShelfMutation({
 *   variables: {
 *      where: // value for 'where'
 *      shelf: // value for 'shelf'
 *   },
 * });
 */
export function useAddUserBookToShelfMutation(baseOptions?: Apollo.MutationHookOptions<AddUserBookToShelfMutation, AddUserBookToShelfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserBookToShelfMutation, AddUserBookToShelfMutationVariables>(AddUserBookToShelfDocument, options);
      }
export type AddUserBookToShelfMutationHookResult = ReturnType<typeof useAddUserBookToShelfMutation>;
export type AddUserBookToShelfMutationResult = Apollo.MutationResult<AddUserBookToShelfMutation>;
export type AddUserBookToShelfMutationOptions = Apollo.BaseMutationOptions<AddUserBookToShelfMutation, AddUserBookToShelfMutationVariables>;
export const RemoveUserBookFromShelfDocument = gql`
    mutation RemoveUserBookFromShelf($where: UserBookWhereUniqueInput!, $shelf: String!) {
  removeBookFromShelf(where: $where, shelf: $shelf)
}
    `;
export type RemoveUserBookFromShelfMutationFn = Apollo.MutationFunction<RemoveUserBookFromShelfMutation, RemoveUserBookFromShelfMutationVariables>;

/**
 * __useRemoveUserBookFromShelfMutation__
 *
 * To run a mutation, you first call `useRemoveUserBookFromShelfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserBookFromShelfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserBookFromShelfMutation, { data, loading, error }] = useRemoveUserBookFromShelfMutation({
 *   variables: {
 *      where: // value for 'where'
 *      shelf: // value for 'shelf'
 *   },
 * });
 */
export function useRemoveUserBookFromShelfMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserBookFromShelfMutation, RemoveUserBookFromShelfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserBookFromShelfMutation, RemoveUserBookFromShelfMutationVariables>(RemoveUserBookFromShelfDocument, options);
      }
export type RemoveUserBookFromShelfMutationHookResult = ReturnType<typeof useRemoveUserBookFromShelfMutation>;
export type RemoveUserBookFromShelfMutationResult = Apollo.MutationResult<RemoveUserBookFromShelfMutation>;
export type RemoveUserBookFromShelfMutationOptions = Apollo.BaseMutationOptions<RemoveUserBookFromShelfMutation, RemoveUserBookFromShelfMutationVariables>;
export const GetAuditLogsDocument = gql`
    query GetAuditLogs($where: UserBookWhereUniqueInput, $action: ACTION, $offset: Int, $limit: Int, $orderBy: AuditLogOrderByWithRelationInput) {
  auditLogs(
    where: $where
    action: $action
    offset: $offset
    limit: $limit
    orderBy: $orderBy
  ) {
    activities {
      id
      action
      createdAt
      updatedAt
      user {
        id
        username
        email
      }
      book {
        id
        title
        authors
        pageCount
        covers {
          url
          size
        }
      }
      actionContent
    }
    hasMore
    totalActivities
  }
}
    `;

/**
 * __useGetAuditLogsQuery__
 *
 * To run a query within a React component, call `useGetAuditLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuditLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuditLogsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      action: // value for 'action'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetAuditLogsQuery(baseOptions?: Apollo.QueryHookOptions<GetAuditLogsQuery, GetAuditLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuditLogsQuery, GetAuditLogsQueryVariables>(GetAuditLogsDocument, options);
      }
export function useGetAuditLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuditLogsQuery, GetAuditLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuditLogsQuery, GetAuditLogsQueryVariables>(GetAuditLogsDocument, options);
        }
export function useGetAuditLogsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAuditLogsQuery, GetAuditLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAuditLogsQuery, GetAuditLogsQueryVariables>(GetAuditLogsDocument, options);
        }
export type GetAuditLogsQueryHookResult = ReturnType<typeof useGetAuditLogsQuery>;
export type GetAuditLogsLazyQueryHookResult = ReturnType<typeof useGetAuditLogsLazyQuery>;
export type GetAuditLogsSuspenseQueryHookResult = ReturnType<typeof useGetAuditLogsSuspenseQuery>;
export type GetAuditLogsQueryResult = Apollo.QueryResult<GetAuditLogsQuery, GetAuditLogsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    email
    username
    isOAuth
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
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const FindBookByIdentifierDocument = gql`
    query FindBookByIdentifier($identifier: IdentifierCreateInput!) {
  findBookByIdentifier(identifier: $identifier) {
    id
    userBook {
      id
      status
      rating
      shelves {
        shelf {
          id
          name
          slug
        }
      }
    }
    slug
    title
    authors
    pageCount
    identifiers {
      source
      sourceId
    }
    covers {
      url
      source
      size
    }
    ratings {
      source
      score
    }
  }
}
    `;

/**
 * __useFindBookByIdentifierQuery__
 *
 * To run a query within a React component, call `useFindBookByIdentifierQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindBookByIdentifierQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindBookByIdentifierQuery({
 *   variables: {
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export function useFindBookByIdentifierQuery(baseOptions: Apollo.QueryHookOptions<FindBookByIdentifierQuery, FindBookByIdentifierQueryVariables> & ({ variables: FindBookByIdentifierQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindBookByIdentifierQuery, FindBookByIdentifierQueryVariables>(FindBookByIdentifierDocument, options);
      }
export function useFindBookByIdentifierLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindBookByIdentifierQuery, FindBookByIdentifierQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindBookByIdentifierQuery, FindBookByIdentifierQueryVariables>(FindBookByIdentifierDocument, options);
        }
export function useFindBookByIdentifierSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindBookByIdentifierQuery, FindBookByIdentifierQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindBookByIdentifierQuery, FindBookByIdentifierQueryVariables>(FindBookByIdentifierDocument, options);
        }
export type FindBookByIdentifierQueryHookResult = ReturnType<typeof useFindBookByIdentifierQuery>;
export type FindBookByIdentifierLazyQueryHookResult = ReturnType<typeof useFindBookByIdentifierLazyQuery>;
export type FindBookByIdentifierSuspenseQueryHookResult = ReturnType<typeof useFindBookByIdentifierSuspenseQuery>;
export type FindBookByIdentifierQueryResult = Apollo.QueryResult<FindBookByIdentifierQuery, FindBookByIdentifierQueryVariables>;
export const SearchMyLibraryDocument = gql`
    query SearchMyLibrary($query: String!, $offset: Int, $limit: Int) {
  searchMyLibrary(query: $query, offset: $offset, limit: $limit) {
    id
    userBook {
      id
      status
      rating
      shelves {
        shelf {
          id
          name
          slug
        }
      }
    }
    slug
    title
    authors
    pageCount
    identifiers {
      source
      sourceId
    }
    covers {
      url
      source
      size
    }
    ratings {
      source
      score
    }
  }
}
    `;

/**
 * __useSearchMyLibraryQuery__
 *
 * To run a query within a React component, call `useSearchMyLibraryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMyLibraryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMyLibraryQuery({
 *   variables: {
 *      query: // value for 'query'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchMyLibraryQuery(baseOptions: Apollo.QueryHookOptions<SearchMyLibraryQuery, SearchMyLibraryQueryVariables> & ({ variables: SearchMyLibraryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMyLibraryQuery, SearchMyLibraryQueryVariables>(SearchMyLibraryDocument, options);
      }
export function useSearchMyLibraryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMyLibraryQuery, SearchMyLibraryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMyLibraryQuery, SearchMyLibraryQueryVariables>(SearchMyLibraryDocument, options);
        }
export function useSearchMyLibrarySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchMyLibraryQuery, SearchMyLibraryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchMyLibraryQuery, SearchMyLibraryQueryVariables>(SearchMyLibraryDocument, options);
        }
export type SearchMyLibraryQueryHookResult = ReturnType<typeof useSearchMyLibraryQuery>;
export type SearchMyLibraryLazyQueryHookResult = ReturnType<typeof useSearchMyLibraryLazyQuery>;
export type SearchMyLibrarySuspenseQueryHookResult = ReturnType<typeof useSearchMyLibrarySuspenseQuery>;
export type SearchMyLibraryQueryResult = Apollo.QueryResult<SearchMyLibraryQuery, SearchMyLibraryQueryVariables>;
export const ReadDatesDocument = gql`
    query readDates($userBookIds: [String!]!, $active: Boolean) {
  readDates(userBookIds: $userBookIds, active: $active) {
    id
    userBookId
    startDate
    finishedDate
    active
    readingProgress {
      id
      capacity
      type
      progress
    }
  }
}
    `;

/**
 * __useReadDatesQuery__
 *
 * To run a query within a React component, call `useReadDatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadDatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadDatesQuery({
 *   variables: {
 *      userBookIds: // value for 'userBookIds'
 *      active: // value for 'active'
 *   },
 * });
 */
export function useReadDatesQuery(baseOptions: Apollo.QueryHookOptions<ReadDatesQuery, ReadDatesQueryVariables> & ({ variables: ReadDatesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReadDatesQuery, ReadDatesQueryVariables>(ReadDatesDocument, options);
      }
export function useReadDatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReadDatesQuery, ReadDatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReadDatesQuery, ReadDatesQueryVariables>(ReadDatesDocument, options);
        }
export function useReadDatesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReadDatesQuery, ReadDatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReadDatesQuery, ReadDatesQueryVariables>(ReadDatesDocument, options);
        }
export type ReadDatesQueryHookResult = ReturnType<typeof useReadDatesQuery>;
export type ReadDatesLazyQueryHookResult = ReturnType<typeof useReadDatesLazyQuery>;
export type ReadDatesSuspenseQueryHookResult = ReturnType<typeof useReadDatesSuspenseQuery>;
export type ReadDatesQueryResult = Apollo.QueryResult<ReadDatesQuery, ReadDatesQueryVariables>;
export const ShelvesDocument = gql`
    query Shelves {
  shelves {
    id
    name
    slug
    _count {
      userBooks
    }
    user {
      id
    }
    userId
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
export function useShelvesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ShelvesQuery, ShelvesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ShelvesQuery, ShelvesQueryVariables>(ShelvesDocument, options);
        }
export type ShelvesQueryHookResult = ReturnType<typeof useShelvesQuery>;
export type ShelvesLazyQueryHookResult = ReturnType<typeof useShelvesLazyQuery>;
export type ShelvesSuspenseQueryHookResult = ReturnType<typeof useShelvesSuspenseQuery>;
export type ShelvesQueryResult = Apollo.QueryResult<ShelvesQuery, ShelvesQueryVariables>;
export const GetMyBookShelvesDocument = gql`
    query getMyBookShelves($where: UserBookWhereUniqueInput!) {
  getMyBookShelves(where: $where) {
    userBook {
      id
    }
    shelf {
      id
      name
      slug
    }
  }
}
    `;

/**
 * __useGetMyBookShelvesQuery__
 *
 * To run a query within a React component, call `useGetMyBookShelvesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyBookShelvesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyBookShelvesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetMyBookShelvesQuery(baseOptions: Apollo.QueryHookOptions<GetMyBookShelvesQuery, GetMyBookShelvesQueryVariables> & ({ variables: GetMyBookShelvesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyBookShelvesQuery, GetMyBookShelvesQueryVariables>(GetMyBookShelvesDocument, options);
      }
export function useGetMyBookShelvesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyBookShelvesQuery, GetMyBookShelvesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyBookShelvesQuery, GetMyBookShelvesQueryVariables>(GetMyBookShelvesDocument, options);
        }
export function useGetMyBookShelvesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMyBookShelvesQuery, GetMyBookShelvesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyBookShelvesQuery, GetMyBookShelvesQueryVariables>(GetMyBookShelvesDocument, options);
        }
export type GetMyBookShelvesQueryHookResult = ReturnType<typeof useGetMyBookShelvesQuery>;
export type GetMyBookShelvesLazyQueryHookResult = ReturnType<typeof useGetMyBookShelvesLazyQuery>;
export type GetMyBookShelvesSuspenseQueryHookResult = ReturnType<typeof useGetMyBookShelvesSuspenseQuery>;
export type GetMyBookShelvesQueryResult = Apollo.QueryResult<GetMyBookShelvesQuery, GetMyBookShelvesQueryVariables>;
export const BooksByShelfDocument = gql`
    query BooksByShelf($slug: String!, $username: String!) {
  booksByShelf(slug: $slug, username: $username) {
    id
    name
    slug
    user {
      id
      username
    }
    userBooks {
      userBook {
        book {
          id
          slug
          authors
          title
          identifiers {
            source
            sourceId
          }
          covers {
            url
            size
          }
          ratings {
            source
            score
          }
        }
      }
    }
    _count {
      userBooks
    }
  }
}
    `;

/**
 * __useBooksByShelfQuery__
 *
 * To run a query within a React component, call `useBooksByShelfQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksByShelfQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksByShelfQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useBooksByShelfQuery(baseOptions: Apollo.QueryHookOptions<BooksByShelfQuery, BooksByShelfQueryVariables> & ({ variables: BooksByShelfQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BooksByShelfQuery, BooksByShelfQueryVariables>(BooksByShelfDocument, options);
      }
export function useBooksByShelfLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksByShelfQuery, BooksByShelfQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BooksByShelfQuery, BooksByShelfQueryVariables>(BooksByShelfDocument, options);
        }
export function useBooksByShelfSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BooksByShelfQuery, BooksByShelfQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BooksByShelfQuery, BooksByShelfQueryVariables>(BooksByShelfDocument, options);
        }
export type BooksByShelfQueryHookResult = ReturnType<typeof useBooksByShelfQuery>;
export type BooksByShelfLazyQueryHookResult = ReturnType<typeof useBooksByShelfLazyQuery>;
export type BooksByShelfSuspenseQueryHookResult = ReturnType<typeof useBooksByShelfSuspenseQuery>;
export type BooksByShelfQueryResult = Apollo.QueryResult<BooksByShelfQuery, BooksByShelfQueryVariables>;
export const ShelvesWithBookCoversDocument = gql`
    query ShelvesWithBookCovers {
  shelves {
    id
    name
    slug
    userBooks {
      userBook {
        id
        book {
          id
          covers {
            url
            size
          }
        }
      }
    }
    _count {
      userBooks
    }
    userId
  }
}
    `;

/**
 * __useShelvesWithBookCoversQuery__
 *
 * To run a query within a React component, call `useShelvesWithBookCoversQuery` and pass it any options that fit your needs.
 * When your component renders, `useShelvesWithBookCoversQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShelvesWithBookCoversQuery({
 *   variables: {
 *   },
 * });
 */
export function useShelvesWithBookCoversQuery(baseOptions?: Apollo.QueryHookOptions<ShelvesWithBookCoversQuery, ShelvesWithBookCoversQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShelvesWithBookCoversQuery, ShelvesWithBookCoversQueryVariables>(ShelvesWithBookCoversDocument, options);
      }
export function useShelvesWithBookCoversLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShelvesWithBookCoversQuery, ShelvesWithBookCoversQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShelvesWithBookCoversQuery, ShelvesWithBookCoversQueryVariables>(ShelvesWithBookCoversDocument, options);
        }
export function useShelvesWithBookCoversSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ShelvesWithBookCoversQuery, ShelvesWithBookCoversQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ShelvesWithBookCoversQuery, ShelvesWithBookCoversQueryVariables>(ShelvesWithBookCoversDocument, options);
        }
export type ShelvesWithBookCoversQueryHookResult = ReturnType<typeof useShelvesWithBookCoversQuery>;
export type ShelvesWithBookCoversLazyQueryHookResult = ReturnType<typeof useShelvesWithBookCoversLazyQuery>;
export type ShelvesWithBookCoversSuspenseQueryHookResult = ReturnType<typeof useShelvesWithBookCoversSuspenseQuery>;
export type ShelvesWithBookCoversQueryResult = Apollo.QueryResult<ShelvesWithBookCoversQuery, ShelvesWithBookCoversQueryVariables>;
export const UserDocument = gql`
    query User($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    username
    email
    bio
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables> & ({ variables: UserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export function useUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserBookDocument = gql`
    query UserBook($where: BookWhereUniqueInput!) {
  userBook(where: $where) {
    user {
      id
    }
    book {
      slug
      id
      title
      authors
      pageCount
      yearPublished
      identifiers {
        source
        sourceId
      }
      covers {
        url
        size
      }
      ratings {
        score
        source
      }
    }
    userId
    status
    rating
    shelves {
      shelf {
        id
        name
      }
    }
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
export function useUserBookQuery(baseOptions: Apollo.QueryHookOptions<UserBookQuery, UserBookQueryVariables> & ({ variables: UserBookQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserBookQuery, UserBookQueryVariables>(UserBookDocument, options);
      }
export function useUserBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserBookQuery, UserBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserBookQuery, UserBookQueryVariables>(UserBookDocument, options);
        }
export function useUserBookSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserBookQuery, UserBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserBookQuery, UserBookQueryVariables>(UserBookDocument, options);
        }
export type UserBookQueryHookResult = ReturnType<typeof useUserBookQuery>;
export type UserBookLazyQueryHookResult = ReturnType<typeof useUserBookLazyQuery>;
export type UserBookSuspenseQueryHookResult = ReturnType<typeof useUserBookSuspenseQuery>;
export type UserBookQueryResult = Apollo.QueryResult<UserBookQuery, UserBookQueryVariables>;
export const GetUserBooksDocument = gql`
    query GetUserBooks($where: UserBookWhereInput, $limit: Int! = 100, $offset: Int! = 0, $orderBy: UserBookOrderByWithRelationInput) {
  getUserBooks(where: $where, offset: $offset, limit: $limit, orderBy: $orderBy) {
    userBooks {
      id
      user {
        id
      }
      book {
        id
        slug
        title
        authors
        pageCount
        yearPublished
        identifiers {
          source
          sourceId
        }
        covers {
          url
          size
        }
        ratings {
          score
          source
        }
      }
      userId
      status
      rating
      createdAt
      updatedAt
      order
      shelves {
        shelf {
          id
          name
        }
      }
      _count {
        shelves
      }
    }
    hasMore
    totalBooks
  }
}
    `;

/**
 * __useGetUserBooksQuery__
 *
 * To run a query within a React component, call `useGetUserBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBooksQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetUserBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetUserBooksQuery, GetUserBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserBooksQuery, GetUserBooksQueryVariables>(GetUserBooksDocument, options);
      }
export function useGetUserBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserBooksQuery, GetUserBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserBooksQuery, GetUserBooksQueryVariables>(GetUserBooksDocument, options);
        }
export function useGetUserBooksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserBooksQuery, GetUserBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserBooksQuery, GetUserBooksQueryVariables>(GetUserBooksDocument, options);
        }
export type GetUserBooksQueryHookResult = ReturnType<typeof useGetUserBooksQuery>;
export type GetUserBooksLazyQueryHookResult = ReturnType<typeof useGetUserBooksLazyQuery>;
export type GetUserBooksSuspenseQueryHookResult = ReturnType<typeof useGetUserBooksSuspenseQuery>;
export type GetUserBooksQueryResult = Apollo.QueryResult<GetUserBooksQuery, GetUserBooksQueryVariables>;
export const CountUserBooksDocument = gql`
    query CountUserBooks($where: UserBookWhereInput) {
  countUserBooks(where: $where)
}
    `;

/**
 * __useCountUserBooksQuery__
 *
 * To run a query within a React component, call `useCountUserBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountUserBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountUserBooksQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCountUserBooksQuery(baseOptions?: Apollo.QueryHookOptions<CountUserBooksQuery, CountUserBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountUserBooksQuery, CountUserBooksQueryVariables>(CountUserBooksDocument, options);
      }
export function useCountUserBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountUserBooksQuery, CountUserBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountUserBooksQuery, CountUserBooksQueryVariables>(CountUserBooksDocument, options);
        }
export function useCountUserBooksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CountUserBooksQuery, CountUserBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountUserBooksQuery, CountUserBooksQueryVariables>(CountUserBooksDocument, options);
        }
export type CountUserBooksQueryHookResult = ReturnType<typeof useCountUserBooksQuery>;
export type CountUserBooksLazyQueryHookResult = ReturnType<typeof useCountUserBooksLazyQuery>;
export type CountUserBooksSuspenseQueryHookResult = ReturnType<typeof useCountUserBooksSuspenseQuery>;
export type CountUserBooksQueryResult = Apollo.QueryResult<CountUserBooksQuery, CountUserBooksQueryVariables>;
export const BookCountsByUserIdDocument = gql`
    query BookCountsByUserId($userId: String!) {
  bookCountsByUserId(userId: $userId) {
    wantsToReadCount
    readingCount
    finishedCount
    upNextCount
  }
}
    `;

/**
 * __useBookCountsByUserIdQuery__
 *
 * To run a query within a React component, call `useBookCountsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookCountsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookCountsByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useBookCountsByUserIdQuery(baseOptions: Apollo.QueryHookOptions<BookCountsByUserIdQuery, BookCountsByUserIdQueryVariables> & ({ variables: BookCountsByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookCountsByUserIdQuery, BookCountsByUserIdQueryVariables>(BookCountsByUserIdDocument, options);
      }
export function useBookCountsByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookCountsByUserIdQuery, BookCountsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookCountsByUserIdQuery, BookCountsByUserIdQueryVariables>(BookCountsByUserIdDocument, options);
        }
export function useBookCountsByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BookCountsByUserIdQuery, BookCountsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BookCountsByUserIdQuery, BookCountsByUserIdQueryVariables>(BookCountsByUserIdDocument, options);
        }
export type BookCountsByUserIdQueryHookResult = ReturnType<typeof useBookCountsByUserIdQuery>;
export type BookCountsByUserIdLazyQueryHookResult = ReturnType<typeof useBookCountsByUserIdLazyQuery>;
export type BookCountsByUserIdSuspenseQueryHookResult = ReturnType<typeof useBookCountsByUserIdSuspenseQuery>;
export type BookCountsByUserIdQueryResult = Apollo.QueryResult<BookCountsByUserIdQuery, BookCountsByUserIdQueryVariables>;