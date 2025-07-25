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

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken?: Maybe<Scalars['String']['output']>;
  expiresIn?: Maybe<Scalars['Float']['output']>;
  isNewUser?: Maybe<Scalars['Boolean']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type Book = {
  __typename?: 'Book';
  _count: BookCount;
  authors?: Maybe<Array<Scalars['String']['output']>>;
  covers?: Maybe<Array<Cover>>;
  id: Scalars['ID']['output'];
  identifiers?: Maybe<Array<Identifier>>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  ratings?: Maybe<Array<Rating>>;
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
  covers: Scalars['Int']['output'];
  identifiers: Scalars['Int']['output'];
  ratings: Scalars['Int']['output'];
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

export type BookCreateNestedOneWithoutUserBookInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutUserBookInput>;
  create?: InputMaybe<BookCreateWithoutUserBookInput>;
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

export type BookCreateOrConnectWithoutUserBookInput = {
  create: BookCreateWithoutUserBookInput;
  where: BookWhereUniqueInput;
};

export type BookCreateWithoutCoversInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
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

export type BookCreateWithoutIdentifiersInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverCreateNestedManyWithoutBookInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  ratings?: InputMaybe<RatingCreateNestedManyWithoutBookInput>;
  slug: Scalars['String']['input'];
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutBookInput>;
  yearPublished?: InputMaybe<Scalars['String']['input']>;
};

export type BookCreateWithoutRatingsInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverCreateNestedManyWithoutBookInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<IdentifierCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutBookInput>;
  yearPublished?: InputMaybe<Scalars['String']['input']>;
};

export type BookCreateWithoutUserBookInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverCreateNestedManyWithoutBookInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<IdentifierCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  ratings?: InputMaybe<RatingCreateNestedManyWithoutBookInput>;
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
  authors?: InputMaybe<SortOrder>;
  covers?: InputMaybe<CoverOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  identifiers?: InputMaybe<IdentifierOrderByRelationAggregateInput>;
  pageCount?: InputMaybe<SortOrderInput>;
  ratings?: InputMaybe<RatingOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  subtitle?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  userBook?: InputMaybe<UserBookOrderByWithRelationInput>;
  yearPublished?: InputMaybe<SortOrderInput>;
};

