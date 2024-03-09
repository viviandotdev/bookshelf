import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';

export enum WorkScalarFieldEnum {
  id = 'id',
  title = 'title',
  description = 'description',
  categories = 'categories',
  mainCategory = 'mainCategory',
  averageRating = 'averageRating',
  ratingsCount = 'ratingsCount',
  mainEditionId = 'mainEditionId',
}

export enum VerificationTokenScalarFieldEnum {
  id = 'id',
  email = 'email',
  existingEmail = 'existingEmail',
  token = 'token',
  expires = 'expires',
}

export enum UserBookShelvesScalarFieldEnum {
  userBookId = 'userBookId',
  shelfId = 'shelfId',
}

export enum UserBookScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  bookId = 'bookId',
  status = 'status',
  rating = 'rating',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  order = 'order',
}

export enum UserScalarFieldEnum {
  id = 'id',
  email = 'email',
  username = 'username',
  hashedPassword = 'hashedPassword',
  hashedRefreshToken = 'hashedRefreshToken',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  image = 'image',
  emailVerified = 'emailVerified',
}

export enum ShelfScalarFieldEnum {
  id = 'id',
  name = 'name',
  userId = 'userId',
  dateTime = 'dateTime',
}

export enum ReviewScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  content = 'content',
  userBookId = 'userBookId',
  likeCount = 'likeCount',
  spoilers = 'spoilers',
  userId = 'userId',
  bookId = 'bookId',
}

export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}

export enum NullsOrder {
  first = 'first',
  last = 'last',
}

export enum ACTION {
  REVIEW = 'REVIEW',
  COMMENT = 'COMMENT',
  STATUS_UPDATE = 'STATUS_UPDATE',
  LIKE = 'LIKE',
  RATE = 'RATE',
  LOG = 'LOG',
  SHELVE = 'SHELVE',
}

export enum PasswordResetTokenScalarFieldEnum {
  id = 'id',
  email = 'email',
  token = 'token',
  expires = 'expires',
}

export enum JournalEntryScalarFieldEnum {
  id = 'id',
  readingNotes = 'readingNotes',
  dateRead = 'dateRead',
  createdAt = 'createdAt',
  currentPage = 'currentPage',
  pagesRead = 'pagesRead',
  currentPercent = 'currentPercent',
  userId = 'userId',
  userBookId = 'userBookId',
}

export enum IdentifierScalarFieldEnum {
  bookId = 'bookId',
  isbn10 = 'isbn10',
  isbn13 = 'isbn13',
  googleBooks = 'googleBooks',
  openLibrary = 'openLibrary',
  goodreads = 'goodreads',
  amazon = 'amazon',
}

export enum CommentScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  content = 'content',
  userId = 'userId',
  reviewId = 'reviewId',
}

export enum BookScalarFieldEnum {
  id = 'id',
  title = 'title',
  publishedDate = 'publishedDate',
  publisher = 'publisher',
  coverImage = 'coverImage',
  description = 'description',
  language = 'language',
  pageCount = 'pageCount',
  workId = 'workId',
}

export enum AuthorScalarFieldEnum {
  id = 'id',
  name = 'name',
  bio = 'bio',
  birthDate = 'birthDate',
  deathDate = 'deathDate',
  wikipedia = 'wikipedia',
  photo = 'photo',
}

export enum AuditLogScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  action = 'action',
  bookId = 'bookId',
  actionContent = 'actionContent',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum AccountScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  type = 'type',
  provider = 'provider',
  providerAccountId = 'providerAccountId',
  refresh_token = 'refresh_token',
  access_token = 'access_token',
  expires_at = 'expires_at',
  token_type = 'token_type',
  scope = 'scope',
  id_token = 'id_token',
  session_state = 'session_state',
}

registerEnumType(AccountScalarFieldEnum, {
  name: 'AccountScalarFieldEnum',
  description: undefined,
});
registerEnumType(AuditLogScalarFieldEnum, {
  name: 'AuditLogScalarFieldEnum',
  description: undefined,
});
registerEnumType(AuthorScalarFieldEnum, {
  name: 'AuthorScalarFieldEnum',
  description: undefined,
});
registerEnumType(BookScalarFieldEnum, {
  name: 'BookScalarFieldEnum',
  description: undefined,
});
registerEnumType(CommentScalarFieldEnum, {
  name: 'CommentScalarFieldEnum',
  description: undefined,
});
registerEnumType(IdentifierScalarFieldEnum, {
  name: 'IdentifierScalarFieldEnum',
  description: undefined,
});
registerEnumType(JournalEntryScalarFieldEnum, {
  name: 'JournalEntryScalarFieldEnum',
  description: undefined,
});
registerEnumType(PasswordResetTokenScalarFieldEnum, {
  name: 'PasswordResetTokenScalarFieldEnum',
  description: undefined,
});
registerEnumType(ACTION, { name: 'ACTION', description: undefined });
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined });
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined });
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined });
registerEnumType(TransactionIsolationLevel, {
  name: 'TransactionIsolationLevel',
  description: undefined,
});
registerEnumType(ReviewScalarFieldEnum, {
  name: 'ReviewScalarFieldEnum',
  description: undefined,
});
registerEnumType(ShelfScalarFieldEnum, {
  name: 'ShelfScalarFieldEnum',
  description: undefined,
});
registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});
registerEnumType(UserBookScalarFieldEnum, {
  name: 'UserBookScalarFieldEnum',
  description: undefined,
});
registerEnumType(UserBookShelvesScalarFieldEnum, {
  name: 'UserBookShelvesScalarFieldEnum',
  description: undefined,
});
registerEnumType(VerificationTokenScalarFieldEnum, {
  name: 'VerificationTokenScalarFieldEnum',
  description: undefined,
});
registerEnumType(WorkScalarFieldEnum, {
  name: 'WorkScalarFieldEnum',
  description: undefined,
});

@ArgsType()
export class AccountAggregateArgs {
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AccountWhereInput>;
  @Field(() => [AccountOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AccountOrderByWithRelationInput>;
  @Field(() => AccountWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'provider_providerAccountId'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => AccountCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AccountCountAggregateInput>;
  @Field(() => AccountAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof AccountAvgAggregateInput>;
  @Field(() => AccountSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof AccountSumAggregateInput>;
  @Field(() => AccountMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AccountMinAggregateInput>;
  @Field(() => AccountMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AccountMaxAggregateInput>;
}

@InputType()
export class AccountAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  expires_at?: true;
}

@ObjectType()
export class AccountAvgAggregate {
  @Field(() => Float, { nullable: true })
  expires_at?: number;
}

@InputType()
export class AccountAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  expires_at?: keyof typeof SortOrder;
}

@InputType()
export class AccountCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  type?: true;
  @Field(() => Boolean, { nullable: true })
  provider?: true;
  @Field(() => Boolean, { nullable: true })
  providerAccountId?: true;
  @Field(() => Boolean, { nullable: true })
  refresh_token?: true;
  @Field(() => Boolean, { nullable: true })
  access_token?: true;
  @Field(() => Boolean, { nullable: true })
  expires_at?: true;
  @Field(() => Boolean, { nullable: true })
  token_type?: true;
  @Field(() => Boolean, { nullable: true })
  scope?: true;
  @Field(() => Boolean, { nullable: true })
  id_token?: true;
  @Field(() => Boolean, { nullable: true })
  session_state?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class AccountCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  userId!: number;
  @Field(() => Int, { nullable: false })
  type!: number;
  @Field(() => Int, { nullable: false })
  provider!: number;
  @Field(() => Int, { nullable: false })
  providerAccountId!: number;
  @Field(() => Int, { nullable: false })
  refresh_token!: number;
  @Field(() => Int, { nullable: false })
  access_token!: number;
  @Field(() => Int, { nullable: false })
  expires_at!: number;
  @Field(() => Int, { nullable: false })
  token_type!: number;
  @Field(() => Int, { nullable: false })
  scope!: number;
  @Field(() => Int, { nullable: false })
  id_token!: number;
  @Field(() => Int, { nullable: false })
  session_state!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class AccountCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provider?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  refresh_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  access_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires_at?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token_type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  scope?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  id_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  session_state?: keyof typeof SortOrder;
}

@InputType()
export class AccountCreateManyUserInputEnvelope {
  @Field(() => [AccountCreateManyUserInput], { nullable: false })
  @Type(() => AccountCreateManyUserInput)
  data!: Array<AccountCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class AccountCreateManyUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
}

@InputType()
export class AccountCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
}

@InputType()
export class AccountCreateNestedManyWithoutUserInput {
  @Field(() => [AccountCreateWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateWithoutUserInput)
  create?: Array<AccountCreateWithoutUserInput>;
  @Field(() => [AccountCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
  @Field(() => AccountCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AccountCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'provider_providerAccountId'>
  >;
}

@InputType()
export class AccountCreateOrConnectWithoutUserInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'provider_providerAccountId'
  >;
  @Field(() => AccountCreateWithoutUserInput, { nullable: false })
  @Type(() => AccountCreateWithoutUserInput)
  create!: InstanceType<typeof AccountCreateWithoutUserInput>;
}

@InputType()
export class AccountCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
}

@InputType()
export class AccountCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
  @Field(() => UserCreateNestedOneWithoutAccountsInput, { nullable: false })
  user!: InstanceType<typeof UserCreateNestedOneWithoutAccountsInput>;
}

@ArgsType()
export class AccountGroupByArgs {
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AccountWhereInput>;
  @Field(() => [AccountOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<AccountOrderByWithAggregationInput>;
  @Field(() => [AccountScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof AccountScalarFieldEnum>;
  @Field(() => AccountScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof AccountScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => AccountCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AccountCountAggregateInput>;
  @Field(() => AccountAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof AccountAvgAggregateInput>;
  @Field(() => AccountSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof AccountSumAggregateInput>;
  @Field(() => AccountMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AccountMinAggregateInput>;
  @Field(() => AccountMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AccountMaxAggregateInput>;
}

@ObjectType()
export class AccountGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
  @Field(() => AccountCountAggregate, { nullable: true })
  _count?: InstanceType<typeof AccountCountAggregate>;
  @Field(() => AccountAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof AccountAvgAggregate>;
  @Field(() => AccountSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof AccountSumAggregate>;
  @Field(() => AccountMinAggregate, { nullable: true })
  _min?: InstanceType<typeof AccountMinAggregate>;
  @Field(() => AccountMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof AccountMaxAggregate>;
}

@InputType()
export class AccountListRelationFilter {
  @Field(() => AccountWhereInput, { nullable: true })
  every?: InstanceType<typeof AccountWhereInput>;
  @Field(() => AccountWhereInput, { nullable: true })
  some?: InstanceType<typeof AccountWhereInput>;
  @Field(() => AccountWhereInput, { nullable: true })
  none?: InstanceType<typeof AccountWhereInput>;
}

@InputType()
export class AccountMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  type?: true;
  @Field(() => Boolean, { nullable: true })
  provider?: true;
  @Field(() => Boolean, { nullable: true })
  providerAccountId?: true;
  @Field(() => Boolean, { nullable: true })
  refresh_token?: true;
  @Field(() => Boolean, { nullable: true })
  access_token?: true;
  @Field(() => Boolean, { nullable: true })
  expires_at?: true;
  @Field(() => Boolean, { nullable: true })
  token_type?: true;
  @Field(() => Boolean, { nullable: true })
  scope?: true;
  @Field(() => Boolean, { nullable: true })
  id_token?: true;
  @Field(() => Boolean, { nullable: true })
  session_state?: true;
}

@ObjectType()
export class AccountMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  type?: string;
  @Field(() => String, { nullable: true })
  provider?: string;
  @Field(() => String, { nullable: true })
  providerAccountId?: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
}

@InputType()
export class AccountMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provider?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  refresh_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  access_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires_at?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token_type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  scope?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  id_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  session_state?: keyof typeof SortOrder;
}

@InputType()
export class AccountMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  type?: true;
  @Field(() => Boolean, { nullable: true })
  provider?: true;
  @Field(() => Boolean, { nullable: true })
  providerAccountId?: true;
  @Field(() => Boolean, { nullable: true })
  refresh_token?: true;
  @Field(() => Boolean, { nullable: true })
  access_token?: true;
  @Field(() => Boolean, { nullable: true })
  expires_at?: true;
  @Field(() => Boolean, { nullable: true })
  token_type?: true;
  @Field(() => Boolean, { nullable: true })
  scope?: true;
  @Field(() => Boolean, { nullable: true })
  id_token?: true;
  @Field(() => Boolean, { nullable: true })
  session_state?: true;
}

@ObjectType()
export class AccountMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  type?: string;
  @Field(() => String, { nullable: true })
  provider?: string;
  @Field(() => String, { nullable: true })
  providerAccountId?: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
}

@InputType()
export class AccountMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provider?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  refresh_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  access_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires_at?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token_type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  scope?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  id_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  session_state?: keyof typeof SortOrder;
}

@InputType()
export class AccountOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class AccountOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provider?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  refresh_token?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  access_token?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  expires_at?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  token_type?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  scope?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  id_token?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  session_state?: InstanceType<typeof SortOrderInput>;
  @Field(() => AccountCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AccountCountOrderByAggregateInput>;
  @Field(() => AccountAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof AccountAvgOrderByAggregateInput>;
  @Field(() => AccountMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AccountMaxOrderByAggregateInput>;
  @Field(() => AccountMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AccountMinOrderByAggregateInput>;
  @Field(() => AccountSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof AccountSumOrderByAggregateInput>;
}

@InputType()
export class AccountOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provider?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  refresh_token?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  access_token?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  expires_at?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  token_type?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  scope?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  id_token?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  session_state?: InstanceType<typeof SortOrderInput>;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class AccountProviderProviderAccountIdCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
}

@InputType()
export class AccountScalarWhereWithAggregatesInput {
  @Field(() => [AccountScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AccountScalarWhereWithAggregatesInput>;
  @Field(() => [AccountScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AccountScalarWhereWithAggregatesInput>;
  @Field(() => [AccountScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AccountScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  type?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  provider?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  providerAccountId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  refresh_token?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  access_token?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  expires_at?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  token_type?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  scope?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id_token?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  session_state?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class AccountScalarWhereInput {
  @Field(() => [AccountScalarWhereInput], { nullable: true })
  AND?: Array<AccountScalarWhereInput>;
  @Field(() => [AccountScalarWhereInput], { nullable: true })
  OR?: Array<AccountScalarWhereInput>;
  @Field(() => [AccountScalarWhereInput], { nullable: true })
  NOT?: Array<AccountScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  type?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  provider?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  refresh_token?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  access_token?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  expires_at?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  token_type?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  scope?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  id_token?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  session_state?: InstanceType<typeof StringFilter>;
}

@InputType()
export class AccountSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  expires_at?: true;
}

@ObjectType()
export class AccountSumAggregate {
  @Field(() => Int, { nullable: true })
  expires_at?: number;
}

@InputType()
export class AccountSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  expires_at?: keyof typeof SortOrder;
}

@InputType()
export class AccountUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [AccountCreateWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateWithoutUserInput)
  create?: Array<AccountCreateWithoutUserInput>;
  @Field(() => [AccountCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
  @Field(() => AccountCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AccountCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'provider_providerAccountId'>
  >;
}

@InputType()
export class AccountUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
}

@InputType()
export class AccountUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
}

@InputType()
export class AccountUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [AccountCreateWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateWithoutUserInput)
  create?: Array<AccountCreateWithoutUserInput>;
  @Field(() => [AccountCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
  @Field(() => [AccountUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AccountUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<AccountUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => AccountCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AccountCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'provider_providerAccountId'>
  >;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'provider_providerAccountId'>
  >;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'provider_providerAccountId'>
  >;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'provider_providerAccountId'>
  >;
  @Field(() => [AccountUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AccountUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<AccountUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [AccountUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => AccountUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<AccountUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [AccountScalarWhereInput], { nullable: true })
  @Type(() => AccountScalarWhereInput)
  deleteMany?: Array<AccountScalarWhereInput>;
}

@InputType()
export class AccountUncheckedUpdateManyWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  type?: string;
  @Field(() => String, { nullable: true })
  provider?: string;
  @Field(() => String, { nullable: true })
  providerAccountId?: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
}

@InputType()
export class AccountUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  type?: string;
  @Field(() => String, { nullable: true })
  provider?: string;
  @Field(() => String, { nullable: true })
  providerAccountId?: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
}

@InputType()
export class AccountUncheckedUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  type?: string;
  @Field(() => String, { nullable: true })
  provider?: string;
  @Field(() => String, { nullable: true })
  providerAccountId?: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
}

@InputType()
export class AccountUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  type?: string;
  @Field(() => String, { nullable: true })
  provider?: string;
  @Field(() => String, { nullable: true })
  providerAccountId?: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
}

@InputType()
export class AccountUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  type?: string;
  @Field(() => String, { nullable: true })
  provider?: string;
  @Field(() => String, { nullable: true })
  providerAccountId?: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
}

@InputType()
export class AccountUpdateManyWithWhereWithoutUserInput {
  @Field(() => AccountScalarWhereInput, { nullable: false })
  @Type(() => AccountScalarWhereInput)
  where!: InstanceType<typeof AccountScalarWhereInput>;
  @Field(() => AccountUpdateManyMutationInput, { nullable: false })
  @Type(() => AccountUpdateManyMutationInput)
  data!: InstanceType<typeof AccountUpdateManyMutationInput>;
}

@InputType()
export class AccountUpdateManyWithoutUserNestedInput {
  @Field(() => [AccountCreateWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateWithoutUserInput)
  create?: Array<AccountCreateWithoutUserInput>;
  @Field(() => [AccountCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
  @Field(() => [AccountUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AccountUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<AccountUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => AccountCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AccountCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'provider_providerAccountId'>
  >;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'provider_providerAccountId'>
  >;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'provider_providerAccountId'>
  >;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'provider_providerAccountId'>
  >;
  @Field(() => [AccountUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AccountUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<AccountUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [AccountUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => AccountUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<AccountUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [AccountScalarWhereInput], { nullable: true })
  @Type(() => AccountScalarWhereInput)
  deleteMany?: Array<AccountScalarWhereInput>;
}

@InputType()
export class AccountUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'provider_providerAccountId'
  >;
  @Field(() => AccountUpdateWithoutUserInput, { nullable: false })
  @Type(() => AccountUpdateWithoutUserInput)
  data!: InstanceType<typeof AccountUpdateWithoutUserInput>;
}

@InputType()
export class AccountUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  type?: string;
  @Field(() => String, { nullable: true })
  provider?: string;
  @Field(() => String, { nullable: true })
  providerAccountId?: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
}

@InputType()
export class AccountUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  type?: string;
  @Field(() => String, { nullable: true })
  provider?: string;
  @Field(() => String, { nullable: true })
  providerAccountId?: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
  @Field(() => UserUpdateOneRequiredWithoutAccountsNestedInput, {
    nullable: true,
  })
  user?: InstanceType<typeof UserUpdateOneRequiredWithoutAccountsNestedInput>;
}

@InputType()
export class AccountUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'provider_providerAccountId'
  >;
  @Field(() => AccountUpdateWithoutUserInput, { nullable: false })
  @Type(() => AccountUpdateWithoutUserInput)
  update!: InstanceType<typeof AccountUpdateWithoutUserInput>;
  @Field(() => AccountCreateWithoutUserInput, { nullable: false })
  @Type(() => AccountCreateWithoutUserInput)
  create!: InstanceType<typeof AccountCreateWithoutUserInput>;
}

@InputType()
export class AccountWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => AccountProviderProviderAccountIdCompoundUniqueInput, {
    nullable: true,
  })
  provider_providerAccountId?: InstanceType<
    typeof AccountProviderProviderAccountIdCompoundUniqueInput
  >;
  @Field(() => [AccountWhereInput], { nullable: true })
  AND?: Array<AccountWhereInput>;
  @Field(() => [AccountWhereInput], { nullable: true })
  OR?: Array<AccountWhereInput>;
  @Field(() => [AccountWhereInput], { nullable: true })
  NOT?: Array<AccountWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  type?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  provider?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  refresh_token?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  access_token?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  expires_at?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  token_type?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  scope?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  id_token?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  session_state?: InstanceType<typeof StringFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class AccountWhereInput {
  @Field(() => [AccountWhereInput], { nullable: true })
  AND?: Array<AccountWhereInput>;
  @Field(() => [AccountWhereInput], { nullable: true })
  OR?: Array<AccountWhereInput>;
  @Field(() => [AccountWhereInput], { nullable: true })
  NOT?: Array<AccountWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  type?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  provider?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  refresh_token?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  access_token?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  expires_at?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  token_type?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  scope?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  id_token?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  session_state?: InstanceType<typeof StringFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class Account {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token!: string | null;
  @Field(() => String, { nullable: true })
  access_token!: string | null;
  @Field(() => Int, { nullable: true })
  expires_at!: number | null;
  @Field(() => String, { nullable: true })
  token_type!: string | null;
  @Field(() => String, { nullable: true })
  scope!: string | null;
  @Field(() => String, { nullable: true })
  id_token!: string | null;
  @Field(() => String, { nullable: true })
  session_state!: string | null;
  @Field(() => User, { nullable: false })
  user?: InstanceType<typeof User>;
}

@ObjectType()
export class AggregateAccount {
  @Field(() => AccountCountAggregate, { nullable: true })
  _count?: InstanceType<typeof AccountCountAggregate>;
  @Field(() => AccountAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof AccountAvgAggregate>;
  @Field(() => AccountSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof AccountSumAggregate>;
  @Field(() => AccountMinAggregate, { nullable: true })
  _min?: InstanceType<typeof AccountMinAggregate>;
  @Field(() => AccountMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof AccountMaxAggregate>;
}

@ArgsType()
export class CreateManyAccountArgs {
  @Field(() => [AccountCreateManyInput], { nullable: false })
  @Type(() => AccountCreateManyInput)
  @ValidateNested()
  data!: Array<AccountCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneAccountArgs {
  @Field(() => AccountCreateInput, { nullable: false })
  @Type(() => AccountCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof AccountCreateInput>;
}

@ArgsType()
export class DeleteManyAccountArgs {
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AccountWhereInput>;
}

@ArgsType()
export class DeleteOneAccountArgs {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'provider_providerAccountId'
  >;
}

@ArgsType()
export class FindFirstAccountOrThrowArgs {
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AccountWhereInput>;
  @Field(() => [AccountOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AccountOrderByWithRelationInput>;
  @Field(() => AccountWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'provider_providerAccountId'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AccountScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}

@ArgsType()
export class FindFirstAccountArgs {
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AccountWhereInput>;
  @Field(() => [AccountOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AccountOrderByWithRelationInput>;
  @Field(() => AccountWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'provider_providerAccountId'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AccountScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}

@ArgsType()
export class FindManyAccountArgs {
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AccountWhereInput>;
  @Field(() => [AccountOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AccountOrderByWithRelationInput>;
  @Field(() => AccountWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'provider_providerAccountId'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AccountScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueAccountOrThrowArgs {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'provider_providerAccountId'
  >;
}

@ArgsType()
export class FindUniqueAccountArgs {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'provider_providerAccountId'
  >;
}

@ArgsType()
export class UpdateManyAccountArgs {
  @Field(() => AccountUpdateManyMutationInput, { nullable: false })
  @Type(() => AccountUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof AccountUpdateManyMutationInput>;
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AccountWhereInput>;
}

@ArgsType()
export class UpdateOneAccountArgs {
  @Field(() => AccountUpdateInput, { nullable: false })
  @Type(() => AccountUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof AccountUpdateInput>;
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'provider_providerAccountId'
  >;
}

@ArgsType()
export class UpsertOneAccountArgs {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'provider_providerAccountId'
  >;
  @Field(() => AccountCreateInput, { nullable: false })
  @Type(() => AccountCreateInput)
  create!: InstanceType<typeof AccountCreateInput>;
  @Field(() => AccountUpdateInput, { nullable: false })
  @Type(() => AccountUpdateInput)
  update!: InstanceType<typeof AccountUpdateInput>;
}

@ObjectType()
export class AggregateAuditLog {
  @Field(() => AuditLogCountAggregate, { nullable: true })
  _count?: InstanceType<typeof AuditLogCountAggregate>;
  @Field(() => AuditLogAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof AuditLogAvgAggregate>;
  @Field(() => AuditLogSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof AuditLogSumAggregate>;
  @Field(() => AuditLogMinAggregate, { nullable: true })
  _min?: InstanceType<typeof AuditLogMinAggregate>;
  @Field(() => AuditLogMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof AuditLogMaxAggregate>;
}

@ArgsType()
export class AuditLogAggregateArgs {
  @Field(() => AuditLogWhereInput, { nullable: true })
  @Type(() => AuditLogWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuditLogWhereInput>;
  @Field(() => [AuditLogOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AuditLogOrderByWithRelationInput>;
  @Field(() => AuditLogWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => AuditLogCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AuditLogCountAggregateInput>;
  @Field(() => AuditLogAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof AuditLogAvgAggregateInput>;
  @Field(() => AuditLogSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof AuditLogSumAggregateInput>;
  @Field(() => AuditLogMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AuditLogMinAggregateInput>;
  @Field(() => AuditLogMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AuditLogMaxAggregateInput>;
}

@InputType()
export class AuditLogAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
}

@ObjectType()
export class AuditLogAvgAggregate {
  @Field(() => Float, { nullable: true })
  bookId?: number;
}

@InputType()
export class AuditLogAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
}

@InputType()
export class AuditLogCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  action?: true;
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
  @Field(() => Boolean, { nullable: true })
  actionContent?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class AuditLogCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  userId!: number;
  @Field(() => Int, { nullable: false })
  action!: number;
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => Int, { nullable: false })
  actionContent!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class AuditLogCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  action?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  actionContent?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class AuditLogCreateManyBookInputEnvelope {
  @Field(() => [AuditLogCreateManyBookInput], { nullable: false })
  @Type(() => AuditLogCreateManyBookInput)
  data!: Array<AuditLogCreateManyBookInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class AuditLogCreateManyBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => ACTION, { nullable: false })
  action!: keyof typeof ACTION;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogCreateManyUserInputEnvelope {
  @Field(() => [AuditLogCreateManyUserInput], { nullable: false })
  @Type(() => AuditLogCreateManyUserInput)
  data!: Array<AuditLogCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class AuditLogCreateManyUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => ACTION, { nullable: false })
  action!: keyof typeof ACTION;
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => ACTION, { nullable: false })
  action!: keyof typeof ACTION;
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogCreateNestedManyWithoutBookInput {
  @Field(() => [AuditLogCreateWithoutBookInput], { nullable: true })
  @Type(() => AuditLogCreateWithoutBookInput)
  create?: Array<AuditLogCreateWithoutBookInput>;
  @Field(() => [AuditLogCreateOrConnectWithoutBookInput], { nullable: true })
  @Type(() => AuditLogCreateOrConnectWithoutBookInput)
  connectOrCreate?: Array<AuditLogCreateOrConnectWithoutBookInput>;
  @Field(() => AuditLogCreateManyBookInputEnvelope, { nullable: true })
  @Type(() => AuditLogCreateManyBookInputEnvelope)
  createMany?: InstanceType<typeof AuditLogCreateManyBookInputEnvelope>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
}

@InputType()
export class AuditLogCreateNestedManyWithoutUserInput {
  @Field(() => [AuditLogCreateWithoutUserInput], { nullable: true })
  @Type(() => AuditLogCreateWithoutUserInput)
  create?: Array<AuditLogCreateWithoutUserInput>;
  @Field(() => [AuditLogCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AuditLogCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AuditLogCreateOrConnectWithoutUserInput>;
  @Field(() => AuditLogCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AuditLogCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AuditLogCreateManyUserInputEnvelope>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
}

@InputType()
export class AuditLogCreateOrConnectWithoutBookInput {
  @Field(() => AuditLogWhereUniqueInput, { nullable: false })
  @Type(() => AuditLogWhereUniqueInput)
  where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
  @Field(() => AuditLogCreateWithoutBookInput, { nullable: false })
  @Type(() => AuditLogCreateWithoutBookInput)
  create!: InstanceType<typeof AuditLogCreateWithoutBookInput>;
}

@InputType()
export class AuditLogCreateOrConnectWithoutUserInput {
  @Field(() => AuditLogWhereUniqueInput, { nullable: false })
  @Type(() => AuditLogWhereUniqueInput)
  where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
  @Field(() => AuditLogCreateWithoutUserInput, { nullable: false })
  @Type(() => AuditLogCreateWithoutUserInput)
  create!: InstanceType<typeof AuditLogCreateWithoutUserInput>;
}

@InputType()
export class AuditLogCreateWithoutBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => ACTION, { nullable: false })
  action!: keyof typeof ACTION;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => UserCreateNestedOneWithoutAuditLogsInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutAuditLogsInput>;
}

@InputType()
export class AuditLogCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => ACTION, { nullable: false })
  action!: keyof typeof ACTION;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => BookCreateNestedOneWithoutLogsInput, { nullable: true })
  book?: InstanceType<typeof BookCreateNestedOneWithoutLogsInput>;
}

@InputType()
export class AuditLogCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => ACTION, { nullable: false })
  action!: keyof typeof ACTION;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => UserCreateNestedOneWithoutAuditLogsInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutAuditLogsInput>;
  @Field(() => BookCreateNestedOneWithoutLogsInput, { nullable: true })
  book?: InstanceType<typeof BookCreateNestedOneWithoutLogsInput>;
}

@ArgsType()
export class AuditLogGroupByArgs {
  @Field(() => AuditLogWhereInput, { nullable: true })
  @Type(() => AuditLogWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuditLogWhereInput>;
  @Field(() => [AuditLogOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<AuditLogOrderByWithAggregationInput>;
  @Field(() => [AuditLogScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof AuditLogScalarFieldEnum>;
  @Field(() => AuditLogScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof AuditLogScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => AuditLogCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AuditLogCountAggregateInput>;
  @Field(() => AuditLogAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof AuditLogAvgAggregateInput>;
  @Field(() => AuditLogSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof AuditLogSumAggregateInput>;
  @Field(() => AuditLogMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AuditLogMinAggregateInput>;
  @Field(() => AuditLogMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AuditLogMaxAggregateInput>;
}

@ObjectType()
export class AuditLogGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => ACTION, { nullable: false })
  action!: keyof typeof ACTION;
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => AuditLogCountAggregate, { nullable: true })
  _count?: InstanceType<typeof AuditLogCountAggregate>;
  @Field(() => AuditLogAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof AuditLogAvgAggregate>;
  @Field(() => AuditLogSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof AuditLogSumAggregate>;
  @Field(() => AuditLogMinAggregate, { nullable: true })
  _min?: InstanceType<typeof AuditLogMinAggregate>;
  @Field(() => AuditLogMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof AuditLogMaxAggregate>;
}

@InputType()
export class AuditLogListRelationFilter {
  @Field(() => AuditLogWhereInput, { nullable: true })
  every?: InstanceType<typeof AuditLogWhereInput>;
  @Field(() => AuditLogWhereInput, { nullable: true })
  some?: InstanceType<typeof AuditLogWhereInput>;
  @Field(() => AuditLogWhereInput, { nullable: true })
  none?: InstanceType<typeof AuditLogWhereInput>;
}

@InputType()
export class AuditLogMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  action?: true;
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
  @Field(() => Boolean, { nullable: true })
  actionContent?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class AuditLogMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => ACTION, { nullable: true })
  action?: keyof typeof ACTION;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  action?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  actionContent?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class AuditLogMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  action?: true;
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
  @Field(() => Boolean, { nullable: true })
  actionContent?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class AuditLogMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => ACTION, { nullable: true })
  action?: keyof typeof ACTION;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  action?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  actionContent?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class AuditLogOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class AuditLogOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  action?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  actionContent?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => AuditLogCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AuditLogCountOrderByAggregateInput>;
  @Field(() => AuditLogAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof AuditLogAvgOrderByAggregateInput>;
  @Field(() => AuditLogMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AuditLogMaxOrderByAggregateInput>;
  @Field(() => AuditLogMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AuditLogMinOrderByAggregateInput>;
  @Field(() => AuditLogSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof AuditLogSumOrderByAggregateInput>;
}

@InputType()
export class AuditLogOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  action?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  actionContent?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UserOrderByWithRelationInput>;
  @Field(() => BookOrderByWithRelationInput, { nullable: true })
  book?: InstanceType<typeof BookOrderByWithRelationInput>;
}

@InputType()
export class AuditLogScalarWhereWithAggregatesInput {
  @Field(() => [AuditLogScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AuditLogScalarWhereWithAggregatesInput>;
  @Field(() => [AuditLogScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AuditLogScalarWhereWithAggregatesInput>;
  @Field(() => [AuditLogScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AuditLogScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => EnumACTIONWithAggregatesFilter, { nullable: true })
  action?: InstanceType<typeof EnumACTIONWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  bookId?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  actionContent?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class AuditLogScalarWhereInput {
  @Field(() => [AuditLogScalarWhereInput], { nullable: true })
  AND?: Array<AuditLogScalarWhereInput>;
  @Field(() => [AuditLogScalarWhereInput], { nullable: true })
  OR?: Array<AuditLogScalarWhereInput>;
  @Field(() => [AuditLogScalarWhereInput], { nullable: true })
  NOT?: Array<AuditLogScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => EnumACTIONFilter, { nullable: true })
  action?: InstanceType<typeof EnumACTIONFilter>;
  @Field(() => IntFilter, { nullable: true })
  bookId?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  actionContent?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class AuditLogSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
}

@ObjectType()
export class AuditLogSumAggregate {
  @Field(() => Int, { nullable: true })
  bookId?: number;
}

@InputType()
export class AuditLogSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
}

@InputType()
export class AuditLogUncheckedCreateNestedManyWithoutBookInput {
  @Field(() => [AuditLogCreateWithoutBookInput], { nullable: true })
  @Type(() => AuditLogCreateWithoutBookInput)
  create?: Array<AuditLogCreateWithoutBookInput>;
  @Field(() => [AuditLogCreateOrConnectWithoutBookInput], { nullable: true })
  @Type(() => AuditLogCreateOrConnectWithoutBookInput)
  connectOrCreate?: Array<AuditLogCreateOrConnectWithoutBookInput>;
  @Field(() => AuditLogCreateManyBookInputEnvelope, { nullable: true })
  @Type(() => AuditLogCreateManyBookInputEnvelope)
  createMany?: InstanceType<typeof AuditLogCreateManyBookInputEnvelope>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
}

@InputType()
export class AuditLogUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [AuditLogCreateWithoutUserInput], { nullable: true })
  @Type(() => AuditLogCreateWithoutUserInput)
  create?: Array<AuditLogCreateWithoutUserInput>;
  @Field(() => [AuditLogCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AuditLogCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AuditLogCreateOrConnectWithoutUserInput>;
  @Field(() => AuditLogCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AuditLogCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AuditLogCreateManyUserInputEnvelope>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
}

@InputType()
export class AuditLogUncheckedCreateWithoutBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => ACTION, { nullable: false })
  action!: keyof typeof ACTION;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => ACTION, { nullable: false })
  action!: keyof typeof ACTION;
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => ACTION, { nullable: false })
  action!: keyof typeof ACTION;
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogUncheckedUpdateManyWithoutBookNestedInput {
  @Field(() => [AuditLogCreateWithoutBookInput], { nullable: true })
  @Type(() => AuditLogCreateWithoutBookInput)
  create?: Array<AuditLogCreateWithoutBookInput>;
  @Field(() => [AuditLogCreateOrConnectWithoutBookInput], { nullable: true })
  @Type(() => AuditLogCreateOrConnectWithoutBookInput)
  connectOrCreate?: Array<AuditLogCreateOrConnectWithoutBookInput>;
  @Field(() => [AuditLogUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  @Type(() => AuditLogUpsertWithWhereUniqueWithoutBookInput)
  upsert?: Array<AuditLogUpsertWithWhereUniqueWithoutBookInput>;
  @Field(() => AuditLogCreateManyBookInputEnvelope, { nullable: true })
  @Type(() => AuditLogCreateManyBookInputEnvelope)
  createMany?: InstanceType<typeof AuditLogCreateManyBookInputEnvelope>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  set?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  @Type(() => AuditLogUpdateWithWhereUniqueWithoutBookInput)
  update?: Array<AuditLogUpdateWithWhereUniqueWithoutBookInput>;
  @Field(() => [AuditLogUpdateManyWithWhereWithoutBookInput], {
    nullable: true,
  })
  @Type(() => AuditLogUpdateManyWithWhereWithoutBookInput)
  updateMany?: Array<AuditLogUpdateManyWithWhereWithoutBookInput>;
  @Field(() => [AuditLogScalarWhereInput], { nullable: true })
  @Type(() => AuditLogScalarWhereInput)
  deleteMany?: Array<AuditLogScalarWhereInput>;
}

@InputType()
export class AuditLogUncheckedUpdateManyWithoutBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => ACTION, { nullable: true })
  action?: keyof typeof ACTION;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [AuditLogCreateWithoutUserInput], { nullable: true })
  @Type(() => AuditLogCreateWithoutUserInput)
  create?: Array<AuditLogCreateWithoutUserInput>;
  @Field(() => [AuditLogCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AuditLogCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AuditLogCreateOrConnectWithoutUserInput>;
  @Field(() => [AuditLogUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuditLogUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<AuditLogUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => AuditLogCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AuditLogCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AuditLogCreateManyUserInputEnvelope>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  set?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuditLogUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<AuditLogUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [AuditLogUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuditLogUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<AuditLogUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [AuditLogScalarWhereInput], { nullable: true })
  @Type(() => AuditLogScalarWhereInput)
  deleteMany?: Array<AuditLogScalarWhereInput>;
}

@InputType()
export class AuditLogUncheckedUpdateManyWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => ACTION, { nullable: true })
  action?: keyof typeof ACTION;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => ACTION, { nullable: true })
  action?: keyof typeof ACTION;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogUncheckedUpdateWithoutBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => ACTION, { nullable: true })
  action?: keyof typeof ACTION;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogUncheckedUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => ACTION, { nullable: true })
  action?: keyof typeof ACTION;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => ACTION, { nullable: true })
  action?: keyof typeof ACTION;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => ACTION, { nullable: true })
  action?: keyof typeof ACTION;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AuditLogUpdateManyWithWhereWithoutBookInput {
  @Field(() => AuditLogScalarWhereInput, { nullable: false })
  @Type(() => AuditLogScalarWhereInput)
  where!: InstanceType<typeof AuditLogScalarWhereInput>;
  @Field(() => AuditLogUpdateManyMutationInput, { nullable: false })
  @Type(() => AuditLogUpdateManyMutationInput)
  data!: InstanceType<typeof AuditLogUpdateManyMutationInput>;
}

@InputType()
export class AuditLogUpdateManyWithWhereWithoutUserInput {
  @Field(() => AuditLogScalarWhereInput, { nullable: false })
  @Type(() => AuditLogScalarWhereInput)
  where!: InstanceType<typeof AuditLogScalarWhereInput>;
  @Field(() => AuditLogUpdateManyMutationInput, { nullable: false })
  @Type(() => AuditLogUpdateManyMutationInput)
  data!: InstanceType<typeof AuditLogUpdateManyMutationInput>;
}

@InputType()
export class AuditLogUpdateManyWithoutBookNestedInput {
  @Field(() => [AuditLogCreateWithoutBookInput], { nullable: true })
  @Type(() => AuditLogCreateWithoutBookInput)
  create?: Array<AuditLogCreateWithoutBookInput>;
  @Field(() => [AuditLogCreateOrConnectWithoutBookInput], { nullable: true })
  @Type(() => AuditLogCreateOrConnectWithoutBookInput)
  connectOrCreate?: Array<AuditLogCreateOrConnectWithoutBookInput>;
  @Field(() => [AuditLogUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  @Type(() => AuditLogUpsertWithWhereUniqueWithoutBookInput)
  upsert?: Array<AuditLogUpsertWithWhereUniqueWithoutBookInput>;
  @Field(() => AuditLogCreateManyBookInputEnvelope, { nullable: true })
  @Type(() => AuditLogCreateManyBookInputEnvelope)
  createMany?: InstanceType<typeof AuditLogCreateManyBookInputEnvelope>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  set?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  @Type(() => AuditLogUpdateWithWhereUniqueWithoutBookInput)
  update?: Array<AuditLogUpdateWithWhereUniqueWithoutBookInput>;
  @Field(() => [AuditLogUpdateManyWithWhereWithoutBookInput], {
    nullable: true,
  })
  @Type(() => AuditLogUpdateManyWithWhereWithoutBookInput)
  updateMany?: Array<AuditLogUpdateManyWithWhereWithoutBookInput>;
  @Field(() => [AuditLogScalarWhereInput], { nullable: true })
  @Type(() => AuditLogScalarWhereInput)
  deleteMany?: Array<AuditLogScalarWhereInput>;
}

@InputType()
export class AuditLogUpdateManyWithoutUserNestedInput {
  @Field(() => [AuditLogCreateWithoutUserInput], { nullable: true })
  @Type(() => AuditLogCreateWithoutUserInput)
  create?: Array<AuditLogCreateWithoutUserInput>;
  @Field(() => [AuditLogCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AuditLogCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AuditLogCreateOrConnectWithoutUserInput>;
  @Field(() => [AuditLogUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuditLogUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<AuditLogUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => AuditLogCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AuditLogCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AuditLogCreateManyUserInputEnvelope>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  set?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogWhereUniqueInput], { nullable: true })
  @Type(() => AuditLogWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
  @Field(() => [AuditLogUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuditLogUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<AuditLogUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [AuditLogUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuditLogUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<AuditLogUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [AuditLogScalarWhereInput], { nullable: true })
  @Type(() => AuditLogScalarWhereInput)
  deleteMany?: Array<AuditLogScalarWhereInput>;
}

@InputType()
export class AuditLogUpdateWithWhereUniqueWithoutBookInput {
  @Field(() => AuditLogWhereUniqueInput, { nullable: false })
  @Type(() => AuditLogWhereUniqueInput)
  where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
  @Field(() => AuditLogUpdateWithoutBookInput, { nullable: false })
  @Type(() => AuditLogUpdateWithoutBookInput)
  data!: InstanceType<typeof AuditLogUpdateWithoutBookInput>;
}

@InputType()
export class AuditLogUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => AuditLogWhereUniqueInput, { nullable: false })
  @Type(() => AuditLogWhereUniqueInput)
  where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
  @Field(() => AuditLogUpdateWithoutUserInput, { nullable: false })
  @Type(() => AuditLogUpdateWithoutUserInput)
  data!: InstanceType<typeof AuditLogUpdateWithoutUserInput>;
}

@InputType()
export class AuditLogUpdateWithoutBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => ACTION, { nullable: true })
  action?: keyof typeof ACTION;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => UserUpdateOneWithoutAuditLogsNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutAuditLogsNestedInput>;
}

@InputType()
export class AuditLogUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => ACTION, { nullable: true })
  action?: keyof typeof ACTION;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => BookUpdateOneWithoutLogsNestedInput, { nullable: true })
  book?: InstanceType<typeof BookUpdateOneWithoutLogsNestedInput>;
}

@InputType()
export class AuditLogUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => ACTION, { nullable: true })
  action?: keyof typeof ACTION;
  @Field(() => String, { nullable: true })
  actionContent?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => UserUpdateOneWithoutAuditLogsNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutAuditLogsNestedInput>;
  @Field(() => BookUpdateOneWithoutLogsNestedInput, { nullable: true })
  book?: InstanceType<typeof BookUpdateOneWithoutLogsNestedInput>;
}

@InputType()
export class AuditLogUpsertWithWhereUniqueWithoutBookInput {
  @Field(() => AuditLogWhereUniqueInput, { nullable: false })
  @Type(() => AuditLogWhereUniqueInput)
  where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
  @Field(() => AuditLogUpdateWithoutBookInput, { nullable: false })
  @Type(() => AuditLogUpdateWithoutBookInput)
  update!: InstanceType<typeof AuditLogUpdateWithoutBookInput>;
  @Field(() => AuditLogCreateWithoutBookInput, { nullable: false })
  @Type(() => AuditLogCreateWithoutBookInput)
  create!: InstanceType<typeof AuditLogCreateWithoutBookInput>;
}

@InputType()
export class AuditLogUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => AuditLogWhereUniqueInput, { nullable: false })
  @Type(() => AuditLogWhereUniqueInput)
  where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
  @Field(() => AuditLogUpdateWithoutUserInput, { nullable: false })
  @Type(() => AuditLogUpdateWithoutUserInput)
  update!: InstanceType<typeof AuditLogUpdateWithoutUserInput>;
  @Field(() => AuditLogCreateWithoutUserInput, { nullable: false })
  @Type(() => AuditLogCreateWithoutUserInput)
  create!: InstanceType<typeof AuditLogCreateWithoutUserInput>;
}

@InputType()
export class AuditLogWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => [AuditLogWhereInput], { nullable: true })
  AND?: Array<AuditLogWhereInput>;
  @Field(() => [AuditLogWhereInput], { nullable: true })
  OR?: Array<AuditLogWhereInput>;
  @Field(() => [AuditLogWhereInput], { nullable: true })
  NOT?: Array<AuditLogWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => EnumACTIONFilter, { nullable: true })
  action?: InstanceType<typeof EnumACTIONFilter>;
  @Field(() => IntFilter, { nullable: true })
  bookId?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  actionContent?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
  @Field(() => BookRelationFilter, { nullable: true })
  book?: InstanceType<typeof BookRelationFilter>;
}

@InputType()
export class AuditLogWhereInput {
  @Field(() => [AuditLogWhereInput], { nullable: true })
  AND?: Array<AuditLogWhereInput>;
  @Field(() => [AuditLogWhereInput], { nullable: true })
  OR?: Array<AuditLogWhereInput>;
  @Field(() => [AuditLogWhereInput], { nullable: true })
  NOT?: Array<AuditLogWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => EnumACTIONFilter, { nullable: true })
  action?: InstanceType<typeof EnumACTIONFilter>;
  @Field(() => IntFilter, { nullable: true })
  bookId?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  actionContent?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
  @Field(() => BookRelationFilter, { nullable: true })
  book?: InstanceType<typeof BookRelationFilter>;
}

@ObjectType()
export class AuditLog {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => ACTION, { nullable: false })
  action!: keyof typeof ACTION;
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => String, { nullable: true })
  actionContent!: string | null;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => User, { nullable: true })
  user?: InstanceType<typeof User> | null;
  @Field(() => Book, { nullable: true })
  book?: InstanceType<typeof Book> | null;
}

@ArgsType()
export class CreateManyAuditLogArgs {
  @Field(() => [AuditLogCreateManyInput], { nullable: false })
  @Type(() => AuditLogCreateManyInput)
  @ValidateNested()
  data!: Array<AuditLogCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneAuditLogArgs {
  @Field(() => AuditLogCreateInput, { nullable: false })
  @Type(() => AuditLogCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof AuditLogCreateInput>;
}

@ArgsType()
export class DeleteManyAuditLogArgs {
  @Field(() => AuditLogWhereInput, { nullable: true })
  @Type(() => AuditLogWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuditLogWhereInput>;
}

@ArgsType()
export class DeleteOneAuditLogArgs {
  @Field(() => AuditLogWhereUniqueInput, { nullable: false })
  @Type(() => AuditLogWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstAuditLogOrThrowArgs {
  @Field(() => AuditLogWhereInput, { nullable: true })
  @Type(() => AuditLogWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuditLogWhereInput>;
  @Field(() => [AuditLogOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AuditLogOrderByWithRelationInput>;
  @Field(() => AuditLogWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AuditLogScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AuditLogScalarFieldEnum>;
}

@ArgsType()
export class FindFirstAuditLogArgs {
  @Field(() => AuditLogWhereInput, { nullable: true })
  @Type(() => AuditLogWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuditLogWhereInput>;
  @Field(() => [AuditLogOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AuditLogOrderByWithRelationInput>;
  @Field(() => AuditLogWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AuditLogScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AuditLogScalarFieldEnum>;
}

@ArgsType()
export class FindManyAuditLogArgs {
  @Field(() => AuditLogWhereInput, { nullable: true })
  @Type(() => AuditLogWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuditLogWhereInput>;
  @Field(() => [AuditLogOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AuditLogOrderByWithRelationInput>;
  @Field(() => AuditLogWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AuditLogScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AuditLogScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueAuditLogOrThrowArgs {
  @Field(() => AuditLogWhereUniqueInput, { nullable: false })
  @Type(() => AuditLogWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueAuditLogArgs {
  @Field(() => AuditLogWhereUniqueInput, { nullable: false })
  @Type(() => AuditLogWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyAuditLogArgs {
  @Field(() => AuditLogUpdateManyMutationInput, { nullable: false })
  @Type(() => AuditLogUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof AuditLogUpdateManyMutationInput>;
  @Field(() => AuditLogWhereInput, { nullable: true })
  @Type(() => AuditLogWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuditLogWhereInput>;
}

@ArgsType()
export class UpdateOneAuditLogArgs {
  @Field(() => AuditLogUpdateInput, { nullable: false })
  @Type(() => AuditLogUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof AuditLogUpdateInput>;
  @Field(() => AuditLogWhereUniqueInput, { nullable: false })
  @Type(() => AuditLogWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneAuditLogArgs {
  @Field(() => AuditLogWhereUniqueInput, { nullable: false })
  @Type(() => AuditLogWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
  @Field(() => AuditLogCreateInput, { nullable: false })
  @Type(() => AuditLogCreateInput)
  create!: InstanceType<typeof AuditLogCreateInput>;
  @Field(() => AuditLogUpdateInput, { nullable: false })
  @Type(() => AuditLogUpdateInput)
  update!: InstanceType<typeof AuditLogUpdateInput>;
}

@ObjectType()
export class AggregateAuthor {
  @Field(() => AuthorCountAggregate, { nullable: true })
  _count?: InstanceType<typeof AuthorCountAggregate>;
  @Field(() => AuthorMinAggregate, { nullable: true })
  _min?: InstanceType<typeof AuthorMinAggregate>;
  @Field(() => AuthorMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof AuthorMaxAggregate>;
}

@ArgsType()
export class AuthorAggregateArgs {
  @Field(() => AuthorWhereInput, { nullable: true })
  @Type(() => AuthorWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuthorWhereInput>;
  @Field(() => [AuthorOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AuthorOrderByWithRelationInput>;
  @Field(() => AuthorWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => AuthorCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AuthorCountAggregateInput>;
  @Field(() => AuthorMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AuthorMinAggregateInput>;
  @Field(() => AuthorMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AuthorMaxAggregateInput>;
}

@InputType()
export class AuthorCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  bio?: true;
  @Field(() => Boolean, { nullable: true })
  birthDate?: true;
  @Field(() => Boolean, { nullable: true })
  deathDate?: true;
  @Field(() => Boolean, { nullable: true })
  wikipedia?: true;
  @Field(() => Boolean, { nullable: true })
  photo?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class AuthorCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  name!: number;
  @Field(() => Int, { nullable: false })
  bio!: number;
  @Field(() => Int, { nullable: false })
  birthDate!: number;
  @Field(() => Int, { nullable: false })
  deathDate!: number;
  @Field(() => Int, { nullable: false })
  wikipedia!: number;
  @Field(() => Int, { nullable: false })
  photo!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class AuthorCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bio?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  birthDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  deathDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  wikipedia?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  photo?: keyof typeof SortOrder;
}

@ObjectType()
export class AuthorCount {
  @Field(() => Int, { nullable: false })
  works?: number;
  @Field(() => Int, { nullable: false })
  books?: number;
}

@InputType()
export class AuthorCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
}

@InputType()
export class AuthorCreateNestedManyWithoutBooksInput {
  @Field(() => [AuthorCreateWithoutBooksInput], { nullable: true })
  @Type(() => AuthorCreateWithoutBooksInput)
  create?: Array<AuthorCreateWithoutBooksInput>;
  @Field(() => [AuthorCreateOrConnectWithoutBooksInput], { nullable: true })
  @Type(() => AuthorCreateOrConnectWithoutBooksInput)
  connectOrCreate?: Array<AuthorCreateOrConnectWithoutBooksInput>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
}

@InputType()
export class AuthorCreateNestedManyWithoutWorksInput {
  @Field(() => [AuthorCreateWithoutWorksInput], { nullable: true })
  @Type(() => AuthorCreateWithoutWorksInput)
  create?: Array<AuthorCreateWithoutWorksInput>;
  @Field(() => [AuthorCreateOrConnectWithoutWorksInput], { nullable: true })
  @Type(() => AuthorCreateOrConnectWithoutWorksInput)
  connectOrCreate?: Array<AuthorCreateOrConnectWithoutWorksInput>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
}

@InputType()
export class AuthorCreateOrConnectWithoutBooksInput {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  @Type(() => AuthorWhereUniqueInput)
  where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
  @Field(() => AuthorCreateWithoutBooksInput, { nullable: false })
  @Type(() => AuthorCreateWithoutBooksInput)
  create!: InstanceType<typeof AuthorCreateWithoutBooksInput>;
}

@InputType()
export class AuthorCreateOrConnectWithoutWorksInput {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  @Type(() => AuthorWhereUniqueInput)
  where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
  @Field(() => AuthorCreateWithoutWorksInput, { nullable: false })
  @Type(() => AuthorCreateWithoutWorksInput)
  create!: InstanceType<typeof AuthorCreateWithoutWorksInput>;
}

@InputType()
export class AuthorCreateWithoutBooksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
  @Field(() => WorkCreateNestedManyWithoutAuthorsInput, { nullable: true })
  works?: InstanceType<typeof WorkCreateNestedManyWithoutAuthorsInput>;
}

@InputType()
export class AuthorCreateWithoutWorksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
  @Field(() => BookCreateNestedManyWithoutAuthorsInput, { nullable: true })
  books?: InstanceType<typeof BookCreateNestedManyWithoutAuthorsInput>;
}

@InputType()
export class AuthorCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
  @Field(() => WorkCreateNestedManyWithoutAuthorsInput, { nullable: true })
  works?: InstanceType<typeof WorkCreateNestedManyWithoutAuthorsInput>;
  @Field(() => BookCreateNestedManyWithoutAuthorsInput, { nullable: true })
  books?: InstanceType<typeof BookCreateNestedManyWithoutAuthorsInput>;
}

@ArgsType()
export class AuthorGroupByArgs {
  @Field(() => AuthorWhereInput, { nullable: true })
  @Type(() => AuthorWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuthorWhereInput>;
  @Field(() => [AuthorOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<AuthorOrderByWithAggregationInput>;
  @Field(() => [AuthorScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof AuthorScalarFieldEnum>;
  @Field(() => AuthorScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof AuthorScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => AuthorCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AuthorCountAggregateInput>;
  @Field(() => AuthorMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AuthorMinAggregateInput>;
  @Field(() => AuthorMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AuthorMaxAggregateInput>;
}

@ObjectType()
export class AuthorGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
  @Field(() => AuthorCountAggregate, { nullable: true })
  _count?: InstanceType<typeof AuthorCountAggregate>;
  @Field(() => AuthorMinAggregate, { nullable: true })
  _min?: InstanceType<typeof AuthorMinAggregate>;
  @Field(() => AuthorMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof AuthorMaxAggregate>;
}

@InputType()
export class AuthorListRelationFilter {
  @Field(() => AuthorWhereInput, { nullable: true })
  every?: InstanceType<typeof AuthorWhereInput>;
  @Field(() => AuthorWhereInput, { nullable: true })
  some?: InstanceType<typeof AuthorWhereInput>;
  @Field(() => AuthorWhereInput, { nullable: true })
  none?: InstanceType<typeof AuthorWhereInput>;
}

@InputType()
export class AuthorMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  bio?: true;
  @Field(() => Boolean, { nullable: true })
  birthDate?: true;
  @Field(() => Boolean, { nullable: true })
  deathDate?: true;
  @Field(() => Boolean, { nullable: true })
  wikipedia?: true;
  @Field(() => Boolean, { nullable: true })
  photo?: true;
}

@ObjectType()
export class AuthorMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
}

@InputType()
export class AuthorMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bio?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  birthDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  deathDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  wikipedia?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  photo?: keyof typeof SortOrder;
}

@InputType()
export class AuthorMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  bio?: true;
  @Field(() => Boolean, { nullable: true })
  birthDate?: true;
  @Field(() => Boolean, { nullable: true })
  deathDate?: true;
  @Field(() => Boolean, { nullable: true })
  wikipedia?: true;
  @Field(() => Boolean, { nullable: true })
  photo?: true;
}

@ObjectType()
export class AuthorMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
}

@InputType()
export class AuthorMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bio?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  birthDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  deathDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  wikipedia?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  photo?: keyof typeof SortOrder;
}

@InputType()
export class AuthorOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class AuthorOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  bio?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  birthDate?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  deathDate?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  wikipedia?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  photo?: InstanceType<typeof SortOrderInput>;
  @Field(() => AuthorCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AuthorCountOrderByAggregateInput>;
  @Field(() => AuthorMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AuthorMaxOrderByAggregateInput>;
  @Field(() => AuthorMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AuthorMinOrderByAggregateInput>;
}

@InputType()
export class AuthorOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  bio?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  birthDate?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  deathDate?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  wikipedia?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  photo?: InstanceType<typeof SortOrderInput>;
  @Field(() => WorkOrderByRelationAggregateInput, { nullable: true })
  works?: InstanceType<typeof WorkOrderByRelationAggregateInput>;
  @Field(() => BookOrderByRelationAggregateInput, { nullable: true })
  books?: InstanceType<typeof BookOrderByRelationAggregateInput>;
}

@InputType()
export class AuthorScalarWhereWithAggregatesInput {
  @Field(() => [AuthorScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AuthorScalarWhereWithAggregatesInput>;
  @Field(() => [AuthorScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AuthorScalarWhereWithAggregatesInput>;
  @Field(() => [AuthorScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AuthorScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  bio?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  birthDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deathDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  wikipedia?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  photo?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class AuthorScalarWhereInput {
  @Field(() => [AuthorScalarWhereInput], { nullable: true })
  AND?: Array<AuthorScalarWhereInput>;
  @Field(() => [AuthorScalarWhereInput], { nullable: true })
  OR?: Array<AuthorScalarWhereInput>;
  @Field(() => [AuthorScalarWhereInput], { nullable: true })
  NOT?: Array<AuthorScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  bio?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  birthDate?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  deathDate?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  wikipedia?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  photo?: InstanceType<typeof StringFilter>;
}

@InputType()
export class AuthorUncheckedCreateNestedManyWithoutBooksInput {
  @Field(() => [AuthorCreateWithoutBooksInput], { nullable: true })
  @Type(() => AuthorCreateWithoutBooksInput)
  create?: Array<AuthorCreateWithoutBooksInput>;
  @Field(() => [AuthorCreateOrConnectWithoutBooksInput], { nullable: true })
  @Type(() => AuthorCreateOrConnectWithoutBooksInput)
  connectOrCreate?: Array<AuthorCreateOrConnectWithoutBooksInput>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
}

@InputType()
export class AuthorUncheckedCreateNestedManyWithoutWorksInput {
  @Field(() => [AuthorCreateWithoutWorksInput], { nullable: true })
  @Type(() => AuthorCreateWithoutWorksInput)
  create?: Array<AuthorCreateWithoutWorksInput>;
  @Field(() => [AuthorCreateOrConnectWithoutWorksInput], { nullable: true })
  @Type(() => AuthorCreateOrConnectWithoutWorksInput)
  connectOrCreate?: Array<AuthorCreateOrConnectWithoutWorksInput>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
}

@InputType()
export class AuthorUncheckedCreateWithoutBooksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
  @Field(() => WorkUncheckedCreateNestedManyWithoutAuthorsInput, {
    nullable: true,
  })
  works?: InstanceType<typeof WorkUncheckedCreateNestedManyWithoutAuthorsInput>;
}

@InputType()
export class AuthorUncheckedCreateWithoutWorksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
  @Field(() => BookUncheckedCreateNestedManyWithoutAuthorsInput, {
    nullable: true,
  })
  books?: InstanceType<typeof BookUncheckedCreateNestedManyWithoutAuthorsInput>;
}

@InputType()
export class AuthorUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
  @Field(() => WorkUncheckedCreateNestedManyWithoutAuthorsInput, {
    nullable: true,
  })
  works?: InstanceType<typeof WorkUncheckedCreateNestedManyWithoutAuthorsInput>;
  @Field(() => BookUncheckedCreateNestedManyWithoutAuthorsInput, {
    nullable: true,
  })
  books?: InstanceType<typeof BookUncheckedCreateNestedManyWithoutAuthorsInput>;
}

@InputType()
export class AuthorUncheckedUpdateManyWithoutBooksNestedInput {
  @Field(() => [AuthorCreateWithoutBooksInput], { nullable: true })
  @Type(() => AuthorCreateWithoutBooksInput)
  create?: Array<AuthorCreateWithoutBooksInput>;
  @Field(() => [AuthorCreateOrConnectWithoutBooksInput], { nullable: true })
  @Type(() => AuthorCreateOrConnectWithoutBooksInput)
  connectOrCreate?: Array<AuthorCreateOrConnectWithoutBooksInput>;
  @Field(() => [AuthorUpsertWithWhereUniqueWithoutBooksInput], {
    nullable: true,
  })
  @Type(() => AuthorUpsertWithWhereUniqueWithoutBooksInput)
  upsert?: Array<AuthorUpsertWithWhereUniqueWithoutBooksInput>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  set?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorUpdateWithWhereUniqueWithoutBooksInput], {
    nullable: true,
  })
  @Type(() => AuthorUpdateWithWhereUniqueWithoutBooksInput)
  update?: Array<AuthorUpdateWithWhereUniqueWithoutBooksInput>;
  @Field(() => [AuthorUpdateManyWithWhereWithoutBooksInput], { nullable: true })
  @Type(() => AuthorUpdateManyWithWhereWithoutBooksInput)
  updateMany?: Array<AuthorUpdateManyWithWhereWithoutBooksInput>;
  @Field(() => [AuthorScalarWhereInput], { nullable: true })
  @Type(() => AuthorScalarWhereInput)
  deleteMany?: Array<AuthorScalarWhereInput>;
}

@InputType()
export class AuthorUncheckedUpdateManyWithoutBooksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
}

@InputType()
export class AuthorUncheckedUpdateManyWithoutWorksNestedInput {
  @Field(() => [AuthorCreateWithoutWorksInput], { nullable: true })
  @Type(() => AuthorCreateWithoutWorksInput)
  create?: Array<AuthorCreateWithoutWorksInput>;
  @Field(() => [AuthorCreateOrConnectWithoutWorksInput], { nullable: true })
  @Type(() => AuthorCreateOrConnectWithoutWorksInput)
  connectOrCreate?: Array<AuthorCreateOrConnectWithoutWorksInput>;
  @Field(() => [AuthorUpsertWithWhereUniqueWithoutWorksInput], {
    nullable: true,
  })
  @Type(() => AuthorUpsertWithWhereUniqueWithoutWorksInput)
  upsert?: Array<AuthorUpsertWithWhereUniqueWithoutWorksInput>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  set?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorUpdateWithWhereUniqueWithoutWorksInput], {
    nullable: true,
  })
  @Type(() => AuthorUpdateWithWhereUniqueWithoutWorksInput)
  update?: Array<AuthorUpdateWithWhereUniqueWithoutWorksInput>;
  @Field(() => [AuthorUpdateManyWithWhereWithoutWorksInput], { nullable: true })
  @Type(() => AuthorUpdateManyWithWhereWithoutWorksInput)
  updateMany?: Array<AuthorUpdateManyWithWhereWithoutWorksInput>;
  @Field(() => [AuthorScalarWhereInput], { nullable: true })
  @Type(() => AuthorScalarWhereInput)
  deleteMany?: Array<AuthorScalarWhereInput>;
}

@InputType()
export class AuthorUncheckedUpdateManyWithoutWorksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
}

@InputType()
export class AuthorUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
}

@InputType()
export class AuthorUncheckedUpdateWithoutBooksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
  @Field(() => WorkUncheckedUpdateManyWithoutAuthorsNestedInput, {
    nullable: true,
  })
  works?: InstanceType<typeof WorkUncheckedUpdateManyWithoutAuthorsNestedInput>;
}

@InputType()
export class AuthorUncheckedUpdateWithoutWorksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
  @Field(() => BookUncheckedUpdateManyWithoutAuthorsNestedInput, {
    nullable: true,
  })
  books?: InstanceType<typeof BookUncheckedUpdateManyWithoutAuthorsNestedInput>;
}

@InputType()
export class AuthorUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
  @Field(() => WorkUncheckedUpdateManyWithoutAuthorsNestedInput, {
    nullable: true,
  })
  works?: InstanceType<typeof WorkUncheckedUpdateManyWithoutAuthorsNestedInput>;
  @Field(() => BookUncheckedUpdateManyWithoutAuthorsNestedInput, {
    nullable: true,
  })
  books?: InstanceType<typeof BookUncheckedUpdateManyWithoutAuthorsNestedInput>;
}

@InputType()
export class AuthorUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
}

@InputType()
export class AuthorUpdateManyWithWhereWithoutBooksInput {
  @Field(() => AuthorScalarWhereInput, { nullable: false })
  @Type(() => AuthorScalarWhereInput)
  where!: InstanceType<typeof AuthorScalarWhereInput>;
  @Field(() => AuthorUpdateManyMutationInput, { nullable: false })
  @Type(() => AuthorUpdateManyMutationInput)
  data!: InstanceType<typeof AuthorUpdateManyMutationInput>;
}

@InputType()
export class AuthorUpdateManyWithWhereWithoutWorksInput {
  @Field(() => AuthorScalarWhereInput, { nullable: false })
  @Type(() => AuthorScalarWhereInput)
  where!: InstanceType<typeof AuthorScalarWhereInput>;
  @Field(() => AuthorUpdateManyMutationInput, { nullable: false })
  @Type(() => AuthorUpdateManyMutationInput)
  data!: InstanceType<typeof AuthorUpdateManyMutationInput>;
}

@InputType()
export class AuthorUpdateManyWithoutBooksNestedInput {
  @Field(() => [AuthorCreateWithoutBooksInput], { nullable: true })
  @Type(() => AuthorCreateWithoutBooksInput)
  create?: Array<AuthorCreateWithoutBooksInput>;
  @Field(() => [AuthorCreateOrConnectWithoutBooksInput], { nullable: true })
  @Type(() => AuthorCreateOrConnectWithoutBooksInput)
  connectOrCreate?: Array<AuthorCreateOrConnectWithoutBooksInput>;
  @Field(() => [AuthorUpsertWithWhereUniqueWithoutBooksInput], {
    nullable: true,
  })
  @Type(() => AuthorUpsertWithWhereUniqueWithoutBooksInput)
  upsert?: Array<AuthorUpsertWithWhereUniqueWithoutBooksInput>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  set?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorUpdateWithWhereUniqueWithoutBooksInput], {
    nullable: true,
  })
  @Type(() => AuthorUpdateWithWhereUniqueWithoutBooksInput)
  update?: Array<AuthorUpdateWithWhereUniqueWithoutBooksInput>;
  @Field(() => [AuthorUpdateManyWithWhereWithoutBooksInput], { nullable: true })
  @Type(() => AuthorUpdateManyWithWhereWithoutBooksInput)
  updateMany?: Array<AuthorUpdateManyWithWhereWithoutBooksInput>;
  @Field(() => [AuthorScalarWhereInput], { nullable: true })
  @Type(() => AuthorScalarWhereInput)
  deleteMany?: Array<AuthorScalarWhereInput>;
}

@InputType()
export class AuthorUpdateManyWithoutWorksNestedInput {
  @Field(() => [AuthorCreateWithoutWorksInput], { nullable: true })
  @Type(() => AuthorCreateWithoutWorksInput)
  create?: Array<AuthorCreateWithoutWorksInput>;
  @Field(() => [AuthorCreateOrConnectWithoutWorksInput], { nullable: true })
  @Type(() => AuthorCreateOrConnectWithoutWorksInput)
  connectOrCreate?: Array<AuthorCreateOrConnectWithoutWorksInput>;
  @Field(() => [AuthorUpsertWithWhereUniqueWithoutWorksInput], {
    nullable: true,
  })
  @Type(() => AuthorUpsertWithWhereUniqueWithoutWorksInput)
  upsert?: Array<AuthorUpsertWithWhereUniqueWithoutWorksInput>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  set?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorWhereUniqueInput], { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>>;
  @Field(() => [AuthorUpdateWithWhereUniqueWithoutWorksInput], {
    nullable: true,
  })
  @Type(() => AuthorUpdateWithWhereUniqueWithoutWorksInput)
  update?: Array<AuthorUpdateWithWhereUniqueWithoutWorksInput>;
  @Field(() => [AuthorUpdateManyWithWhereWithoutWorksInput], { nullable: true })
  @Type(() => AuthorUpdateManyWithWhereWithoutWorksInput)
  updateMany?: Array<AuthorUpdateManyWithWhereWithoutWorksInput>;
  @Field(() => [AuthorScalarWhereInput], { nullable: true })
  @Type(() => AuthorScalarWhereInput)
  deleteMany?: Array<AuthorScalarWhereInput>;
}

@InputType()
export class AuthorUpdateWithWhereUniqueWithoutBooksInput {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  @Type(() => AuthorWhereUniqueInput)
  where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
  @Field(() => AuthorUpdateWithoutBooksInput, { nullable: false })
  @Type(() => AuthorUpdateWithoutBooksInput)
  data!: InstanceType<typeof AuthorUpdateWithoutBooksInput>;
}

@InputType()
export class AuthorUpdateWithWhereUniqueWithoutWorksInput {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  @Type(() => AuthorWhereUniqueInput)
  where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
  @Field(() => AuthorUpdateWithoutWorksInput, { nullable: false })
  @Type(() => AuthorUpdateWithoutWorksInput)
  data!: InstanceType<typeof AuthorUpdateWithoutWorksInput>;
}

@InputType()
export class AuthorUpdateWithoutBooksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
  @Field(() => WorkUpdateManyWithoutAuthorsNestedInput, { nullable: true })
  works?: InstanceType<typeof WorkUpdateManyWithoutAuthorsNestedInput>;
}

@InputType()
export class AuthorUpdateWithoutWorksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
  @Field(() => BookUpdateManyWithoutAuthorsNestedInput, { nullable: true })
  books?: InstanceType<typeof BookUpdateManyWithoutAuthorsNestedInput>;
}

@InputType()
export class AuthorUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  bio?: string;
  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
  @Field(() => Date, { nullable: true })
  deathDate?: Date | string;
  @Field(() => String, { nullable: true })
  wikipedia?: string;
  @Field(() => String, { nullable: true })
  photo?: string;
  @Field(() => WorkUpdateManyWithoutAuthorsNestedInput, { nullable: true })
  works?: InstanceType<typeof WorkUpdateManyWithoutAuthorsNestedInput>;
  @Field(() => BookUpdateManyWithoutAuthorsNestedInput, { nullable: true })
  books?: InstanceType<typeof BookUpdateManyWithoutAuthorsNestedInput>;
}

@InputType()
export class AuthorUpsertWithWhereUniqueWithoutBooksInput {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  @Type(() => AuthorWhereUniqueInput)
  where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
  @Field(() => AuthorUpdateWithoutBooksInput, { nullable: false })
  @Type(() => AuthorUpdateWithoutBooksInput)
  update!: InstanceType<typeof AuthorUpdateWithoutBooksInput>;
  @Field(() => AuthorCreateWithoutBooksInput, { nullable: false })
  @Type(() => AuthorCreateWithoutBooksInput)
  create!: InstanceType<typeof AuthorCreateWithoutBooksInput>;
}

@InputType()
export class AuthorUpsertWithWhereUniqueWithoutWorksInput {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  @Type(() => AuthorWhereUniqueInput)
  where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
  @Field(() => AuthorUpdateWithoutWorksInput, { nullable: false })
  @Type(() => AuthorUpdateWithoutWorksInput)
  update!: InstanceType<typeof AuthorUpdateWithoutWorksInput>;
  @Field(() => AuthorCreateWithoutWorksInput, { nullable: false })
  @Type(() => AuthorCreateWithoutWorksInput)
  create!: InstanceType<typeof AuthorCreateWithoutWorksInput>;
}

@InputType()
export class AuthorWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => [AuthorWhereInput], { nullable: true })
  AND?: Array<AuthorWhereInput>;
  @Field(() => [AuthorWhereInput], { nullable: true })
  OR?: Array<AuthorWhereInput>;
  @Field(() => [AuthorWhereInput], { nullable: true })
  NOT?: Array<AuthorWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  bio?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  birthDate?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  deathDate?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  wikipedia?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  photo?: InstanceType<typeof StringFilter>;
  @Field(() => WorkListRelationFilter, { nullable: true })
  works?: InstanceType<typeof WorkListRelationFilter>;
  @Field(() => BookListRelationFilter, { nullable: true })
  books?: InstanceType<typeof BookListRelationFilter>;
}

@InputType()
export class AuthorWhereInput {
  @Field(() => [AuthorWhereInput], { nullable: true })
  AND?: Array<AuthorWhereInput>;
  @Field(() => [AuthorWhereInput], { nullable: true })
  OR?: Array<AuthorWhereInput>;
  @Field(() => [AuthorWhereInput], { nullable: true })
  NOT?: Array<AuthorWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  bio?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  birthDate?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  deathDate?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  wikipedia?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  photo?: InstanceType<typeof StringFilter>;
  @Field(() => WorkListRelationFilter, { nullable: true })
  works?: InstanceType<typeof WorkListRelationFilter>;
  @Field(() => BookListRelationFilter, { nullable: true })
  books?: InstanceType<typeof BookListRelationFilter>;
}

@ObjectType()
export class Author {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  bio!: string | null;
  @Field(() => Date, { nullable: true })
  birthDate!: Date | null;
  @Field(() => Date, { nullable: true })
  deathDate!: Date | null;
  @Field(() => String, { nullable: true })
  wikipedia!: string | null;
  @Field(() => String, { nullable: true })
  photo!: string | null;
  @Field(() => [Work], { nullable: true })
  works?: Array<Work>;
  @Field(() => [Book], { nullable: true })
  books?: Array<Book>;
  @Field(() => AuthorCount, { nullable: false })
  _count?: InstanceType<typeof AuthorCount>;
}

@ArgsType()
export class CreateManyAuthorArgs {
  @Field(() => [AuthorCreateManyInput], { nullable: false })
  @Type(() => AuthorCreateManyInput)
  @ValidateNested()
  data!: Array<AuthorCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneAuthorArgs {
  @Field(() => AuthorCreateInput, { nullable: false })
  @Type(() => AuthorCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof AuthorCreateInput>;
}

@ArgsType()
export class DeleteManyAuthorArgs {
  @Field(() => AuthorWhereInput, { nullable: true })
  @Type(() => AuthorWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuthorWhereInput>;
}

@ArgsType()
export class DeleteOneAuthorArgs {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  @Type(() => AuthorWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstAuthorOrThrowArgs {
  @Field(() => AuthorWhereInput, { nullable: true })
  @Type(() => AuthorWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuthorWhereInput>;
  @Field(() => [AuthorOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AuthorOrderByWithRelationInput>;
  @Field(() => AuthorWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AuthorScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AuthorScalarFieldEnum>;
}

@ArgsType()
export class FindFirstAuthorArgs {
  @Field(() => AuthorWhereInput, { nullable: true })
  @Type(() => AuthorWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuthorWhereInput>;
  @Field(() => [AuthorOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AuthorOrderByWithRelationInput>;
  @Field(() => AuthorWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AuthorScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AuthorScalarFieldEnum>;
}

@ArgsType()
export class FindManyAuthorArgs {
  @Field(() => AuthorWhereInput, { nullable: true })
  @Type(() => AuthorWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuthorWhereInput>;
  @Field(() => [AuthorOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AuthorOrderByWithRelationInput>;
  @Field(() => AuthorWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AuthorScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AuthorScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueAuthorOrThrowArgs {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  @Type(() => AuthorWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueAuthorArgs {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  @Type(() => AuthorWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyAuthorArgs {
  @Field(() => AuthorUpdateManyMutationInput, { nullable: false })
  @Type(() => AuthorUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof AuthorUpdateManyMutationInput>;
  @Field(() => AuthorWhereInput, { nullable: true })
  @Type(() => AuthorWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof AuthorWhereInput>;
}

@ArgsType()
export class UpdateOneAuthorArgs {
  @Field(() => AuthorUpdateInput, { nullable: false })
  @Type(() => AuthorUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof AuthorUpdateInput>;
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  @Type(() => AuthorWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneAuthorArgs {
  @Field(() => AuthorWhereUniqueInput, { nullable: false })
  @Type(() => AuthorWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id'>;
  @Field(() => AuthorCreateInput, { nullable: false })
  @Type(() => AuthorCreateInput)
  create!: InstanceType<typeof AuthorCreateInput>;
  @Field(() => AuthorUpdateInput, { nullable: false })
  @Type(() => AuthorUpdateInput)
  update!: InstanceType<typeof AuthorUpdateInput>;
}

@ObjectType()
export class AggregateBook {
  @Field(() => BookCountAggregate, { nullable: true })
  _count?: InstanceType<typeof BookCountAggregate>;
  @Field(() => BookAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof BookAvgAggregate>;
  @Field(() => BookSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof BookSumAggregate>;
  @Field(() => BookMinAggregate, { nullable: true })
  _min?: InstanceType<typeof BookMinAggregate>;
  @Field(() => BookMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof BookMaxAggregate>;
}

@ArgsType()
export class BookAggregateArgs {
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof BookWhereInput>;
  @Field(() => [BookOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BookOrderByWithRelationInput>;
  @Field(() => BookWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => BookCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BookCountAggregateInput>;
  @Field(() => BookAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof BookAvgAggregateInput>;
  @Field(() => BookSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof BookSumAggregateInput>;
  @Field(() => BookMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BookMinAggregateInput>;
  @Field(() => BookMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BookMaxAggregateInput>;
}

@InputType()
export class BookAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  pageCount?: true;
}

@ObjectType()
export class BookAvgAggregate {
  @Field(() => Float, { nullable: true })
  id?: number;
  @Field(() => Float, { nullable: true })
  pageCount?: number;
}

@InputType()
export class BookAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  pageCount?: keyof typeof SortOrder;
}

@InputType()
export class BookCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  publishedDate?: true;
  @Field(() => Boolean, { nullable: true })
  publisher?: true;
  @Field(() => Boolean, { nullable: true })
  coverImage?: true;
  @Field(() => Boolean, { nullable: true })
  description?: true;
  @Field(() => Boolean, { nullable: true })
  language?: true;
  @Field(() => Boolean, { nullable: true })
  pageCount?: true;
  @Field(() => Boolean, { nullable: true })
  workId?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class BookCountAggregate {
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  id!: number;
  @Field(() => Int, { nullable: false })
  title!: number;
  @Field(() => Int, { nullable: false })
  publishedDate!: number;
  @Field(() => Int, { nullable: false })
  publisher!: number;
  @Field(() => Int, { nullable: false })
  coverImage!: number;
  @Field(() => Int, { nullable: false })
  description!: number;
  @Field(() => Int, { nullable: false })
  language!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  pageCount!: number;
  @Field(() => Int, { nullable: false })
  workId!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class BookCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  publishedDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  publisher?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  coverImage?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  language?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  pageCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  workId?: keyof typeof SortOrder;
}

@ObjectType()
export class BookCount {
  @Field(() => Int, { nullable: false })
  authors?: number;
  @Field(() => Int, { nullable: false })
  userBook?: number;
  @Field(() => Int, { nullable: false })
  reviews?: number;
  @Field(() => Int, { nullable: false })
  logs?: number;
}

@InputType()
export class BookCreateManyWorkInputEnvelope {
  @Field(() => [BookCreateManyWorkInput], { nullable: false })
  @Type(() => BookCreateManyWorkInput)
  data!: Array<BookCreateManyWorkInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class BookCreateManyWorkInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
}

@InputType()
export class BookCreateManyInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
}

@InputType()
export class BookCreateNestedManyWithoutAuthorsInput {
  @Field(() => [BookCreateWithoutAuthorsInput], { nullable: true })
  @Type(() => BookCreateWithoutAuthorsInput)
  create?: Array<BookCreateWithoutAuthorsInput>;
  @Field(() => [BookCreateOrConnectWithoutAuthorsInput], { nullable: true })
  @Type(() => BookCreateOrConnectWithoutAuthorsInput)
  connectOrCreate?: Array<BookCreateOrConnectWithoutAuthorsInput>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
}

@InputType()
export class BookCreateNestedManyWithoutWorkInput {
  @Field(() => [BookCreateWithoutWorkInput], { nullable: true })
  @Type(() => BookCreateWithoutWorkInput)
  create?: Array<BookCreateWithoutWorkInput>;
  @Field(() => [BookCreateOrConnectWithoutWorkInput], { nullable: true })
  @Type(() => BookCreateOrConnectWithoutWorkInput)
  connectOrCreate?: Array<BookCreateOrConnectWithoutWorkInput>;
  @Field(() => BookCreateManyWorkInputEnvelope, { nullable: true })
  @Type(() => BookCreateManyWorkInputEnvelope)
  createMany?: InstanceType<typeof BookCreateManyWorkInputEnvelope>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
}

@InputType()
export class BookCreateNestedOneWithoutIdentifierInput {
  @Field(() => BookCreateWithoutIdentifierInput, { nullable: true })
  @Type(() => BookCreateWithoutIdentifierInput)
  create?: InstanceType<typeof BookCreateWithoutIdentifierInput>;
  @Field(() => BookCreateOrConnectWithoutIdentifierInput, { nullable: true })
  @Type(() => BookCreateOrConnectWithoutIdentifierInput)
  connectOrCreate?: InstanceType<
    typeof BookCreateOrConnectWithoutIdentifierInput
  >;
  @Field(() => BookWhereUniqueInput, { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
}

@InputType()
export class BookCreateNestedOneWithoutLogsInput {
  @Field(() => BookCreateWithoutLogsInput, { nullable: true })
  @Type(() => BookCreateWithoutLogsInput)
  create?: InstanceType<typeof BookCreateWithoutLogsInput>;
  @Field(() => BookCreateOrConnectWithoutLogsInput, { nullable: true })
  @Type(() => BookCreateOrConnectWithoutLogsInput)
  connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutLogsInput>;
  @Field(() => BookWhereUniqueInput, { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
}

@InputType()
export class BookCreateNestedOneWithoutReviewsInput {
  @Field(() => BookCreateWithoutReviewsInput, { nullable: true })
  @Type(() => BookCreateWithoutReviewsInput)
  create?: InstanceType<typeof BookCreateWithoutReviewsInput>;
  @Field(() => BookCreateOrConnectWithoutReviewsInput, { nullable: true })
  @Type(() => BookCreateOrConnectWithoutReviewsInput)
  connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutReviewsInput>;
  @Field(() => BookWhereUniqueInput, { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
}

@InputType()
export class BookCreateNestedOneWithoutUserBookInput {
  @Field(() => BookCreateWithoutUserBookInput, { nullable: true })
  @Type(() => BookCreateWithoutUserBookInput)
  create?: InstanceType<typeof BookCreateWithoutUserBookInput>;
  @Field(() => BookCreateOrConnectWithoutUserBookInput, { nullable: true })
  @Type(() => BookCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: InstanceType<
    typeof BookCreateOrConnectWithoutUserBookInput
  >;
  @Field(() => BookWhereUniqueInput, { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
}

@InputType()
export class BookCreateOrConnectWithoutAuthorsInput {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookCreateWithoutAuthorsInput, { nullable: false })
  @Type(() => BookCreateWithoutAuthorsInput)
  create!: InstanceType<typeof BookCreateWithoutAuthorsInput>;
}

@InputType()
export class BookCreateOrConnectWithoutIdentifierInput {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookCreateWithoutIdentifierInput, { nullable: false })
  @Type(() => BookCreateWithoutIdentifierInput)
  create!: InstanceType<typeof BookCreateWithoutIdentifierInput>;
}

@InputType()
export class BookCreateOrConnectWithoutLogsInput {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookCreateWithoutLogsInput, { nullable: false })
  @Type(() => BookCreateWithoutLogsInput)
  create!: InstanceType<typeof BookCreateWithoutLogsInput>;
}

@InputType()
export class BookCreateOrConnectWithoutReviewsInput {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookCreateWithoutReviewsInput, { nullable: false })
  @Type(() => BookCreateWithoutReviewsInput)
  create!: InstanceType<typeof BookCreateWithoutReviewsInput>;
}

@InputType()
export class BookCreateOrConnectWithoutUserBookInput {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookCreateWithoutUserBookInput, { nullable: false })
  @Type(() => BookCreateWithoutUserBookInput)
  create!: InstanceType<typeof BookCreateWithoutUserBookInput>;
}

@InputType()
export class BookCreateOrConnectWithoutWorkInput {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookCreateWithoutWorkInput, { nullable: false })
  @Type(() => BookCreateWithoutWorkInput)
  create!: InstanceType<typeof BookCreateWithoutWorkInput>;
}

@InputType()
export class BookCreateWithoutAuthorsInput {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => IdentifierCreateNestedOneWithoutBookInput, { nullable: true })
  identifier?: InstanceType<typeof IdentifierCreateNestedOneWithoutBookInput>;
  @Field(() => UserBookCreateNestedManyWithoutBookInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookCreateNestedManyWithoutBookInput>;
  @Field(() => ReviewCreateNestedManyWithoutBookInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutBookInput>;
  @Field(() => AuditLogCreateNestedManyWithoutBookInput, { nullable: true })
  logs?: InstanceType<typeof AuditLogCreateNestedManyWithoutBookInput>;
  @Field(() => WorkCreateNestedOneWithoutEditionsInput, { nullable: true })
  work?: InstanceType<typeof WorkCreateNestedOneWithoutEditionsInput>;
}

@InputType()
export class BookCreateWithoutIdentifierInput {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorCreateNestedManyWithoutBooksInput, { nullable: true })
  authors?: InstanceType<typeof AuthorCreateNestedManyWithoutBooksInput>;
  @Field(() => UserBookCreateNestedManyWithoutBookInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookCreateNestedManyWithoutBookInput>;
  @Field(() => ReviewCreateNestedManyWithoutBookInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutBookInput>;
  @Field(() => AuditLogCreateNestedManyWithoutBookInput, { nullable: true })
  logs?: InstanceType<typeof AuditLogCreateNestedManyWithoutBookInput>;
  @Field(() => WorkCreateNestedOneWithoutEditionsInput, { nullable: true })
  work?: InstanceType<typeof WorkCreateNestedOneWithoutEditionsInput>;
}

@InputType()
export class BookCreateWithoutLogsInput {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorCreateNestedManyWithoutBooksInput, { nullable: true })
  authors?: InstanceType<typeof AuthorCreateNestedManyWithoutBooksInput>;
  @Field(() => IdentifierCreateNestedOneWithoutBookInput, { nullable: true })
  identifier?: InstanceType<typeof IdentifierCreateNestedOneWithoutBookInput>;
  @Field(() => UserBookCreateNestedManyWithoutBookInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookCreateNestedManyWithoutBookInput>;
  @Field(() => ReviewCreateNestedManyWithoutBookInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutBookInput>;
  @Field(() => WorkCreateNestedOneWithoutEditionsInput, { nullable: true })
  work?: InstanceType<typeof WorkCreateNestedOneWithoutEditionsInput>;
}

@InputType()
export class BookCreateWithoutReviewsInput {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorCreateNestedManyWithoutBooksInput, { nullable: true })
  authors?: InstanceType<typeof AuthorCreateNestedManyWithoutBooksInput>;
  @Field(() => IdentifierCreateNestedOneWithoutBookInput, { nullable: true })
  identifier?: InstanceType<typeof IdentifierCreateNestedOneWithoutBookInput>;
  @Field(() => UserBookCreateNestedManyWithoutBookInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookCreateNestedManyWithoutBookInput>;
  @Field(() => AuditLogCreateNestedManyWithoutBookInput, { nullable: true })
  logs?: InstanceType<typeof AuditLogCreateNestedManyWithoutBookInput>;
  @Field(() => WorkCreateNestedOneWithoutEditionsInput, { nullable: true })
  work?: InstanceType<typeof WorkCreateNestedOneWithoutEditionsInput>;
}

@InputType()
export class BookCreateWithoutUserBookInput {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorCreateNestedManyWithoutBooksInput, { nullable: true })
  authors?: InstanceType<typeof AuthorCreateNestedManyWithoutBooksInput>;
  @Field(() => IdentifierCreateNestedOneWithoutBookInput, { nullable: true })
  identifier?: InstanceType<typeof IdentifierCreateNestedOneWithoutBookInput>;
  @Field(() => ReviewCreateNestedManyWithoutBookInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutBookInput>;
  @Field(() => AuditLogCreateNestedManyWithoutBookInput, { nullable: true })
  logs?: InstanceType<typeof AuditLogCreateNestedManyWithoutBookInput>;
  @Field(() => WorkCreateNestedOneWithoutEditionsInput, { nullable: true })
  work?: InstanceType<typeof WorkCreateNestedOneWithoutEditionsInput>;
}

@InputType()
export class BookCreateWithoutWorkInput {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorCreateNestedManyWithoutBooksInput, { nullable: true })
  authors?: InstanceType<typeof AuthorCreateNestedManyWithoutBooksInput>;
  @Field(() => IdentifierCreateNestedOneWithoutBookInput, { nullable: true })
  identifier?: InstanceType<typeof IdentifierCreateNestedOneWithoutBookInput>;
  @Field(() => UserBookCreateNestedManyWithoutBookInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookCreateNestedManyWithoutBookInput>;
  @Field(() => ReviewCreateNestedManyWithoutBookInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutBookInput>;
  @Field(() => AuditLogCreateNestedManyWithoutBookInput, { nullable: true })
  logs?: InstanceType<typeof AuditLogCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookCreateInput {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorCreateNestedManyWithoutBooksInput, { nullable: true })
  authors?: InstanceType<typeof AuthorCreateNestedManyWithoutBooksInput>;
  @Field(() => IdentifierCreateNestedOneWithoutBookInput, { nullable: true })
  identifier?: InstanceType<typeof IdentifierCreateNestedOneWithoutBookInput>;
  @Field(() => UserBookCreateNestedManyWithoutBookInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookCreateNestedManyWithoutBookInput>;
  @Field(() => ReviewCreateNestedManyWithoutBookInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutBookInput>;
  @Field(() => AuditLogCreateNestedManyWithoutBookInput, { nullable: true })
  logs?: InstanceType<typeof AuditLogCreateNestedManyWithoutBookInput>;
  @Field(() => WorkCreateNestedOneWithoutEditionsInput, { nullable: true })
  work?: InstanceType<typeof WorkCreateNestedOneWithoutEditionsInput>;
}

@ArgsType()
export class BookGroupByArgs {
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof BookWhereInput>;
  @Field(() => [BookOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<BookOrderByWithAggregationInput>;
  @Field(() => [BookScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof BookScalarFieldEnum>;
  @Field(() => BookScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof BookScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => BookCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BookCountAggregateInput>;
  @Field(() => BookAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof BookAvgAggregateInput>;
  @Field(() => BookSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof BookSumAggregateInput>;
  @Field(() => BookMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BookMinAggregateInput>;
  @Field(() => BookMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BookMaxAggregateInput>;
}

@ObjectType()
export class BookGroupBy {
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  id!: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
  @Field(() => BookCountAggregate, { nullable: true })
  _count?: InstanceType<typeof BookCountAggregate>;
  @Field(() => BookAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof BookAvgAggregate>;
  @Field(() => BookSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof BookSumAggregate>;
  @Field(() => BookMinAggregate, { nullable: true })
  _min?: InstanceType<typeof BookMinAggregate>;
  @Field(() => BookMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof BookMaxAggregate>;
}

@InputType()
export class BookListRelationFilter {
  @Field(() => BookWhereInput, { nullable: true })
  every?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookWhereInput, { nullable: true })
  some?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookWhereInput, { nullable: true })
  none?: InstanceType<typeof BookWhereInput>;
}

@InputType()
export class BookMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  publishedDate?: true;
  @Field(() => Boolean, { nullable: true })
  publisher?: true;
  @Field(() => Boolean, { nullable: true })
  coverImage?: true;
  @Field(() => Boolean, { nullable: true })
  description?: true;
  @Field(() => Boolean, { nullable: true })
  language?: true;
  @Field(() => Boolean, { nullable: true })
  pageCount?: true;
  @Field(() => Boolean, { nullable: true })
  workId?: true;
}

@ObjectType()
export class BookMaxAggregate {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
}

@InputType()
export class BookMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  publishedDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  publisher?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  coverImage?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  language?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  pageCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  workId?: keyof typeof SortOrder;
}

@InputType()
export class BookMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  publishedDate?: true;
  @Field(() => Boolean, { nullable: true })
  publisher?: true;
  @Field(() => Boolean, { nullable: true })
  coverImage?: true;
  @Field(() => Boolean, { nullable: true })
  description?: true;
  @Field(() => Boolean, { nullable: true })
  language?: true;
  @Field(() => Boolean, { nullable: true })
  pageCount?: true;
  @Field(() => Boolean, { nullable: true })
  workId?: true;
}

@ObjectType()
export class BookMinAggregate {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
}

@InputType()
export class BookMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  publishedDate?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  publisher?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  coverImage?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  language?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  pageCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  workId?: keyof typeof SortOrder;
}

@InputType()
export class BookOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class BookOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  publishedDate?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  publisher?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  coverImage?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  description?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  language?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  pageCount?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  workId?: InstanceType<typeof SortOrderInput>;
  @Field(() => BookCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BookCountOrderByAggregateInput>;
  @Field(() => BookAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof BookAvgOrderByAggregateInput>;
  @Field(() => BookMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BookMaxOrderByAggregateInput>;
  @Field(() => BookMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BookMinOrderByAggregateInput>;
  @Field(() => BookSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof BookSumOrderByAggregateInput>;
}

@InputType()
export class BookOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  publishedDate?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  publisher?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  coverImage?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  description?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  language?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  pageCount?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  workId?: InstanceType<typeof SortOrderInput>;
  @Field(() => AuthorOrderByRelationAggregateInput, { nullable: true })
  authors?: InstanceType<typeof AuthorOrderByRelationAggregateInput>;
  @Field(() => IdentifierOrderByWithRelationInput, { nullable: true })
  identifier?: InstanceType<typeof IdentifierOrderByWithRelationInput>;
  @Field(() => UserBookOrderByRelationAggregateInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookOrderByRelationAggregateInput>;
  @Field(() => ReviewOrderByRelationAggregateInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewOrderByRelationAggregateInput>;
  @Field(() => AuditLogOrderByRelationAggregateInput, { nullable: true })
  logs?: InstanceType<typeof AuditLogOrderByRelationAggregateInput>;
  @Field(() => WorkOrderByWithRelationInput, { nullable: true })
  work?: InstanceType<typeof WorkOrderByWithRelationInput>;
}

@InputType()
export class BookRelationFilter {
  @Field(() => BookWhereInput, { nullable: true })
  is?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookWhereInput, { nullable: true })
  isNot?: InstanceType<typeof BookWhereInput>;
}

@InputType()
export class BookScalarWhereWithAggregatesInput {
  @Field(() => [BookScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<BookScalarWhereWithAggregatesInput>;
  @Field(() => [BookScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<BookScalarWhereWithAggregatesInput>;
  @Field(() => [BookScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<BookScalarWhereWithAggregatesInput>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  publishedDate?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  publisher?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  coverImage?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  description?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  language?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  pageCount?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  workId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class BookScalarWhereInput {
  @Field(() => [BookScalarWhereInput], { nullable: true })
  AND?: Array<BookScalarWhereInput>;
  @Field(() => [BookScalarWhereInput], { nullable: true })
  OR?: Array<BookScalarWhereInput>;
  @Field(() => [BookScalarWhereInput], { nullable: true })
  NOT?: Array<BookScalarWhereInput>;
  @Field(() => IntFilter, { nullable: true })
  id?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  title?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  publishedDate?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  publisher?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  coverImage?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  description?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  language?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  pageCount?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  workId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class BookSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  pageCount?: true;
}

@ObjectType()
export class BookSumAggregate {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
}

@InputType()
export class BookSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  pageCount?: keyof typeof SortOrder;
}

@InputType()
export class BookUncheckedCreateNestedManyWithoutAuthorsInput {
  @Field(() => [BookCreateWithoutAuthorsInput], { nullable: true })
  @Type(() => BookCreateWithoutAuthorsInput)
  create?: Array<BookCreateWithoutAuthorsInput>;
  @Field(() => [BookCreateOrConnectWithoutAuthorsInput], { nullable: true })
  @Type(() => BookCreateOrConnectWithoutAuthorsInput)
  connectOrCreate?: Array<BookCreateOrConnectWithoutAuthorsInput>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
}

@InputType()
export class BookUncheckedCreateNestedManyWithoutWorkInput {
  @Field(() => [BookCreateWithoutWorkInput], { nullable: true })
  @Type(() => BookCreateWithoutWorkInput)
  create?: Array<BookCreateWithoutWorkInput>;
  @Field(() => [BookCreateOrConnectWithoutWorkInput], { nullable: true })
  @Type(() => BookCreateOrConnectWithoutWorkInput)
  connectOrCreate?: Array<BookCreateOrConnectWithoutWorkInput>;
  @Field(() => BookCreateManyWorkInputEnvelope, { nullable: true })
  @Type(() => BookCreateManyWorkInputEnvelope)
  createMany?: InstanceType<typeof BookCreateManyWorkInputEnvelope>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
}

@InputType()
export class BookUncheckedCreateWithoutAuthorsInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
  @Field(() => IdentifierUncheckedCreateNestedOneWithoutBookInput, {
    nullable: true,
  })
  identifier?: InstanceType<
    typeof IdentifierUncheckedCreateNestedOneWithoutBookInput
  >;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutBookInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutBookInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  logs?: InstanceType<typeof AuditLogUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateWithoutIdentifierInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
  @Field(() => AuthorUncheckedCreateNestedManyWithoutBooksInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedCreateNestedManyWithoutBooksInput
  >;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutBookInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutBookInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  logs?: InstanceType<typeof AuditLogUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateWithoutLogsInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
  @Field(() => AuthorUncheckedCreateNestedManyWithoutBooksInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedCreateNestedManyWithoutBooksInput
  >;
  @Field(() => IdentifierUncheckedCreateNestedOneWithoutBookInput, {
    nullable: true,
  })
  identifier?: InstanceType<
    typeof IdentifierUncheckedCreateNestedOneWithoutBookInput
  >;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutBookInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutBookInput
  >;
}

@InputType()
export class BookUncheckedCreateWithoutReviewsInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
  @Field(() => AuthorUncheckedCreateNestedManyWithoutBooksInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedCreateNestedManyWithoutBooksInput
  >;
  @Field(() => IdentifierUncheckedCreateNestedOneWithoutBookInput, {
    nullable: true,
  })
  identifier?: InstanceType<
    typeof IdentifierUncheckedCreateNestedOneWithoutBookInput
  >;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutBookInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  logs?: InstanceType<typeof AuditLogUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateWithoutUserBookInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
  @Field(() => AuthorUncheckedCreateNestedManyWithoutBooksInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedCreateNestedManyWithoutBooksInput
  >;
  @Field(() => IdentifierUncheckedCreateNestedOneWithoutBookInput, {
    nullable: true,
  })
  identifier?: InstanceType<
    typeof IdentifierUncheckedCreateNestedOneWithoutBookInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutBookInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  logs?: InstanceType<typeof AuditLogUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateWithoutWorkInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorUncheckedCreateNestedManyWithoutBooksInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedCreateNestedManyWithoutBooksInput
  >;
  @Field(() => IdentifierUncheckedCreateNestedOneWithoutBookInput, {
    nullable: true,
  })
  identifier?: InstanceType<
    typeof IdentifierUncheckedCreateNestedOneWithoutBookInput
  >;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutBookInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutBookInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  logs?: InstanceType<typeof AuditLogUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
  @Field(() => AuthorUncheckedCreateNestedManyWithoutBooksInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedCreateNestedManyWithoutBooksInput
  >;
  @Field(() => IdentifierUncheckedCreateNestedOneWithoutBookInput, {
    nullable: true,
  })
  identifier?: InstanceType<
    typeof IdentifierUncheckedCreateNestedOneWithoutBookInput
  >;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutBookInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutBookInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  logs?: InstanceType<typeof AuditLogUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedUpdateManyWithoutAuthorsNestedInput {
  @Field(() => [BookCreateWithoutAuthorsInput], { nullable: true })
  @Type(() => BookCreateWithoutAuthorsInput)
  create?: Array<BookCreateWithoutAuthorsInput>;
  @Field(() => [BookCreateOrConnectWithoutAuthorsInput], { nullable: true })
  @Type(() => BookCreateOrConnectWithoutAuthorsInput)
  connectOrCreate?: Array<BookCreateOrConnectWithoutAuthorsInput>;
  @Field(() => [BookUpsertWithWhereUniqueWithoutAuthorsInput], {
    nullable: true,
  })
  @Type(() => BookUpsertWithWhereUniqueWithoutAuthorsInput)
  upsert?: Array<BookUpsertWithWhereUniqueWithoutAuthorsInput>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  set?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookUpdateWithWhereUniqueWithoutAuthorsInput], {
    nullable: true,
  })
  @Type(() => BookUpdateWithWhereUniqueWithoutAuthorsInput)
  update?: Array<BookUpdateWithWhereUniqueWithoutAuthorsInput>;
  @Field(() => [BookUpdateManyWithWhereWithoutAuthorsInput], { nullable: true })
  @Type(() => BookUpdateManyWithWhereWithoutAuthorsInput)
  updateMany?: Array<BookUpdateManyWithWhereWithoutAuthorsInput>;
  @Field(() => [BookScalarWhereInput], { nullable: true })
  @Type(() => BookScalarWhereInput)
  deleteMany?: Array<BookScalarWhereInput>;
}

@InputType()
export class BookUncheckedUpdateManyWithoutAuthorsInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
}

@InputType()
export class BookUncheckedUpdateManyWithoutWorkNestedInput {
  @Field(() => [BookCreateWithoutWorkInput], { nullable: true })
  @Type(() => BookCreateWithoutWorkInput)
  create?: Array<BookCreateWithoutWorkInput>;
  @Field(() => [BookCreateOrConnectWithoutWorkInput], { nullable: true })
  @Type(() => BookCreateOrConnectWithoutWorkInput)
  connectOrCreate?: Array<BookCreateOrConnectWithoutWorkInput>;
  @Field(() => [BookUpsertWithWhereUniqueWithoutWorkInput], { nullable: true })
  @Type(() => BookUpsertWithWhereUniqueWithoutWorkInput)
  upsert?: Array<BookUpsertWithWhereUniqueWithoutWorkInput>;
  @Field(() => BookCreateManyWorkInputEnvelope, { nullable: true })
  @Type(() => BookCreateManyWorkInputEnvelope)
  createMany?: InstanceType<typeof BookCreateManyWorkInputEnvelope>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  set?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookUpdateWithWhereUniqueWithoutWorkInput], { nullable: true })
  @Type(() => BookUpdateWithWhereUniqueWithoutWorkInput)
  update?: Array<BookUpdateWithWhereUniqueWithoutWorkInput>;
  @Field(() => [BookUpdateManyWithWhereWithoutWorkInput], { nullable: true })
  @Type(() => BookUpdateManyWithWhereWithoutWorkInput)
  updateMany?: Array<BookUpdateManyWithWhereWithoutWorkInput>;
  @Field(() => [BookScalarWhereInput], { nullable: true })
  @Type(() => BookScalarWhereInput)
  deleteMany?: Array<BookScalarWhereInput>;
}

@InputType()
export class BookUncheckedUpdateManyWithoutWorkInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
}

@InputType()
export class BookUncheckedUpdateManyInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
}

@InputType()
export class BookUncheckedUpdateWithoutAuthorsInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
  @Field(() => IdentifierUncheckedUpdateOneWithoutBookNestedInput, {
    nullable: true,
  })
  identifier?: InstanceType<
    typeof IdentifierUncheckedUpdateOneWithoutBookNestedInput
  >;
  @Field(() => UserBookUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutBookNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutBookNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  logs?: InstanceType<typeof AuditLogUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUncheckedUpdateWithoutIdentifierInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
  @Field(() => AuthorUncheckedUpdateManyWithoutBooksNestedInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedUpdateManyWithoutBooksNestedInput
  >;
  @Field(() => UserBookUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutBookNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutBookNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  logs?: InstanceType<typeof AuditLogUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUncheckedUpdateWithoutLogsInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
  @Field(() => AuthorUncheckedUpdateManyWithoutBooksNestedInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedUpdateManyWithoutBooksNestedInput
  >;
  @Field(() => IdentifierUncheckedUpdateOneWithoutBookNestedInput, {
    nullable: true,
  })
  identifier?: InstanceType<
    typeof IdentifierUncheckedUpdateOneWithoutBookNestedInput
  >;
  @Field(() => UserBookUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutBookNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutBookNestedInput
  >;
}

@InputType()
export class BookUncheckedUpdateWithoutReviewsInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
  @Field(() => AuthorUncheckedUpdateManyWithoutBooksNestedInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedUpdateManyWithoutBooksNestedInput
  >;
  @Field(() => IdentifierUncheckedUpdateOneWithoutBookNestedInput, {
    nullable: true,
  })
  identifier?: InstanceType<
    typeof IdentifierUncheckedUpdateOneWithoutBookNestedInput
  >;
  @Field(() => UserBookUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutBookNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  logs?: InstanceType<typeof AuditLogUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUncheckedUpdateWithoutUserBookInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
  @Field(() => AuthorUncheckedUpdateManyWithoutBooksNestedInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedUpdateManyWithoutBooksNestedInput
  >;
  @Field(() => IdentifierUncheckedUpdateOneWithoutBookNestedInput, {
    nullable: true,
  })
  identifier?: InstanceType<
    typeof IdentifierUncheckedUpdateOneWithoutBookNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutBookNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  logs?: InstanceType<typeof AuditLogUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUncheckedUpdateWithoutWorkInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorUncheckedUpdateManyWithoutBooksNestedInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedUpdateManyWithoutBooksNestedInput
  >;
  @Field(() => IdentifierUncheckedUpdateOneWithoutBookNestedInput, {
    nullable: true,
  })
  identifier?: InstanceType<
    typeof IdentifierUncheckedUpdateOneWithoutBookNestedInput
  >;
  @Field(() => UserBookUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutBookNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutBookNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  logs?: InstanceType<typeof AuditLogUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUncheckedUpdateInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => String, { nullable: true })
  workId?: string;
  @Field(() => AuthorUncheckedUpdateManyWithoutBooksNestedInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedUpdateManyWithoutBooksNestedInput
  >;
  @Field(() => IdentifierUncheckedUpdateOneWithoutBookNestedInput, {
    nullable: true,
  })
  identifier?: InstanceType<
    typeof IdentifierUncheckedUpdateOneWithoutBookNestedInput
  >;
  @Field(() => UserBookUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutBookNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutBookNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutBookNestedInput, {
    nullable: true,
  })
  logs?: InstanceType<typeof AuditLogUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
}

@InputType()
export class BookUpdateManyWithWhereWithoutAuthorsInput {
  @Field(() => BookScalarWhereInput, { nullable: false })
  @Type(() => BookScalarWhereInput)
  where!: InstanceType<typeof BookScalarWhereInput>;
  @Field(() => BookUpdateManyMutationInput, { nullable: false })
  @Type(() => BookUpdateManyMutationInput)
  data!: InstanceType<typeof BookUpdateManyMutationInput>;
}

@InputType()
export class BookUpdateManyWithWhereWithoutWorkInput {
  @Field(() => BookScalarWhereInput, { nullable: false })
  @Type(() => BookScalarWhereInput)
  where!: InstanceType<typeof BookScalarWhereInput>;
  @Field(() => BookUpdateManyMutationInput, { nullable: false })
  @Type(() => BookUpdateManyMutationInput)
  data!: InstanceType<typeof BookUpdateManyMutationInput>;
}

@InputType()
export class BookUpdateManyWithoutAuthorsNestedInput {
  @Field(() => [BookCreateWithoutAuthorsInput], { nullable: true })
  @Type(() => BookCreateWithoutAuthorsInput)
  create?: Array<BookCreateWithoutAuthorsInput>;
  @Field(() => [BookCreateOrConnectWithoutAuthorsInput], { nullable: true })
  @Type(() => BookCreateOrConnectWithoutAuthorsInput)
  connectOrCreate?: Array<BookCreateOrConnectWithoutAuthorsInput>;
  @Field(() => [BookUpsertWithWhereUniqueWithoutAuthorsInput], {
    nullable: true,
  })
  @Type(() => BookUpsertWithWhereUniqueWithoutAuthorsInput)
  upsert?: Array<BookUpsertWithWhereUniqueWithoutAuthorsInput>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  set?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookUpdateWithWhereUniqueWithoutAuthorsInput], {
    nullable: true,
  })
  @Type(() => BookUpdateWithWhereUniqueWithoutAuthorsInput)
  update?: Array<BookUpdateWithWhereUniqueWithoutAuthorsInput>;
  @Field(() => [BookUpdateManyWithWhereWithoutAuthorsInput], { nullable: true })
  @Type(() => BookUpdateManyWithWhereWithoutAuthorsInput)
  updateMany?: Array<BookUpdateManyWithWhereWithoutAuthorsInput>;
  @Field(() => [BookScalarWhereInput], { nullable: true })
  @Type(() => BookScalarWhereInput)
  deleteMany?: Array<BookScalarWhereInput>;
}

@InputType()
export class BookUpdateManyWithoutWorkNestedInput {
  @Field(() => [BookCreateWithoutWorkInput], { nullable: true })
  @Type(() => BookCreateWithoutWorkInput)
  create?: Array<BookCreateWithoutWorkInput>;
  @Field(() => [BookCreateOrConnectWithoutWorkInput], { nullable: true })
  @Type(() => BookCreateOrConnectWithoutWorkInput)
  connectOrCreate?: Array<BookCreateOrConnectWithoutWorkInput>;
  @Field(() => [BookUpsertWithWhereUniqueWithoutWorkInput], { nullable: true })
  @Type(() => BookUpsertWithWhereUniqueWithoutWorkInput)
  upsert?: Array<BookUpsertWithWhereUniqueWithoutWorkInput>;
  @Field(() => BookCreateManyWorkInputEnvelope, { nullable: true })
  @Type(() => BookCreateManyWorkInputEnvelope)
  createMany?: InstanceType<typeof BookCreateManyWorkInputEnvelope>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  set?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookWhereUniqueInput], { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id'>>;
  @Field(() => [BookUpdateWithWhereUniqueWithoutWorkInput], { nullable: true })
  @Type(() => BookUpdateWithWhereUniqueWithoutWorkInput)
  update?: Array<BookUpdateWithWhereUniqueWithoutWorkInput>;
  @Field(() => [BookUpdateManyWithWhereWithoutWorkInput], { nullable: true })
  @Type(() => BookUpdateManyWithWhereWithoutWorkInput)
  updateMany?: Array<BookUpdateManyWithWhereWithoutWorkInput>;
  @Field(() => [BookScalarWhereInput], { nullable: true })
  @Type(() => BookScalarWhereInput)
  deleteMany?: Array<BookScalarWhereInput>;
}

@InputType()
export class BookUpdateOneWithoutIdentifierNestedInput {
  @Field(() => BookCreateWithoutIdentifierInput, { nullable: true })
  @Type(() => BookCreateWithoutIdentifierInput)
  create?: InstanceType<typeof BookCreateWithoutIdentifierInput>;
  @Field(() => BookCreateOrConnectWithoutIdentifierInput, { nullable: true })
  @Type(() => BookCreateOrConnectWithoutIdentifierInput)
  connectOrCreate?: InstanceType<
    typeof BookCreateOrConnectWithoutIdentifierInput
  >;
  @Field(() => BookUpsertWithoutIdentifierInput, { nullable: true })
  @Type(() => BookUpsertWithoutIdentifierInput)
  upsert?: InstanceType<typeof BookUpsertWithoutIdentifierInput>;
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  disconnect?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  delete?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookWhereUniqueInput, { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookUpdateToOneWithWhereWithoutIdentifierInput, {
    nullable: true,
  })
  @Type(() => BookUpdateToOneWithWhereWithoutIdentifierInput)
  update?: InstanceType<typeof BookUpdateToOneWithWhereWithoutIdentifierInput>;
}

@InputType()
export class BookUpdateOneWithoutLogsNestedInput {
  @Field(() => BookCreateWithoutLogsInput, { nullable: true })
  @Type(() => BookCreateWithoutLogsInput)
  create?: InstanceType<typeof BookCreateWithoutLogsInput>;
  @Field(() => BookCreateOrConnectWithoutLogsInput, { nullable: true })
  @Type(() => BookCreateOrConnectWithoutLogsInput)
  connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutLogsInput>;
  @Field(() => BookUpsertWithoutLogsInput, { nullable: true })
  @Type(() => BookUpsertWithoutLogsInput)
  upsert?: InstanceType<typeof BookUpsertWithoutLogsInput>;
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  disconnect?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  delete?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookWhereUniqueInput, { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookUpdateToOneWithWhereWithoutLogsInput, { nullable: true })
  @Type(() => BookUpdateToOneWithWhereWithoutLogsInput)
  update?: InstanceType<typeof BookUpdateToOneWithWhereWithoutLogsInput>;
}

@InputType()
export class BookUpdateOneWithoutReviewsNestedInput {
  @Field(() => BookCreateWithoutReviewsInput, { nullable: true })
  @Type(() => BookCreateWithoutReviewsInput)
  create?: InstanceType<typeof BookCreateWithoutReviewsInput>;
  @Field(() => BookCreateOrConnectWithoutReviewsInput, { nullable: true })
  @Type(() => BookCreateOrConnectWithoutReviewsInput)
  connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutReviewsInput>;
  @Field(() => BookUpsertWithoutReviewsInput, { nullable: true })
  @Type(() => BookUpsertWithoutReviewsInput)
  upsert?: InstanceType<typeof BookUpsertWithoutReviewsInput>;
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  disconnect?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  delete?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookWhereUniqueInput, { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookUpdateToOneWithWhereWithoutReviewsInput, { nullable: true })
  @Type(() => BookUpdateToOneWithWhereWithoutReviewsInput)
  update?: InstanceType<typeof BookUpdateToOneWithWhereWithoutReviewsInput>;
}

@InputType()
export class BookUpdateOneWithoutUserBookNestedInput {
  @Field(() => BookCreateWithoutUserBookInput, { nullable: true })
  @Type(() => BookCreateWithoutUserBookInput)
  create?: InstanceType<typeof BookCreateWithoutUserBookInput>;
  @Field(() => BookCreateOrConnectWithoutUserBookInput, { nullable: true })
  @Type(() => BookCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: InstanceType<
    typeof BookCreateOrConnectWithoutUserBookInput
  >;
  @Field(() => BookUpsertWithoutUserBookInput, { nullable: true })
  @Type(() => BookUpsertWithoutUserBookInput)
  upsert?: InstanceType<typeof BookUpsertWithoutUserBookInput>;
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  disconnect?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  delete?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookWhereUniqueInput, { nullable: true })
  @Type(() => BookWhereUniqueInput)
  connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookUpdateToOneWithWhereWithoutUserBookInput, { nullable: true })
  @Type(() => BookUpdateToOneWithWhereWithoutUserBookInput)
  update?: InstanceType<typeof BookUpdateToOneWithWhereWithoutUserBookInput>;
}

@InputType()
export class BookUpdateToOneWithWhereWithoutIdentifierInput {
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  where?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookUpdateWithoutIdentifierInput, { nullable: false })
  @Type(() => BookUpdateWithoutIdentifierInput)
  data!: InstanceType<typeof BookUpdateWithoutIdentifierInput>;
}

@InputType()
export class BookUpdateToOneWithWhereWithoutLogsInput {
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  where?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookUpdateWithoutLogsInput, { nullable: false })
  @Type(() => BookUpdateWithoutLogsInput)
  data!: InstanceType<typeof BookUpdateWithoutLogsInput>;
}

@InputType()
export class BookUpdateToOneWithWhereWithoutReviewsInput {
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  where?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookUpdateWithoutReviewsInput, { nullable: false })
  @Type(() => BookUpdateWithoutReviewsInput)
  data!: InstanceType<typeof BookUpdateWithoutReviewsInput>;
}

@InputType()
export class BookUpdateToOneWithWhereWithoutUserBookInput {
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  where?: InstanceType<typeof BookWhereInput>;
  @Field(() => BookUpdateWithoutUserBookInput, { nullable: false })
  @Type(() => BookUpdateWithoutUserBookInput)
  data!: InstanceType<typeof BookUpdateWithoutUserBookInput>;
}

@InputType()
export class BookUpdateWithWhereUniqueWithoutAuthorsInput {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookUpdateWithoutAuthorsInput, { nullable: false })
  @Type(() => BookUpdateWithoutAuthorsInput)
  data!: InstanceType<typeof BookUpdateWithoutAuthorsInput>;
}

@InputType()
export class BookUpdateWithWhereUniqueWithoutWorkInput {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookUpdateWithoutWorkInput, { nullable: false })
  @Type(() => BookUpdateWithoutWorkInput)
  data!: InstanceType<typeof BookUpdateWithoutWorkInput>;
}

@InputType()
export class BookUpdateWithoutAuthorsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => IdentifierUpdateOneWithoutBookNestedInput, { nullable: true })
  identifier?: InstanceType<typeof IdentifierUpdateOneWithoutBookNestedInput>;
  @Field(() => UserBookUpdateManyWithoutBookNestedInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookUpdateManyWithoutBookNestedInput>;
  @Field(() => ReviewUpdateManyWithoutBookNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutBookNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutBookNestedInput, { nullable: true })
  logs?: InstanceType<typeof AuditLogUpdateManyWithoutBookNestedInput>;
  @Field(() => WorkUpdateOneWithoutEditionsNestedInput, { nullable: true })
  work?: InstanceType<typeof WorkUpdateOneWithoutEditionsNestedInput>;
}

@InputType()
export class BookUpdateWithoutIdentifierInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorUpdateManyWithoutBooksNestedInput, { nullable: true })
  authors?: InstanceType<typeof AuthorUpdateManyWithoutBooksNestedInput>;
  @Field(() => UserBookUpdateManyWithoutBookNestedInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookUpdateManyWithoutBookNestedInput>;
  @Field(() => ReviewUpdateManyWithoutBookNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutBookNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutBookNestedInput, { nullable: true })
  logs?: InstanceType<typeof AuditLogUpdateManyWithoutBookNestedInput>;
  @Field(() => WorkUpdateOneWithoutEditionsNestedInput, { nullable: true })
  work?: InstanceType<typeof WorkUpdateOneWithoutEditionsNestedInput>;
}

@InputType()
export class BookUpdateWithoutLogsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorUpdateManyWithoutBooksNestedInput, { nullable: true })
  authors?: InstanceType<typeof AuthorUpdateManyWithoutBooksNestedInput>;
  @Field(() => IdentifierUpdateOneWithoutBookNestedInput, { nullable: true })
  identifier?: InstanceType<typeof IdentifierUpdateOneWithoutBookNestedInput>;
  @Field(() => UserBookUpdateManyWithoutBookNestedInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookUpdateManyWithoutBookNestedInput>;
  @Field(() => ReviewUpdateManyWithoutBookNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutBookNestedInput>;
  @Field(() => WorkUpdateOneWithoutEditionsNestedInput, { nullable: true })
  work?: InstanceType<typeof WorkUpdateOneWithoutEditionsNestedInput>;
}

@InputType()
export class BookUpdateWithoutReviewsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorUpdateManyWithoutBooksNestedInput, { nullable: true })
  authors?: InstanceType<typeof AuthorUpdateManyWithoutBooksNestedInput>;
  @Field(() => IdentifierUpdateOneWithoutBookNestedInput, { nullable: true })
  identifier?: InstanceType<typeof IdentifierUpdateOneWithoutBookNestedInput>;
  @Field(() => UserBookUpdateManyWithoutBookNestedInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookUpdateManyWithoutBookNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutBookNestedInput, { nullable: true })
  logs?: InstanceType<typeof AuditLogUpdateManyWithoutBookNestedInput>;
  @Field(() => WorkUpdateOneWithoutEditionsNestedInput, { nullable: true })
  work?: InstanceType<typeof WorkUpdateOneWithoutEditionsNestedInput>;
}

@InputType()
export class BookUpdateWithoutUserBookInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorUpdateManyWithoutBooksNestedInput, { nullable: true })
  authors?: InstanceType<typeof AuthorUpdateManyWithoutBooksNestedInput>;
  @Field(() => IdentifierUpdateOneWithoutBookNestedInput, { nullable: true })
  identifier?: InstanceType<typeof IdentifierUpdateOneWithoutBookNestedInput>;
  @Field(() => ReviewUpdateManyWithoutBookNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutBookNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutBookNestedInput, { nullable: true })
  logs?: InstanceType<typeof AuditLogUpdateManyWithoutBookNestedInput>;
  @Field(() => WorkUpdateOneWithoutEditionsNestedInput, { nullable: true })
  work?: InstanceType<typeof WorkUpdateOneWithoutEditionsNestedInput>;
}

@InputType()
export class BookUpdateWithoutWorkInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorUpdateManyWithoutBooksNestedInput, { nullable: true })
  authors?: InstanceType<typeof AuthorUpdateManyWithoutBooksNestedInput>;
  @Field(() => IdentifierUpdateOneWithoutBookNestedInput, { nullable: true })
  identifier?: InstanceType<typeof IdentifierUpdateOneWithoutBookNestedInput>;
  @Field(() => UserBookUpdateManyWithoutBookNestedInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookUpdateManyWithoutBookNestedInput>;
  @Field(() => ReviewUpdateManyWithoutBookNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutBookNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutBookNestedInput, { nullable: true })
  logs?: InstanceType<typeof AuditLogUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUpdateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publishedDate?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  publisher?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  coverImage?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  language?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pageCount?: number;
  @Field(() => AuthorUpdateManyWithoutBooksNestedInput, { nullable: true })
  authors?: InstanceType<typeof AuthorUpdateManyWithoutBooksNestedInput>;
  @Field(() => IdentifierUpdateOneWithoutBookNestedInput, { nullable: true })
  identifier?: InstanceType<typeof IdentifierUpdateOneWithoutBookNestedInput>;
  @Field(() => UserBookUpdateManyWithoutBookNestedInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookUpdateManyWithoutBookNestedInput>;
  @Field(() => ReviewUpdateManyWithoutBookNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutBookNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutBookNestedInput, { nullable: true })
  logs?: InstanceType<typeof AuditLogUpdateManyWithoutBookNestedInput>;
  @Field(() => WorkUpdateOneWithoutEditionsNestedInput, { nullable: true })
  work?: InstanceType<typeof WorkUpdateOneWithoutEditionsNestedInput>;
}

@InputType()
export class BookUpsertWithWhereUniqueWithoutAuthorsInput {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookUpdateWithoutAuthorsInput, { nullable: false })
  @Type(() => BookUpdateWithoutAuthorsInput)
  update!: InstanceType<typeof BookUpdateWithoutAuthorsInput>;
  @Field(() => BookCreateWithoutAuthorsInput, { nullable: false })
  @Type(() => BookCreateWithoutAuthorsInput)
  create!: InstanceType<typeof BookCreateWithoutAuthorsInput>;
}

@InputType()
export class BookUpsertWithWhereUniqueWithoutWorkInput {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookUpdateWithoutWorkInput, { nullable: false })
  @Type(() => BookUpdateWithoutWorkInput)
  update!: InstanceType<typeof BookUpdateWithoutWorkInput>;
  @Field(() => BookCreateWithoutWorkInput, { nullable: false })
  @Type(() => BookCreateWithoutWorkInput)
  create!: InstanceType<typeof BookCreateWithoutWorkInput>;
}

@InputType()
export class BookUpsertWithoutIdentifierInput {
  @Field(() => BookUpdateWithoutIdentifierInput, { nullable: false })
  @Type(() => BookUpdateWithoutIdentifierInput)
  update!: InstanceType<typeof BookUpdateWithoutIdentifierInput>;
  @Field(() => BookCreateWithoutIdentifierInput, { nullable: false })
  @Type(() => BookCreateWithoutIdentifierInput)
  create!: InstanceType<typeof BookCreateWithoutIdentifierInput>;
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  where?: InstanceType<typeof BookWhereInput>;
}

@InputType()
export class BookUpsertWithoutLogsInput {
  @Field(() => BookUpdateWithoutLogsInput, { nullable: false })
  @Type(() => BookUpdateWithoutLogsInput)
  update!: InstanceType<typeof BookUpdateWithoutLogsInput>;
  @Field(() => BookCreateWithoutLogsInput, { nullable: false })
  @Type(() => BookCreateWithoutLogsInput)
  create!: InstanceType<typeof BookCreateWithoutLogsInput>;
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  where?: InstanceType<typeof BookWhereInput>;
}

@InputType()
export class BookUpsertWithoutReviewsInput {
  @Field(() => BookUpdateWithoutReviewsInput, { nullable: false })
  @Type(() => BookUpdateWithoutReviewsInput)
  update!: InstanceType<typeof BookUpdateWithoutReviewsInput>;
  @Field(() => BookCreateWithoutReviewsInput, { nullable: false })
  @Type(() => BookCreateWithoutReviewsInput)
  create!: InstanceType<typeof BookCreateWithoutReviewsInput>;
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  where?: InstanceType<typeof BookWhereInput>;
}

@InputType()
export class BookUpsertWithoutUserBookInput {
  @Field(() => BookUpdateWithoutUserBookInput, { nullable: false })
  @Type(() => BookUpdateWithoutUserBookInput)
  update!: InstanceType<typeof BookUpdateWithoutUserBookInput>;
  @Field(() => BookCreateWithoutUserBookInput, { nullable: false })
  @Type(() => BookCreateWithoutUserBookInput)
  create!: InstanceType<typeof BookCreateWithoutUserBookInput>;
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  where?: InstanceType<typeof BookWhereInput>;
}

@InputType()
export class BookWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  id?: number;
  @Field(() => [BookWhereInput], { nullable: true })
  AND?: Array<BookWhereInput>;
  @Field(() => [BookWhereInput], { nullable: true })
  OR?: Array<BookWhereInput>;
  @Field(() => [BookWhereInput], { nullable: true })
  NOT?: Array<BookWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  title?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  publishedDate?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  publisher?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  coverImage?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  description?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  language?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  pageCount?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  workId?: InstanceType<typeof StringFilter>;
  @Field(() => AuthorListRelationFilter, { nullable: true })
  authors?: InstanceType<typeof AuthorListRelationFilter>;
  @Field(() => IdentifierRelationFilter, { nullable: true })
  identifier?: InstanceType<typeof IdentifierRelationFilter>;
  @Field(() => UserBookListRelationFilter, { nullable: true })
  userBook?: InstanceType<typeof UserBookListRelationFilter>;
  @Field(() => ReviewListRelationFilter, { nullable: true })
  reviews?: InstanceType<typeof ReviewListRelationFilter>;
  @Field(() => AuditLogListRelationFilter, { nullable: true })
  logs?: InstanceType<typeof AuditLogListRelationFilter>;
  @Field(() => WorkRelationFilter, { nullable: true })
  work?: InstanceType<typeof WorkRelationFilter>;
}

@InputType()
export class BookWhereInput {
  @Field(() => [BookWhereInput], { nullable: true })
  AND?: Array<BookWhereInput>;
  @Field(() => [BookWhereInput], { nullable: true })
  OR?: Array<BookWhereInput>;
  @Field(() => [BookWhereInput], { nullable: true })
  NOT?: Array<BookWhereInput>;
  @Field(() => IntFilter, { nullable: true })
  id?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  title?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  publishedDate?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  publisher?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  coverImage?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  description?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  language?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  pageCount?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  workId?: InstanceType<typeof StringFilter>;
  @Field(() => AuthorListRelationFilter, { nullable: true })
  authors?: InstanceType<typeof AuthorListRelationFilter>;
  @Field(() => IdentifierRelationFilter, { nullable: true })
  identifier?: InstanceType<typeof IdentifierRelationFilter>;
  @Field(() => UserBookListRelationFilter, { nullable: true })
  userBook?: InstanceType<typeof UserBookListRelationFilter>;
  @Field(() => ReviewListRelationFilter, { nullable: true })
  reviews?: InstanceType<typeof ReviewListRelationFilter>;
  @Field(() => AuditLogListRelationFilter, { nullable: true })
  logs?: InstanceType<typeof AuditLogListRelationFilter>;
  @Field(() => WorkRelationFilter, { nullable: true })
  work?: InstanceType<typeof WorkRelationFilter>;
}

@ObjectType()
export class Book {
  @Field(() => ID, { nullable: false })
  id!: number;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  publishedDate!: string | null;
  @Field(() => String, { nullable: true })
  publisher!: string | null;
  @Field(() => String, { nullable: true })
  coverImage!: string | null;
  @Field(() => String, { nullable: true })
  description!: string | null;
  @Field(() => String, { nullable: true })
  language!: string | null;
  @Field(() => Int, { nullable: true })
  pageCount!: number | null;
  @Field(() => String, { nullable: true })
  workId!: string | null;
  @Field(() => [Author], { nullable: true })
  authors?: Array<Author>;
  @Field(() => Identifier, { nullable: true })
  identifier?: InstanceType<typeof Identifier> | null;
  @Field(() => [UserBook], { nullable: true })
  userBook?: Array<UserBook>;
  @Field(() => [Review], { nullable: true })
  reviews?: Array<Review>;
  @Field(() => [AuditLog], { nullable: true })
  logs?: Array<AuditLog>;
  @Field(() => Work, { nullable: true })
  work?: InstanceType<typeof Work> | null;
  @Field(() => BookCount, { nullable: false })
  _count?: InstanceType<typeof BookCount>;
}

@ArgsType()
export class CreateManyBookArgs {
  @Field(() => [BookCreateManyInput], { nullable: false })
  @Type(() => BookCreateManyInput)
  @ValidateNested()
  data!: Array<BookCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneBookArgs {
  @Field(() => BookCreateInput, { nullable: false })
  @Type(() => BookCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof BookCreateInput>;
}

@ArgsType()
export class DeleteManyBookArgs {
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof BookWhereInput>;
}

@ArgsType()
export class DeleteOneBookArgs {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstBookOrThrowArgs {
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof BookWhereInput>;
  @Field(() => [BookOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BookOrderByWithRelationInput>;
  @Field(() => BookWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BookScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BookScalarFieldEnum>;
}

@ArgsType()
export class FindFirstBookArgs {
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof BookWhereInput>;
  @Field(() => [BookOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BookOrderByWithRelationInput>;
  @Field(() => BookWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BookScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BookScalarFieldEnum>;
}

@ArgsType()
export class FindManyBookArgs {
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof BookWhereInput>;
  @Field(() => [BookOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BookOrderByWithRelationInput>;
  @Field(() => BookWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BookScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BookScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueBookOrThrowArgs {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueBookArgs {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyBookArgs {
  @Field(() => BookUpdateManyMutationInput, { nullable: false })
  @Type(() => BookUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof BookUpdateManyMutationInput>;
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof BookWhereInput>;
}

@ArgsType()
export class UpdateOneBookArgs {
  @Field(() => BookUpdateInput, { nullable: false })
  @Type(() => BookUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof BookUpdateInput>;
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneBookArgs {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
  @Field(() => BookCreateInput, { nullable: false })
  @Type(() => BookCreateInput)
  create!: InstanceType<typeof BookCreateInput>;
  @Field(() => BookUpdateInput, { nullable: false })
  @Type(() => BookUpdateInput)
  update!: InstanceType<typeof BookUpdateInput>;
}

@ObjectType()
export class AggregateComment {
  @Field(() => CommentCountAggregate, { nullable: true })
  _count?: InstanceType<typeof CommentCountAggregate>;
  @Field(() => CommentMinAggregate, { nullable: true })
  _min?: InstanceType<typeof CommentMinAggregate>;
  @Field(() => CommentMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof CommentMaxAggregate>;
}

@ArgsType()
export class CommentAggregateArgs {
  @Field(() => CommentWhereInput, { nullable: true })
  @Type(() => CommentWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof CommentWhereInput>;
  @Field(() => [CommentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CommentOrderByWithRelationInput>;
  @Field(() => CommentWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => CommentCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof CommentCountAggregateInput>;
  @Field(() => CommentMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof CommentMinAggregateInput>;
  @Field(() => CommentMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof CommentMaxAggregateInput>;
}

@InputType()
export class CommentCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  content?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  reviewId?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class CommentCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  content!: number;
  @Field(() => Int, { nullable: false })
  userId!: number;
  @Field(() => Int, { nullable: false })
  reviewId!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class CommentCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  reviewId?: keyof typeof SortOrder;
}

@InputType()
export class CommentCreateManyReviewInputEnvelope {
  @Field(() => [CommentCreateManyReviewInput], { nullable: false })
  @Type(() => CommentCreateManyReviewInput)
  data!: Array<CommentCreateManyReviewInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CommentCreateManyReviewInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class CommentCreateManyUserInputEnvelope {
  @Field(() => [CommentCreateManyUserInput], { nullable: false })
  @Type(() => CommentCreateManyUserInput)
  data!: Array<CommentCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CommentCreateManyUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  reviewId?: string;
}

@InputType()
export class CommentCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  reviewId?: string;
}

@InputType()
export class CommentCreateNestedManyWithoutReviewInput {
  @Field(() => [CommentCreateWithoutReviewInput], { nullable: true })
  @Type(() => CommentCreateWithoutReviewInput)
  create?: Array<CommentCreateWithoutReviewInput>;
  @Field(() => [CommentCreateOrConnectWithoutReviewInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutReviewInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutReviewInput>;
  @Field(() => CommentCreateManyReviewInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyReviewInputEnvelope)
  createMany?: InstanceType<typeof CommentCreateManyReviewInputEnvelope>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentCreateNestedManyWithoutUserInput {
  @Field(() => [CommentCreateWithoutUserInput], { nullable: true })
  @Type(() => CommentCreateWithoutUserInput)
  create?: Array<CommentCreateWithoutUserInput>;
  @Field(() => [CommentCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
  @Field(() => CommentCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof CommentCreateManyUserInputEnvelope>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentCreateOrConnectWithoutReviewInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
  @Field(() => CommentCreateWithoutReviewInput, { nullable: false })
  @Type(() => CommentCreateWithoutReviewInput)
  create!: InstanceType<typeof CommentCreateWithoutReviewInput>;
}

@InputType()
export class CommentCreateOrConnectWithoutUserInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
  @Field(() => CommentCreateWithoutUserInput, { nullable: false })
  @Type(() => CommentCreateWithoutUserInput)
  create!: InstanceType<typeof CommentCreateWithoutUserInput>;
}

@InputType()
export class CommentCreateWithoutReviewInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => UserCreateNestedOneWithoutCommentsInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutCommentsInput>;
}

@InputType()
export class CommentCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => ReviewCreateNestedOneWithoutCommentsInput, { nullable: true })
  review?: InstanceType<typeof ReviewCreateNestedOneWithoutCommentsInput>;
}

@InputType()
export class CommentCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => UserCreateNestedOneWithoutCommentsInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutCommentsInput>;
  @Field(() => ReviewCreateNestedOneWithoutCommentsInput, { nullable: true })
  review?: InstanceType<typeof ReviewCreateNestedOneWithoutCommentsInput>;
}

@ArgsType()
export class CommentGroupByArgs {
  @Field(() => CommentWhereInput, { nullable: true })
  @Type(() => CommentWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof CommentWhereInput>;
  @Field(() => [CommentOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<CommentOrderByWithAggregationInput>;
  @Field(() => [CommentScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof CommentScalarFieldEnum>;
  @Field(() => CommentScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof CommentScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => CommentCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof CommentCountAggregateInput>;
  @Field(() => CommentMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof CommentMinAggregateInput>;
  @Field(() => CommentMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof CommentMaxAggregateInput>;
}

@ObjectType()
export class CommentGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  reviewId?: string;
  @Field(() => CommentCountAggregate, { nullable: true })
  _count?: InstanceType<typeof CommentCountAggregate>;
  @Field(() => CommentMinAggregate, { nullable: true })
  _min?: InstanceType<typeof CommentMinAggregate>;
  @Field(() => CommentMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof CommentMaxAggregate>;
}

@InputType()
export class CommentListRelationFilter {
  @Field(() => CommentWhereInput, { nullable: true })
  every?: InstanceType<typeof CommentWhereInput>;
  @Field(() => CommentWhereInput, { nullable: true })
  some?: InstanceType<typeof CommentWhereInput>;
  @Field(() => CommentWhereInput, { nullable: true })
  none?: InstanceType<typeof CommentWhereInput>;
}

@InputType()
export class CommentMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  content?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  reviewId?: true;
}

@ObjectType()
export class CommentMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  reviewId?: string;
}

@InputType()
export class CommentMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  reviewId?: keyof typeof SortOrder;
}

@InputType()
export class CommentMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  content?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  reviewId?: true;
}

@ObjectType()
export class CommentMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  reviewId?: string;
}

@InputType()
export class CommentMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  reviewId?: keyof typeof SortOrder;
}

@InputType()
export class CommentOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class CommentOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  content?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  userId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  reviewId?: InstanceType<typeof SortOrderInput>;
  @Field(() => CommentCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof CommentCountOrderByAggregateInput>;
  @Field(() => CommentMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof CommentMaxOrderByAggregateInput>;
  @Field(() => CommentMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof CommentMinOrderByAggregateInput>;
}

@InputType()
export class CommentOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  content?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  userId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  reviewId?: InstanceType<typeof SortOrderInput>;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UserOrderByWithRelationInput>;
  @Field(() => ReviewOrderByWithRelationInput, { nullable: true })
  review?: InstanceType<typeof ReviewOrderByWithRelationInput>;
}

@InputType()
export class CommentScalarWhereWithAggregatesInput {
  @Field(() => [CommentScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<CommentScalarWhereWithAggregatesInput>;
  @Field(() => [CommentScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<CommentScalarWhereWithAggregatesInput>;
  @Field(() => [CommentScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<CommentScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  content?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  reviewId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class CommentScalarWhereInput {
  @Field(() => [CommentScalarWhereInput], { nullable: true })
  AND?: Array<CommentScalarWhereInput>;
  @Field(() => [CommentScalarWhereInput], { nullable: true })
  OR?: Array<CommentScalarWhereInput>;
  @Field(() => [CommentScalarWhereInput], { nullable: true })
  NOT?: Array<CommentScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  content?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  reviewId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class CommentUncheckedCreateNestedManyWithoutReviewInput {
  @Field(() => [CommentCreateWithoutReviewInput], { nullable: true })
  @Type(() => CommentCreateWithoutReviewInput)
  create?: Array<CommentCreateWithoutReviewInput>;
  @Field(() => [CommentCreateOrConnectWithoutReviewInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutReviewInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutReviewInput>;
  @Field(() => CommentCreateManyReviewInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyReviewInputEnvelope)
  createMany?: InstanceType<typeof CommentCreateManyReviewInputEnvelope>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [CommentCreateWithoutUserInput], { nullable: true })
  @Type(() => CommentCreateWithoutUserInput)
  create?: Array<CommentCreateWithoutUserInput>;
  @Field(() => [CommentCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
  @Field(() => CommentCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof CommentCreateManyUserInputEnvelope>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentUncheckedCreateWithoutReviewInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class CommentUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  reviewId?: string;
}

@InputType()
export class CommentUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  reviewId?: string;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutReviewNestedInput {
  @Field(() => [CommentCreateWithoutReviewInput], { nullable: true })
  @Type(() => CommentCreateWithoutReviewInput)
  create?: Array<CommentCreateWithoutReviewInput>;
  @Field(() => [CommentCreateOrConnectWithoutReviewInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutReviewInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutReviewInput>;
  @Field(() => [CommentUpsertWithWhereUniqueWithoutReviewInput], {
    nullable: true,
  })
  @Type(() => CommentUpsertWithWhereUniqueWithoutReviewInput)
  upsert?: Array<CommentUpsertWithWhereUniqueWithoutReviewInput>;
  @Field(() => CommentCreateManyReviewInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyReviewInputEnvelope)
  createMany?: InstanceType<typeof CommentCreateManyReviewInputEnvelope>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentUpdateWithWhereUniqueWithoutReviewInput], {
    nullable: true,
  })
  @Type(() => CommentUpdateWithWhereUniqueWithoutReviewInput)
  update?: Array<CommentUpdateWithWhereUniqueWithoutReviewInput>;
  @Field(() => [CommentUpdateManyWithWhereWithoutReviewInput], {
    nullable: true,
  })
  @Type(() => CommentUpdateManyWithWhereWithoutReviewInput)
  updateMany?: Array<CommentUpdateManyWithWhereWithoutReviewInput>;
  @Field(() => [CommentScalarWhereInput], { nullable: true })
  @Type(() => CommentScalarWhereInput)
  deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutReviewInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [CommentCreateWithoutUserInput], { nullable: true })
  @Type(() => CommentCreateWithoutUserInput)
  create?: Array<CommentCreateWithoutUserInput>;
  @Field(() => [CommentCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
  @Field(() => [CommentUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => CommentUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<CommentUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => CommentCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof CommentCreateManyUserInputEnvelope>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => CommentUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<CommentUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [CommentUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => CommentUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<CommentUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [CommentScalarWhereInput], { nullable: true })
  @Type(() => CommentScalarWhereInput)
  deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  reviewId?: string;
}

@InputType()
export class CommentUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  reviewId?: string;
}

@InputType()
export class CommentUncheckedUpdateWithoutReviewInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class CommentUncheckedUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  reviewId?: string;
}

@InputType()
export class CommentUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  reviewId?: string;
}

@InputType()
export class CommentUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
}

@InputType()
export class CommentUpdateManyWithWhereWithoutReviewInput {
  @Field(() => CommentScalarWhereInput, { nullable: false })
  @Type(() => CommentScalarWhereInput)
  where!: InstanceType<typeof CommentScalarWhereInput>;
  @Field(() => CommentUpdateManyMutationInput, { nullable: false })
  @Type(() => CommentUpdateManyMutationInput)
  data!: InstanceType<typeof CommentUpdateManyMutationInput>;
}

@InputType()
export class CommentUpdateManyWithWhereWithoutUserInput {
  @Field(() => CommentScalarWhereInput, { nullable: false })
  @Type(() => CommentScalarWhereInput)
  where!: InstanceType<typeof CommentScalarWhereInput>;
  @Field(() => CommentUpdateManyMutationInput, { nullable: false })
  @Type(() => CommentUpdateManyMutationInput)
  data!: InstanceType<typeof CommentUpdateManyMutationInput>;
}

@InputType()
export class CommentUpdateManyWithoutReviewNestedInput {
  @Field(() => [CommentCreateWithoutReviewInput], { nullable: true })
  @Type(() => CommentCreateWithoutReviewInput)
  create?: Array<CommentCreateWithoutReviewInput>;
  @Field(() => [CommentCreateOrConnectWithoutReviewInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutReviewInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutReviewInput>;
  @Field(() => [CommentUpsertWithWhereUniqueWithoutReviewInput], {
    nullable: true,
  })
  @Type(() => CommentUpsertWithWhereUniqueWithoutReviewInput)
  upsert?: Array<CommentUpsertWithWhereUniqueWithoutReviewInput>;
  @Field(() => CommentCreateManyReviewInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyReviewInputEnvelope)
  createMany?: InstanceType<typeof CommentCreateManyReviewInputEnvelope>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentUpdateWithWhereUniqueWithoutReviewInput], {
    nullable: true,
  })
  @Type(() => CommentUpdateWithWhereUniqueWithoutReviewInput)
  update?: Array<CommentUpdateWithWhereUniqueWithoutReviewInput>;
  @Field(() => [CommentUpdateManyWithWhereWithoutReviewInput], {
    nullable: true,
  })
  @Type(() => CommentUpdateManyWithWhereWithoutReviewInput)
  updateMany?: Array<CommentUpdateManyWithWhereWithoutReviewInput>;
  @Field(() => [CommentScalarWhereInput], { nullable: true })
  @Type(() => CommentScalarWhereInput)
  deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUpdateManyWithoutUserNestedInput {
  @Field(() => [CommentCreateWithoutUserInput], { nullable: true })
  @Type(() => CommentCreateWithoutUserInput)
  create?: Array<CommentCreateWithoutUserInput>;
  @Field(() => [CommentCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
  @Field(() => [CommentUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => CommentUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<CommentUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => CommentCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof CommentCreateManyUserInputEnvelope>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
  @Field(() => [CommentUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => CommentUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<CommentUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [CommentUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => CommentUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<CommentUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [CommentScalarWhereInput], { nullable: true })
  @Type(() => CommentScalarWhereInput)
  deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUpdateWithWhereUniqueWithoutReviewInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
  @Field(() => CommentUpdateWithoutReviewInput, { nullable: false })
  @Type(() => CommentUpdateWithoutReviewInput)
  data!: InstanceType<typeof CommentUpdateWithoutReviewInput>;
}

@InputType()
export class CommentUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
  @Field(() => CommentUpdateWithoutUserInput, { nullable: false })
  @Type(() => CommentUpdateWithoutUserInput)
  data!: InstanceType<typeof CommentUpdateWithoutUserInput>;
}

@InputType()
export class CommentUpdateWithoutReviewInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => UserUpdateOneWithoutCommentsNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutCommentsNestedInput>;
}

@InputType()
export class CommentUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => ReviewUpdateOneWithoutCommentsNestedInput, { nullable: true })
  review?: InstanceType<typeof ReviewUpdateOneWithoutCommentsNestedInput>;
}

@InputType()
export class CommentUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => UserUpdateOneWithoutCommentsNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutCommentsNestedInput>;
  @Field(() => ReviewUpdateOneWithoutCommentsNestedInput, { nullable: true })
  review?: InstanceType<typeof ReviewUpdateOneWithoutCommentsNestedInput>;
}

@InputType()
export class CommentUpsertWithWhereUniqueWithoutReviewInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
  @Field(() => CommentUpdateWithoutReviewInput, { nullable: false })
  @Type(() => CommentUpdateWithoutReviewInput)
  update!: InstanceType<typeof CommentUpdateWithoutReviewInput>;
  @Field(() => CommentCreateWithoutReviewInput, { nullable: false })
  @Type(() => CommentCreateWithoutReviewInput)
  create!: InstanceType<typeof CommentCreateWithoutReviewInput>;
}

@InputType()
export class CommentUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
  @Field(() => CommentUpdateWithoutUserInput, { nullable: false })
  @Type(() => CommentUpdateWithoutUserInput)
  update!: InstanceType<typeof CommentUpdateWithoutUserInput>;
  @Field(() => CommentCreateWithoutUserInput, { nullable: false })
  @Type(() => CommentCreateWithoutUserInput)
  create!: InstanceType<typeof CommentCreateWithoutUserInput>;
}

@InputType()
export class CommentWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => [CommentWhereInput], { nullable: true })
  AND?: Array<CommentWhereInput>;
  @Field(() => [CommentWhereInput], { nullable: true })
  OR?: Array<CommentWhereInput>;
  @Field(() => [CommentWhereInput], { nullable: true })
  NOT?: Array<CommentWhereInput>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  content?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  reviewId?: InstanceType<typeof StringFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
  @Field(() => ReviewRelationFilter, { nullable: true })
  review?: InstanceType<typeof ReviewRelationFilter>;
}

@InputType()
export class CommentWhereInput {
  @Field(() => [CommentWhereInput], { nullable: true })
  AND?: Array<CommentWhereInput>;
  @Field(() => [CommentWhereInput], { nullable: true })
  OR?: Array<CommentWhereInput>;
  @Field(() => [CommentWhereInput], { nullable: true })
  NOT?: Array<CommentWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  content?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  reviewId?: InstanceType<typeof StringFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
  @Field(() => ReviewRelationFilter, { nullable: true })
  review?: InstanceType<typeof ReviewRelationFilter>;
}

@ObjectType()
export class Comment {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => String, { nullable: true })
  content!: string | null;
  @Field(() => String, { nullable: true })
  userId!: string | null;
  @Field(() => String, { nullable: true })
  reviewId!: string | null;
  @Field(() => User, { nullable: true })
  user?: InstanceType<typeof User> | null;
  @Field(() => Review, { nullable: true })
  review?: InstanceType<typeof Review> | null;
}

@ArgsType()
export class CreateManyCommentArgs {
  @Field(() => [CommentCreateManyInput], { nullable: false })
  @Type(() => CommentCreateManyInput)
  @ValidateNested()
  data!: Array<CommentCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCommentArgs {
  @Field(() => CommentCreateInput, { nullable: true })
  @Type(() => CommentCreateInput)
  @ValidateNested()
  data?: InstanceType<typeof CommentCreateInput>;
}

@ArgsType()
export class DeleteManyCommentArgs {
  @Field(() => CommentWhereInput, { nullable: true })
  @Type(() => CommentWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof CommentWhereInput>;
}

@ArgsType()
export class DeleteOneCommentArgs {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstCommentOrThrowArgs {
  @Field(() => CommentWhereInput, { nullable: true })
  @Type(() => CommentWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof CommentWhereInput>;
  @Field(() => [CommentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CommentOrderByWithRelationInput>;
  @Field(() => CommentWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [CommentScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CommentScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCommentArgs {
  @Field(() => CommentWhereInput, { nullable: true })
  @Type(() => CommentWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof CommentWhereInput>;
  @Field(() => [CommentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CommentOrderByWithRelationInput>;
  @Field(() => CommentWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [CommentScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CommentScalarFieldEnum>;
}

@ArgsType()
export class FindManyCommentArgs {
  @Field(() => CommentWhereInput, { nullable: true })
  @Type(() => CommentWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof CommentWhereInput>;
  @Field(() => [CommentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CommentOrderByWithRelationInput>;
  @Field(() => CommentWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [CommentScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CommentScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCommentOrThrowArgs {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueCommentArgs {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyCommentArgs {
  @Field(() => CommentUpdateManyMutationInput, { nullable: false })
  @Type(() => CommentUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof CommentUpdateManyMutationInput>;
  @Field(() => CommentWhereInput, { nullable: true })
  @Type(() => CommentWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof CommentWhereInput>;
}

@ArgsType()
export class UpdateOneCommentArgs {
  @Field(() => CommentUpdateInput, { nullable: false })
  @Type(() => CommentUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof CommentUpdateInput>;
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneCommentArgs {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
  @Field(() => CommentCreateInput, { nullable: false })
  @Type(() => CommentCreateInput)
  create!: InstanceType<typeof CommentCreateInput>;
  @Field(() => CommentUpdateInput, { nullable: false })
  @Type(() => CommentUpdateInput)
  update!: InstanceType<typeof CommentUpdateInput>;
}

@ObjectType()
export class AggregateIdentifier {
  @Field(() => IdentifierCountAggregate, { nullable: true })
  _count?: InstanceType<typeof IdentifierCountAggregate>;
  @Field(() => IdentifierAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof IdentifierAvgAggregate>;
  @Field(() => IdentifierSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof IdentifierSumAggregate>;
  @Field(() => IdentifierMinAggregate, { nullable: true })
  _min?: InstanceType<typeof IdentifierMinAggregate>;
  @Field(() => IdentifierMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof IdentifierMaxAggregate>;
}

@ArgsType()
export class CreateManyIdentifierArgs {
  @Field(() => [IdentifierCreateManyInput], { nullable: false })
  @Type(() => IdentifierCreateManyInput)
  @ValidateNested()
  data!: Array<IdentifierCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneIdentifierArgs {
  @Field(() => IdentifierCreateInput, { nullable: false })
  @Type(() => IdentifierCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof IdentifierCreateInput>;
}

@ArgsType()
export class DeleteManyIdentifierArgs {
  @Field(() => IdentifierWhereInput, { nullable: true })
  @Type(() => IdentifierWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof IdentifierWhereInput>;
}

@ArgsType()
export class DeleteOneIdentifierArgs {
  @Field(() => IdentifierWhereUniqueInput, { nullable: false })
  @Type(() => IdentifierWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
}

@ArgsType()
export class FindFirstIdentifierOrThrowArgs {
  @Field(() => IdentifierWhereInput, { nullable: true })
  @Type(() => IdentifierWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof IdentifierWhereInput>;
  @Field(() => [IdentifierOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<IdentifierOrderByWithRelationInput>;
  @Field(() => IdentifierWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [IdentifierScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof IdentifierScalarFieldEnum>;
}

@ArgsType()
export class FindFirstIdentifierArgs {
  @Field(() => IdentifierWhereInput, { nullable: true })
  @Type(() => IdentifierWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof IdentifierWhereInput>;
  @Field(() => [IdentifierOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<IdentifierOrderByWithRelationInput>;
  @Field(() => IdentifierWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [IdentifierScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof IdentifierScalarFieldEnum>;
}

@ArgsType()
export class FindManyIdentifierArgs {
  @Field(() => IdentifierWhereInput, { nullable: true })
  @Type(() => IdentifierWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof IdentifierWhereInput>;
  @Field(() => [IdentifierOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<IdentifierOrderByWithRelationInput>;
  @Field(() => IdentifierWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [IdentifierScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof IdentifierScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueIdentifierOrThrowArgs {
  @Field(() => IdentifierWhereUniqueInput, { nullable: false })
  @Type(() => IdentifierWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
}

@ArgsType()
export class FindUniqueIdentifierArgs {
  @Field(() => IdentifierWhereUniqueInput, { nullable: false })
  @Type(() => IdentifierWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
}

@ArgsType()
export class IdentifierAggregateArgs {
  @Field(() => IdentifierWhereInput, { nullable: true })
  @Type(() => IdentifierWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof IdentifierWhereInput>;
  @Field(() => [IdentifierOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<IdentifierOrderByWithRelationInput>;
  @Field(() => IdentifierWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => IdentifierCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof IdentifierCountAggregateInput>;
  @Field(() => IdentifierAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof IdentifierAvgAggregateInput>;
  @Field(() => IdentifierSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof IdentifierSumAggregateInput>;
  @Field(() => IdentifierMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof IdentifierMinAggregateInput>;
  @Field(() => IdentifierMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof IdentifierMaxAggregateInput>;
}

@InputType()
export class IdentifierAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
}

@ObjectType()
export class IdentifierAvgAggregate {
  @Field(() => Float, { nullable: true })
  bookId?: number;
}

@InputType()
export class IdentifierAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
}

@InputType()
export class IdentifierCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
  @Field(() => Boolean, { nullable: true })
  isbn10?: true;
  @Field(() => Boolean, { nullable: true })
  isbn13?: true;
  @Field(() => Boolean, { nullable: true })
  googleBooks?: true;
  @Field(() => Boolean, { nullable: true })
  openLibrary?: true;
  @Field(() => Boolean, { nullable: true })
  goodreads?: true;
  @Field(() => Boolean, { nullable: true })
  amazon?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class IdentifierCountAggregate {
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => Int, { nullable: false })
  isbn10!: number;
  @Field(() => Int, { nullable: false })
  isbn13!: number;
  @Field(() => Int, { nullable: false })
  googleBooks!: number;
  @Field(() => Int, { nullable: false })
  openLibrary!: number;
  @Field(() => Int, { nullable: false })
  goodreads!: number;
  @Field(() => Int, { nullable: false })
  amazon!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class IdentifierCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isbn10?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isbn13?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  googleBooks?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  openLibrary?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  goodreads?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  amazon?: keyof typeof SortOrder;
}

@InputType()
export class IdentifierCreateManyInput {
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
}

@InputType()
export class IdentifierCreateNestedOneWithoutBookInput {
  @Field(() => IdentifierCreateWithoutBookInput, { nullable: true })
  @Type(() => IdentifierCreateWithoutBookInput)
  create?: InstanceType<typeof IdentifierCreateWithoutBookInput>;
  @Field(() => IdentifierCreateOrConnectWithoutBookInput, { nullable: true })
  @Type(() => IdentifierCreateOrConnectWithoutBookInput)
  connectOrCreate?: InstanceType<
    typeof IdentifierCreateOrConnectWithoutBookInput
  >;
  @Field(() => IdentifierWhereUniqueInput, { nullable: true })
  @Type(() => IdentifierWhereUniqueInput)
  connect?: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
}

@InputType()
export class IdentifierCreateOrConnectWithoutBookInput {
  @Field(() => IdentifierWhereUniqueInput, { nullable: false })
  @Type(() => IdentifierWhereUniqueInput)
  where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
  @Field(() => IdentifierCreateWithoutBookInput, { nullable: false })
  @Type(() => IdentifierCreateWithoutBookInput)
  create!: InstanceType<typeof IdentifierCreateWithoutBookInput>;
}

@InputType()
export class IdentifierCreateWithoutBookInput {
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
}

@InputType()
export class IdentifierCreateInput {
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
  @Field(() => BookCreateNestedOneWithoutIdentifierInput, { nullable: true })
  book?: InstanceType<typeof BookCreateNestedOneWithoutIdentifierInput>;
}

@ArgsType()
export class IdentifierGroupByArgs {
  @Field(() => IdentifierWhereInput, { nullable: true })
  @Type(() => IdentifierWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof IdentifierWhereInput>;
  @Field(() => [IdentifierOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<IdentifierOrderByWithAggregationInput>;
  @Field(() => [IdentifierScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof IdentifierScalarFieldEnum>;
  @Field(() => IdentifierScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof IdentifierScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => IdentifierCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof IdentifierCountAggregateInput>;
  @Field(() => IdentifierAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof IdentifierAvgAggregateInput>;
  @Field(() => IdentifierSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof IdentifierSumAggregateInput>;
  @Field(() => IdentifierMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof IdentifierMinAggregateInput>;
  @Field(() => IdentifierMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof IdentifierMaxAggregateInput>;
}

@ObjectType()
export class IdentifierGroupBy {
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
  @Field(() => IdentifierCountAggregate, { nullable: true })
  _count?: InstanceType<typeof IdentifierCountAggregate>;
  @Field(() => IdentifierAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof IdentifierAvgAggregate>;
  @Field(() => IdentifierSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof IdentifierSumAggregate>;
  @Field(() => IdentifierMinAggregate, { nullable: true })
  _min?: InstanceType<typeof IdentifierMinAggregate>;
  @Field(() => IdentifierMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof IdentifierMaxAggregate>;
}

@InputType()
export class IdentifierMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
  @Field(() => Boolean, { nullable: true })
  isbn10?: true;
  @Field(() => Boolean, { nullable: true })
  isbn13?: true;
  @Field(() => Boolean, { nullable: true })
  googleBooks?: true;
  @Field(() => Boolean, { nullable: true })
  openLibrary?: true;
  @Field(() => Boolean, { nullable: true })
  goodreads?: true;
  @Field(() => Boolean, { nullable: true })
  amazon?: true;
}

@ObjectType()
export class IdentifierMaxAggregate {
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
}

@InputType()
export class IdentifierMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isbn10?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isbn13?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  googleBooks?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  openLibrary?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  goodreads?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  amazon?: keyof typeof SortOrder;
}

@InputType()
export class IdentifierMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
  @Field(() => Boolean, { nullable: true })
  isbn10?: true;
  @Field(() => Boolean, { nullable: true })
  isbn13?: true;
  @Field(() => Boolean, { nullable: true })
  googleBooks?: true;
  @Field(() => Boolean, { nullable: true })
  openLibrary?: true;
  @Field(() => Boolean, { nullable: true })
  goodreads?: true;
  @Field(() => Boolean, { nullable: true })
  amazon?: true;
}

@ObjectType()
export class IdentifierMinAggregate {
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
}

@InputType()
export class IdentifierMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isbn10?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isbn13?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  googleBooks?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  openLibrary?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  goodreads?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  amazon?: keyof typeof SortOrder;
}

@InputType()
export class IdentifierOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  isbn10?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  isbn13?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  googleBooks?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  openLibrary?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  goodreads?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  amazon?: InstanceType<typeof SortOrderInput>;
  @Field(() => IdentifierCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof IdentifierCountOrderByAggregateInput>;
  @Field(() => IdentifierAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof IdentifierAvgOrderByAggregateInput>;
  @Field(() => IdentifierMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof IdentifierMaxOrderByAggregateInput>;
  @Field(() => IdentifierMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof IdentifierMinOrderByAggregateInput>;
  @Field(() => IdentifierSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof IdentifierSumOrderByAggregateInput>;
}

@InputType()
export class IdentifierOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  isbn10?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  isbn13?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  googleBooks?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  openLibrary?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  goodreads?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  amazon?: InstanceType<typeof SortOrderInput>;
  @Field(() => BookOrderByWithRelationInput, { nullable: true })
  book?: InstanceType<typeof BookOrderByWithRelationInput>;
}

@InputType()
export class IdentifierRelationFilter {
  @Field(() => IdentifierWhereInput, { nullable: true })
  is?: InstanceType<typeof IdentifierWhereInput>;
  @Field(() => IdentifierWhereInput, { nullable: true })
  isNot?: InstanceType<typeof IdentifierWhereInput>;
}

@InputType()
export class IdentifierScalarWhereWithAggregatesInput {
  @Field(() => [IdentifierScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<IdentifierScalarWhereWithAggregatesInput>;
  @Field(() => [IdentifierScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<IdentifierScalarWhereWithAggregatesInput>;
  @Field(() => [IdentifierScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<IdentifierScalarWhereWithAggregatesInput>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  bookId?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  isbn10?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  isbn13?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  googleBooks?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  openLibrary?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  goodreads?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  amazon?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class IdentifierSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
}

@ObjectType()
export class IdentifierSumAggregate {
  @Field(() => Int, { nullable: true })
  bookId?: number;
}

@InputType()
export class IdentifierSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
}

@InputType()
export class IdentifierUncheckedCreateNestedOneWithoutBookInput {
  @Field(() => IdentifierCreateWithoutBookInput, { nullable: true })
  @Type(() => IdentifierCreateWithoutBookInput)
  create?: InstanceType<typeof IdentifierCreateWithoutBookInput>;
  @Field(() => IdentifierCreateOrConnectWithoutBookInput, { nullable: true })
  @Type(() => IdentifierCreateOrConnectWithoutBookInput)
  connectOrCreate?: InstanceType<
    typeof IdentifierCreateOrConnectWithoutBookInput
  >;
  @Field(() => IdentifierWhereUniqueInput, { nullable: true })
  @Type(() => IdentifierWhereUniqueInput)
  connect?: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
}

@InputType()
export class IdentifierUncheckedCreateWithoutBookInput {
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
}

@InputType()
export class IdentifierUncheckedCreateInput {
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
}

@InputType()
export class IdentifierUncheckedUpdateManyInput {
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
}

@InputType()
export class IdentifierUncheckedUpdateOneWithoutBookNestedInput {
  @Field(() => IdentifierCreateWithoutBookInput, { nullable: true })
  @Type(() => IdentifierCreateWithoutBookInput)
  create?: InstanceType<typeof IdentifierCreateWithoutBookInput>;
  @Field(() => IdentifierCreateOrConnectWithoutBookInput, { nullable: true })
  @Type(() => IdentifierCreateOrConnectWithoutBookInput)
  connectOrCreate?: InstanceType<
    typeof IdentifierCreateOrConnectWithoutBookInput
  >;
  @Field(() => IdentifierUpsertWithoutBookInput, { nullable: true })
  @Type(() => IdentifierUpsertWithoutBookInput)
  upsert?: InstanceType<typeof IdentifierUpsertWithoutBookInput>;
  @Field(() => IdentifierWhereInput, { nullable: true })
  @Type(() => IdentifierWhereInput)
  disconnect?: InstanceType<typeof IdentifierWhereInput>;
  @Field(() => IdentifierWhereInput, { nullable: true })
  @Type(() => IdentifierWhereInput)
  delete?: InstanceType<typeof IdentifierWhereInput>;
  @Field(() => IdentifierWhereUniqueInput, { nullable: true })
  @Type(() => IdentifierWhereUniqueInput)
  connect?: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
  @Field(() => IdentifierUpdateToOneWithWhereWithoutBookInput, {
    nullable: true,
  })
  @Type(() => IdentifierUpdateToOneWithWhereWithoutBookInput)
  update?: InstanceType<typeof IdentifierUpdateToOneWithWhereWithoutBookInput>;
}

@InputType()
export class IdentifierUncheckedUpdateWithoutBookInput {
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
}

@InputType()
export class IdentifierUncheckedUpdateInput {
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
}

@InputType()
export class IdentifierUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
}

@InputType()
export class IdentifierUpdateOneWithoutBookNestedInput {
  @Field(() => IdentifierCreateWithoutBookInput, { nullable: true })
  @Type(() => IdentifierCreateWithoutBookInput)
  create?: InstanceType<typeof IdentifierCreateWithoutBookInput>;
  @Field(() => IdentifierCreateOrConnectWithoutBookInput, { nullable: true })
  @Type(() => IdentifierCreateOrConnectWithoutBookInput)
  connectOrCreate?: InstanceType<
    typeof IdentifierCreateOrConnectWithoutBookInput
  >;
  @Field(() => IdentifierUpsertWithoutBookInput, { nullable: true })
  @Type(() => IdentifierUpsertWithoutBookInput)
  upsert?: InstanceType<typeof IdentifierUpsertWithoutBookInput>;
  @Field(() => IdentifierWhereInput, { nullable: true })
  @Type(() => IdentifierWhereInput)
  disconnect?: InstanceType<typeof IdentifierWhereInput>;
  @Field(() => IdentifierWhereInput, { nullable: true })
  @Type(() => IdentifierWhereInput)
  delete?: InstanceType<typeof IdentifierWhereInput>;
  @Field(() => IdentifierWhereUniqueInput, { nullable: true })
  @Type(() => IdentifierWhereUniqueInput)
  connect?: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
  @Field(() => IdentifierUpdateToOneWithWhereWithoutBookInput, {
    nullable: true,
  })
  @Type(() => IdentifierUpdateToOneWithWhereWithoutBookInput)
  update?: InstanceType<typeof IdentifierUpdateToOneWithWhereWithoutBookInput>;
}

@InputType()
export class IdentifierUpdateToOneWithWhereWithoutBookInput {
  @Field(() => IdentifierWhereInput, { nullable: true })
  @Type(() => IdentifierWhereInput)
  where?: InstanceType<typeof IdentifierWhereInput>;
  @Field(() => IdentifierUpdateWithoutBookInput, { nullable: false })
  @Type(() => IdentifierUpdateWithoutBookInput)
  data!: InstanceType<typeof IdentifierUpdateWithoutBookInput>;
}

@InputType()
export class IdentifierUpdateWithoutBookInput {
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
}

@InputType()
export class IdentifierUpdateInput {
  @Field(() => String, { nullable: true })
  isbn10?: string;
  @Field(() => String, { nullable: true })
  isbn13?: string;
  @Field(() => String, { nullable: true })
  googleBooks?: string;
  @Field(() => String, { nullable: true })
  openLibrary?: string;
  @Field(() => String, { nullable: true })
  goodreads?: string;
  @Field(() => String, { nullable: true })
  amazon?: string;
  @Field(() => BookUpdateOneWithoutIdentifierNestedInput, { nullable: true })
  book?: InstanceType<typeof BookUpdateOneWithoutIdentifierNestedInput>;
}

@InputType()
export class IdentifierUpsertWithoutBookInput {
  @Field(() => IdentifierUpdateWithoutBookInput, { nullable: false })
  @Type(() => IdentifierUpdateWithoutBookInput)
  update!: InstanceType<typeof IdentifierUpdateWithoutBookInput>;
  @Field(() => IdentifierCreateWithoutBookInput, { nullable: false })
  @Type(() => IdentifierCreateWithoutBookInput)
  create!: InstanceType<typeof IdentifierCreateWithoutBookInput>;
  @Field(() => IdentifierWhereInput, { nullable: true })
  @Type(() => IdentifierWhereInput)
  where?: InstanceType<typeof IdentifierWhereInput>;
}

@InputType()
export class IdentifierWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => [IdentifierWhereInput], { nullable: true })
  AND?: Array<IdentifierWhereInput>;
  @Field(() => [IdentifierWhereInput], { nullable: true })
  OR?: Array<IdentifierWhereInput>;
  @Field(() => [IdentifierWhereInput], { nullable: true })
  NOT?: Array<IdentifierWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  isbn10?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  isbn13?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  googleBooks?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  openLibrary?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  goodreads?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  amazon?: InstanceType<typeof StringFilter>;
  @Field(() => BookRelationFilter, { nullable: true })
  book?: InstanceType<typeof BookRelationFilter>;
}

@InputType()
export class IdentifierWhereInput {
  @Field(() => [IdentifierWhereInput], { nullable: true })
  AND?: Array<IdentifierWhereInput>;
  @Field(() => [IdentifierWhereInput], { nullable: true })
  OR?: Array<IdentifierWhereInput>;
  @Field(() => [IdentifierWhereInput], { nullable: true })
  NOT?: Array<IdentifierWhereInput>;
  @Field(() => IntFilter, { nullable: true })
  bookId?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  isbn10?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  isbn13?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  googleBooks?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  openLibrary?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  goodreads?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  amazon?: InstanceType<typeof StringFilter>;
  @Field(() => BookRelationFilter, { nullable: true })
  book?: InstanceType<typeof BookRelationFilter>;
}

@ObjectType()
export class Identifier {
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => String, { nullable: true })
  isbn10!: string | null;
  @Field(() => String, { nullable: true })
  isbn13!: string | null;
  @Field(() => String, { nullable: true })
  googleBooks!: string | null;
  @Field(() => String, { nullable: true })
  openLibrary!: string | null;
  @Field(() => String, { nullable: true })
  goodreads!: string | null;
  @Field(() => String, { nullable: true })
  amazon!: string | null;
  @Field(() => Book, { nullable: true })
  book?: InstanceType<typeof Book> | null;
}

@ArgsType()
export class UpdateManyIdentifierArgs {
  @Field(() => IdentifierUpdateManyMutationInput, { nullable: false })
  @Type(() => IdentifierUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof IdentifierUpdateManyMutationInput>;
  @Field(() => IdentifierWhereInput, { nullable: true })
  @Type(() => IdentifierWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof IdentifierWhereInput>;
}

@ArgsType()
export class UpdateOneIdentifierArgs {
  @Field(() => IdentifierUpdateInput, { nullable: false })
  @Type(() => IdentifierUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof IdentifierUpdateInput>;
  @Field(() => IdentifierWhereUniqueInput, { nullable: false })
  @Type(() => IdentifierWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
}

@ArgsType()
export class UpsertOneIdentifierArgs {
  @Field(() => IdentifierWhereUniqueInput, { nullable: false })
  @Type(() => IdentifierWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'bookId'>;
  @Field(() => IdentifierCreateInput, { nullable: false })
  @Type(() => IdentifierCreateInput)
  create!: InstanceType<typeof IdentifierCreateInput>;
  @Field(() => IdentifierUpdateInput, { nullable: false })
  @Type(() => IdentifierUpdateInput)
  update!: InstanceType<typeof IdentifierUpdateInput>;
}

@ObjectType()
export class AggregateJournalEntry {
  @Field(() => JournalEntryCountAggregate, { nullable: true })
  _count?: InstanceType<typeof JournalEntryCountAggregate>;
  @Field(() => JournalEntryAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof JournalEntryAvgAggregate>;
  @Field(() => JournalEntrySumAggregate, { nullable: true })
  _sum?: InstanceType<typeof JournalEntrySumAggregate>;
  @Field(() => JournalEntryMinAggregate, { nullable: true })
  _min?: InstanceType<typeof JournalEntryMinAggregate>;
  @Field(() => JournalEntryMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof JournalEntryMaxAggregate>;
}

@ArgsType()
export class CreateManyJournalEntryArgs {
  @Field(() => [JournalEntryCreateManyInput], { nullable: false })
  @Type(() => JournalEntryCreateManyInput)
  @ValidateNested()
  data!: Array<JournalEntryCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneJournalEntryArgs {
  @Field(() => JournalEntryCreateInput, { nullable: false })
  @Type(() => JournalEntryCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof JournalEntryCreateInput>;
}

@ArgsType()
export class DeleteManyJournalEntryArgs {
  @Field(() => JournalEntryWhereInput, { nullable: true })
  @Type(() => JournalEntryWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof JournalEntryWhereInput>;
}

@ArgsType()
export class DeleteOneJournalEntryArgs {
  @Field(() => JournalEntryWhereUniqueInput, { nullable: false })
  @Type(() => JournalEntryWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstJournalEntryOrThrowArgs {
  @Field(() => JournalEntryWhereInput, { nullable: true })
  @Type(() => JournalEntryWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof JournalEntryWhereInput>;
  @Field(() => [JournalEntryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<JournalEntryOrderByWithRelationInput>;
  @Field(() => JournalEntryWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [JournalEntryScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof JournalEntryScalarFieldEnum>;
}

@ArgsType()
export class FindFirstJournalEntryArgs {
  @Field(() => JournalEntryWhereInput, { nullable: true })
  @Type(() => JournalEntryWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof JournalEntryWhereInput>;
  @Field(() => [JournalEntryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<JournalEntryOrderByWithRelationInput>;
  @Field(() => JournalEntryWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [JournalEntryScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof JournalEntryScalarFieldEnum>;
}

@ArgsType()
export class FindManyJournalEntryArgs {
  @Field(() => JournalEntryWhereInput, { nullable: true })
  @Type(() => JournalEntryWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof JournalEntryWhereInput>;
  @Field(() => [JournalEntryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<JournalEntryOrderByWithRelationInput>;
  @Field(() => JournalEntryWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [JournalEntryScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof JournalEntryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueJournalEntryOrThrowArgs {
  @Field(() => JournalEntryWhereUniqueInput, { nullable: false })
  @Type(() => JournalEntryWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueJournalEntryArgs {
  @Field(() => JournalEntryWhereUniqueInput, { nullable: false })
  @Type(() => JournalEntryWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class JournalEntryAggregateArgs {
  @Field(() => JournalEntryWhereInput, { nullable: true })
  @Type(() => JournalEntryWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof JournalEntryWhereInput>;
  @Field(() => [JournalEntryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<JournalEntryOrderByWithRelationInput>;
  @Field(() => JournalEntryWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => JournalEntryCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof JournalEntryCountAggregateInput>;
  @Field(() => JournalEntryAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof JournalEntryAvgAggregateInput>;
  @Field(() => JournalEntrySumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof JournalEntrySumAggregateInput>;
  @Field(() => JournalEntryMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof JournalEntryMinAggregateInput>;
  @Field(() => JournalEntryMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof JournalEntryMaxAggregateInput>;
}

@InputType()
export class JournalEntryAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  currentPage?: true;
  @Field(() => Boolean, { nullable: true })
  pagesRead?: true;
  @Field(() => Boolean, { nullable: true })
  currentPercent?: true;
}

@ObjectType()
export class JournalEntryAvgAggregate {
  @Field(() => Float, { nullable: true })
  currentPage?: number;
  @Field(() => Float, { nullable: true })
  pagesRead?: number;
  @Field(() => Float, { nullable: true })
  currentPercent?: number;
}

@InputType()
export class JournalEntryAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  currentPage?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  pagesRead?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  currentPercent?: keyof typeof SortOrder;
}

@InputType()
export class JournalEntryCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  readingNotes?: true;
  @Field(() => Boolean, { nullable: true })
  dateRead?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  currentPage?: true;
  @Field(() => Boolean, { nullable: true })
  pagesRead?: true;
  @Field(() => Boolean, { nullable: true })
  currentPercent?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  userBookId?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class JournalEntryCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  readingNotes!: number;
  @Field(() => Int, { nullable: false })
  dateRead!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  currentPage!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  pagesRead!: number;
  @Field(() => Int, { nullable: false })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent!: number;
  @Field(() => Int, { nullable: false })
  userId!: number;
  @Field(() => Int, { nullable: false })
  userBookId!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class JournalEntryCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  readingNotes?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateRead?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  currentPage?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  pagesRead?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  currentPercent?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userBookId?: keyof typeof SortOrder;
}

@InputType()
export class JournalEntryCreateManyUserBookInputEnvelope {
  @Field(() => [JournalEntryCreateManyUserBookInput], { nullable: false })
  @Type(() => JournalEntryCreateManyUserBookInput)
  data!: Array<JournalEntryCreateManyUserBookInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class JournalEntryCreateManyUserBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  currentPage!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  pagesRead!: number;
  @Field(() => Int, { nullable: false })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent!: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
}

@InputType()
export class JournalEntryCreateManyUserInputEnvelope {
  @Field(() => [JournalEntryCreateManyUserInput], { nullable: false })
  @Type(() => JournalEntryCreateManyUserInput)
  data!: Array<JournalEntryCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class JournalEntryCreateManyUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  currentPage!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  pagesRead!: number;
  @Field(() => Int, { nullable: false })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent!: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userBookId?: string;
}

@InputType()
export class JournalEntryCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  currentPage!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  pagesRead!: number;
  @Field(() => Int, { nullable: false })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent!: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userBookId?: string;
}

@InputType()
export class JournalEntryCreateNestedManyWithoutUserBookInput {
  @Field(() => [JournalEntryCreateWithoutUserBookInput], { nullable: true })
  @Type(() => JournalEntryCreateWithoutUserBookInput)
  create?: Array<JournalEntryCreateWithoutUserBookInput>;
  @Field(() => [JournalEntryCreateOrConnectWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => JournalEntryCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserBookInput>;
  @Field(() => JournalEntryCreateManyUserBookInputEnvelope, { nullable: true })
  @Type(() => JournalEntryCreateManyUserBookInputEnvelope)
  createMany?: InstanceType<typeof JournalEntryCreateManyUserBookInputEnvelope>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
}

@InputType()
export class JournalEntryCreateNestedManyWithoutUserInput {
  @Field(() => [JournalEntryCreateWithoutUserInput], { nullable: true })
  @Type(() => JournalEntryCreateWithoutUserInput)
  create?: Array<JournalEntryCreateWithoutUserInput>;
  @Field(() => [JournalEntryCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => JournalEntryCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserInput>;
  @Field(() => JournalEntryCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => JournalEntryCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof JournalEntryCreateManyUserInputEnvelope>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
}

@InputType()
export class JournalEntryCreateOrConnectWithoutUserBookInput {
  @Field(() => JournalEntryWhereUniqueInput, { nullable: false })
  @Type(() => JournalEntryWhereUniqueInput)
  where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
  @Field(() => JournalEntryCreateWithoutUserBookInput, { nullable: false })
  @Type(() => JournalEntryCreateWithoutUserBookInput)
  create!: InstanceType<typeof JournalEntryCreateWithoutUserBookInput>;
}

@InputType()
export class JournalEntryCreateOrConnectWithoutUserInput {
  @Field(() => JournalEntryWhereUniqueInput, { nullable: false })
  @Type(() => JournalEntryWhereUniqueInput)
  where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
  @Field(() => JournalEntryCreateWithoutUserInput, { nullable: false })
  @Type(() => JournalEntryCreateWithoutUserInput)
  create!: InstanceType<typeof JournalEntryCreateWithoutUserInput>;
}

@InputType()
export class JournalEntryCreateWithoutUserBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  currentPage!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  pagesRead!: number;
  @Field(() => Int, { nullable: false })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent!: number;
  @Field(() => UserCreateNestedOneWithoutJournalEntriesInput, {
    nullable: true,
  })
  user?: InstanceType<typeof UserCreateNestedOneWithoutJournalEntriesInput>;
}

@InputType()
export class JournalEntryCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  currentPage!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  pagesRead!: number;
  @Field(() => Int, { nullable: false })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent!: number;
  @Field(() => UserBookCreateNestedOneWithoutJournalEntryInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookCreateNestedOneWithoutJournalEntryInput
  >;
}

@InputType()
export class JournalEntryCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  currentPage!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  pagesRead!: number;
  @Field(() => Int, { nullable: false })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent!: number;
  @Field(() => UserCreateNestedOneWithoutJournalEntriesInput, {
    nullable: true,
  })
  user?: InstanceType<typeof UserCreateNestedOneWithoutJournalEntriesInput>;
  @Field(() => UserBookCreateNestedOneWithoutJournalEntryInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookCreateNestedOneWithoutJournalEntryInput
  >;
}

@ArgsType()
export class JournalEntryGroupByArgs {
  @Field(() => JournalEntryWhereInput, { nullable: true })
  @Type(() => JournalEntryWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof JournalEntryWhereInput>;
  @Field(() => [JournalEntryOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<JournalEntryOrderByWithAggregationInput>;
  @Field(() => [JournalEntryScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof JournalEntryScalarFieldEnum>;
  @Field(() => JournalEntryScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof JournalEntryScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => JournalEntryCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof JournalEntryCountAggregateInput>;
  @Field(() => JournalEntryAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof JournalEntryAvgAggregateInput>;
  @Field(() => JournalEntrySumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof JournalEntrySumAggregateInput>;
  @Field(() => JournalEntryMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof JournalEntryMinAggregateInput>;
  @Field(() => JournalEntryMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof JournalEntryMaxAggregateInput>;
}

@ObjectType()
export class JournalEntryGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: false })
  dateRead!: Date | string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  currentPage!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  pagesRead!: number;
  @Field(() => Int, { nullable: false })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent!: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userBookId?: string;
  @Field(() => JournalEntryCountAggregate, { nullable: true })
  _count?: InstanceType<typeof JournalEntryCountAggregate>;
  @Field(() => JournalEntryAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof JournalEntryAvgAggregate>;
  @Field(() => JournalEntrySumAggregate, { nullable: true })
  _sum?: InstanceType<typeof JournalEntrySumAggregate>;
  @Field(() => JournalEntryMinAggregate, { nullable: true })
  _min?: InstanceType<typeof JournalEntryMinAggregate>;
  @Field(() => JournalEntryMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof JournalEntryMaxAggregate>;
}

@InputType()
export class JournalEntryListRelationFilter {
  @Field(() => JournalEntryWhereInput, { nullable: true })
  every?: InstanceType<typeof JournalEntryWhereInput>;
  @Field(() => JournalEntryWhereInput, { nullable: true })
  some?: InstanceType<typeof JournalEntryWhereInput>;
  @Field(() => JournalEntryWhereInput, { nullable: true })
  none?: InstanceType<typeof JournalEntryWhereInput>;
}

@InputType()
export class JournalEntryMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  readingNotes?: true;
  @Field(() => Boolean, { nullable: true })
  dateRead?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  currentPage?: true;
  @Field(() => Boolean, { nullable: true })
  pagesRead?: true;
  @Field(() => Boolean, { nullable: true })
  currentPercent?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  userBookId?: true;
}

@ObjectType()
export class JournalEntryMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  currentPage?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pagesRead?: number;
  @Field(() => Int, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userBookId?: string;
}

@InputType()
export class JournalEntryMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  readingNotes?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateRead?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  currentPage?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  pagesRead?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  currentPercent?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userBookId?: keyof typeof SortOrder;
}

@InputType()
export class JournalEntryMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  readingNotes?: true;
  @Field(() => Boolean, { nullable: true })
  dateRead?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  currentPage?: true;
  @Field(() => Boolean, { nullable: true })
  pagesRead?: true;
  @Field(() => Boolean, { nullable: true })
  currentPercent?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  userBookId?: true;
}

@ObjectType()
export class JournalEntryMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  currentPage?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pagesRead?: number;
  @Field(() => Int, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userBookId?: string;
}

@InputType()
export class JournalEntryMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  readingNotes?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateRead?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  currentPage?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  pagesRead?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  currentPercent?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userBookId?: keyof typeof SortOrder;
}

@InputType()
export class JournalEntryOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class JournalEntryOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  readingNotes?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  dateRead?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  currentPage?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  pagesRead?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  currentPercent?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  userId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  userBookId?: InstanceType<typeof SortOrderInput>;
  @Field(() => JournalEntryCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof JournalEntryCountOrderByAggregateInput>;
  @Field(() => JournalEntryAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof JournalEntryAvgOrderByAggregateInput>;
  @Field(() => JournalEntryMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof JournalEntryMaxOrderByAggregateInput>;
  @Field(() => JournalEntryMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof JournalEntryMinOrderByAggregateInput>;
  @Field(() => JournalEntrySumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof JournalEntrySumOrderByAggregateInput>;
}

@InputType()
export class JournalEntryOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  readingNotes?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  dateRead?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  currentPage?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  pagesRead?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  currentPercent?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  userId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  userBookId?: InstanceType<typeof SortOrderInput>;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UserOrderByWithRelationInput>;
  @Field(() => UserBookOrderByWithRelationInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookOrderByWithRelationInput>;
}

@InputType()
export class JournalEntryScalarWhereWithAggregatesInput {
  @Field(() => [JournalEntryScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<JournalEntryScalarWhereWithAggregatesInput>;
  @Field(() => [JournalEntryScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<JournalEntryScalarWhereWithAggregatesInput>;
  @Field(() => [JournalEntryScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<JournalEntryScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  readingNotes?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  dateRead?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  currentPage?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  pagesRead?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  currentPercent?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userBookId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class JournalEntryScalarWhereInput {
  @Field(() => [JournalEntryScalarWhereInput], { nullable: true })
  AND?: Array<JournalEntryScalarWhereInput>;
  @Field(() => [JournalEntryScalarWhereInput], { nullable: true })
  OR?: Array<JournalEntryScalarWhereInput>;
  @Field(() => [JournalEntryScalarWhereInput], { nullable: true })
  NOT?: Array<JournalEntryScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  readingNotes?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  dateRead?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => IntFilter, { nullable: true })
  currentPage?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  pagesRead?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  currentPercent?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userBookId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class JournalEntrySumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  currentPage?: true;
  @Field(() => Boolean, { nullable: true })
  pagesRead?: true;
  @Field(() => Boolean, { nullable: true })
  currentPercent?: true;
}

@ObjectType()
export class JournalEntrySumAggregate {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  currentPage?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pagesRead?: number;
  @Field(() => Int, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent?: number;
}

@InputType()
export class JournalEntrySumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  currentPage?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  pagesRead?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  currentPercent?: keyof typeof SortOrder;
}

@InputType()
export class JournalEntryUncheckedCreateNestedManyWithoutUserBookInput {
  @Field(() => [JournalEntryCreateWithoutUserBookInput], { nullable: true })
  @Type(() => JournalEntryCreateWithoutUserBookInput)
  create?: Array<JournalEntryCreateWithoutUserBookInput>;
  @Field(() => [JournalEntryCreateOrConnectWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => JournalEntryCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserBookInput>;
  @Field(() => JournalEntryCreateManyUserBookInputEnvelope, { nullable: true })
  @Type(() => JournalEntryCreateManyUserBookInputEnvelope)
  createMany?: InstanceType<typeof JournalEntryCreateManyUserBookInputEnvelope>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
}

@InputType()
export class JournalEntryUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [JournalEntryCreateWithoutUserInput], { nullable: true })
  @Type(() => JournalEntryCreateWithoutUserInput)
  create?: Array<JournalEntryCreateWithoutUserInput>;
  @Field(() => [JournalEntryCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => JournalEntryCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserInput>;
  @Field(() => JournalEntryCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => JournalEntryCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof JournalEntryCreateManyUserInputEnvelope>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
}

@InputType()
export class JournalEntryUncheckedCreateWithoutUserBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  currentPage!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  pagesRead!: number;
  @Field(() => Int, { nullable: false })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent!: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
}

@InputType()
export class JournalEntryUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  currentPage!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  pagesRead!: number;
  @Field(() => Int, { nullable: false })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent!: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userBookId?: string;
}

@InputType()
export class JournalEntryUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  currentPage!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  pagesRead!: number;
  @Field(() => Int, { nullable: false })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent!: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userBookId?: string;
}

@InputType()
export class JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput {
  @Field(() => [JournalEntryCreateWithoutUserBookInput], { nullable: true })
  @Type(() => JournalEntryCreateWithoutUserBookInput)
  create?: Array<JournalEntryCreateWithoutUserBookInput>;
  @Field(() => [JournalEntryCreateOrConnectWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => JournalEntryCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserBookInput>;
  @Field(() => [JournalEntryUpsertWithWhereUniqueWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => JournalEntryUpsertWithWhereUniqueWithoutUserBookInput)
  upsert?: Array<JournalEntryUpsertWithWhereUniqueWithoutUserBookInput>;
  @Field(() => JournalEntryCreateManyUserBookInputEnvelope, { nullable: true })
  @Type(() => JournalEntryCreateManyUserBookInputEnvelope)
  createMany?: InstanceType<typeof JournalEntryCreateManyUserBookInputEnvelope>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  set?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryUpdateWithWhereUniqueWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => JournalEntryUpdateWithWhereUniqueWithoutUserBookInput)
  update?: Array<JournalEntryUpdateWithWhereUniqueWithoutUserBookInput>;
  @Field(() => [JournalEntryUpdateManyWithWhereWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => JournalEntryUpdateManyWithWhereWithoutUserBookInput)
  updateMany?: Array<JournalEntryUpdateManyWithWhereWithoutUserBookInput>;
  @Field(() => [JournalEntryScalarWhereInput], { nullable: true })
  @Type(() => JournalEntryScalarWhereInput)
  deleteMany?: Array<JournalEntryScalarWhereInput>;
}

@InputType()
export class JournalEntryUncheckedUpdateManyWithoutUserBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  currentPage?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pagesRead?: number;
  @Field(() => Int, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
}

@InputType()
export class JournalEntryUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [JournalEntryCreateWithoutUserInput], { nullable: true })
  @Type(() => JournalEntryCreateWithoutUserInput)
  create?: Array<JournalEntryCreateWithoutUserInput>;
  @Field(() => [JournalEntryCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => JournalEntryCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserInput>;
  @Field(() => [JournalEntryUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => JournalEntryUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<JournalEntryUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => JournalEntryCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => JournalEntryCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof JournalEntryCreateManyUserInputEnvelope>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  set?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => JournalEntryUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<JournalEntryUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [JournalEntryUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => JournalEntryUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<JournalEntryUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [JournalEntryScalarWhereInput], { nullable: true })
  @Type(() => JournalEntryScalarWhereInput)
  deleteMany?: Array<JournalEntryScalarWhereInput>;
}

@InputType()
export class JournalEntryUncheckedUpdateManyWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  currentPage?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pagesRead?: number;
  @Field(() => Int, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userBookId?: string;
}

@InputType()
export class JournalEntryUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  currentPage?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pagesRead?: number;
  @Field(() => Int, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userBookId?: string;
}

@InputType()
export class JournalEntryUncheckedUpdateWithoutUserBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  currentPage?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pagesRead?: number;
  @Field(() => Int, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
}

@InputType()
export class JournalEntryUncheckedUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  currentPage?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pagesRead?: number;
  @Field(() => Int, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userBookId?: string;
}

@InputType()
export class JournalEntryUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  currentPage?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pagesRead?: number;
  @Field(() => Int, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userBookId?: string;
}

@InputType()
export class JournalEntryUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  currentPage?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pagesRead?: number;
  @Field(() => Int, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent?: number;
}

@InputType()
export class JournalEntryUpdateManyWithWhereWithoutUserBookInput {
  @Field(() => JournalEntryScalarWhereInput, { nullable: false })
  @Type(() => JournalEntryScalarWhereInput)
  where!: InstanceType<typeof JournalEntryScalarWhereInput>;
  @Field(() => JournalEntryUpdateManyMutationInput, { nullable: false })
  @Type(() => JournalEntryUpdateManyMutationInput)
  data!: InstanceType<typeof JournalEntryUpdateManyMutationInput>;
}

@InputType()
export class JournalEntryUpdateManyWithWhereWithoutUserInput {
  @Field(() => JournalEntryScalarWhereInput, { nullable: false })
  @Type(() => JournalEntryScalarWhereInput)
  where!: InstanceType<typeof JournalEntryScalarWhereInput>;
  @Field(() => JournalEntryUpdateManyMutationInput, { nullable: false })
  @Type(() => JournalEntryUpdateManyMutationInput)
  data!: InstanceType<typeof JournalEntryUpdateManyMutationInput>;
}

@InputType()
export class JournalEntryUpdateManyWithoutUserBookNestedInput {
  @Field(() => [JournalEntryCreateWithoutUserBookInput], { nullable: true })
  @Type(() => JournalEntryCreateWithoutUserBookInput)
  create?: Array<JournalEntryCreateWithoutUserBookInput>;
  @Field(() => [JournalEntryCreateOrConnectWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => JournalEntryCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserBookInput>;
  @Field(() => [JournalEntryUpsertWithWhereUniqueWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => JournalEntryUpsertWithWhereUniqueWithoutUserBookInput)
  upsert?: Array<JournalEntryUpsertWithWhereUniqueWithoutUserBookInput>;
  @Field(() => JournalEntryCreateManyUserBookInputEnvelope, { nullable: true })
  @Type(() => JournalEntryCreateManyUserBookInputEnvelope)
  createMany?: InstanceType<typeof JournalEntryCreateManyUserBookInputEnvelope>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  set?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryUpdateWithWhereUniqueWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => JournalEntryUpdateWithWhereUniqueWithoutUserBookInput)
  update?: Array<JournalEntryUpdateWithWhereUniqueWithoutUserBookInput>;
  @Field(() => [JournalEntryUpdateManyWithWhereWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => JournalEntryUpdateManyWithWhereWithoutUserBookInput)
  updateMany?: Array<JournalEntryUpdateManyWithWhereWithoutUserBookInput>;
  @Field(() => [JournalEntryScalarWhereInput], { nullable: true })
  @Type(() => JournalEntryScalarWhereInput)
  deleteMany?: Array<JournalEntryScalarWhereInput>;
}

@InputType()
export class JournalEntryUpdateManyWithoutUserNestedInput {
  @Field(() => [JournalEntryCreateWithoutUserInput], { nullable: true })
  @Type(() => JournalEntryCreateWithoutUserInput)
  create?: Array<JournalEntryCreateWithoutUserInput>;
  @Field(() => [JournalEntryCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => JournalEntryCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserInput>;
  @Field(() => [JournalEntryUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => JournalEntryUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<JournalEntryUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => JournalEntryCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => JournalEntryCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof JournalEntryCreateManyUserInputEnvelope>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  set?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryWhereUniqueInput], { nullable: true })
  @Type(() => JournalEntryWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
  @Field(() => [JournalEntryUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => JournalEntryUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<JournalEntryUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [JournalEntryUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => JournalEntryUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<JournalEntryUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [JournalEntryScalarWhereInput], { nullable: true })
  @Type(() => JournalEntryScalarWhereInput)
  deleteMany?: Array<JournalEntryScalarWhereInput>;
}

@InputType()
export class JournalEntryUpdateWithWhereUniqueWithoutUserBookInput {
  @Field(() => JournalEntryWhereUniqueInput, { nullable: false })
  @Type(() => JournalEntryWhereUniqueInput)
  where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
  @Field(() => JournalEntryUpdateWithoutUserBookInput, { nullable: false })
  @Type(() => JournalEntryUpdateWithoutUserBookInput)
  data!: InstanceType<typeof JournalEntryUpdateWithoutUserBookInput>;
}

@InputType()
export class JournalEntryUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => JournalEntryWhereUniqueInput, { nullable: false })
  @Type(() => JournalEntryWhereUniqueInput)
  where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
  @Field(() => JournalEntryUpdateWithoutUserInput, { nullable: false })
  @Type(() => JournalEntryUpdateWithoutUserInput)
  data!: InstanceType<typeof JournalEntryUpdateWithoutUserInput>;
}

@InputType()
export class JournalEntryUpdateWithoutUserBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  currentPage?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pagesRead?: number;
  @Field(() => Int, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent?: number;
  @Field(() => UserUpdateOneWithoutJournalEntriesNestedInput, {
    nullable: true,
  })
  user?: InstanceType<typeof UserUpdateOneWithoutJournalEntriesNestedInput>;
}

@InputType()
export class JournalEntryUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  currentPage?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pagesRead?: number;
  @Field(() => Int, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent?: number;
  @Field(() => UserBookUpdateOneWithoutJournalEntryNestedInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUpdateOneWithoutJournalEntryNestedInput
  >;
}

@InputType()
export class JournalEntryUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  readingNotes?: string;
  @Field(() => Date, { nullable: true })
  dateRead?: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  currentPage?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  pagesRead?: number;
  @Field(() => Int, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(100)
  @Validator.IsInt()
  currentPercent?: number;
  @Field(() => UserUpdateOneWithoutJournalEntriesNestedInput, {
    nullable: true,
  })
  user?: InstanceType<typeof UserUpdateOneWithoutJournalEntriesNestedInput>;
  @Field(() => UserBookUpdateOneWithoutJournalEntryNestedInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUpdateOneWithoutJournalEntryNestedInput
  >;
}

@InputType()
export class JournalEntryUpsertWithWhereUniqueWithoutUserBookInput {
  @Field(() => JournalEntryWhereUniqueInput, { nullable: false })
  @Type(() => JournalEntryWhereUniqueInput)
  where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
  @Field(() => JournalEntryUpdateWithoutUserBookInput, { nullable: false })
  @Type(() => JournalEntryUpdateWithoutUserBookInput)
  update!: InstanceType<typeof JournalEntryUpdateWithoutUserBookInput>;
  @Field(() => JournalEntryCreateWithoutUserBookInput, { nullable: false })
  @Type(() => JournalEntryCreateWithoutUserBookInput)
  create!: InstanceType<typeof JournalEntryCreateWithoutUserBookInput>;
}

@InputType()
export class JournalEntryUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => JournalEntryWhereUniqueInput, { nullable: false })
  @Type(() => JournalEntryWhereUniqueInput)
  where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
  @Field(() => JournalEntryUpdateWithoutUserInput, { nullable: false })
  @Type(() => JournalEntryUpdateWithoutUserInput)
  update!: InstanceType<typeof JournalEntryUpdateWithoutUserInput>;
  @Field(() => JournalEntryCreateWithoutUserInput, { nullable: false })
  @Type(() => JournalEntryCreateWithoutUserInput)
  create!: InstanceType<typeof JournalEntryCreateWithoutUserInput>;
}

@InputType()
export class JournalEntryWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => [JournalEntryWhereInput], { nullable: true })
  AND?: Array<JournalEntryWhereInput>;
  @Field(() => [JournalEntryWhereInput], { nullable: true })
  OR?: Array<JournalEntryWhereInput>;
  @Field(() => [JournalEntryWhereInput], { nullable: true })
  NOT?: Array<JournalEntryWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  readingNotes?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  dateRead?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => IntFilter, { nullable: true })
  currentPage?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  pagesRead?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  currentPercent?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userBookId?: InstanceType<typeof StringFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
  @Field(() => UserBookRelationFilter, { nullable: true })
  userBook?: InstanceType<typeof UserBookRelationFilter>;
}

@InputType()
export class JournalEntryWhereInput {
  @Field(() => [JournalEntryWhereInput], { nullable: true })
  AND?: Array<JournalEntryWhereInput>;
  @Field(() => [JournalEntryWhereInput], { nullable: true })
  OR?: Array<JournalEntryWhereInput>;
  @Field(() => [JournalEntryWhereInput], { nullable: true })
  NOT?: Array<JournalEntryWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  readingNotes?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  dateRead?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => IntFilter, { nullable: true })
  currentPage?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  pagesRead?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  currentPercent?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userBookId?: InstanceType<typeof StringFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
  @Field(() => UserBookRelationFilter, { nullable: true })
  userBook?: InstanceType<typeof UserBookRelationFilter>;
}

@ObjectType()
export class JournalEntry {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: true })
  readingNotes!: string | null;
  @Field(() => Date, { nullable: false })
  dateRead!: Date;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Int, { nullable: false })
  currentPage!: number;
  @Field(() => Int, { nullable: false })
  pagesRead!: number;
  @Field(() => Int, { nullable: false })
  currentPercent!: number;
  @Field(() => String, { nullable: true })
  userId!: string | null;
  @Field(() => String, { nullable: true })
  userBookId!: string | null;
  @Field(() => User, { nullable: true })
  user?: InstanceType<typeof User> | null;
  @Field(() => UserBook, { nullable: true })
  userBook?: InstanceType<typeof UserBook> | null;
}

@ArgsType()
export class UpdateManyJournalEntryArgs {
  @Field(() => JournalEntryUpdateManyMutationInput, { nullable: false })
  @Type(() => JournalEntryUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof JournalEntryUpdateManyMutationInput>;
  @Field(() => JournalEntryWhereInput, { nullable: true })
  @Type(() => JournalEntryWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof JournalEntryWhereInput>;
}

@ArgsType()
export class UpdateOneJournalEntryArgs {
  @Field(() => JournalEntryUpdateInput, { nullable: false })
  @Type(() => JournalEntryUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof JournalEntryUpdateInput>;
  @Field(() => JournalEntryWhereUniqueInput, { nullable: false })
  @Type(() => JournalEntryWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneJournalEntryArgs {
  @Field(() => JournalEntryWhereUniqueInput, { nullable: false })
  @Type(() => JournalEntryWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
  @Field(() => JournalEntryCreateInput, { nullable: false })
  @Type(() => JournalEntryCreateInput)
  create!: InstanceType<typeof JournalEntryCreateInput>;
  @Field(() => JournalEntryUpdateInput, { nullable: false })
  @Type(() => JournalEntryUpdateInput)
  update!: InstanceType<typeof JournalEntryUpdateInput>;
}

@ObjectType()
export class AggregatePasswordResetToken {
  @Field(() => PasswordResetTokenCountAggregate, { nullable: true })
  _count?: InstanceType<typeof PasswordResetTokenCountAggregate>;
  @Field(() => PasswordResetTokenMinAggregate, { nullable: true })
  _min?: InstanceType<typeof PasswordResetTokenMinAggregate>;
  @Field(() => PasswordResetTokenMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof PasswordResetTokenMaxAggregate>;
}

@ArgsType()
export class CreateManyPasswordResetTokenArgs {
  @Field(() => [PasswordResetTokenCreateManyInput], { nullable: false })
  @Type(() => PasswordResetTokenCreateManyInput)
  @ValidateNested()
  data!: Array<PasswordResetTokenCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePasswordResetTokenArgs {
  @Field(() => PasswordResetTokenCreateInput, { nullable: false })
  @Type(() => PasswordResetTokenCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof PasswordResetTokenCreateInput>;
}

@ArgsType()
export class DeleteManyPasswordResetTokenArgs {
  @Field(() => PasswordResetTokenWhereInput, { nullable: true })
  @Type(() => PasswordResetTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof PasswordResetTokenWhereInput>;
}

@ArgsType()
export class DeleteOnePasswordResetTokenArgs {
  @Field(() => PasswordResetTokenWhereUniqueInput, { nullable: false })
  @Type(() => PasswordResetTokenWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    PasswordResetTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
}

@ArgsType()
export class FindFirstPasswordResetTokenOrThrowArgs {
  @Field(() => PasswordResetTokenWhereInput, { nullable: true })
  @Type(() => PasswordResetTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof PasswordResetTokenWhereInput>;
  @Field(() => [PasswordResetTokenOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PasswordResetTokenOrderByWithRelationInput>;
  @Field(() => PasswordResetTokenWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    PasswordResetTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [PasswordResetTokenScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PasswordResetTokenScalarFieldEnum>;
}

@ArgsType()
export class FindFirstPasswordResetTokenArgs {
  @Field(() => PasswordResetTokenWhereInput, { nullable: true })
  @Type(() => PasswordResetTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof PasswordResetTokenWhereInput>;
  @Field(() => [PasswordResetTokenOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PasswordResetTokenOrderByWithRelationInput>;
  @Field(() => PasswordResetTokenWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    PasswordResetTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [PasswordResetTokenScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PasswordResetTokenScalarFieldEnum>;
}

@ArgsType()
export class FindManyPasswordResetTokenArgs {
  @Field(() => PasswordResetTokenWhereInput, { nullable: true })
  @Type(() => PasswordResetTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof PasswordResetTokenWhereInput>;
  @Field(() => [PasswordResetTokenOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PasswordResetTokenOrderByWithRelationInput>;
  @Field(() => PasswordResetTokenWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    PasswordResetTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [PasswordResetTokenScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PasswordResetTokenScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePasswordResetTokenOrThrowArgs {
  @Field(() => PasswordResetTokenWhereUniqueInput, { nullable: false })
  @Type(() => PasswordResetTokenWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    PasswordResetTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
}

@ArgsType()
export class FindUniquePasswordResetTokenArgs {
  @Field(() => PasswordResetTokenWhereUniqueInput, { nullable: false })
  @Type(() => PasswordResetTokenWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    PasswordResetTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
}

@ArgsType()
export class PasswordResetTokenAggregateArgs {
  @Field(() => PasswordResetTokenWhereInput, { nullable: true })
  @Type(() => PasswordResetTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof PasswordResetTokenWhereInput>;
  @Field(() => [PasswordResetTokenOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PasswordResetTokenOrderByWithRelationInput>;
  @Field(() => PasswordResetTokenWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    PasswordResetTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => PasswordResetTokenCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof PasswordResetTokenCountAggregateInput>;
  @Field(() => PasswordResetTokenMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof PasswordResetTokenMinAggregateInput>;
  @Field(() => PasswordResetTokenMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof PasswordResetTokenMaxAggregateInput>;
}

@InputType()
export class PasswordResetTokenCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  token?: true;
  @Field(() => Boolean, { nullable: true })
  expires?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class PasswordResetTokenCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  email!: number;
  @Field(() => Int, { nullable: false })
  token!: number;
  @Field(() => Int, { nullable: false })
  expires!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class PasswordResetTokenCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
}

@InputType()
export class PasswordResetTokenCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
}

@InputType()
export class PasswordResetTokenCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
}

@InputType()
export class PasswordResetTokenEmailTokenCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: false })
  token!: string;
}

@ArgsType()
export class PasswordResetTokenGroupByArgs {
  @Field(() => PasswordResetTokenWhereInput, { nullable: true })
  @Type(() => PasswordResetTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof PasswordResetTokenWhereInput>;
  @Field(() => [PasswordResetTokenOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<PasswordResetTokenOrderByWithAggregationInput>;
  @Field(() => [PasswordResetTokenScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof PasswordResetTokenScalarFieldEnum>;
  @Field(() => PasswordResetTokenScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: InstanceType<
    typeof PasswordResetTokenScalarWhereWithAggregatesInput
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => PasswordResetTokenCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof PasswordResetTokenCountAggregateInput>;
  @Field(() => PasswordResetTokenMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof PasswordResetTokenMinAggregateInput>;
  @Field(() => PasswordResetTokenMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof PasswordResetTokenMaxAggregateInput>;
}

@ObjectType()
export class PasswordResetTokenGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
  @Field(() => PasswordResetTokenCountAggregate, { nullable: true })
  _count?: InstanceType<typeof PasswordResetTokenCountAggregate>;
  @Field(() => PasswordResetTokenMinAggregate, { nullable: true })
  _min?: InstanceType<typeof PasswordResetTokenMinAggregate>;
  @Field(() => PasswordResetTokenMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof PasswordResetTokenMaxAggregate>;
}

@InputType()
export class PasswordResetTokenMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  token?: true;
  @Field(() => Boolean, { nullable: true })
  expires?: true;
}

@ObjectType()
export class PasswordResetTokenMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => Date, { nullable: true })
  expires?: Date | string;
}

@InputType()
export class PasswordResetTokenMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
}

@InputType()
export class PasswordResetTokenMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  token?: true;
  @Field(() => Boolean, { nullable: true })
  expires?: true;
}

@ObjectType()
export class PasswordResetTokenMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => Date, { nullable: true })
  expires?: Date | string;
}

@InputType()
export class PasswordResetTokenMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
}

@InputType()
export class PasswordResetTokenOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
  @Field(() => PasswordResetTokenCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof PasswordResetTokenCountOrderByAggregateInput>;
  @Field(() => PasswordResetTokenMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof PasswordResetTokenMaxOrderByAggregateInput>;
  @Field(() => PasswordResetTokenMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof PasswordResetTokenMinOrderByAggregateInput>;
}

@InputType()
export class PasswordResetTokenOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
}

@InputType()
export class PasswordResetTokenScalarWhereWithAggregatesInput {
  @Field(() => [PasswordResetTokenScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<PasswordResetTokenScalarWhereWithAggregatesInput>;
  @Field(() => [PasswordResetTokenScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<PasswordResetTokenScalarWhereWithAggregatesInput>;
  @Field(() => [PasswordResetTokenScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<PasswordResetTokenScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  token?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  expires?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PasswordResetTokenUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
}

@InputType()
export class PasswordResetTokenUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => Date, { nullable: true })
  expires?: Date | string;
}

@InputType()
export class PasswordResetTokenUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => Date, { nullable: true })
  expires?: Date | string;
}

@InputType()
export class PasswordResetTokenUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => Date, { nullable: true })
  expires?: Date | string;
}

@InputType()
export class PasswordResetTokenUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => Date, { nullable: true })
  expires?: Date | string;
}

@InputType()
export class PasswordResetTokenWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => PasswordResetTokenEmailTokenCompoundUniqueInput, {
    nullable: true,
  })
  email_token?: InstanceType<
    typeof PasswordResetTokenEmailTokenCompoundUniqueInput
  >;
  @Field(() => [PasswordResetTokenWhereInput], { nullable: true })
  AND?: Array<PasswordResetTokenWhereInput>;
  @Field(() => [PasswordResetTokenWhereInput], { nullable: true })
  OR?: Array<PasswordResetTokenWhereInput>;
  @Field(() => [PasswordResetTokenWhereInput], { nullable: true })
  NOT?: Array<PasswordResetTokenWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  email?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  expires?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PasswordResetTokenWhereInput {
  @Field(() => [PasswordResetTokenWhereInput], { nullable: true })
  AND?: Array<PasswordResetTokenWhereInput>;
  @Field(() => [PasswordResetTokenWhereInput], { nullable: true })
  OR?: Array<PasswordResetTokenWhereInput>;
  @Field(() => [PasswordResetTokenWhereInput], { nullable: true })
  NOT?: Array<PasswordResetTokenWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  email?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  token?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  expires?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class PasswordResetToken {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date;
}

@ArgsType()
export class UpdateManyPasswordResetTokenArgs {
  @Field(() => PasswordResetTokenUpdateManyMutationInput, { nullable: false })
  @Type(() => PasswordResetTokenUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof PasswordResetTokenUpdateManyMutationInput>;
  @Field(() => PasswordResetTokenWhereInput, { nullable: true })
  @Type(() => PasswordResetTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof PasswordResetTokenWhereInput>;
}

@ArgsType()
export class UpdateOnePasswordResetTokenArgs {
  @Field(() => PasswordResetTokenUpdateInput, { nullable: false })
  @Type(() => PasswordResetTokenUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof PasswordResetTokenUpdateInput>;
  @Field(() => PasswordResetTokenWhereUniqueInput, { nullable: false })
  @Type(() => PasswordResetTokenWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    PasswordResetTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
}

@ArgsType()
export class UpsertOnePasswordResetTokenArgs {
  @Field(() => PasswordResetTokenWhereUniqueInput, { nullable: false })
  @Type(() => PasswordResetTokenWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    PasswordResetTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
  @Field(() => PasswordResetTokenCreateInput, { nullable: false })
  @Type(() => PasswordResetTokenCreateInput)
  create!: InstanceType<typeof PasswordResetTokenCreateInput>;
  @Field(() => PasswordResetTokenUpdateInput, { nullable: false })
  @Type(() => PasswordResetTokenUpdateInput)
  update!: InstanceType<typeof PasswordResetTokenUpdateInput>;
}

@ObjectType()
export class AffectedRows {
  @Field(() => Int, { nullable: false })
  count!: number;
}

@InputType()
export class BoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => BoolFilter, { nullable: true })
  not?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof BoolWithAggregatesFilter>;
  @Field(() => IntFilter, { nullable: true })
  _count?: InstanceType<typeof IntFilter>;
  @Field(() => BoolFilter, { nullable: true })
  _min?: InstanceType<typeof BoolFilter>;
  @Field(() => BoolFilter, { nullable: true })
  _max?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class DateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => DateTimeFilter, { nullable: true })
  not?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => IntFilter, { nullable: true })
  _count?: InstanceType<typeof IntFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  _min?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  _max?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class EnumACTIONFilter {
  @Field(() => ACTION, { nullable: true })
  equals?: keyof typeof ACTION;
  @Field(() => [ACTION], { nullable: true })
  in?: Array<keyof typeof ACTION>;
  @Field(() => [ACTION], { nullable: true })
  notIn?: Array<keyof typeof ACTION>;
  @Field(() => EnumACTIONFilter, { nullable: true })
  not?: InstanceType<typeof EnumACTIONFilter>;
}

@InputType()
export class EnumACTIONWithAggregatesFilter {
  @Field(() => ACTION, { nullable: true })
  equals?: keyof typeof ACTION;
  @Field(() => [ACTION], { nullable: true })
  in?: Array<keyof typeof ACTION>;
  @Field(() => [ACTION], { nullable: true })
  notIn?: Array<keyof typeof ACTION>;
  @Field(() => EnumACTIONWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof EnumACTIONWithAggregatesFilter>;
  @Field(() => IntFilter, { nullable: true })
  _count?: InstanceType<typeof IntFilter>;
  @Field(() => EnumACTIONFilter, { nullable: true })
  _min?: InstanceType<typeof EnumACTIONFilter>;
  @Field(() => EnumACTIONFilter, { nullable: true })
  _max?: InstanceType<typeof EnumACTIONFilter>;
}

@InputType()
export class FloatFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => FloatFilter, { nullable: true })
  not?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof FloatWithAggregatesFilter>;
  @Field(() => IntFilter, { nullable: true })
  _count?: InstanceType<typeof IntFilter>;
  @Field(() => FloatFilter, { nullable: true })
  _avg?: InstanceType<typeof FloatFilter>;
  @Field(() => FloatFilter, { nullable: true })
  _sum?: InstanceType<typeof FloatFilter>;
  @Field(() => FloatFilter, { nullable: true })
  _min?: InstanceType<typeof FloatFilter>;
  @Field(() => FloatFilter, { nullable: true })
  _max?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class IntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => IntFilter, { nullable: true })
  not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => IntFilter, { nullable: true })
  _count?: InstanceType<typeof IntFilter>;
  @Field(() => FloatFilter, { nullable: true })
  _avg?: InstanceType<typeof FloatFilter>;
  @Field(() => IntFilter, { nullable: true })
  _sum?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  _min?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  _max?: InstanceType<typeof IntFilter>;
}

@InputType()
export class SortOrderInput {
  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;
  @Field(() => NullsOrder, { nullable: true })
  nulls?: keyof typeof NullsOrder;
}

@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => StringFilter, { nullable: true })
  not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringListFilter {
  @Field(() => [String], { nullable: true })
  equals?: Array<string>;
  @Field(() => String, { nullable: true })
  has?: string;
  @Field(() => [String], { nullable: true })
  hasEvery?: Array<string>;
  @Field(() => [String], { nullable: true })
  hasSome?: Array<string>;
  @Field(() => Boolean, { nullable: true })
  isEmpty?: boolean;
}

@InputType()
export class StringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntFilter, { nullable: true })
  _count?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  _min?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateReview {
  @Field(() => ReviewCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ReviewCountAggregate>;
  @Field(() => ReviewAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof ReviewAvgAggregate>;
  @Field(() => ReviewSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof ReviewSumAggregate>;
  @Field(() => ReviewMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ReviewMinAggregate>;
  @Field(() => ReviewMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ReviewMaxAggregate>;
}

@ArgsType()
export class CreateManyReviewArgs {
  @Field(() => [ReviewCreateManyInput], { nullable: false })
  @Type(() => ReviewCreateManyInput)
  @ValidateNested()
  data!: Array<ReviewCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneReviewArgs {
  @Field(() => ReviewCreateInput, { nullable: true })
  @Type(() => ReviewCreateInput)
  @ValidateNested()
  data?: InstanceType<typeof ReviewCreateInput>;
}

@ArgsType()
export class DeleteManyReviewArgs {
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ReviewWhereInput>;
}

@ArgsType()
export class DeleteOneReviewArgs {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class FindFirstReviewOrThrowArgs {
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ReviewWhereInput>;
  @Field(() => [ReviewOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ReviewOrderByWithRelationInput>;
  @Field(() => ReviewWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ReviewScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ReviewScalarFieldEnum>;
}

@ArgsType()
export class FindFirstReviewArgs {
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ReviewWhereInput>;
  @Field(() => [ReviewOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ReviewOrderByWithRelationInput>;
  @Field(() => ReviewWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ReviewScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ReviewScalarFieldEnum>;
}

@ArgsType()
export class FindManyReviewArgs {
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ReviewWhereInput>;
  @Field(() => [ReviewOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ReviewOrderByWithRelationInput>;
  @Field(() => ReviewWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ReviewScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ReviewScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueReviewOrThrowArgs {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class FindUniqueReviewArgs {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class ReviewAggregateArgs {
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ReviewWhereInput>;
  @Field(() => [ReviewOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ReviewOrderByWithRelationInput>;
  @Field(() => ReviewWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ReviewCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ReviewCountAggregateInput>;
  @Field(() => ReviewAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof ReviewAvgAggregateInput>;
  @Field(() => ReviewSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof ReviewSumAggregateInput>;
  @Field(() => ReviewMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ReviewMinAggregateInput>;
  @Field(() => ReviewMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ReviewMaxAggregateInput>;
}

@InputType()
export class ReviewAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  likeCount?: true;
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
}

@ObjectType()
export class ReviewAvgAggregate {
  @Field(() => Float, { nullable: true })
  likeCount?: number;
  @Field(() => Float, { nullable: true })
  bookId?: number;
}

@InputType()
export class ReviewAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  likeCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
}

@InputType()
export class ReviewCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  content?: true;
  @Field(() => Boolean, { nullable: true })
  userBookId?: true;
  @Field(() => Boolean, { nullable: true })
  likeCount?: true;
  @Field(() => Boolean, { nullable: true })
  spoilers?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class ReviewCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  content!: number;
  @Field(() => Int, { nullable: false })
  userBookId!: number;
  @Field(() => Int, { nullable: false })
  likeCount!: number;
  @Field(() => Int, { nullable: false })
  spoilers!: number;
  @Field(() => Int, { nullable: false })
  userId!: number;
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class ReviewCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userBookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  likeCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  spoilers?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
}

@ObjectType()
export class ReviewCount {
  @Field(() => Int, { nullable: false })
  likedBy?: number;
  @Field(() => Int, { nullable: false })
  comments?: number;
}

@InputType()
export class ReviewCreateManyBookInputEnvelope {
  @Field(() => [ReviewCreateManyBookInput], { nullable: false })
  @Type(() => ReviewCreateManyBookInput)
  data!: Array<ReviewCreateManyBookInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class ReviewCreateManyBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class ReviewCreateManyUserBookInputEnvelope {
  @Field(() => [ReviewCreateManyUserBookInput], { nullable: false })
  @Type(() => ReviewCreateManyUserBookInput)
  data!: Array<ReviewCreateManyUserBookInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class ReviewCreateManyUserBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
}

@InputType()
export class ReviewCreateManyUserInputEnvelope {
  @Field(() => [ReviewCreateManyUserInput], { nullable: false })
  @Type(() => ReviewCreateManyUserInput)
  data!: Array<ReviewCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class ReviewCreateManyUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => Int, { nullable: true })
  bookId?: number;
}

@InputType()
export class ReviewCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
}

@InputType()
export class ReviewCreateNestedManyWithoutBookInput {
  @Field(() => [ReviewCreateWithoutBookInput], { nullable: true })
  @Type(() => ReviewCreateWithoutBookInput)
  create?: Array<ReviewCreateWithoutBookInput>;
  @Field(() => [ReviewCreateOrConnectWithoutBookInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutBookInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutBookInput>;
  @Field(() => ReviewCreateManyBookInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyBookInputEnvelope)
  createMany?: InstanceType<typeof ReviewCreateManyBookInputEnvelope>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
}

@InputType()
export class ReviewCreateNestedManyWithoutLikedByInput {
  @Field(() => [ReviewCreateWithoutLikedByInput], { nullable: true })
  @Type(() => ReviewCreateWithoutLikedByInput)
  create?: Array<ReviewCreateWithoutLikedByInput>;
  @Field(() => [ReviewCreateOrConnectWithoutLikedByInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutLikedByInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutLikedByInput>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
}

@InputType()
export class ReviewCreateNestedManyWithoutUserBookInput {
  @Field(() => [ReviewCreateWithoutUserBookInput], { nullable: true })
  @Type(() => ReviewCreateWithoutUserBookInput)
  create?: Array<ReviewCreateWithoutUserBookInput>;
  @Field(() => [ReviewCreateOrConnectWithoutUserBookInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserBookInput>;
  @Field(() => ReviewCreateManyUserBookInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyUserBookInputEnvelope)
  createMany?: InstanceType<typeof ReviewCreateManyUserBookInputEnvelope>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
}

@InputType()
export class ReviewCreateNestedManyWithoutUserInput {
  @Field(() => [ReviewCreateWithoutUserInput], { nullable: true })
  @Type(() => ReviewCreateWithoutUserInput)
  create?: Array<ReviewCreateWithoutUserInput>;
  @Field(() => [ReviewCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserInput>;
  @Field(() => ReviewCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof ReviewCreateManyUserInputEnvelope>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
}

@InputType()
export class ReviewCreateNestedOneWithoutCommentsInput {
  @Field(() => ReviewCreateWithoutCommentsInput, { nullable: true })
  @Type(() => ReviewCreateWithoutCommentsInput)
  create?: InstanceType<typeof ReviewCreateWithoutCommentsInput>;
  @Field(() => ReviewCreateOrConnectWithoutCommentsInput, { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutCommentsInput)
  connectOrCreate?: InstanceType<
    typeof ReviewCreateOrConnectWithoutCommentsInput
  >;
  @Field(() => ReviewWhereUniqueInput, { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
}

@InputType()
export class ReviewCreateOrConnectWithoutBookInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewCreateWithoutBookInput, { nullable: false })
  @Type(() => ReviewCreateWithoutBookInput)
  create!: InstanceType<typeof ReviewCreateWithoutBookInput>;
}

@InputType()
export class ReviewCreateOrConnectWithoutCommentsInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewCreateWithoutCommentsInput, { nullable: false })
  @Type(() => ReviewCreateWithoutCommentsInput)
  create!: InstanceType<typeof ReviewCreateWithoutCommentsInput>;
}

@InputType()
export class ReviewCreateOrConnectWithoutLikedByInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewCreateWithoutLikedByInput, { nullable: false })
  @Type(() => ReviewCreateWithoutLikedByInput)
  create!: InstanceType<typeof ReviewCreateWithoutLikedByInput>;
}

@InputType()
export class ReviewCreateOrConnectWithoutUserBookInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewCreateWithoutUserBookInput, { nullable: false })
  @Type(() => ReviewCreateWithoutUserBookInput)
  create!: InstanceType<typeof ReviewCreateWithoutUserBookInput>;
}

@InputType()
export class ReviewCreateOrConnectWithoutUserInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewCreateWithoutUserInput, { nullable: false })
  @Type(() => ReviewCreateWithoutUserInput)
  create!: InstanceType<typeof ReviewCreateWithoutUserInput>;
}

@InputType()
export class ReviewCreateWithoutBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => UserBookCreateNestedOneWithoutReviewsInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutReviewsInput>;
  @Field(() => UserCreateNestedManyWithoutLikedReviewsInput, { nullable: true })
  likedBy?: InstanceType<typeof UserCreateNestedManyWithoutLikedReviewsInput>;
  @Field(() => CommentCreateNestedManyWithoutReviewInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutReviewInput>;
  @Field(() => UserCreateNestedOneWithoutReviewsInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutReviewsInput>;
}

@InputType()
export class ReviewCreateWithoutCommentsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => UserBookCreateNestedOneWithoutReviewsInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutReviewsInput>;
  @Field(() => UserCreateNestedManyWithoutLikedReviewsInput, { nullable: true })
  likedBy?: InstanceType<typeof UserCreateNestedManyWithoutLikedReviewsInput>;
  @Field(() => UserCreateNestedOneWithoutReviewsInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutReviewsInput>;
  @Field(() => BookCreateNestedOneWithoutReviewsInput, { nullable: true })
  book?: InstanceType<typeof BookCreateNestedOneWithoutReviewsInput>;
}

@InputType()
export class ReviewCreateWithoutLikedByInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => UserBookCreateNestedOneWithoutReviewsInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutReviewsInput>;
  @Field(() => CommentCreateNestedManyWithoutReviewInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutReviewInput>;
  @Field(() => UserCreateNestedOneWithoutReviewsInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutReviewsInput>;
  @Field(() => BookCreateNestedOneWithoutReviewsInput, { nullable: true })
  book?: InstanceType<typeof BookCreateNestedOneWithoutReviewsInput>;
}

@InputType()
export class ReviewCreateWithoutUserBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => UserCreateNestedManyWithoutLikedReviewsInput, { nullable: true })
  likedBy?: InstanceType<typeof UserCreateNestedManyWithoutLikedReviewsInput>;
  @Field(() => CommentCreateNestedManyWithoutReviewInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutReviewInput>;
  @Field(() => UserCreateNestedOneWithoutReviewsInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutReviewsInput>;
  @Field(() => BookCreateNestedOneWithoutReviewsInput, { nullable: true })
  book?: InstanceType<typeof BookCreateNestedOneWithoutReviewsInput>;
}

@InputType()
export class ReviewCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => UserBookCreateNestedOneWithoutReviewsInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutReviewsInput>;
  @Field(() => UserCreateNestedManyWithoutLikedReviewsInput, { nullable: true })
  likedBy?: InstanceType<typeof UserCreateNestedManyWithoutLikedReviewsInput>;
  @Field(() => CommentCreateNestedManyWithoutReviewInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutReviewInput>;
  @Field(() => BookCreateNestedOneWithoutReviewsInput, { nullable: true })
  book?: InstanceType<typeof BookCreateNestedOneWithoutReviewsInput>;
}

@InputType()
export class ReviewCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => UserBookCreateNestedOneWithoutReviewsInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutReviewsInput>;
  @Field(() => UserCreateNestedManyWithoutLikedReviewsInput, { nullable: true })
  likedBy?: InstanceType<typeof UserCreateNestedManyWithoutLikedReviewsInput>;
  @Field(() => CommentCreateNestedManyWithoutReviewInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutReviewInput>;
  @Field(() => UserCreateNestedOneWithoutReviewsInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutReviewsInput>;
  @Field(() => BookCreateNestedOneWithoutReviewsInput, { nullable: true })
  book?: InstanceType<typeof BookCreateNestedOneWithoutReviewsInput>;
}

@ArgsType()
export class ReviewGroupByArgs {
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ReviewWhereInput>;
  @Field(() => [ReviewOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ReviewOrderByWithAggregationInput>;
  @Field(() => [ReviewScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ReviewScalarFieldEnum>;
  @Field(() => ReviewScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof ReviewScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ReviewCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ReviewCountAggregateInput>;
  @Field(() => ReviewAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof ReviewAvgAggregateInput>;
  @Field(() => ReviewSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof ReviewSumAggregateInput>;
  @Field(() => ReviewMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ReviewMinAggregateInput>;
  @Field(() => ReviewMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ReviewMaxAggregateInput>;
}

@ObjectType()
export class ReviewGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: false })
  likeCount!: number;
  @Field(() => Boolean, { nullable: false })
  spoilers!: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => ReviewCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ReviewCountAggregate>;
  @Field(() => ReviewAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof ReviewAvgAggregate>;
  @Field(() => ReviewSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof ReviewSumAggregate>;
  @Field(() => ReviewMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ReviewMinAggregate>;
  @Field(() => ReviewMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ReviewMaxAggregate>;
}

@InputType()
export class ReviewIdentifierCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Int, { nullable: false })
  bookId!: number;
}

@InputType()
export class ReviewListRelationFilter {
  @Field(() => ReviewWhereInput, { nullable: true })
  every?: InstanceType<typeof ReviewWhereInput>;
  @Field(() => ReviewWhereInput, { nullable: true })
  some?: InstanceType<typeof ReviewWhereInput>;
  @Field(() => ReviewWhereInput, { nullable: true })
  none?: InstanceType<typeof ReviewWhereInput>;
}

@InputType()
export class ReviewMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  content?: true;
  @Field(() => Boolean, { nullable: true })
  userBookId?: true;
  @Field(() => Boolean, { nullable: true })
  likeCount?: true;
  @Field(() => Boolean, { nullable: true })
  spoilers?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
}

@ObjectType()
export class ReviewMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
}

@InputType()
export class ReviewMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userBookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  likeCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  spoilers?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
}

@InputType()
export class ReviewMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  content?: true;
  @Field(() => Boolean, { nullable: true })
  userBookId?: true;
  @Field(() => Boolean, { nullable: true })
  likeCount?: true;
  @Field(() => Boolean, { nullable: true })
  spoilers?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
}

@ObjectType()
export class ReviewMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
}

@InputType()
export class ReviewMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  content?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userBookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  likeCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  spoilers?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
}

@InputType()
export class ReviewOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class ReviewOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  content?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  userBookId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  likeCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  spoilers?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  userId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  bookId?: InstanceType<typeof SortOrderInput>;
  @Field(() => ReviewCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ReviewCountOrderByAggregateInput>;
  @Field(() => ReviewAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof ReviewAvgOrderByAggregateInput>;
  @Field(() => ReviewMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ReviewMaxOrderByAggregateInput>;
  @Field(() => ReviewMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ReviewMinOrderByAggregateInput>;
  @Field(() => ReviewSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof ReviewSumOrderByAggregateInput>;
}

@InputType()
export class ReviewOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  content?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  userBookId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  likeCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  spoilers?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  userId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  bookId?: InstanceType<typeof SortOrderInput>;
  @Field(() => UserBookOrderByWithRelationInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookOrderByWithRelationInput>;
  @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  likedBy?: InstanceType<typeof UserOrderByRelationAggregateInput>;
  @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
  comments?: InstanceType<typeof CommentOrderByRelationAggregateInput>;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UserOrderByWithRelationInput>;
  @Field(() => BookOrderByWithRelationInput, { nullable: true })
  book?: InstanceType<typeof BookOrderByWithRelationInput>;
}

@InputType()
export class ReviewRelationFilter {
  @Field(() => ReviewWhereInput, { nullable: true })
  is?: InstanceType<typeof ReviewWhereInput>;
  @Field(() => ReviewWhereInput, { nullable: true })
  isNot?: InstanceType<typeof ReviewWhereInput>;
}

@InputType()
export class ReviewScalarWhereWithAggregatesInput {
  @Field(() => [ReviewScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ReviewScalarWhereWithAggregatesInput>;
  @Field(() => [ReviewScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ReviewScalarWhereWithAggregatesInput>;
  @Field(() => [ReviewScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ReviewScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  content?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userBookId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  likeCount?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  spoilers?: InstanceType<typeof BoolWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  bookId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class ReviewScalarWhereInput {
  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  AND?: Array<ReviewScalarWhereInput>;
  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  OR?: Array<ReviewScalarWhereInput>;
  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  NOT?: Array<ReviewScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  content?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userBookId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  likeCount?: InstanceType<typeof IntFilter>;
  @Field(() => BoolFilter, { nullable: true })
  spoilers?: InstanceType<typeof BoolFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  bookId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class ReviewSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  likeCount?: true;
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
}

@ObjectType()
export class ReviewSumAggregate {
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Int, { nullable: true })
  bookId?: number;
}

@InputType()
export class ReviewSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  likeCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
}

@InputType()
export class ReviewUncheckedCreateNestedManyWithoutBookInput {
  @Field(() => [ReviewCreateWithoutBookInput], { nullable: true })
  @Type(() => ReviewCreateWithoutBookInput)
  create?: Array<ReviewCreateWithoutBookInput>;
  @Field(() => [ReviewCreateOrConnectWithoutBookInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutBookInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutBookInput>;
  @Field(() => ReviewCreateManyBookInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyBookInputEnvelope)
  createMany?: InstanceType<typeof ReviewCreateManyBookInputEnvelope>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
}

@InputType()
export class ReviewUncheckedCreateNestedManyWithoutLikedByInput {
  @Field(() => [ReviewCreateWithoutLikedByInput], { nullable: true })
  @Type(() => ReviewCreateWithoutLikedByInput)
  create?: Array<ReviewCreateWithoutLikedByInput>;
  @Field(() => [ReviewCreateOrConnectWithoutLikedByInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutLikedByInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutLikedByInput>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
}

@InputType()
export class ReviewUncheckedCreateNestedManyWithoutUserBookInput {
  @Field(() => [ReviewCreateWithoutUserBookInput], { nullable: true })
  @Type(() => ReviewCreateWithoutUserBookInput)
  create?: Array<ReviewCreateWithoutUserBookInput>;
  @Field(() => [ReviewCreateOrConnectWithoutUserBookInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserBookInput>;
  @Field(() => ReviewCreateManyUserBookInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyUserBookInputEnvelope)
  createMany?: InstanceType<typeof ReviewCreateManyUserBookInputEnvelope>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
}

@InputType()
export class ReviewUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [ReviewCreateWithoutUserInput], { nullable: true })
  @Type(() => ReviewCreateWithoutUserInput)
  create?: Array<ReviewCreateWithoutUserInput>;
  @Field(() => [ReviewCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserInput>;
  @Field(() => ReviewCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof ReviewCreateManyUserInputEnvelope>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
}

@InputType()
export class ReviewUncheckedCreateWithoutBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => UserUncheckedCreateNestedManyWithoutLikedReviewsInput, {
    nullable: true,
  })
  likedBy?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutLikedReviewsInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutReviewInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutReviewInput
  >;
}

@InputType()
export class ReviewUncheckedCreateWithoutCommentsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => UserUncheckedCreateNestedManyWithoutLikedReviewsInput, {
    nullable: true,
  })
  likedBy?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutLikedReviewsInput
  >;
}

@InputType()
export class ReviewUncheckedCreateWithoutLikedByInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => CommentUncheckedCreateNestedManyWithoutReviewInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutReviewInput
  >;
}

@InputType()
export class ReviewUncheckedCreateWithoutUserBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => UserUncheckedCreateNestedManyWithoutLikedReviewsInput, {
    nullable: true,
  })
  likedBy?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutLikedReviewsInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutReviewInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutReviewInput
  >;
}

@InputType()
export class ReviewUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => UserUncheckedCreateNestedManyWithoutLikedReviewsInput, {
    nullable: true,
  })
  likedBy?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutLikedReviewsInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutReviewInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutReviewInput
  >;
}

@InputType()
export class ReviewUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => UserUncheckedCreateNestedManyWithoutLikedReviewsInput, {
    nullable: true,
  })
  likedBy?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutLikedReviewsInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutReviewInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutReviewInput
  >;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutBookNestedInput {
  @Field(() => [ReviewCreateWithoutBookInput], { nullable: true })
  @Type(() => ReviewCreateWithoutBookInput)
  create?: Array<ReviewCreateWithoutBookInput>;
  @Field(() => [ReviewCreateOrConnectWithoutBookInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutBookInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutBookInput>;
  @Field(() => [ReviewUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  @Type(() => ReviewUpsertWithWhereUniqueWithoutBookInput)
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutBookInput>;
  @Field(() => ReviewCreateManyBookInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyBookInputEnvelope)
  createMany?: InstanceType<typeof ReviewCreateManyBookInputEnvelope>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateWithWhereUniqueWithoutBookInput)
  update?: Array<ReviewUpdateWithWhereUniqueWithoutBookInput>;
  @Field(() => [ReviewUpdateManyWithWhereWithoutBookInput], { nullable: true })
  @Type(() => ReviewUpdateManyWithWhereWithoutBookInput)
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutBookInput>;
  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  @Type(() => ReviewScalarWhereInput)
  deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutLikedByNestedInput {
  @Field(() => [ReviewCreateWithoutLikedByInput], { nullable: true })
  @Type(() => ReviewCreateWithoutLikedByInput)
  create?: Array<ReviewCreateWithoutLikedByInput>;
  @Field(() => [ReviewCreateOrConnectWithoutLikedByInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutLikedByInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutLikedByInput>;
  @Field(() => [ReviewUpsertWithWhereUniqueWithoutLikedByInput], {
    nullable: true,
  })
  @Type(() => ReviewUpsertWithWhereUniqueWithoutLikedByInput)
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutLikedByInput>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewUpdateWithWhereUniqueWithoutLikedByInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateWithWhereUniqueWithoutLikedByInput)
  update?: Array<ReviewUpdateWithWhereUniqueWithoutLikedByInput>;
  @Field(() => [ReviewUpdateManyWithWhereWithoutLikedByInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateManyWithWhereWithoutLikedByInput)
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutLikedByInput>;
  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  @Type(() => ReviewScalarWhereInput)
  deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutLikedByInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutUserBookNestedInput {
  @Field(() => [ReviewCreateWithoutUserBookInput], { nullable: true })
  @Type(() => ReviewCreateWithoutUserBookInput)
  create?: Array<ReviewCreateWithoutUserBookInput>;
  @Field(() => [ReviewCreateOrConnectWithoutUserBookInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserBookInput>;
  @Field(() => [ReviewUpsertWithWhereUniqueWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => ReviewUpsertWithWhereUniqueWithoutUserBookInput)
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutUserBookInput>;
  @Field(() => ReviewCreateManyUserBookInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyUserBookInputEnvelope)
  createMany?: InstanceType<typeof ReviewCreateManyUserBookInputEnvelope>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewUpdateWithWhereUniqueWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateWithWhereUniqueWithoutUserBookInput)
  update?: Array<ReviewUpdateWithWhereUniqueWithoutUserBookInput>;
  @Field(() => [ReviewUpdateManyWithWhereWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateManyWithWhereWithoutUserBookInput)
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutUserBookInput>;
  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  @Type(() => ReviewScalarWhereInput)
  deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutUserBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [ReviewCreateWithoutUserInput], { nullable: true })
  @Type(() => ReviewCreateWithoutUserInput)
  create?: Array<ReviewCreateWithoutUserInput>;
  @Field(() => [ReviewCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserInput>;
  @Field(() => [ReviewUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => ReviewUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => ReviewCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof ReviewCreateManyUserInputEnvelope>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<ReviewUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [ReviewUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => ReviewUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  @Type(() => ReviewScalarWhereInput)
  deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => Int, { nullable: true })
  bookId?: number;
}

@InputType()
export class ReviewUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
}

@InputType()
export class ReviewUncheckedUpdateWithoutBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => UserUncheckedUpdateManyWithoutLikedReviewsNestedInput, {
    nullable: true,
  })
  likedBy?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutLikedReviewsNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutReviewNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutReviewNestedInput
  >;
}

@InputType()
export class ReviewUncheckedUpdateWithoutCommentsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => UserUncheckedUpdateManyWithoutLikedReviewsNestedInput, {
    nullable: true,
  })
  likedBy?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutLikedReviewsNestedInput
  >;
}

@InputType()
export class ReviewUncheckedUpdateWithoutLikedByInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => CommentUncheckedUpdateManyWithoutReviewNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutReviewNestedInput
  >;
}

@InputType()
export class ReviewUncheckedUpdateWithoutUserBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => UserUncheckedUpdateManyWithoutLikedReviewsNestedInput, {
    nullable: true,
  })
  likedBy?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutLikedReviewsNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutReviewNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutReviewNestedInput
  >;
}

@InputType()
export class ReviewUncheckedUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => UserUncheckedUpdateManyWithoutLikedReviewsNestedInput, {
    nullable: true,
  })
  likedBy?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutLikedReviewsNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutReviewNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutReviewNestedInput
  >;
}

@InputType()
export class ReviewUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => Int, { nullable: true })
  bookId?: number;
  @Field(() => UserUncheckedUpdateManyWithoutLikedReviewsNestedInput, {
    nullable: true,
  })
  likedBy?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutLikedReviewsNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutReviewNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutReviewNestedInput
  >;
}

@InputType()
export class ReviewUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
}

@InputType()
export class ReviewUpdateManyWithWhereWithoutBookInput {
  @Field(() => ReviewScalarWhereInput, { nullable: false })
  @Type(() => ReviewScalarWhereInput)
  where!: InstanceType<typeof ReviewScalarWhereInput>;
  @Field(() => ReviewUpdateManyMutationInput, { nullable: false })
  @Type(() => ReviewUpdateManyMutationInput)
  data!: InstanceType<typeof ReviewUpdateManyMutationInput>;
}

@InputType()
export class ReviewUpdateManyWithWhereWithoutLikedByInput {
  @Field(() => ReviewScalarWhereInput, { nullable: false })
  @Type(() => ReviewScalarWhereInput)
  where!: InstanceType<typeof ReviewScalarWhereInput>;
  @Field(() => ReviewUpdateManyMutationInput, { nullable: false })
  @Type(() => ReviewUpdateManyMutationInput)
  data!: InstanceType<typeof ReviewUpdateManyMutationInput>;
}

@InputType()
export class ReviewUpdateManyWithWhereWithoutUserBookInput {
  @Field(() => ReviewScalarWhereInput, { nullable: false })
  @Type(() => ReviewScalarWhereInput)
  where!: InstanceType<typeof ReviewScalarWhereInput>;
  @Field(() => ReviewUpdateManyMutationInput, { nullable: false })
  @Type(() => ReviewUpdateManyMutationInput)
  data!: InstanceType<typeof ReviewUpdateManyMutationInput>;
}

@InputType()
export class ReviewUpdateManyWithWhereWithoutUserInput {
  @Field(() => ReviewScalarWhereInput, { nullable: false })
  @Type(() => ReviewScalarWhereInput)
  where!: InstanceType<typeof ReviewScalarWhereInput>;
  @Field(() => ReviewUpdateManyMutationInput, { nullable: false })
  @Type(() => ReviewUpdateManyMutationInput)
  data!: InstanceType<typeof ReviewUpdateManyMutationInput>;
}

@InputType()
export class ReviewUpdateManyWithoutBookNestedInput {
  @Field(() => [ReviewCreateWithoutBookInput], { nullable: true })
  @Type(() => ReviewCreateWithoutBookInput)
  create?: Array<ReviewCreateWithoutBookInput>;
  @Field(() => [ReviewCreateOrConnectWithoutBookInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutBookInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutBookInput>;
  @Field(() => [ReviewUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  @Type(() => ReviewUpsertWithWhereUniqueWithoutBookInput)
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutBookInput>;
  @Field(() => ReviewCreateManyBookInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyBookInputEnvelope)
  createMany?: InstanceType<typeof ReviewCreateManyBookInputEnvelope>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateWithWhereUniqueWithoutBookInput)
  update?: Array<ReviewUpdateWithWhereUniqueWithoutBookInput>;
  @Field(() => [ReviewUpdateManyWithWhereWithoutBookInput], { nullable: true })
  @Type(() => ReviewUpdateManyWithWhereWithoutBookInput)
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutBookInput>;
  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  @Type(() => ReviewScalarWhereInput)
  deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUpdateManyWithoutLikedByNestedInput {
  @Field(() => [ReviewCreateWithoutLikedByInput], { nullable: true })
  @Type(() => ReviewCreateWithoutLikedByInput)
  create?: Array<ReviewCreateWithoutLikedByInput>;
  @Field(() => [ReviewCreateOrConnectWithoutLikedByInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutLikedByInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutLikedByInput>;
  @Field(() => [ReviewUpsertWithWhereUniqueWithoutLikedByInput], {
    nullable: true,
  })
  @Type(() => ReviewUpsertWithWhereUniqueWithoutLikedByInput)
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutLikedByInput>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewUpdateWithWhereUniqueWithoutLikedByInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateWithWhereUniqueWithoutLikedByInput)
  update?: Array<ReviewUpdateWithWhereUniqueWithoutLikedByInput>;
  @Field(() => [ReviewUpdateManyWithWhereWithoutLikedByInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateManyWithWhereWithoutLikedByInput)
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutLikedByInput>;
  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  @Type(() => ReviewScalarWhereInput)
  deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUpdateManyWithoutUserBookNestedInput {
  @Field(() => [ReviewCreateWithoutUserBookInput], { nullable: true })
  @Type(() => ReviewCreateWithoutUserBookInput)
  create?: Array<ReviewCreateWithoutUserBookInput>;
  @Field(() => [ReviewCreateOrConnectWithoutUserBookInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserBookInput>;
  @Field(() => [ReviewUpsertWithWhereUniqueWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => ReviewUpsertWithWhereUniqueWithoutUserBookInput)
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutUserBookInput>;
  @Field(() => ReviewCreateManyUserBookInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyUserBookInputEnvelope)
  createMany?: InstanceType<typeof ReviewCreateManyUserBookInputEnvelope>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewUpdateWithWhereUniqueWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateWithWhereUniqueWithoutUserBookInput)
  update?: Array<ReviewUpdateWithWhereUniqueWithoutUserBookInput>;
  @Field(() => [ReviewUpdateManyWithWhereWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateManyWithWhereWithoutUserBookInput)
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutUserBookInput>;
  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  @Type(() => ReviewScalarWhereInput)
  deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUpdateManyWithoutUserNestedInput {
  @Field(() => [ReviewCreateWithoutUserInput], { nullable: true })
  @Type(() => ReviewCreateWithoutUserInput)
  create?: Array<ReviewCreateWithoutUserInput>;
  @Field(() => [ReviewCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserInput>;
  @Field(() => [ReviewUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => ReviewUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => ReviewCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof ReviewCreateManyUserInputEnvelope>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ReviewUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<ReviewUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [ReviewUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => ReviewUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  @Type(() => ReviewScalarWhereInput)
  deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUpdateOneWithoutCommentsNestedInput {
  @Field(() => ReviewCreateWithoutCommentsInput, { nullable: true })
  @Type(() => ReviewCreateWithoutCommentsInput)
  create?: InstanceType<typeof ReviewCreateWithoutCommentsInput>;
  @Field(() => ReviewCreateOrConnectWithoutCommentsInput, { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutCommentsInput)
  connectOrCreate?: InstanceType<
    typeof ReviewCreateOrConnectWithoutCommentsInput
  >;
  @Field(() => ReviewUpsertWithoutCommentsInput, { nullable: true })
  @Type(() => ReviewUpsertWithoutCommentsInput)
  upsert?: InstanceType<typeof ReviewUpsertWithoutCommentsInput>;
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  disconnect?: InstanceType<typeof ReviewWhereInput>;
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  delete?: InstanceType<typeof ReviewWhereInput>;
  @Field(() => ReviewWhereUniqueInput, { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewUpdateToOneWithWhereWithoutCommentsInput, {
    nullable: true,
  })
  @Type(() => ReviewUpdateToOneWithWhereWithoutCommentsInput)
  update?: InstanceType<typeof ReviewUpdateToOneWithWhereWithoutCommentsInput>;
}

@InputType()
export class ReviewUpdateToOneWithWhereWithoutCommentsInput {
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  where?: InstanceType<typeof ReviewWhereInput>;
  @Field(() => ReviewUpdateWithoutCommentsInput, { nullable: false })
  @Type(() => ReviewUpdateWithoutCommentsInput)
  data!: InstanceType<typeof ReviewUpdateWithoutCommentsInput>;
}

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutBookInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewUpdateWithoutBookInput, { nullable: false })
  @Type(() => ReviewUpdateWithoutBookInput)
  data!: InstanceType<typeof ReviewUpdateWithoutBookInput>;
}

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutLikedByInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewUpdateWithoutLikedByInput, { nullable: false })
  @Type(() => ReviewUpdateWithoutLikedByInput)
  data!: InstanceType<typeof ReviewUpdateWithoutLikedByInput>;
}

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutUserBookInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewUpdateWithoutUserBookInput, { nullable: false })
  @Type(() => ReviewUpdateWithoutUserBookInput)
  data!: InstanceType<typeof ReviewUpdateWithoutUserBookInput>;
}

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewUpdateWithoutUserInput, { nullable: false })
  @Type(() => ReviewUpdateWithoutUserInput)
  data!: InstanceType<typeof ReviewUpdateWithoutUserInput>;
}

@InputType()
export class ReviewUpdateWithoutBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => UserBookUpdateOneWithoutReviewsNestedInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookUpdateOneWithoutReviewsNestedInput>;
  @Field(() => UserUpdateManyWithoutLikedReviewsNestedInput, { nullable: true })
  likedBy?: InstanceType<typeof UserUpdateManyWithoutLikedReviewsNestedInput>;
  @Field(() => CommentUpdateManyWithoutReviewNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutReviewNestedInput>;
  @Field(() => UserUpdateOneWithoutReviewsNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutReviewsNestedInput>;
}

@InputType()
export class ReviewUpdateWithoutCommentsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => UserBookUpdateOneWithoutReviewsNestedInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookUpdateOneWithoutReviewsNestedInput>;
  @Field(() => UserUpdateManyWithoutLikedReviewsNestedInput, { nullable: true })
  likedBy?: InstanceType<typeof UserUpdateManyWithoutLikedReviewsNestedInput>;
  @Field(() => UserUpdateOneWithoutReviewsNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutReviewsNestedInput>;
  @Field(() => BookUpdateOneWithoutReviewsNestedInput, { nullable: true })
  book?: InstanceType<typeof BookUpdateOneWithoutReviewsNestedInput>;
}

@InputType()
export class ReviewUpdateWithoutLikedByInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => UserBookUpdateOneWithoutReviewsNestedInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookUpdateOneWithoutReviewsNestedInput>;
  @Field(() => CommentUpdateManyWithoutReviewNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutReviewNestedInput>;
  @Field(() => UserUpdateOneWithoutReviewsNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutReviewsNestedInput>;
  @Field(() => BookUpdateOneWithoutReviewsNestedInput, { nullable: true })
  book?: InstanceType<typeof BookUpdateOneWithoutReviewsNestedInput>;
}

@InputType()
export class ReviewUpdateWithoutUserBookInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => UserUpdateManyWithoutLikedReviewsNestedInput, { nullable: true })
  likedBy?: InstanceType<typeof UserUpdateManyWithoutLikedReviewsNestedInput>;
  @Field(() => CommentUpdateManyWithoutReviewNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutReviewNestedInput>;
  @Field(() => UserUpdateOneWithoutReviewsNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutReviewsNestedInput>;
  @Field(() => BookUpdateOneWithoutReviewsNestedInput, { nullable: true })
  book?: InstanceType<typeof BookUpdateOneWithoutReviewsNestedInput>;
}

@InputType()
export class ReviewUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => UserBookUpdateOneWithoutReviewsNestedInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookUpdateOneWithoutReviewsNestedInput>;
  @Field(() => UserUpdateManyWithoutLikedReviewsNestedInput, { nullable: true })
  likedBy?: InstanceType<typeof UserUpdateManyWithoutLikedReviewsNestedInput>;
  @Field(() => CommentUpdateManyWithoutReviewNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutReviewNestedInput>;
  @Field(() => BookUpdateOneWithoutReviewsNestedInput, { nullable: true })
  book?: InstanceType<typeof BookUpdateOneWithoutReviewsNestedInput>;
}

@InputType()
export class ReviewUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Int, { nullable: true })
  likeCount?: number;
  @Field(() => Boolean, { nullable: true })
  spoilers?: boolean;
  @Field(() => UserBookUpdateOneWithoutReviewsNestedInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookUpdateOneWithoutReviewsNestedInput>;
  @Field(() => UserUpdateManyWithoutLikedReviewsNestedInput, { nullable: true })
  likedBy?: InstanceType<typeof UserUpdateManyWithoutLikedReviewsNestedInput>;
  @Field(() => CommentUpdateManyWithoutReviewNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutReviewNestedInput>;
  @Field(() => UserUpdateOneWithoutReviewsNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutReviewsNestedInput>;
  @Field(() => BookUpdateOneWithoutReviewsNestedInput, { nullable: true })
  book?: InstanceType<typeof BookUpdateOneWithoutReviewsNestedInput>;
}

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutBookInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewUpdateWithoutBookInput, { nullable: false })
  @Type(() => ReviewUpdateWithoutBookInput)
  update!: InstanceType<typeof ReviewUpdateWithoutBookInput>;
  @Field(() => ReviewCreateWithoutBookInput, { nullable: false })
  @Type(() => ReviewCreateWithoutBookInput)
  create!: InstanceType<typeof ReviewCreateWithoutBookInput>;
}

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutLikedByInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewUpdateWithoutLikedByInput, { nullable: false })
  @Type(() => ReviewUpdateWithoutLikedByInput)
  update!: InstanceType<typeof ReviewUpdateWithoutLikedByInput>;
  @Field(() => ReviewCreateWithoutLikedByInput, { nullable: false })
  @Type(() => ReviewCreateWithoutLikedByInput)
  create!: InstanceType<typeof ReviewCreateWithoutLikedByInput>;
}

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutUserBookInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewUpdateWithoutUserBookInput, { nullable: false })
  @Type(() => ReviewUpdateWithoutUserBookInput)
  update!: InstanceType<typeof ReviewUpdateWithoutUserBookInput>;
  @Field(() => ReviewCreateWithoutUserBookInput, { nullable: false })
  @Type(() => ReviewCreateWithoutUserBookInput)
  create!: InstanceType<typeof ReviewCreateWithoutUserBookInput>;
}

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewUpdateWithoutUserInput, { nullable: false })
  @Type(() => ReviewUpdateWithoutUserInput)
  update!: InstanceType<typeof ReviewUpdateWithoutUserInput>;
  @Field(() => ReviewCreateWithoutUserInput, { nullable: false })
  @Type(() => ReviewCreateWithoutUserInput)
  create!: InstanceType<typeof ReviewCreateWithoutUserInput>;
}

@InputType()
export class ReviewUpsertWithoutCommentsInput {
  @Field(() => ReviewUpdateWithoutCommentsInput, { nullable: false })
  @Type(() => ReviewUpdateWithoutCommentsInput)
  update!: InstanceType<typeof ReviewUpdateWithoutCommentsInput>;
  @Field(() => ReviewCreateWithoutCommentsInput, { nullable: false })
  @Type(() => ReviewCreateWithoutCommentsInput)
  create!: InstanceType<typeof ReviewCreateWithoutCommentsInput>;
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  where?: InstanceType<typeof ReviewWhereInput>;
}

@InputType()
export class ReviewWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => ReviewIdentifierCompoundUniqueInput, { nullable: true })
  identifier?: InstanceType<typeof ReviewIdentifierCompoundUniqueInput>;
  @Field(() => [ReviewWhereInput], { nullable: true })
  AND?: Array<ReviewWhereInput>;
  @Field(() => [ReviewWhereInput], { nullable: true })
  OR?: Array<ReviewWhereInput>;
  @Field(() => [ReviewWhereInput], { nullable: true })
  NOT?: Array<ReviewWhereInput>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  content?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userBookId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  likeCount?: InstanceType<typeof IntFilter>;
  @Field(() => BoolFilter, { nullable: true })
  spoilers?: InstanceType<typeof BoolFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  bookId?: InstanceType<typeof IntFilter>;
  @Field(() => UserBookRelationFilter, { nullable: true })
  userBook?: InstanceType<typeof UserBookRelationFilter>;
  @Field(() => UserListRelationFilter, { nullable: true })
  likedBy?: InstanceType<typeof UserListRelationFilter>;
  @Field(() => CommentListRelationFilter, { nullable: true })
  comments?: InstanceType<typeof CommentListRelationFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
  @Field(() => BookRelationFilter, { nullable: true })
  book?: InstanceType<typeof BookRelationFilter>;
}

@InputType()
export class ReviewWhereInput {
  @Field(() => [ReviewWhereInput], { nullable: true })
  AND?: Array<ReviewWhereInput>;
  @Field(() => [ReviewWhereInput], { nullable: true })
  OR?: Array<ReviewWhereInput>;
  @Field(() => [ReviewWhereInput], { nullable: true })
  NOT?: Array<ReviewWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  content?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userBookId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  likeCount?: InstanceType<typeof IntFilter>;
  @Field(() => BoolFilter, { nullable: true })
  spoilers?: InstanceType<typeof BoolFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  bookId?: InstanceType<typeof IntFilter>;
  @Field(() => UserBookRelationFilter, { nullable: true })
  userBook?: InstanceType<typeof UserBookRelationFilter>;
  @Field(() => UserListRelationFilter, { nullable: true })
  likedBy?: InstanceType<typeof UserListRelationFilter>;
  @Field(() => CommentListRelationFilter, { nullable: true })
  comments?: InstanceType<typeof CommentListRelationFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
  @Field(() => BookRelationFilter, { nullable: true })
  book?: InstanceType<typeof BookRelationFilter>;
}

@ObjectType()
export class Review {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => String, { nullable: true })
  content!: string | null;
  @Field(() => String, { nullable: true })
  userBookId!: string | null;
  @Field(() => Int, { nullable: false, defaultValue: 0 })
  likeCount!: number;
  @Field(() => Boolean, { nullable: false, defaultValue: false })
  spoilers!: boolean;
  @Field(() => String, { nullable: true })
  userId!: string | null;
  @Field(() => Int, { nullable: true })
  bookId!: number | null;
  @Field(() => UserBook, { nullable: true })
  userBook?: InstanceType<typeof UserBook> | null;
  @Field(() => [User], { nullable: true })
  likedBy?: Array<User>;
  @Field(() => [Comment], { nullable: true })
  comments?: Array<Comment>;
  @Field(() => User, { nullable: true })
  user?: InstanceType<typeof User> | null;
  @Field(() => Book, { nullable: true })
  book?: InstanceType<typeof Book> | null;
  @Field(() => ReviewCount, { nullable: false })
  _count?: InstanceType<typeof ReviewCount>;
}

@ArgsType()
export class UpdateManyReviewArgs {
  @Field(() => ReviewUpdateManyMutationInput, { nullable: false })
  @Type(() => ReviewUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof ReviewUpdateManyMutationInput>;
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ReviewWhereInput>;
}

@ArgsType()
export class UpdateOneReviewArgs {
  @Field(() => ReviewUpdateInput, { nullable: false })
  @Type(() => ReviewUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof ReviewUpdateInput>;
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class UpsertOneReviewArgs {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ReviewCreateInput, { nullable: false })
  @Type(() => ReviewCreateInput)
  create!: InstanceType<typeof ReviewCreateInput>;
  @Field(() => ReviewUpdateInput, { nullable: false })
  @Type(() => ReviewUpdateInput)
  update!: InstanceType<typeof ReviewUpdateInput>;
}

@ObjectType()
export class AggregateShelf {
  @Field(() => ShelfCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ShelfCountAggregate>;
  @Field(() => ShelfMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ShelfMinAggregate>;
  @Field(() => ShelfMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ShelfMaxAggregate>;
}

@ArgsType()
export class CreateManyShelfArgs {
  @Field(() => [ShelfCreateManyInput], { nullable: false })
  @Type(() => ShelfCreateManyInput)
  @ValidateNested()
  data!: Array<ShelfCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneShelfArgs {
  @Field(() => ShelfCreateInput, { nullable: false })
  @Type(() => ShelfCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof ShelfCreateInput>;
}

@ArgsType()
export class DeleteManyShelfArgs {
  @Field(() => ShelfWhereInput, { nullable: true })
  @Type(() => ShelfWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ShelfWhereInput>;
}

@ArgsType()
export class DeleteOneShelfArgs {
  @Field(() => ShelfWhereUniqueInput, { nullable: false })
  @Type(() => ShelfWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class FindFirstShelfOrThrowArgs {
  @Field(() => ShelfWhereInput, { nullable: true })
  @Type(() => ShelfWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ShelfWhereInput>;
  @Field(() => [ShelfOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ShelfOrderByWithRelationInput>;
  @Field(() => ShelfWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ShelfScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ShelfScalarFieldEnum>;
}

@ArgsType()
export class FindFirstShelfArgs {
  @Field(() => ShelfWhereInput, { nullable: true })
  @Type(() => ShelfWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ShelfWhereInput>;
  @Field(() => [ShelfOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ShelfOrderByWithRelationInput>;
  @Field(() => ShelfWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ShelfScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ShelfScalarFieldEnum>;
}

@ArgsType()
export class FindManyShelfArgs {
  @Field(() => ShelfWhereInput, { nullable: true })
  @Type(() => ShelfWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ShelfWhereInput>;
  @Field(() => [ShelfOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ShelfOrderByWithRelationInput>;
  @Field(() => ShelfWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ShelfScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ShelfScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueShelfOrThrowArgs {
  @Field(() => ShelfWhereUniqueInput, { nullable: false })
  @Type(() => ShelfWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class FindUniqueShelfArgs {
  @Field(() => ShelfWhereUniqueInput, { nullable: false })
  @Type(() => ShelfWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class ShelfAggregateArgs {
  @Field(() => ShelfWhereInput, { nullable: true })
  @Type(() => ShelfWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ShelfWhereInput>;
  @Field(() => [ShelfOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ShelfOrderByWithRelationInput>;
  @Field(() => ShelfWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ShelfCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ShelfCountAggregateInput>;
  @Field(() => ShelfMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ShelfMinAggregateInput>;
  @Field(() => ShelfMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ShelfMaxAggregateInput>;
}

@InputType()
export class ShelfCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  dateTime?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class ShelfCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  name!: number;
  @Field(() => Int, { nullable: false })
  userId!: number;
  @Field(() => Int, { nullable: false })
  dateTime!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class ShelfCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateTime?: keyof typeof SortOrder;
}

@ObjectType()
export class ShelfCount {
  @Field(() => Int, { nullable: false })
  userBooks?: number;
}

@InputType()
export class ShelfCreateManyUserInputEnvelope {
  @Field(() => [ShelfCreateManyUserInput], { nullable: false })
  @Type(() => ShelfCreateManyUserInput)
  data!: Array<ShelfCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class ShelfCreateManyUserInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  name!: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
}

@InputType()
export class ShelfCreateManyInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  name!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
}

@InputType()
export class ShelfCreateNestedManyWithoutUserInput {
  @Field(() => [ShelfCreateWithoutUserInput], { nullable: true })
  @Type(() => ShelfCreateWithoutUserInput)
  create?: Array<ShelfCreateWithoutUserInput>;
  @Field(() => [ShelfCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => ShelfCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<ShelfCreateOrConnectWithoutUserInput>;
  @Field(() => ShelfCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => ShelfCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof ShelfCreateManyUserInputEnvelope>;
  @Field(() => [ShelfWhereUniqueInput], { nullable: true })
  @Type(() => ShelfWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
}

@InputType()
export class ShelfCreateNestedOneWithoutUserBooksInput {
  @Field(() => ShelfCreateWithoutUserBooksInput, { nullable: true })
  @Type(() => ShelfCreateWithoutUserBooksInput)
  create?: InstanceType<typeof ShelfCreateWithoutUserBooksInput>;
  @Field(() => ShelfCreateOrConnectWithoutUserBooksInput, { nullable: true })
  @Type(() => ShelfCreateOrConnectWithoutUserBooksInput)
  connectOrCreate?: InstanceType<
    typeof ShelfCreateOrConnectWithoutUserBooksInput
  >;
  @Field(() => ShelfWhereUniqueInput, { nullable: true })
  @Type(() => ShelfWhereUniqueInput)
  connect?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
}

@InputType()
export class ShelfCreateOrConnectWithoutUserBooksInput {
  @Field(() => ShelfWhereUniqueInput, { nullable: false })
  @Type(() => ShelfWhereUniqueInput)
  where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ShelfCreateWithoutUserBooksInput, { nullable: false })
  @Type(() => ShelfCreateWithoutUserBooksInput)
  create!: InstanceType<typeof ShelfCreateWithoutUserBooksInput>;
}

@InputType()
export class ShelfCreateOrConnectWithoutUserInput {
  @Field(() => ShelfWhereUniqueInput, { nullable: false })
  @Type(() => ShelfWhereUniqueInput)
  where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ShelfCreateWithoutUserInput, { nullable: false })
  @Type(() => ShelfCreateWithoutUserInput)
  create!: InstanceType<typeof ShelfCreateWithoutUserInput>;
}

@InputType()
export class ShelfCreateWithoutUserBooksInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  name!: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
  @Field(() => UserCreateNestedOneWithoutShelvesInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutShelvesInput>;
}

@InputType()
export class ShelfCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  name!: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
  @Field(() => UserBookShelvesCreateNestedManyWithoutShelfInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookShelvesCreateNestedManyWithoutShelfInput
  >;
}

@InputType()
export class ShelfCreateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  name!: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
  @Field(() => UserCreateNestedOneWithoutShelvesInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutShelvesInput>;
  @Field(() => UserBookShelvesCreateNestedManyWithoutShelfInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookShelvesCreateNestedManyWithoutShelfInput
  >;
}

@ArgsType()
export class ShelfGroupByArgs {
  @Field(() => ShelfWhereInput, { nullable: true })
  @Type(() => ShelfWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ShelfWhereInput>;
  @Field(() => [ShelfOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ShelfOrderByWithAggregationInput>;
  @Field(() => [ShelfScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ShelfScalarFieldEnum>;
  @Field(() => ShelfScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof ShelfScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ShelfCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ShelfCountAggregateInput>;
  @Field(() => ShelfMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ShelfMinAggregateInput>;
  @Field(() => ShelfMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ShelfMaxAggregateInput>;
}

@ObjectType()
export class ShelfGroupBy {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  id!: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  name!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
  @Field(() => ShelfCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ShelfCountAggregate>;
  @Field(() => ShelfMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ShelfMinAggregate>;
  @Field(() => ShelfMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ShelfMaxAggregate>;
}

@InputType()
export class ShelfIdentifierCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  userId!: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  name!: string;
}

@InputType()
export class ShelfListRelationFilter {
  @Field(() => ShelfWhereInput, { nullable: true })
  every?: InstanceType<typeof ShelfWhereInput>;
  @Field(() => ShelfWhereInput, { nullable: true })
  some?: InstanceType<typeof ShelfWhereInput>;
  @Field(() => ShelfWhereInput, { nullable: true })
  none?: InstanceType<typeof ShelfWhereInput>;
}

@InputType()
export class ShelfMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  dateTime?: true;
}

@ObjectType()
export class ShelfMaxAggregate {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  name?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
}

@InputType()
export class ShelfMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateTime?: keyof typeof SortOrder;
}

@InputType()
export class ShelfMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  name?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  dateTime?: true;
}

@ObjectType()
export class ShelfMinAggregate {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  name?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
}

@InputType()
export class ShelfMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateTime?: keyof typeof SortOrder;
}

@InputType()
export class ShelfOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class ShelfOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  userId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  dateTime?: InstanceType<typeof SortOrderInput>;
  @Field(() => ShelfCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ShelfCountOrderByAggregateInput>;
  @Field(() => ShelfMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ShelfMaxOrderByAggregateInput>;
  @Field(() => ShelfMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ShelfMinOrderByAggregateInput>;
}

@InputType()
export class ShelfOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  userId?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  dateTime?: InstanceType<typeof SortOrderInput>;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UserOrderByWithRelationInput>;
  @Field(() => UserBookShelvesOrderByRelationAggregateInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookShelvesOrderByRelationAggregateInput>;
}

@InputType()
export class ShelfRelationFilter {
  @Field(() => ShelfWhereInput, { nullable: true })
  is?: InstanceType<typeof ShelfWhereInput>;
  @Field(() => ShelfWhereInput, { nullable: true })
  isNot?: InstanceType<typeof ShelfWhereInput>;
}

@InputType()
export class ShelfScalarWhereWithAggregatesInput {
  @Field(() => [ShelfScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ShelfScalarWhereWithAggregatesInput>;
  @Field(() => [ShelfScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ShelfScalarWhereWithAggregatesInput>;
  @Field(() => [ShelfScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ShelfScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  dateTime?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ShelfScalarWhereInput {
  @Field(() => [ShelfScalarWhereInput], { nullable: true })
  AND?: Array<ShelfScalarWhereInput>;
  @Field(() => [ShelfScalarWhereInput], { nullable: true })
  OR?: Array<ShelfScalarWhereInput>;
  @Field(() => [ShelfScalarWhereInput], { nullable: true })
  NOT?: Array<ShelfScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  dateTime?: InstanceType<typeof StringFilter>;
}

@InputType()
export class ShelfUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [ShelfCreateWithoutUserInput], { nullable: true })
  @Type(() => ShelfCreateWithoutUserInput)
  create?: Array<ShelfCreateWithoutUserInput>;
  @Field(() => [ShelfCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => ShelfCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<ShelfCreateOrConnectWithoutUserInput>;
  @Field(() => ShelfCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => ShelfCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof ShelfCreateManyUserInputEnvelope>;
  @Field(() => [ShelfWhereUniqueInput], { nullable: true })
  @Type(() => ShelfWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
}

@InputType()
export class ShelfUncheckedCreateWithoutUserBooksInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  name!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
}

@InputType()
export class ShelfUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  name!: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
  @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutShelfInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookShelvesUncheckedCreateNestedManyWithoutShelfInput
  >;
}

@InputType()
export class ShelfUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  name!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
  @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutShelfInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookShelvesUncheckedCreateNestedManyWithoutShelfInput
  >;
}

@InputType()
export class ShelfUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [ShelfCreateWithoutUserInput], { nullable: true })
  @Type(() => ShelfCreateWithoutUserInput)
  create?: Array<ShelfCreateWithoutUserInput>;
  @Field(() => [ShelfCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => ShelfCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<ShelfCreateOrConnectWithoutUserInput>;
  @Field(() => [ShelfUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  @Type(() => ShelfUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<ShelfUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => ShelfCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => ShelfCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof ShelfCreateManyUserInputEnvelope>;
  @Field(() => [ShelfWhereUniqueInput], { nullable: true })
  @Type(() => ShelfWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ShelfWhereUniqueInput], { nullable: true })
  @Type(() => ShelfWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [ShelfWhereUniqueInput], { nullable: true })
  @Type(() => ShelfWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ShelfWhereUniqueInput], { nullable: true })
  @Type(() => ShelfWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ShelfUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  @Type(() => ShelfUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<ShelfUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [ShelfUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => ShelfUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<ShelfUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [ShelfScalarWhereInput], { nullable: true })
  @Type(() => ShelfScalarWhereInput)
  deleteMany?: Array<ShelfScalarWhereInput>;
}

@InputType()
export class ShelfUncheckedUpdateManyWithoutUserInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  name?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
}

@InputType()
export class ShelfUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  name?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
}

@InputType()
export class ShelfUncheckedUpdateWithoutUserBooksInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  name?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
}

@InputType()
export class ShelfUncheckedUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  name?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
  @Field(() => UserBookShelvesUncheckedUpdateManyWithoutShelfNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookShelvesUncheckedUpdateManyWithoutShelfNestedInput
  >;
}

@InputType()
export class ShelfUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  name?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
  @Field(() => UserBookShelvesUncheckedUpdateManyWithoutShelfNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookShelvesUncheckedUpdateManyWithoutShelfNestedInput
  >;
}

@InputType()
export class ShelfUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  name?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
}

@InputType()
export class ShelfUpdateManyWithWhereWithoutUserInput {
  @Field(() => ShelfScalarWhereInput, { nullable: false })
  @Type(() => ShelfScalarWhereInput)
  where!: InstanceType<typeof ShelfScalarWhereInput>;
  @Field(() => ShelfUpdateManyMutationInput, { nullable: false })
  @Type(() => ShelfUpdateManyMutationInput)
  data!: InstanceType<typeof ShelfUpdateManyMutationInput>;
}

@InputType()
export class ShelfUpdateManyWithoutUserNestedInput {
  @Field(() => [ShelfCreateWithoutUserInput], { nullable: true })
  @Type(() => ShelfCreateWithoutUserInput)
  create?: Array<ShelfCreateWithoutUserInput>;
  @Field(() => [ShelfCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => ShelfCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<ShelfCreateOrConnectWithoutUserInput>;
  @Field(() => [ShelfUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  @Type(() => ShelfUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<ShelfUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => ShelfCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => ShelfCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof ShelfCreateManyUserInputEnvelope>;
  @Field(() => [ShelfWhereUniqueInput], { nullable: true })
  @Type(() => ShelfWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ShelfWhereUniqueInput], { nullable: true })
  @Type(() => ShelfWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [ShelfWhereUniqueInput], { nullable: true })
  @Type(() => ShelfWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ShelfWhereUniqueInput], { nullable: true })
  @Type(() => ShelfWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [ShelfUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  @Type(() => ShelfUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<ShelfUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [ShelfUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => ShelfUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<ShelfUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [ShelfScalarWhereInput], { nullable: true })
  @Type(() => ShelfScalarWhereInput)
  deleteMany?: Array<ShelfScalarWhereInput>;
}

@InputType()
export class ShelfUpdateOneRequiredWithoutUserBooksNestedInput {
  @Field(() => ShelfCreateWithoutUserBooksInput, { nullable: true })
  @Type(() => ShelfCreateWithoutUserBooksInput)
  create?: InstanceType<typeof ShelfCreateWithoutUserBooksInput>;
  @Field(() => ShelfCreateOrConnectWithoutUserBooksInput, { nullable: true })
  @Type(() => ShelfCreateOrConnectWithoutUserBooksInput)
  connectOrCreate?: InstanceType<
    typeof ShelfCreateOrConnectWithoutUserBooksInput
  >;
  @Field(() => ShelfUpsertWithoutUserBooksInput, { nullable: true })
  @Type(() => ShelfUpsertWithoutUserBooksInput)
  upsert?: InstanceType<typeof ShelfUpsertWithoutUserBooksInput>;
  @Field(() => ShelfWhereUniqueInput, { nullable: true })
  @Type(() => ShelfWhereUniqueInput)
  connect?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ShelfUpdateToOneWithWhereWithoutUserBooksInput, {
    nullable: true,
  })
  @Type(() => ShelfUpdateToOneWithWhereWithoutUserBooksInput)
  update?: InstanceType<typeof ShelfUpdateToOneWithWhereWithoutUserBooksInput>;
}

@InputType()
export class ShelfUpdateToOneWithWhereWithoutUserBooksInput {
  @Field(() => ShelfWhereInput, { nullable: true })
  @Type(() => ShelfWhereInput)
  where?: InstanceType<typeof ShelfWhereInput>;
  @Field(() => ShelfUpdateWithoutUserBooksInput, { nullable: false })
  @Type(() => ShelfUpdateWithoutUserBooksInput)
  data!: InstanceType<typeof ShelfUpdateWithoutUserBooksInput>;
}

@InputType()
export class ShelfUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => ShelfWhereUniqueInput, { nullable: false })
  @Type(() => ShelfWhereUniqueInput)
  where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ShelfUpdateWithoutUserInput, { nullable: false })
  @Type(() => ShelfUpdateWithoutUserInput)
  data!: InstanceType<typeof ShelfUpdateWithoutUserInput>;
}

@InputType()
export class ShelfUpdateWithoutUserBooksInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  name?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
  @Field(() => UserUpdateOneWithoutShelvesNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutShelvesNestedInput>;
}

@InputType()
export class ShelfUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  name?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
  @Field(() => UserBookShelvesUpdateManyWithoutShelfNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookShelvesUpdateManyWithoutShelfNestedInput
  >;
}

@InputType()
export class ShelfUpdateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  name?: string;
  @Field(() => String, { nullable: true })
  dateTime?: string;
  @Field(() => UserUpdateOneWithoutShelvesNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutShelvesNestedInput>;
  @Field(() => UserBookShelvesUpdateManyWithoutShelfNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookShelvesUpdateManyWithoutShelfNestedInput
  >;
}

@InputType()
export class ShelfUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => ShelfWhereUniqueInput, { nullable: false })
  @Type(() => ShelfWhereUniqueInput)
  where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ShelfUpdateWithoutUserInput, { nullable: false })
  @Type(() => ShelfUpdateWithoutUserInput)
  update!: InstanceType<typeof ShelfUpdateWithoutUserInput>;
  @Field(() => ShelfCreateWithoutUserInput, { nullable: false })
  @Type(() => ShelfCreateWithoutUserInput)
  create!: InstanceType<typeof ShelfCreateWithoutUserInput>;
}

@InputType()
export class ShelfUpsertWithoutUserBooksInput {
  @Field(() => ShelfUpdateWithoutUserBooksInput, { nullable: false })
  @Type(() => ShelfUpdateWithoutUserBooksInput)
  update!: InstanceType<typeof ShelfUpdateWithoutUserBooksInput>;
  @Field(() => ShelfCreateWithoutUserBooksInput, { nullable: false })
  @Type(() => ShelfCreateWithoutUserBooksInput)
  create!: InstanceType<typeof ShelfCreateWithoutUserBooksInput>;
  @Field(() => ShelfWhereInput, { nullable: true })
  @Type(() => ShelfWhereInput)
  where?: InstanceType<typeof ShelfWhereInput>;
}

@InputType()
export class ShelfWhereUniqueInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => ShelfIdentifierCompoundUniqueInput, { nullable: true })
  identifier?: InstanceType<typeof ShelfIdentifierCompoundUniqueInput>;
  @Field(() => [ShelfWhereInput], { nullable: true })
  AND?: Array<ShelfWhereInput>;
  @Field(() => [ShelfWhereInput], { nullable: true })
  OR?: Array<ShelfWhereInput>;
  @Field(() => [ShelfWhereInput], { nullable: true })
  NOT?: Array<ShelfWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  dateTime?: InstanceType<typeof StringFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
  @Field(() => UserBookShelvesListRelationFilter, { nullable: true })
  userBooks?: InstanceType<typeof UserBookShelvesListRelationFilter>;
}

@InputType()
export class ShelfWhereInput {
  @Field(() => [ShelfWhereInput], { nullable: true })
  AND?: Array<ShelfWhereInput>;
  @Field(() => [ShelfWhereInput], { nullable: true })
  OR?: Array<ShelfWhereInput>;
  @Field(() => [ShelfWhereInput], { nullable: true })
  NOT?: Array<ShelfWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  dateTime?: InstanceType<typeof StringFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
  @Field(() => UserBookShelvesListRelationFilter, { nullable: true })
  userBooks?: InstanceType<typeof UserBookShelvesListRelationFilter>;
}

@ObjectType()
export class Shelf {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  userId!: string | null;
  @Field(() => String, { nullable: true })
  dateTime!: string | null;
  @Field(() => User, { nullable: true })
  user?: InstanceType<typeof User> | null;
  @Field(() => [UserBookShelves], { nullable: true })
  userBooks?: Array<UserBookShelves>;
  @Field(() => ShelfCount, { nullable: false })
  _count?: InstanceType<typeof ShelfCount>;
}

@ArgsType()
export class UpdateManyShelfArgs {
  @Field(() => ShelfUpdateManyMutationInput, { nullable: false })
  @Type(() => ShelfUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof ShelfUpdateManyMutationInput>;
  @Field(() => ShelfWhereInput, { nullable: true })
  @Type(() => ShelfWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof ShelfWhereInput>;
}

@ArgsType()
export class UpdateOneShelfArgs {
  @Field(() => ShelfUpdateInput, { nullable: false })
  @Type(() => ShelfUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof ShelfUpdateInput>;
  @Field(() => ShelfWhereUniqueInput, { nullable: false })
  @Type(() => ShelfWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class UpsertOneShelfArgs {
  @Field(() => ShelfWhereUniqueInput, { nullable: false })
  @Type(() => ShelfWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => ShelfCreateInput, { nullable: false })
  @Type(() => ShelfCreateInput)
  create!: InstanceType<typeof ShelfCreateInput>;
  @Field(() => ShelfUpdateInput, { nullable: false })
  @Type(() => ShelfUpdateInput)
  update!: InstanceType<typeof ShelfUpdateInput>;
}

@ObjectType()
export class AggregateUser {
  @Field(() => UserCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregate>;
  @Field(() => UserMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregate>;
  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
  @Field(() => [UserCreateManyInput], { nullable: false })
  @Type(() => UserCreateManyInput)
  @ValidateNested()
  data!: Array<UserCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@ArgsType()
export class FindUniqueUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@ArgsType()
export class UpdateManyUserArgs {
  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  @Type(() => UserUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof UserUpdateManyMutationInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof UserUpdateInput>;
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@ArgsType()
export class UpsertOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  create!: InstanceType<typeof UserCreateInput>;
  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregateInput>;
  @Field(() => UserMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregateInput>;
  @Field(() => UserMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  username?: true;
  @Field(() => Boolean, { nullable: true })
  hashedPassword?: true;
  @Field(() => Boolean, { nullable: true })
  hashedRefreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  image?: true;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class UserCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  email!: number;
  @Field(() => Int, { nullable: false })
  username!: number;
  @HideField()
  hashedPassword!: number;
  @HideField()
  hashedRefreshToken!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  image!: number;
  @Field(() => Int, { nullable: false })
  emailVerified!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hashedPassword?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hashedRefreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  image?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  emailVerified?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
  @Field(() => Int, { nullable: false })
  userBooks?: number;
  @Field(() => Int, { nullable: false })
  shelves?: number;
  @Field(() => Int, { nullable: false })
  journalEntries?: number;
  @Field(() => Int, { nullable: false })
  following?: number;
  @Field(() => Int, { nullable: false })
  followers?: number;
  @Field(() => Int, { nullable: false })
  reviews?: number;
  @Field(() => Int, { nullable: false })
  likedReviews?: number;
  @Field(() => Int, { nullable: false })
  comments?: number;
  @Field(() => Int, { nullable: false })
  auditLogs?: number;
  @Field(() => Int, { nullable: false })
  accounts?: number;
}

@InputType()
export class UserCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
}

@InputType()
export class UserCreateNestedManyWithoutFollowersInput {
  @Field(() => [UserCreateWithoutFollowersInput], { nullable: true })
  @Type(() => UserCreateWithoutFollowersInput)
  create?: Array<UserCreateWithoutFollowersInput>;
  @Field(() => [UserCreateOrConnectWithoutFollowersInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFollowersInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutFollowersInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
}

@InputType()
export class UserCreateNestedManyWithoutFollowingInput {
  @Field(() => [UserCreateWithoutFollowingInput], { nullable: true })
  @Type(() => UserCreateWithoutFollowingInput)
  create?: Array<UserCreateWithoutFollowingInput>;
  @Field(() => [UserCreateOrConnectWithoutFollowingInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFollowingInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
}

@InputType()
export class UserCreateNestedManyWithoutLikedReviewsInput {
  @Field(() => [UserCreateWithoutLikedReviewsInput], { nullable: true })
  @Type(() => UserCreateWithoutLikedReviewsInput)
  create?: Array<UserCreateWithoutLikedReviewsInput>;
  @Field(() => [UserCreateOrConnectWithoutLikedReviewsInput], {
    nullable: true,
  })
  @Type(() => UserCreateOrConnectWithoutLikedReviewsInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutLikedReviewsInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
}

@InputType()
export class UserCreateNestedOneWithoutAccountsInput {
  @Field(() => UserCreateWithoutAccountsInput, { nullable: true })
  @Type(() => UserCreateWithoutAccountsInput)
  create?: InstanceType<typeof UserCreateWithoutAccountsInput>;
  @Field(() => UserCreateOrConnectWithoutAccountsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutAccountsInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutAccountsInput
  >;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutAuditLogsInput {
  @Field(() => UserCreateWithoutAuditLogsInput, { nullable: true })
  @Type(() => UserCreateWithoutAuditLogsInput)
  create?: InstanceType<typeof UserCreateWithoutAuditLogsInput>;
  @Field(() => UserCreateOrConnectWithoutAuditLogsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutAuditLogsInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutAuditLogsInput
  >;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutCommentsInput {
  @Field(() => UserCreateWithoutCommentsInput, { nullable: true })
  @Type(() => UserCreateWithoutCommentsInput)
  create?: InstanceType<typeof UserCreateWithoutCommentsInput>;
  @Field(() => UserCreateOrConnectWithoutCommentsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutCommentsInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutCommentsInput
  >;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutJournalEntriesInput {
  @Field(() => UserCreateWithoutJournalEntriesInput, { nullable: true })
  @Type(() => UserCreateWithoutJournalEntriesInput)
  create?: InstanceType<typeof UserCreateWithoutJournalEntriesInput>;
  @Field(() => UserCreateOrConnectWithoutJournalEntriesInput, {
    nullable: true,
  })
  @Type(() => UserCreateOrConnectWithoutJournalEntriesInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutJournalEntriesInput
  >;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutReviewsInput {
  @Field(() => UserCreateWithoutReviewsInput, { nullable: true })
  @Type(() => UserCreateWithoutReviewsInput)
  create?: InstanceType<typeof UserCreateWithoutReviewsInput>;
  @Field(() => UserCreateOrConnectWithoutReviewsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutReviewsInput)
  connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReviewsInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutShelvesInput {
  @Field(() => UserCreateWithoutShelvesInput, { nullable: true })
  @Type(() => UserCreateWithoutShelvesInput)
  create?: InstanceType<typeof UserCreateWithoutShelvesInput>;
  @Field(() => UserCreateOrConnectWithoutShelvesInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutShelvesInput)
  connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutShelvesInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutUserBooksInput {
  @Field(() => UserCreateWithoutUserBooksInput, { nullable: true })
  @Type(() => UserCreateWithoutUserBooksInput)
  create?: InstanceType<typeof UserCreateWithoutUserBooksInput>;
  @Field(() => UserCreateOrConnectWithoutUserBooksInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutUserBooksInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutUserBooksInput
  >;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateOrConnectWithoutAccountsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserCreateWithoutAccountsInput, { nullable: false })
  @Type(() => UserCreateWithoutAccountsInput)
  create!: InstanceType<typeof UserCreateWithoutAccountsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutAuditLogsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserCreateWithoutAuditLogsInput, { nullable: false })
  @Type(() => UserCreateWithoutAuditLogsInput)
  create!: InstanceType<typeof UserCreateWithoutAuditLogsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutCommentsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserCreateWithoutCommentsInput, { nullable: false })
  @Type(() => UserCreateWithoutCommentsInput)
  create!: InstanceType<typeof UserCreateWithoutCommentsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutFollowersInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserCreateWithoutFollowersInput, { nullable: false })
  @Type(() => UserCreateWithoutFollowersInput)
  create!: InstanceType<typeof UserCreateWithoutFollowersInput>;
}

@InputType()
export class UserCreateOrConnectWithoutFollowingInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserCreateWithoutFollowingInput, { nullable: false })
  @Type(() => UserCreateWithoutFollowingInput)
  create!: InstanceType<typeof UserCreateWithoutFollowingInput>;
}

@InputType()
export class UserCreateOrConnectWithoutJournalEntriesInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserCreateWithoutJournalEntriesInput, { nullable: false })
  @Type(() => UserCreateWithoutJournalEntriesInput)
  create!: InstanceType<typeof UserCreateWithoutJournalEntriesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutLikedReviewsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserCreateWithoutLikedReviewsInput, { nullable: false })
  @Type(() => UserCreateWithoutLikedReviewsInput)
  create!: InstanceType<typeof UserCreateWithoutLikedReviewsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutReviewsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserCreateWithoutReviewsInput, { nullable: false })
  @Type(() => UserCreateWithoutReviewsInput)
  create!: InstanceType<typeof UserCreateWithoutReviewsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutShelvesInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserCreateWithoutShelvesInput, { nullable: false })
  @Type(() => UserCreateWithoutShelvesInput)
  create!: InstanceType<typeof UserCreateWithoutShelvesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutUserBooksInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserCreateWithoutUserBooksInput, { nullable: false })
  @Type(() => UserCreateWithoutUserBooksInput)
  create!: InstanceType<typeof UserCreateWithoutUserBooksInput>;
}

@InputType()
export class UserCreateWithoutAccountsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookCreateNestedManyWithoutUserInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
  @Field(() => ShelfCreateNestedManyWithoutUserInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryCreateNestedManyWithoutUserInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: InstanceType<typeof UserCreateNestedManyWithoutFollowersInput>;
  @Field(() => UserCreateNestedManyWithoutFollowingInput, { nullable: true })
  followers?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
  @Field(() => ReviewCreateNestedManyWithoutUserInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
  @Field(() => ReviewCreateNestedManyWithoutLikedByInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutLikedByInput>;
  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
  @Field(() => AuditLogCreateNestedManyWithoutUserInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutAuditLogsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookCreateNestedManyWithoutUserInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
  @Field(() => ShelfCreateNestedManyWithoutUserInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryCreateNestedManyWithoutUserInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: InstanceType<typeof UserCreateNestedManyWithoutFollowersInput>;
  @Field(() => UserCreateNestedManyWithoutFollowingInput, { nullable: true })
  followers?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
  @Field(() => ReviewCreateNestedManyWithoutUserInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
  @Field(() => ReviewCreateNestedManyWithoutLikedByInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutLikedByInput>;
  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutCommentsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookCreateNestedManyWithoutUserInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
  @Field(() => ShelfCreateNestedManyWithoutUserInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryCreateNestedManyWithoutUserInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: InstanceType<typeof UserCreateNestedManyWithoutFollowersInput>;
  @Field(() => UserCreateNestedManyWithoutFollowingInput, { nullable: true })
  followers?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
  @Field(() => ReviewCreateNestedManyWithoutUserInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
  @Field(() => ReviewCreateNestedManyWithoutLikedByInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutLikedByInput>;
  @Field(() => AuditLogCreateNestedManyWithoutUserInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogCreateNestedManyWithoutUserInput>;
  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutFollowersInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookCreateNestedManyWithoutUserInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
  @Field(() => ShelfCreateNestedManyWithoutUserInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryCreateNestedManyWithoutUserInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: InstanceType<typeof UserCreateNestedManyWithoutFollowersInput>;
  @Field(() => ReviewCreateNestedManyWithoutUserInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
  @Field(() => ReviewCreateNestedManyWithoutLikedByInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutLikedByInput>;
  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
  @Field(() => AuditLogCreateNestedManyWithoutUserInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogCreateNestedManyWithoutUserInput>;
  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutFollowingInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookCreateNestedManyWithoutUserInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
  @Field(() => ShelfCreateNestedManyWithoutUserInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryCreateNestedManyWithoutUserInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserCreateNestedManyWithoutFollowingInput, { nullable: true })
  followers?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
  @Field(() => ReviewCreateNestedManyWithoutUserInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
  @Field(() => ReviewCreateNestedManyWithoutLikedByInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutLikedByInput>;
  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
  @Field(() => AuditLogCreateNestedManyWithoutUserInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogCreateNestedManyWithoutUserInput>;
  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutJournalEntriesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookCreateNestedManyWithoutUserInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
  @Field(() => ShelfCreateNestedManyWithoutUserInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
  @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: InstanceType<typeof UserCreateNestedManyWithoutFollowersInput>;
  @Field(() => UserCreateNestedManyWithoutFollowingInput, { nullable: true })
  followers?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
  @Field(() => ReviewCreateNestedManyWithoutUserInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
  @Field(() => ReviewCreateNestedManyWithoutLikedByInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutLikedByInput>;
  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
  @Field(() => AuditLogCreateNestedManyWithoutUserInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogCreateNestedManyWithoutUserInput>;
  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutLikedReviewsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookCreateNestedManyWithoutUserInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
  @Field(() => ShelfCreateNestedManyWithoutUserInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryCreateNestedManyWithoutUserInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: InstanceType<typeof UserCreateNestedManyWithoutFollowersInput>;
  @Field(() => UserCreateNestedManyWithoutFollowingInput, { nullable: true })
  followers?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
  @Field(() => ReviewCreateNestedManyWithoutUserInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
  @Field(() => AuditLogCreateNestedManyWithoutUserInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogCreateNestedManyWithoutUserInput>;
  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutReviewsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookCreateNestedManyWithoutUserInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
  @Field(() => ShelfCreateNestedManyWithoutUserInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryCreateNestedManyWithoutUserInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: InstanceType<typeof UserCreateNestedManyWithoutFollowersInput>;
  @Field(() => UserCreateNestedManyWithoutFollowingInput, { nullable: true })
  followers?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
  @Field(() => ReviewCreateNestedManyWithoutLikedByInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutLikedByInput>;
  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
  @Field(() => AuditLogCreateNestedManyWithoutUserInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogCreateNestedManyWithoutUserInput>;
  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutShelvesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookCreateNestedManyWithoutUserInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryCreateNestedManyWithoutUserInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: InstanceType<typeof UserCreateNestedManyWithoutFollowersInput>;
  @Field(() => UserCreateNestedManyWithoutFollowingInput, { nullable: true })
  followers?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
  @Field(() => ReviewCreateNestedManyWithoutUserInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
  @Field(() => ReviewCreateNestedManyWithoutLikedByInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutLikedByInput>;
  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
  @Field(() => AuditLogCreateNestedManyWithoutUserInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogCreateNestedManyWithoutUserInput>;
  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutUserBooksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => ShelfCreateNestedManyWithoutUserInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryCreateNestedManyWithoutUserInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: InstanceType<typeof UserCreateNestedManyWithoutFollowersInput>;
  @Field(() => UserCreateNestedManyWithoutFollowingInput, { nullable: true })
  followers?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
  @Field(() => ReviewCreateNestedManyWithoutUserInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
  @Field(() => ReviewCreateNestedManyWithoutLikedByInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutLikedByInput>;
  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
  @Field(() => AuditLogCreateNestedManyWithoutUserInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogCreateNestedManyWithoutUserInput>;
  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookCreateNestedManyWithoutUserInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
  @Field(() => ShelfCreateNestedManyWithoutUserInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryCreateNestedManyWithoutUserInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: InstanceType<typeof UserCreateNestedManyWithoutFollowersInput>;
  @Field(() => UserCreateNestedManyWithoutFollowingInput, { nullable: true })
  followers?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
  @Field(() => ReviewCreateNestedManyWithoutUserInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
  @Field(() => ReviewCreateNestedManyWithoutLikedByInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutLikedByInput>;
  @Field(() => CommentCreateNestedManyWithoutUserInput, { nullable: true })
  comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
  @Field(() => AuditLogCreateNestedManyWithoutUserInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogCreateNestedManyWithoutUserInput>;
  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => [UserOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithAggregationInput>;
  @Field(() => [UserScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UserScalarFieldEnum>;
  @Field(() => UserScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregateInput>;
  @Field(() => UserMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregateInput>;
  @Field(() => UserMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @HideField()
  hashedPassword?: string;
  @HideField()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserCountAggregate>;
  @Field(() => UserMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserMinAggregate>;
  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserListRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  every?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  some?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  none?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  username?: true;
  @Field(() => Boolean, { nullable: true })
  hashedPassword?: true;
  @Field(() => Boolean, { nullable: true })
  hashedRefreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  image?: true;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: true;
}

@ObjectType()
export class UserMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @HideField()
  hashedPassword?: string;
  @HideField()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hashedPassword?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hashedRefreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  image?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  emailVerified?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  username?: true;
  @Field(() => Boolean, { nullable: true })
  hashedPassword?: true;
  @Field(() => Boolean, { nullable: true })
  hashedRefreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  image?: true;
  @Field(() => Boolean, { nullable: true })
  emailVerified?: true;
}

@ObjectType()
export class UserMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @HideField()
  hashedPassword?: string;
  @HideField()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hashedPassword?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hashedRefreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  image?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  emailVerified?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  username?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  hashedPassword?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  hashedRefreshToken?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  image?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  emailVerified?: InstanceType<typeof SortOrderInput>;
  @Field(() => UserCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
  @Field(() => UserMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
  @Field(() => UserMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  username?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  hashedPassword?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  hashedRefreshToken?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  image?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  emailVerified?: InstanceType<typeof SortOrderInput>;
  @Field(() => UserBookOrderByRelationAggregateInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookOrderByRelationAggregateInput>;
  @Field(() => ShelfOrderByRelationAggregateInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfOrderByRelationAggregateInput>;
  @Field(() => JournalEntryOrderByRelationAggregateInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryOrderByRelationAggregateInput
  >;
  @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  following?: InstanceType<typeof UserOrderByRelationAggregateInput>;
  @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  followers?: InstanceType<typeof UserOrderByRelationAggregateInput>;
  @Field(() => ReviewOrderByRelationAggregateInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewOrderByRelationAggregateInput>;
  @Field(() => ReviewOrderByRelationAggregateInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewOrderByRelationAggregateInput>;
  @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
  comments?: InstanceType<typeof CommentOrderByRelationAggregateInput>;
  @Field(() => AuditLogOrderByRelationAggregateInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogOrderByRelationAggregateInput>;
  @Field(() => AccountOrderByRelationAggregateInput, { nullable: true })
  accounts?: InstanceType<typeof AccountOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  is?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  username?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  hashedPassword?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  hashedRefreshToken?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  image?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  emailVerified?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserScalarWhereInput {
  @Field(() => [UserScalarWhereInput], { nullable: true })
  AND?: Array<UserScalarWhereInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  OR?: Array<UserScalarWhereInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  NOT?: Array<UserScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  email?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  username?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  hashedPassword?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  hashedRefreshToken?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  image?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  emailVerified?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class UserUncheckedCreateNestedManyWithoutFollowersInput {
  @Field(() => [UserCreateWithoutFollowersInput], { nullable: true })
  @Type(() => UserCreateWithoutFollowersInput)
  create?: Array<UserCreateWithoutFollowersInput>;
  @Field(() => [UserCreateOrConnectWithoutFollowersInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFollowersInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutFollowersInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
}

@InputType()
export class UserUncheckedCreateNestedManyWithoutFollowingInput {
  @Field(() => [UserCreateWithoutFollowingInput], { nullable: true })
  @Type(() => UserCreateWithoutFollowingInput)
  create?: Array<UserCreateWithoutFollowingInput>;
  @Field(() => [UserCreateOrConnectWithoutFollowingInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFollowingInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
}

@InputType()
export class UserUncheckedCreateNestedManyWithoutLikedReviewsInput {
  @Field(() => [UserCreateWithoutLikedReviewsInput], { nullable: true })
  @Type(() => UserCreateWithoutLikedReviewsInput)
  create?: Array<UserCreateWithoutLikedReviewsInput>;
  @Field(() => [UserCreateOrConnectWithoutLikedReviewsInput], {
    nullable: true,
  })
  @Type(() => UserCreateOrConnectWithoutLikedReviewsInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutLikedReviewsInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
}

@InputType()
export class UserUncheckedCreateWithoutAccountsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowersInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowingInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutLikedByInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutLikedByInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateWithoutAuditLogsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowersInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowingInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutLikedByInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutLikedByInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateWithoutCommentsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowersInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowingInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutLikedByInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutLikedByInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateWithoutFollowersInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowersInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutLikedByInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutLikedByInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateWithoutFollowingInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowingInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutLikedByInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutLikedByInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateWithoutJournalEntriesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowersInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowingInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutLikedByInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutLikedByInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateWithoutLikedReviewsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowersInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowingInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateWithoutReviewsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowersInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowingInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutLikedByInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutLikedByInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateWithoutShelvesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowersInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowingInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutLikedByInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutLikedByInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateWithoutUserBooksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowersInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowingInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutLikedByInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutLikedByInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowersInput
  >;
  @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedCreateNestedManyWithoutFollowingInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutLikedByInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutLikedByInput
  >;
  @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AuditLogUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedUpdateManyWithoutFollowersNestedInput {
  @Field(() => [UserCreateWithoutFollowersInput], { nullable: true })
  @Type(() => UserCreateWithoutFollowersInput)
  create?: Array<UserCreateWithoutFollowersInput>;
  @Field(() => [UserCreateOrConnectWithoutFollowersInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFollowersInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutFollowersInput>;
  @Field(() => [UserUpsertWithWhereUniqueWithoutFollowersInput], {
    nullable: true,
  })
  @Type(() => UserUpsertWithWhereUniqueWithoutFollowersInput)
  upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowersInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserUpdateWithWhereUniqueWithoutFollowersInput], {
    nullable: true,
  })
  @Type(() => UserUpdateWithWhereUniqueWithoutFollowersInput)
  update?: Array<UserUpdateWithWhereUniqueWithoutFollowersInput>;
  @Field(() => [UserUpdateManyWithWhereWithoutFollowersInput], {
    nullable: true,
  })
  @Type(() => UserUpdateManyWithWhereWithoutFollowersInput)
  updateMany?: Array<UserUpdateManyWithWhereWithoutFollowersInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutFollowersInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
}

@InputType()
export class UserUncheckedUpdateManyWithoutFollowingNestedInput {
  @Field(() => [UserCreateWithoutFollowingInput], { nullable: true })
  @Type(() => UserCreateWithoutFollowingInput)
  create?: Array<UserCreateWithoutFollowingInput>;
  @Field(() => [UserCreateOrConnectWithoutFollowingInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFollowingInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;
  @Field(() => [UserUpsertWithWhereUniqueWithoutFollowingInput], {
    nullable: true,
  })
  @Type(() => UserUpsertWithWhereUniqueWithoutFollowingInput)
  upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowingInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserUpdateWithWhereUniqueWithoutFollowingInput], {
    nullable: true,
  })
  @Type(() => UserUpdateWithWhereUniqueWithoutFollowingInput)
  update?: Array<UserUpdateWithWhereUniqueWithoutFollowingInput>;
  @Field(() => [UserUpdateManyWithWhereWithoutFollowingInput], {
    nullable: true,
  })
  @Type(() => UserUpdateManyWithWhereWithoutFollowingInput)
  updateMany?: Array<UserUpdateManyWithWhereWithoutFollowingInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutFollowingInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
}

@InputType()
export class UserUncheckedUpdateManyWithoutLikedReviewsNestedInput {
  @Field(() => [UserCreateWithoutLikedReviewsInput], { nullable: true })
  @Type(() => UserCreateWithoutLikedReviewsInput)
  create?: Array<UserCreateWithoutLikedReviewsInput>;
  @Field(() => [UserCreateOrConnectWithoutLikedReviewsInput], {
    nullable: true,
  })
  @Type(() => UserCreateOrConnectWithoutLikedReviewsInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutLikedReviewsInput>;
  @Field(() => [UserUpsertWithWhereUniqueWithoutLikedReviewsInput], {
    nullable: true,
  })
  @Type(() => UserUpsertWithWhereUniqueWithoutLikedReviewsInput)
  upsert?: Array<UserUpsertWithWhereUniqueWithoutLikedReviewsInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserUpdateWithWhereUniqueWithoutLikedReviewsInput], {
    nullable: true,
  })
  @Type(() => UserUpdateWithWhereUniqueWithoutLikedReviewsInput)
  update?: Array<UserUpdateWithWhereUniqueWithoutLikedReviewsInput>;
  @Field(() => [UserUpdateManyWithWhereWithoutLikedReviewsInput], {
    nullable: true,
  })
  @Type(() => UserUpdateManyWithWhereWithoutLikedReviewsInput)
  updateMany?: Array<UserUpdateManyWithWhereWithoutLikedReviewsInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutLikedReviewsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
}

@InputType()
export class UserUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
}

@InputType()
export class UserUncheckedUpdateWithoutAccountsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowersNestedInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowersNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowingNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutLikedByNestedInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutLikedByNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateWithoutAuditLogsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowersNestedInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowersNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowingNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutLikedByNestedInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutLikedByNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateWithoutCommentsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowersNestedInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowersNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowingNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutLikedByNestedInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutLikedByNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateWithoutFollowersInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowersNestedInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowersNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutLikedByNestedInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutLikedByNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateWithoutFollowingInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowingNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutLikedByNestedInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutLikedByNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateWithoutJournalEntriesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
  @Field(() => UserUncheckedUpdateManyWithoutFollowersNestedInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowersNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowingNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutLikedByNestedInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutLikedByNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateWithoutLikedReviewsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowersNestedInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowersNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowingNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateWithoutReviewsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowersNestedInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowersNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowingNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutLikedByNestedInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutLikedByNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateWithoutShelvesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowersNestedInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowersNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowingNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutLikedByNestedInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutLikedByNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateWithoutUserBooksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowersNestedInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowersNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowingNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutLikedByNestedInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutLikedByNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  userBooks?: InstanceType<
    typeof UserBookUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  journalEntries?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowersNestedInput, {
    nullable: true,
  })
  following?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowersNestedInput
  >;
  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  followers?: InstanceType<
    typeof UserUncheckedUpdateManyWithoutFollowingNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutLikedByNestedInput, {
    nullable: true,
  })
  likedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutLikedByNestedInput
  >;
  @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  comments?: InstanceType<
    typeof CommentUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AuditLogUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  auditLogs?: InstanceType<
    typeof AuditLogUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
}

@InputType()
export class UserUpdateManyWithWhereWithoutFollowersInput {
  @Field(() => UserScalarWhereInput, { nullable: false })
  @Type(() => UserScalarWhereInput)
  where!: InstanceType<typeof UserScalarWhereInput>;
  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  @Type(() => UserUpdateManyMutationInput)
  data!: InstanceType<typeof UserUpdateManyMutationInput>;
}

@InputType()
export class UserUpdateManyWithWhereWithoutFollowingInput {
  @Field(() => UserScalarWhereInput, { nullable: false })
  @Type(() => UserScalarWhereInput)
  where!: InstanceType<typeof UserScalarWhereInput>;
  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  @Type(() => UserUpdateManyMutationInput)
  data!: InstanceType<typeof UserUpdateManyMutationInput>;
}

@InputType()
export class UserUpdateManyWithWhereWithoutLikedReviewsInput {
  @Field(() => UserScalarWhereInput, { nullable: false })
  @Type(() => UserScalarWhereInput)
  where!: InstanceType<typeof UserScalarWhereInput>;
  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  @Type(() => UserUpdateManyMutationInput)
  data!: InstanceType<typeof UserUpdateManyMutationInput>;
}

@InputType()
export class UserUpdateManyWithoutFollowersNestedInput {
  @Field(() => [UserCreateWithoutFollowersInput], { nullable: true })
  @Type(() => UserCreateWithoutFollowersInput)
  create?: Array<UserCreateWithoutFollowersInput>;
  @Field(() => [UserCreateOrConnectWithoutFollowersInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFollowersInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutFollowersInput>;
  @Field(() => [UserUpsertWithWhereUniqueWithoutFollowersInput], {
    nullable: true,
  })
  @Type(() => UserUpsertWithWhereUniqueWithoutFollowersInput)
  upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowersInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserUpdateWithWhereUniqueWithoutFollowersInput], {
    nullable: true,
  })
  @Type(() => UserUpdateWithWhereUniqueWithoutFollowersInput)
  update?: Array<UserUpdateWithWhereUniqueWithoutFollowersInput>;
  @Field(() => [UserUpdateManyWithWhereWithoutFollowersInput], {
    nullable: true,
  })
  @Type(() => UserUpdateManyWithWhereWithoutFollowersInput)
  updateMany?: Array<UserUpdateManyWithWhereWithoutFollowersInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUpdateManyWithoutFollowingNestedInput {
  @Field(() => [UserCreateWithoutFollowingInput], { nullable: true })
  @Type(() => UserCreateWithoutFollowingInput)
  create?: Array<UserCreateWithoutFollowingInput>;
  @Field(() => [UserCreateOrConnectWithoutFollowingInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutFollowingInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;
  @Field(() => [UserUpsertWithWhereUniqueWithoutFollowingInput], {
    nullable: true,
  })
  @Type(() => UserUpsertWithWhereUniqueWithoutFollowingInput)
  upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowingInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserUpdateWithWhereUniqueWithoutFollowingInput], {
    nullable: true,
  })
  @Type(() => UserUpdateWithWhereUniqueWithoutFollowingInput)
  update?: Array<UserUpdateWithWhereUniqueWithoutFollowingInput>;
  @Field(() => [UserUpdateManyWithWhereWithoutFollowingInput], {
    nullable: true,
  })
  @Type(() => UserUpdateManyWithWhereWithoutFollowingInput)
  updateMany?: Array<UserUpdateManyWithWhereWithoutFollowingInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUpdateManyWithoutLikedReviewsNestedInput {
  @Field(() => [UserCreateWithoutLikedReviewsInput], { nullable: true })
  @Type(() => UserCreateWithoutLikedReviewsInput)
  create?: Array<UserCreateWithoutLikedReviewsInput>;
  @Field(() => [UserCreateOrConnectWithoutLikedReviewsInput], {
    nullable: true,
  })
  @Type(() => UserCreateOrConnectWithoutLikedReviewsInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutLikedReviewsInput>;
  @Field(() => [UserUpsertWithWhereUniqueWithoutLikedReviewsInput], {
    nullable: true,
  })
  @Type(() => UserUpsertWithWhereUniqueWithoutLikedReviewsInput)
  upsert?: Array<UserUpsertWithWhereUniqueWithoutLikedReviewsInput>;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>
  >;
  @Field(() => [UserUpdateWithWhereUniqueWithoutLikedReviewsInput], {
    nullable: true,
  })
  @Type(() => UserUpdateWithWhereUniqueWithoutLikedReviewsInput)
  update?: Array<UserUpdateWithWhereUniqueWithoutLikedReviewsInput>;
  @Field(() => [UserUpdateManyWithWhereWithoutLikedReviewsInput], {
    nullable: true,
  })
  @Type(() => UserUpdateManyWithWhereWithoutLikedReviewsInput)
  updateMany?: Array<UserUpdateManyWithWhereWithoutLikedReviewsInput>;
  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutAccountsNestedInput {
  @Field(() => UserCreateWithoutAccountsInput, { nullable: true })
  @Type(() => UserCreateWithoutAccountsInput)
  create?: InstanceType<typeof UserCreateWithoutAccountsInput>;
  @Field(() => UserCreateOrConnectWithoutAccountsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutAccountsInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutAccountsInput
  >;
  @Field(() => UserUpsertWithoutAccountsInput, { nullable: true })
  @Type(() => UserUpsertWithoutAccountsInput)
  upsert?: InstanceType<typeof UserUpsertWithoutAccountsInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserUpdateToOneWithWhereWithoutAccountsInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutAccountsInput)
  update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutAccountsInput>;
}

@InputType()
export class UserUpdateOneWithoutAuditLogsNestedInput {
  @Field(() => UserCreateWithoutAuditLogsInput, { nullable: true })
  @Type(() => UserCreateWithoutAuditLogsInput)
  create?: InstanceType<typeof UserCreateWithoutAuditLogsInput>;
  @Field(() => UserCreateOrConnectWithoutAuditLogsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutAuditLogsInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutAuditLogsInput
  >;
  @Field(() => UserUpsertWithoutAuditLogsInput, { nullable: true })
  @Type(() => UserUpsertWithoutAuditLogsInput)
  upsert?: InstanceType<typeof UserUpsertWithoutAuditLogsInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  disconnect?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  delete?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserUpdateToOneWithWhereWithoutAuditLogsInput, {
    nullable: true,
  })
  @Type(() => UserUpdateToOneWithWhereWithoutAuditLogsInput)
  update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutAuditLogsInput>;
}

@InputType()
export class UserUpdateOneWithoutCommentsNestedInput {
  @Field(() => UserCreateWithoutCommentsInput, { nullable: true })
  @Type(() => UserCreateWithoutCommentsInput)
  create?: InstanceType<typeof UserCreateWithoutCommentsInput>;
  @Field(() => UserCreateOrConnectWithoutCommentsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutCommentsInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutCommentsInput
  >;
  @Field(() => UserUpsertWithoutCommentsInput, { nullable: true })
  @Type(() => UserUpsertWithoutCommentsInput)
  upsert?: InstanceType<typeof UserUpsertWithoutCommentsInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  disconnect?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  delete?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserUpdateToOneWithWhereWithoutCommentsInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutCommentsInput)
  update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutCommentsInput>;
}

@InputType()
export class UserUpdateOneWithoutJournalEntriesNestedInput {
  @Field(() => UserCreateWithoutJournalEntriesInput, { nullable: true })
  @Type(() => UserCreateWithoutJournalEntriesInput)
  create?: InstanceType<typeof UserCreateWithoutJournalEntriesInput>;
  @Field(() => UserCreateOrConnectWithoutJournalEntriesInput, {
    nullable: true,
  })
  @Type(() => UserCreateOrConnectWithoutJournalEntriesInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutJournalEntriesInput
  >;
  @Field(() => UserUpsertWithoutJournalEntriesInput, { nullable: true })
  @Type(() => UserUpsertWithoutJournalEntriesInput)
  upsert?: InstanceType<typeof UserUpsertWithoutJournalEntriesInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  disconnect?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  delete?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserUpdateToOneWithWhereWithoutJournalEntriesInput, {
    nullable: true,
  })
  @Type(() => UserUpdateToOneWithWhereWithoutJournalEntriesInput)
  update?: InstanceType<
    typeof UserUpdateToOneWithWhereWithoutJournalEntriesInput
  >;
}

@InputType()
export class UserUpdateOneWithoutReviewsNestedInput {
  @Field(() => UserCreateWithoutReviewsInput, { nullable: true })
  @Type(() => UserCreateWithoutReviewsInput)
  create?: InstanceType<typeof UserCreateWithoutReviewsInput>;
  @Field(() => UserCreateOrConnectWithoutReviewsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutReviewsInput)
  connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReviewsInput>;
  @Field(() => UserUpsertWithoutReviewsInput, { nullable: true })
  @Type(() => UserUpsertWithoutReviewsInput)
  upsert?: InstanceType<typeof UserUpsertWithoutReviewsInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  disconnect?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  delete?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserUpdateToOneWithWhereWithoutReviewsInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutReviewsInput)
  update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutReviewsInput>;
}

@InputType()
export class UserUpdateOneWithoutShelvesNestedInput {
  @Field(() => UserCreateWithoutShelvesInput, { nullable: true })
  @Type(() => UserCreateWithoutShelvesInput)
  create?: InstanceType<typeof UserCreateWithoutShelvesInput>;
  @Field(() => UserCreateOrConnectWithoutShelvesInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutShelvesInput)
  connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutShelvesInput>;
  @Field(() => UserUpsertWithoutShelvesInput, { nullable: true })
  @Type(() => UserUpsertWithoutShelvesInput)
  upsert?: InstanceType<typeof UserUpsertWithoutShelvesInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  disconnect?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  delete?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserUpdateToOneWithWhereWithoutShelvesInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutShelvesInput)
  update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutShelvesInput>;
}

@InputType()
export class UserUpdateOneWithoutUserBooksNestedInput {
  @Field(() => UserCreateWithoutUserBooksInput, { nullable: true })
  @Type(() => UserCreateWithoutUserBooksInput)
  create?: InstanceType<typeof UserCreateWithoutUserBooksInput>;
  @Field(() => UserCreateOrConnectWithoutUserBooksInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutUserBooksInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutUserBooksInput
  >;
  @Field(() => UserUpsertWithoutUserBooksInput, { nullable: true })
  @Type(() => UserUpsertWithoutUserBooksInput)
  upsert?: InstanceType<typeof UserUpsertWithoutUserBooksInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  disconnect?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  delete?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserUpdateToOneWithWhereWithoutUserBooksInput, {
    nullable: true,
  })
  @Type(() => UserUpdateToOneWithWhereWithoutUserBooksInput)
  update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutUserBooksInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutAccountsInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserUpdateWithoutAccountsInput, { nullable: false })
  @Type(() => UserUpdateWithoutAccountsInput)
  data!: InstanceType<typeof UserUpdateWithoutAccountsInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutAuditLogsInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserUpdateWithoutAuditLogsInput, { nullable: false })
  @Type(() => UserUpdateWithoutAuditLogsInput)
  data!: InstanceType<typeof UserUpdateWithoutAuditLogsInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutCommentsInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserUpdateWithoutCommentsInput, { nullable: false })
  @Type(() => UserUpdateWithoutCommentsInput)
  data!: InstanceType<typeof UserUpdateWithoutCommentsInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutJournalEntriesInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserUpdateWithoutJournalEntriesInput, { nullable: false })
  @Type(() => UserUpdateWithoutJournalEntriesInput)
  data!: InstanceType<typeof UserUpdateWithoutJournalEntriesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutReviewsInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserUpdateWithoutReviewsInput, { nullable: false })
  @Type(() => UserUpdateWithoutReviewsInput)
  data!: InstanceType<typeof UserUpdateWithoutReviewsInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutShelvesInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserUpdateWithoutShelvesInput, { nullable: false })
  @Type(() => UserUpdateWithoutShelvesInput)
  data!: InstanceType<typeof UserUpdateWithoutShelvesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutUserBooksInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserUpdateWithoutUserBooksInput, { nullable: false })
  @Type(() => UserUpdateWithoutUserBooksInput)
  data!: InstanceType<typeof UserUpdateWithoutUserBooksInput>;
}

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowersInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserUpdateWithoutFollowersInput, { nullable: false })
  @Type(() => UserUpdateWithoutFollowersInput)
  data!: InstanceType<typeof UserUpdateWithoutFollowersInput>;
}

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowingInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserUpdateWithoutFollowingInput, { nullable: false })
  @Type(() => UserUpdateWithoutFollowingInput)
  data!: InstanceType<typeof UserUpdateWithoutFollowingInput>;
}

@InputType()
export class UserUpdateWithWhereUniqueWithoutLikedReviewsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserUpdateWithoutLikedReviewsInput, { nullable: false })
  @Type(() => UserUpdateWithoutLikedReviewsInput)
  data!: InstanceType<typeof UserUpdateWithoutLikedReviewsInput>;
}

@InputType()
export class UserUpdateWithoutAccountsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUpdateManyWithoutUserNestedInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
  @Field(() => ShelfUpdateManyWithoutUserNestedInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUpdateManyWithoutFollowersNestedInput, { nullable: true })
  following?: InstanceType<typeof UserUpdateManyWithoutFollowersNestedInput>;
  @Field(() => UserUpdateManyWithoutFollowingNestedInput, { nullable: true })
  followers?: InstanceType<typeof UserUpdateManyWithoutFollowingNestedInput>;
  @Field(() => ReviewUpdateManyWithoutUserNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
  @Field(() => ReviewUpdateManyWithoutLikedByNestedInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewUpdateManyWithoutLikedByNestedInput>;
  @Field(() => CommentUpdateManyWithoutUserNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutUserNestedInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutAuditLogsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUpdateManyWithoutUserNestedInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
  @Field(() => ShelfUpdateManyWithoutUserNestedInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUpdateManyWithoutFollowersNestedInput, { nullable: true })
  following?: InstanceType<typeof UserUpdateManyWithoutFollowersNestedInput>;
  @Field(() => UserUpdateManyWithoutFollowingNestedInput, { nullable: true })
  followers?: InstanceType<typeof UserUpdateManyWithoutFollowingNestedInput>;
  @Field(() => ReviewUpdateManyWithoutUserNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
  @Field(() => ReviewUpdateManyWithoutLikedByNestedInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewUpdateManyWithoutLikedByNestedInput>;
  @Field(() => CommentUpdateManyWithoutUserNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutCommentsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUpdateManyWithoutUserNestedInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
  @Field(() => ShelfUpdateManyWithoutUserNestedInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUpdateManyWithoutFollowersNestedInput, { nullable: true })
  following?: InstanceType<typeof UserUpdateManyWithoutFollowersNestedInput>;
  @Field(() => UserUpdateManyWithoutFollowingNestedInput, { nullable: true })
  followers?: InstanceType<typeof UserUpdateManyWithoutFollowingNestedInput>;
  @Field(() => ReviewUpdateManyWithoutUserNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
  @Field(() => ReviewUpdateManyWithoutLikedByNestedInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewUpdateManyWithoutLikedByNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutUserNestedInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogUpdateManyWithoutUserNestedInput>;
  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutFollowersInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUpdateManyWithoutUserNestedInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
  @Field(() => ShelfUpdateManyWithoutUserNestedInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUpdateManyWithoutFollowersNestedInput, { nullable: true })
  following?: InstanceType<typeof UserUpdateManyWithoutFollowersNestedInput>;
  @Field(() => ReviewUpdateManyWithoutUserNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
  @Field(() => ReviewUpdateManyWithoutLikedByNestedInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewUpdateManyWithoutLikedByNestedInput>;
  @Field(() => CommentUpdateManyWithoutUserNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutUserNestedInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogUpdateManyWithoutUserNestedInput>;
  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutFollowingInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUpdateManyWithoutUserNestedInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
  @Field(() => ShelfUpdateManyWithoutUserNestedInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUpdateManyWithoutFollowingNestedInput, { nullable: true })
  followers?: InstanceType<typeof UserUpdateManyWithoutFollowingNestedInput>;
  @Field(() => ReviewUpdateManyWithoutUserNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
  @Field(() => ReviewUpdateManyWithoutLikedByNestedInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewUpdateManyWithoutLikedByNestedInput>;
  @Field(() => CommentUpdateManyWithoutUserNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutUserNestedInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogUpdateManyWithoutUserNestedInput>;
  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutJournalEntriesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUpdateManyWithoutUserNestedInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
  @Field(() => ShelfUpdateManyWithoutUserNestedInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
  @Field(() => UserUpdateManyWithoutFollowersNestedInput, { nullable: true })
  following?: InstanceType<typeof UserUpdateManyWithoutFollowersNestedInput>;
  @Field(() => UserUpdateManyWithoutFollowingNestedInput, { nullable: true })
  followers?: InstanceType<typeof UserUpdateManyWithoutFollowingNestedInput>;
  @Field(() => ReviewUpdateManyWithoutUserNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
  @Field(() => ReviewUpdateManyWithoutLikedByNestedInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewUpdateManyWithoutLikedByNestedInput>;
  @Field(() => CommentUpdateManyWithoutUserNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutUserNestedInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogUpdateManyWithoutUserNestedInput>;
  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutLikedReviewsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUpdateManyWithoutUserNestedInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
  @Field(() => ShelfUpdateManyWithoutUserNestedInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUpdateManyWithoutFollowersNestedInput, { nullable: true })
  following?: InstanceType<typeof UserUpdateManyWithoutFollowersNestedInput>;
  @Field(() => UserUpdateManyWithoutFollowingNestedInput, { nullable: true })
  followers?: InstanceType<typeof UserUpdateManyWithoutFollowingNestedInput>;
  @Field(() => ReviewUpdateManyWithoutUserNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
  @Field(() => CommentUpdateManyWithoutUserNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutUserNestedInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogUpdateManyWithoutUserNestedInput>;
  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutReviewsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUpdateManyWithoutUserNestedInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
  @Field(() => ShelfUpdateManyWithoutUserNestedInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUpdateManyWithoutFollowersNestedInput, { nullable: true })
  following?: InstanceType<typeof UserUpdateManyWithoutFollowersNestedInput>;
  @Field(() => UserUpdateManyWithoutFollowingNestedInput, { nullable: true })
  followers?: InstanceType<typeof UserUpdateManyWithoutFollowingNestedInput>;
  @Field(() => ReviewUpdateManyWithoutLikedByNestedInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewUpdateManyWithoutLikedByNestedInput>;
  @Field(() => CommentUpdateManyWithoutUserNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutUserNestedInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogUpdateManyWithoutUserNestedInput>;
  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutShelvesInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUpdateManyWithoutUserNestedInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUpdateManyWithoutFollowersNestedInput, { nullable: true })
  following?: InstanceType<typeof UserUpdateManyWithoutFollowersNestedInput>;
  @Field(() => UserUpdateManyWithoutFollowingNestedInput, { nullable: true })
  followers?: InstanceType<typeof UserUpdateManyWithoutFollowingNestedInput>;
  @Field(() => ReviewUpdateManyWithoutUserNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
  @Field(() => ReviewUpdateManyWithoutLikedByNestedInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewUpdateManyWithoutLikedByNestedInput>;
  @Field(() => CommentUpdateManyWithoutUserNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutUserNestedInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogUpdateManyWithoutUserNestedInput>;
  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutUserBooksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => ShelfUpdateManyWithoutUserNestedInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUpdateManyWithoutFollowersNestedInput, { nullable: true })
  following?: InstanceType<typeof UserUpdateManyWithoutFollowersNestedInput>;
  @Field(() => UserUpdateManyWithoutFollowingNestedInput, { nullable: true })
  followers?: InstanceType<typeof UserUpdateManyWithoutFollowingNestedInput>;
  @Field(() => ReviewUpdateManyWithoutUserNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
  @Field(() => ReviewUpdateManyWithoutLikedByNestedInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewUpdateManyWithoutLikedByNestedInput>;
  @Field(() => CommentUpdateManyWithoutUserNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutUserNestedInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogUpdateManyWithoutUserNestedInput>;
  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedPassword?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  hashedRefreshToken?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => UserBookUpdateManyWithoutUserNestedInput, { nullable: true })
  userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
  @Field(() => ShelfUpdateManyWithoutUserNestedInput, { nullable: true })
  shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
  @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, { nullable: true })
  journalEntries?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserNestedInput
  >;
  @Field(() => UserUpdateManyWithoutFollowersNestedInput, { nullable: true })
  following?: InstanceType<typeof UserUpdateManyWithoutFollowersNestedInput>;
  @Field(() => UserUpdateManyWithoutFollowingNestedInput, { nullable: true })
  followers?: InstanceType<typeof UserUpdateManyWithoutFollowingNestedInput>;
  @Field(() => ReviewUpdateManyWithoutUserNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
  @Field(() => ReviewUpdateManyWithoutLikedByNestedInput, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewUpdateManyWithoutLikedByNestedInput>;
  @Field(() => CommentUpdateManyWithoutUserNestedInput, { nullable: true })
  comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
  @Field(() => AuditLogUpdateManyWithoutUserNestedInput, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogUpdateManyWithoutUserNestedInput>;
  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowersInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserUpdateWithoutFollowersInput, { nullable: false })
  @Type(() => UserUpdateWithoutFollowersInput)
  update!: InstanceType<typeof UserUpdateWithoutFollowersInput>;
  @Field(() => UserCreateWithoutFollowersInput, { nullable: false })
  @Type(() => UserCreateWithoutFollowersInput)
  create!: InstanceType<typeof UserCreateWithoutFollowersInput>;
}

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowingInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserUpdateWithoutFollowingInput, { nullable: false })
  @Type(() => UserUpdateWithoutFollowingInput)
  update!: InstanceType<typeof UserUpdateWithoutFollowingInput>;
  @Field(() => UserCreateWithoutFollowingInput, { nullable: false })
  @Type(() => UserCreateWithoutFollowingInput)
  create!: InstanceType<typeof UserCreateWithoutFollowingInput>;
}

@InputType()
export class UserUpsertWithWhereUniqueWithoutLikedReviewsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
  @Field(() => UserUpdateWithoutLikedReviewsInput, { nullable: false })
  @Type(() => UserUpdateWithoutLikedReviewsInput)
  update!: InstanceType<typeof UserUpdateWithoutLikedReviewsInput>;
  @Field(() => UserCreateWithoutLikedReviewsInput, { nullable: false })
  @Type(() => UserCreateWithoutLikedReviewsInput)
  create!: InstanceType<typeof UserCreateWithoutLikedReviewsInput>;
}

@InputType()
export class UserUpsertWithoutAccountsInput {
  @Field(() => UserUpdateWithoutAccountsInput, { nullable: false })
  @Type(() => UserUpdateWithoutAccountsInput)
  update!: InstanceType<typeof UserUpdateWithoutAccountsInput>;
  @Field(() => UserCreateWithoutAccountsInput, { nullable: false })
  @Type(() => UserCreateWithoutAccountsInput)
  create!: InstanceType<typeof UserCreateWithoutAccountsInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutAuditLogsInput {
  @Field(() => UserUpdateWithoutAuditLogsInput, { nullable: false })
  @Type(() => UserUpdateWithoutAuditLogsInput)
  update!: InstanceType<typeof UserUpdateWithoutAuditLogsInput>;
  @Field(() => UserCreateWithoutAuditLogsInput, { nullable: false })
  @Type(() => UserCreateWithoutAuditLogsInput)
  create!: InstanceType<typeof UserCreateWithoutAuditLogsInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutCommentsInput {
  @Field(() => UserUpdateWithoutCommentsInput, { nullable: false })
  @Type(() => UserUpdateWithoutCommentsInput)
  update!: InstanceType<typeof UserUpdateWithoutCommentsInput>;
  @Field(() => UserCreateWithoutCommentsInput, { nullable: false })
  @Type(() => UserCreateWithoutCommentsInput)
  create!: InstanceType<typeof UserCreateWithoutCommentsInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutJournalEntriesInput {
  @Field(() => UserUpdateWithoutJournalEntriesInput, { nullable: false })
  @Type(() => UserUpdateWithoutJournalEntriesInput)
  update!: InstanceType<typeof UserUpdateWithoutJournalEntriesInput>;
  @Field(() => UserCreateWithoutJournalEntriesInput, { nullable: false })
  @Type(() => UserCreateWithoutJournalEntriesInput)
  create!: InstanceType<typeof UserCreateWithoutJournalEntriesInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutReviewsInput {
  @Field(() => UserUpdateWithoutReviewsInput, { nullable: false })
  @Type(() => UserUpdateWithoutReviewsInput)
  update!: InstanceType<typeof UserUpdateWithoutReviewsInput>;
  @Field(() => UserCreateWithoutReviewsInput, { nullable: false })
  @Type(() => UserCreateWithoutReviewsInput)
  create!: InstanceType<typeof UserCreateWithoutReviewsInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutShelvesInput {
  @Field(() => UserUpdateWithoutShelvesInput, { nullable: false })
  @Type(() => UserUpdateWithoutShelvesInput)
  update!: InstanceType<typeof UserUpdateWithoutShelvesInput>;
  @Field(() => UserCreateWithoutShelvesInput, { nullable: false })
  @Type(() => UserCreateWithoutShelvesInput)
  create!: InstanceType<typeof UserCreateWithoutShelvesInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutUserBooksInput {
  @Field(() => UserUpdateWithoutUserBooksInput, { nullable: false })
  @Type(() => UserUpdateWithoutUserBooksInput)
  update!: InstanceType<typeof UserUpdateWithoutUserBooksInput>;
  @Field(() => UserCreateWithoutUserBooksInput, { nullable: false })
  @Type(() => UserCreateWithoutUserBooksInput)
  create!: InstanceType<typeof UserCreateWithoutUserBooksInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  @Validator.MaxLength(100)
  @Validator.MinLength(3)
  username?: string;
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  hashedPassword?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  hashedRefreshToken?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  image?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  emailVerified?: InstanceType<typeof DateTimeFilter>;
  @Field(() => UserBookListRelationFilter, { nullable: true })
  userBooks?: InstanceType<typeof UserBookListRelationFilter>;
  @Field(() => ShelfListRelationFilter, { nullable: true })
  shelves?: InstanceType<typeof ShelfListRelationFilter>;
  @Field(() => JournalEntryListRelationFilter, { nullable: true })
  journalEntries?: InstanceType<typeof JournalEntryListRelationFilter>;
  @Field(() => UserListRelationFilter, { nullable: true })
  following?: InstanceType<typeof UserListRelationFilter>;
  @Field(() => UserListRelationFilter, { nullable: true })
  followers?: InstanceType<typeof UserListRelationFilter>;
  @Field(() => ReviewListRelationFilter, { nullable: true })
  reviews?: InstanceType<typeof ReviewListRelationFilter>;
  @Field(() => ReviewListRelationFilter, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewListRelationFilter>;
  @Field(() => CommentListRelationFilter, { nullable: true })
  comments?: InstanceType<typeof CommentListRelationFilter>;
  @Field(() => AuditLogListRelationFilter, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogListRelationFilter>;
  @Field(() => AccountListRelationFilter, { nullable: true })
  accounts?: InstanceType<typeof AccountListRelationFilter>;
}

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  email?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  username?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  hashedPassword?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  hashedRefreshToken?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => StringFilter, { nullable: true })
  image?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  emailVerified?: InstanceType<typeof DateTimeFilter>;
  @Field(() => UserBookListRelationFilter, { nullable: true })
  userBooks?: InstanceType<typeof UserBookListRelationFilter>;
  @Field(() => ShelfListRelationFilter, { nullable: true })
  shelves?: InstanceType<typeof ShelfListRelationFilter>;
  @Field(() => JournalEntryListRelationFilter, { nullable: true })
  journalEntries?: InstanceType<typeof JournalEntryListRelationFilter>;
  @Field(() => UserListRelationFilter, { nullable: true })
  following?: InstanceType<typeof UserListRelationFilter>;
  @Field(() => UserListRelationFilter, { nullable: true })
  followers?: InstanceType<typeof UserListRelationFilter>;
  @Field(() => ReviewListRelationFilter, { nullable: true })
  reviews?: InstanceType<typeof ReviewListRelationFilter>;
  @Field(() => ReviewListRelationFilter, { nullable: true })
  likedReviews?: InstanceType<typeof ReviewListRelationFilter>;
  @Field(() => CommentListRelationFilter, { nullable: true })
  comments?: InstanceType<typeof CommentListRelationFilter>;
  @Field(() => AuditLogListRelationFilter, { nullable: true })
  auditLogs?: InstanceType<typeof AuditLogListRelationFilter>;
  @Field(() => AccountListRelationFilter, { nullable: true })
  accounts?: InstanceType<typeof AccountListRelationFilter>;
}

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: true })
  username!: string | null;
  @HideField()
  hashedPassword!: string | null;
  @HideField()
  hashedRefreshToken!: string | null;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => String, { nullable: true })
  image!: string | null;
  @Field(() => Date, { nullable: true })
  emailVerified!: Date | null;
  @Field(() => [UserBook], { nullable: true })
  userBooks?: Array<UserBook>;
  @Field(() => [Shelf], { nullable: true })
  shelves?: Array<Shelf>;
  @Field(() => [JournalEntry], { nullable: true })
  journalEntries?: Array<JournalEntry>;
  @Field(() => [User], { nullable: true })
  following?: Array<User>;
  @Field(() => [User], { nullable: true })
  followers?: Array<User>;
  @Field(() => [Review], { nullable: true })
  reviews?: Array<Review>;
  @Field(() => [Review], { nullable: true })
  likedReviews?: Array<Review>;
  @Field(() => [Comment], { nullable: true })
  comments?: Array<Comment>;
  @Field(() => [AuditLog], { nullable: true })
  auditLogs?: Array<AuditLog>;
  @Field(() => [Account], { nullable: true })
  accounts?: Array<Account>;
  @Field(() => UserCount, { nullable: false })
  _count?: InstanceType<typeof UserCount>;
}

@ObjectType()
export class AggregateUserBook {
  @Field(() => UserBookCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserBookCountAggregate>;
  @Field(() => UserBookAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof UserBookAvgAggregate>;
  @Field(() => UserBookSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof UserBookSumAggregate>;
  @Field(() => UserBookMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserBookMinAggregate>;
  @Field(() => UserBookMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserBookMaxAggregate>;
}

@ArgsType()
export class CreateManyUserBookArgs {
  @Field(() => [UserBookCreateManyInput], { nullable: false })
  @Type(() => UserBookCreateManyInput)
  @ValidateNested()
  data!: Array<UserBookCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserBookArgs {
  @Field(() => UserBookCreateInput, { nullable: false })
  @Type(() => UserBookCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof UserBookCreateInput>;
}

@ArgsType()
export class DeleteManyUserBookArgs {
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookWhereInput>;
}

@ArgsType()
export class DeleteOneUserBookArgs {
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class FindFirstUserBookOrThrowArgs {
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => [UserBookOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserBookOrderByWithRelationInput>;
  @Field(() => UserBookWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserBookScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserBookScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserBookArgs {
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => [UserBookOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserBookOrderByWithRelationInput>;
  @Field(() => UserBookWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserBookScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserBookScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserBookArgs {
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => [UserBookOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserBookOrderByWithRelationInput>;
  @Field(() => UserBookWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserBookScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserBookScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserBookOrThrowArgs {
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class FindUniqueUserBookArgs {
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class UpdateManyUserBookArgs {
  @Field(() => UserBookUpdateManyMutationInput, { nullable: false })
  @Type(() => UserBookUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof UserBookUpdateManyMutationInput>;
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookWhereInput>;
}

@ArgsType()
export class UpdateOneUserBookArgs {
  @Field(() => UserBookUpdateInput, { nullable: false })
  @Type(() => UserBookUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof UserBookUpdateInput>;
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class UpsertOneUserBookArgs {
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => UserBookCreateInput, { nullable: false })
  @Type(() => UserBookCreateInput)
  create!: InstanceType<typeof UserBookCreateInput>;
  @Field(() => UserBookUpdateInput, { nullable: false })
  @Type(() => UserBookUpdateInput)
  update!: InstanceType<typeof UserBookUpdateInput>;
}

@ArgsType()
export class UserBookAggregateArgs {
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => [UserBookOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserBookOrderByWithRelationInput>;
  @Field(() => UserBookWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserBookCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserBookCountAggregateInput>;
  @Field(() => UserBookAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof UserBookAvgAggregateInput>;
  @Field(() => UserBookSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof UserBookSumAggregateInput>;
  @Field(() => UserBookMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserBookMinAggregateInput>;
  @Field(() => UserBookMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserBookMaxAggregateInput>;
}

@InputType()
export class UserBookAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
  @Field(() => Boolean, { nullable: true })
  rating?: true;
  @Field(() => Boolean, { nullable: true })
  order?: true;
}

@ObjectType()
export class UserBookAvgAggregate {
  @Field(() => Float, { nullable: true })
  bookId?: number;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Float, { nullable: true })
  order?: number;
}

@InputType()
export class UserBookAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  rating?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
}

@InputType()
export class UserBookCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
  @Field(() => Boolean, { nullable: true })
  rating?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  order?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class UserBookCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  userId!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  bookId!: number;
  @Field(() => Int, { nullable: false })
  status!: number;
  @Field(() => Int, { nullable: false })
  rating!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class UserBookCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  rating?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
}

@ObjectType()
export class UserBookCount {
  @Field(() => Int, { nullable: false })
  shelves?: number;
  @Field(() => Int, { nullable: false })
  journalEntry?: number;
  @Field(() => Int, { nullable: false })
  reviews?: number;
}

@InputType()
export class UserBookCreateManyBookInputEnvelope {
  @Field(() => [UserBookCreateManyBookInput], { nullable: false })
  @Type(() => UserBookCreateManyBookInput)
  data!: Array<UserBookCreateManyBookInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class UserBookCreateManyBookInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  userId!: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
}

@InputType()
export class UserBookCreateManyUserInputEnvelope {
  @Field(() => [UserBookCreateManyUserInput], { nullable: false })
  @Type(() => UserBookCreateManyUserInput)
  data!: Array<UserBookCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class UserBookCreateManyUserInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  bookId!: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
}

@InputType()
export class UserBookCreateManyInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  userId!: string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  bookId!: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
}

@InputType()
export class UserBookCreateNestedManyWithoutBookInput {
  @Field(() => [UserBookCreateWithoutBookInput], { nullable: true })
  @Type(() => UserBookCreateWithoutBookInput)
  create?: Array<UserBookCreateWithoutBookInput>;
  @Field(() => [UserBookCreateOrConnectWithoutBookInput], { nullable: true })
  @Type(() => UserBookCreateOrConnectWithoutBookInput)
  connectOrCreate?: Array<UserBookCreateOrConnectWithoutBookInput>;
  @Field(() => UserBookCreateManyBookInputEnvelope, { nullable: true })
  @Type(() => UserBookCreateManyBookInputEnvelope)
  createMany?: InstanceType<typeof UserBookCreateManyBookInputEnvelope>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>
  >;
}

@InputType()
export class UserBookCreateNestedManyWithoutUserInput {
  @Field(() => [UserBookCreateWithoutUserInput], { nullable: true })
  @Type(() => UserBookCreateWithoutUserInput)
  create?: Array<UserBookCreateWithoutUserInput>;
  @Field(() => [UserBookCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => UserBookCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<UserBookCreateOrConnectWithoutUserInput>;
  @Field(() => UserBookCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => UserBookCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof UserBookCreateManyUserInputEnvelope>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>
  >;
}

@InputType()
export class UserBookCreateNestedOneWithoutJournalEntryInput {
  @Field(() => UserBookCreateWithoutJournalEntryInput, { nullable: true })
  @Type(() => UserBookCreateWithoutJournalEntryInput)
  create?: InstanceType<typeof UserBookCreateWithoutJournalEntryInput>;
  @Field(() => UserBookCreateOrConnectWithoutJournalEntryInput, {
    nullable: true,
  })
  @Type(() => UserBookCreateOrConnectWithoutJournalEntryInput)
  connectOrCreate?: InstanceType<
    typeof UserBookCreateOrConnectWithoutJournalEntryInput
  >;
  @Field(() => UserBookWhereUniqueInput, { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
}

@InputType()
export class UserBookCreateNestedOneWithoutReviewsInput {
  @Field(() => UserBookCreateWithoutReviewsInput, { nullable: true })
  @Type(() => UserBookCreateWithoutReviewsInput)
  create?: InstanceType<typeof UserBookCreateWithoutReviewsInput>;
  @Field(() => UserBookCreateOrConnectWithoutReviewsInput, { nullable: true })
  @Type(() => UserBookCreateOrConnectWithoutReviewsInput)
  connectOrCreate?: InstanceType<
    typeof UserBookCreateOrConnectWithoutReviewsInput
  >;
  @Field(() => UserBookWhereUniqueInput, { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
}

@InputType()
export class UserBookCreateNestedOneWithoutShelvesInput {
  @Field(() => UserBookCreateWithoutShelvesInput, { nullable: true })
  @Type(() => UserBookCreateWithoutShelvesInput)
  create?: InstanceType<typeof UserBookCreateWithoutShelvesInput>;
  @Field(() => UserBookCreateOrConnectWithoutShelvesInput, { nullable: true })
  @Type(() => UserBookCreateOrConnectWithoutShelvesInput)
  connectOrCreate?: InstanceType<
    typeof UserBookCreateOrConnectWithoutShelvesInput
  >;
  @Field(() => UserBookWhereUniqueInput, { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
}

@InputType()
export class UserBookCreateOrConnectWithoutBookInput {
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => UserBookCreateWithoutBookInput, { nullable: false })
  @Type(() => UserBookCreateWithoutBookInput)
  create!: InstanceType<typeof UserBookCreateWithoutBookInput>;
}

@InputType()
export class UserBookCreateOrConnectWithoutJournalEntryInput {
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => UserBookCreateWithoutJournalEntryInput, { nullable: false })
  @Type(() => UserBookCreateWithoutJournalEntryInput)
  create!: InstanceType<typeof UserBookCreateWithoutJournalEntryInput>;
}

@InputType()
export class UserBookCreateOrConnectWithoutReviewsInput {
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => UserBookCreateWithoutReviewsInput, { nullable: false })
  @Type(() => UserBookCreateWithoutReviewsInput)
  create!: InstanceType<typeof UserBookCreateWithoutReviewsInput>;
}

@InputType()
export class UserBookCreateOrConnectWithoutShelvesInput {
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => UserBookCreateWithoutShelvesInput, { nullable: false })
  @Type(() => UserBookCreateWithoutShelvesInput)
  create!: InstanceType<typeof UserBookCreateWithoutShelvesInput>;
}

@InputType()
export class UserBookCreateOrConnectWithoutUserInput {
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => UserBookCreateWithoutUserInput, { nullable: false })
  @Type(() => UserBookCreateWithoutUserInput)
  create!: InstanceType<typeof UserBookCreateWithoutUserInput>;
}

@InputType()
export class UserBookCreateWithoutBookInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => UserCreateNestedOneWithoutUserBooksInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
  @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => JournalEntryCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => ReviewCreateNestedManyWithoutUserBookInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateWithoutJournalEntryInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => UserCreateNestedOneWithoutUserBooksInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
  @Field(() => BookCreateNestedOneWithoutUserBookInput, { nullable: true })
  book?: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
  @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => ReviewCreateNestedManyWithoutUserBookInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateWithoutReviewsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => UserCreateNestedOneWithoutUserBooksInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
  @Field(() => BookCreateNestedOneWithoutUserBookInput, { nullable: true })
  book?: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
  @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => JournalEntryCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserBookInput
  >;
}

@InputType()
export class UserBookCreateWithoutShelvesInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => UserCreateNestedOneWithoutUserBooksInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
  @Field(() => BookCreateNestedOneWithoutUserBookInput, { nullable: true })
  book?: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
  @Field(() => JournalEntryCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => ReviewCreateNestedManyWithoutUserBookInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => BookCreateNestedOneWithoutUserBookInput, { nullable: true })
  book?: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
  @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => JournalEntryCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => ReviewCreateNestedManyWithoutUserBookInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => UserCreateNestedOneWithoutUserBooksInput, { nullable: true })
  user?: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
  @Field(() => BookCreateNestedOneWithoutUserBookInput, { nullable: true })
  book?: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
  @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => JournalEntryCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => ReviewCreateNestedManyWithoutUserBookInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserBookInput>;
}

@ArgsType()
export class UserBookGroupByArgs {
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => [UserBookOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<UserBookOrderByWithAggregationInput>;
  @Field(() => [UserBookScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UserBookScalarFieldEnum>;
  @Field(() => UserBookScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof UserBookScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserBookCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserBookCountAggregateInput>;
  @Field(() => UserBookAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof UserBookAvgAggregateInput>;
  @Field(() => UserBookSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof UserBookSumAggregateInput>;
  @Field(() => UserBookMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserBookMinAggregateInput>;
  @Field(() => UserBookMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserBookMaxAggregateInput>;
}

@ObjectType()
export class UserBookGroupBy {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  id!: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  userId!: string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  bookId!: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: false })
  @Validator.ValidateNested()
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => UserBookCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserBookCountAggregate>;
  @Field(() => UserBookAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof UserBookAvgAggregate>;
  @Field(() => UserBookSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof UserBookSumAggregate>;
  @Field(() => UserBookMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserBookMinAggregate>;
  @Field(() => UserBookMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserBookMaxAggregate>;
}

@InputType()
export class UserBookIdentifierCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  userId!: string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  bookId!: number;
}

@InputType()
export class UserBookListRelationFilter {
  @Field(() => UserBookWhereInput, { nullable: true })
  every?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => UserBookWhereInput, { nullable: true })
  some?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => UserBookWhereInput, { nullable: true })
  none?: InstanceType<typeof UserBookWhereInput>;
}

@InputType()
export class UserBookMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
  @Field(() => Boolean, { nullable: true })
  rating?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  order?: true;
}

@ObjectType()
export class UserBookMaxAggregate {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  bookId?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
}

@InputType()
export class UserBookMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  rating?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
}

@InputType()
export class UserBookMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
  @Field(() => Boolean, { nullable: true })
  status?: true;
  @Field(() => Boolean, { nullable: true })
  rating?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  order?: true;
}

@ObjectType()
export class UserBookMinAggregate {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  bookId?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
}

@InputType()
export class UserBookMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  rating?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
}

@InputType()
export class UserBookOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class UserBookOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  rating?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
  @Field(() => UserBookCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserBookCountOrderByAggregateInput>;
  @Field(() => UserBookAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof UserBookAvgOrderByAggregateInput>;
  @Field(() => UserBookMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserBookMaxOrderByAggregateInput>;
  @Field(() => UserBookMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserBookMinOrderByAggregateInput>;
  @Field(() => UserBookSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof UserBookSumOrderByAggregateInput>;
}

@InputType()
export class UserBookOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  rating?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UserOrderByWithRelationInput>;
  @Field(() => BookOrderByWithRelationInput, { nullable: true })
  book?: InstanceType<typeof BookOrderByWithRelationInput>;
  @Field(() => UserBookShelvesOrderByRelationAggregateInput, { nullable: true })
  shelves?: InstanceType<typeof UserBookShelvesOrderByRelationAggregateInput>;
  @Field(() => JournalEntryOrderByRelationAggregateInput, { nullable: true })
  journalEntry?: InstanceType<typeof JournalEntryOrderByRelationAggregateInput>;
  @Field(() => ReviewOrderByRelationAggregateInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewOrderByRelationAggregateInput>;
}

@InputType()
export class UserBookRelationFilter {
  @Field(() => UserBookWhereInput, { nullable: true })
  is?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => UserBookWhereInput, { nullable: true })
  isNot?: InstanceType<typeof UserBookWhereInput>;
}

@InputType()
export class UserBookScalarWhereWithAggregatesInput {
  @Field(() => [UserBookScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserBookScalarWhereWithAggregatesInput>;
  @Field(() => [UserBookScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserBookScalarWhereWithAggregatesInput>;
  @Field(() => [UserBookScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserBookScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  bookId?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  status?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  rating?: InstanceType<typeof FloatWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  order?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class UserBookScalarWhereInput {
  @Field(() => [UserBookScalarWhereInput], { nullable: true })
  AND?: Array<UserBookScalarWhereInput>;
  @Field(() => [UserBookScalarWhereInput], { nullable: true })
  OR?: Array<UserBookScalarWhereInput>;
  @Field(() => [UserBookScalarWhereInput], { nullable: true })
  NOT?: Array<UserBookScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  bookId?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  status?: InstanceType<typeof StringFilter>;
  @Field(() => FloatFilter, { nullable: true })
  rating?: InstanceType<typeof FloatFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => IntFilter, { nullable: true })
  order?: InstanceType<typeof IntFilter>;
}

@InputType()
export class UserBookSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  bookId?: true;
  @Field(() => Boolean, { nullable: true })
  rating?: true;
  @Field(() => Boolean, { nullable: true })
  order?: true;
}

@ObjectType()
export class UserBookSumAggregate {
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  bookId?: number;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Int, { nullable: true })
  order?: number;
}

@InputType()
export class UserBookSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  rating?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  order?: keyof typeof SortOrder;
}

@InputType()
export class UserBookUncheckedCreateNestedManyWithoutBookInput {
  @Field(() => [UserBookCreateWithoutBookInput], { nullable: true })
  @Type(() => UserBookCreateWithoutBookInput)
  create?: Array<UserBookCreateWithoutBookInput>;
  @Field(() => [UserBookCreateOrConnectWithoutBookInput], { nullable: true })
  @Type(() => UserBookCreateOrConnectWithoutBookInput)
  connectOrCreate?: Array<UserBookCreateOrConnectWithoutBookInput>;
  @Field(() => UserBookCreateManyBookInputEnvelope, { nullable: true })
  @Type(() => UserBookCreateManyBookInputEnvelope)
  createMany?: InstanceType<typeof UserBookCreateManyBookInputEnvelope>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>
  >;
}

@InputType()
export class UserBookUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [UserBookCreateWithoutUserInput], { nullable: true })
  @Type(() => UserBookCreateWithoutUserInput)
  create?: Array<UserBookCreateWithoutUserInput>;
  @Field(() => [UserBookCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => UserBookCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<UserBookCreateOrConnectWithoutUserInput>;
  @Field(() => UserBookCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => UserBookCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof UserBookCreateManyUserInputEnvelope>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>
  >;
}

@InputType()
export class UserBookUncheckedCreateWithoutBookInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  userId!: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserBookInput
  >;
}

@InputType()
export class UserBookUncheckedCreateWithoutJournalEntryInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  userId!: string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  bookId!: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserBookInput
  >;
}

@InputType()
export class UserBookUncheckedCreateWithoutReviewsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  userId!: string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  bookId!: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserBookInput
  >;
}

@InputType()
export class UserBookUncheckedCreateWithoutShelvesInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  userId!: string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  bookId!: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserBookInput
  >;
}

@InputType()
export class UserBookUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  bookId!: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserBookInput
  >;
}

@InputType()
export class UserBookUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  userId!: string;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  bookId!: number;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  status!: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUncheckedCreateNestedManyWithoutUserBookInput
  >;
  @Field(() => ReviewUncheckedCreateNestedManyWithoutUserBookInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutUserBookInput
  >;
}

@InputType()
export class UserBookUncheckedUpdateManyWithoutBookNestedInput {
  @Field(() => [UserBookCreateWithoutBookInput], { nullable: true })
  @Type(() => UserBookCreateWithoutBookInput)
  create?: Array<UserBookCreateWithoutBookInput>;
  @Field(() => [UserBookCreateOrConnectWithoutBookInput], { nullable: true })
  @Type(() => UserBookCreateOrConnectWithoutBookInput)
  connectOrCreate?: Array<UserBookCreateOrConnectWithoutBookInput>;
  @Field(() => [UserBookUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  @Type(() => UserBookUpsertWithWhereUniqueWithoutBookInput)
  upsert?: Array<UserBookUpsertWithWhereUniqueWithoutBookInput>;
  @Field(() => UserBookCreateManyBookInputEnvelope, { nullable: true })
  @Type(() => UserBookCreateManyBookInputEnvelope)
  createMany?: InstanceType<typeof UserBookCreateManyBookInputEnvelope>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  set?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [UserBookUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  @Type(() => UserBookUpdateWithWhereUniqueWithoutBookInput)
  update?: Array<UserBookUpdateWithWhereUniqueWithoutBookInput>;
  @Field(() => [UserBookUpdateManyWithWhereWithoutBookInput], {
    nullable: true,
  })
  @Type(() => UserBookUpdateManyWithWhereWithoutBookInput)
  updateMany?: Array<UserBookUpdateManyWithWhereWithoutBookInput>;
  @Field(() => [UserBookScalarWhereInput], { nullable: true })
  @Type(() => UserBookScalarWhereInput)
  deleteMany?: Array<UserBookScalarWhereInput>;
}

@InputType()
export class UserBookUncheckedUpdateManyWithoutBookInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
}

@InputType()
export class UserBookUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [UserBookCreateWithoutUserInput], { nullable: true })
  @Type(() => UserBookCreateWithoutUserInput)
  create?: Array<UserBookCreateWithoutUserInput>;
  @Field(() => [UserBookCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => UserBookCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<UserBookCreateOrConnectWithoutUserInput>;
  @Field(() => [UserBookUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserBookUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<UserBookUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => UserBookCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => UserBookCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof UserBookCreateManyUserInputEnvelope>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  set?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [UserBookUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserBookUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<UserBookUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [UserBookUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserBookUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<UserBookUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [UserBookScalarWhereInput], { nullable: true })
  @Type(() => UserBookScalarWhereInput)
  deleteMany?: Array<UserBookScalarWhereInput>;
}

@InputType()
export class UserBookUncheckedUpdateManyWithoutUserInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  bookId?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
}

@InputType()
export class UserBookUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  bookId?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
}

@InputType()
export class UserBookUncheckedUpdateWithoutBookInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserBookNestedInput
  >;
}

@InputType()
export class UserBookUncheckedUpdateWithoutJournalEntryInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  bookId?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserBookNestedInput
  >;
}

@InputType()
export class UserBookUncheckedUpdateWithoutReviewsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  bookId?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput
  >;
}

@InputType()
export class UserBookUncheckedUpdateWithoutShelvesInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  bookId?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserBookNestedInput
  >;
}

@InputType()
export class UserBookUncheckedUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  bookId?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserBookNestedInput
  >;
}

@InputType()
export class UserBookUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  userId?: string;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  bookId?: number;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => ReviewUncheckedUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutUserBookNestedInput
  >;
}

@InputType()
export class UserBookUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
}

@InputType()
export class UserBookUpdateManyWithWhereWithoutBookInput {
  @Field(() => UserBookScalarWhereInput, { nullable: false })
  @Type(() => UserBookScalarWhereInput)
  where!: InstanceType<typeof UserBookScalarWhereInput>;
  @Field(() => UserBookUpdateManyMutationInput, { nullable: false })
  @Type(() => UserBookUpdateManyMutationInput)
  data!: InstanceType<typeof UserBookUpdateManyMutationInput>;
}

@InputType()
export class UserBookUpdateManyWithWhereWithoutUserInput {
  @Field(() => UserBookScalarWhereInput, { nullable: false })
  @Type(() => UserBookScalarWhereInput)
  where!: InstanceType<typeof UserBookScalarWhereInput>;
  @Field(() => UserBookUpdateManyMutationInput, { nullable: false })
  @Type(() => UserBookUpdateManyMutationInput)
  data!: InstanceType<typeof UserBookUpdateManyMutationInput>;
}

@InputType()
export class UserBookUpdateManyWithoutBookNestedInput {
  @Field(() => [UserBookCreateWithoutBookInput], { nullable: true })
  @Type(() => UserBookCreateWithoutBookInput)
  create?: Array<UserBookCreateWithoutBookInput>;
  @Field(() => [UserBookCreateOrConnectWithoutBookInput], { nullable: true })
  @Type(() => UserBookCreateOrConnectWithoutBookInput)
  connectOrCreate?: Array<UserBookCreateOrConnectWithoutBookInput>;
  @Field(() => [UserBookUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  @Type(() => UserBookUpsertWithWhereUniqueWithoutBookInput)
  upsert?: Array<UserBookUpsertWithWhereUniqueWithoutBookInput>;
  @Field(() => UserBookCreateManyBookInputEnvelope, { nullable: true })
  @Type(() => UserBookCreateManyBookInputEnvelope)
  createMany?: InstanceType<typeof UserBookCreateManyBookInputEnvelope>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  set?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [UserBookUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  @Type(() => UserBookUpdateWithWhereUniqueWithoutBookInput)
  update?: Array<UserBookUpdateWithWhereUniqueWithoutBookInput>;
  @Field(() => [UserBookUpdateManyWithWhereWithoutBookInput], {
    nullable: true,
  })
  @Type(() => UserBookUpdateManyWithWhereWithoutBookInput)
  updateMany?: Array<UserBookUpdateManyWithWhereWithoutBookInput>;
  @Field(() => [UserBookScalarWhereInput], { nullable: true })
  @Type(() => UserBookScalarWhereInput)
  deleteMany?: Array<UserBookScalarWhereInput>;
}

@InputType()
export class UserBookUpdateManyWithoutUserNestedInput {
  @Field(() => [UserBookCreateWithoutUserInput], { nullable: true })
  @Type(() => UserBookCreateWithoutUserInput)
  create?: Array<UserBookCreateWithoutUserInput>;
  @Field(() => [UserBookCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => UserBookCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<UserBookCreateOrConnectWithoutUserInput>;
  @Field(() => [UserBookUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserBookUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<UserBookUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => UserBookCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => UserBookCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof UserBookCreateManyUserInputEnvelope>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  set?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
  @Field(() => [UserBookWhereUniqueInput], { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>
  >;
  @Field(() => [UserBookUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserBookUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<UserBookUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [UserBookUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserBookUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<UserBookUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [UserBookScalarWhereInput], { nullable: true })
  @Type(() => UserBookScalarWhereInput)
  deleteMany?: Array<UserBookScalarWhereInput>;
}

@InputType()
export class UserBookUpdateOneRequiredWithoutShelvesNestedInput {
  @Field(() => UserBookCreateWithoutShelvesInput, { nullable: true })
  @Type(() => UserBookCreateWithoutShelvesInput)
  create?: InstanceType<typeof UserBookCreateWithoutShelvesInput>;
  @Field(() => UserBookCreateOrConnectWithoutShelvesInput, { nullable: true })
  @Type(() => UserBookCreateOrConnectWithoutShelvesInput)
  connectOrCreate?: InstanceType<
    typeof UserBookCreateOrConnectWithoutShelvesInput
  >;
  @Field(() => UserBookUpsertWithoutShelvesInput, { nullable: true })
  @Type(() => UserBookUpsertWithoutShelvesInput)
  upsert?: InstanceType<typeof UserBookUpsertWithoutShelvesInput>;
  @Field(() => UserBookWhereUniqueInput, { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => UserBookUpdateToOneWithWhereWithoutShelvesInput, {
    nullable: true,
  })
  @Type(() => UserBookUpdateToOneWithWhereWithoutShelvesInput)
  update?: InstanceType<typeof UserBookUpdateToOneWithWhereWithoutShelvesInput>;
}

@InputType()
export class UserBookUpdateOneWithoutJournalEntryNestedInput {
  @Field(() => UserBookCreateWithoutJournalEntryInput, { nullable: true })
  @Type(() => UserBookCreateWithoutJournalEntryInput)
  create?: InstanceType<typeof UserBookCreateWithoutJournalEntryInput>;
  @Field(() => UserBookCreateOrConnectWithoutJournalEntryInput, {
    nullable: true,
  })
  @Type(() => UserBookCreateOrConnectWithoutJournalEntryInput)
  connectOrCreate?: InstanceType<
    typeof UserBookCreateOrConnectWithoutJournalEntryInput
  >;
  @Field(() => UserBookUpsertWithoutJournalEntryInput, { nullable: true })
  @Type(() => UserBookUpsertWithoutJournalEntryInput)
  upsert?: InstanceType<typeof UserBookUpsertWithoutJournalEntryInput>;
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  disconnect?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  delete?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => UserBookWhereUniqueInput, { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => UserBookUpdateToOneWithWhereWithoutJournalEntryInput, {
    nullable: true,
  })
  @Type(() => UserBookUpdateToOneWithWhereWithoutJournalEntryInput)
  update?: InstanceType<
    typeof UserBookUpdateToOneWithWhereWithoutJournalEntryInput
  >;
}

@InputType()
export class UserBookUpdateOneWithoutReviewsNestedInput {
  @Field(() => UserBookCreateWithoutReviewsInput, { nullable: true })
  @Type(() => UserBookCreateWithoutReviewsInput)
  create?: InstanceType<typeof UserBookCreateWithoutReviewsInput>;
  @Field(() => UserBookCreateOrConnectWithoutReviewsInput, { nullable: true })
  @Type(() => UserBookCreateOrConnectWithoutReviewsInput)
  connectOrCreate?: InstanceType<
    typeof UserBookCreateOrConnectWithoutReviewsInput
  >;
  @Field(() => UserBookUpsertWithoutReviewsInput, { nullable: true })
  @Type(() => UserBookUpsertWithoutReviewsInput)
  upsert?: InstanceType<typeof UserBookUpsertWithoutReviewsInput>;
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  disconnect?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  delete?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => UserBookWhereUniqueInput, { nullable: true })
  @Type(() => UserBookWhereUniqueInput)
  connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => UserBookUpdateToOneWithWhereWithoutReviewsInput, {
    nullable: true,
  })
  @Type(() => UserBookUpdateToOneWithWhereWithoutReviewsInput)
  update?: InstanceType<typeof UserBookUpdateToOneWithWhereWithoutReviewsInput>;
}

@InputType()
export class UserBookUpdateToOneWithWhereWithoutJournalEntryInput {
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  where?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => UserBookUpdateWithoutJournalEntryInput, { nullable: false })
  @Type(() => UserBookUpdateWithoutJournalEntryInput)
  data!: InstanceType<typeof UserBookUpdateWithoutJournalEntryInput>;
}

@InputType()
export class UserBookUpdateToOneWithWhereWithoutReviewsInput {
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  where?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => UserBookUpdateWithoutReviewsInput, { nullable: false })
  @Type(() => UserBookUpdateWithoutReviewsInput)
  data!: InstanceType<typeof UserBookUpdateWithoutReviewsInput>;
}

@InputType()
export class UserBookUpdateToOneWithWhereWithoutShelvesInput {
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  where?: InstanceType<typeof UserBookWhereInput>;
  @Field(() => UserBookUpdateWithoutShelvesInput, { nullable: false })
  @Type(() => UserBookUpdateWithoutShelvesInput)
  data!: InstanceType<typeof UserBookUpdateWithoutShelvesInput>;
}

@InputType()
export class UserBookUpdateWithWhereUniqueWithoutBookInput {
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => UserBookUpdateWithoutBookInput, { nullable: false })
  @Type(() => UserBookUpdateWithoutBookInput)
  data!: InstanceType<typeof UserBookUpdateWithoutBookInput>;
}

@InputType()
export class UserBookUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => UserBookUpdateWithoutUserInput, { nullable: false })
  @Type(() => UserBookUpdateWithoutUserInput)
  data!: InstanceType<typeof UserBookUpdateWithoutUserInput>;
}

@InputType()
export class UserBookUpdateWithoutBookInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => UserUpdateOneWithoutUserBooksNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutUserBooksNestedInput>;
  @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => JournalEntryUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => ReviewUpdateManyWithoutUserBookNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateWithoutJournalEntryInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => UserUpdateOneWithoutUserBooksNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutUserBooksNestedInput>;
  @Field(() => BookUpdateOneWithoutUserBookNestedInput, { nullable: true })
  book?: InstanceType<typeof BookUpdateOneWithoutUserBookNestedInput>;
  @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => ReviewUpdateManyWithoutUserBookNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateWithoutReviewsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => UserUpdateOneWithoutUserBooksNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutUserBooksNestedInput>;
  @Field(() => BookUpdateOneWithoutUserBookNestedInput, { nullable: true })
  book?: InstanceType<typeof BookUpdateOneWithoutUserBookNestedInput>;
  @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => JournalEntryUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserBookNestedInput
  >;
}

@InputType()
export class UserBookUpdateWithoutShelvesInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => UserUpdateOneWithoutUserBooksNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutUserBooksNestedInput>;
  @Field(() => BookUpdateOneWithoutUserBookNestedInput, { nullable: true })
  book?: InstanceType<typeof BookUpdateOneWithoutUserBookNestedInput>;
  @Field(() => JournalEntryUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => ReviewUpdateManyWithoutUserBookNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateWithoutUserInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => BookUpdateOneWithoutUserBookNestedInput, { nullable: true })
  book?: InstanceType<typeof BookUpdateOneWithoutUserBookNestedInput>;
  @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => JournalEntryUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => ReviewUpdateManyWithoutUserBookNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  status?: string;
  @Field(() => Float, { nullable: true })
  @Validator.Min(0)
  @Validator.Max(5)
  @Validator.IsNumber()
  rating?: number;
  @Field(() => Date, { nullable: true })
  @Validator.ValidateNested()
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Int, { nullable: true })
  order?: number;
  @Field(() => UserUpdateOneWithoutUserBooksNestedInput, { nullable: true })
  user?: InstanceType<typeof UserUpdateOneWithoutUserBooksNestedInput>;
  @Field(() => BookUpdateOneWithoutUserBookNestedInput, { nullable: true })
  book?: InstanceType<typeof BookUpdateOneWithoutUserBookNestedInput>;
  @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  shelves?: InstanceType<
    typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => JournalEntryUpdateManyWithoutUserBookNestedInput, {
    nullable: true,
  })
  journalEntry?: InstanceType<
    typeof JournalEntryUpdateManyWithoutUserBookNestedInput
  >;
  @Field(() => ReviewUpdateManyWithoutUserBookNestedInput, { nullable: true })
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpsertWithWhereUniqueWithoutBookInput {
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => UserBookUpdateWithoutBookInput, { nullable: false })
  @Type(() => UserBookUpdateWithoutBookInput)
  update!: InstanceType<typeof UserBookUpdateWithoutBookInput>;
  @Field(() => UserBookCreateWithoutBookInput, { nullable: false })
  @Type(() => UserBookCreateWithoutBookInput)
  create!: InstanceType<typeof UserBookCreateWithoutBookInput>;
}

@InputType()
export class UserBookUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => UserBookWhereUniqueInput, { nullable: false })
  @Type(() => UserBookWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
  @Field(() => UserBookUpdateWithoutUserInput, { nullable: false })
  @Type(() => UserBookUpdateWithoutUserInput)
  update!: InstanceType<typeof UserBookUpdateWithoutUserInput>;
  @Field(() => UserBookCreateWithoutUserInput, { nullable: false })
  @Type(() => UserBookCreateWithoutUserInput)
  create!: InstanceType<typeof UserBookCreateWithoutUserInput>;
}

@InputType()
export class UserBookUpsertWithoutJournalEntryInput {
  @Field(() => UserBookUpdateWithoutJournalEntryInput, { nullable: false })
  @Type(() => UserBookUpdateWithoutJournalEntryInput)
  update!: InstanceType<typeof UserBookUpdateWithoutJournalEntryInput>;
  @Field(() => UserBookCreateWithoutJournalEntryInput, { nullable: false })
  @Type(() => UserBookCreateWithoutJournalEntryInput)
  create!: InstanceType<typeof UserBookCreateWithoutJournalEntryInput>;
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  where?: InstanceType<typeof UserBookWhereInput>;
}

@InputType()
export class UserBookUpsertWithoutReviewsInput {
  @Field(() => UserBookUpdateWithoutReviewsInput, { nullable: false })
  @Type(() => UserBookUpdateWithoutReviewsInput)
  update!: InstanceType<typeof UserBookUpdateWithoutReviewsInput>;
  @Field(() => UserBookCreateWithoutReviewsInput, { nullable: false })
  @Type(() => UserBookCreateWithoutReviewsInput)
  create!: InstanceType<typeof UserBookCreateWithoutReviewsInput>;
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  where?: InstanceType<typeof UserBookWhereInput>;
}

@InputType()
export class UserBookUpsertWithoutShelvesInput {
  @Field(() => UserBookUpdateWithoutShelvesInput, { nullable: false })
  @Type(() => UserBookUpdateWithoutShelvesInput)
  update!: InstanceType<typeof UserBookUpdateWithoutShelvesInput>;
  @Field(() => UserBookCreateWithoutShelvesInput, { nullable: false })
  @Type(() => UserBookCreateWithoutShelvesInput)
  create!: InstanceType<typeof UserBookCreateWithoutShelvesInput>;
  @Field(() => UserBookWhereInput, { nullable: true })
  @Type(() => UserBookWhereInput)
  where?: InstanceType<typeof UserBookWhereInput>;
}

@InputType()
export class UserBookWhereUniqueInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => UserBookIdentifierCompoundUniqueInput, { nullable: true })
  identifier?: InstanceType<typeof UserBookIdentifierCompoundUniqueInput>;
  @Field(() => [UserBookWhereInput], { nullable: true })
  AND?: Array<UserBookWhereInput>;
  @Field(() => [UserBookWhereInput], { nullable: true })
  OR?: Array<UserBookWhereInput>;
  @Field(() => [UserBookWhereInput], { nullable: true })
  NOT?: Array<UserBookWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  bookId?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  status?: InstanceType<typeof StringFilter>;
  @Field(() => FloatFilter, { nullable: true })
  rating?: InstanceType<typeof FloatFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => IntFilter, { nullable: true })
  order?: InstanceType<typeof IntFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
  @Field(() => BookRelationFilter, { nullable: true })
  book?: InstanceType<typeof BookRelationFilter>;
  @Field(() => UserBookShelvesListRelationFilter, { nullable: true })
  shelves?: InstanceType<typeof UserBookShelvesListRelationFilter>;
  @Field(() => JournalEntryListRelationFilter, { nullable: true })
  journalEntry?: InstanceType<typeof JournalEntryListRelationFilter>;
  @Field(() => ReviewListRelationFilter, { nullable: true })
  reviews?: InstanceType<typeof ReviewListRelationFilter>;
}

@InputType()
export class UserBookWhereInput {
  @Field(() => [UserBookWhereInput], { nullable: true })
  AND?: Array<UserBookWhereInput>;
  @Field(() => [UserBookWhereInput], { nullable: true })
  OR?: Array<UserBookWhereInput>;
  @Field(() => [UserBookWhereInput], { nullable: true })
  NOT?: Array<UserBookWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  bookId?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  status?: InstanceType<typeof StringFilter>;
  @Field(() => FloatFilter, { nullable: true })
  rating?: InstanceType<typeof FloatFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => IntFilter, { nullable: true })
  order?: InstanceType<typeof IntFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
  @Field(() => BookRelationFilter, { nullable: true })
  book?: InstanceType<typeof BookRelationFilter>;
  @Field(() => UserBookShelvesListRelationFilter, { nullable: true })
  shelves?: InstanceType<typeof UserBookShelvesListRelationFilter>;
  @Field(() => JournalEntryListRelationFilter, { nullable: true })
  journalEntry?: InstanceType<typeof JournalEntryListRelationFilter>;
  @Field(() => ReviewListRelationFilter, { nullable: true })
  reviews?: InstanceType<typeof ReviewListRelationFilter>;
}

@ObjectType()
export class UserBook {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Int, { nullable: false })
  bookId!: number;
  @Field(() => String, { nullable: false })
  status!: string;
  @Field(() => Float, { nullable: true, defaultValue: 0 })
  rating!: number | null;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => Int, { nullable: false })
  order!: number;
  @Field(() => User, { nullable: true })
  user?: InstanceType<typeof User> | null;
  @Field(() => Book, { nullable: true })
  book?: InstanceType<typeof Book> | null;
  @Field(() => [UserBookShelves], { nullable: true })
  shelves?: Array<UserBookShelves>;
  @Field(() => [JournalEntry], { nullable: true })
  journalEntry?: Array<JournalEntry>;
  @Field(() => [Review], { nullable: true })
  reviews?: Array<Review>;
  @Field(() => UserBookCount, { nullable: false })
  _count?: InstanceType<typeof UserBookCount>;
}

@ObjectType()
export class AggregateUserBookShelves {
  @Field(() => UserBookShelvesCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserBookShelvesCountAggregate>;
  @Field(() => UserBookShelvesMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserBookShelvesMinAggregate>;
  @Field(() => UserBookShelvesMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserBookShelvesMaxAggregate>;
}

@ArgsType()
export class CreateManyUserBookShelvesArgs {
  @Field(() => [UserBookShelvesCreateManyInput], { nullable: false })
  @Type(() => UserBookShelvesCreateManyInput)
  @ValidateNested()
  data!: Array<UserBookShelvesCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserBookShelvesArgs {
  @Field(() => UserBookShelvesCreateInput, { nullable: false })
  @Type(() => UserBookShelvesCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof UserBookShelvesCreateInput>;
}

@ArgsType()
export class DeleteManyUserBookShelvesArgs {
  @Field(() => UserBookShelvesWhereInput, { nullable: true })
  @Type(() => UserBookShelvesWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookShelvesWhereInput>;
}

@ArgsType()
export class DeleteOneUserBookShelvesArgs {
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: false })
  @Type(() => UserBookShelvesWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
}

@ArgsType()
export class FindFirstUserBookShelvesOrThrowArgs {
  @Field(() => UserBookShelvesWhereInput, { nullable: true })
  @Type(() => UserBookShelvesWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookShelvesWhereInput>;
  @Field(() => [UserBookShelvesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserBookShelvesOrderByWithRelationInput>;
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    UserBookShelvesWhereUniqueInput,
    'userBookId_shelfId'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserBookShelvesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserBookShelvesScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserBookShelvesArgs {
  @Field(() => UserBookShelvesWhereInput, { nullable: true })
  @Type(() => UserBookShelvesWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookShelvesWhereInput>;
  @Field(() => [UserBookShelvesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserBookShelvesOrderByWithRelationInput>;
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    UserBookShelvesWhereUniqueInput,
    'userBookId_shelfId'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserBookShelvesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserBookShelvesScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserBookShelvesArgs {
  @Field(() => UserBookShelvesWhereInput, { nullable: true })
  @Type(() => UserBookShelvesWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookShelvesWhereInput>;
  @Field(() => [UserBookShelvesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserBookShelvesOrderByWithRelationInput>;
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    UserBookShelvesWhereUniqueInput,
    'userBookId_shelfId'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserBookShelvesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserBookShelvesScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserBookShelvesOrThrowArgs {
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: false })
  @Type(() => UserBookShelvesWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
}

@ArgsType()
export class FindUniqueUserBookShelvesArgs {
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: false })
  @Type(() => UserBookShelvesWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
}

@ArgsType()
export class UpdateManyUserBookShelvesArgs {
  @Field(() => UserBookShelvesUncheckedUpdateManyInput, { nullable: false })
  @Type(() => UserBookShelvesUncheckedUpdateManyInput)
  @ValidateNested()
  data!: InstanceType<typeof UserBookShelvesUncheckedUpdateManyInput>;
  @Field(() => UserBookShelvesWhereInput, { nullable: true })
  @Type(() => UserBookShelvesWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookShelvesWhereInput>;
}

@ArgsType()
export class UpdateOneUserBookShelvesArgs {
  @Field(() => UserBookShelvesUpdateInput, { nullable: false })
  @Type(() => UserBookShelvesUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof UserBookShelvesUpdateInput>;
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: false })
  @Type(() => UserBookShelvesWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
}

@ArgsType()
export class UpsertOneUserBookShelvesArgs {
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: false })
  @Type(() => UserBookShelvesWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
  @Field(() => UserBookShelvesCreateInput, { nullable: false })
  @Type(() => UserBookShelvesCreateInput)
  create!: InstanceType<typeof UserBookShelvesCreateInput>;
  @Field(() => UserBookShelvesUpdateInput, { nullable: false })
  @Type(() => UserBookShelvesUpdateInput)
  update!: InstanceType<typeof UserBookShelvesUpdateInput>;
}

@ArgsType()
export class UserBookShelvesAggregateArgs {
  @Field(() => UserBookShelvesWhereInput, { nullable: true })
  @Type(() => UserBookShelvesWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookShelvesWhereInput>;
  @Field(() => [UserBookShelvesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserBookShelvesOrderByWithRelationInput>;
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    UserBookShelvesWhereUniqueInput,
    'userBookId_shelfId'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserBookShelvesCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserBookShelvesCountAggregateInput>;
  @Field(() => UserBookShelvesMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserBookShelvesMinAggregateInput>;
  @Field(() => UserBookShelvesMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserBookShelvesMaxAggregateInput>;
}

@InputType()
export class UserBookShelvesCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  userBookId?: true;
  @Field(() => Boolean, { nullable: true })
  shelfId?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class UserBookShelvesCountAggregate {
  @Field(() => Int, { nullable: false })
  userBookId!: number;
  @Field(() => Int, { nullable: false })
  shelfId!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class UserBookShelvesCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userBookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  shelfId?: keyof typeof SortOrder;
}

@InputType()
export class UserBookShelvesCreateManyShelfInputEnvelope {
  @Field(() => [UserBookShelvesCreateManyShelfInput], { nullable: false })
  @Type(() => UserBookShelvesCreateManyShelfInput)
  data!: Array<UserBookShelvesCreateManyShelfInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class UserBookShelvesCreateManyShelfInput {
  @Field(() => String, { nullable: false })
  userBookId!: string;
}

@InputType()
export class UserBookShelvesCreateManyUserBookInputEnvelope {
  @Field(() => [UserBookShelvesCreateManyUserBookInput], { nullable: false })
  @Type(() => UserBookShelvesCreateManyUserBookInput)
  data!: Array<UserBookShelvesCreateManyUserBookInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class UserBookShelvesCreateManyUserBookInput {
  @Field(() => String, { nullable: false })
  shelfId!: string;
}

@InputType()
export class UserBookShelvesCreateManyInput {
  @Field(() => String, { nullable: false })
  userBookId!: string;
  @Field(() => String, { nullable: false })
  shelfId!: string;
}

@InputType()
export class UserBookShelvesCreateNestedManyWithoutShelfInput {
  @Field(() => [UserBookShelvesCreateWithoutShelfInput], { nullable: true })
  @Type(() => UserBookShelvesCreateWithoutShelfInput)
  create?: Array<UserBookShelvesCreateWithoutShelfInput>;
  @Field(() => [UserBookShelvesCreateOrConnectWithoutShelfInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesCreateOrConnectWithoutShelfInput)
  connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutShelfInput>;
  @Field(() => UserBookShelvesCreateManyShelfInputEnvelope, { nullable: true })
  @Type(() => UserBookShelvesCreateManyShelfInputEnvelope)
  createMany?: InstanceType<typeof UserBookShelvesCreateManyShelfInputEnvelope>;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
}

@InputType()
export class UserBookShelvesCreateNestedManyWithoutUserBookInput {
  @Field(() => [UserBookShelvesCreateWithoutUserBookInput], { nullable: true })
  @Type(() => UserBookShelvesCreateWithoutUserBookInput)
  create?: Array<UserBookShelvesCreateWithoutUserBookInput>;
  @Field(() => [UserBookShelvesCreateOrConnectWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutUserBookInput>;
  @Field(() => UserBookShelvesCreateManyUserBookInputEnvelope, {
    nullable: true,
  })
  @Type(() => UserBookShelvesCreateManyUserBookInputEnvelope)
  createMany?: InstanceType<
    typeof UserBookShelvesCreateManyUserBookInputEnvelope
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
}

@InputType()
export class UserBookShelvesCreateOrConnectWithoutShelfInput {
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: false })
  @Type(() => UserBookShelvesWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
  @Field(() => UserBookShelvesCreateWithoutShelfInput, { nullable: false })
  @Type(() => UserBookShelvesCreateWithoutShelfInput)
  create!: InstanceType<typeof UserBookShelvesCreateWithoutShelfInput>;
}

@InputType()
export class UserBookShelvesCreateOrConnectWithoutUserBookInput {
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: false })
  @Type(() => UserBookShelvesWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
  @Field(() => UserBookShelvesCreateWithoutUserBookInput, { nullable: false })
  @Type(() => UserBookShelvesCreateWithoutUserBookInput)
  create!: InstanceType<typeof UserBookShelvesCreateWithoutUserBookInput>;
}

@InputType()
export class UserBookShelvesCreateWithoutShelfInput {
  @Field(() => UserBookCreateNestedOneWithoutShelvesInput, { nullable: false })
  userBook!: InstanceType<typeof UserBookCreateNestedOneWithoutShelvesInput>;
}

@InputType()
export class UserBookShelvesCreateWithoutUserBookInput {
  @Field(() => ShelfCreateNestedOneWithoutUserBooksInput, { nullable: false })
  shelf!: InstanceType<typeof ShelfCreateNestedOneWithoutUserBooksInput>;
}

@InputType()
export class UserBookShelvesCreateInput {
  @Field(() => UserBookCreateNestedOneWithoutShelvesInput, { nullable: false })
  userBook!: InstanceType<typeof UserBookCreateNestedOneWithoutShelvesInput>;
  @Field(() => ShelfCreateNestedOneWithoutUserBooksInput, { nullable: false })
  shelf!: InstanceType<typeof ShelfCreateNestedOneWithoutUserBooksInput>;
}

@ArgsType()
export class UserBookShelvesGroupByArgs {
  @Field(() => UserBookShelvesWhereInput, { nullable: true })
  @Type(() => UserBookShelvesWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof UserBookShelvesWhereInput>;
  @Field(() => [UserBookShelvesOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<UserBookShelvesOrderByWithAggregationInput>;
  @Field(() => [UserBookShelvesScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UserBookShelvesScalarFieldEnum>;
  @Field(() => UserBookShelvesScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: InstanceType<typeof UserBookShelvesScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UserBookShelvesCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserBookShelvesCountAggregateInput>;
  @Field(() => UserBookShelvesMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserBookShelvesMinAggregateInput>;
  @Field(() => UserBookShelvesMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserBookShelvesMaxAggregateInput>;
}

@ObjectType()
export class UserBookShelvesGroupBy {
  @Field(() => String, { nullable: false })
  userBookId!: string;
  @Field(() => String, { nullable: false })
  shelfId!: string;
  @Field(() => UserBookShelvesCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserBookShelvesCountAggregate>;
  @Field(() => UserBookShelvesMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserBookShelvesMinAggregate>;
  @Field(() => UserBookShelvesMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserBookShelvesMaxAggregate>;
}

@InputType()
export class UserBookShelvesListRelationFilter {
  @Field(() => UserBookShelvesWhereInput, { nullable: true })
  every?: InstanceType<typeof UserBookShelvesWhereInput>;
  @Field(() => UserBookShelvesWhereInput, { nullable: true })
  some?: InstanceType<typeof UserBookShelvesWhereInput>;
  @Field(() => UserBookShelvesWhereInput, { nullable: true })
  none?: InstanceType<typeof UserBookShelvesWhereInput>;
}

@InputType()
export class UserBookShelvesMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  userBookId?: true;
  @Field(() => Boolean, { nullable: true })
  shelfId?: true;
}

@ObjectType()
export class UserBookShelvesMaxAggregate {
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => String, { nullable: true })
  shelfId?: string;
}

@InputType()
export class UserBookShelvesMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userBookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  shelfId?: keyof typeof SortOrder;
}

@InputType()
export class UserBookShelvesMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  userBookId?: true;
  @Field(() => Boolean, { nullable: true })
  shelfId?: true;
}

@ObjectType()
export class UserBookShelvesMinAggregate {
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => String, { nullable: true })
  shelfId?: string;
}

@InputType()
export class UserBookShelvesMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userBookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  shelfId?: keyof typeof SortOrder;
}

@InputType()
export class UserBookShelvesOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class UserBookShelvesOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  userBookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  shelfId?: keyof typeof SortOrder;
  @Field(() => UserBookShelvesCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserBookShelvesCountOrderByAggregateInput>;
  @Field(() => UserBookShelvesMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserBookShelvesMaxOrderByAggregateInput>;
  @Field(() => UserBookShelvesMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserBookShelvesMinOrderByAggregateInput>;
}

@InputType()
export class UserBookShelvesOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  userBookId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  shelfId?: keyof typeof SortOrder;
  @Field(() => UserBookOrderByWithRelationInput, { nullable: true })
  userBook?: InstanceType<typeof UserBookOrderByWithRelationInput>;
  @Field(() => ShelfOrderByWithRelationInput, { nullable: true })
  shelf?: InstanceType<typeof ShelfOrderByWithRelationInput>;
}

@InputType()
export class UserBookShelvesScalarWhereWithAggregatesInput {
  @Field(() => [UserBookShelvesScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<UserBookShelvesScalarWhereWithAggregatesInput>;
  @Field(() => [UserBookShelvesScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<UserBookShelvesScalarWhereWithAggregatesInput>;
  @Field(() => [UserBookShelvesScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<UserBookShelvesScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userBookId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  shelfId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserBookShelvesScalarWhereInput {
  @Field(() => [UserBookShelvesScalarWhereInput], { nullable: true })
  AND?: Array<UserBookShelvesScalarWhereInput>;
  @Field(() => [UserBookShelvesScalarWhereInput], { nullable: true })
  OR?: Array<UserBookShelvesScalarWhereInput>;
  @Field(() => [UserBookShelvesScalarWhereInput], { nullable: true })
  NOT?: Array<UserBookShelvesScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userBookId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  shelfId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class UserBookShelvesUncheckedCreateNestedManyWithoutShelfInput {
  @Field(() => [UserBookShelvesCreateWithoutShelfInput], { nullable: true })
  @Type(() => UserBookShelvesCreateWithoutShelfInput)
  create?: Array<UserBookShelvesCreateWithoutShelfInput>;
  @Field(() => [UserBookShelvesCreateOrConnectWithoutShelfInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesCreateOrConnectWithoutShelfInput)
  connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutShelfInput>;
  @Field(() => UserBookShelvesCreateManyShelfInputEnvelope, { nullable: true })
  @Type(() => UserBookShelvesCreateManyShelfInputEnvelope)
  createMany?: InstanceType<typeof UserBookShelvesCreateManyShelfInputEnvelope>;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
}

@InputType()
export class UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput {
  @Field(() => [UserBookShelvesCreateWithoutUserBookInput], { nullable: true })
  @Type(() => UserBookShelvesCreateWithoutUserBookInput)
  create?: Array<UserBookShelvesCreateWithoutUserBookInput>;
  @Field(() => [UserBookShelvesCreateOrConnectWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutUserBookInput>;
  @Field(() => UserBookShelvesCreateManyUserBookInputEnvelope, {
    nullable: true,
  })
  @Type(() => UserBookShelvesCreateManyUserBookInputEnvelope)
  createMany?: InstanceType<
    typeof UserBookShelvesCreateManyUserBookInputEnvelope
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
}

@InputType()
export class UserBookShelvesUncheckedCreateWithoutShelfInput {
  @Field(() => String, { nullable: false })
  userBookId!: string;
}

@InputType()
export class UserBookShelvesUncheckedCreateWithoutUserBookInput {
  @Field(() => String, { nullable: false })
  shelfId!: string;
}

@InputType()
export class UserBookShelvesUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  userBookId!: string;
  @Field(() => String, { nullable: false })
  shelfId!: string;
}

@InputType()
export class UserBookShelvesUncheckedUpdateManyWithoutShelfNestedInput {
  @Field(() => [UserBookShelvesCreateWithoutShelfInput], { nullable: true })
  @Type(() => UserBookShelvesCreateWithoutShelfInput)
  create?: Array<UserBookShelvesCreateWithoutShelfInput>;
  @Field(() => [UserBookShelvesCreateOrConnectWithoutShelfInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesCreateOrConnectWithoutShelfInput)
  connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutShelfInput>;
  @Field(() => [UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput)
  upsert?: Array<UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput>;
  @Field(() => UserBookShelvesCreateManyShelfInputEnvelope, { nullable: true })
  @Type(() => UserBookShelvesCreateManyShelfInputEnvelope)
  createMany?: InstanceType<typeof UserBookShelvesCreateManyShelfInputEnvelope>;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput)
  update?: Array<UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput>;
  @Field(() => [UserBookShelvesUpdateManyWithWhereWithoutShelfInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesUpdateManyWithWhereWithoutShelfInput)
  updateMany?: Array<UserBookShelvesUpdateManyWithWhereWithoutShelfInput>;
  @Field(() => [UserBookShelvesScalarWhereInput], { nullable: true })
  @Type(() => UserBookShelvesScalarWhereInput)
  deleteMany?: Array<UserBookShelvesScalarWhereInput>;
}

@InputType()
export class UserBookShelvesUncheckedUpdateManyWithoutShelfInput {
  @Field(() => String, { nullable: true })
  userBookId?: string;
}

@InputType()
export class UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput {
  @Field(() => [UserBookShelvesCreateWithoutUserBookInput], { nullable: true })
  @Type(() => UserBookShelvesCreateWithoutUserBookInput)
  create?: Array<UserBookShelvesCreateWithoutUserBookInput>;
  @Field(() => [UserBookShelvesCreateOrConnectWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutUserBookInput>;
  @Field(() => [UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput)
  upsert?: Array<UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput>;
  @Field(() => UserBookShelvesCreateManyUserBookInputEnvelope, {
    nullable: true,
  })
  @Type(() => UserBookShelvesCreateManyUserBookInputEnvelope)
  createMany?: InstanceType<
    typeof UserBookShelvesCreateManyUserBookInputEnvelope
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput)
  update?: Array<UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput>;
  @Field(() => [UserBookShelvesUpdateManyWithWhereWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesUpdateManyWithWhereWithoutUserBookInput)
  updateMany?: Array<UserBookShelvesUpdateManyWithWhereWithoutUserBookInput>;
  @Field(() => [UserBookShelvesScalarWhereInput], { nullable: true })
  @Type(() => UserBookShelvesScalarWhereInput)
  deleteMany?: Array<UserBookShelvesScalarWhereInput>;
}

@InputType()
export class UserBookShelvesUncheckedUpdateManyWithoutUserBookInput {
  @Field(() => String, { nullable: true })
  shelfId?: string;
}

@InputType()
export class UserBookShelvesUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => String, { nullable: true })
  shelfId?: string;
}

@InputType()
export class UserBookShelvesUncheckedUpdateWithoutShelfInput {
  @Field(() => String, { nullable: true })
  userBookId?: string;
}

@InputType()
export class UserBookShelvesUncheckedUpdateWithoutUserBookInput {
  @Field(() => String, { nullable: true })
  shelfId?: string;
}

@InputType()
export class UserBookShelvesUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  userBookId?: string;
  @Field(() => String, { nullable: true })
  shelfId?: string;
}

@InputType()
export class UserBookShelvesUpdateManyWithWhereWithoutShelfInput {
  @Field(() => UserBookShelvesScalarWhereInput, { nullable: false })
  @Type(() => UserBookShelvesScalarWhereInput)
  where!: InstanceType<typeof UserBookShelvesScalarWhereInput>;
  @Field(() => UserBookShelvesUncheckedUpdateManyWithoutShelfInput, {
    nullable: false,
  })
  @Type(() => UserBookShelvesUncheckedUpdateManyWithoutShelfInput)
  data!: InstanceType<
    typeof UserBookShelvesUncheckedUpdateManyWithoutShelfInput
  >;
}

@InputType()
export class UserBookShelvesUpdateManyWithWhereWithoutUserBookInput {
  @Field(() => UserBookShelvesScalarWhereInput, { nullable: false })
  @Type(() => UserBookShelvesScalarWhereInput)
  where!: InstanceType<typeof UserBookShelvesScalarWhereInput>;
  @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookInput, {
    nullable: false,
  })
  @Type(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookInput)
  data!: InstanceType<
    typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookInput
  >;
}

@InputType()
export class UserBookShelvesUpdateManyWithoutShelfNestedInput {
  @Field(() => [UserBookShelvesCreateWithoutShelfInput], { nullable: true })
  @Type(() => UserBookShelvesCreateWithoutShelfInput)
  create?: Array<UserBookShelvesCreateWithoutShelfInput>;
  @Field(() => [UserBookShelvesCreateOrConnectWithoutShelfInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesCreateOrConnectWithoutShelfInput)
  connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutShelfInput>;
  @Field(() => [UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput)
  upsert?: Array<UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput>;
  @Field(() => UserBookShelvesCreateManyShelfInputEnvelope, { nullable: true })
  @Type(() => UserBookShelvesCreateManyShelfInputEnvelope)
  createMany?: InstanceType<typeof UserBookShelvesCreateManyShelfInputEnvelope>;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput)
  update?: Array<UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput>;
  @Field(() => [UserBookShelvesUpdateManyWithWhereWithoutShelfInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesUpdateManyWithWhereWithoutShelfInput)
  updateMany?: Array<UserBookShelvesUpdateManyWithWhereWithoutShelfInput>;
  @Field(() => [UserBookShelvesScalarWhereInput], { nullable: true })
  @Type(() => UserBookShelvesScalarWhereInput)
  deleteMany?: Array<UserBookShelvesScalarWhereInput>;
}

@InputType()
export class UserBookShelvesUpdateManyWithoutUserBookNestedInput {
  @Field(() => [UserBookShelvesCreateWithoutUserBookInput], { nullable: true })
  @Type(() => UserBookShelvesCreateWithoutUserBookInput)
  create?: Array<UserBookShelvesCreateWithoutUserBookInput>;
  @Field(() => [UserBookShelvesCreateOrConnectWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesCreateOrConnectWithoutUserBookInput)
  connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutUserBookInput>;
  @Field(() => [UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput)
  upsert?: Array<UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput>;
  @Field(() => UserBookShelvesCreateManyUserBookInputEnvelope, {
    nullable: true,
  })
  @Type(() => UserBookShelvesCreateManyUserBookInputEnvelope)
  createMany?: InstanceType<
    typeof UserBookShelvesCreateManyUserBookInputEnvelope
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesWhereUniqueInput], { nullable: true })
  @Type(() => UserBookShelvesWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>
  >;
  @Field(() => [UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput)
  update?: Array<UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput>;
  @Field(() => [UserBookShelvesUpdateManyWithWhereWithoutUserBookInput], {
    nullable: true,
  })
  @Type(() => UserBookShelvesUpdateManyWithWhereWithoutUserBookInput)
  updateMany?: Array<UserBookShelvesUpdateManyWithWhereWithoutUserBookInput>;
  @Field(() => [UserBookShelvesScalarWhereInput], { nullable: true })
  @Type(() => UserBookShelvesScalarWhereInput)
  deleteMany?: Array<UserBookShelvesScalarWhereInput>;
}

@InputType()
export class UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput {
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: false })
  @Type(() => UserBookShelvesWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
  @Field(() => UserBookShelvesUpdateWithoutShelfInput, { nullable: false })
  @Type(() => UserBookShelvesUpdateWithoutShelfInput)
  data!: InstanceType<typeof UserBookShelvesUpdateWithoutShelfInput>;
}

@InputType()
export class UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput {
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: false })
  @Type(() => UserBookShelvesWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
  @Field(() => UserBookShelvesUpdateWithoutUserBookInput, { nullable: false })
  @Type(() => UserBookShelvesUpdateWithoutUserBookInput)
  data!: InstanceType<typeof UserBookShelvesUpdateWithoutUserBookInput>;
}

@InputType()
export class UserBookShelvesUpdateWithoutShelfInput {
  @Field(() => UserBookUpdateOneRequiredWithoutShelvesNestedInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUpdateOneRequiredWithoutShelvesNestedInput
  >;
}

@InputType()
export class UserBookShelvesUpdateWithoutUserBookInput {
  @Field(() => ShelfUpdateOneRequiredWithoutUserBooksNestedInput, {
    nullable: true,
  })
  shelf?: InstanceType<
    typeof ShelfUpdateOneRequiredWithoutUserBooksNestedInput
  >;
}

@InputType()
export class UserBookShelvesUpdateInput {
  @Field(() => UserBookUpdateOneRequiredWithoutShelvesNestedInput, {
    nullable: true,
  })
  userBook?: InstanceType<
    typeof UserBookUpdateOneRequiredWithoutShelvesNestedInput
  >;
  @Field(() => ShelfUpdateOneRequiredWithoutUserBooksNestedInput, {
    nullable: true,
  })
  shelf?: InstanceType<
    typeof ShelfUpdateOneRequiredWithoutUserBooksNestedInput
  >;
}

@InputType()
export class UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput {
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: false })
  @Type(() => UserBookShelvesWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
  @Field(() => UserBookShelvesUpdateWithoutShelfInput, { nullable: false })
  @Type(() => UserBookShelvesUpdateWithoutShelfInput)
  update!: InstanceType<typeof UserBookShelvesUpdateWithoutShelfInput>;
  @Field(() => UserBookShelvesCreateWithoutShelfInput, { nullable: false })
  @Type(() => UserBookShelvesCreateWithoutShelfInput)
  create!: InstanceType<typeof UserBookShelvesCreateWithoutShelfInput>;
}

@InputType()
export class UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput {
  @Field(() => UserBookShelvesWhereUniqueInput, { nullable: false })
  @Type(() => UserBookShelvesWhereUniqueInput)
  where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
  @Field(() => UserBookShelvesUpdateWithoutUserBookInput, { nullable: false })
  @Type(() => UserBookShelvesUpdateWithoutUserBookInput)
  update!: InstanceType<typeof UserBookShelvesUpdateWithoutUserBookInput>;
  @Field(() => UserBookShelvesCreateWithoutUserBookInput, { nullable: false })
  @Type(() => UserBookShelvesCreateWithoutUserBookInput)
  create!: InstanceType<typeof UserBookShelvesCreateWithoutUserBookInput>;
}

@InputType()
export class UserBookShelvesUserBookIdShelfIdCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  userBookId!: string;
  @Field(() => String, { nullable: false })
  shelfId!: string;
}

@InputType()
export class UserBookShelvesWhereUniqueInput {
  @Field(() => UserBookShelvesUserBookIdShelfIdCompoundUniqueInput, {
    nullable: true,
  })
  userBookId_shelfId?: InstanceType<
    typeof UserBookShelvesUserBookIdShelfIdCompoundUniqueInput
  >;
  @Field(() => [UserBookShelvesWhereInput], { nullable: true })
  AND?: Array<UserBookShelvesWhereInput>;
  @Field(() => [UserBookShelvesWhereInput], { nullable: true })
  OR?: Array<UserBookShelvesWhereInput>;
  @Field(() => [UserBookShelvesWhereInput], { nullable: true })
  NOT?: Array<UserBookShelvesWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userBookId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  shelfId?: InstanceType<typeof StringFilter>;
  @Field(() => UserBookRelationFilter, { nullable: true })
  userBook?: InstanceType<typeof UserBookRelationFilter>;
  @Field(() => ShelfRelationFilter, { nullable: true })
  shelf?: InstanceType<typeof ShelfRelationFilter>;
}

@InputType()
export class UserBookShelvesWhereInput {
  @Field(() => [UserBookShelvesWhereInput], { nullable: true })
  AND?: Array<UserBookShelvesWhereInput>;
  @Field(() => [UserBookShelvesWhereInput], { nullable: true })
  OR?: Array<UserBookShelvesWhereInput>;
  @Field(() => [UserBookShelvesWhereInput], { nullable: true })
  NOT?: Array<UserBookShelvesWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userBookId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  shelfId?: InstanceType<typeof StringFilter>;
  @Field(() => UserBookRelationFilter, { nullable: true })
  userBook?: InstanceType<typeof UserBookRelationFilter>;
  @Field(() => ShelfRelationFilter, { nullable: true })
  shelf?: InstanceType<typeof ShelfRelationFilter>;
}

@ObjectType()
export class UserBookShelves {
  @Field(() => String, { nullable: false })
  userBookId!: string;
  @Field(() => String, { nullable: false })
  shelfId!: string;
  @Field(() => UserBook, { nullable: false })
  userBook?: InstanceType<typeof UserBook>;
  @Field(() => Shelf, { nullable: false })
  shelf?: InstanceType<typeof Shelf>;
}

@ObjectType()
export class AggregateVerificationToken {
  @Field(() => VerificationTokenCountAggregate, { nullable: true })
  _count?: InstanceType<typeof VerificationTokenCountAggregate>;
  @Field(() => VerificationTokenMinAggregate, { nullable: true })
  _min?: InstanceType<typeof VerificationTokenMinAggregate>;
  @Field(() => VerificationTokenMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof VerificationTokenMaxAggregate>;
}

@ArgsType()
export class CreateManyVerificationTokenArgs {
  @Field(() => [VerificationTokenCreateManyInput], { nullable: false })
  @Type(() => VerificationTokenCreateManyInput)
  @ValidateNested()
  data!: Array<VerificationTokenCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneVerificationTokenArgs {
  @Field(() => VerificationTokenCreateInput, { nullable: false })
  @Type(() => VerificationTokenCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof VerificationTokenCreateInput>;
}

@ArgsType()
export class DeleteManyVerificationTokenArgs {
  @Field(() => VerificationTokenWhereInput, { nullable: true })
  @Type(() => VerificationTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof VerificationTokenWhereInput>;
}

@ArgsType()
export class DeleteOneVerificationTokenArgs {
  @Field(() => VerificationTokenWhereUniqueInput, { nullable: false })
  @Type(() => VerificationTokenWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    VerificationTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
}

@ArgsType()
export class FindFirstVerificationTokenOrThrowArgs {
  @Field(() => VerificationTokenWhereInput, { nullable: true })
  @Type(() => VerificationTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof VerificationTokenWhereInput>;
  @Field(() => [VerificationTokenOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
  @Field(() => VerificationTokenWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    VerificationTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [VerificationTokenScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof VerificationTokenScalarFieldEnum>;
}

@ArgsType()
export class FindFirstVerificationTokenArgs {
  @Field(() => VerificationTokenWhereInput, { nullable: true })
  @Type(() => VerificationTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof VerificationTokenWhereInput>;
  @Field(() => [VerificationTokenOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
  @Field(() => VerificationTokenWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    VerificationTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [VerificationTokenScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof VerificationTokenScalarFieldEnum>;
}

@ArgsType()
export class FindManyVerificationTokenArgs {
  @Field(() => VerificationTokenWhereInput, { nullable: true })
  @Type(() => VerificationTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof VerificationTokenWhereInput>;
  @Field(() => [VerificationTokenOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
  @Field(() => VerificationTokenWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    VerificationTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [VerificationTokenScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof VerificationTokenScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueVerificationTokenOrThrowArgs {
  @Field(() => VerificationTokenWhereUniqueInput, { nullable: false })
  @Type(() => VerificationTokenWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    VerificationTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
}

@ArgsType()
export class FindUniqueVerificationTokenArgs {
  @Field(() => VerificationTokenWhereUniqueInput, { nullable: false })
  @Type(() => VerificationTokenWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    VerificationTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
}

@ArgsType()
export class UpdateManyVerificationTokenArgs {
  @Field(() => VerificationTokenUpdateManyMutationInput, { nullable: false })
  @Type(() => VerificationTokenUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof VerificationTokenUpdateManyMutationInput>;
  @Field(() => VerificationTokenWhereInput, { nullable: true })
  @Type(() => VerificationTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof VerificationTokenWhereInput>;
}

@ArgsType()
export class UpdateOneVerificationTokenArgs {
  @Field(() => VerificationTokenUpdateInput, { nullable: false })
  @Type(() => VerificationTokenUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof VerificationTokenUpdateInput>;
  @Field(() => VerificationTokenWhereUniqueInput, { nullable: false })
  @Type(() => VerificationTokenWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    VerificationTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
}

@ArgsType()
export class UpsertOneVerificationTokenArgs {
  @Field(() => VerificationTokenWhereUniqueInput, { nullable: false })
  @Type(() => VerificationTokenWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<
    VerificationTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
  @Field(() => VerificationTokenCreateInput, { nullable: false })
  @Type(() => VerificationTokenCreateInput)
  create!: InstanceType<typeof VerificationTokenCreateInput>;
  @Field(() => VerificationTokenUpdateInput, { nullable: false })
  @Type(() => VerificationTokenUpdateInput)
  update!: InstanceType<typeof VerificationTokenUpdateInput>;
}

@ArgsType()
export class VerificationTokenAggregateArgs {
  @Field(() => VerificationTokenWhereInput, { nullable: true })
  @Type(() => VerificationTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof VerificationTokenWhereInput>;
  @Field(() => [VerificationTokenOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
  @Field(() => VerificationTokenWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    VerificationTokenWhereUniqueInput,
    'id' | 'token' | 'email_token'
  >;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => VerificationTokenCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof VerificationTokenCountAggregateInput>;
  @Field(() => VerificationTokenMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof VerificationTokenMinAggregateInput>;
  @Field(() => VerificationTokenMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof VerificationTokenMaxAggregateInput>;
}

@InputType()
export class VerificationTokenCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  existingEmail?: true;
  @Field(() => Boolean, { nullable: true })
  token?: true;
  @Field(() => Boolean, { nullable: true })
  expires?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class VerificationTokenCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  email!: number;
  @Field(() => Int, { nullable: false })
  existingEmail!: number;
  @Field(() => Int, { nullable: false })
  token!: number;
  @Field(() => Int, { nullable: false })
  expires!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class VerificationTokenCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  existingEmail?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: false })
  existingEmail!: string;
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
}

@InputType()
export class VerificationTokenCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: false })
  existingEmail!: string;
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
}

@InputType()
export class VerificationTokenEmailTokenCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: false })
  token!: string;
}

@ArgsType()
export class VerificationTokenGroupByArgs {
  @Field(() => VerificationTokenWhereInput, { nullable: true })
  @Type(() => VerificationTokenWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof VerificationTokenWhereInput>;
  @Field(() => [VerificationTokenOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<VerificationTokenOrderByWithAggregationInput>;
  @Field(() => [VerificationTokenScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof VerificationTokenScalarFieldEnum>;
  @Field(() => VerificationTokenScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: InstanceType<typeof VerificationTokenScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => VerificationTokenCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof VerificationTokenCountAggregateInput>;
  @Field(() => VerificationTokenMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof VerificationTokenMinAggregateInput>;
  @Field(() => VerificationTokenMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof VerificationTokenMaxAggregateInput>;
}

@ObjectType()
export class VerificationTokenGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: false })
  existingEmail!: string;
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
  @Field(() => VerificationTokenCountAggregate, { nullable: true })
  _count?: InstanceType<typeof VerificationTokenCountAggregate>;
  @Field(() => VerificationTokenMinAggregate, { nullable: true })
  _min?: InstanceType<typeof VerificationTokenMinAggregate>;
  @Field(() => VerificationTokenMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof VerificationTokenMaxAggregate>;
}

@InputType()
export class VerificationTokenMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  existingEmail?: true;
  @Field(() => Boolean, { nullable: true })
  token?: true;
  @Field(() => Boolean, { nullable: true })
  expires?: true;
}

@ObjectType()
export class VerificationTokenMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  existingEmail?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => Date, { nullable: true })
  expires?: Date | string;
}

@InputType()
export class VerificationTokenMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  existingEmail?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  email?: true;
  @Field(() => Boolean, { nullable: true })
  existingEmail?: true;
  @Field(() => Boolean, { nullable: true })
  token?: true;
  @Field(() => Boolean, { nullable: true })
  expires?: true;
}

@ObjectType()
export class VerificationTokenMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  existingEmail?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => Date, { nullable: true })
  expires?: Date | string;
}

@InputType()
export class VerificationTokenMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  existingEmail?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  existingEmail?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
  @Field(() => VerificationTokenCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof VerificationTokenCountOrderByAggregateInput>;
  @Field(() => VerificationTokenMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof VerificationTokenMaxOrderByAggregateInput>;
  @Field(() => VerificationTokenMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof VerificationTokenMinOrderByAggregateInput>;
}

@InputType()
export class VerificationTokenOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  existingEmail?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenScalarWhereWithAggregatesInput {
  @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
  @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
  @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  existingEmail?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  token?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  expires?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class VerificationTokenUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: false })
  existingEmail!: string;
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
}

@InputType()
export class VerificationTokenUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  existingEmail?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => Date, { nullable: true })
  expires?: Date | string;
}

@InputType()
export class VerificationTokenUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  existingEmail?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => Date, { nullable: true })
  expires?: Date | string;
}

@InputType()
export class VerificationTokenUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  existingEmail?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => Date, { nullable: true })
  expires?: Date | string;
}

@InputType()
export class VerificationTokenUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  existingEmail?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => Date, { nullable: true })
  expires?: Date | string;
}

@InputType()
export class VerificationTokenWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  token?: string;
  @Field(() => VerificationTokenEmailTokenCompoundUniqueInput, {
    nullable: true,
  })
  email_token?: InstanceType<
    typeof VerificationTokenEmailTokenCompoundUniqueInput
  >;
  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  AND?: Array<VerificationTokenWhereInput>;
  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  OR?: Array<VerificationTokenWhereInput>;
  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  NOT?: Array<VerificationTokenWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  email?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  existingEmail?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  expires?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class VerificationTokenWhereInput {
  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  AND?: Array<VerificationTokenWhereInput>;
  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  OR?: Array<VerificationTokenWhereInput>;
  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  NOT?: Array<VerificationTokenWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  email?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  existingEmail?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  token?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  expires?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class VerificationToken {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: false })
  existingEmail!: string;
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date;
}

@ObjectType()
export class AggregateWork {
  @Field(() => WorkCountAggregate, { nullable: true })
  _count?: InstanceType<typeof WorkCountAggregate>;
  @Field(() => WorkAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof WorkAvgAggregate>;
  @Field(() => WorkSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof WorkSumAggregate>;
  @Field(() => WorkMinAggregate, { nullable: true })
  _min?: InstanceType<typeof WorkMinAggregate>;
  @Field(() => WorkMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof WorkMaxAggregate>;
}

@ArgsType()
export class CreateManyWorkArgs {
  @Field(() => [WorkCreateManyInput], { nullable: false })
  @Type(() => WorkCreateManyInput)
  @ValidateNested()
  data!: Array<WorkCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneWorkArgs {
  @Field(() => WorkCreateInput, { nullable: false })
  @Type(() => WorkCreateInput)
  @ValidateNested()
  data!: InstanceType<typeof WorkCreateInput>;
}

@ArgsType()
export class DeleteManyWorkArgs {
  @Field(() => WorkWhereInput, { nullable: true })
  @Type(() => WorkWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof WorkWhereInput>;
}

@ArgsType()
export class DeleteOneWorkArgs {
  @Field(() => WorkWhereUniqueInput, { nullable: false })
  @Type(() => WorkWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstWorkOrThrowArgs {
  @Field(() => WorkWhereInput, { nullable: true })
  @Type(() => WorkWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof WorkWhereInput>;
  @Field(() => [WorkOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<WorkOrderByWithRelationInput>;
  @Field(() => WorkWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [WorkScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof WorkScalarFieldEnum>;
}

@ArgsType()
export class FindFirstWorkArgs {
  @Field(() => WorkWhereInput, { nullable: true })
  @Type(() => WorkWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof WorkWhereInput>;
  @Field(() => [WorkOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<WorkOrderByWithRelationInput>;
  @Field(() => WorkWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [WorkScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof WorkScalarFieldEnum>;
}

@ArgsType()
export class FindManyWorkArgs {
  @Field(() => WorkWhereInput, { nullable: true })
  @Type(() => WorkWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof WorkWhereInput>;
  @Field(() => [WorkOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<WorkOrderByWithRelationInput>;
  @Field(() => WorkWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [WorkScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof WorkScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueWorkOrThrowArgs {
  @Field(() => WorkWhereUniqueInput, { nullable: false })
  @Type(() => WorkWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueWorkArgs {
  @Field(() => WorkWhereUniqueInput, { nullable: false })
  @Type(() => WorkWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyWorkArgs {
  @Field(() => WorkUpdateManyMutationInput, { nullable: false })
  @Type(() => WorkUpdateManyMutationInput)
  @ValidateNested()
  data!: InstanceType<typeof WorkUpdateManyMutationInput>;
  @Field(() => WorkWhereInput, { nullable: true })
  @Type(() => WorkWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof WorkWhereInput>;
}

@ArgsType()
export class UpdateOneWorkArgs {
  @Field(() => WorkUpdateInput, { nullable: false })
  @Type(() => WorkUpdateInput)
  @ValidateNested()
  data!: InstanceType<typeof WorkUpdateInput>;
  @Field(() => WorkWhereUniqueInput, { nullable: false })
  @Type(() => WorkWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneWorkArgs {
  @Field(() => WorkWhereUniqueInput, { nullable: false })
  @Type(() => WorkWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
  @Field(() => WorkCreateInput, { nullable: false })
  @Type(() => WorkCreateInput)
  create!: InstanceType<typeof WorkCreateInput>;
  @Field(() => WorkUpdateInput, { nullable: false })
  @Type(() => WorkUpdateInput)
  update!: InstanceType<typeof WorkUpdateInput>;
}

@ArgsType()
export class WorkAggregateArgs {
  @Field(() => WorkWhereInput, { nullable: true })
  @Type(() => WorkWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof WorkWhereInput>;
  @Field(() => [WorkOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<WorkOrderByWithRelationInput>;
  @Field(() => WorkWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => WorkCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof WorkCountAggregateInput>;
  @Field(() => WorkAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof WorkAvgAggregateInput>;
  @Field(() => WorkSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof WorkSumAggregateInput>;
  @Field(() => WorkMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof WorkMinAggregateInput>;
  @Field(() => WorkMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof WorkMaxAggregateInput>;
}

@InputType()
export class WorkAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  averageRating?: true;
  @Field(() => Boolean, { nullable: true })
  ratingsCount?: true;
  @Field(() => Boolean, { nullable: true })
  mainEditionId?: true;
}

@ObjectType()
export class WorkAvgAggregate {
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Float, { nullable: true })
  ratingsCount?: number;
  @Field(() => Float, { nullable: true })
  mainEditionId?: number;
}

@InputType()
export class WorkAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  averageRating?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  ratingsCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  mainEditionId?: keyof typeof SortOrder;
}

@InputType()
export class WorkCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  description?: true;
  @Field(() => Boolean, { nullable: true })
  categories?: true;
  @Field(() => Boolean, { nullable: true })
  mainCategory?: true;
  @Field(() => Boolean, { nullable: true })
  averageRating?: true;
  @Field(() => Boolean, { nullable: true })
  ratingsCount?: true;
  @Field(() => Boolean, { nullable: true })
  mainEditionId?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class WorkCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
  @Field(() => Int, { nullable: false })
  title!: number;
  @Field(() => Int, { nullable: false })
  description!: number;
  @Field(() => Int, { nullable: false })
  categories!: number;
  @Field(() => Int, { nullable: false })
  mainCategory!: number;
  @Field(() => Int, { nullable: false })
  averageRating!: number;
  @Field(() => Int, { nullable: false })
  @Validator.IsInt()
  ratingsCount!: number;
  @Field(() => Int, { nullable: false })
  mainEditionId!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class WorkCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  categories?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  mainCategory?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  averageRating?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  ratingsCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  mainEditionId?: keyof typeof SortOrder;
}

@ObjectType()
export class WorkCount {
  @Field(() => Int, { nullable: false })
  authors?: number;
  @Field(() => Int, { nullable: false })
  editions?: number;
}

@InputType()
export class WorkCreateManyInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
}

@InputType()
export class WorkCreateNestedManyWithoutAuthorsInput {
  @Field(() => [WorkCreateWithoutAuthorsInput], { nullable: true })
  @Type(() => WorkCreateWithoutAuthorsInput)
  create?: Array<WorkCreateWithoutAuthorsInput>;
  @Field(() => [WorkCreateOrConnectWithoutAuthorsInput], { nullable: true })
  @Type(() => WorkCreateOrConnectWithoutAuthorsInput)
  connectOrCreate?: Array<WorkCreateOrConnectWithoutAuthorsInput>;
  @Field(() => [WorkWhereUniqueInput], { nullable: true })
  @Type(() => WorkWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<WorkWhereUniqueInput, 'id'>>;
}

@InputType()
export class WorkCreateNestedOneWithoutEditionsInput {
  @Field(() => WorkCreateWithoutEditionsInput, { nullable: true })
  @Type(() => WorkCreateWithoutEditionsInput)
  create?: InstanceType<typeof WorkCreateWithoutEditionsInput>;
  @Field(() => WorkCreateOrConnectWithoutEditionsInput, { nullable: true })
  @Type(() => WorkCreateOrConnectWithoutEditionsInput)
  connectOrCreate?: InstanceType<
    typeof WorkCreateOrConnectWithoutEditionsInput
  >;
  @Field(() => WorkWhereUniqueInput, { nullable: true })
  @Type(() => WorkWhereUniqueInput)
  connect?: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
}

@InputType()
export class WorkCreateOrConnectWithoutAuthorsInput {
  @Field(() => WorkWhereUniqueInput, { nullable: false })
  @Type(() => WorkWhereUniqueInput)
  where!: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
  @Field(() => WorkCreateWithoutAuthorsInput, { nullable: false })
  @Type(() => WorkCreateWithoutAuthorsInput)
  create!: InstanceType<typeof WorkCreateWithoutAuthorsInput>;
}

@InputType()
export class WorkCreateOrConnectWithoutEditionsInput {
  @Field(() => WorkWhereUniqueInput, { nullable: false })
  @Type(() => WorkWhereUniqueInput)
  where!: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
  @Field(() => WorkCreateWithoutEditionsInput, { nullable: false })
  @Type(() => WorkCreateWithoutEditionsInput)
  create!: InstanceType<typeof WorkCreateWithoutEditionsInput>;
}

@InputType()
export class WorkCreateWithoutAuthorsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
  @Field(() => BookCreateNestedManyWithoutWorkInput, { nullable: true })
  editions?: InstanceType<typeof BookCreateNestedManyWithoutWorkInput>;
}

@InputType()
export class WorkCreateWithoutEditionsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
  @Field(() => AuthorCreateNestedManyWithoutWorksInput, { nullable: true })
  authors?: InstanceType<typeof AuthorCreateNestedManyWithoutWorksInput>;
}

@InputType()
export class WorkCreateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
  @Field(() => AuthorCreateNestedManyWithoutWorksInput, { nullable: true })
  authors?: InstanceType<typeof AuthorCreateNestedManyWithoutWorksInput>;
  @Field(() => BookCreateNestedManyWithoutWorkInput, { nullable: true })
  editions?: InstanceType<typeof BookCreateNestedManyWithoutWorkInput>;
}

@InputType()
export class WorkCreatecategoriesInput {
  @Field(() => [String], { nullable: false })
  set!: Array<string>;
}

@ArgsType()
export class WorkGroupByArgs {
  @Field(() => WorkWhereInput, { nullable: true })
  @Type(() => WorkWhereInput)
  @ValidateNested()
  where?: InstanceType<typeof WorkWhereInput>;
  @Field(() => [WorkOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<WorkOrderByWithAggregationInput>;
  @Field(() => [WorkScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof WorkScalarFieldEnum>;
  @Field(() => WorkScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof WorkScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => WorkCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof WorkCountAggregateInput>;
  @Field(() => WorkAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof WorkAvgAggregateInput>;
  @Field(() => WorkSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof WorkSumAggregateInput>;
  @Field(() => WorkMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof WorkMinAggregateInput>;
  @Field(() => WorkMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof WorkMaxAggregateInput>;
}

@ObjectType()
export class WorkGroupBy {
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  id!: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
  @Field(() => WorkCountAggregate, { nullable: true })
  _count?: InstanceType<typeof WorkCountAggregate>;
  @Field(() => WorkAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof WorkAvgAggregate>;
  @Field(() => WorkSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof WorkSumAggregate>;
  @Field(() => WorkMinAggregate, { nullable: true })
  _min?: InstanceType<typeof WorkMinAggregate>;
  @Field(() => WorkMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof WorkMaxAggregate>;
}

@InputType()
export class WorkListRelationFilter {
  @Field(() => WorkWhereInput, { nullable: true })
  every?: InstanceType<typeof WorkWhereInput>;
  @Field(() => WorkWhereInput, { nullable: true })
  some?: InstanceType<typeof WorkWhereInput>;
  @Field(() => WorkWhereInput, { nullable: true })
  none?: InstanceType<typeof WorkWhereInput>;
}

@InputType()
export class WorkMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  description?: true;
  @Field(() => Boolean, { nullable: true })
  mainCategory?: true;
  @Field(() => Boolean, { nullable: true })
  averageRating?: true;
  @Field(() => Boolean, { nullable: true })
  ratingsCount?: true;
  @Field(() => Boolean, { nullable: true })
  mainEditionId?: true;
}

@ObjectType()
export class WorkMaxAggregate {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
}

@InputType()
export class WorkMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  mainCategory?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  averageRating?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  ratingsCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  mainEditionId?: keyof typeof SortOrder;
}

@InputType()
export class WorkMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
  @Field(() => Boolean, { nullable: true })
  title?: true;
  @Field(() => Boolean, { nullable: true })
  description?: true;
  @Field(() => Boolean, { nullable: true })
  mainCategory?: true;
  @Field(() => Boolean, { nullable: true })
  averageRating?: true;
  @Field(() => Boolean, { nullable: true })
  ratingsCount?: true;
  @Field(() => Boolean, { nullable: true })
  mainEditionId?: true;
}

@ObjectType()
export class WorkMinAggregate {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
}

@InputType()
export class WorkMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  mainCategory?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  averageRating?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  ratingsCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  mainEditionId?: keyof typeof SortOrder;
}

@InputType()
export class WorkOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class WorkOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  description?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  categories?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  mainCategory?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  averageRating?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  ratingsCount?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  mainEditionId?: InstanceType<typeof SortOrderInput>;
  @Field(() => WorkCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof WorkCountOrderByAggregateInput>;
  @Field(() => WorkAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof WorkAvgOrderByAggregateInput>;
  @Field(() => WorkMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof WorkMaxOrderByAggregateInput>;
  @Field(() => WorkMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof WorkMinOrderByAggregateInput>;
  @Field(() => WorkSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof WorkSumOrderByAggregateInput>;
}

@InputType()
export class WorkOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  description?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  categories?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  mainCategory?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  averageRating?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  ratingsCount?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  mainEditionId?: InstanceType<typeof SortOrderInput>;
  @Field(() => AuthorOrderByRelationAggregateInput, { nullable: true })
  authors?: InstanceType<typeof AuthorOrderByRelationAggregateInput>;
  @Field(() => BookOrderByRelationAggregateInput, { nullable: true })
  editions?: InstanceType<typeof BookOrderByRelationAggregateInput>;
}

@InputType()
export class WorkRelationFilter {
  @Field(() => WorkWhereInput, { nullable: true })
  is?: InstanceType<typeof WorkWhereInput>;
  @Field(() => WorkWhereInput, { nullable: true })
  isNot?: InstanceType<typeof WorkWhereInput>;
}

@InputType()
export class WorkScalarWhereWithAggregatesInput {
  @Field(() => [WorkScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<WorkScalarWhereWithAggregatesInput>;
  @Field(() => [WorkScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<WorkScalarWhereWithAggregatesInput>;
  @Field(() => [WorkScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<WorkScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  description?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringListFilter, { nullable: true })
  categories?: InstanceType<typeof StringListFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  mainCategory?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  averageRating?: InstanceType<typeof FloatWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  ratingsCount?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  mainEditionId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class WorkScalarWhereInput {
  @Field(() => [WorkScalarWhereInput], { nullable: true })
  AND?: Array<WorkScalarWhereInput>;
  @Field(() => [WorkScalarWhereInput], { nullable: true })
  OR?: Array<WorkScalarWhereInput>;
  @Field(() => [WorkScalarWhereInput], { nullable: true })
  NOT?: Array<WorkScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  title?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  description?: InstanceType<typeof StringFilter>;
  @Field(() => StringListFilter, { nullable: true })
  categories?: InstanceType<typeof StringListFilter>;
  @Field(() => StringFilter, { nullable: true })
  mainCategory?: InstanceType<typeof StringFilter>;
  @Field(() => FloatFilter, { nullable: true })
  averageRating?: InstanceType<typeof FloatFilter>;
  @Field(() => IntFilter, { nullable: true })
  ratingsCount?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  mainEditionId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class WorkSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  averageRating?: true;
  @Field(() => Boolean, { nullable: true })
  ratingsCount?: true;
  @Field(() => Boolean, { nullable: true })
  mainEditionId?: true;
}

@ObjectType()
export class WorkSumAggregate {
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
}

@InputType()
export class WorkSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  averageRating?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  ratingsCount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  mainEditionId?: keyof typeof SortOrder;
}

@InputType()
export class WorkUncheckedCreateNestedManyWithoutAuthorsInput {
  @Field(() => [WorkCreateWithoutAuthorsInput], { nullable: true })
  @Type(() => WorkCreateWithoutAuthorsInput)
  create?: Array<WorkCreateWithoutAuthorsInput>;
  @Field(() => [WorkCreateOrConnectWithoutAuthorsInput], { nullable: true })
  @Type(() => WorkCreateOrConnectWithoutAuthorsInput)
  connectOrCreate?: Array<WorkCreateOrConnectWithoutAuthorsInput>;
  @Field(() => [WorkWhereUniqueInput], { nullable: true })
  @Type(() => WorkWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<WorkWhereUniqueInput, 'id'>>;
}

@InputType()
export class WorkUncheckedCreateWithoutAuthorsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
  @Field(() => BookUncheckedCreateNestedManyWithoutWorkInput, {
    nullable: true,
  })
  editions?: InstanceType<typeof BookUncheckedCreateNestedManyWithoutWorkInput>;
}

@InputType()
export class WorkUncheckedCreateWithoutEditionsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
  @Field(() => AuthorUncheckedCreateNestedManyWithoutWorksInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedCreateNestedManyWithoutWorksInput
  >;
}

@InputType()
export class WorkUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: false })
  @Validator.IsString()
  title!: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
  @Field(() => AuthorUncheckedCreateNestedManyWithoutWorksInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedCreateNestedManyWithoutWorksInput
  >;
  @Field(() => BookUncheckedCreateNestedManyWithoutWorkInput, {
    nullable: true,
  })
  editions?: InstanceType<typeof BookUncheckedCreateNestedManyWithoutWorkInput>;
}

@InputType()
export class WorkUncheckedUpdateManyWithoutAuthorsNestedInput {
  @Field(() => [WorkCreateWithoutAuthorsInput], { nullable: true })
  @Type(() => WorkCreateWithoutAuthorsInput)
  create?: Array<WorkCreateWithoutAuthorsInput>;
  @Field(() => [WorkCreateOrConnectWithoutAuthorsInput], { nullable: true })
  @Type(() => WorkCreateOrConnectWithoutAuthorsInput)
  connectOrCreate?: Array<WorkCreateOrConnectWithoutAuthorsInput>;
  @Field(() => [WorkUpsertWithWhereUniqueWithoutAuthorsInput], {
    nullable: true,
  })
  @Type(() => WorkUpsertWithWhereUniqueWithoutAuthorsInput)
  upsert?: Array<WorkUpsertWithWhereUniqueWithoutAuthorsInput>;
  @Field(() => [WorkWhereUniqueInput], { nullable: true })
  @Type(() => WorkWhereUniqueInput)
  set?: Array<Prisma.AtLeast<WorkWhereUniqueInput, 'id'>>;
  @Field(() => [WorkWhereUniqueInput], { nullable: true })
  @Type(() => WorkWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<WorkWhereUniqueInput, 'id'>>;
  @Field(() => [WorkWhereUniqueInput], { nullable: true })
  @Type(() => WorkWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<WorkWhereUniqueInput, 'id'>>;
  @Field(() => [WorkWhereUniqueInput], { nullable: true })
  @Type(() => WorkWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<WorkWhereUniqueInput, 'id'>>;
  @Field(() => [WorkUpdateWithWhereUniqueWithoutAuthorsInput], {
    nullable: true,
  })
  @Type(() => WorkUpdateWithWhereUniqueWithoutAuthorsInput)
  update?: Array<WorkUpdateWithWhereUniqueWithoutAuthorsInput>;
  @Field(() => [WorkUpdateManyWithWhereWithoutAuthorsInput], { nullable: true })
  @Type(() => WorkUpdateManyWithWhereWithoutAuthorsInput)
  updateMany?: Array<WorkUpdateManyWithWhereWithoutAuthorsInput>;
  @Field(() => [WorkScalarWhereInput], { nullable: true })
  @Type(() => WorkScalarWhereInput)
  deleteMany?: Array<WorkScalarWhereInput>;
}

@InputType()
export class WorkUncheckedUpdateManyWithoutAuthorsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
}

@InputType()
export class WorkUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
}

@InputType()
export class WorkUncheckedUpdateWithoutAuthorsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
  @Field(() => BookUncheckedUpdateManyWithoutWorkNestedInput, {
    nullable: true,
  })
  editions?: InstanceType<typeof BookUncheckedUpdateManyWithoutWorkNestedInput>;
}

@InputType()
export class WorkUncheckedUpdateWithoutEditionsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
  @Field(() => AuthorUncheckedUpdateManyWithoutWorksNestedInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedUpdateManyWithoutWorksNestedInput
  >;
}

@InputType()
export class WorkUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
  @Field(() => AuthorUncheckedUpdateManyWithoutWorksNestedInput, {
    nullable: true,
  })
  authors?: InstanceType<
    typeof AuthorUncheckedUpdateManyWithoutWorksNestedInput
  >;
  @Field(() => BookUncheckedUpdateManyWithoutWorkNestedInput, {
    nullable: true,
  })
  editions?: InstanceType<typeof BookUncheckedUpdateManyWithoutWorkNestedInput>;
}

@InputType()
export class WorkUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
}

@InputType()
export class WorkUpdateManyWithWhereWithoutAuthorsInput {
  @Field(() => WorkScalarWhereInput, { nullable: false })
  @Type(() => WorkScalarWhereInput)
  where!: InstanceType<typeof WorkScalarWhereInput>;
  @Field(() => WorkUpdateManyMutationInput, { nullable: false })
  @Type(() => WorkUpdateManyMutationInput)
  data!: InstanceType<typeof WorkUpdateManyMutationInput>;
}

@InputType()
export class WorkUpdateManyWithoutAuthorsNestedInput {
  @Field(() => [WorkCreateWithoutAuthorsInput], { nullable: true })
  @Type(() => WorkCreateWithoutAuthorsInput)
  create?: Array<WorkCreateWithoutAuthorsInput>;
  @Field(() => [WorkCreateOrConnectWithoutAuthorsInput], { nullable: true })
  @Type(() => WorkCreateOrConnectWithoutAuthorsInput)
  connectOrCreate?: Array<WorkCreateOrConnectWithoutAuthorsInput>;
  @Field(() => [WorkUpsertWithWhereUniqueWithoutAuthorsInput], {
    nullable: true,
  })
  @Type(() => WorkUpsertWithWhereUniqueWithoutAuthorsInput)
  upsert?: Array<WorkUpsertWithWhereUniqueWithoutAuthorsInput>;
  @Field(() => [WorkWhereUniqueInput], { nullable: true })
  @Type(() => WorkWhereUniqueInput)
  set?: Array<Prisma.AtLeast<WorkWhereUniqueInput, 'id'>>;
  @Field(() => [WorkWhereUniqueInput], { nullable: true })
  @Type(() => WorkWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<WorkWhereUniqueInput, 'id'>>;
  @Field(() => [WorkWhereUniqueInput], { nullable: true })
  @Type(() => WorkWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<WorkWhereUniqueInput, 'id'>>;
  @Field(() => [WorkWhereUniqueInput], { nullable: true })
  @Type(() => WorkWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<WorkWhereUniqueInput, 'id'>>;
  @Field(() => [WorkUpdateWithWhereUniqueWithoutAuthorsInput], {
    nullable: true,
  })
  @Type(() => WorkUpdateWithWhereUniqueWithoutAuthorsInput)
  update?: Array<WorkUpdateWithWhereUniqueWithoutAuthorsInput>;
  @Field(() => [WorkUpdateManyWithWhereWithoutAuthorsInput], { nullable: true })
  @Type(() => WorkUpdateManyWithWhereWithoutAuthorsInput)
  updateMany?: Array<WorkUpdateManyWithWhereWithoutAuthorsInput>;
  @Field(() => [WorkScalarWhereInput], { nullable: true })
  @Type(() => WorkScalarWhereInput)
  deleteMany?: Array<WorkScalarWhereInput>;
}

@InputType()
export class WorkUpdateOneWithoutEditionsNestedInput {
  @Field(() => WorkCreateWithoutEditionsInput, { nullable: true })
  @Type(() => WorkCreateWithoutEditionsInput)
  create?: InstanceType<typeof WorkCreateWithoutEditionsInput>;
  @Field(() => WorkCreateOrConnectWithoutEditionsInput, { nullable: true })
  @Type(() => WorkCreateOrConnectWithoutEditionsInput)
  connectOrCreate?: InstanceType<
    typeof WorkCreateOrConnectWithoutEditionsInput
  >;
  @Field(() => WorkUpsertWithoutEditionsInput, { nullable: true })
  @Type(() => WorkUpsertWithoutEditionsInput)
  upsert?: InstanceType<typeof WorkUpsertWithoutEditionsInput>;
  @Field(() => WorkWhereInput, { nullable: true })
  @Type(() => WorkWhereInput)
  disconnect?: InstanceType<typeof WorkWhereInput>;
  @Field(() => WorkWhereInput, { nullable: true })
  @Type(() => WorkWhereInput)
  delete?: InstanceType<typeof WorkWhereInput>;
  @Field(() => WorkWhereUniqueInput, { nullable: true })
  @Type(() => WorkWhereUniqueInput)
  connect?: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
  @Field(() => WorkUpdateToOneWithWhereWithoutEditionsInput, { nullable: true })
  @Type(() => WorkUpdateToOneWithWhereWithoutEditionsInput)
  update?: InstanceType<typeof WorkUpdateToOneWithWhereWithoutEditionsInput>;
}

@InputType()
export class WorkUpdateToOneWithWhereWithoutEditionsInput {
  @Field(() => WorkWhereInput, { nullable: true })
  @Type(() => WorkWhereInput)
  where?: InstanceType<typeof WorkWhereInput>;
  @Field(() => WorkUpdateWithoutEditionsInput, { nullable: false })
  @Type(() => WorkUpdateWithoutEditionsInput)
  data!: InstanceType<typeof WorkUpdateWithoutEditionsInput>;
}

@InputType()
export class WorkUpdateWithWhereUniqueWithoutAuthorsInput {
  @Field(() => WorkWhereUniqueInput, { nullable: false })
  @Type(() => WorkWhereUniqueInput)
  where!: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
  @Field(() => WorkUpdateWithoutAuthorsInput, { nullable: false })
  @Type(() => WorkUpdateWithoutAuthorsInput)
  data!: InstanceType<typeof WorkUpdateWithoutAuthorsInput>;
}

@InputType()
export class WorkUpdateWithoutAuthorsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
  @Field(() => BookUpdateManyWithoutWorkNestedInput, { nullable: true })
  editions?: InstanceType<typeof BookUpdateManyWithoutWorkNestedInput>;
}

@InputType()
export class WorkUpdateWithoutEditionsInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
  @Field(() => AuthorUpdateManyWithoutWorksNestedInput, { nullable: true })
  authors?: InstanceType<typeof AuthorUpdateManyWithoutWorksNestedInput>;
}

@InputType()
export class WorkUpdateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  title?: string;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  description?: string;
  @Field(() => [String], { nullable: true })
  @Validator.IsString()
  categories?: Array<string>;
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  mainCategory?: string;
  @Field(() => Float, { nullable: true })
  averageRating?: number;
  @Field(() => Int, { nullable: true })
  @Validator.IsInt()
  ratingsCount?: number;
  @Field(() => Int, { nullable: true })
  mainEditionId?: number;
  @Field(() => AuthorUpdateManyWithoutWorksNestedInput, { nullable: true })
  authors?: InstanceType<typeof AuthorUpdateManyWithoutWorksNestedInput>;
  @Field(() => BookUpdateManyWithoutWorkNestedInput, { nullable: true })
  editions?: InstanceType<typeof BookUpdateManyWithoutWorkNestedInput>;
}

@InputType()
export class WorkUpdatecategoriesInput {
  @Field(() => [String], { nullable: true })
  set?: Array<string>;
  @Field(() => [String], { nullable: true })
  push?: Array<string>;
}

@InputType()
export class WorkUpsertWithWhereUniqueWithoutAuthorsInput {
  @Field(() => WorkWhereUniqueInput, { nullable: false })
  @Type(() => WorkWhereUniqueInput)
  where!: Prisma.AtLeast<WorkWhereUniqueInput, 'id'>;
  @Field(() => WorkUpdateWithoutAuthorsInput, { nullable: false })
  @Type(() => WorkUpdateWithoutAuthorsInput)
  update!: InstanceType<typeof WorkUpdateWithoutAuthorsInput>;
  @Field(() => WorkCreateWithoutAuthorsInput, { nullable: false })
  @Type(() => WorkCreateWithoutAuthorsInput)
  create!: InstanceType<typeof WorkCreateWithoutAuthorsInput>;
}

@InputType()
export class WorkUpsertWithoutEditionsInput {
  @Field(() => WorkUpdateWithoutEditionsInput, { nullable: false })
  @Type(() => WorkUpdateWithoutEditionsInput)
  update!: InstanceType<typeof WorkUpdateWithoutEditionsInput>;
  @Field(() => WorkCreateWithoutEditionsInput, { nullable: false })
  @Type(() => WorkCreateWithoutEditionsInput)
  create!: InstanceType<typeof WorkCreateWithoutEditionsInput>;
  @Field(() => WorkWhereInput, { nullable: true })
  @Type(() => WorkWhereInput)
  where?: InstanceType<typeof WorkWhereInput>;
}

@InputType()
export class WorkWhereUniqueInput {
  @Field(() => String, { nullable: true })
  @Validator.IsString()
  id?: string;
  @Field(() => [WorkWhereInput], { nullable: true })
  AND?: Array<WorkWhereInput>;
  @Field(() => [WorkWhereInput], { nullable: true })
  OR?: Array<WorkWhereInput>;
  @Field(() => [WorkWhereInput], { nullable: true })
  NOT?: Array<WorkWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  title?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  description?: InstanceType<typeof StringFilter>;
  @Field(() => StringListFilter, { nullable: true })
  categories?: InstanceType<typeof StringListFilter>;
  @Field(() => StringFilter, { nullable: true })
  mainCategory?: InstanceType<typeof StringFilter>;
  @Field(() => FloatFilter, { nullable: true })
  averageRating?: InstanceType<typeof FloatFilter>;
  @Field(() => IntFilter, { nullable: true })
  ratingsCount?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  mainEditionId?: InstanceType<typeof IntFilter>;
  @Field(() => AuthorListRelationFilter, { nullable: true })
  authors?: InstanceType<typeof AuthorListRelationFilter>;
  @Field(() => BookListRelationFilter, { nullable: true })
  editions?: InstanceType<typeof BookListRelationFilter>;
}

@InputType()
export class WorkWhereInput {
  @Field(() => [WorkWhereInput], { nullable: true })
  AND?: Array<WorkWhereInput>;
  @Field(() => [WorkWhereInput], { nullable: true })
  OR?: Array<WorkWhereInput>;
  @Field(() => [WorkWhereInput], { nullable: true })
  NOT?: Array<WorkWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  title?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  description?: InstanceType<typeof StringFilter>;
  @Field(() => StringListFilter, { nullable: true })
  categories?: InstanceType<typeof StringListFilter>;
  @Field(() => StringFilter, { nullable: true })
  mainCategory?: InstanceType<typeof StringFilter>;
  @Field(() => FloatFilter, { nullable: true })
  averageRating?: InstanceType<typeof FloatFilter>;
  @Field(() => IntFilter, { nullable: true })
  ratingsCount?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  mainEditionId?: InstanceType<typeof IntFilter>;
  @Field(() => AuthorListRelationFilter, { nullable: true })
  authors?: InstanceType<typeof AuthorListRelationFilter>;
  @Field(() => BookListRelationFilter, { nullable: true })
  editions?: InstanceType<typeof BookListRelationFilter>;
}

@ObjectType()
export class Work {
  @Field(() => ID, { nullable: false })
  id!: string;
  @Field(() => String, { nullable: false })
  title!: string;
  @Field(() => String, { nullable: true })
  description!: string | null;
  @Field(() => [String], { nullable: true })
  categories!: Array<string>;
  @Field(() => String, { nullable: true })
  mainCategory!: string | null;
  @Field(() => Float, { nullable: true })
  averageRating!: number | null;
  @Field(() => Int, { nullable: true })
  ratingsCount!: number | null;
  @Field(() => Int, { nullable: true })
  mainEditionId!: number | null;
  @Field(() => [Author], { nullable: true })
  authors?: Array<Author>;
  @Field(() => [Book], { nullable: true })
  editions?: Array<Book>;
  @Field(() => WorkCount, { nullable: false })
  _count?: InstanceType<typeof WorkCount>;
}
