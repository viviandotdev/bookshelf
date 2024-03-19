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
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  id_token?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  expires_at?: Maybe<Scalars['Float']>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int'];
  access_token: Scalars['Int'];
  expires_at: Scalars['Int'];
  id: Scalars['Int'];
  id_token: Scalars['Int'];
  provider: Scalars['Int'];
  providerAccountId: Scalars['Int'];
  refresh_token: Scalars['Int'];
  scope: Scalars['Int'];
  session_state: Scalars['Int'];
  token_type: Scalars['Int'];
  type: Scalars['Int'];
  userId: Scalars['Int'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
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
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
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
  expires_at?: Maybe<Scalars['Int']>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
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
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['String']>;
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
  hasMore: Scalars['Boolean'];
  totalActivities: Scalars['Float'];
};

export type AuditLog = {
  __typename?: 'AuditLog';
  action: Action;
  actionContent?: Maybe<Scalars['String']>;
  book?: Maybe<Book>;
  bookId: Scalars['Int'];
  createdAt: Scalars['Timestamp'];
  id: Scalars['ID'];
  updatedAt: Scalars['Timestamp'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type AuditLogAvgAggregate = {
  __typename?: 'AuditLogAvgAggregate';
  bookId?: Maybe<Scalars['Float']>;
};

export type AuditLogCountAggregate = {
  __typename?: 'AuditLogCountAggregate';
  _all: Scalars['Int'];
  action: Scalars['Int'];
  actionContent: Scalars['Int'];
  bookId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type AuditLogCreateManyBookInput = {
  action: Action;
  actionContent?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userId: Scalars['String'];
};

export type AuditLogCreateManyBookInputEnvelope = {
  data: Array<AuditLogCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AuditLogCreateManyUserInput = {
  action: Action;
  actionContent?: InputMaybe<Scalars['String']>;
  bookId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
};

export type AuditLogCreateManyUserInputEnvelope = {
  data: Array<AuditLogCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
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
  actionContent?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  user?: InputMaybe<UserCreateNestedOneWithoutAuditLogsInput>;
};

export type AuditLogCreateWithoutUserInput = {
  action: Action;
  actionContent?: InputMaybe<Scalars['String']>;
  book?: InputMaybe<BookCreateNestedOneWithoutLogsInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
};

export type AuditLogListRelationFilter = {
  every?: InputMaybe<AuditLogWhereInput>;
  none?: InputMaybe<AuditLogWhereInput>;
  some?: InputMaybe<AuditLogWhereInput>;
};

export type AuditLogMaxAggregate = {
  __typename?: 'AuditLogMaxAggregate';
  action?: Maybe<Action>;
  actionContent?: Maybe<Scalars['String']>;
  bookId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId?: Maybe<Scalars['String']>;
};

export type AuditLogMinAggregate = {
  __typename?: 'AuditLogMinAggregate';
  action?: Maybe<Action>;
  actionContent?: Maybe<Scalars['String']>;
  bookId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId?: Maybe<Scalars['String']>;
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
  bookId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AuditLogSumAggregate = {
  __typename?: 'AuditLogSumAggregate';
  bookId?: Maybe<Scalars['Int']>;
};

export type AuditLogUpdateManyMutationInput = {
  action?: InputMaybe<Action>;
  actionContent?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
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
  actionContent?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  user?: InputMaybe<UserUpdateOneWithoutAuditLogsNestedInput>;
};

export type AuditLogUpdateWithoutUserInput = {
  action?: InputMaybe<Action>;
  actionContent?: InputMaybe<Scalars['String']>;
  book?: InputMaybe<BookUpdateOneWithoutLogsNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
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
  bookId?: InputMaybe<IntFilter>;
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
  bookId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['Float']>;
  isNewUser?: Maybe<Scalars['Boolean']>;
  refreshToken?: Maybe<Scalars['String']>;
  user: User;
  verificationToken?: Maybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  _count: AuthorCount;
  bio?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Timestamp']>;
  books?: Maybe<Array<Book>>;
  deathDate?: Maybe<Scalars['Timestamp']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  works?: Maybe<Array<Work>>;
};

export type AuthorCount = {
  __typename?: 'AuthorCount';
  books: Scalars['Int'];
  works: Scalars['Int'];
};

export type AuthorCountAggregate = {
  __typename?: 'AuthorCountAggregate';
  _all: Scalars['Int'];
  bio: Scalars['Int'];
  birthDate: Scalars['Int'];
  deathDate: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  photo: Scalars['Int'];
  wikipedia: Scalars['Int'];
};

export type AuthorCreateInput = {
  bio?: InputMaybe<Scalars['String']>;
  birthDate?: InputMaybe<Scalars['Timestamp']>;
  books?: InputMaybe<BookCreateNestedManyWithoutAuthorsInput>;
  deathDate?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  wikipedia?: InputMaybe<Scalars['String']>;
  works?: InputMaybe<WorkCreateNestedManyWithoutAuthorsInput>;
};

export type AuthorCreateNestedManyWithoutBooksInput = {
  connect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuthorCreateOrConnectWithoutBooksInput>>;
  create?: InputMaybe<Array<AuthorCreateWithoutBooksInput>>;
};

export type AuthorCreateNestedManyWithoutWorksInput = {
  connect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuthorCreateOrConnectWithoutWorksInput>>;
  create?: InputMaybe<Array<AuthorCreateWithoutWorksInput>>;
};

export type AuthorCreateOrConnectWithoutBooksInput = {
  create: AuthorCreateWithoutBooksInput;
  where: AuthorWhereUniqueInput;
};

export type AuthorCreateOrConnectWithoutWorksInput = {
  create: AuthorCreateWithoutWorksInput;
  where: AuthorWhereUniqueInput;
};

export type AuthorCreateWithoutBooksInput = {
  bio?: InputMaybe<Scalars['String']>;
  birthDate?: InputMaybe<Scalars['Timestamp']>;
  deathDate?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  wikipedia?: InputMaybe<Scalars['String']>;
  works?: InputMaybe<WorkCreateNestedManyWithoutAuthorsInput>;
};

export type AuthorCreateWithoutWorksInput = {
  bio?: InputMaybe<Scalars['String']>;
  birthDate?: InputMaybe<Scalars['Timestamp']>;
  books?: InputMaybe<BookCreateNestedManyWithoutAuthorsInput>;
  deathDate?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  wikipedia?: InputMaybe<Scalars['String']>;
};

export type AuthorListRelationFilter = {
  every?: InputMaybe<AuthorWhereInput>;
  none?: InputMaybe<AuthorWhereInput>;
  some?: InputMaybe<AuthorWhereInput>;
};

export type AuthorMaxAggregate = {
  __typename?: 'AuthorMaxAggregate';
  bio?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Timestamp']>;
  deathDate?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type AuthorMinAggregate = {
  __typename?: 'AuthorMinAggregate';
  bio?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Timestamp']>;
  deathDate?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type AuthorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AuthorScalarWhereInput = {
  AND?: InputMaybe<Array<AuthorScalarWhereInput>>;
  NOT?: InputMaybe<Array<AuthorScalarWhereInput>>;
  OR?: InputMaybe<Array<AuthorScalarWhereInput>>;
  bio?: InputMaybe<StringFilter>;
  birthDate?: InputMaybe<DateTimeFilter>;
  deathDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  photo?: InputMaybe<StringFilter>;
  wikipedia?: InputMaybe<StringFilter>;
};

export type AuthorUpdateManyMutationInput = {
  bio?: InputMaybe<Scalars['String']>;
  birthDate?: InputMaybe<Scalars['Timestamp']>;
  deathDate?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  wikipedia?: InputMaybe<Scalars['String']>;
};

export type AuthorUpdateManyWithWhereWithoutBooksInput = {
  data: AuthorUpdateManyMutationInput;
  where: AuthorScalarWhereInput;
};

export type AuthorUpdateManyWithWhereWithoutWorksInput = {
  data: AuthorUpdateManyMutationInput;
  where: AuthorScalarWhereInput;
};

export type AuthorUpdateManyWithoutBooksNestedInput = {
  connect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuthorCreateOrConnectWithoutBooksInput>>;
  create?: InputMaybe<Array<AuthorCreateWithoutBooksInput>>;
  delete?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AuthorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  set?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  update?: InputMaybe<Array<AuthorUpdateWithWhereUniqueWithoutBooksInput>>;
  updateMany?: InputMaybe<Array<AuthorUpdateManyWithWhereWithoutBooksInput>>;
  upsert?: InputMaybe<Array<AuthorUpsertWithWhereUniqueWithoutBooksInput>>;
};

export type AuthorUpdateManyWithoutWorksNestedInput = {
  connect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuthorCreateOrConnectWithoutWorksInput>>;
  create?: InputMaybe<Array<AuthorCreateWithoutWorksInput>>;
  delete?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AuthorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  set?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  update?: InputMaybe<Array<AuthorUpdateWithWhereUniqueWithoutWorksInput>>;
  updateMany?: InputMaybe<Array<AuthorUpdateManyWithWhereWithoutWorksInput>>;
  upsert?: InputMaybe<Array<AuthorUpsertWithWhereUniqueWithoutWorksInput>>;
};

export type AuthorUpdateWithWhereUniqueWithoutBooksInput = {
  data: AuthorUpdateWithoutBooksInput;
  where: AuthorWhereUniqueInput;
};

export type AuthorUpdateWithWhereUniqueWithoutWorksInput = {
  data: AuthorUpdateWithoutWorksInput;
  where: AuthorWhereUniqueInput;
};

export type AuthorUpdateWithoutBooksInput = {
  bio?: InputMaybe<Scalars['String']>;
  birthDate?: InputMaybe<Scalars['Timestamp']>;
  deathDate?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  wikipedia?: InputMaybe<Scalars['String']>;
  works?: InputMaybe<WorkUpdateManyWithoutAuthorsNestedInput>;
};

export type AuthorUpdateWithoutWorksInput = {
  bio?: InputMaybe<Scalars['String']>;
  birthDate?: InputMaybe<Scalars['Timestamp']>;
  books?: InputMaybe<BookUpdateManyWithoutAuthorsNestedInput>;
  deathDate?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  wikipedia?: InputMaybe<Scalars['String']>;
};

export type AuthorUpsertWithWhereUniqueWithoutBooksInput = {
  create: AuthorCreateWithoutBooksInput;
  update: AuthorUpdateWithoutBooksInput;
  where: AuthorWhereUniqueInput;
};

export type AuthorUpsertWithWhereUniqueWithoutWorksInput = {
  create: AuthorCreateWithoutWorksInput;
  update: AuthorUpdateWithoutWorksInput;
  where: AuthorWhereUniqueInput;
};

export type AuthorWhereInput = {
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  bio?: InputMaybe<StringFilter>;
  birthDate?: InputMaybe<DateTimeFilter>;
  books?: InputMaybe<BookListRelationFilter>;
  deathDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  photo?: InputMaybe<StringFilter>;
  wikipedia?: InputMaybe<StringFilter>;
  works?: InputMaybe<WorkListRelationFilter>;
};

export type AuthorWhereUniqueInput = {
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  bio?: InputMaybe<StringFilter>;
  birthDate?: InputMaybe<DateTimeFilter>;
  books?: InputMaybe<BookListRelationFilter>;
  deathDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<StringFilter>;
  photo?: InputMaybe<StringFilter>;
  wikipedia?: InputMaybe<StringFilter>;
  works?: InputMaybe<WorkListRelationFilter>;
};

export type Book = {
  __typename?: 'Book';
  _count: BookCount;
  authors?: Maybe<Array<Author>>;
  coverImage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifier?: Maybe<Identifier>;
  language?: Maybe<Scalars['String']>;
  logs?: Maybe<Array<AuditLog>>;
  pageCount?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Review>>;
  title: Scalars['String'];
  userBook?: Maybe<Array<UserBook>>;
  work?: Maybe<Work>;
  workId?: Maybe<Scalars['String']>;
};

export type BookAvgAggregate = {
  __typename?: 'BookAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  pageCount?: Maybe<Scalars['Float']>;
};

export type BookCount = {
  __typename?: 'BookCount';
  authors: Scalars['Int'];
  logs: Scalars['Int'];
  reviews: Scalars['Int'];
  userBook: Scalars['Int'];
};

export type BookCountAggregate = {
  __typename?: 'BookCountAggregate';
  _all: Scalars['Int'];
  coverImage: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  language: Scalars['Int'];
  pageCount: Scalars['Int'];
  publishedDate: Scalars['Int'];
  publisher: Scalars['Int'];
  title: Scalars['Int'];
  workId: Scalars['Int'];
};

export type BookCreateInput = {
  authors?: InputMaybe<AuthorCreateNestedManyWithoutBooksInput>;
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<IdentifierCreateNestedOneWithoutBookInput>;
  language?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  title: Scalars['String'];
  userBook?: InputMaybe<UserBookCreateNestedManyWithoutBookInput>;
  work?: InputMaybe<WorkCreateNestedOneWithoutEditionsInput>;
};

export type BookCreateManyWorkInput = {
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
  pageCount?: InputMaybe<Scalars['Int']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type BookCreateManyWorkInputEnvelope = {
  data: Array<BookCreateManyWorkInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BookCreateNestedManyWithoutAuthorsInput = {
  connect?: InputMaybe<Array<BookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookCreateOrConnectWithoutAuthorsInput>>;
  create?: InputMaybe<Array<BookCreateWithoutAuthorsInput>>;
};

export type BookCreateNestedManyWithoutWorkInput = {
  connect?: InputMaybe<Array<BookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookCreateOrConnectWithoutWorkInput>>;
  create?: InputMaybe<Array<BookCreateWithoutWorkInput>>;
  createMany?: InputMaybe<BookCreateManyWorkInputEnvelope>;
};

export type BookCreateNestedOneWithoutLogsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutLogsInput>;
  create?: InputMaybe<BookCreateWithoutLogsInput>;
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

export type BookCreateOrConnectWithoutAuthorsInput = {
  create: BookCreateWithoutAuthorsInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutLogsInput = {
  create: BookCreateWithoutLogsInput;
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

export type BookCreateOrConnectWithoutWorkInput = {
  create: BookCreateWithoutWorkInput;
  where: BookWhereUniqueInput;
};

export type BookCreateWithoutAuthorsInput = {
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<IdentifierCreateNestedOneWithoutBookInput>;
  language?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  title: Scalars['String'];
  userBook?: InputMaybe<UserBookCreateNestedManyWithoutBookInput>;
  work?: InputMaybe<WorkCreateNestedOneWithoutEditionsInput>;
};

export type BookCreateWithoutLogsInput = {
  authors?: InputMaybe<AuthorCreateNestedManyWithoutBooksInput>;
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<IdentifierCreateNestedOneWithoutBookInput>;
  language?: InputMaybe<Scalars['String']>;
  pageCount?: InputMaybe<Scalars['Int']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  title: Scalars['String'];
  userBook?: InputMaybe<UserBookCreateNestedManyWithoutBookInput>;
  work?: InputMaybe<WorkCreateNestedOneWithoutEditionsInput>;
};

export type BookCreateWithoutReviewsInput = {
  authors?: InputMaybe<AuthorCreateNestedManyWithoutBooksInput>;
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<IdentifierCreateNestedOneWithoutBookInput>;
  language?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  userBook?: InputMaybe<UserBookCreateNestedManyWithoutBookInput>;
  work?: InputMaybe<WorkCreateNestedOneWithoutEditionsInput>;
};

export type BookCreateWithoutUserBookInput = {
  authors?: InputMaybe<AuthorCreateNestedManyWithoutBooksInput>;
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<IdentifierCreateNestedOneWithoutBookInput>;
  language?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  title: Scalars['String'];
  work?: InputMaybe<WorkCreateNestedOneWithoutEditionsInput>;
};

export type BookCreateWithoutWorkInput = {
  authors?: InputMaybe<AuthorCreateNestedManyWithoutBooksInput>;
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<IdentifierCreateNestedOneWithoutBookInput>;
  language?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  title: Scalars['String'];
  userBook?: InputMaybe<UserBookCreateNestedManyWithoutBookInput>;
};

export type BookItemInput = {
  id: Scalars['Float'];
  order: Scalars['Float'];
  status: Scalars['String'];
  title: Scalars['String'];
};

export type BookListRelationFilter = {
  every?: InputMaybe<BookWhereInput>;
  none?: InputMaybe<BookWhereInput>;
  some?: InputMaybe<BookWhereInput>;
};

export type BookMaxAggregate = {
  __typename?: 'BookMaxAggregate';
  coverImage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  pageCount?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  workId?: Maybe<Scalars['String']>;
};

export type BookMinAggregate = {
  __typename?: 'BookMinAggregate';
  coverImage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  pageCount?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  workId?: Maybe<Scalars['String']>;
};

export type BookOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookOrderByWithRelationInput = {
  authors?: InputMaybe<AuthorOrderByRelationAggregateInput>;
  coverImage?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<IdentifierOrderByWithRelationInput>;
  language?: InputMaybe<SortOrderInput>;
  logs?: InputMaybe<AuditLogOrderByRelationAggregateInput>;
  pageCount?: InputMaybe<SortOrderInput>;
  publishedDate?: InputMaybe<SortOrderInput>;
  publisher?: InputMaybe<SortOrderInput>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  userBook?: InputMaybe<UserBookOrderByRelationAggregateInput>;
  work?: InputMaybe<WorkOrderByWithRelationInput>;
  workId?: InputMaybe<SortOrderInput>;
};

export type BookRelationFilter = {
  is?: InputMaybe<BookWhereInput>;
  isNot?: InputMaybe<BookWhereInput>;
};

export type BookScalarWhereInput = {
  AND?: InputMaybe<Array<BookScalarWhereInput>>;
  NOT?: InputMaybe<Array<BookScalarWhereInput>>;
  OR?: InputMaybe<Array<BookScalarWhereInput>>;
  coverImage?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  language?: InputMaybe<StringFilter>;
  pageCount?: InputMaybe<IntFilter>;
  publishedDate?: InputMaybe<StringFilter>;
  publisher?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  workId?: InputMaybe<StringFilter>;
};

export type BookSumAggregate = {
  __typename?: 'BookSumAggregate';
  id?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
};

export type BookUpdateManyMutationInput = {
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  pageCount?: InputMaybe<Scalars['Int']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BookUpdateManyWithWhereWithoutAuthorsInput = {
  data: BookUpdateManyMutationInput;
  where: BookScalarWhereInput;
};

export type BookUpdateManyWithWhereWithoutWorkInput = {
  data: BookUpdateManyMutationInput;
  where: BookScalarWhereInput;
};

export type BookUpdateManyWithoutAuthorsNestedInput = {
  connect?: InputMaybe<Array<BookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookCreateOrConnectWithoutAuthorsInput>>;
  create?: InputMaybe<Array<BookCreateWithoutAuthorsInput>>;
  delete?: InputMaybe<Array<BookWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookWhereUniqueInput>>;
  set?: InputMaybe<Array<BookWhereUniqueInput>>;
  update?: InputMaybe<Array<BookUpdateWithWhereUniqueWithoutAuthorsInput>>;
  updateMany?: InputMaybe<Array<BookUpdateManyWithWhereWithoutAuthorsInput>>;
  upsert?: InputMaybe<Array<BookUpsertWithWhereUniqueWithoutAuthorsInput>>;
};

export type BookUpdateManyWithoutWorkNestedInput = {
  connect?: InputMaybe<Array<BookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookCreateOrConnectWithoutWorkInput>>;
  create?: InputMaybe<Array<BookCreateWithoutWorkInput>>;
  createMany?: InputMaybe<BookCreateManyWorkInputEnvelope>;
  delete?: InputMaybe<Array<BookWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookWhereUniqueInput>>;
  set?: InputMaybe<Array<BookWhereUniqueInput>>;
  update?: InputMaybe<Array<BookUpdateWithWhereUniqueWithoutWorkInput>>;
  updateMany?: InputMaybe<Array<BookUpdateManyWithWhereWithoutWorkInput>>;
  upsert?: InputMaybe<Array<BookUpsertWithWhereUniqueWithoutWorkInput>>;
};

export type BookUpdateOneWithoutLogsNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutLogsInput>;
  create?: InputMaybe<BookCreateWithoutLogsInput>;
  delete?: InputMaybe<BookWhereInput>;
  disconnect?: InputMaybe<BookWhereInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutLogsInput>;
  upsert?: InputMaybe<BookUpsertWithoutLogsInput>;
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

export type BookUpdateOneWithoutUserBookNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutUserBookInput>;
  create?: InputMaybe<BookCreateWithoutUserBookInput>;
  delete?: InputMaybe<BookWhereInput>;
  disconnect?: InputMaybe<BookWhereInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutUserBookInput>;
  upsert?: InputMaybe<BookUpsertWithoutUserBookInput>;
};

export type BookUpdateToOneWithWhereWithoutLogsInput = {
  data: BookUpdateWithoutLogsInput;
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

export type BookUpdateWithWhereUniqueWithoutAuthorsInput = {
  data: BookUpdateWithoutAuthorsInput;
  where: BookWhereUniqueInput;
};

export type BookUpdateWithWhereUniqueWithoutWorkInput = {
  data: BookUpdateWithoutWorkInput;
  where: BookWhereUniqueInput;
};

export type BookUpdateWithoutAuthorsInput = {
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<IdentifierUpdateOneWithoutBookNestedInput>;
  language?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<AuditLogUpdateManyWithoutBookNestedInput>;
  pageCount?: InputMaybe<Scalars['Int']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutBookNestedInput>;
  title?: InputMaybe<Scalars['String']>;
  userBook?: InputMaybe<UserBookUpdateManyWithoutBookNestedInput>;
  work?: InputMaybe<WorkUpdateOneWithoutEditionsNestedInput>;
};

export type BookUpdateWithoutLogsInput = {
  authors?: InputMaybe<AuthorUpdateManyWithoutBooksNestedInput>;
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<IdentifierUpdateOneWithoutBookNestedInput>;
  language?: InputMaybe<Scalars['String']>;
  pageCount?: InputMaybe<Scalars['Int']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutBookNestedInput>;
  title?: InputMaybe<Scalars['String']>;
  userBook?: InputMaybe<UserBookUpdateManyWithoutBookNestedInput>;
  work?: InputMaybe<WorkUpdateOneWithoutEditionsNestedInput>;
};

export type BookUpdateWithoutReviewsInput = {
  authors?: InputMaybe<AuthorUpdateManyWithoutBooksNestedInput>;
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<IdentifierUpdateOneWithoutBookNestedInput>;
  language?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<AuditLogUpdateManyWithoutBookNestedInput>;
  pageCount?: InputMaybe<Scalars['Int']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  userBook?: InputMaybe<UserBookUpdateManyWithoutBookNestedInput>;
  work?: InputMaybe<WorkUpdateOneWithoutEditionsNestedInput>;
};

export type BookUpdateWithoutUserBookInput = {
  authors?: InputMaybe<AuthorUpdateManyWithoutBooksNestedInput>;
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<IdentifierUpdateOneWithoutBookNestedInput>;
  language?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<AuditLogUpdateManyWithoutBookNestedInput>;
  pageCount?: InputMaybe<Scalars['Int']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutBookNestedInput>;
  title?: InputMaybe<Scalars['String']>;
  work?: InputMaybe<WorkUpdateOneWithoutEditionsNestedInput>;
};

export type BookUpdateWithoutWorkInput = {
  authors?: InputMaybe<AuthorUpdateManyWithoutBooksNestedInput>;
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<IdentifierUpdateOneWithoutBookNestedInput>;
  language?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<AuditLogUpdateManyWithoutBookNestedInput>;
  pageCount?: InputMaybe<Scalars['Int']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Scalars['String']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutBookNestedInput>;
  title?: InputMaybe<Scalars['String']>;
  userBook?: InputMaybe<UserBookUpdateManyWithoutBookNestedInput>;
};

export type BookUpsertWithWhereUniqueWithoutAuthorsInput = {
  create: BookCreateWithoutAuthorsInput;
  update: BookUpdateWithoutAuthorsInput;
  where: BookWhereUniqueInput;
};

export type BookUpsertWithWhereUniqueWithoutWorkInput = {
  create: BookCreateWithoutWorkInput;
  update: BookUpdateWithoutWorkInput;
  where: BookWhereUniqueInput;
};

export type BookUpsertWithoutLogsInput = {
  create: BookCreateWithoutLogsInput;
  update: BookUpdateWithoutLogsInput;
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
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  authors?: InputMaybe<AuthorListRelationFilter>;
  coverImage?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  identifier?: InputMaybe<IdentifierRelationFilter>;
  language?: InputMaybe<StringFilter>;
  logs?: InputMaybe<AuditLogListRelationFilter>;
  pageCount?: InputMaybe<IntFilter>;
  publishedDate?: InputMaybe<StringFilter>;
  publisher?: InputMaybe<StringFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookListRelationFilter>;
  work?: InputMaybe<WorkRelationFilter>;
  workId?: InputMaybe<StringFilter>;
};

export type BookWhereUniqueInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  authors?: InputMaybe<AuthorListRelationFilter>;
  coverImage?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<IdentifierRelationFilter>;
  language?: InputMaybe<StringFilter>;
  logs?: InputMaybe<AuditLogListRelationFilter>;
  pageCount?: InputMaybe<IntFilter>;
  publishedDate?: InputMaybe<StringFilter>;
  publisher?: InputMaybe<StringFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookListRelationFilter>;
  work?: InputMaybe<WorkRelationFilter>;
  workId?: InputMaybe<StringFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BoolFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['Timestamp'];
  id: Scalars['ID'];
  review?: Maybe<Review>;
  reviewId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  reviewId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CommentCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<ReviewCreateNestedOneWithoutCommentsInput>;
  user?: InputMaybe<UserCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateManyReviewInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type CommentCreateManyReviewInputEnvelope = {
  data: Array<CommentCreateManyReviewInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateManyUserInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  reviewId?: InputMaybe<Scalars['String']>;
};

export type CommentCreateManyUserInputEnvelope = {
  data: Array<CommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
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
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateWithoutUserInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<ReviewCreateNestedOneWithoutCommentsInput>;
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  reviewId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  reviewId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
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
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
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
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserUpdateOneWithoutCommentsNestedInput>;
};

export type CommentUpdateWithoutUserInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<ReviewRelationFilter>;
  reviewId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
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

export type EnumActionFilter = {
  equals?: InputMaybe<Action>;
  in?: InputMaybe<Array<Action>>;
  not?: InputMaybe<EnumActionFilter>;
  notIn?: InputMaybe<Array<Action>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Identifier = {
  __typename?: 'Identifier';
  amazon?: Maybe<Scalars['String']>;
  book?: Maybe<Book>;
  bookId: Scalars['Int'];
  goodreads?: Maybe<Scalars['String']>;
  googleBooks?: Maybe<Scalars['String']>;
  isbn10?: Maybe<Scalars['String']>;
  isbn13?: Maybe<Scalars['String']>;
  openLibrary?: Maybe<Scalars['String']>;
};

export type IdentifierAvgAggregate = {
  __typename?: 'IdentifierAvgAggregate';
  bookId?: Maybe<Scalars['Float']>;
};

export type IdentifierCountAggregate = {
  __typename?: 'IdentifierCountAggregate';
  _all: Scalars['Int'];
  amazon: Scalars['Int'];
  bookId: Scalars['Int'];
  goodreads: Scalars['Int'];
  googleBooks: Scalars['Int'];
  isbn10: Scalars['Int'];
  isbn13: Scalars['Int'];
  openLibrary: Scalars['Int'];
};

export type IdentifierCreateNestedOneWithoutBookInput = {
  connect?: InputMaybe<IdentifierWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IdentifierCreateOrConnectWithoutBookInput>;
  create?: InputMaybe<IdentifierCreateWithoutBookInput>;
};

export type IdentifierCreateOrConnectWithoutBookInput = {
  create: IdentifierCreateWithoutBookInput;
  where: IdentifierWhereUniqueInput;
};

export type IdentifierCreateWithoutBookInput = {
  amazon?: InputMaybe<Scalars['String']>;
  goodreads?: InputMaybe<Scalars['String']>;
  googleBooks?: InputMaybe<Scalars['String']>;
  isbn10?: InputMaybe<Scalars['String']>;
  isbn13?: InputMaybe<Scalars['String']>;
  openLibrary?: InputMaybe<Scalars['String']>;
};

export type IdentifierMaxAggregate = {
  __typename?: 'IdentifierMaxAggregate';
  amazon?: Maybe<Scalars['String']>;
  bookId?: Maybe<Scalars['Int']>;
  goodreads?: Maybe<Scalars['String']>;
  googleBooks?: Maybe<Scalars['String']>;
  isbn10?: Maybe<Scalars['String']>;
  isbn13?: Maybe<Scalars['String']>;
  openLibrary?: Maybe<Scalars['String']>;
};

export type IdentifierMinAggregate = {
  __typename?: 'IdentifierMinAggregate';
  amazon?: Maybe<Scalars['String']>;
  bookId?: Maybe<Scalars['Int']>;
  goodreads?: Maybe<Scalars['String']>;
  googleBooks?: Maybe<Scalars['String']>;
  isbn10?: Maybe<Scalars['String']>;
  isbn13?: Maybe<Scalars['String']>;
  openLibrary?: Maybe<Scalars['String']>;
};

export type IdentifierOrderByWithRelationInput = {
  amazon?: InputMaybe<SortOrderInput>;
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  goodreads?: InputMaybe<SortOrderInput>;
  googleBooks?: InputMaybe<SortOrderInput>;
  isbn10?: InputMaybe<SortOrderInput>;
  isbn13?: InputMaybe<SortOrderInput>;
  openLibrary?: InputMaybe<SortOrderInput>;
};

export type IdentifierRelationFilter = {
  is?: InputMaybe<IdentifierWhereInput>;
  isNot?: InputMaybe<IdentifierWhereInput>;
};

export type IdentifierSumAggregate = {
  __typename?: 'IdentifierSumAggregate';
  bookId?: Maybe<Scalars['Int']>;
};

export type IdentifierUpdateOneWithoutBookNestedInput = {
  connect?: InputMaybe<IdentifierWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IdentifierCreateOrConnectWithoutBookInput>;
  create?: InputMaybe<IdentifierCreateWithoutBookInput>;
  delete?: InputMaybe<IdentifierWhereInput>;
  disconnect?: InputMaybe<IdentifierWhereInput>;
  update?: InputMaybe<IdentifierUpdateToOneWithWhereWithoutBookInput>;
  upsert?: InputMaybe<IdentifierUpsertWithoutBookInput>;
};

export type IdentifierUpdateToOneWithWhereWithoutBookInput = {
  data: IdentifierUpdateWithoutBookInput;
  where?: InputMaybe<IdentifierWhereInput>;
};

export type IdentifierUpdateWithoutBookInput = {
  amazon?: InputMaybe<Scalars['String']>;
  goodreads?: InputMaybe<Scalars['String']>;
  googleBooks?: InputMaybe<Scalars['String']>;
  isbn10?: InputMaybe<Scalars['String']>;
  isbn13?: InputMaybe<Scalars['String']>;
  openLibrary?: InputMaybe<Scalars['String']>;
};

export type IdentifierUpsertWithoutBookInput = {
  create: IdentifierCreateWithoutBookInput;
  update: IdentifierUpdateWithoutBookInput;
  where?: InputMaybe<IdentifierWhereInput>;
};

export type IdentifierWhereInput = {
  AND?: InputMaybe<Array<IdentifierWhereInput>>;
  NOT?: InputMaybe<Array<IdentifierWhereInput>>;
  OR?: InputMaybe<Array<IdentifierWhereInput>>;
  amazon?: InputMaybe<StringFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<IntFilter>;
  goodreads?: InputMaybe<StringFilter>;
  googleBooks?: InputMaybe<StringFilter>;
  isbn10?: InputMaybe<StringFilter>;
  isbn13?: InputMaybe<StringFilter>;
  openLibrary?: InputMaybe<StringFilter>;
};

export type IdentifierWhereUniqueInput = {
  AND?: InputMaybe<Array<IdentifierWhereInput>>;
  NOT?: InputMaybe<Array<IdentifierWhereInput>>;
  OR?: InputMaybe<Array<IdentifierWhereInput>>;
  amazon?: InputMaybe<StringFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<Scalars['Int']>;
  goodreads?: InputMaybe<StringFilter>;
  googleBooks?: InputMaybe<StringFilter>;
  isbn10?: InputMaybe<StringFilter>;
  isbn13?: InputMaybe<StringFilter>;
  openLibrary?: InputMaybe<StringFilter>;
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

export type JournalEntry = {
  __typename?: 'JournalEntry';
  createdAt: Scalars['Timestamp'];
  currentPage: Scalars['Int'];
  currentPercent: Scalars['Int'];
  dateRead: Scalars['Timestamp'];
  id: Scalars['ID'];
  pagesRead: Scalars['Int'];
  readingNotes?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userBook?: Maybe<UserBook>;
  userBookId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type JournalEntryAvgAggregate = {
  __typename?: 'JournalEntryAvgAggregate';
  currentPage?: Maybe<Scalars['Float']>;
  currentPercent?: Maybe<Scalars['Float']>;
  pagesRead?: Maybe<Scalars['Float']>;
};

export type JournalEntryCountAggregate = {
  __typename?: 'JournalEntryCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  currentPage: Scalars['Int'];
  currentPercent: Scalars['Int'];
  dateRead: Scalars['Int'];
  id: Scalars['Int'];
  pagesRead: Scalars['Int'];
  readingNotes: Scalars['Int'];
  userBookId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type JournalEntryCreateInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  currentPage: Scalars['Int'];
  currentPercent: Scalars['Int'];
  dateRead?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  pagesRead: Scalars['Int'];
  readingNotes?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserCreateNestedOneWithoutJournalEntriesInput>;
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutJournalEntryInput>;
};

export type JournalEntryCreateManyUserBookInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  currentPage: Scalars['Int'];
  currentPercent: Scalars['Int'];
  dateRead?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  pagesRead: Scalars['Int'];
  readingNotes?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type JournalEntryCreateManyUserBookInputEnvelope = {
  data: Array<JournalEntryCreateManyUserBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type JournalEntryCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  currentPage: Scalars['Int'];
  currentPercent: Scalars['Int'];
  dateRead?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  pagesRead: Scalars['Int'];
  readingNotes?: InputMaybe<Scalars['String']>;
  userBookId?: InputMaybe<Scalars['String']>;
};

export type JournalEntryCreateManyUserInputEnvelope = {
  data: Array<JournalEntryCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type JournalEntryCreateNestedManyWithoutUserBookInput = {
  connect?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JournalEntryCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<JournalEntryCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<JournalEntryCreateManyUserBookInputEnvelope>;
};

export type JournalEntryCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JournalEntryCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<JournalEntryCreateWithoutUserInput>>;
  createMany?: InputMaybe<JournalEntryCreateManyUserInputEnvelope>;
};

export type JournalEntryCreateOrConnectWithoutUserBookInput = {
  create: JournalEntryCreateWithoutUserBookInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryCreateOrConnectWithoutUserInput = {
  create: JournalEntryCreateWithoutUserInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryCreateWithoutUserBookInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  currentPage: Scalars['Int'];
  currentPercent: Scalars['Int'];
  dateRead?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  pagesRead: Scalars['Int'];
  readingNotes?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserCreateNestedOneWithoutJournalEntriesInput>;
};

export type JournalEntryCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  currentPage: Scalars['Int'];
  currentPercent: Scalars['Int'];
  dateRead?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  pagesRead: Scalars['Int'];
  readingNotes?: InputMaybe<Scalars['String']>;
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutJournalEntryInput>;
};

export type JournalEntryListRelationFilter = {
  every?: InputMaybe<JournalEntryWhereInput>;
  none?: InputMaybe<JournalEntryWhereInput>;
  some?: InputMaybe<JournalEntryWhereInput>;
};

export type JournalEntryMaxAggregate = {
  __typename?: 'JournalEntryMaxAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  currentPage?: Maybe<Scalars['Int']>;
  currentPercent?: Maybe<Scalars['Int']>;
  dateRead?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  pagesRead?: Maybe<Scalars['Int']>;
  readingNotes?: Maybe<Scalars['String']>;
  userBookId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type JournalEntryMinAggregate = {
  __typename?: 'JournalEntryMinAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  currentPage?: Maybe<Scalars['Int']>;
  currentPercent?: Maybe<Scalars['Int']>;
  dateRead?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  pagesRead?: Maybe<Scalars['Int']>;
  readingNotes?: Maybe<Scalars['String']>;
  userBookId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type JournalEntryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type JournalEntryScalarWhereInput = {
  AND?: InputMaybe<Array<JournalEntryScalarWhereInput>>;
  NOT?: InputMaybe<Array<JournalEntryScalarWhereInput>>;
  OR?: InputMaybe<Array<JournalEntryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentPage?: InputMaybe<IntFilter>;
  currentPercent?: InputMaybe<IntFilter>;
  dateRead?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  pagesRead?: InputMaybe<IntFilter>;
  readingNotes?: InputMaybe<StringFilter>;
  userBookId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type JournalEntrySumAggregate = {
  __typename?: 'JournalEntrySumAggregate';
  currentPage?: Maybe<Scalars['Int']>;
  currentPercent?: Maybe<Scalars['Int']>;
  pagesRead?: Maybe<Scalars['Int']>;
};

export type JournalEntryUpdateInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  currentPage?: InputMaybe<Scalars['Int']>;
  currentPercent?: InputMaybe<Scalars['Int']>;
  dateRead?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  pagesRead?: InputMaybe<Scalars['Int']>;
  readingNotes?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserUpdateOneWithoutJournalEntriesNestedInput>;
  userBook?: InputMaybe<UserBookUpdateOneWithoutJournalEntryNestedInput>;
};

export type JournalEntryUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  currentPage?: InputMaybe<Scalars['Int']>;
  currentPercent?: InputMaybe<Scalars['Int']>;
  dateRead?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  pagesRead?: InputMaybe<Scalars['Int']>;
  readingNotes?: InputMaybe<Scalars['String']>;
};

export type JournalEntryUpdateManyWithWhereWithoutUserBookInput = {
  data: JournalEntryUpdateManyMutationInput;
  where: JournalEntryScalarWhereInput;
};

export type JournalEntryUpdateManyWithWhereWithoutUserInput = {
  data: JournalEntryUpdateManyMutationInput;
  where: JournalEntryScalarWhereInput;
};

export type JournalEntryUpdateManyWithoutUserBookNestedInput = {
  connect?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JournalEntryCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<JournalEntryCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<JournalEntryCreateManyUserBookInputEnvelope>;
  delete?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JournalEntryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  set?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  update?: InputMaybe<Array<JournalEntryUpdateWithWhereUniqueWithoutUserBookInput>>;
  updateMany?: InputMaybe<Array<JournalEntryUpdateManyWithWhereWithoutUserBookInput>>;
  upsert?: InputMaybe<Array<JournalEntryUpsertWithWhereUniqueWithoutUserBookInput>>;
};

export type JournalEntryUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JournalEntryCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<JournalEntryCreateWithoutUserInput>>;
  createMany?: InputMaybe<JournalEntryCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JournalEntryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  set?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  update?: InputMaybe<Array<JournalEntryUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<JournalEntryUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<JournalEntryUpsertWithWhereUniqueWithoutUserInput>>;
};

export type JournalEntryUpdateWithWhereUniqueWithoutUserBookInput = {
  data: JournalEntryUpdateWithoutUserBookInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryUpdateWithWhereUniqueWithoutUserInput = {
  data: JournalEntryUpdateWithoutUserInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryUpdateWithoutUserBookInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  currentPage?: InputMaybe<Scalars['Int']>;
  currentPercent?: InputMaybe<Scalars['Int']>;
  dateRead?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  pagesRead?: InputMaybe<Scalars['Int']>;
  readingNotes?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserUpdateOneWithoutJournalEntriesNestedInput>;
};

export type JournalEntryUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  currentPage?: InputMaybe<Scalars['Int']>;
  currentPercent?: InputMaybe<Scalars['Int']>;
  dateRead?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  pagesRead?: InputMaybe<Scalars['Int']>;
  readingNotes?: InputMaybe<Scalars['String']>;
  userBook?: InputMaybe<UserBookUpdateOneWithoutJournalEntryNestedInput>;
};

export type JournalEntryUpsertWithWhereUniqueWithoutUserBookInput = {
  create: JournalEntryCreateWithoutUserBookInput;
  update: JournalEntryUpdateWithoutUserBookInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryUpsertWithWhereUniqueWithoutUserInput = {
  create: JournalEntryCreateWithoutUserInput;
  update: JournalEntryUpdateWithoutUserInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryWhereInput = {
  AND?: InputMaybe<Array<JournalEntryWhereInput>>;
  NOT?: InputMaybe<Array<JournalEntryWhereInput>>;
  OR?: InputMaybe<Array<JournalEntryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentPage?: InputMaybe<IntFilter>;
  currentPercent?: InputMaybe<IntFilter>;
  dateRead?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  pagesRead?: InputMaybe<IntFilter>;
  readingNotes?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type JournalEntryWhereUniqueInput = {
  AND?: InputMaybe<Array<JournalEntryWhereInput>>;
  NOT?: InputMaybe<Array<JournalEntryWhereInput>>;
  OR?: InputMaybe<Array<JournalEntryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentPage?: InputMaybe<IntFilter>;
  currentPercent?: InputMaybe<IntFilter>;
  dateRead?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']>;
  pagesRead?: InputMaybe<IntFilter>;
  readingNotes?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type LogInInput = {
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};

export type MeResponse = {
  __typename?: 'MeResponse';
  email?: Maybe<Scalars['String']>;
  isOAuth?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createBook: Book;
  createComment: Comment;
  createJournalEntry: JournalEntry;
  createReview: Review;
  createShelf: Shelf;
  deleteShelf: Shelf;
  follow: User;
  forgotPassword: Scalars['Boolean'];
  importUserBooks: Scalars['Boolean'];
  likeReview: Review;
  login: AuthResponse;
  logout: Scalars['Boolean'];
  oAuth: AuthResponse;
  refreshAuth: RefreshResponse;
  register: User;
  removeJournalEntry: JournalEntry;
  removeUserBook: UserBook;
  resetPassword: Scalars['Boolean'];
  updateEmail: User;
  updateJournalEntry: JournalEntry;
  updateReview: Review;
  updateShelf: Shelf;
  updateUser: User;
  updateUserBook: UserBook;
  updateUserBookOrder: Array<UserBook>;
  verifyToken: AuthResponse;
};


export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput;
};


export type MutationCreateBookArgs = {
  data: BookCreateInput;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationCreateJournalEntryArgs = {
  book: BookWhereUniqueInput;
  data: JournalEntryCreateInput;
};


export type MutationCreateReviewArgs = {
  bookData: BookCreateInput;
  data: ReviewDataInput;
  where: BookWhereUniqueInput;
};


export type MutationCreateShelfArgs = {
  data: ShelfCreateInput;
};


export type MutationDeleteShelfArgs = {
  where: ShelfWhereUniqueInput;
};


export type MutationFollowArgs = {
  value: Scalars['Boolean'];
  where: UserWhereUniqueInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationImportUserBooksArgs = {
  content: Scalars['String'];
};


export type MutationLikeReviewArgs = {
  value: Scalars['Boolean'];
  where: ReviewWhereUniqueInput;
};


export type MutationLoginArgs = {
  logInInput: LogInInput;
};


export type MutationLogoutArgs = {
  id: Scalars['String'];
};


export type MutationOAuthArgs = {
  oAuthInput: OAuthInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationRemoveJournalEntryArgs = {
  where: JournalEntryWhereUniqueInput;
};


export type MutationRemoveUserBookArgs = {
  where: BookWhereUniqueInput;
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationUpdateEmailArgs = {
  data: UpdateEmailInput;
};


export type MutationUpdateJournalEntryArgs = {
  data: JournalEntryUpdateInput;
  where: JournalEntryWhereUniqueInput;
};


export type MutationUpdateReviewArgs = {
  data: ReviewDataInput;
  where: ReviewWhereUniqueInput;
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
  where: BookWhereUniqueInput;
};


export type MutationUpdateUserBookOrderArgs = {
  data: UserBookUpdateOrderInput;
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type OAuthInput = {
  access_token: Scalars['String'];
  email: Scalars['String'];
  image: Scalars['String'];
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  scope: Scalars['String'];
  token_type: Scalars['String'];
  type: Scalars['String'];
  username: Scalars['String'];
};

export type PasswordResetTokenCountAggregate = {
  __typename?: 'PasswordResetTokenCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  expires: Scalars['Int'];
  id: Scalars['Int'];
  token: Scalars['Int'];
};

export type PasswordResetTokenMaxAggregate = {
  __typename?: 'PasswordResetTokenMaxAggregate';
  email?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type PasswordResetTokenMinAggregate = {
  __typename?: 'PasswordResetTokenMinAggregate';
  email?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  auditLogs: ActivitiesResponse;
  book?: Maybe<Book>;
  bookReview: Review;
  bookReviews: Array<Review>;
  comments: Array<Comment>;
  countJournalEntries: Scalars['Int'];
  countUserBooks: Scalars['Int'];
  getGoogleBook?: Maybe<Book>;
  getMostRecentJournalEntry?: Maybe<JournalEntry>;
  getUserBooks: UserBooksResponse;
  journalEntries: Array<JournalEntry>;
  me: MeResponse;
  shelves?: Maybe<Array<Shelf>>;
  user: User;
  userBook?: Maybe<UserBook>;
};


export type QueryAuditLogsArgs = {
  action?: InputMaybe<Action>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  orderBy?: InputMaybe<AuditLogOrderByWithRelationInput>;
  where?: InputMaybe<UserBookWhereUniqueInput>;
};


export type QueryBookArgs = {
  where: BookWhereUniqueInput;
};


export type QueryBookReviewArgs = {
  where: ReviewUniqueInput;
};


export type QueryBookReviewsArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  where: BookWhereUniqueInput;
};


export type QueryCommentsArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  where: ReviewWhereUniqueInput;
};


export type QueryCountJournalEntriesArgs = {
  book?: InputMaybe<BookWhereUniqueInput>;
};


export type QueryCountUserBooksArgs = {
  where?: InputMaybe<UserBookWhereInput>;
};


export type QueryGetGoogleBookArgs = {
  id: Scalars['String'];
};


export type QueryGetMostRecentJournalEntryArgs = {
  book?: InputMaybe<BookWhereUniqueInput>;
};


export type QueryGetUserBooksArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  orderBy?: InputMaybe<UserBookOrderByWithRelationInput>;
  where?: InputMaybe<UserBookWhereInput>;
};


export type QueryJournalEntriesArgs = {
  book?: InputMaybe<BookWhereUniqueInput>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
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

export type ResetPasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  _count: ReviewCount;
  book?: Maybe<Book>;
  bookId?: Maybe<Scalars['Int']>;
  commentCount: Scalars['Int'];
  comments?: Maybe<Array<Comment>>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['Timestamp'];
  id: Scalars['ID'];
  likeCount: Scalars['Int'];
  liked: Scalars['Boolean'];
  likedBy?: Maybe<Array<User>>;
  spoilers: Scalars['Boolean'];
  user?: Maybe<User>;
  userBook?: Maybe<UserBook>;
  userBookId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ReviewAvgAggregate = {
  __typename?: 'ReviewAvgAggregate';
  bookId?: Maybe<Scalars['Float']>;
  likeCount?: Maybe<Scalars['Float']>;
};

export type ReviewCount = {
  __typename?: 'ReviewCount';
  comments: Scalars['Int'];
  likedBy: Scalars['Int'];
};

export type ReviewCountAggregate = {
  __typename?: 'ReviewCountAggregate';
  _all: Scalars['Int'];
  bookId: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  likeCount: Scalars['Int'];
  spoilers: Scalars['Int'];
  userBookId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ReviewCreateManyBookInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
  userBookId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type ReviewCreateManyBookInputEnvelope = {
  data: Array<ReviewCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReviewCreateManyUserBookInput = {
  bookId?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type ReviewCreateManyUserBookInputEnvelope = {
  data: Array<ReviewCreateManyUserBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReviewCreateManyUserInput = {
  bookId?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
  userBookId?: InputMaybe<Scalars['String']>;
};

export type ReviewCreateManyUserInputEnvelope = {
  data: Array<ReviewCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
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

export type ReviewCreateNestedManyWithoutUserBookInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserBookInputEnvelope>;
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

export type ReviewCreateOrConnectWithoutUserBookInput = {
  create: ReviewCreateWithoutUserBookInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateWithoutBookInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutReviewInput>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  likedBy?: InputMaybe<UserCreateNestedManyWithoutLikedReviewsInput>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutReviewsInput>;
};

export type ReviewCreateWithoutCommentsInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  likedBy?: InputMaybe<UserCreateNestedManyWithoutLikedReviewsInput>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutReviewsInput>;
};

export type ReviewCreateWithoutLikedByInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutReviewInput>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutReviewsInput>;
};

export type ReviewCreateWithoutUserBookInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutReviewInput>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  likedBy?: InputMaybe<UserCreateNestedManyWithoutLikedReviewsInput>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
};

export type ReviewCreateWithoutUserInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutReviewInput>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  likedBy?: InputMaybe<UserCreateNestedManyWithoutLikedReviewsInput>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutReviewsInput>;
};

export type ReviewDataInput = {
  content?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
};

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>;
  none?: InputMaybe<ReviewWhereInput>;
  some?: InputMaybe<ReviewWhereInput>;
};

export type ReviewMaxAggregate = {
  __typename?: 'ReviewMaxAggregate';
  bookId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  likeCount?: Maybe<Scalars['Int']>;
  spoilers?: Maybe<Scalars['Boolean']>;
  userBookId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ReviewMinAggregate = {
  __typename?: 'ReviewMinAggregate';
  bookId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  likeCount?: Maybe<Scalars['Int']>;
  spoilers?: Maybe<Scalars['Boolean']>;
  userBookId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
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
  bookId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  likeCount?: InputMaybe<IntFilter>;
  spoilers?: InputMaybe<BoolFilter>;
  userBookId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReviewSumAggregate = {
  __typename?: 'ReviewSumAggregate';
  bookId?: Maybe<Scalars['Int']>;
  likeCount?: Maybe<Scalars['Int']>;
};

export type ReviewUniqueInput = {
  bookId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
};

export type ReviewUpdateManyMutationInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
};

export type ReviewUpdateManyWithWhereWithoutBookInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutLikedByInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutUserBookInput = {
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

export type ReviewUpdateManyWithoutUserBookNestedInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserBookInputEnvelope>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutUserBookInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutUserBookInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutUserBookInput>>;
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

export type ReviewUpdateWithWhereUniqueWithoutUserBookInput = {
  data: ReviewUpdateWithoutUserBookInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithoutBookInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutReviewNestedInput>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  likedBy?: InputMaybe<UserUpdateManyWithoutLikedReviewsNestedInput>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserUpdateOneWithoutReviewsNestedInput>;
  userBook?: InputMaybe<UserBookUpdateOneWithoutReviewsNestedInput>;
};

export type ReviewUpdateWithoutCommentsInput = {
  book?: InputMaybe<BookUpdateOneWithoutReviewsNestedInput>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  likedBy?: InputMaybe<UserUpdateManyWithoutLikedReviewsNestedInput>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserUpdateOneWithoutReviewsNestedInput>;
  userBook?: InputMaybe<UserBookUpdateOneWithoutReviewsNestedInput>;
};

export type ReviewUpdateWithoutLikedByInput = {
  book?: InputMaybe<BookUpdateOneWithoutReviewsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutReviewNestedInput>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserUpdateOneWithoutReviewsNestedInput>;
  userBook?: InputMaybe<UserBookUpdateOneWithoutReviewsNestedInput>;
};

export type ReviewUpdateWithoutUserBookInput = {
  book?: InputMaybe<BookUpdateOneWithoutReviewsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutReviewNestedInput>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  likedBy?: InputMaybe<UserUpdateManyWithoutLikedReviewsNestedInput>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserUpdateOneWithoutReviewsNestedInput>;
};

export type ReviewUpdateWithoutUserInput = {
  book?: InputMaybe<BookUpdateOneWithoutReviewsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutReviewNestedInput>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  likedBy?: InputMaybe<UserUpdateManyWithoutLikedReviewsNestedInput>;
  spoilers?: InputMaybe<Scalars['Boolean']>;
  userBook?: InputMaybe<UserBookUpdateOneWithoutReviewsNestedInput>;
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

export type ReviewUpsertWithWhereUniqueWithoutUserBookInput = {
  create: ReviewCreateWithoutUserBookInput;
  update: ReviewUpdateWithoutUserBookInput;
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
  bookId?: InputMaybe<IntFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  likeCount?: InputMaybe<IntFilter>;
  likedBy?: InputMaybe<UserListRelationFilter>;
  spoilers?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReviewWhereUniqueInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<IntFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<IntFilter>;
  likedBy?: InputMaybe<UserListRelationFilter>;
  spoilers?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Shelf = {
  __typename?: 'Shelf';
  _count: ShelfCount;
  dateTime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  user?: Maybe<User>;
  userBooks?: Maybe<Array<UserBookShelves>>;
  userId?: Maybe<Scalars['String']>;
};

export type ShelfCount = {
  __typename?: 'ShelfCount';
  userBooks: Scalars['Int'];
};

export type ShelfCountAggregate = {
  __typename?: 'ShelfCountAggregate';
  _all: Scalars['Int'];
  dateTime: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShelfCreateInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  user?: InputMaybe<UserCreateNestedOneWithoutShelvesInput>;
  userBooks?: InputMaybe<UserBookShelvesCreateNestedManyWithoutShelfInput>;
};

export type ShelfCreateManyUserInput = {
  dateTime?: InputMaybe<Scalars['String']>;
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
  dateTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  user?: InputMaybe<UserCreateNestedOneWithoutShelvesInput>;
};

export type ShelfCreateWithoutUserInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  userBooks?: InputMaybe<UserBookShelvesCreateNestedManyWithoutShelfInput>;
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
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ShelfMinAggregate = {
  __typename?: 'ShelfMinAggregate';
  dateTime?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
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
  userId?: InputMaybe<StringFilter>;
};

export type ShelfUpdateInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserUpdateOneWithoutShelvesNestedInput>;
  userBooks?: InputMaybe<UserBookShelvesUpdateManyWithoutShelfNestedInput>;
};

export type ShelfUpdateManyMutationInput = {
  dateTime?: InputMaybe<Scalars['String']>;
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
  dateTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserUpdateOneWithoutShelvesNestedInput>;
};

export type ShelfUpdateWithoutUserInput = {
  dateTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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
  user?: InputMaybe<UserRelationFilter>;
  userBooks?: InputMaybe<UserBookShelvesListRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ShelfWhereUniqueInput = {
  AND?: InputMaybe<Array<ShelfWhereInput>>;
  NOT?: InputMaybe<Array<ShelfWhereInput>>;
  OR?: InputMaybe<Array<ShelfWhereInput>>;
  dateTime?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<ShelfIdentifierCompoundUniqueInput>;
  name?: InputMaybe<StringFilter>;
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

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateEmailInput = {
  code: Scalars['String'];
  email: Scalars['String'];
  token: Scalars['String'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  newPassword?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  accounts?: Maybe<Array<Account>>;
  auditLogs?: Maybe<Array<AuditLog>>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['Timestamp'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['Timestamp']>;
  followerCount: Scalars['Float'];
  followers?: Maybe<Array<User>>;
  following?: Maybe<Array<User>>;
  followingCount: Scalars['Float'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isFollowing: Scalars['Boolean'];
  journalEntries?: Maybe<Array<JournalEntry>>;
  likedReviews?: Maybe<Array<Review>>;
  reviews?: Maybe<Array<Review>>;
  shelves?: Maybe<Array<Shelf>>;
  updatedAt: Scalars['Timestamp'];
  userBooks?: Maybe<Array<UserBook>>;
  username?: Maybe<Scalars['String']>;
};

export type UserBook = {
  __typename?: 'UserBook';
  _count: UserBookCount;
  book?: Maybe<Book>;
  bookId: Scalars['Int'];
  createdAt: Scalars['Timestamp'];
  id: Scalars['ID'];
  journalEntry?: Maybe<Array<JournalEntry>>;
  order: Scalars['Int'];
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Review>>;
  shelves?: Maybe<Array<UserBookShelves>>;
  status: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type UserBookAvgAggregate = {
  __typename?: 'UserBookAvgAggregate';
  bookId?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type UserBookCount = {
  __typename?: 'UserBookCount';
  journalEntry: Scalars['Int'];
  reviews: Scalars['Int'];
  shelves: Scalars['Int'];
};

export type UserBookCountAggregate = {
  __typename?: 'UserBookCountAggregate';
  _all: Scalars['Int'];
  bookId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  rating: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserBookCreateManyBookInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  order: Scalars['Int'];
  rating?: InputMaybe<Scalars['Float']>;
  status: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userId: Scalars['String'];
};

export type UserBookCreateManyBookInputEnvelope = {
  data: Array<UserBookCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserBookCreateManyUserInput = {
  bookId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  order: Scalars['Int'];
  rating?: InputMaybe<Scalars['Float']>;
  status: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
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

export type UserBookCreateNestedOneWithoutJournalEntryInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutJournalEntryInput>;
  create?: InputMaybe<UserBookCreateWithoutJournalEntryInput>;
};

export type UserBookCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<UserBookCreateWithoutReviewsInput>;
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

export type UserBookCreateOrConnectWithoutJournalEntryInput = {
  create: UserBookCreateWithoutJournalEntryInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookCreateOrConnectWithoutReviewsInput = {
  create: UserBookCreateWithoutReviewsInput;
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
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  journalEntry?: InputMaybe<JournalEntryCreateNestedManyWithoutUserBookInput>;
  order: Scalars['Int'];
  rating?: InputMaybe<Scalars['Float']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserBookInput>;
  shelves?: InputMaybe<UserBookShelvesCreateNestedManyWithoutUserBookInput>;
  status: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  user?: InputMaybe<UserCreateNestedOneWithoutUserBooksInput>;
};

export type UserBookCreateWithoutJournalEntryInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutUserBookInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  order: Scalars['Int'];
  rating?: InputMaybe<Scalars['Float']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserBookInput>;
  shelves?: InputMaybe<UserBookShelvesCreateNestedManyWithoutUserBookInput>;
  status: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  user?: InputMaybe<UserCreateNestedOneWithoutUserBooksInput>;
};

export type UserBookCreateWithoutReviewsInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutUserBookInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  journalEntry?: InputMaybe<JournalEntryCreateNestedManyWithoutUserBookInput>;
  order: Scalars['Int'];
  rating?: InputMaybe<Scalars['Float']>;
  shelves?: InputMaybe<UserBookShelvesCreateNestedManyWithoutUserBookInput>;
  status: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  user?: InputMaybe<UserCreateNestedOneWithoutUserBooksInput>;
};

export type UserBookCreateWithoutShelvesInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutUserBookInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  journalEntry?: InputMaybe<JournalEntryCreateNestedManyWithoutUserBookInput>;
  order: Scalars['Int'];
  rating?: InputMaybe<Scalars['Float']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserBookInput>;
  status: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  user?: InputMaybe<UserCreateNestedOneWithoutUserBooksInput>;
};

export type UserBookCreateWithoutUserInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutUserBookInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  journalEntry?: InputMaybe<JournalEntryCreateNestedManyWithoutUserBookInput>;
  order: Scalars['Int'];
  rating?: InputMaybe<Scalars['Float']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserBookInput>;
  shelves?: InputMaybe<UserBookShelvesCreateNestedManyWithoutUserBookInput>;
  status: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
};

export type UserBookIdentifierCompoundUniqueInput = {
  bookId: Scalars['Int'];
  userId: Scalars['String'];
};

export type UserBookListRelationFilter = {
  every?: InputMaybe<UserBookWhereInput>;
  none?: InputMaybe<UserBookWhereInput>;
  some?: InputMaybe<UserBookWhereInput>;
};

export type UserBookMaxAggregate = {
  __typename?: 'UserBookMaxAggregate';
  bookId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserBookMinAggregate = {
  __typename?: 'UserBookMinAggregate';
  bookId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserBookOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserBookOrderByWithRelationInput = {
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  journalEntry?: InputMaybe<JournalEntryOrderByRelationAggregateInput>;
  order?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrderInput>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
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
  bookId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserBookShelves = {
  __typename?: 'UserBookShelves';
  shelf: Shelf;
  shelfId: Scalars['String'];
  userBook: UserBook;
  userBookId: Scalars['String'];
};

export type UserBookShelvesCountAggregate = {
  __typename?: 'UserBookShelvesCountAggregate';
  _all: Scalars['Int'];
  shelfId: Scalars['Int'];
  userBookId: Scalars['Int'];
};

export type UserBookShelvesCreateManyShelfInput = {
  userBookId: Scalars['String'];
};

export type UserBookShelvesCreateManyShelfInputEnvelope = {
  data: Array<UserBookShelvesCreateManyShelfInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserBookShelvesCreateManyUserBookInput = {
  shelfId: Scalars['String'];
};

export type UserBookShelvesCreateManyUserBookInputEnvelope = {
  data: Array<UserBookShelvesCreateManyUserBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
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
  shelfId?: Maybe<Scalars['String']>;
  userBookId?: Maybe<Scalars['String']>;
};

export type UserBookShelvesMinAggregate = {
  __typename?: 'UserBookShelvesMinAggregate';
  shelfId?: Maybe<Scalars['String']>;
  userBookId?: Maybe<Scalars['String']>;
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
  userBookId?: InputMaybe<Scalars['String']>;
};

export type UserBookShelvesUncheckedUpdateManyWithoutUserBookInput = {
  shelfId?: InputMaybe<Scalars['String']>;
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
  shelfId: Scalars['String'];
  userBookId: Scalars['String'];
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
  bookId?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
};

export type UserBookUpdateInput = {
  rating?: InputMaybe<Scalars['Float']>;
  shelves?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<Scalars['String']>;
};

export type UserBookUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
};

export type UserBookUpdateManyWithWhereWithoutBookInput = {
  data: UserBookUpdateManyMutationInput;
  where: UserBookScalarWhereInput;
};

export type UserBookUpdateManyWithWhereWithoutUserInput = {
  data: UserBookUpdateManyMutationInput;
  where: UserBookScalarWhereInput;
};

export type UserBookUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<UserBookCreateWithoutBookInput>>;
  createMany?: InputMaybe<UserBookCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserBookScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  set?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  update?: InputMaybe<Array<UserBookUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<UserBookUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<UserBookUpsertWithWhereUniqueWithoutBookInput>>;
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

export type UserBookUpdateOneWithoutJournalEntryNestedInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutJournalEntryInput>;
  create?: InputMaybe<UserBookCreateWithoutJournalEntryInput>;
  delete?: InputMaybe<UserBookWhereInput>;
  disconnect?: InputMaybe<UserBookWhereInput>;
  update?: InputMaybe<UserBookUpdateToOneWithWhereWithoutJournalEntryInput>;
  upsert?: InputMaybe<UserBookUpsertWithoutJournalEntryInput>;
};

export type UserBookUpdateOneWithoutReviewsNestedInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<UserBookCreateWithoutReviewsInput>;
  delete?: InputMaybe<UserBookWhereInput>;
  disconnect?: InputMaybe<UserBookWhereInput>;
  update?: InputMaybe<UserBookUpdateToOneWithWhereWithoutReviewsInput>;
  upsert?: InputMaybe<UserBookUpsertWithoutReviewsInput>;
};

export type UserBookUpdateOrderInput = {
  items?: InputMaybe<Array<BookItemInput>>;
};

export type UserBookUpdateToOneWithWhereWithoutJournalEntryInput = {
  data: UserBookUpdateWithoutJournalEntryInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpdateToOneWithWhereWithoutReviewsInput = {
  data: UserBookUpdateWithoutReviewsInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpdateToOneWithWhereWithoutShelvesInput = {
  data: UserBookUpdateWithoutShelvesInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpdateWithWhereUniqueWithoutBookInput = {
  data: UserBookUpdateWithoutBookInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookUpdateWithWhereUniqueWithoutUserInput = {
  data: UserBookUpdateWithoutUserInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookUpdateWithoutBookInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  journalEntry?: InputMaybe<JournalEntryUpdateManyWithoutUserBookNestedInput>;
  order?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Float']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserBookNestedInput>;
  shelves?: InputMaybe<UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  user?: InputMaybe<UserUpdateOneWithoutUserBooksNestedInput>;
};

export type UserBookUpdateWithoutJournalEntryInput = {
  book?: InputMaybe<BookUpdateOneWithoutUserBookNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Float']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserBookNestedInput>;
  shelves?: InputMaybe<UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  user?: InputMaybe<UserUpdateOneWithoutUserBooksNestedInput>;
};

export type UserBookUpdateWithoutReviewsInput = {
  book?: InputMaybe<BookUpdateOneWithoutUserBookNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  journalEntry?: InputMaybe<JournalEntryUpdateManyWithoutUserBookNestedInput>;
  order?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Float']>;
  shelves?: InputMaybe<UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  user?: InputMaybe<UserUpdateOneWithoutUserBooksNestedInput>;
};

export type UserBookUpdateWithoutShelvesInput = {
  book?: InputMaybe<BookUpdateOneWithoutUserBookNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  journalEntry?: InputMaybe<JournalEntryUpdateManyWithoutUserBookNestedInput>;
  order?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Float']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserBookNestedInput>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  user?: InputMaybe<UserUpdateOneWithoutUserBooksNestedInput>;
};

export type UserBookUpdateWithoutUserInput = {
  book?: InputMaybe<BookUpdateOneWithoutUserBookNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  journalEntry?: InputMaybe<JournalEntryUpdateManyWithoutUserBookNestedInput>;
  order?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Float']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserBookNestedInput>;
  shelves?: InputMaybe<UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
};

export type UserBookUpsertWithWhereUniqueWithoutBookInput = {
  create: UserBookCreateWithoutBookInput;
  update: UserBookUpdateWithoutBookInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookUpsertWithWhereUniqueWithoutUserInput = {
  create: UserBookCreateWithoutUserInput;
  update: UserBookUpdateWithoutUserInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookUpsertWithoutJournalEntryInput = {
  create: UserBookCreateWithoutJournalEntryInput;
  update: UserBookUpdateWithoutJournalEntryInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpsertWithoutReviewsInput = {
  create: UserBookCreateWithoutReviewsInput;
  update: UserBookUpdateWithoutReviewsInput;
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
  bookId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  journalEntry?: InputMaybe<JournalEntryListRelationFilter>;
  order?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  shelves?: InputMaybe<UserBookShelvesListRelationFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserBookWhereUniqueInput = {
  AND?: InputMaybe<Array<UserBookWhereInput>>;
  NOT?: InputMaybe<Array<UserBookWhereInput>>;
  OR?: InputMaybe<Array<UserBookWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<UserBookIdentifierCompoundUniqueInput>;
  journalEntry?: InputMaybe<JournalEntryListRelationFilter>;
  order?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  shelves?: InputMaybe<UserBookShelvesListRelationFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserBooksResponse = {
  __typename?: 'UserBooksResponse';
  hasMore: Scalars['Boolean'];
  totalBooks: Scalars['Float'];
  userBooks?: Maybe<Array<UserBook>>;
};

export type UserCount = {
  __typename?: 'UserCount';
  accounts: Scalars['Int'];
  auditLogs: Scalars['Int'];
  comments: Scalars['Int'];
  followers: Scalars['Int'];
  following: Scalars['Int'];
  journalEntries: Scalars['Int'];
  likedReviews: Scalars['Int'];
  reviews: Scalars['Int'];
  shelves: Scalars['Int'];
  userBooks: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  emailVerified: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
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

export type UserCreateNestedOneWithoutAuditLogsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAuditLogsInput>;
  create?: InputMaybe<UserCreateWithoutAuditLogsInput>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutJournalEntriesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutJournalEntriesInput>;
  create?: InputMaybe<UserCreateWithoutJournalEntriesInput>;
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

export type UserCreateOrConnectWithoutAuditLogsInput = {
  create: UserCreateWithoutAuditLogsInput;
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

export type UserCreateOrConnectWithoutJournalEntriesInput = {
  create: UserCreateWithoutJournalEntriesInput;
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

export type UserCreateWithoutAuditLogsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutCommentsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutFollowersInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutFollowingInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutJournalEntriesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutLikedReviewsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutReviewsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutShelvesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutUserBooksInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  username?: Maybe<Scalars['String']>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  auditLogs?: InputMaybe<AuditLogOrderByRelationAggregateInput>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  followers?: InputMaybe<UserOrderByRelationAggregateInput>;
  following?: InputMaybe<UserOrderByRelationAggregateInput>;
  hashedPassword?: InputMaybe<SortOrderInput>;
  hashedRefreshToken?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  journalEntries?: InputMaybe<JournalEntryOrderByRelationAggregateInput>;
  likedReviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  username?: InputMaybe<Scalars['String']>;
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

export type UserUpdateOneWithoutAuditLogsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAuditLogsInput>;
  create?: InputMaybe<UserCreateWithoutAuditLogsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAuditLogsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAuditLogsInput>;
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

export type UserUpdateOneWithoutJournalEntriesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutJournalEntriesInput>;
  create?: InputMaybe<UserCreateWithoutJournalEntriesInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutJournalEntriesInput>;
  upsert?: InputMaybe<UserUpsertWithoutJournalEntriesInput>;
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

export type UserUpdateOneWithoutUserBooksNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserBooksInput>;
  create?: InputMaybe<UserCreateWithoutUserBooksInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUserBooksInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserBooksInput>;
};

export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
  data: UserUpdateWithoutAuditLogsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCommentsInput = {
  data: UserUpdateWithoutCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutJournalEntriesInput = {
  data: UserUpdateWithoutJournalEntriesInput;
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

export type UserUpdateWithoutAuditLogsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserUpdateWithoutCommentsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserUpdateWithoutFollowersInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserUpdateWithoutFollowingInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserUpdateWithoutJournalEntriesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserUpdateWithoutLikedReviewsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserUpdateWithoutReviewsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserUpdateWithoutShelvesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserUpdateWithoutUserBooksInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']>;
  username?: InputMaybe<Scalars['String']>;
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

export type UserUpsertWithoutAuditLogsInput = {
  create: UserCreateWithoutAuditLogsInput;
  update: UserUpdateWithoutAuditLogsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutJournalEntriesInput = {
  create: UserCreateWithoutJournalEntriesInput;
  update: UserUpdateWithoutJournalEntriesInput;
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
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  auditLogs?: InputMaybe<AuditLogListRelationFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeFilter>;
  followers?: InputMaybe<UserListRelationFilter>;
  following?: InputMaybe<UserListRelationFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  journalEntries?: InputMaybe<JournalEntryListRelationFilter>;
  likedReviews?: InputMaybe<ReviewListRelationFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  shelves?: InputMaybe<ShelfListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userBooks?: InputMaybe<UserBookListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  auditLogs?: InputMaybe<AuditLogListRelationFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<DateTimeFilter>;
  followers?: InputMaybe<UserListRelationFilter>;
  following?: InputMaybe<UserListRelationFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<StringFilter>;
  journalEntries?: InputMaybe<JournalEntryListRelationFilter>;
  likedReviews?: InputMaybe<ReviewListRelationFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  shelves?: InputMaybe<ShelfListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userBooks?: InputMaybe<UserBookListRelationFilter>;
  username?: InputMaybe<Scalars['String']>;
};

export type VerificationTokenCountAggregate = {
  __typename?: 'VerificationTokenCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  existingEmail: Scalars['Int'];
  expires: Scalars['Int'];
  id: Scalars['Int'];
  token: Scalars['Int'];
};

export type VerificationTokenMaxAggregate = {
  __typename?: 'VerificationTokenMaxAggregate';
  email?: Maybe<Scalars['String']>;
  existingEmail?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type VerificationTokenMinAggregate = {
  __typename?: 'VerificationTokenMinAggregate';
  email?: Maybe<Scalars['String']>;
  existingEmail?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type Work = {
  __typename?: 'Work';
  _count: WorkCount;
  authors?: Maybe<Array<Author>>;
  averageRating?: Maybe<Scalars['Float']>;
  categories?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  editions?: Maybe<Array<Book>>;
  id: Scalars['ID'];
  mainEditionId?: Maybe<Scalars['Int']>;
  ratingsCount?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type WorkAvgAggregate = {
  __typename?: 'WorkAvgAggregate';
  averageRating?: Maybe<Scalars['Float']>;
  mainEditionId?: Maybe<Scalars['Float']>;
  ratingsCount?: Maybe<Scalars['Float']>;
};

export type WorkCount = {
  __typename?: 'WorkCount';
  authors: Scalars['Int'];
  editions: Scalars['Int'];
};

export type WorkCountAggregate = {
  __typename?: 'WorkCountAggregate';
  _all: Scalars['Int'];
  averageRating: Scalars['Int'];
  categories: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  mainEditionId: Scalars['Int'];
  ratingsCount: Scalars['Int'];
  title: Scalars['Int'];
};

export type WorkCreateNestedManyWithoutAuthorsInput = {
  connect?: InputMaybe<Array<WorkWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkCreateOrConnectWithoutAuthorsInput>>;
  create?: InputMaybe<Array<WorkCreateWithoutAuthorsInput>>;
};

export type WorkCreateNestedOneWithoutEditionsInput = {
  connect?: InputMaybe<WorkWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkCreateOrConnectWithoutEditionsInput>;
  create?: InputMaybe<WorkCreateWithoutEditionsInput>;
};

export type WorkCreateOrConnectWithoutAuthorsInput = {
  create: WorkCreateWithoutAuthorsInput;
  where: WorkWhereUniqueInput;
};

export type WorkCreateOrConnectWithoutEditionsInput = {
  create: WorkCreateWithoutEditionsInput;
  where: WorkWhereUniqueInput;
};

export type WorkCreateWithoutAuthorsInput = {
  averageRating?: InputMaybe<Scalars['Float']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  editions?: InputMaybe<BookCreateNestedManyWithoutWorkInput>;
  id?: InputMaybe<Scalars['String']>;
  mainEditionId?: InputMaybe<Scalars['Int']>;
  ratingsCount?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type WorkCreateWithoutEditionsInput = {
  authors?: InputMaybe<AuthorCreateNestedManyWithoutWorksInput>;
  averageRating?: InputMaybe<Scalars['Float']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mainEditionId?: InputMaybe<Scalars['Int']>;
  ratingsCount?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type WorkListRelationFilter = {
  every?: InputMaybe<WorkWhereInput>;
  none?: InputMaybe<WorkWhereInput>;
  some?: InputMaybe<WorkWhereInput>;
};

export type WorkMaxAggregate = {
  __typename?: 'WorkMaxAggregate';
  averageRating?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mainEditionId?: Maybe<Scalars['Int']>;
  ratingsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type WorkMinAggregate = {
  __typename?: 'WorkMinAggregate';
  averageRating?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mainEditionId?: Maybe<Scalars['Int']>;
  ratingsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type WorkOrderByWithRelationInput = {
  authors?: InputMaybe<AuthorOrderByRelationAggregateInput>;
  averageRating?: InputMaybe<SortOrderInput>;
  categories?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  editions?: InputMaybe<BookOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  mainEditionId?: InputMaybe<SortOrderInput>;
  ratingsCount?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
};

export type WorkRelationFilter = {
  is?: InputMaybe<WorkWhereInput>;
  isNot?: InputMaybe<WorkWhereInput>;
};

export type WorkScalarWhereInput = {
  AND?: InputMaybe<Array<WorkScalarWhereInput>>;
  NOT?: InputMaybe<Array<WorkScalarWhereInput>>;
  OR?: InputMaybe<Array<WorkScalarWhereInput>>;
  averageRating?: InputMaybe<FloatFilter>;
  categories?: InputMaybe<StringListFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  mainEditionId?: InputMaybe<IntFilter>;
  ratingsCount?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type WorkSumAggregate = {
  __typename?: 'WorkSumAggregate';
  averageRating?: Maybe<Scalars['Float']>;
  mainEditionId?: Maybe<Scalars['Int']>;
  ratingsCount?: Maybe<Scalars['Int']>;
};

export type WorkUpdateManyMutationInput = {
  averageRating?: InputMaybe<Scalars['Float']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mainEditionId?: InputMaybe<Scalars['Int']>;
  ratingsCount?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type WorkUpdateManyWithWhereWithoutAuthorsInput = {
  data: WorkUpdateManyMutationInput;
  where: WorkScalarWhereInput;
};

export type WorkUpdateManyWithoutAuthorsNestedInput = {
  connect?: InputMaybe<Array<WorkWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WorkCreateOrConnectWithoutAuthorsInput>>;
  create?: InputMaybe<Array<WorkCreateWithoutAuthorsInput>>;
  delete?: InputMaybe<Array<WorkWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WorkScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WorkWhereUniqueInput>>;
  set?: InputMaybe<Array<WorkWhereUniqueInput>>;
  update?: InputMaybe<Array<WorkUpdateWithWhereUniqueWithoutAuthorsInput>>;
  updateMany?: InputMaybe<Array<WorkUpdateManyWithWhereWithoutAuthorsInput>>;
  upsert?: InputMaybe<Array<WorkUpsertWithWhereUniqueWithoutAuthorsInput>>;
};

export type WorkUpdateOneWithoutEditionsNestedInput = {
  connect?: InputMaybe<WorkWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WorkCreateOrConnectWithoutEditionsInput>;
  create?: InputMaybe<WorkCreateWithoutEditionsInput>;
  delete?: InputMaybe<WorkWhereInput>;
  disconnect?: InputMaybe<WorkWhereInput>;
  update?: InputMaybe<WorkUpdateToOneWithWhereWithoutEditionsInput>;
  upsert?: InputMaybe<WorkUpsertWithoutEditionsInput>;
};

export type WorkUpdateToOneWithWhereWithoutEditionsInput = {
  data: WorkUpdateWithoutEditionsInput;
  where?: InputMaybe<WorkWhereInput>;
};

export type WorkUpdateWithWhereUniqueWithoutAuthorsInput = {
  data: WorkUpdateWithoutAuthorsInput;
  where: WorkWhereUniqueInput;
};

export type WorkUpdateWithoutAuthorsInput = {
  averageRating?: InputMaybe<Scalars['Float']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  editions?: InputMaybe<BookUpdateManyWithoutWorkNestedInput>;
  id?: InputMaybe<Scalars['String']>;
  mainEditionId?: InputMaybe<Scalars['Int']>;
  ratingsCount?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type WorkUpdateWithoutEditionsInput = {
  authors?: InputMaybe<AuthorUpdateManyWithoutWorksNestedInput>;
  averageRating?: InputMaybe<Scalars['Float']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mainEditionId?: InputMaybe<Scalars['Int']>;
  ratingsCount?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type WorkUpsertWithWhereUniqueWithoutAuthorsInput = {
  create: WorkCreateWithoutAuthorsInput;
  update: WorkUpdateWithoutAuthorsInput;
  where: WorkWhereUniqueInput;
};

export type WorkUpsertWithoutEditionsInput = {
  create: WorkCreateWithoutEditionsInput;
  update: WorkUpdateWithoutEditionsInput;
  where?: InputMaybe<WorkWhereInput>;
};

export type WorkWhereInput = {
  AND?: InputMaybe<Array<WorkWhereInput>>;
  NOT?: InputMaybe<Array<WorkWhereInput>>;
  OR?: InputMaybe<Array<WorkWhereInput>>;
  authors?: InputMaybe<AuthorListRelationFilter>;
  averageRating?: InputMaybe<FloatFilter>;
  categories?: InputMaybe<StringListFilter>;
  description?: InputMaybe<StringFilter>;
  editions?: InputMaybe<BookListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  mainEditionId?: InputMaybe<IntFilter>;
  ratingsCount?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type WorkWhereUniqueInput = {
  AND?: InputMaybe<Array<WorkWhereInput>>;
  NOT?: InputMaybe<Array<WorkWhereInput>>;
  OR?: InputMaybe<Array<WorkWhereInput>>;
  authors?: InputMaybe<AuthorListRelationFilter>;
  averageRating?: InputMaybe<FloatFilter>;
  categories?: InputMaybe<StringListFilter>;
  description?: InputMaybe<StringFilter>;
  editions?: InputMaybe<BookListRelationFilter>;
  id?: InputMaybe<Scalars['String']>;
  mainEditionId?: InputMaybe<IntFilter>;
  ratingsCount?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
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

export type CreateBookMutationVariables = Exact<{
  data: BookCreateInput;
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook: { __typename?: 'Book', coverImage?: string | null, description?: string | null, id: string, pageCount?: number | null, publishedDate?: string | null, publisher?: string | null, title: string, authors?: Array<{ __typename?: 'Author', name: string }> | null } };

export type CreateCommentMutationVariables = Exact<{
  data: CommentCreateInput;
  where: ReviewWhereUniqueInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string, content?: string | null, createdAt: any, user?: { __typename?: 'User', id: string, username?: string | null } | null } };

export type CreateJournalEntryMutationVariables = Exact<{
  data: JournalEntryCreateInput;
  book: BookWhereUniqueInput;
}>;


export type CreateJournalEntryMutation = { __typename?: 'Mutation', createJournalEntry: { __typename?: 'JournalEntry', id: string, readingNotes?: string | null, pagesRead: number, dateRead: any, currentPage: number, currentPercent: number } };

export type RemoveJournalEntryMutationVariables = Exact<{
  where: JournalEntryWhereUniqueInput;
}>;


export type RemoveJournalEntryMutation = { __typename?: 'Mutation', removeJournalEntry: { __typename?: 'JournalEntry', id: string } };

export type UpdateJournalEntryMutationVariables = Exact<{
  data: JournalEntryUpdateInput;
  where: JournalEntryWhereUniqueInput;
}>;


export type UpdateJournalEntryMutation = { __typename?: 'Mutation', updateJournalEntry: { __typename?: 'JournalEntry', id: string, readingNotes?: string | null, pagesRead: number, dateRead: any, currentPage: number, currentPercent: number, userBook?: { __typename?: 'UserBook', status: string, book?: { __typename?: 'Book', id: string, title: string, pageCount?: number | null, coverImage?: string | null, authors?: Array<{ __typename?: 'Author', name: string }> | null } | null, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string } }> | null } | null } };

export type CreateReviewMutationVariables = Exact<{
  data: ReviewDataInput;
  where: BookWhereUniqueInput;
  bookData: BookCreateInput;
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', createReview: { __typename?: 'Review', id: string, content?: string | null } };

export type UpdateReviewMutationVariables = Exact<{
  where: ReviewWhereUniqueInput;
  data: ReviewDataInput;
}>;


export type UpdateReviewMutation = { __typename?: 'Mutation', updateReview: { __typename?: 'Review', id: string, content?: string | null, spoilers: boolean } };

export type LikeReviewMutationVariables = Exact<{
  where: ReviewWhereUniqueInput;
  value: Scalars['Boolean']['input'];
}>;


export type LikeReviewMutation = { __typename?: 'Mutation', likeReview: { __typename?: 'Review', id: string, likeCount: number } };

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

export type UpdateUserBookMutationVariables = Exact<{
  data: UserBookUpdateInput;
  where: BookWhereUniqueInput;
}>;


export type UpdateUserBookMutation = { __typename?: 'Mutation', updateUserBook: { __typename?: 'UserBook', status: string, id: string, book?: { __typename?: 'Book', title: string } | null } };

export type RemoveUserBookMutationVariables = Exact<{
  where: BookWhereUniqueInput;
}>;


export type RemoveUserBookMutation = { __typename?: 'Mutation', removeUserBook: { __typename?: 'UserBook', id: string, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', name: string } }> | null } };

export type ImportUserBooksMutationVariables = Exact<{
  content: Scalars['String']['input'];
}>;


export type ImportUserBooksMutation = { __typename?: 'Mutation', importUserBooks: boolean };

export type UpdateUserBookOrderMutationVariables = Exact<{
  data: UserBookUpdateOrderInput;
}>;


export type UpdateUserBookOrderMutation = { __typename?: 'Mutation', updateUserBookOrder: Array<{ __typename?: 'UserBook', id: string, order: number }> };

export type GetAuditLogsQueryVariables = Exact<{
  where?: InputMaybe<UserBookWhereUniqueInput>;
  action?: InputMaybe<Action>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuditLogOrderByWithRelationInput>;
}>;


export type GetAuditLogsQuery = { __typename?: 'Query', auditLogs: { __typename?: 'ActivitiesResponse', hasMore: boolean, totalActivities: number, activities?: Array<{ __typename?: 'AuditLog', id: string, action: Action, createdAt: any, updatedAt: any, actionContent?: string | null, user?: { __typename?: 'User', id: string, username?: string | null, email: string } | null, book?: { __typename?: 'Book', id: string, title: string, pageCount?: number | null, coverImage?: string | null, authors?: Array<{ __typename?: 'Author', name: string }> | null } | null }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'MeResponse', email?: string | null, username?: string | null, isOAuth?: boolean | null } };

export type BookQueryVariables = Exact<{
  where: BookWhereUniqueInput;
}>;


export type BookQuery = { __typename?: 'Query', book?: { __typename?: 'Book', id: string, title: string, coverImage?: string | null, description?: string | null, publishedDate?: string | null, publisher?: string | null, pageCount?: number | null, authors?: Array<{ __typename?: 'Author', name: string }> | null, work?: { __typename?: 'Work', categories?: Array<string> | null, averageRating?: number | null, ratingsCount?: number | null } | null } | null };

export type GetGoogleBookQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetGoogleBookQuery = { __typename?: 'Query', getGoogleBook?: { __typename?: 'Book', id: string, title: string, coverImage?: string | null, description?: string | null, publishedDate?: string | null, publisher?: string | null, pageCount?: number | null, authors?: Array<{ __typename?: 'Author', name: string }> | null, work?: { __typename?: 'Work', categories?: Array<string> | null, averageRating?: number | null, ratingsCount?: number | null } | null } | null };

export type CommentsQueryVariables = Exact<{
  where: ReviewWhereUniqueInput;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
}>;


export type CommentsQuery = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', id: string, content?: string | null, createdAt: any, user?: { __typename?: 'User', id: string, username?: string | null } | null }> };

export type CountJournalEntriesQueryVariables = Exact<{
  book: BookWhereUniqueInput;
}>;


export type CountJournalEntriesQuery = { __typename?: 'Query', countJournalEntries: number };

export type GetMostRecentJournalEntryQueryVariables = Exact<{
  book: BookWhereUniqueInput;
}>;


export type GetMostRecentJournalEntryQuery = { __typename?: 'Query', getMostRecentJournalEntry?: { __typename?: 'JournalEntry', id: string, readingNotes?: string | null, dateRead: any, currentPage: number, currentPercent: number } | null };

export type JournalEntriesQueryVariables = Exact<{
  book?: InputMaybe<BookWhereUniqueInput>;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
}>;


export type JournalEntriesQuery = { __typename?: 'Query', journalEntries: Array<{ __typename?: 'JournalEntry', id: string, readingNotes?: string | null, dateRead: any, currentPage: number, pagesRead: number, currentPercent: number, userBook?: { __typename?: 'UserBook', status: string, book?: { __typename?: 'Book', id: string, title: string, pageCount?: number | null, coverImage?: string | null, authors?: Array<{ __typename?: 'Author', name: string }> | null } | null, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string } }> | null } | null }> };

export type BookReviewsQueryVariables = Exact<{
  where: BookWhereUniqueInput;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
}>;


export type BookReviewsQuery = { __typename?: 'Query', bookReviews: Array<{ __typename?: 'Review', id: string, content?: string | null, createdAt: any, spoilers: boolean, likeCount: number, liked: boolean, commentCount: number, userBook?: { __typename?: 'UserBook', id: string, rating?: number | null, status: string, user?: { __typename?: 'User', id: string, username?: string | null } | null } | null }> };

export type BookReviewQueryVariables = Exact<{
  where: ReviewUniqueInput;
}>;


export type BookReviewQuery = { __typename?: 'Query', bookReview: { __typename?: 'Review', id: string, content?: string | null, createdAt: any, spoilers: boolean, likeCount: number, liked: boolean, book?: { __typename?: 'Book', id: string, title: string, pageCount?: number | null, coverImage?: string | null, publishedDate?: string | null, authors?: Array<{ __typename?: 'Author', name: string }> | null } | null, userBook?: { __typename?: 'UserBook', id: string, rating?: number | null, user?: { __typename?: 'User', id: string, username?: string | null } | null } | null } };

export type ShelvesQueryVariables = Exact<{ [key: string]: never; }>;


export type ShelvesQuery = { __typename?: 'Query', shelves?: Array<{ __typename?: 'Shelf', id: string, name: string, userId?: string | null, _count: { __typename?: 'ShelfCount', userBooks: number } }> | null };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username?: string | null, email: string, isFollowing: boolean, followerCount: number, followingCount: number } };

export type UserBookQueryVariables = Exact<{
  where: BookWhereUniqueInput;
}>;


export type UserBookQuery = { __typename?: 'Query', userBook?: { __typename?: 'UserBook', userId: string, bookId: number, status: string, rating?: number | null, book?: { __typename?: 'Book', id: string, title: string, pageCount?: number | null, coverImage?: string | null, authors?: Array<{ __typename?: 'Author', name: string }> | null } | null, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string } }> | null } | null };

export type GetUserBooksQueryVariables = Exact<{
  where?: InputMaybe<UserBookWhereInput>;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  orderBy?: InputMaybe<UserBookOrderByWithRelationInput>;
}>;


export type GetUserBooksQuery = { __typename?: 'Query', getUserBooks: { __typename?: 'UserBooksResponse', hasMore: boolean, totalBooks: number, userBooks?: Array<{ __typename?: 'UserBook', id: string, userId: string, bookId: number, status: string, rating?: number | null, createdAt: any, updatedAt: any, order: number, book?: { __typename?: 'Book', id: string, title: string, pageCount?: number | null, coverImage?: string | null, authors?: Array<{ __typename?: 'Author', name: string }> | null, _count: { __typename?: 'BookCount', userBook: number, reviews: number } } | null, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string } }> | null, _count: { __typename?: 'UserBookCount', shelves: number, reviews: number, journalEntry: number }, journalEntry?: Array<{ __typename?: 'JournalEntry', id: string, readingNotes?: string | null, dateRead: any, currentPage: number, currentPercent: number }> | null }> | null } };

export type CountUserBooksQueryVariables = Exact<{
  where?: InputMaybe<UserBookWhereInput>;
}>;


export type CountUserBooksQuery = { __typename?: 'Query', countUserBooks: number };


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
export const CreateBookDocument = gql`
    mutation CreateBook($data: BookCreateInput!) {
  createBook(data: $data) {
    authors {
      name
    }
    coverImage
    description
    id
    pageCount
    publishedDate
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
export const CreateCommentDocument = gql`
    mutation CreateComment($data: CommentCreateInput!, $where: ReviewWhereUniqueInput!) {
  createComment(data: $data, where: $where) {
    id
    content
    createdAt
    user {
      id
      username
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreateJournalEntryDocument = gql`
    mutation CreateJournalEntry($data: JournalEntryCreateInput!, $book: BookWhereUniqueInput!) {
  createJournalEntry(data: $data, book: $book) {
    id
    readingNotes
    pagesRead
    dateRead
    currentPage
    currentPercent
  }
}
    `;
export type CreateJournalEntryMutationFn = Apollo.MutationFunction<CreateJournalEntryMutation, CreateJournalEntryMutationVariables>;

/**
 * __useCreateJournalEntryMutation__
 *
 * To run a mutation, you first call `useCreateJournalEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJournalEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJournalEntryMutation, { data, loading, error }] = useCreateJournalEntryMutation({
 *   variables: {
 *      data: // value for 'data'
 *      book: // value for 'book'
 *   },
 * });
 */
export function useCreateJournalEntryMutation(baseOptions?: Apollo.MutationHookOptions<CreateJournalEntryMutation, CreateJournalEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJournalEntryMutation, CreateJournalEntryMutationVariables>(CreateJournalEntryDocument, options);
      }
export type CreateJournalEntryMutationHookResult = ReturnType<typeof useCreateJournalEntryMutation>;
export type CreateJournalEntryMutationResult = Apollo.MutationResult<CreateJournalEntryMutation>;
export type CreateJournalEntryMutationOptions = Apollo.BaseMutationOptions<CreateJournalEntryMutation, CreateJournalEntryMutationVariables>;
export const RemoveJournalEntryDocument = gql`
    mutation RemoveJournalEntry($where: JournalEntryWhereUniqueInput!) {
  removeJournalEntry(where: $where) {
    id
  }
}
    `;
export type RemoveJournalEntryMutationFn = Apollo.MutationFunction<RemoveJournalEntryMutation, RemoveJournalEntryMutationVariables>;

/**
 * __useRemoveJournalEntryMutation__
 *
 * To run a mutation, you first call `useRemoveJournalEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveJournalEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeJournalEntryMutation, { data, loading, error }] = useRemoveJournalEntryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemoveJournalEntryMutation(baseOptions?: Apollo.MutationHookOptions<RemoveJournalEntryMutation, RemoveJournalEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveJournalEntryMutation, RemoveJournalEntryMutationVariables>(RemoveJournalEntryDocument, options);
      }
export type RemoveJournalEntryMutationHookResult = ReturnType<typeof useRemoveJournalEntryMutation>;
export type RemoveJournalEntryMutationResult = Apollo.MutationResult<RemoveJournalEntryMutation>;
export type RemoveJournalEntryMutationOptions = Apollo.BaseMutationOptions<RemoveJournalEntryMutation, RemoveJournalEntryMutationVariables>;
export const UpdateJournalEntryDocument = gql`
    mutation UpdateJournalEntry($data: JournalEntryUpdateInput!, $where: JournalEntryWhereUniqueInput!) {
  updateJournalEntry(data: $data, where: $where) {
    id
    readingNotes
    pagesRead
    dateRead
    currentPage
    currentPercent
    userBook {
      status
      book {
        id
        title
        authors {
          name
        }
        pageCount
        coverImage
      }
      shelves {
        shelf {
          id
          name
        }
      }
    }
  }
}
    `;
export type UpdateJournalEntryMutationFn = Apollo.MutationFunction<UpdateJournalEntryMutation, UpdateJournalEntryMutationVariables>;

/**
 * __useUpdateJournalEntryMutation__
 *
 * To run a mutation, you first call `useUpdateJournalEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJournalEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJournalEntryMutation, { data, loading, error }] = useUpdateJournalEntryMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateJournalEntryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJournalEntryMutation, UpdateJournalEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJournalEntryMutation, UpdateJournalEntryMutationVariables>(UpdateJournalEntryDocument, options);
      }
export type UpdateJournalEntryMutationHookResult = ReturnType<typeof useUpdateJournalEntryMutation>;
export type UpdateJournalEntryMutationResult = Apollo.MutationResult<UpdateJournalEntryMutation>;
export type UpdateJournalEntryMutationOptions = Apollo.BaseMutationOptions<UpdateJournalEntryMutation, UpdateJournalEntryMutationVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview($data: ReviewDataInput!, $where: BookWhereUniqueInput!, $bookData: BookCreateInput!) {
  createReview(data: $data, where: $where, bookData: $bookData) {
    id
    content
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *      bookData: // value for 'bookData'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const UpdateReviewDocument = gql`
    mutation UpdateReview($where: ReviewWhereUniqueInput!, $data: ReviewDataInput!) {
  updateReview(where: $where, data: $data) {
    id
    content
    spoilers
  }
}
    `;
export type UpdateReviewMutationFn = Apollo.MutationFunction<UpdateReviewMutation, UpdateReviewMutationVariables>;

/**
 * __useUpdateReviewMutation__
 *
 * To run a mutation, you first call `useUpdateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReviewMutation, { data, loading, error }] = useUpdateReviewMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateReviewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReviewMutation, UpdateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument, options);
      }
export type UpdateReviewMutationHookResult = ReturnType<typeof useUpdateReviewMutation>;
export type UpdateReviewMutationResult = Apollo.MutationResult<UpdateReviewMutation>;
export type UpdateReviewMutationOptions = Apollo.BaseMutationOptions<UpdateReviewMutation, UpdateReviewMutationVariables>;
export const LikeReviewDocument = gql`
    mutation LikeReview($where: ReviewWhereUniqueInput!, $value: Boolean!) {
  likeReview(where: $where, value: $value) {
    id
    likeCount
  }
}
    `;
export type LikeReviewMutationFn = Apollo.MutationFunction<LikeReviewMutation, LikeReviewMutationVariables>;

/**
 * __useLikeReviewMutation__
 *
 * To run a mutation, you first call `useLikeReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeReviewMutation, { data, loading, error }] = useLikeReviewMutation({
 *   variables: {
 *      where: // value for 'where'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useLikeReviewMutation(baseOptions?: Apollo.MutationHookOptions<LikeReviewMutation, LikeReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeReviewMutation, LikeReviewMutationVariables>(LikeReviewDocument, options);
      }
export type LikeReviewMutationHookResult = ReturnType<typeof useLikeReviewMutation>;
export type LikeReviewMutationResult = Apollo.MutationResult<LikeReviewMutation>;
export type LikeReviewMutationOptions = Apollo.BaseMutationOptions<LikeReviewMutation, LikeReviewMutationVariables>;
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
export const UpdateUserBookDocument = gql`
    mutation UpdateUserBook($data: UserBookUpdateInput!, $where: BookWhereUniqueInput!) {
  updateUserBook(data: $data, where: $where) {
    status
    id
    book {
      title
    }
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
    mutation RemoveUserBook($where: BookWhereUniqueInput!) {
  removeUserBook(where: $where) {
    id
    shelves {
      shelf {
        name
      }
    }
  }
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
        authors {
          name
        }
        pageCount
        coverImage
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
export type GetAuditLogsQueryHookResult = ReturnType<typeof useGetAuditLogsQuery>;
export type GetAuditLogsLazyQueryHookResult = ReturnType<typeof useGetAuditLogsLazyQuery>;
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
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const BookDocument = gql`
    query Book($where: BookWhereUniqueInput!) {
  book(where: $where) {
    id
    title
    authors {
      name
    }
    coverImage
    description
    publishedDate
    publisher
    pageCount
    work {
      categories
      averageRating
      ratingsCount
    }
  }
}
    `;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBookQuery(baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookQuery, BookQueryVariables>(BookDocument, options);
      }
export function useBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, options);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const GetGoogleBookDocument = gql`
    query GetGoogleBook($id: String!) {
  getGoogleBook(id: $id) {
    id
    title
    authors {
      name
    }
    coverImage
    description
    publishedDate
    publisher
    pageCount
    work {
      categories
      averageRating
      ratingsCount
    }
  }
}
    `;

/**
 * __useGetGoogleBookQuery__
 *
 * To run a query within a React component, call `useGetGoogleBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGoogleBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGoogleBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGoogleBookQuery(baseOptions: Apollo.QueryHookOptions<GetGoogleBookQuery, GetGoogleBookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGoogleBookQuery, GetGoogleBookQueryVariables>(GetGoogleBookDocument, options);
      }
export function useGetGoogleBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGoogleBookQuery, GetGoogleBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGoogleBookQuery, GetGoogleBookQueryVariables>(GetGoogleBookDocument, options);
        }
export type GetGoogleBookQueryHookResult = ReturnType<typeof useGetGoogleBookQuery>;
export type GetGoogleBookLazyQueryHookResult = ReturnType<typeof useGetGoogleBookLazyQuery>;
export type GetGoogleBookQueryResult = Apollo.QueryResult<GetGoogleBookQuery, GetGoogleBookQueryVariables>;
export const CommentsDocument = gql`
    query Comments($where: ReviewWhereUniqueInput!, $limit: Int! = 20, $offset: Int! = 0) {
  comments(where: $where, offset: $offset, limit: $limit) {
    id
    content
    createdAt
    user {
      id
      username
    }
  }
}
    `;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export const CountJournalEntriesDocument = gql`
    query countJournalEntries($book: BookWhereUniqueInput!) {
  countJournalEntries(book: $book)
}
    `;

/**
 * __useCountJournalEntriesQuery__
 *
 * To run a query within a React component, call `useCountJournalEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountJournalEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountJournalEntriesQuery({
 *   variables: {
 *      book: // value for 'book'
 *   },
 * });
 */
export function useCountJournalEntriesQuery(baseOptions: Apollo.QueryHookOptions<CountJournalEntriesQuery, CountJournalEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountJournalEntriesQuery, CountJournalEntriesQueryVariables>(CountJournalEntriesDocument, options);
      }
export function useCountJournalEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountJournalEntriesQuery, CountJournalEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountJournalEntriesQuery, CountJournalEntriesQueryVariables>(CountJournalEntriesDocument, options);
        }
export type CountJournalEntriesQueryHookResult = ReturnType<typeof useCountJournalEntriesQuery>;
export type CountJournalEntriesLazyQueryHookResult = ReturnType<typeof useCountJournalEntriesLazyQuery>;
export type CountJournalEntriesQueryResult = Apollo.QueryResult<CountJournalEntriesQuery, CountJournalEntriesQueryVariables>;
export const GetMostRecentJournalEntryDocument = gql`
    query getMostRecentJournalEntry($book: BookWhereUniqueInput!) {
  getMostRecentJournalEntry(book: $book) {
    id
    readingNotes
    dateRead
    currentPage
    currentPercent
  }
}
    `;

/**
 * __useGetMostRecentJournalEntryQuery__
 *
 * To run a query within a React component, call `useGetMostRecentJournalEntryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMostRecentJournalEntryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMostRecentJournalEntryQuery({
 *   variables: {
 *      book: // value for 'book'
 *   },
 * });
 */
export function useGetMostRecentJournalEntryQuery(baseOptions: Apollo.QueryHookOptions<GetMostRecentJournalEntryQuery, GetMostRecentJournalEntryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMostRecentJournalEntryQuery, GetMostRecentJournalEntryQueryVariables>(GetMostRecentJournalEntryDocument, options);
      }
export function useGetMostRecentJournalEntryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMostRecentJournalEntryQuery, GetMostRecentJournalEntryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMostRecentJournalEntryQuery, GetMostRecentJournalEntryQueryVariables>(GetMostRecentJournalEntryDocument, options);
        }
export type GetMostRecentJournalEntryQueryHookResult = ReturnType<typeof useGetMostRecentJournalEntryQuery>;
export type GetMostRecentJournalEntryLazyQueryHookResult = ReturnType<typeof useGetMostRecentJournalEntryLazyQuery>;
export type GetMostRecentJournalEntryQueryResult = Apollo.QueryResult<GetMostRecentJournalEntryQuery, GetMostRecentJournalEntryQueryVariables>;
export const JournalEntriesDocument = gql`
    query JournalEntries($book: BookWhereUniqueInput, $limit: Int! = 20, $offset: Int! = 0) {
  journalEntries(book: $book, offset: $offset, limit: $limit) {
    id
    readingNotes
    dateRead
    currentPage
    pagesRead
    currentPercent
    userBook {
      status
      book {
        id
        title
        authors {
          name
        }
        pageCount
        coverImage
      }
      shelves {
        shelf {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useJournalEntriesQuery__
 *
 * To run a query within a React component, call `useJournalEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useJournalEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJournalEntriesQuery({
 *   variables: {
 *      book: // value for 'book'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useJournalEntriesQuery(baseOptions?: Apollo.QueryHookOptions<JournalEntriesQuery, JournalEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JournalEntriesQuery, JournalEntriesQueryVariables>(JournalEntriesDocument, options);
      }
export function useJournalEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JournalEntriesQuery, JournalEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JournalEntriesQuery, JournalEntriesQueryVariables>(JournalEntriesDocument, options);
        }
export type JournalEntriesQueryHookResult = ReturnType<typeof useJournalEntriesQuery>;
export type JournalEntriesLazyQueryHookResult = ReturnType<typeof useJournalEntriesLazyQuery>;
export type JournalEntriesQueryResult = Apollo.QueryResult<JournalEntriesQuery, JournalEntriesQueryVariables>;
export const BookReviewsDocument = gql`
    query BookReviews($where: BookWhereUniqueInput!, $limit: Int! = 20, $offset: Int! = 0) {
  bookReviews(where: $where, offset: $offset, limit: $limit) {
    id
    content
    createdAt
    spoilers
    likeCount
    liked
    userBook {
      id
      rating
      status
      user {
        id
        username
      }
    }
    commentCount
  }
}
    `;

/**
 * __useBookReviewsQuery__
 *
 * To run a query within a React component, call `useBookReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookReviewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useBookReviewsQuery(baseOptions: Apollo.QueryHookOptions<BookReviewsQuery, BookReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookReviewsQuery, BookReviewsQueryVariables>(BookReviewsDocument, options);
      }
export function useBookReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookReviewsQuery, BookReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookReviewsQuery, BookReviewsQueryVariables>(BookReviewsDocument, options);
        }
export type BookReviewsQueryHookResult = ReturnType<typeof useBookReviewsQuery>;
export type BookReviewsLazyQueryHookResult = ReturnType<typeof useBookReviewsLazyQuery>;
export type BookReviewsQueryResult = Apollo.QueryResult<BookReviewsQuery, BookReviewsQueryVariables>;
export const BookReviewDocument = gql`
    query BookReview($where: ReviewUniqueInput!) {
  bookReview(where: $where) {
    id
    content
    createdAt
    spoilers
    likeCount
    liked
    book {
      id
      title
      authors {
        name
      }
      pageCount
      coverImage
      publishedDate
    }
    userBook {
      id
      rating
      user {
        id
        username
      }
    }
  }
}
    `;

/**
 * __useBookReviewQuery__
 *
 * To run a query within a React component, call `useBookReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookReviewQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBookReviewQuery(baseOptions: Apollo.QueryHookOptions<BookReviewQuery, BookReviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookReviewQuery, BookReviewQueryVariables>(BookReviewDocument, options);
      }
export function useBookReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookReviewQuery, BookReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookReviewQuery, BookReviewQueryVariables>(BookReviewDocument, options);
        }
export type BookReviewQueryHookResult = ReturnType<typeof useBookReviewQuery>;
export type BookReviewLazyQueryHookResult = ReturnType<typeof useBookReviewLazyQuery>;
export type BookReviewQueryResult = Apollo.QueryResult<BookReviewQuery, BookReviewQueryVariables>;
export const ShelvesDocument = gql`
    query Shelves {
  shelves {
    id
    name
    _count {
      userBooks
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
export type ShelvesQueryHookResult = ReturnType<typeof useShelvesQuery>;
export type ShelvesLazyQueryHookResult = ReturnType<typeof useShelvesLazyQuery>;
export type ShelvesQueryResult = Apollo.QueryResult<ShelvesQuery, ShelvesQueryVariables>;
export const UserDocument = gql`
    query User($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    username
    email
    isFollowing
    followerCount
    followingCount
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
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserBookDocument = gql`
    query UserBook($where: BookWhereUniqueInput!) {
  userBook(where: $where) {
    userId
    bookId
    status
    rating
    book {
      id
      title
      authors {
        name
      }
      pageCount
      coverImage
    }
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
export const GetUserBooksDocument = gql`
    query GetUserBooks($where: UserBookWhereInput, $limit: Int! = 100, $offset: Int! = 0, $orderBy: UserBookOrderByWithRelationInput) {
  getUserBooks(where: $where, offset: $offset, limit: $limit, orderBy: $orderBy) {
    userBooks {
      id
      userId
      bookId
      status
      rating
      createdAt
      updatedAt
      order
      book {
        id
        title
        authors {
          name
        }
        pageCount
        coverImage
        _count {
          userBook
          reviews
        }
      }
      shelves {
        shelf {
          id
          name
        }
      }
      _count {
        shelves
        reviews
        journalEntry
      }
      journalEntry {
        id
        readingNotes
        dateRead
        currentPage
        currentPercent
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
export type GetUserBooksQueryHookResult = ReturnType<typeof useGetUserBooksQuery>;
export type GetUserBooksLazyQueryHookResult = ReturnType<typeof useGetUserBooksLazyQuery>;
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
export type CountUserBooksQueryHookResult = ReturnType<typeof useCountUserBooksQuery>;
export type CountUserBooksLazyQueryHookResult = ReturnType<typeof useCountUserBooksLazyQuery>;
export type CountUserBooksQueryResult = Apollo.QueryResult<CountUserBooksQuery, CountUserBooksQueryVariables>;