export type BookScalarRelationFilter = {
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

export type BookUpdateToOneWithWhereWithoutUserBookInput = {
  data: BookUpdateWithoutUserBookInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateWithoutUserBookInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverUpdateManyWithoutBookNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<IdentifierUpdateManyWithoutBookNestedInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  ratings?: InputMaybe<RatingUpdateManyWithoutBookNestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  yearPublished?: InputMaybe<Scalars['String']['input']>;
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
  authors?: InputMaybe<StringListFilter>;
  covers?: InputMaybe<CoverListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  identifiers?: InputMaybe<IdentifierListRelationFilter>;
  pageCount?: InputMaybe<IntFilter>;
  ratings?: InputMaybe<RatingListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookScalarRelationFilter>;
  yearPublished?: InputMaybe<StringFilter>;
};

export type BookWhereUniqueInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  authors?: InputMaybe<StringListFilter>;
  covers?: InputMaybe<CoverListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<IdentifierListRelationFilter>;
  pageCount?: InputMaybe<IntFilter>;
  ratings?: InputMaybe<RatingListRelationFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookScalarRelationFilter>;
  yearPublished?: InputMaybe<StringFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BoolFilter>;
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
  book?: InputMaybe<BookScalarRelationFilter>;
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
  book?: InputMaybe<BookScalarRelationFilter>;
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

export type HealthCheck = {
  __typename?: 'HealthCheck';
  message: Scalars['String']['output'];
  status: Scalars['String']['output'];
  timestamp: Scalars['String']['output'];
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
  book?: InputMaybe<BookScalarRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  source?: InputMaybe<EnumSourceFilter>;
  sourceId?: InputMaybe<StringFilter>;
};

export type IdentifierWhereUniqueInput = {
  AND?: InputMaybe<Array<IdentifierWhereInput>>;
  NOT?: InputMaybe<Array<IdentifierWhereInput>>;
  OR?: InputMaybe<Array<IdentifierWhereInput>>;
  book?: InputMaybe<BookScalarRelationFilter>;
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

export type Mutation = {
  __typename?: 'Mutation';
  addBookToShelf: UserBook;
  addIdentifierToBook: Book;
  createIdentifiers: Array<Identifier>;
  createRead: Read;
  createReadingSession: ReadingSession;
  createShelf: Shelf;
  createUserBook: UserBook;
  deleteShelf: Shelf;
  forgotPassword: Scalars['Boolean']['output'];
  importUserBooks: Scalars['Boolean']['output'];
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  refreshAuth: RefreshResponse;
  register: User;
  removeBookFromShelf: Scalars['Boolean']['output'];
  removeReadingSession: Scalars['Boolean']['output'];
  removeUserBook: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  sendEmailCode: Scalars['Boolean']['output'];
  updateEmail: AuthResponse;
  updatePassword: User;
  updateReadDate: ReadDate;
  updateReadingProgress: ReadingProgress;
  updateReadingSession: ReadingSession;
  updateShelf: Shelf;
  updateUser: User;
  updateUserBook: UserBook;
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


export type MutationCreateReadArgs = {
  capacity: Scalars['Int']['input'];
  userBookId: Scalars['String']['input'];
};


export type MutationCreateReadingSessionArgs = {
  endPage: Scalars['Int']['input'];
  readId: Scalars['String']['input'];
  startPage: Scalars['Int']['input'];
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


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationImportUserBooksArgs = {
  content: Scalars['String']['input'];
  favoritesShelf?: InputMaybe<Scalars['String']['input']>;
  ownedShelf?: InputMaybe<Scalars['String']['input']>;
  shelves?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationLoginArgs = {
  logInInput: LogInInput;
};


export type MutationLogoutArgs = {
  id: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationRemoveBookFromShelfArgs = {
  shelf: Scalars['String']['input'];
  where: UserBookWhereUniqueInput;
};


export type MutationRemoveReadingSessionArgs = {
  sessionId: Scalars['String']['input'];
};


export type MutationRemoveUserBookArgs = {
  where: UserBookWhereUniqueInput;
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationSendEmailCodeArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateEmailArgs = {
  data: UpdateEmailInput;
};


export type MutationUpdatePasswordArgs = {
  data: UpdatePasswordInput;
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


export type MutationUpdateReadingSessionArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
  endPage?: InputMaybe<Scalars['Int']['input']>;
  sessionId: Scalars['String']['input'];
  startPage?: InputMaybe<Scalars['Int']['input']>;
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

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

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
  book?: Maybe<Book>;
  bookCountsByUserId: BookCountsResponse;
  booksByShelf?: Maybe<Shelf>;
  countUserBooks: Scalars['Int']['output'];
  findBookByIdentifier?: Maybe<Book>;
  getBookByIdentifiers: Array<Identifier>;
  getCurrentlyReadingBooksWithLatestReads: Array<UserBook>;
  getMyBookShelves?: Maybe<Array<UserBookShelves>>;
  getUserBooks: UserBooksResponse;
  healthCheck: HealthCheck;
  readDates: Array<ReadDate>;
  readingSessions: Array<ReadingSession>;
  reads: Array<Read>;
  searchMyLibrary: Array<Book>;
  shelves?: Maybe<Array<Shelf>>;
  user?: Maybe<User>;
  userBook?: Maybe<UserBook>;
  userLibraryGoogleIds: Array<Scalars['String']['output']>;
};


export type QueryBookArgs = {
  where: BookWhereUniqueInput;
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


export type QueryReadingSessionsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  orderBy?: InputMaybe<ReadingSessionOrderByWithRelationInput>;
  where?: InputMaybe<ReadingSessionWhereInput>;
};


export type QueryReadsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadOrderByWithRelationInput>;
  where?: InputMaybe<ReadWhereInput>;
};


export type QuerySearchMyLibraryArgs = {
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
  book?: InputMaybe<BookScalarRelationFilter>;
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
  book?: InputMaybe<BookScalarRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  count?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxScore?: InputMaybe<FloatFilter>;
  score?: InputMaybe<FloatFilter>;
  source?: InputMaybe<EnumSourceFilter>;
};

export type Read = {
  __typename?: 'Read';
  UserBook: UserBook;
  _count: ReadCount;
  capacity: Scalars['Int']['output'];
  finishedDate?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['ID']['output'];
  readingSessions?: Maybe<Array<ReadingSession>>;
  startDate: Scalars['Timestamp']['output'];
  userBookId: Scalars['String']['output'];
};

export type ReadAvgAggregate = {
  __typename?: 'ReadAvgAggregate';
  capacity?: Maybe<Scalars['Float']['output']>;
};

export type ReadCount = {
  __typename?: 'ReadCount';
  readingSessions: Scalars['Int']['output'];
};

export type ReadCountAggregate = {
  __typename?: 'ReadCountAggregate';
  _all: Scalars['Int']['output'];
  capacity: Scalars['Int']['output'];
  finishedDate: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  startDate: Scalars['Int']['output'];
  userBookId: Scalars['Int']['output'];
};

export type ReadCreateManyUserBookInput = {
  capacity: Scalars['Int']['input'];
  finishedDate?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ReadCreateManyUserBookInputEnvelope = {
  data: Array<ReadCreateManyUserBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReadCreateNestedManyWithoutUserBookInput = {
  connect?: InputMaybe<Array<ReadWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReadCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<ReadCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<ReadCreateManyUserBookInputEnvelope>;
};

export type ReadCreateOrConnectWithoutUserBookInput = {
  create: ReadCreateWithoutUserBookInput;
  where: ReadWhereUniqueInput;
};

export type ReadCreateWithoutUserBookInput = {
  capacity: Scalars['Int']['input'];
  finishedDate?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  readingSessions?: InputMaybe<ReadingSessionCreateNestedManyWithoutReadInput>;
  startDate?: InputMaybe<Scalars['Timestamp']['input']>;
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

export type ReadDateScalarRelationFilter = {
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
  readingProgress?: InputMaybe<ReadingProgressScalarRelationFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  userBook?: InputMaybe<UserBookScalarRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type ReadDateWhereUniqueInput = {
  AND?: InputMaybe<Array<ReadDateWhereInput>>;
  NOT?: InputMaybe<Array<ReadDateWhereInput>>;
  OR?: InputMaybe<Array<ReadDateWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  finishedDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  readingProgress?: InputMaybe<ReadingProgressScalarRelationFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  userBook?: InputMaybe<UserBookScalarRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type ReadListRelationFilter = {
  every?: InputMaybe<ReadWhereInput>;
  none?: InputMaybe<ReadWhereInput>;
  some?: InputMaybe<ReadWhereInput>;
};

export type ReadMaxAggregate = {
  __typename?: 'ReadMaxAggregate';
  capacity?: Maybe<Scalars['Int']['output']>;
  finishedDate?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Timestamp']['output']>;
  userBookId?: Maybe<Scalars['String']['output']>;
};

export type ReadMinAggregate = {
  __typename?: 'ReadMinAggregate';
  capacity?: Maybe<Scalars['Int']['output']>;
  finishedDate?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Timestamp']['output']>;
  userBookId?: Maybe<Scalars['String']['output']>;
};

export type ReadOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReadOrderByWithRelationInput = {
  UserBook?: InputMaybe<UserBookOrderByWithRelationInput>;
  capacity?: InputMaybe<SortOrder>;
  finishedDate?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  readingSessions?: InputMaybe<ReadingSessionOrderByRelationAggregateInput>;
  startDate?: InputMaybe<SortOrder>;
  userBookId?: InputMaybe<SortOrder>;
};

export type ReadScalarRelationFilter = {
  is?: InputMaybe<ReadWhereInput>;
  isNot?: InputMaybe<ReadWhereInput>;
};

export type ReadScalarWhereInput = {
  AND?: InputMaybe<Array<ReadScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReadScalarWhereInput>>;
  OR?: InputMaybe<Array<ReadScalarWhereInput>>;
  capacity?: InputMaybe<IntFilter>;
  finishedDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type ReadSumAggregate = {
  __typename?: 'ReadSumAggregate';
  capacity?: Maybe<Scalars['Int']['output']>;
};

export type ReadUpdateManyMutationInput = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  finishedDate?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ReadUpdateManyWithWhereWithoutUserBookInput = {
  data: ReadUpdateManyMutationInput;
  where: ReadScalarWhereInput;
};

export type ReadUpdateManyWithoutUserBookNestedInput = {
  connect?: InputMaybe<Array<ReadWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReadCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<ReadCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<ReadCreateManyUserBookInputEnvelope>;
  delete?: InputMaybe<Array<ReadWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReadScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReadWhereUniqueInput>>;
  set?: InputMaybe<Array<ReadWhereUniqueInput>>;
  update?: InputMaybe<Array<ReadUpdateWithWhereUniqueWithoutUserBookInput>>;
  updateMany?: InputMaybe<Array<ReadUpdateManyWithWhereWithoutUserBookInput>>;
  upsert?: InputMaybe<Array<ReadUpsertWithWhereUniqueWithoutUserBookInput>>;
};

export type ReadUpdateWithWhereUniqueWithoutUserBookInput = {
  data: ReadUpdateWithoutUserBookInput;
  where: ReadWhereUniqueInput;
};

export type ReadUpdateWithoutUserBookInput = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  finishedDate?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  readingSessions?: InputMaybe<ReadingSessionUpdateManyWithoutReadNestedInput>;
  startDate?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ReadUpsertWithWhereUniqueWithoutUserBookInput = {
  create: ReadCreateWithoutUserBookInput;
  update: ReadUpdateWithoutUserBookInput;
  where: ReadWhereUniqueInput;
};

export type ReadWhereInput = {
  AND?: InputMaybe<Array<ReadWhereInput>>;
  NOT?: InputMaybe<Array<ReadWhereInput>>;
  OR?: InputMaybe<Array<ReadWhereInput>>;
  UserBook?: InputMaybe<UserBookScalarRelationFilter>;
  capacity?: InputMaybe<IntFilter>;
  finishedDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  readingSessions?: InputMaybe<ReadingSessionListRelationFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type ReadWhereUniqueInput = {
  AND?: InputMaybe<Array<ReadWhereInput>>;
  NOT?: InputMaybe<Array<ReadWhereInput>>;
  OR?: InputMaybe<Array<ReadWhereInput>>;
  UserBook?: InputMaybe<UserBookScalarRelationFilter>;
  capacity?: InputMaybe<IntFilter>;
  finishedDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  readingSessions?: InputMaybe<ReadingSessionListRelationFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
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

export type ReadingProgressScalarRelationFilter = {
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
  readDate?: InputMaybe<ReadDateScalarRelationFilter>;
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
  readDate?: InputMaybe<ReadDateScalarRelationFilter>;
  readDateId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumProgress_TypeFilter>;
};

export type ReadingSession = {
  __typename?: 'ReadingSession';
  createdAt: Scalars['Timestamp']['output'];
  endPage: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  read: Read;
  readId: Scalars['String']['output'];
  startPage: Scalars['Int']['output'];
};

export type ReadingSessionAvgAggregate = {
  __typename?: 'ReadingSessionAvgAggregate';
  endPage?: Maybe<Scalars['Float']['output']>;
  startPage?: Maybe<Scalars['Float']['output']>;
};

export type ReadingSessionCountAggregate = {
  __typename?: 'ReadingSessionCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  endPage: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  readId: Scalars['Int']['output'];
  startPage: Scalars['Int']['output'];
};

export type ReadingSessionCreateManyReadInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  endPage: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  startPage: Scalars['Int']['input'];
};

export type ReadingSessionCreateManyReadInputEnvelope = {
  data: Array<ReadingSessionCreateManyReadInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReadingSessionCreateNestedManyWithoutReadInput = {
  connect?: InputMaybe<Array<ReadingSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReadingSessionCreateOrConnectWithoutReadInput>>;
  create?: InputMaybe<Array<ReadingSessionCreateWithoutReadInput>>;
  createMany?: InputMaybe<ReadingSessionCreateManyReadInputEnvelope>;
};

export type ReadingSessionCreateOrConnectWithoutReadInput = {
  create: ReadingSessionCreateWithoutReadInput;
  where: ReadingSessionWhereUniqueInput;
};

export type ReadingSessionCreateWithoutReadInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  endPage: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  startPage: Scalars['Int']['input'];
};

export type ReadingSessionListRelationFilter = {
  every?: InputMaybe<ReadingSessionWhereInput>;
  none?: InputMaybe<ReadingSessionWhereInput>;
  some?: InputMaybe<ReadingSessionWhereInput>;
};

export type ReadingSessionMaxAggregate = {
  __typename?: 'ReadingSessionMaxAggregate';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  endPage?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  readId?: Maybe<Scalars['String']['output']>;
  startPage?: Maybe<Scalars['Int']['output']>;
};

export type ReadingSessionMinAggregate = {
  __typename?: 'ReadingSessionMinAggregate';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  endPage?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  readId?: Maybe<Scalars['String']['output']>;
  startPage?: Maybe<Scalars['Int']['output']>;
};

export type ReadingSessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReadingSessionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  endPage?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  read?: InputMaybe<ReadOrderByWithRelationInput>;
  readId?: InputMaybe<SortOrder>;
  startPage?: InputMaybe<SortOrder>;
};

export type ReadingSessionScalarWhereInput = {
  AND?: InputMaybe<Array<ReadingSessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReadingSessionScalarWhereInput>>;
  OR?: InputMaybe<Array<ReadingSessionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  endPage?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  readId?: InputMaybe<StringFilter>;
  startPage?: InputMaybe<IntFilter>;
};

export type ReadingSessionSumAggregate = {
  __typename?: 'ReadingSessionSumAggregate';
  endPage?: Maybe<Scalars['Int']['output']>;
  startPage?: Maybe<Scalars['Int']['output']>;
};

export type ReadingSessionUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  endPage?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  startPage?: InputMaybe<Scalars['Int']['input']>;
};

export type ReadingSessionUpdateManyWithWhereWithoutReadInput = {
  data: ReadingSessionUpdateManyMutationInput;
  where: ReadingSessionScalarWhereInput;
};

export type ReadingSessionUpdateManyWithoutReadNestedInput = {
  connect?: InputMaybe<Array<ReadingSessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReadingSessionCreateOrConnectWithoutReadInput>>;
  create?: InputMaybe<Array<ReadingSessionCreateWithoutReadInput>>;
  createMany?: InputMaybe<ReadingSessionCreateManyReadInputEnvelope>;
  delete?: InputMaybe<Array<ReadingSessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReadingSessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReadingSessionWhereUniqueInput>>;
  set?: InputMaybe<Array<ReadingSessionWhereUniqueInput>>;
  update?: InputMaybe<Array<ReadingSessionUpdateWithWhereUniqueWithoutReadInput>>;
  updateMany?: InputMaybe<Array<ReadingSessionUpdateManyWithWhereWithoutReadInput>>;
  upsert?: InputMaybe<Array<ReadingSessionUpsertWithWhereUniqueWithoutReadInput>>;
};

export type ReadingSessionUpdateWithWhereUniqueWithoutReadInput = {
  data: ReadingSessionUpdateWithoutReadInput;
  where: ReadingSessionWhereUniqueInput;
};

export type ReadingSessionUpdateWithoutReadInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  endPage?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  startPage?: InputMaybe<Scalars['Int']['input']>;
};

export type ReadingSessionUpsertWithWhereUniqueWithoutReadInput = {
  create: ReadingSessionCreateWithoutReadInput;
  update: ReadingSessionUpdateWithoutReadInput;
  where: ReadingSessionWhereUniqueInput;
};

export type ReadingSessionWhereInput = {
  AND?: InputMaybe<Array<ReadingSessionWhereInput>>;
  NOT?: InputMaybe<Array<ReadingSessionWhereInput>>;
  OR?: InputMaybe<Array<ReadingSessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  endPage?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  read?: InputMaybe<ReadScalarRelationFilter>;
  readId?: InputMaybe<StringFilter>;
  startPage?: InputMaybe<IntFilter>;
};

export type ReadingSessionWhereUniqueInput = {
  AND?: InputMaybe<Array<ReadingSessionWhereInput>>;
  NOT?: InputMaybe<Array<ReadingSessionWhereInput>>;
  OR?: InputMaybe<Array<ReadingSessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  endPage?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  read?: InputMaybe<ReadScalarRelationFilter>;
  readId?: InputMaybe<StringFilter>;
  startPage?: InputMaybe<IntFilter>;
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

export type ShelfScalarRelationFilter = {
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
  user?: InputMaybe<UserScalarRelationFilter>;
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
  user?: InputMaybe<UserScalarRelationFilter>;
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

export type UpdatePasswordInput = {
  newPassword?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  avatarImage?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  avatarImage?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Timestamp']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passwordUpdatedAt: Scalars['Timestamp']['output'];
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
  dateAdded: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  read?: Maybe<Array<Read>>;
  readDates?: Maybe<Array<ReadDate>>;
  shelves?: Maybe<Array<UserBookShelves>>;
  status: Reading_Status;
  updatedAt: Scalars['Timestamp']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UserBookAvgAggregate = {
  __typename?: 'UserBookAvgAggregate';
  rating?: Maybe<Scalars['Float']['output']>;
};

export type UserBookCount = {
  __typename?: 'UserBookCount';
  read: Scalars['Int']['output'];
  readDates: Scalars['Int']['output'];
  shelves: Scalars['Int']['output'];
};

export type UserBookCountAggregate = {
  __typename?: 'UserBookCountAggregate';
  _all: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  dateAdded: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserBookCreateManyUserInput = {
  bookId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dateAdded: Scalars['Timestamp']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
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
  dateAdded: Scalars['Timestamp']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  read?: InputMaybe<ReadCreateNestedManyWithoutUserBookInput>;
  readDates?: InputMaybe<ReadDateCreateNestedManyWithoutUserBookInput>;
  shelves?: InputMaybe<UserBookShelvesCreateNestedManyWithoutUserBookInput>;
  status: Reading_Status;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user: UserCreateNestedOneWithoutUserBooksInput;
};

export type UserBookCreateWithoutShelvesInput = {
  book: BookCreateNestedOneWithoutUserBookInput;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dateAdded: Scalars['Timestamp']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  read?: InputMaybe<ReadCreateNestedManyWithoutUserBookInput>;
  readDates?: InputMaybe<ReadDateCreateNestedManyWithoutUserBookInput>;
  status: Reading_Status;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user: UserCreateNestedOneWithoutUserBooksInput;
};

export type UserBookCreateWithoutUserInput = {
  book: BookCreateNestedOneWithoutUserBookInput;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dateAdded: Scalars['Timestamp']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  read?: InputMaybe<ReadCreateNestedManyWithoutUserBookInput>;
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
  dateAdded?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Reading_Status>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserBookMinAggregate = {
  __typename?: 'UserBookMinAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  dateAdded?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
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
  dateAdded?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrderInput>;
  read?: InputMaybe<ReadOrderByRelationAggregateInput>;
  readDates?: InputMaybe<ReadDateOrderByRelationAggregateInput>;
  shelves?: InputMaybe<UserBookShelvesOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type UserBookScalarRelationFilter = {
  is?: InputMaybe<UserBookWhereInput>;
  isNot?: InputMaybe<UserBookWhereInput>;
};

export type UserBookScalarWhereInput = {
  AND?: InputMaybe<Array<UserBookScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserBookScalarWhereInput>>;
  OR?: InputMaybe<Array<UserBookScalarWhereInput>>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateAdded?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
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
  shelf?: InputMaybe<ShelfScalarRelationFilter>;
  shelfId?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookScalarRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type UserBookShelvesWhereUniqueInput = {
  AND?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  NOT?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  OR?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  shelf?: InputMaybe<ShelfScalarRelationFilter>;
  shelfId?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookScalarRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
  userBookId_shelfId?: InputMaybe<UserBookShelvesUserBookIdShelfIdCompoundUniqueInput>;
};

export type UserBookSumAggregate = {
  __typename?: 'UserBookSumAggregate';
  rating?: Maybe<Scalars['Float']['output']>;
};

export type UserBookUpdateInput = {
  rating?: InputMaybe<Scalars['Float']['input']>;
  shelves?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Reading_Status>;
};

export type UserBookUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dateAdded?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
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

export type UserBookUpdateToOneWithWhereWithoutShelvesInput = {
  data: UserBookUpdateWithoutShelvesInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpdateWithWhereUniqueWithoutUserInput = {
  data: UserBookUpdateWithoutUserInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookUpdateWithoutShelvesInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutUserBookNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dateAdded?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  read?: InputMaybe<ReadUpdateManyWithoutUserBookNestedInput>;
  readDates?: InputMaybe<ReadDateUpdateManyWithoutUserBookNestedInput>;
  status?: InputMaybe<Reading_Status>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserBooksNestedInput>;
};

export type UserBookUpdateWithoutUserInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutUserBookNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dateAdded?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  read?: InputMaybe<ReadUpdateManyWithoutUserBookNestedInput>;
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

export type UserBookUpsertWithoutShelvesInput = {
  create: UserBookCreateWithoutShelvesInput;
  update: UserBookUpdateWithoutShelvesInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookWhereInput = {
  AND?: InputMaybe<Array<UserBookWhereInput>>;
  NOT?: InputMaybe<Array<UserBookWhereInput>>;
  OR?: InputMaybe<Array<UserBookWhereInput>>;
  book?: InputMaybe<BookScalarRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateAdded?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  rating?: InputMaybe<FloatFilter>;
  read?: InputMaybe<ReadListRelationFilter>;
  readDates?: InputMaybe<ReadDateListRelationFilter>;
  shelves?: InputMaybe<UserBookShelvesListRelationFilter>;
  status?: InputMaybe<EnumReading_StatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserBookWhereUniqueInput = {
  AND?: InputMaybe<Array<UserBookWhereInput>>;
  NOT?: InputMaybe<Array<UserBookWhereInput>>;
  OR?: InputMaybe<Array<UserBookWhereInput>>;
  book?: InputMaybe<BookScalarRelationFilter>;
  bookId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dateAdded?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<UserBookIdentifierCompoundUniqueInput>;
  rating?: InputMaybe<FloatFilter>;
  read?: InputMaybe<ReadListRelationFilter>;
  readDates?: InputMaybe<ReadDateListRelationFilter>;
  shelves?: InputMaybe<UserBookShelvesListRelationFilter>;
  status?: InputMaybe<EnumReading_StatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
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
  shelves: Scalars['Int']['output'];
  userBooks: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  avatarImage: Scalars['Int']['output'];
  bio: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  emailVerified: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  passwordUpdatedAt: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
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
  avatarImage?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passwordUpdatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutUserBooksInput = {
  avatarImage?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passwordUpdatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatarImage?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passwordUpdatedAt?: Maybe<Scalars['Timestamp']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatarImage?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passwordUpdatedAt?: Maybe<Scalars['Timestamp']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserOrderByWithRelationInput = {
  avatarImage?: InputMaybe<SortOrderInput>;
  bio?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  hashedPassword?: InputMaybe<SortOrderInput>;
  hashedRefreshToken?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  passwordUpdatedAt?: InputMaybe<SortOrder>;
  shelves?: InputMaybe<ShelfOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  userBooks?: InputMaybe<UserBookOrderByRelationAggregateInput>;
  username?: InputMaybe<SortOrderInput>;
};

export type UserScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateOneRequiredWithoutUserBooksNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserBooksInput>;
  create?: InputMaybe<UserCreateWithoutUserBooksInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUserBooksInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserBooksInput>;
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

export type UserUpdateToOneWithWhereWithoutShelvesInput = {
  data: UserUpdateWithoutShelvesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUserBooksInput = {
  data: UserUpdateWithoutUserBooksInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutShelvesInput = {
  avatarImage?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passwordUpdatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutUserBooksInput = {
  avatarImage?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passwordUpdatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
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
  avatarImage?: InputMaybe<StringFilter>;
  bio?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  passwordUpdatedAt?: InputMaybe<DateTimeFilter>;
  shelves?: InputMaybe<ShelfListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userBooks?: InputMaybe<UserBookListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatarImage?: InputMaybe<StringFilter>;
  bio?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<DateTimeFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  passwordUpdatedAt?: InputMaybe<DateTimeFilter>;
  shelves?: InputMaybe<ShelfListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userBooks?: InputMaybe<UserBookListRelationFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type VerificationTokenCountAggregate = {
  __typename?: 'VerificationTokenCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type VerificationTokenMaxAggregate = {
  __typename?: 'VerificationTokenMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMinAggregate = {
  __typename?: 'VerificationTokenMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type LoginMutationVariables = Exact<{
  input: LogInInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken?: string | null, refreshToken?: string | null, expiresIn?: number | null, user: { __typename?: 'User', email: string, username?: string | null, location?: string | null, bio?: string | null, name?: string | null, avatarImage?: string | null, emailVerified?: any | null, id: string } } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', email: string, id: string, username?: string | null } };

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

export type GetCurrentlyReadingBooksWithLatestReadsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentlyReadingBooksWithLatestReadsQuery = { __typename?: 'Query', getCurrentlyReadingBooksWithLatestReads: Array<{ __typename?: 'UserBook', id: string, status: Reading_Status, rating?: number | null, dateAdded: any, createdAt: any, updatedAt: any, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, authors?: Array<string> | null, yearPublished?: string | null, pageCount?: number | null, slug: string, covers?: Array<{ __typename?: 'Cover', id: string, url: string, size: Size, source: Source }> | null, ratings?: Array<{ __typename?: 'Rating', id: string, count?: number | null, source: Source, maxScore: number, score: number }> | null }, read?: Array<{ __typename?: 'Read', id: string, startDate: any, finishedDate?: any | null, userBookId: string, readingSessions?: Array<{ __typename?: 'ReadingSession', id: string, startPage: number, endPage: number, createdAt: any }> | null }> | null }> };

export type CreateReadMutationVariables = Exact<{
  userBookId: Scalars['String']['input'];
  capacity: Scalars['Int']['input'];
}>;


export type CreateReadMutation = { __typename?: 'Mutation', createRead: { __typename?: 'Read', id: string, startDate: any, finishedDate?: any | null, userBookId: string, readingSessions?: Array<{ __typename?: 'ReadingSession', id: string, startPage: number, endPage: number, createdAt: any }> | null } };

export type CreateReadingSessionMutationVariables = Exact<{
  readId: Scalars['String']['input'];
  startPage: Scalars['Int']['input'];
  endPage: Scalars['Int']['input'];
}>;


export type CreateReadingSessionMutation = { __typename?: 'Mutation', createReadingSession: { __typename?: 'ReadingSession', id: string, startPage: number, endPage: number, createdAt: any, read: { __typename?: 'Read', id: string, startDate: any, finishedDate?: any | null, userBookId: string } } };

export type RemoveReadingSessionMutationVariables = Exact<{
  sessionId: Scalars['String']['input'];
}>;


export type RemoveReadingSessionMutation = { __typename?: 'Mutation', removeReadingSession: boolean };

export type UpdateReadingSessionMutationVariables = Exact<{
  sessionId: Scalars['String']['input'];
  startPage?: InputMaybe<Scalars['Int']['input']>;
  endPage?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateReadingSessionMutation = { __typename?: 'Mutation', updateReadingSession: { __typename?: 'ReadingSession', id: string, startPage: number, endPage: number, createdAt: any } };

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

export type UpdateUserMutationVariables = Exact<{
  data: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, username?: string | null, name?: string | null, email: string, avatarImage?: string | null } };

export type UpdateEmailMutationVariables = Exact<{
  data: UpdateEmailInput;
}>;


export type UpdateEmailMutation = { __typename?: 'Mutation', updateEmail: { __typename?: 'AuthResponse', accessToken?: string | null, refreshToken?: string | null, expiresIn?: number | null, user: { __typename?: 'User', email: string, username?: string | null, location?: string | null, bio?: string | null, name?: string | null, avatarImage?: string | null, emailVerified?: any | null, id: string } } };

export type UpdatePasswordMutationVariables = Exact<{
  data: UpdatePasswordInput;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'User', id: string, email: string } };

export type SendEmailCodeMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type SendEmailCodeMutation = { __typename?: 'Mutation', sendEmailCode: boolean };

export type CreateUserBookMutationVariables = Exact<{
  data: BookDataInput;
}>;


export type CreateUserBookMutation = { __typename?: 'Mutation', createUserBook: { __typename?: 'UserBook', status: Reading_Status, id: string, book: { __typename?: 'Book', slug: string, title: string } } };

export type UpdateUserBookMutationVariables = Exact<{
  data: UserBookUpdateInput;
  where: UserBookWhereUniqueInput;
}>;


export type UpdateUserBookMutation = { __typename?: 'Mutation', updateUserBook: { __typename: 'UserBook', status: Reading_Status, id: string, rating?: number | null, book: { __typename: 'Book', title: string }, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string, slug: string } }> | null, readDates?: Array<{ __typename?: 'ReadDate', id: string, userBookId?: string | null, startDate: any, finishedDate?: any | null, active: boolean, readingProgress?: { __typename?: 'ReadingProgress', id: string, progress: number, type: Progress_Type, capacity: number } | null }> | null } };

export type RemoveUserBookMutationVariables = Exact<{
  where: UserBookWhereUniqueInput;
}>;


export type RemoveUserBookMutation = { __typename?: 'Mutation', removeUserBook: boolean };

export type ImportUserBooksMutationVariables = Exact<{
  content: Scalars['String']['input'];
  shelves?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  ownedShelf?: InputMaybe<Scalars['String']['input']>;
  favoritesShelf?: InputMaybe<Scalars['String']['input']>;
}>;


export type ImportUserBooksMutation = { __typename?: 'Mutation', importUserBooks: boolean };

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

export type FindBookByIdentifierQueryVariables = Exact<{
  identifier: IdentifierCreateInput;
}>;


export type FindBookByIdentifierQuery = { __typename?: 'Query', findBookByIdentifier?: { __typename?: 'Book', id: string, slug: string, title: string, authors?: Array<string> | null, pageCount?: number | null, userBook?: { __typename?: 'UserBook', id: string, status: Reading_Status, rating?: number | null, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string, slug: string } }> | null } | null, identifiers?: Array<{ __typename?: 'Identifier', source: Source, sourceId: string }> | null, covers?: Array<{ __typename?: 'Cover', url: string, source: Source, size: Size }> | null, ratings?: Array<{ __typename?: 'Rating', source: Source, score: number }> | null } | null };

export type SearchMyLibraryQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type SearchMyLibraryQuery = { __typename?: 'Query', searchMyLibrary: Array<{ __typename?: 'Book', id: string, slug: string, title: string, authors?: Array<string> | null, yearPublished?: string | null, userBook?: { __typename?: 'UserBook', id: string, status: Reading_Status } | null, covers?: Array<{ __typename?: 'Cover', url: string, source: Source, size: Size }> | null, ratings?: Array<{ __typename?: 'Rating', source: Source, score: number }> | null }> };

export type BookQueryVariables = Exact<{
  where: BookWhereUniqueInput;
}>;


export type BookQuery = { __typename?: 'Query', book?: { __typename?: 'Book', id: string, slug: string, title: string, authors?: Array<string> | null, pageCount?: number | null, userBook?: { __typename?: 'UserBook', id: string, status: Reading_Status, rating?: number | null, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string, slug: string } }> | null } | null, identifiers?: Array<{ __typename?: 'Identifier', source: Source, sourceId: string }> | null, covers?: Array<{ __typename?: 'Cover', url: string, source: Source, size: Size }> | null, ratings?: Array<{ __typename?: 'Rating', source: Source, score: number }> | null } | null };

export type ReadsQueryVariables = Exact<{
  where?: InputMaybe<ReadWhereInput>;
}>;


export type ReadsQuery = { __typename?: 'Query', reads: Array<{ __typename?: 'Read', id: string, startDate: any, finishedDate?: any | null, userBookId: string, capacity: number, readingSessions?: Array<{ __typename?: 'ReadingSession', id: string, startPage: number, endPage: number, createdAt: any }> | null }> };

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

export type BooksByShelfNameQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type BooksByShelfNameQuery = { __typename?: 'Query', booksByShelf?: { __typename?: 'Shelf', id: string, name: string, slug: string, user?: { __typename?: 'User', id: string, username?: string | null } | null, _count: { __typename?: 'ShelfCount', userBooks: number } } | null };

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


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, username?: string | null, email: string, name?: string | null, avatarImage?: string | null, location?: string | null, bio?: string | null, passwordUpdatedAt: any } | null };

export type UserBookQueryVariables = Exact<{
  where: BookWhereUniqueInput;
}>;


export type UserBookQuery = { __typename?: 'Query', userBook?: { __typename?: 'UserBook', userId: string, status: Reading_Status, rating?: number | null, dateAdded: any, user: { __typename?: 'User', id: string }, book: { __typename?: 'Book', slug: string, id: string, title: string, authors?: Array<string> | null, pageCount?: number | null, yearPublished?: string | null, identifiers?: Array<{ __typename?: 'Identifier', source: Source, sourceId: string }> | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null, ratings?: Array<{ __typename?: 'Rating', score: number, source: Source }> | null }, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string } }> | null } | null };

export type GetUserBooksQueryVariables = Exact<{
  where?: InputMaybe<UserBookWhereInput>;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  orderBy?: InputMaybe<UserBookOrderByWithRelationInput>;
}>;


export type GetUserBooksQuery = { __typename?: 'Query', getUserBooks: { __typename?: 'UserBooksResponse', hasMore: boolean, totalBooks: number, userBooks?: Array<{ __typename?: 'UserBook', id: string, userId: string, status: Reading_Status, rating?: number | null, dateAdded: any, createdAt: any, updatedAt: any, user: { __typename?: 'User', id: string }, book: { __typename?: 'Book', id: string, slug: string, title: string, authors?: Array<string> | null, pageCount?: number | null, yearPublished?: string | null, identifiers?: Array<{ __typename?: 'Identifier', source: Source, sourceId: string }> | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null, ratings?: Array<{ __typename?: 'Rating', score: number, source: Source }> | null }, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string } }> | null, _count: { __typename?: 'UserBookCount', shelves: number } }> | null } };

export type CountUserBooksQueryVariables = Exact<{
  where?: InputMaybe<UserBookWhereInput>;
}>;


export type CountUserBooksQuery = { __typename?: 'Query', countUserBooks: number };

export type BookCountsByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type BookCountsByUserIdQuery = { __typename?: 'Query', bookCountsByUserId: { __typename?: 'BookCountsResponse', wantsToReadCount: number, readingCount: number, finishedCount: number, upNextCount: number } };

export type UserLibraryGoogleIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserLibraryGoogleIdsQuery = { __typename?: 'Query', userLibraryGoogleIds: Array<string> };


export const LoginDocument = gql`
    mutation Login($input: LogInInput!) {
  login(logInInput: $input) {
    accessToken
    refreshToken
    expiresIn
    user {
      email
      username
      location
      bio
      name
      avatarImage
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
export const GetCurrentlyReadingBooksWithLatestReadsDocument = gql`
    query GetCurrentlyReadingBooksWithLatestReads {
  getCurrentlyReadingBooksWithLatestReads {
    id
    status
    rating
    dateAdded
    createdAt
    updatedAt
    book {
      id
      title
      subtitle
      authors
      yearPublished
      pageCount
      slug
      covers {
        id
        url
        size
        source
      }
      ratings {
        id
        count
        source
        maxScore
        score
      }
    }
    read {
      id
      startDate
      finishedDate
      userBookId
      readingSessions {
        id
        startPage
        endPage
        createdAt
      }
    }
  }
}
    `;

/**
 * __useGetCurrentlyReadingBooksWithLatestReadsQuery__
 *
 * To run a query within a React component, call `useGetCurrentlyReadingBooksWithLatestReadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentlyReadingBooksWithLatestReadsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentlyReadingBooksWithLatestReadsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentlyReadingBooksWithLatestReadsQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentlyReadingBooksWithLatestReadsQuery, GetCurrentlyReadingBooksWithLatestReadsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentlyReadingBooksWithLatestReadsQuery, GetCurrentlyReadingBooksWithLatestReadsQueryVariables>(GetCurrentlyReadingBooksWithLatestReadsDocument, options);
      }
export function useGetCurrentlyReadingBooksWithLatestReadsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentlyReadingBooksWithLatestReadsQuery, GetCurrentlyReadingBooksWithLatestReadsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentlyReadingBooksWithLatestReadsQuery, GetCurrentlyReadingBooksWithLatestReadsQueryVariables>(GetCurrentlyReadingBooksWithLatestReadsDocument, options);
        }
export function useGetCurrentlyReadingBooksWithLatestReadsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCurrentlyReadingBooksWithLatestReadsQuery, GetCurrentlyReadingBooksWithLatestReadsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCurrentlyReadingBooksWithLatestReadsQuery, GetCurrentlyReadingBooksWithLatestReadsQueryVariables>(GetCurrentlyReadingBooksWithLatestReadsDocument, options);
        }
export type GetCurrentlyReadingBooksWithLatestReadsQueryHookResult = ReturnType<typeof useGetCurrentlyReadingBooksWithLatestReadsQuery>;
export type GetCurrentlyReadingBooksWithLatestReadsLazyQueryHookResult = ReturnType<typeof useGetCurrentlyReadingBooksWithLatestReadsLazyQuery>;
export type GetCurrentlyReadingBooksWithLatestReadsSuspenseQueryHookResult = ReturnType<typeof useGetCurrentlyReadingBooksWithLatestReadsSuspenseQuery>;
export type GetCurrentlyReadingBooksWithLatestReadsQueryResult = Apollo.QueryResult<GetCurrentlyReadingBooksWithLatestReadsQuery, GetCurrentlyReadingBooksWithLatestReadsQueryVariables>;
export const CreateReadDocument = gql`
    mutation CreateRead($userBookId: String!, $capacity: Int!) {
  createRead(userBookId: $userBookId, capacity: $capacity) {
    id
    startDate
    finishedDate
    userBookId
    readingSessions {
      id
      startPage
      endPage
      createdAt
    }
  }
}
    `;
export type CreateReadMutationFn = Apollo.MutationFunction<CreateReadMutation, CreateReadMutationVariables>;

/**
 * __useCreateReadMutation__
 *
 * To run a mutation, you first call `useCreateReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReadMutation, { data, loading, error }] = useCreateReadMutation({
 *   variables: {
 *      userBookId: // value for 'userBookId'
 *      capacity: // value for 'capacity'
 *   },
 * });
 */
export function useCreateReadMutation(baseOptions?: Apollo.MutationHookOptions<CreateReadMutation, CreateReadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReadMutation, CreateReadMutationVariables>(CreateReadDocument, options);
      }
export type CreateReadMutationHookResult = ReturnType<typeof useCreateReadMutation>;
export type CreateReadMutationResult = Apollo.MutationResult<CreateReadMutation>;
export type CreateReadMutationOptions = Apollo.BaseMutationOptions<CreateReadMutation, CreateReadMutationVariables>;
export const CreateReadingSessionDocument = gql`
    mutation CreateReadingSession($readId: String!, $startPage: Int!, $endPage: Int!) {
  createReadingSession(readId: $readId, startPage: $startPage, endPage: $endPage) {
    id
    startPage
    endPage
    createdAt
    read {
      id
      startDate
      finishedDate
      userBookId
    }
  }
}
    `;
export type CreateReadingSessionMutationFn = Apollo.MutationFunction<CreateReadingSessionMutation, CreateReadingSessionMutationVariables>;

/**
 * __useCreateReadingSessionMutation__
 *
 * To run a mutation, you first call `useCreateReadingSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReadingSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReadingSessionMutation, { data, loading, error }] = useCreateReadingSessionMutation({
 *   variables: {
 *      readId: // value for 'readId'
 *      startPage: // value for 'startPage'
 *      endPage: // value for 'endPage'
 *   },
 * });
 */
export function useCreateReadingSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateReadingSessionMutation, CreateReadingSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReadingSessionMutation, CreateReadingSessionMutationVariables>(CreateReadingSessionDocument, options);
      }
export type CreateReadingSessionMutationHookResult = ReturnType<typeof useCreateReadingSessionMutation>;
export type CreateReadingSessionMutationResult = Apollo.MutationResult<CreateReadingSessionMutation>;
export type CreateReadingSessionMutationOptions = Apollo.BaseMutationOptions<CreateReadingSessionMutation, CreateReadingSessionMutationVariables>;
export const RemoveReadingSessionDocument = gql`
    mutation RemoveReadingSession($sessionId: String!) {
  removeReadingSession(sessionId: $sessionId)
}
    `;
export type RemoveReadingSessionMutationFn = Apollo.MutationFunction<RemoveReadingSessionMutation, RemoveReadingSessionMutationVariables>;

/**
 * __useRemoveReadingSessionMutation__
 *
 * To run a mutation, you first call `useRemoveReadingSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveReadingSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeReadingSessionMutation, { data, loading, error }] = useRemoveReadingSessionMutation({
 *   variables: {
 *      sessionId: // value for 'sessionId'
 *   },
 * });
 */
export function useRemoveReadingSessionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveReadingSessionMutation, RemoveReadingSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveReadingSessionMutation, RemoveReadingSessionMutationVariables>(RemoveReadingSessionDocument, options);
      }
export type RemoveReadingSessionMutationHookResult = ReturnType<typeof useRemoveReadingSessionMutation>;
export type RemoveReadingSessionMutationResult = Apollo.MutationResult<RemoveReadingSessionMutation>;
export type RemoveReadingSessionMutationOptions = Apollo.BaseMutationOptions<RemoveReadingSessionMutation, RemoveReadingSessionMutationVariables>;
export const UpdateReadingSessionDocument = gql`
    mutation UpdateReadingSession($sessionId: String!, $startPage: Int, $endPage: Int, $date: String) {
  updateReadingSession(
    sessionId: $sessionId
    startPage: $startPage
    endPage: $endPage
    date: $date
  ) {
    id
    startPage
    endPage
    createdAt
  }
}
    `;
export type UpdateReadingSessionMutationFn = Apollo.MutationFunction<UpdateReadingSessionMutation, UpdateReadingSessionMutationVariables>;

/**
 * __useUpdateReadingSessionMutation__
 *
 * To run a mutation, you first call `useUpdateReadingSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReadingSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReadingSessionMutation, { data, loading, error }] = useUpdateReadingSessionMutation({
 *   variables: {
 *      sessionId: // value for 'sessionId'
 *      startPage: // value for 'startPage'
 *      endPage: // value for 'endPage'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useUpdateReadingSessionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReadingSessionMutation, UpdateReadingSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReadingSessionMutation, UpdateReadingSessionMutationVariables>(UpdateReadingSessionDocument, options);
      }
export type UpdateReadingSessionMutationHookResult = ReturnType<typeof useUpdateReadingSessionMutation>;
export type UpdateReadingSessionMutationResult = Apollo.MutationResult<UpdateReadingSessionMutation>;
export type UpdateReadingSessionMutationOptions = Apollo.BaseMutationOptions<UpdateReadingSessionMutation, UpdateReadingSessionMutationVariables>;
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
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UpdateUserInput!) {
  updateUser(data: $data) {
    id
    username
    name
    email
    avatarImage
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
    accessToken
    refreshToken
    expiresIn
    user {
      email
      username
      location
      bio
      name
      avatarImage
      emailVerified
      id
    }
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
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($data: UpdatePasswordInput!) {
  updatePassword(data: $data) {
    id
    email
  }
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const SendEmailCodeDocument = gql`
    mutation SendEmailCode($email: String!) {
  sendEmailCode(email: $email)
}
    `;
export type SendEmailCodeMutationFn = Apollo.MutationFunction<SendEmailCodeMutation, SendEmailCodeMutationVariables>;

/**
 * __useSendEmailCodeMutation__
 *
 * To run a mutation, you first call `useSendEmailCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendEmailCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendEmailCodeMutation, { data, loading, error }] = useSendEmailCodeMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendEmailCodeMutation(baseOptions?: Apollo.MutationHookOptions<SendEmailCodeMutation, SendEmailCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendEmailCodeMutation, SendEmailCodeMutationVariables>(SendEmailCodeDocument, options);
      }
export type SendEmailCodeMutationHookResult = ReturnType<typeof useSendEmailCodeMutation>;
export type SendEmailCodeMutationResult = Apollo.MutationResult<SendEmailCodeMutation>;
export type SendEmailCodeMutationOptions = Apollo.BaseMutationOptions<SendEmailCodeMutation, SendEmailCodeMutationVariables>;
export const CreateUserBookDocument = gql`
    mutation CreateUserBook($data: BookDataInput!) {
  createUserBook(data: $data) {
    status
    id
    book {
      slug
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
      title
    }
    shelves {
      shelf {
        id
        name
        slug
      }
    }
    rating
    readDates {
      id
      userBookId
      startDate
      finishedDate
      active
      readingProgress {
        id
        progress
        type
        capacity
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
    mutation ImportUserBooks($content: String!, $shelves: [String!], $ownedShelf: String, $favoritesShelf: String) {
  importUserBooks(
    content: $content
    shelves: $shelves
    ownedShelf: $ownedShelf
    favoritesShelf: $favoritesShelf
  )
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
 *      shelves: // value for 'shelves'
 *      ownedShelf: // value for 'ownedShelf'
 *      favoritesShelf: // value for 'favoritesShelf'
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
export function useFindBookByIdentifierSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindBookByIdentifierQuery, FindBookByIdentifierQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindBookByIdentifierQuery, FindBookByIdentifierQueryVariables>(FindBookByIdentifierDocument, options);
        }
export type FindBookByIdentifierQueryHookResult = ReturnType<typeof useFindBookByIdentifierQuery>;
export type FindBookByIdentifierLazyQueryHookResult = ReturnType<typeof useFindBookByIdentifierLazyQuery>;
export type FindBookByIdentifierSuspenseQueryHookResult = ReturnType<typeof useFindBookByIdentifierSuspenseQuery>;
export type FindBookByIdentifierQueryResult = Apollo.QueryResult<FindBookByIdentifierQuery, FindBookByIdentifierQueryVariables>;
export const SearchMyLibraryDocument = gql`
    query SearchMyLibrary($query: String!) {
  searchMyLibrary(query: $query) {
    id
    slug
    title
    authors
    yearPublished
    userBook {
      id
      status
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
export function useSearchMyLibrarySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchMyLibraryQuery, SearchMyLibraryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchMyLibraryQuery, SearchMyLibraryQueryVariables>(SearchMyLibraryDocument, options);
        }
export type SearchMyLibraryQueryHookResult = ReturnType<typeof useSearchMyLibraryQuery>;
export type SearchMyLibraryLazyQueryHookResult = ReturnType<typeof useSearchMyLibraryLazyQuery>;
export type SearchMyLibrarySuspenseQueryHookResult = ReturnType<typeof useSearchMyLibrarySuspenseQuery>;
export type SearchMyLibraryQueryResult = Apollo.QueryResult<SearchMyLibraryQuery, SearchMyLibraryQueryVariables>;
export const BookDocument = gql`
    query Book($where: BookWhereUniqueInput!) {
  book(where: $where) {
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
export function useBookQuery(baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables> & ({ variables: BookQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookQuery, BookQueryVariables>(BookDocument, options);
      }
export function useBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, options);
        }
export function useBookSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BookQuery, BookQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BookQuery, BookQueryVariables>(BookDocument, options);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookSuspenseQueryHookResult = ReturnType<typeof useBookSuspenseQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const ReadsDocument = gql`
    query Reads($where: ReadWhereInput) {
  reads(where: $where) {
    id
    startDate
    finishedDate
    userBookId
    capacity
    readingSessions {
      id
      startPage
      endPage
      createdAt
    }
  }
}
    `;

/**
 * __useReadsQuery__
 *
 * To run a query within a React component, call `useReadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useReadsQuery(baseOptions?: Apollo.QueryHookOptions<ReadsQuery, ReadsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReadsQuery, ReadsQueryVariables>(ReadsDocument, options);
      }
export function useReadsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReadsQuery, ReadsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReadsQuery, ReadsQueryVariables>(ReadsDocument, options);
        }
export function useReadsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ReadsQuery, ReadsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReadsQuery, ReadsQueryVariables>(ReadsDocument, options);
        }
export type ReadsQueryHookResult = ReturnType<typeof useReadsQuery>;
export type ReadsLazyQueryHookResult = ReturnType<typeof useReadsLazyQuery>;
export type ReadsSuspenseQueryHookResult = ReturnType<typeof useReadsSuspenseQuery>;
export type ReadsQueryResult = Apollo.QueryResult<ReadsQuery, ReadsQueryVariables>;
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
export function useReadDatesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ReadDatesQuery, ReadDatesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
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
export function useShelvesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ShelvesQuery, ShelvesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
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
export function useGetMyBookShelvesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMyBookShelvesQuery, GetMyBookShelvesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyBookShelvesQuery, GetMyBookShelvesQueryVariables>(GetMyBookShelvesDocument, options);
        }
export type GetMyBookShelvesQueryHookResult = ReturnType<typeof useGetMyBookShelvesQuery>;
export type GetMyBookShelvesLazyQueryHookResult = ReturnType<typeof useGetMyBookShelvesLazyQuery>;
export type GetMyBookShelvesSuspenseQueryHookResult = ReturnType<typeof useGetMyBookShelvesSuspenseQuery>;
export type GetMyBookShelvesQueryResult = Apollo.QueryResult<GetMyBookShelvesQuery, GetMyBookShelvesQueryVariables>;
export const BooksByShelfNameDocument = gql`
    query BooksByShelfName($slug: String!, $username: String!) {
  booksByShelf(slug: $slug, username: $username) {
    id
    name
    slug
    user {
      id
      username
    }
    _count {
      userBooks
    }
  }
}
    `;

/**
 * __useBooksByShelfNameQuery__
 *
 * To run a query within a React component, call `useBooksByShelfNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksByShelfNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksByShelfNameQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useBooksByShelfNameQuery(baseOptions: Apollo.QueryHookOptions<BooksByShelfNameQuery, BooksByShelfNameQueryVariables> & ({ variables: BooksByShelfNameQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BooksByShelfNameQuery, BooksByShelfNameQueryVariables>(BooksByShelfNameDocument, options);
      }
export function useBooksByShelfNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksByShelfNameQuery, BooksByShelfNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BooksByShelfNameQuery, BooksByShelfNameQueryVariables>(BooksByShelfNameDocument, options);
        }
export function useBooksByShelfNameSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BooksByShelfNameQuery, BooksByShelfNameQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BooksByShelfNameQuery, BooksByShelfNameQueryVariables>(BooksByShelfNameDocument, options);
        }
export type BooksByShelfNameQueryHookResult = ReturnType<typeof useBooksByShelfNameQuery>;
export type BooksByShelfNameLazyQueryHookResult = ReturnType<typeof useBooksByShelfNameLazyQuery>;
export type BooksByShelfNameSuspenseQueryHookResult = ReturnType<typeof useBooksByShelfNameSuspenseQuery>;
export type BooksByShelfNameQueryResult = Apollo.QueryResult<BooksByShelfNameQuery, BooksByShelfNameQueryVariables>;
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
export function useBooksByShelfSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BooksByShelfQuery, BooksByShelfQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
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
export function useShelvesWithBookCoversSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ShelvesWithBookCoversQuery, ShelvesWithBookCoversQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
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
    name
    avatarImage
    location
    bio
    passwordUpdatedAt
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
export function useUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
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
    dateAdded
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
export function useUserBookSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserBookQuery, UserBookQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
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
      dateAdded
      createdAt
      updatedAt
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
export function useGetUserBooksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserBooksQuery, GetUserBooksQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
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
export function useCountUserBooksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CountUserBooksQuery, CountUserBooksQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
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
export function useBookCountsByUserIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BookCountsByUserIdQuery, BookCountsByUserIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BookCountsByUserIdQuery, BookCountsByUserIdQueryVariables>(BookCountsByUserIdDocument, options);
        }
export type BookCountsByUserIdQueryHookResult = ReturnType<typeof useBookCountsByUserIdQuery>;
export type BookCountsByUserIdLazyQueryHookResult = ReturnType<typeof useBookCountsByUserIdLazyQuery>;
export type BookCountsByUserIdSuspenseQueryHookResult = ReturnType<typeof useBookCountsByUserIdSuspenseQuery>;
export type BookCountsByUserIdQueryResult = Apollo.QueryResult<BookCountsByUserIdQuery, BookCountsByUserIdQueryVariables>;
export const UserLibraryGoogleIdsDocument = gql`
    query UserLibraryGoogleIds {
  userLibraryGoogleIds
}
    `;

/**
 * __useUserLibraryGoogleIdsQuery__
 *
 * To run a query within a React component, call `useUserLibraryGoogleIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserLibraryGoogleIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserLibraryGoogleIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserLibraryGoogleIdsQuery(baseOptions?: Apollo.QueryHookOptions<UserLibraryGoogleIdsQuery, UserLibraryGoogleIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserLibraryGoogleIdsQuery, UserLibraryGoogleIdsQueryVariables>(UserLibraryGoogleIdsDocument, options);
      }
export function useUserLibraryGoogleIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserLibraryGoogleIdsQuery, UserLibraryGoogleIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserLibraryGoogleIdsQuery, UserLibraryGoogleIdsQueryVariables>(UserLibraryGoogleIdsDocument, options);
        }
export function useUserLibraryGoogleIdsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserLibraryGoogleIdsQuery, UserLibraryGoogleIdsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserLibraryGoogleIdsQuery, UserLibraryGoogleIdsQueryVariables>(UserLibraryGoogleIdsDocument, options);
        }
export type UserLibraryGoogleIdsQueryHookResult = ReturnType<typeof useUserLibraryGoogleIdsQuery>;
export type UserLibraryGoogleIdsLazyQueryHookResult = ReturnType<typeof useUserLibraryGoogleIdsLazyQuery>;
export type UserLibraryGoogleIdsSuspenseQueryHookResult = ReturnType<typeof useUserLibraryGoogleIdsSuspenseQuery>;
export type UserLibraryGoogleIdsQueryResult = Apollo.QueryResult<UserLibraryGoogleIdsQuery, UserLibraryGoogleIdsQueryVariables>;