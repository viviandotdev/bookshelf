import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

export enum VerificationTokenScalarFieldEnum {
    id = "id",
    email = "email",
    token = "token",
    expires = "expires"
}

export enum UserBookShelvesScalarFieldEnum {
    userBookId = "userBookId",
    shelfId = "shelfId"
}

export enum UserBookScalarFieldEnum {
    id = "id",
    userId = "userId",
    bookId = "bookId",
    status = "status",
    rating = "rating",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    dateAdded = "dateAdded"
}

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    hashedPassword = "hashedPassword",
    name = "name",
    location = "location",
    bio = "bio",
    hashedRefreshToken = "hashedRefreshToken",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    passwordUpdatedAt = "passwordUpdatedAt",
    avatarImage = "avatarImage",
    emailVerified = "emailVerified"
}

export enum ShelfScalarFieldEnum {
    id = "id",
    slug = "slug",
    name = "name",
    userId = "userId",
    dateTime = "dateTime"
}

export enum ReadingSessionScalarFieldEnum {
    id = "id",
    capacity = "capacity",
    progress = "progress",
    type = "type",
    createdAt = "createdAt",
    readId = "readId"
}

export enum ReadingProgressScalarFieldEnum {
    id = "id",
    capacity = "capacity",
    progress = "progress",
    type = "type",
    createdAt = "createdAt",
    readDateId = "readDateId"
}

export enum ReadDateScalarFieldEnum {
    id = "id",
    startDate = "startDate",
    finishedDate = "finishedDate",
    active = "active",
    userBookId = "userBookId"
}

export enum ReadScalarFieldEnum {
    id = "id",
    startDate = "startDate",
    finishedDate = "finishedDate",
    userBookId = "userBookId"
}

export enum RatingScalarFieldEnum {
    id = "id",
    count = "count",
    source = "source",
    maxScore = "maxScore",
    score = "score",
    bookId = "bookId"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SOURCE {
    GOOGLE = "GOOGLE",
    ISBN_13 = "ISBN_13",
    ISBN_10 = "ISBN_10",
    GOODREADS = "GOODREADS",
    AMAZON = "AMAZON",
    OPEN_LIBRARY = "OPEN_LIBRARY"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum SIZE {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE"
}

export enum READING_STATUS {
    WANT_TO_READ = "WANT_TO_READ",
    FINISHED = "FINISHED",
    READING = "READING",
    DID_NOT_FINISH = "DID_NOT_FINISH",
    UP_NEXT = "UP_NEXT"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum PROGRESS_TYPE {
    PAGES = "PAGES",
    PERCENTAGE = "PERCENTAGE"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum PasswordResetTokenScalarFieldEnum {
    id = "id",
    email = "email",
    token = "token",
    expires = "expires"
}

export enum IdentifierScalarFieldEnum {
    id = "id",
    source = "source",
    sourceId = "sourceId",
    bookId = "bookId"
}

export enum CoverScalarFieldEnum {
    id = "id",
    url = "url",
    size = "size",
    source = "source",
    bookId = "bookId"
}

export enum BookScalarFieldEnum {
    id = "id",
    slug = "slug",
    title = "title",
    subtitle = "subtitle",
    authors = "authors",
    yearPublished = "yearPublished",
    pageCount = "pageCount"
}

registerEnumType(BookScalarFieldEnum, { name: 'BookScalarFieldEnum', description: undefined })
registerEnumType(CoverScalarFieldEnum, { name: 'CoverScalarFieldEnum', description: undefined })
registerEnumType(IdentifierScalarFieldEnum, { name: 'IdentifierScalarFieldEnum', description: undefined })
registerEnumType(PasswordResetTokenScalarFieldEnum, { name: 'PasswordResetTokenScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(PROGRESS_TYPE, { name: 'PROGRESS_TYPE', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(READING_STATUS, { name: 'READING_STATUS', description: undefined })
registerEnumType(SIZE, { name: 'SIZE', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(SOURCE, { name: 'SOURCE', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(RatingScalarFieldEnum, { name: 'RatingScalarFieldEnum', description: undefined })
registerEnumType(ReadScalarFieldEnum, { name: 'ReadScalarFieldEnum', description: undefined })
registerEnumType(ReadDateScalarFieldEnum, { name: 'ReadDateScalarFieldEnum', description: undefined })
registerEnumType(ReadingProgressScalarFieldEnum, { name: 'ReadingProgressScalarFieldEnum', description: undefined })
registerEnumType(ReadingSessionScalarFieldEnum, { name: 'ReadingSessionScalarFieldEnum', description: undefined })
registerEnumType(ShelfScalarFieldEnum, { name: 'ShelfScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
registerEnumType(UserBookScalarFieldEnum, { name: 'UserBookScalarFieldEnum', description: undefined })
registerEnumType(UserBookShelvesScalarFieldEnum, { name: 'UserBookShelvesScalarFieldEnum', description: undefined })
registerEnumType(VerificationTokenScalarFieldEnum, { name: 'VerificationTokenScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateBook {
    @Field(() => BookCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BookCountAggregate>;
    @Field(() => BookAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof BookAvgAggregate>;
    @Field(() => BookSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof BookSumAggregate>;
    @Field(() => BookMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BookMinAggregate>;
    @Field(() => BookMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BookMaxAggregate>;
}

@ArgsType()
export class BookAggregateArgs {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithRelationInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BookCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BookCountAggregateInput>;
    @Field(() => BookAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BookAvgAggregateInput>;
    @Field(() => BookSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BookSumAggregateInput>;
    @Field(() => BookMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BookMinAggregateInput>;
    @Field(() => BookMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BookMaxAggregateInput>;
}

@InputType()
export class BookAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    pageCount?: true;
}

@ObjectType()
export class BookAvgAggregate {
    @Field(() => Float, {nullable:true})
    pageCount?: number;
}

@InputType()
export class BookAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    pageCount?: `${SortOrder}`;
}

@InputType()
export class BookCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    subtitle?: true;
    @Field(() => Boolean, {nullable:true})
    authors?: true;
    @Field(() => Boolean, {nullable:true})
    yearPublished?: true;
    @Field(() => Boolean, {nullable:true})
    pageCount?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class BookCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    slug!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    subtitle!: number;
    @Field(() => Int, {nullable:false})
    authors!: number;
    @Field(() => Int, {nullable:false})
    yearPublished!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pageCount!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class BookCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    subtitle?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authors?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    yearPublished?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageCount?: `${SortOrder}`;
}

@ObjectType()
export class BookCount {
    @Field(() => Int, {nullable:false})
    identifiers?: number;
    @Field(() => Int, {nullable:false})
    covers?: number;
    @Field(() => Int, {nullable:false})
    ratings?: number;
}

@InputType()
export class BookCreateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
}

@InputType()
export class BookCreateNestedOneWithoutCoversInput {
    @Field(() => BookCreateWithoutCoversInput, {nullable:true})
    @Type(() => BookCreateWithoutCoversInput)
    create?: InstanceType<typeof BookCreateWithoutCoversInput>;
    @Field(() => BookCreateOrConnectWithoutCoversInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutCoversInput)
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutCoversInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
}

@InputType()
export class BookCreateNestedOneWithoutIdentifiersInput {
    @Field(() => BookCreateWithoutIdentifiersInput, {nullable:true})
    @Type(() => BookCreateWithoutIdentifiersInput)
    create?: InstanceType<typeof BookCreateWithoutIdentifiersInput>;
    @Field(() => BookCreateOrConnectWithoutIdentifiersInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutIdentifiersInput)
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutIdentifiersInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
}

@InputType()
export class BookCreateNestedOneWithoutRatingsInput {
    @Field(() => BookCreateWithoutRatingsInput, {nullable:true})
    @Type(() => BookCreateWithoutRatingsInput)
    create?: InstanceType<typeof BookCreateWithoutRatingsInput>;
    @Field(() => BookCreateOrConnectWithoutRatingsInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutRatingsInput)
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutRatingsInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
}

@InputType()
export class BookCreateNestedOneWithoutUserBookInput {
    @Field(() => BookCreateWithoutUserBookInput, {nullable:true})
    @Type(() => BookCreateWithoutUserBookInput)
    create?: InstanceType<typeof BookCreateWithoutUserBookInput>;
    @Field(() => BookCreateOrConnectWithoutUserBookInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutUserBookInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
}

@InputType()
export class BookCreateOrConnectWithoutCoversInput {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => BookCreateWithoutCoversInput, {nullable:false})
    @Type(() => BookCreateWithoutCoversInput)
    create!: InstanceType<typeof BookCreateWithoutCoversInput>;
}

@InputType()
export class BookCreateOrConnectWithoutIdentifiersInput {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => BookCreateWithoutIdentifiersInput, {nullable:false})
    @Type(() => BookCreateWithoutIdentifiersInput)
    create!: InstanceType<typeof BookCreateWithoutIdentifiersInput>;
}

@InputType()
export class BookCreateOrConnectWithoutRatingsInput {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => BookCreateWithoutRatingsInput, {nullable:false})
    @Type(() => BookCreateWithoutRatingsInput)
    create!: InstanceType<typeof BookCreateWithoutRatingsInput>;
}

@InputType()
export class BookCreateOrConnectWithoutUserBookInput {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => BookCreateWithoutUserBookInput, {nullable:false})
    @Type(() => BookCreateWithoutUserBookInput)
    create!: InstanceType<typeof BookCreateWithoutUserBookInput>;
}

@InputType()
export class BookCreateWithoutCoversInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierCreateNestedManyWithoutBookInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierCreateNestedManyWithoutBookInput>;
    @Field(() => UserBookCreateNestedOneWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutBookInput>;
    @Field(() => RatingCreateNestedManyWithoutBookInput, {nullable:true})
    ratings?: InstanceType<typeof RatingCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookCreateWithoutIdentifiersInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => UserBookCreateNestedOneWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutBookInput>;
    @Field(() => CoverCreateNestedManyWithoutBookInput, {nullable:true})
    covers?: InstanceType<typeof CoverCreateNestedManyWithoutBookInput>;
    @Field(() => RatingCreateNestedManyWithoutBookInput, {nullable:true})
    ratings?: InstanceType<typeof RatingCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookCreateWithoutRatingsInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierCreateNestedManyWithoutBookInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierCreateNestedManyWithoutBookInput>;
    @Field(() => UserBookCreateNestedOneWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutBookInput>;
    @Field(() => CoverCreateNestedManyWithoutBookInput, {nullable:true})
    covers?: InstanceType<typeof CoverCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookCreateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierCreateNestedManyWithoutBookInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierCreateNestedManyWithoutBookInput>;
    @Field(() => CoverCreateNestedManyWithoutBookInput, {nullable:true})
    covers?: InstanceType<typeof CoverCreateNestedManyWithoutBookInput>;
    @Field(() => RatingCreateNestedManyWithoutBookInput, {nullable:true})
    ratings?: InstanceType<typeof RatingCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookCreateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierCreateNestedManyWithoutBookInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierCreateNestedManyWithoutBookInput>;
    @Field(() => UserBookCreateNestedOneWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutBookInput>;
    @Field(() => CoverCreateNestedManyWithoutBookInput, {nullable:true})
    covers?: InstanceType<typeof CoverCreateNestedManyWithoutBookInput>;
    @Field(() => RatingCreateNestedManyWithoutBookInput, {nullable:true})
    ratings?: InstanceType<typeof RatingCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookCreateauthorsInput {
    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}

@ArgsType()
export class BookGroupByArgs {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithAggregationInput>;
    @Field(() => [BookScalarFieldEnum], {nullable:false})
    by!: Array<`${BookScalarFieldEnum}`>;
    @Field(() => BookScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof BookScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BookCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BookCountAggregateInput>;
    @Field(() => BookAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BookAvgAggregateInput>;
    @Field(() => BookSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BookSumAggregateInput>;
    @Field(() => BookMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BookMinAggregateInput>;
    @Field(() => BookMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BookMaxAggregateInput>;
}

@ObjectType()
export class BookGroupBy {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => BookCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BookCountAggregate>;
    @Field(() => BookAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof BookAvgAggregate>;
    @Field(() => BookSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof BookSumAggregate>;
    @Field(() => BookMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BookMinAggregate>;
    @Field(() => BookMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BookMaxAggregate>;
}

@InputType()
export class BookMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    subtitle?: true;
    @Field(() => Boolean, {nullable:true})
    yearPublished?: true;
    @Field(() => Boolean, {nullable:true})
    pageCount?: true;
}

@ObjectType()
export class BookMaxAggregate {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
}

@InputType()
export class BookMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    subtitle?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    yearPublished?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageCount?: `${SortOrder}`;
}

@InputType()
export class BookMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    subtitle?: true;
    @Field(() => Boolean, {nullable:true})
    yearPublished?: true;
    @Field(() => Boolean, {nullable:true})
    pageCount?: true;
}

@ObjectType()
export class BookMinAggregate {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
}

@InputType()
export class BookMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    subtitle?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    yearPublished?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    pageCount?: `${SortOrder}`;
}

@InputType()
export class BookOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    subtitle?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    authors?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    yearPublished?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    pageCount?: InstanceType<typeof SortOrderInput>;
    @Field(() => BookCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BookCountOrderByAggregateInput>;
    @Field(() => BookAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BookAvgOrderByAggregateInput>;
    @Field(() => BookMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BookMaxOrderByAggregateInput>;
    @Field(() => BookMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BookMinOrderByAggregateInput>;
    @Field(() => BookSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BookSumOrderByAggregateInput>;
}

@InputType()
export class BookOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    subtitle?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    authors?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    yearPublished?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    pageCount?: InstanceType<typeof SortOrderInput>;
    @Field(() => IdentifierOrderByRelationAggregateInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierOrderByRelationAggregateInput>;
    @Field(() => UserBookOrderByWithRelationInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookOrderByWithRelationInput>;
    @Field(() => CoverOrderByRelationAggregateInput, {nullable:true})
    covers?: InstanceType<typeof CoverOrderByRelationAggregateInput>;
    @Field(() => RatingOrderByRelationAggregateInput, {nullable:true})
    ratings?: InstanceType<typeof RatingOrderByRelationAggregateInput>;
}

@InputType()
export class BookScalarRelationFilter {
    @Field(() => BookWhereInput, {nullable:true})
    is?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereInput, {nullable:true})
    isNot?: InstanceType<typeof BookWhereInput>;
}

@InputType()
export class BookScalarWhereWithAggregatesInput {
    @Field(() => [BookScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BookScalarWhereWithAggregatesInput>;
    @Field(() => [BookScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BookScalarWhereWithAggregatesInput>;
    @Field(() => [BookScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BookScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    subtitle?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringListFilter, {nullable:true})
    authors?: InstanceType<typeof StringListFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    yearPublished?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pageCount?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class BookSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    pageCount?: true;
}

@ObjectType()
export class BookSumAggregate {
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
}

@InputType()
export class BookSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    pageCount?: `${SortOrder}`;
}

@InputType()
export class BookUncheckedCreateWithoutCoversInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierUncheckedCreateNestedManyWithoutBookInput>;
    @Field(() => UserBookUncheckedCreateNestedOneWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedCreateNestedOneWithoutBookInput>;
    @Field(() => RatingUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    ratings?: InstanceType<typeof RatingUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateWithoutIdentifiersInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => UserBookUncheckedCreateNestedOneWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedCreateNestedOneWithoutBookInput>;
    @Field(() => CoverUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    covers?: InstanceType<typeof CoverUncheckedCreateNestedManyWithoutBookInput>;
    @Field(() => RatingUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    ratings?: InstanceType<typeof RatingUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateWithoutRatingsInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierUncheckedCreateNestedManyWithoutBookInput>;
    @Field(() => UserBookUncheckedCreateNestedOneWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedCreateNestedOneWithoutBookInput>;
    @Field(() => CoverUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    covers?: InstanceType<typeof CoverUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierUncheckedCreateNestedManyWithoutBookInput>;
    @Field(() => CoverUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    covers?: InstanceType<typeof CoverUncheckedCreateNestedManyWithoutBookInput>;
    @Field(() => RatingUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    ratings?: InstanceType<typeof RatingUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierUncheckedCreateNestedManyWithoutBookInput>;
    @Field(() => UserBookUncheckedCreateNestedOneWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedCreateNestedOneWithoutBookInput>;
    @Field(() => CoverUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    covers?: InstanceType<typeof CoverUncheckedCreateNestedManyWithoutBookInput>;
    @Field(() => RatingUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    ratings?: InstanceType<typeof RatingUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
}

@InputType()
export class BookUncheckedUpdateWithoutCoversInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierUncheckedUpdateManyWithoutBookNestedInput>;
    @Field(() => UserBookUncheckedUpdateOneWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedUpdateOneWithoutBookNestedInput>;
    @Field(() => RatingUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    ratings?: InstanceType<typeof RatingUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUncheckedUpdateWithoutIdentifiersInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => UserBookUncheckedUpdateOneWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedUpdateOneWithoutBookNestedInput>;
    @Field(() => CoverUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    covers?: InstanceType<typeof CoverUncheckedUpdateManyWithoutBookNestedInput>;
    @Field(() => RatingUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    ratings?: InstanceType<typeof RatingUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUncheckedUpdateWithoutRatingsInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierUncheckedUpdateManyWithoutBookNestedInput>;
    @Field(() => UserBookUncheckedUpdateOneWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedUpdateOneWithoutBookNestedInput>;
    @Field(() => CoverUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    covers?: InstanceType<typeof CoverUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUncheckedUpdateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierUncheckedUpdateManyWithoutBookNestedInput>;
    @Field(() => CoverUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    covers?: InstanceType<typeof CoverUncheckedUpdateManyWithoutBookNestedInput>;
    @Field(() => RatingUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    ratings?: InstanceType<typeof RatingUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierUncheckedUpdateManyWithoutBookNestedInput>;
    @Field(() => UserBookUncheckedUpdateOneWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedUpdateOneWithoutBookNestedInput>;
    @Field(() => CoverUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    covers?: InstanceType<typeof CoverUncheckedUpdateManyWithoutBookNestedInput>;
    @Field(() => RatingUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    ratings?: InstanceType<typeof RatingUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
}

@InputType()
export class BookUpdateOneRequiredWithoutUserBookNestedInput {
    @Field(() => BookCreateWithoutUserBookInput, {nullable:true})
    @Type(() => BookCreateWithoutUserBookInput)
    create?: InstanceType<typeof BookCreateWithoutUserBookInput>;
    @Field(() => BookCreateOrConnectWithoutUserBookInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutUserBookInput>;
    @Field(() => BookUpsertWithoutUserBookInput, {nullable:true})
    @Type(() => BookUpsertWithoutUserBookInput)
    upsert?: InstanceType<typeof BookUpsertWithoutUserBookInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => BookUpdateToOneWithWhereWithoutUserBookInput, {nullable:true})
    @Type(() => BookUpdateToOneWithWhereWithoutUserBookInput)
    update?: InstanceType<typeof BookUpdateToOneWithWhereWithoutUserBookInput>;
}

@InputType()
export class BookUpdateOneWithoutCoversNestedInput {
    @Field(() => BookCreateWithoutCoversInput, {nullable:true})
    @Type(() => BookCreateWithoutCoversInput)
    create?: InstanceType<typeof BookCreateWithoutCoversInput>;
    @Field(() => BookCreateOrConnectWithoutCoversInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutCoversInput)
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutCoversInput>;
    @Field(() => BookUpsertWithoutCoversInput, {nullable:true})
    @Type(() => BookUpsertWithoutCoversInput)
    upsert?: InstanceType<typeof BookUpsertWithoutCoversInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    disconnect?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    delete?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => BookUpdateToOneWithWhereWithoutCoversInput, {nullable:true})
    @Type(() => BookUpdateToOneWithWhereWithoutCoversInput)
    update?: InstanceType<typeof BookUpdateToOneWithWhereWithoutCoversInput>;
}

@InputType()
export class BookUpdateOneWithoutIdentifiersNestedInput {
    @Field(() => BookCreateWithoutIdentifiersInput, {nullable:true})
    @Type(() => BookCreateWithoutIdentifiersInput)
    create?: InstanceType<typeof BookCreateWithoutIdentifiersInput>;
    @Field(() => BookCreateOrConnectWithoutIdentifiersInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutIdentifiersInput)
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutIdentifiersInput>;
    @Field(() => BookUpsertWithoutIdentifiersInput, {nullable:true})
    @Type(() => BookUpsertWithoutIdentifiersInput)
    upsert?: InstanceType<typeof BookUpsertWithoutIdentifiersInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    disconnect?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    delete?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => BookUpdateToOneWithWhereWithoutIdentifiersInput, {nullable:true})
    @Type(() => BookUpdateToOneWithWhereWithoutIdentifiersInput)
    update?: InstanceType<typeof BookUpdateToOneWithWhereWithoutIdentifiersInput>;
}

@InputType()
export class BookUpdateOneWithoutRatingsNestedInput {
    @Field(() => BookCreateWithoutRatingsInput, {nullable:true})
    @Type(() => BookCreateWithoutRatingsInput)
    create?: InstanceType<typeof BookCreateWithoutRatingsInput>;
    @Field(() => BookCreateOrConnectWithoutRatingsInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutRatingsInput)
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutRatingsInput>;
    @Field(() => BookUpsertWithoutRatingsInput, {nullable:true})
    @Type(() => BookUpsertWithoutRatingsInput)
    upsert?: InstanceType<typeof BookUpsertWithoutRatingsInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    disconnect?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    delete?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => BookUpdateToOneWithWhereWithoutRatingsInput, {nullable:true})
    @Type(() => BookUpdateToOneWithWhereWithoutRatingsInput)
    update?: InstanceType<typeof BookUpdateToOneWithWhereWithoutRatingsInput>;
}

@InputType()
export class BookUpdateToOneWithWhereWithoutCoversInput {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookUpdateWithoutCoversInput, {nullable:false})
    @Type(() => BookUpdateWithoutCoversInput)
    data!: InstanceType<typeof BookUpdateWithoutCoversInput>;
}

@InputType()
export class BookUpdateToOneWithWhereWithoutIdentifiersInput {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookUpdateWithoutIdentifiersInput, {nullable:false})
    @Type(() => BookUpdateWithoutIdentifiersInput)
    data!: InstanceType<typeof BookUpdateWithoutIdentifiersInput>;
}

@InputType()
export class BookUpdateToOneWithWhereWithoutRatingsInput {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookUpdateWithoutRatingsInput, {nullable:false})
    @Type(() => BookUpdateWithoutRatingsInput)
    data!: InstanceType<typeof BookUpdateWithoutRatingsInput>;
}

@InputType()
export class BookUpdateToOneWithWhereWithoutUserBookInput {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookUpdateWithoutUserBookInput, {nullable:false})
    @Type(() => BookUpdateWithoutUserBookInput)
    data!: InstanceType<typeof BookUpdateWithoutUserBookInput>;
}

@InputType()
export class BookUpdateWithoutCoversInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierUpdateManyWithoutBookNestedInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierUpdateManyWithoutBookNestedInput>;
    @Field(() => UserBookUpdateOneWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneWithoutBookNestedInput>;
    @Field(() => RatingUpdateManyWithoutBookNestedInput, {nullable:true})
    ratings?: InstanceType<typeof RatingUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUpdateWithoutIdentifiersInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => UserBookUpdateOneWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneWithoutBookNestedInput>;
    @Field(() => CoverUpdateManyWithoutBookNestedInput, {nullable:true})
    covers?: InstanceType<typeof CoverUpdateManyWithoutBookNestedInput>;
    @Field(() => RatingUpdateManyWithoutBookNestedInput, {nullable:true})
    ratings?: InstanceType<typeof RatingUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUpdateWithoutRatingsInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierUpdateManyWithoutBookNestedInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierUpdateManyWithoutBookNestedInput>;
    @Field(() => UserBookUpdateOneWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneWithoutBookNestedInput>;
    @Field(() => CoverUpdateManyWithoutBookNestedInput, {nullable:true})
    covers?: InstanceType<typeof CoverUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUpdateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierUpdateManyWithoutBookNestedInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierUpdateManyWithoutBookNestedInput>;
    @Field(() => CoverUpdateManyWithoutBookNestedInput, {nullable:true})
    covers?: InstanceType<typeof CoverUpdateManyWithoutBookNestedInput>;
    @Field(() => RatingUpdateManyWithoutBookNestedInput, {nullable:true})
    ratings?: InstanceType<typeof RatingUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    subtitle?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsString()
    authors?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    yearPublished?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => IdentifierUpdateManyWithoutBookNestedInput, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierUpdateManyWithoutBookNestedInput>;
    @Field(() => UserBookUpdateOneWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneWithoutBookNestedInput>;
    @Field(() => CoverUpdateManyWithoutBookNestedInput, {nullable:true})
    covers?: InstanceType<typeof CoverUpdateManyWithoutBookNestedInput>;
    @Field(() => RatingUpdateManyWithoutBookNestedInput, {nullable:true})
    ratings?: InstanceType<typeof RatingUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUpdateauthorsInput {
    @Field(() => [String], {nullable:true})
    set?: Array<string>;
    @Field(() => [String], {nullable:true})
    push?: Array<string>;
}

@InputType()
export class BookUpsertWithoutCoversInput {
    @Field(() => BookUpdateWithoutCoversInput, {nullable:false})
    @Type(() => BookUpdateWithoutCoversInput)
    update!: InstanceType<typeof BookUpdateWithoutCoversInput>;
    @Field(() => BookCreateWithoutCoversInput, {nullable:false})
    @Type(() => BookCreateWithoutCoversInput)
    create!: InstanceType<typeof BookCreateWithoutCoversInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: InstanceType<typeof BookWhereInput>;
}

@InputType()
export class BookUpsertWithoutIdentifiersInput {
    @Field(() => BookUpdateWithoutIdentifiersInput, {nullable:false})
    @Type(() => BookUpdateWithoutIdentifiersInput)
    update!: InstanceType<typeof BookUpdateWithoutIdentifiersInput>;
    @Field(() => BookCreateWithoutIdentifiersInput, {nullable:false})
    @Type(() => BookCreateWithoutIdentifiersInput)
    create!: InstanceType<typeof BookCreateWithoutIdentifiersInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: InstanceType<typeof BookWhereInput>;
}

@InputType()
export class BookUpsertWithoutRatingsInput {
    @Field(() => BookUpdateWithoutRatingsInput, {nullable:false})
    @Type(() => BookUpdateWithoutRatingsInput)
    update!: InstanceType<typeof BookUpdateWithoutRatingsInput>;
    @Field(() => BookCreateWithoutRatingsInput, {nullable:false})
    @Type(() => BookCreateWithoutRatingsInput)
    create!: InstanceType<typeof BookCreateWithoutRatingsInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: InstanceType<typeof BookWhereInput>;
}

@InputType()
export class BookUpsertWithoutUserBookInput {
    @Field(() => BookUpdateWithoutUserBookInput, {nullable:false})
    @Type(() => BookUpdateWithoutUserBookInput)
    update!: InstanceType<typeof BookUpdateWithoutUserBookInput>;
    @Field(() => BookCreateWithoutUserBookInput, {nullable:false})
    @Type(() => BookCreateWithoutUserBookInput)
    create!: InstanceType<typeof BookCreateWithoutUserBookInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: InstanceType<typeof BookWhereInput>;
}

@InputType()
export class BookWhereUniqueInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => [BookWhereInput], {nullable:true})
    AND?: Array<BookWhereInput>;
    @Field(() => [BookWhereInput], {nullable:true})
    OR?: Array<BookWhereInput>;
    @Field(() => [BookWhereInput], {nullable:true})
    NOT?: Array<BookWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    subtitle?: InstanceType<typeof StringFilter>;
    @Field(() => StringListFilter, {nullable:true})
    authors?: InstanceType<typeof StringListFilter>;
    @Field(() => StringFilter, {nullable:true})
    yearPublished?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    pageCount?: InstanceType<typeof IntFilter>;
    @Field(() => IdentifierListRelationFilter, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierListRelationFilter>;
    @Field(() => UserBookScalarRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookScalarRelationFilter>;
    @Field(() => CoverListRelationFilter, {nullable:true})
    covers?: InstanceType<typeof CoverListRelationFilter>;
    @Field(() => RatingListRelationFilter, {nullable:true})
    ratings?: InstanceType<typeof RatingListRelationFilter>;
}

@InputType()
export class BookWhereInput {
    @Field(() => [BookWhereInput], {nullable:true})
    AND?: Array<BookWhereInput>;
    @Field(() => [BookWhereInput], {nullable:true})
    OR?: Array<BookWhereInput>;
    @Field(() => [BookWhereInput], {nullable:true})
    NOT?: Array<BookWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    subtitle?: InstanceType<typeof StringFilter>;
    @Field(() => StringListFilter, {nullable:true})
    authors?: InstanceType<typeof StringListFilter>;
    @Field(() => StringFilter, {nullable:true})
    yearPublished?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    pageCount?: InstanceType<typeof IntFilter>;
    @Field(() => IdentifierListRelationFilter, {nullable:true})
    identifiers?: InstanceType<typeof IdentifierListRelationFilter>;
    @Field(() => UserBookScalarRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookScalarRelationFilter>;
    @Field(() => CoverListRelationFilter, {nullable:true})
    covers?: InstanceType<typeof CoverListRelationFilter>;
    @Field(() => RatingListRelationFilter, {nullable:true})
    ratings?: InstanceType<typeof RatingListRelationFilter>;
}

@ObjectType()
export class Book {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    subtitle!: string | null;
    @Field(() => [String], {nullable:true})
    authors!: Array<string>;
    @Field(() => String, {nullable:true})
    yearPublished!: string | null;
    @Field(() => Int, {nullable:true})
    pageCount!: number | null;
    @Field(() => [Identifier], {nullable:true})
    identifiers?: Array<Identifier>;
    @Field(() => UserBook, {nullable:true})
    userBook?: InstanceType<typeof UserBook> | null;
    @Field(() => [Cover], {nullable:true})
    covers?: Array<Cover>;
    @Field(() => [Rating], {nullable:true})
    ratings?: Array<Rating>;
    @Field(() => BookCount, {nullable:false})
    _count?: InstanceType<typeof BookCount>;
}

@ArgsType()
export class CreateManyBookArgs {
    @Field(() => [BookCreateManyInput], {nullable:false})
    @Type(() => BookCreateManyInput)
    @ValidateNested()
    data!: Array<BookCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneBookArgs {
    @Field(() => BookCreateInput, {nullable:false})
    @Type(() => BookCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof BookCreateInput>;
}

@ArgsType()
export class DeleteManyBookArgs {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneBookArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
}

@ArgsType()
export class FindFirstBookOrThrowArgs {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithRelationInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BookScalarFieldEnum], {nullable:true})
    distinct?: Array<`${BookScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstBookArgs {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithRelationInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BookScalarFieldEnum], {nullable:true})
    distinct?: Array<`${BookScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyBookArgs {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => [BookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithRelationInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BookScalarFieldEnum], {nullable:true})
    distinct?: Array<`${BookScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueBookOrThrowArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
}

@ArgsType()
export class FindUniqueBookArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
}

@ArgsType()
export class UpdateManyBookArgs {
    @Field(() => BookUpdateManyMutationInput, {nullable:false})
    @Type(() => BookUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof BookUpdateManyMutationInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneBookArgs {
    @Field(() => BookUpdateInput, {nullable:false})
    @Type(() => BookUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof BookUpdateInput>;
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
}

@ArgsType()
export class UpsertOneBookArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'slug'>;
    @Field(() => BookCreateInput, {nullable:false})
    @Type(() => BookCreateInput)
    create!: InstanceType<typeof BookCreateInput>;
    @Field(() => BookUpdateInput, {nullable:false})
    @Type(() => BookUpdateInput)
    update!: InstanceType<typeof BookUpdateInput>;
}

@ObjectType()
export class AggregateCover {
    @Field(() => CoverCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CoverCountAggregate>;
    @Field(() => CoverMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CoverMinAggregate>;
    @Field(() => CoverMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CoverMaxAggregate>;
}

@ArgsType()
export class CoverAggregateArgs {
    @Field(() => CoverWhereInput, {nullable:true})
    @Type(() => CoverWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CoverWhereInput>;
    @Field(() => [CoverOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CoverOrderByWithRelationInput>;
    @Field(() => CoverWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CoverCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CoverCountAggregateInput>;
    @Field(() => CoverMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CoverMinAggregateInput>;
    @Field(() => CoverMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CoverMaxAggregateInput>;
}

@InputType()
export class CoverCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    url?: true;
    @Field(() => Boolean, {nullable:true})
    size?: true;
    @Field(() => Boolean, {nullable:true})
    source?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CoverCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    url!: number;
    @Field(() => Int, {nullable:false})
    size!: number;
    @Field(() => Int, {nullable:false})
    source!: number;
    @Field(() => Int, {nullable:false})
    bookId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CoverCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    size?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
}

@InputType()
export class CoverCreateManyBookInputEnvelope {
    @Field(() => [CoverCreateManyBookInput], {nullable:false})
    @Type(() => CoverCreateManyBookInput)
    data!: Array<CoverCreateManyBookInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CoverCreateManyBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => SIZE, {nullable:false})
    size!: `${SIZE}`;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
}

@InputType()
export class CoverCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => SIZE, {nullable:false})
    size!: `${SIZE}`;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class CoverCreateNestedManyWithoutBookInput {
    @Field(() => [CoverCreateWithoutBookInput], {nullable:true})
    @Type(() => CoverCreateWithoutBookInput)
    create?: Array<CoverCreateWithoutBookInput>;
    @Field(() => [CoverCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => CoverCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<CoverCreateOrConnectWithoutBookInput>;
    @Field(() => CoverCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => CoverCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof CoverCreateManyBookInputEnvelope>;
    @Field(() => [CoverWhereUniqueInput], {nullable:true})
    @Type(() => CoverWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>>;
}

@InputType()
export class CoverCreateOrConnectWithoutBookInput {
    @Field(() => CoverWhereUniqueInput, {nullable:false})
    @Type(() => CoverWhereUniqueInput)
    where!: Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>;
    @Field(() => CoverCreateWithoutBookInput, {nullable:false})
    @Type(() => CoverCreateWithoutBookInput)
    create!: InstanceType<typeof CoverCreateWithoutBookInput>;
}

@InputType()
export class CoverCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => SIZE, {nullable:false})
    size!: `${SIZE}`;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
}

@InputType()
export class CoverCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => SIZE, {nullable:false})
    size!: `${SIZE}`;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => BookCreateNestedOneWithoutCoversInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutCoversInput>;
}

@ArgsType()
export class CoverGroupByArgs {
    @Field(() => CoverWhereInput, {nullable:true})
    @Type(() => CoverWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CoverWhereInput>;
    @Field(() => [CoverOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CoverOrderByWithAggregationInput>;
    @Field(() => [CoverScalarFieldEnum], {nullable:false})
    by!: Array<`${CoverScalarFieldEnum}`>;
    @Field(() => CoverScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CoverScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CoverCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CoverCountAggregateInput>;
    @Field(() => CoverMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CoverMinAggregateInput>;
    @Field(() => CoverMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CoverMaxAggregateInput>;
}

@ObjectType()
export class CoverGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => SIZE, {nullable:false})
    size!: `${SIZE}`;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => CoverCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CoverCountAggregate>;
    @Field(() => CoverMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CoverMinAggregate>;
    @Field(() => CoverMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CoverMaxAggregate>;
}

@InputType()
export class CoverListRelationFilter {
    @Field(() => CoverWhereInput, {nullable:true})
    every?: InstanceType<typeof CoverWhereInput>;
    @Field(() => CoverWhereInput, {nullable:true})
    some?: InstanceType<typeof CoverWhereInput>;
    @Field(() => CoverWhereInput, {nullable:true})
    none?: InstanceType<typeof CoverWhereInput>;
}

@InputType()
export class CoverMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    url?: true;
    @Field(() => Boolean, {nullable:true})
    size?: true;
    @Field(() => Boolean, {nullable:true})
    source?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
}

@ObjectType()
export class CoverMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => SIZE, {nullable:true})
    size?: `${SIZE}`;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class CoverMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    size?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
}

@InputType()
export class CoverMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    url?: true;
    @Field(() => Boolean, {nullable:true})
    size?: true;
    @Field(() => Boolean, {nullable:true})
    source?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
}

@ObjectType()
export class CoverMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => SIZE, {nullable:true})
    size?: `${SIZE}`;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class CoverMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    size?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
}

@InputType()
export class CoverOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class CoverOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    size?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    bookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => CoverCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CoverCountOrderByAggregateInput>;
    @Field(() => CoverMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CoverMaxOrderByAggregateInput>;
    @Field(() => CoverMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CoverMinOrderByAggregateInput>;
}

@InputType()
export class CoverOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    size?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    bookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => BookOrderByWithRelationInput, {nullable:true})
    book?: InstanceType<typeof BookOrderByWithRelationInput>;
}

@InputType()
export class CoverScalarWhereWithAggregatesInput {
    @Field(() => [CoverScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CoverScalarWhereWithAggregatesInput>;
    @Field(() => [CoverScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CoverScalarWhereWithAggregatesInput>;
    @Field(() => [CoverScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CoverScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumSIZEWithAggregatesFilter, {nullable:true})
    size?: InstanceType<typeof EnumSIZEWithAggregatesFilter>;
    @Field(() => EnumSOURCEWithAggregatesFilter, {nullable:true})
    source?: InstanceType<typeof EnumSOURCEWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bookId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class CoverScalarWhereInput {
    @Field(() => [CoverScalarWhereInput], {nullable:true})
    AND?: Array<CoverScalarWhereInput>;
    @Field(() => [CoverScalarWhereInput], {nullable:true})
    OR?: Array<CoverScalarWhereInput>;
    @Field(() => [CoverScalarWhereInput], {nullable:true})
    NOT?: Array<CoverScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
    @Field(() => EnumSIZEFilter, {nullable:true})
    size?: InstanceType<typeof EnumSIZEFilter>;
    @Field(() => EnumSOURCEFilter, {nullable:true})
    source?: InstanceType<typeof EnumSOURCEFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class CoverUncheckedCreateNestedManyWithoutBookInput {
    @Field(() => [CoverCreateWithoutBookInput], {nullable:true})
    @Type(() => CoverCreateWithoutBookInput)
    create?: Array<CoverCreateWithoutBookInput>;
    @Field(() => [CoverCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => CoverCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<CoverCreateOrConnectWithoutBookInput>;
    @Field(() => CoverCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => CoverCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof CoverCreateManyBookInputEnvelope>;
    @Field(() => [CoverWhereUniqueInput], {nullable:true})
    @Type(() => CoverWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>>;
}

@InputType()
export class CoverUncheckedCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => SIZE, {nullable:false})
    size!: `${SIZE}`;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
}

@InputType()
export class CoverUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => SIZE, {nullable:false})
    size!: `${SIZE}`;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class CoverUncheckedUpdateManyWithoutBookNestedInput {
    @Field(() => [CoverCreateWithoutBookInput], {nullable:true})
    @Type(() => CoverCreateWithoutBookInput)
    create?: Array<CoverCreateWithoutBookInput>;
    @Field(() => [CoverCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => CoverCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<CoverCreateOrConnectWithoutBookInput>;
    @Field(() => [CoverUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => CoverUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<CoverUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => CoverCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => CoverCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof CoverCreateManyBookInputEnvelope>;
    @Field(() => [CoverWhereUniqueInput], {nullable:true})
    @Type(() => CoverWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>>;
    @Field(() => [CoverWhereUniqueInput], {nullable:true})
    @Type(() => CoverWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>>;
    @Field(() => [CoverWhereUniqueInput], {nullable:true})
    @Type(() => CoverWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>>;
    @Field(() => [CoverWhereUniqueInput], {nullable:true})
    @Type(() => CoverWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>>;
    @Field(() => [CoverUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => CoverUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<CoverUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [CoverUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => CoverUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<CoverUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [CoverScalarWhereInput], {nullable:true})
    @Type(() => CoverScalarWhereInput)
    deleteMany?: Array<CoverScalarWhereInput>;
}

@InputType()
export class CoverUncheckedUpdateManyWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => SIZE, {nullable:true})
    size?: `${SIZE}`;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
}

@InputType()
export class CoverUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => SIZE, {nullable:true})
    size?: `${SIZE}`;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class CoverUncheckedUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => SIZE, {nullable:true})
    size?: `${SIZE}`;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
}

@InputType()
export class CoverUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => SIZE, {nullable:true})
    size?: `${SIZE}`;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class CoverUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => SIZE, {nullable:true})
    size?: `${SIZE}`;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
}

@InputType()
export class CoverUpdateManyWithWhereWithoutBookInput {
    @Field(() => CoverScalarWhereInput, {nullable:false})
    @Type(() => CoverScalarWhereInput)
    where!: InstanceType<typeof CoverScalarWhereInput>;
    @Field(() => CoverUpdateManyMutationInput, {nullable:false})
    @Type(() => CoverUpdateManyMutationInput)
    data!: InstanceType<typeof CoverUpdateManyMutationInput>;
}

@InputType()
export class CoverUpdateManyWithoutBookNestedInput {
    @Field(() => [CoverCreateWithoutBookInput], {nullable:true})
    @Type(() => CoverCreateWithoutBookInput)
    create?: Array<CoverCreateWithoutBookInput>;
    @Field(() => [CoverCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => CoverCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<CoverCreateOrConnectWithoutBookInput>;
    @Field(() => [CoverUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => CoverUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<CoverUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => CoverCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => CoverCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof CoverCreateManyBookInputEnvelope>;
    @Field(() => [CoverWhereUniqueInput], {nullable:true})
    @Type(() => CoverWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>>;
    @Field(() => [CoverWhereUniqueInput], {nullable:true})
    @Type(() => CoverWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>>;
    @Field(() => [CoverWhereUniqueInput], {nullable:true})
    @Type(() => CoverWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>>;
    @Field(() => [CoverWhereUniqueInput], {nullable:true})
    @Type(() => CoverWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>>;
    @Field(() => [CoverUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => CoverUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<CoverUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [CoverUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => CoverUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<CoverUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [CoverScalarWhereInput], {nullable:true})
    @Type(() => CoverScalarWhereInput)
    deleteMany?: Array<CoverScalarWhereInput>;
}

@InputType()
export class CoverUpdateWithWhereUniqueWithoutBookInput {
    @Field(() => CoverWhereUniqueInput, {nullable:false})
    @Type(() => CoverWhereUniqueInput)
    where!: Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>;
    @Field(() => CoverUpdateWithoutBookInput, {nullable:false})
    @Type(() => CoverUpdateWithoutBookInput)
    data!: InstanceType<typeof CoverUpdateWithoutBookInput>;
}

@InputType()
export class CoverUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => SIZE, {nullable:true})
    size?: `${SIZE}`;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
}

@InputType()
export class CoverUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => SIZE, {nullable:true})
    size?: `${SIZE}`;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => BookUpdateOneWithoutCoversNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutCoversNestedInput>;
}

@InputType()
export class CoverUpsertWithWhereUniqueWithoutBookInput {
    @Field(() => CoverWhereUniqueInput, {nullable:false})
    @Type(() => CoverWhereUniqueInput)
    where!: Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>;
    @Field(() => CoverUpdateWithoutBookInput, {nullable:false})
    @Type(() => CoverUpdateWithoutBookInput)
    update!: InstanceType<typeof CoverUpdateWithoutBookInput>;
    @Field(() => CoverCreateWithoutBookInput, {nullable:false})
    @Type(() => CoverCreateWithoutBookInput)
    create!: InstanceType<typeof CoverCreateWithoutBookInput>;
}

@InputType()
export class CoverWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => [CoverWhereInput], {nullable:true})
    AND?: Array<CoverWhereInput>;
    @Field(() => [CoverWhereInput], {nullable:true})
    OR?: Array<CoverWhereInput>;
    @Field(() => [CoverWhereInput], {nullable:true})
    NOT?: Array<CoverWhereInput>;
    @Field(() => EnumSIZEFilter, {nullable:true})
    size?: InstanceType<typeof EnumSIZEFilter>;
    @Field(() => EnumSOURCEFilter, {nullable:true})
    source?: InstanceType<typeof EnumSOURCEFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookScalarRelationFilter>;
}

@InputType()
export class CoverWhereInput {
    @Field(() => [CoverWhereInput], {nullable:true})
    AND?: Array<CoverWhereInput>;
    @Field(() => [CoverWhereInput], {nullable:true})
    OR?: Array<CoverWhereInput>;
    @Field(() => [CoverWhereInput], {nullable:true})
    NOT?: Array<CoverWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
    @Field(() => EnumSIZEFilter, {nullable:true})
    size?: InstanceType<typeof EnumSIZEFilter>;
    @Field(() => EnumSOURCEFilter, {nullable:true})
    source?: InstanceType<typeof EnumSOURCEFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookScalarRelationFilter>;
}

@ObjectType()
export class Cover {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => SIZE, {nullable:false})
    size!: `${SIZE}`;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    bookId!: string | null;
    @Field(() => Book, {nullable:true})
    book?: InstanceType<typeof Book> | null;
}

@ArgsType()
export class CreateManyCoverArgs {
    @Field(() => [CoverCreateManyInput], {nullable:false})
    @Type(() => CoverCreateManyInput)
    @ValidateNested()
    data!: Array<CoverCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCoverArgs {
    @Field(() => CoverCreateInput, {nullable:false})
    @Type(() => CoverCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof CoverCreateInput>;
}

@ArgsType()
export class DeleteManyCoverArgs {
    @Field(() => CoverWhereInput, {nullable:true})
    @Type(() => CoverWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CoverWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneCoverArgs {
    @Field(() => CoverWhereUniqueInput, {nullable:false})
    @Type(() => CoverWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>;
}

@ArgsType()
export class FindFirstCoverOrThrowArgs {
    @Field(() => CoverWhereInput, {nullable:true})
    @Type(() => CoverWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CoverWhereInput>;
    @Field(() => [CoverOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CoverOrderByWithRelationInput>;
    @Field(() => CoverWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CoverScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CoverScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstCoverArgs {
    @Field(() => CoverWhereInput, {nullable:true})
    @Type(() => CoverWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CoverWhereInput>;
    @Field(() => [CoverOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CoverOrderByWithRelationInput>;
    @Field(() => CoverWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CoverScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CoverScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyCoverArgs {
    @Field(() => CoverWhereInput, {nullable:true})
    @Type(() => CoverWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CoverWhereInput>;
    @Field(() => [CoverOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CoverOrderByWithRelationInput>;
    @Field(() => CoverWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CoverScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CoverScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueCoverOrThrowArgs {
    @Field(() => CoverWhereUniqueInput, {nullable:false})
    @Type(() => CoverWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>;
}

@ArgsType()
export class FindUniqueCoverArgs {
    @Field(() => CoverWhereUniqueInput, {nullable:false})
    @Type(() => CoverWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>;
}

@ArgsType()
export class UpdateManyCoverArgs {
    @Field(() => CoverUpdateManyMutationInput, {nullable:false})
    @Type(() => CoverUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof CoverUpdateManyMutationInput>;
    @Field(() => CoverWhereInput, {nullable:true})
    @Type(() => CoverWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CoverWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneCoverArgs {
    @Field(() => CoverUpdateInput, {nullable:false})
    @Type(() => CoverUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof CoverUpdateInput>;
    @Field(() => CoverWhereUniqueInput, {nullable:false})
    @Type(() => CoverWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>;
}

@ArgsType()
export class UpsertOneCoverArgs {
    @Field(() => CoverWhereUniqueInput, {nullable:false})
    @Type(() => CoverWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CoverWhereUniqueInput, 'id' | 'url'>;
    @Field(() => CoverCreateInput, {nullable:false})
    @Type(() => CoverCreateInput)
    create!: InstanceType<typeof CoverCreateInput>;
    @Field(() => CoverUpdateInput, {nullable:false})
    @Type(() => CoverUpdateInput)
    update!: InstanceType<typeof CoverUpdateInput>;
}

@ObjectType()
export class AggregateIdentifier {
    @Field(() => IdentifierCountAggregate, {nullable:true})
    _count?: InstanceType<typeof IdentifierCountAggregate>;
    @Field(() => IdentifierMinAggregate, {nullable:true})
    _min?: InstanceType<typeof IdentifierMinAggregate>;
    @Field(() => IdentifierMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof IdentifierMaxAggregate>;
}

@ArgsType()
export class CreateManyIdentifierArgs {
    @Field(() => [IdentifierCreateManyInput], {nullable:false})
    @Type(() => IdentifierCreateManyInput)
    @ValidateNested()
    data!: Array<IdentifierCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneIdentifierArgs {
    @Field(() => IdentifierCreateInput, {nullable:false})
    @Type(() => IdentifierCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof IdentifierCreateInput>;
}

@ArgsType()
export class DeleteManyIdentifierArgs {
    @Field(() => IdentifierWhereInput, {nullable:true})
    @Type(() => IdentifierWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof IdentifierWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneIdentifierArgs {
    @Field(() => IdentifierWhereUniqueInput, {nullable:false})
    @Type(() => IdentifierWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstIdentifierOrThrowArgs {
    @Field(() => IdentifierWhereInput, {nullable:true})
    @Type(() => IdentifierWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof IdentifierWhereInput>;
    @Field(() => [IdentifierOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<IdentifierOrderByWithRelationInput>;
    @Field(() => IdentifierWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [IdentifierScalarFieldEnum], {nullable:true})
    distinct?: Array<`${IdentifierScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstIdentifierArgs {
    @Field(() => IdentifierWhereInput, {nullable:true})
    @Type(() => IdentifierWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof IdentifierWhereInput>;
    @Field(() => [IdentifierOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<IdentifierOrderByWithRelationInput>;
    @Field(() => IdentifierWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [IdentifierScalarFieldEnum], {nullable:true})
    distinct?: Array<`${IdentifierScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyIdentifierArgs {
    @Field(() => IdentifierWhereInput, {nullable:true})
    @Type(() => IdentifierWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof IdentifierWhereInput>;
    @Field(() => [IdentifierOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<IdentifierOrderByWithRelationInput>;
    @Field(() => IdentifierWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [IdentifierScalarFieldEnum], {nullable:true})
    distinct?: Array<`${IdentifierScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueIdentifierOrThrowArgs {
    @Field(() => IdentifierWhereUniqueInput, {nullable:false})
    @Type(() => IdentifierWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueIdentifierArgs {
    @Field(() => IdentifierWhereUniqueInput, {nullable:false})
    @Type(() => IdentifierWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>;
}

@ArgsType()
export class IdentifierAggregateArgs {
    @Field(() => IdentifierWhereInput, {nullable:true})
    @Type(() => IdentifierWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof IdentifierWhereInput>;
    @Field(() => [IdentifierOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<IdentifierOrderByWithRelationInput>;
    @Field(() => IdentifierWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => IdentifierCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof IdentifierCountAggregateInput>;
    @Field(() => IdentifierMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof IdentifierMinAggregateInput>;
    @Field(() => IdentifierMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof IdentifierMaxAggregateInput>;
}

@InputType()
export class IdentifierCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    source?: true;
    @Field(() => Boolean, {nullable:true})
    sourceId?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class IdentifierCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    source!: number;
    @Field(() => Int, {nullable:false})
    sourceId!: number;
    @Field(() => Int, {nullable:false})
    bookId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class IdentifierCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    sourceId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
}

@InputType()
export class IdentifierCreateManyBookInputEnvelope {
    @Field(() => [IdentifierCreateManyBookInput], {nullable:false})
    @Type(() => IdentifierCreateManyBookInput)
    data!: Array<IdentifierCreateManyBookInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class IdentifierCreateManyBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:false})
    @Validator.IsString()
    source!: `${SOURCE}`;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    sourceId!: string;
}

@InputType()
export class IdentifierCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:false})
    @Validator.IsString()
    source!: `${SOURCE}`;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    sourceId!: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class IdentifierCreateNestedManyWithoutBookInput {
    @Field(() => [IdentifierCreateWithoutBookInput], {nullable:true})
    @Type(() => IdentifierCreateWithoutBookInput)
    create?: Array<IdentifierCreateWithoutBookInput>;
    @Field(() => [IdentifierCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => IdentifierCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<IdentifierCreateOrConnectWithoutBookInput>;
    @Field(() => IdentifierCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => IdentifierCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof IdentifierCreateManyBookInputEnvelope>;
    @Field(() => [IdentifierWhereUniqueInput], {nullable:true})
    @Type(() => IdentifierWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>>;
}

@InputType()
export class IdentifierCreateOrConnectWithoutBookInput {
    @Field(() => IdentifierWhereUniqueInput, {nullable:false})
    @Type(() => IdentifierWhereUniqueInput)
    where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>;
    @Field(() => IdentifierCreateWithoutBookInput, {nullable:false})
    @Type(() => IdentifierCreateWithoutBookInput)
    create!: InstanceType<typeof IdentifierCreateWithoutBookInput>;
}

@InputType()
export class IdentifierCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:false})
    @Validator.IsString()
    source!: `${SOURCE}`;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    sourceId!: string;
}

@InputType()
export class IdentifierCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:false})
    @Validator.IsString()
    source!: `${SOURCE}`;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    sourceId!: string;
    @Field(() => BookCreateNestedOneWithoutIdentifiersInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutIdentifiersInput>;
}

@ArgsType()
export class IdentifierGroupByArgs {
    @Field(() => IdentifierWhereInput, {nullable:true})
    @Type(() => IdentifierWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof IdentifierWhereInput>;
    @Field(() => [IdentifierOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<IdentifierOrderByWithAggregationInput>;
    @Field(() => [IdentifierScalarFieldEnum], {nullable:false})
    by!: Array<`${IdentifierScalarFieldEnum}`>;
    @Field(() => IdentifierScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof IdentifierScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => IdentifierCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof IdentifierCountAggregateInput>;
    @Field(() => IdentifierMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof IdentifierMinAggregateInput>;
    @Field(() => IdentifierMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof IdentifierMaxAggregateInput>;
}

@ObjectType()
export class IdentifierGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => SOURCE, {nullable:false})
    @Validator.IsString()
    source!: `${SOURCE}`;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    sourceId!: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => IdentifierCountAggregate, {nullable:true})
    _count?: InstanceType<typeof IdentifierCountAggregate>;
    @Field(() => IdentifierMinAggregate, {nullable:true})
    _min?: InstanceType<typeof IdentifierMinAggregate>;
    @Field(() => IdentifierMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof IdentifierMaxAggregate>;
}

@InputType()
export class IdentifierListRelationFilter {
    @Field(() => IdentifierWhereInput, {nullable:true})
    every?: InstanceType<typeof IdentifierWhereInput>;
    @Field(() => IdentifierWhereInput, {nullable:true})
    some?: InstanceType<typeof IdentifierWhereInput>;
    @Field(() => IdentifierWhereInput, {nullable:true})
    none?: InstanceType<typeof IdentifierWhereInput>;
}

@InputType()
export class IdentifierMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    source?: true;
    @Field(() => Boolean, {nullable:true})
    sourceId?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
}

@ObjectType()
export class IdentifierMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:true})
    @Validator.IsString()
    source?: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    sourceId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class IdentifierMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    sourceId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
}

@InputType()
export class IdentifierMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    source?: true;
    @Field(() => Boolean, {nullable:true})
    sourceId?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
}

@ObjectType()
export class IdentifierMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:true})
    @Validator.IsString()
    source?: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    sourceId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class IdentifierMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    sourceId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
}

@InputType()
export class IdentifierOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class IdentifierOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    sourceId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    bookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => IdentifierCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof IdentifierCountOrderByAggregateInput>;
    @Field(() => IdentifierMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof IdentifierMaxOrderByAggregateInput>;
    @Field(() => IdentifierMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof IdentifierMinOrderByAggregateInput>;
}

@InputType()
export class IdentifierOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    sourceId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    bookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => BookOrderByWithRelationInput, {nullable:true})
    book?: InstanceType<typeof BookOrderByWithRelationInput>;
}

@InputType()
export class IdentifierScalarWhereWithAggregatesInput {
    @Field(() => [IdentifierScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<IdentifierScalarWhereWithAggregatesInput>;
    @Field(() => [IdentifierScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<IdentifierScalarWhereWithAggregatesInput>;
    @Field(() => [IdentifierScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<IdentifierScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumSOURCEWithAggregatesFilter, {nullable:true})
    source?: InstanceType<typeof EnumSOURCEWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sourceId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bookId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class IdentifierScalarWhereInput {
    @Field(() => [IdentifierScalarWhereInput], {nullable:true})
    AND?: Array<IdentifierScalarWhereInput>;
    @Field(() => [IdentifierScalarWhereInput], {nullable:true})
    OR?: Array<IdentifierScalarWhereInput>;
    @Field(() => [IdentifierScalarWhereInput], {nullable:true})
    NOT?: Array<IdentifierScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => EnumSOURCEFilter, {nullable:true})
    source?: InstanceType<typeof EnumSOURCEFilter>;
    @Field(() => StringFilter, {nullable:true})
    sourceId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class IdentifierUncheckedCreateNestedManyWithoutBookInput {
    @Field(() => [IdentifierCreateWithoutBookInput], {nullable:true})
    @Type(() => IdentifierCreateWithoutBookInput)
    create?: Array<IdentifierCreateWithoutBookInput>;
    @Field(() => [IdentifierCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => IdentifierCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<IdentifierCreateOrConnectWithoutBookInput>;
    @Field(() => IdentifierCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => IdentifierCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof IdentifierCreateManyBookInputEnvelope>;
    @Field(() => [IdentifierWhereUniqueInput], {nullable:true})
    @Type(() => IdentifierWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>>;
}

@InputType()
export class IdentifierUncheckedCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:false})
    @Validator.IsString()
    source!: `${SOURCE}`;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    sourceId!: string;
}

@InputType()
export class IdentifierUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:false})
    @Validator.IsString()
    source!: `${SOURCE}`;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    sourceId!: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class IdentifierUncheckedUpdateManyWithoutBookNestedInput {
    @Field(() => [IdentifierCreateWithoutBookInput], {nullable:true})
    @Type(() => IdentifierCreateWithoutBookInput)
    create?: Array<IdentifierCreateWithoutBookInput>;
    @Field(() => [IdentifierCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => IdentifierCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<IdentifierCreateOrConnectWithoutBookInput>;
    @Field(() => [IdentifierUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => IdentifierUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<IdentifierUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => IdentifierCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => IdentifierCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof IdentifierCreateManyBookInputEnvelope>;
    @Field(() => [IdentifierWhereUniqueInput], {nullable:true})
    @Type(() => IdentifierWhereUniqueInput)
    set?: Array<Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>>;
    @Field(() => [IdentifierWhereUniqueInput], {nullable:true})
    @Type(() => IdentifierWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>>;
    @Field(() => [IdentifierWhereUniqueInput], {nullable:true})
    @Type(() => IdentifierWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>>;
    @Field(() => [IdentifierWhereUniqueInput], {nullable:true})
    @Type(() => IdentifierWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>>;
    @Field(() => [IdentifierUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => IdentifierUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<IdentifierUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [IdentifierUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => IdentifierUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<IdentifierUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [IdentifierScalarWhereInput], {nullable:true})
    @Type(() => IdentifierScalarWhereInput)
    deleteMany?: Array<IdentifierScalarWhereInput>;
}

@InputType()
export class IdentifierUncheckedUpdateManyWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:true})
    @Validator.IsString()
    source?: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    sourceId?: string;
}

@InputType()
export class IdentifierUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:true})
    @Validator.IsString()
    source?: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    sourceId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class IdentifierUncheckedUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:true})
    @Validator.IsString()
    source?: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    sourceId?: string;
}

@InputType()
export class IdentifierUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:true})
    @Validator.IsString()
    source?: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    sourceId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class IdentifierUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:true})
    @Validator.IsString()
    source?: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    sourceId?: string;
}

@InputType()
export class IdentifierUpdateManyWithWhereWithoutBookInput {
    @Field(() => IdentifierScalarWhereInput, {nullable:false})
    @Type(() => IdentifierScalarWhereInput)
    where!: InstanceType<typeof IdentifierScalarWhereInput>;
    @Field(() => IdentifierUpdateManyMutationInput, {nullable:false})
    @Type(() => IdentifierUpdateManyMutationInput)
    data!: InstanceType<typeof IdentifierUpdateManyMutationInput>;
}

@InputType()
export class IdentifierUpdateManyWithoutBookNestedInput {
    @Field(() => [IdentifierCreateWithoutBookInput], {nullable:true})
    @Type(() => IdentifierCreateWithoutBookInput)
    create?: Array<IdentifierCreateWithoutBookInput>;
    @Field(() => [IdentifierCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => IdentifierCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<IdentifierCreateOrConnectWithoutBookInput>;
    @Field(() => [IdentifierUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => IdentifierUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<IdentifierUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => IdentifierCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => IdentifierCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof IdentifierCreateManyBookInputEnvelope>;
    @Field(() => [IdentifierWhereUniqueInput], {nullable:true})
    @Type(() => IdentifierWhereUniqueInput)
    set?: Array<Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>>;
    @Field(() => [IdentifierWhereUniqueInput], {nullable:true})
    @Type(() => IdentifierWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>>;
    @Field(() => [IdentifierWhereUniqueInput], {nullable:true})
    @Type(() => IdentifierWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>>;
    @Field(() => [IdentifierWhereUniqueInput], {nullable:true})
    @Type(() => IdentifierWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>>;
    @Field(() => [IdentifierUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => IdentifierUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<IdentifierUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [IdentifierUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => IdentifierUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<IdentifierUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [IdentifierScalarWhereInput], {nullable:true})
    @Type(() => IdentifierScalarWhereInput)
    deleteMany?: Array<IdentifierScalarWhereInput>;
}

@InputType()
export class IdentifierUpdateWithWhereUniqueWithoutBookInput {
    @Field(() => IdentifierWhereUniqueInput, {nullable:false})
    @Type(() => IdentifierWhereUniqueInput)
    where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>;
    @Field(() => IdentifierUpdateWithoutBookInput, {nullable:false})
    @Type(() => IdentifierUpdateWithoutBookInput)
    data!: InstanceType<typeof IdentifierUpdateWithoutBookInput>;
}

@InputType()
export class IdentifierUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:true})
    @Validator.IsString()
    source?: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    sourceId?: string;
}

@InputType()
export class IdentifierUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => SOURCE, {nullable:true})
    @Validator.IsString()
    source?: `${SOURCE}`;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    sourceId?: string;
    @Field(() => BookUpdateOneWithoutIdentifiersNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutIdentifiersNestedInput>;
}

@InputType()
export class IdentifierUpsertWithWhereUniqueWithoutBookInput {
    @Field(() => IdentifierWhereUniqueInput, {nullable:false})
    @Type(() => IdentifierWhereUniqueInput)
    where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>;
    @Field(() => IdentifierUpdateWithoutBookInput, {nullable:false})
    @Type(() => IdentifierUpdateWithoutBookInput)
    update!: InstanceType<typeof IdentifierUpdateWithoutBookInput>;
    @Field(() => IdentifierCreateWithoutBookInput, {nullable:false})
    @Type(() => IdentifierCreateWithoutBookInput)
    create!: InstanceType<typeof IdentifierCreateWithoutBookInput>;
}

@InputType()
export class IdentifierWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [IdentifierWhereInput], {nullable:true})
    AND?: Array<IdentifierWhereInput>;
    @Field(() => [IdentifierWhereInput], {nullable:true})
    OR?: Array<IdentifierWhereInput>;
    @Field(() => [IdentifierWhereInput], {nullable:true})
    NOT?: Array<IdentifierWhereInput>;
    @Field(() => EnumSOURCEFilter, {nullable:true})
    source?: InstanceType<typeof EnumSOURCEFilter>;
    @Field(() => StringFilter, {nullable:true})
    sourceId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookScalarRelationFilter>;
}

@InputType()
export class IdentifierWhereInput {
    @Field(() => [IdentifierWhereInput], {nullable:true})
    AND?: Array<IdentifierWhereInput>;
    @Field(() => [IdentifierWhereInput], {nullable:true})
    OR?: Array<IdentifierWhereInput>;
    @Field(() => [IdentifierWhereInput], {nullable:true})
    NOT?: Array<IdentifierWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => EnumSOURCEFilter, {nullable:true})
    source?: InstanceType<typeof EnumSOURCEFilter>;
    @Field(() => StringFilter, {nullable:true})
    sourceId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookScalarRelationFilter>;
}

@ObjectType()
export class Identifier {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => String, {nullable:false})
    sourceId!: string;
    @Field(() => String, {nullable:true})
    bookId!: string | null;
    @Field(() => Book, {nullable:true})
    book?: InstanceType<typeof Book> | null;
}

@ArgsType()
export class UpdateManyIdentifierArgs {
    @Field(() => IdentifierUpdateManyMutationInput, {nullable:false})
    @Type(() => IdentifierUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof IdentifierUpdateManyMutationInput>;
    @Field(() => IdentifierWhereInput, {nullable:true})
    @Type(() => IdentifierWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof IdentifierWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneIdentifierArgs {
    @Field(() => IdentifierUpdateInput, {nullable:false})
    @Type(() => IdentifierUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof IdentifierUpdateInput>;
    @Field(() => IdentifierWhereUniqueInput, {nullable:false})
    @Type(() => IdentifierWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneIdentifierArgs {
    @Field(() => IdentifierWhereUniqueInput, {nullable:false})
    @Type(() => IdentifierWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<IdentifierWhereUniqueInput, 'id'>;
    @Field(() => IdentifierCreateInput, {nullable:false})
    @Type(() => IdentifierCreateInput)
    create!: InstanceType<typeof IdentifierCreateInput>;
    @Field(() => IdentifierUpdateInput, {nullable:false})
    @Type(() => IdentifierUpdateInput)
    update!: InstanceType<typeof IdentifierUpdateInput>;
}

@ObjectType()
export class AggregatePasswordResetToken {
    @Field(() => PasswordResetTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PasswordResetTokenCountAggregate>;
    @Field(() => PasswordResetTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PasswordResetTokenMinAggregate>;
    @Field(() => PasswordResetTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PasswordResetTokenMaxAggregate>;
}

@ArgsType()
export class CreateManyPasswordResetTokenArgs {
    @Field(() => [PasswordResetTokenCreateManyInput], {nullable:false})
    @Type(() => PasswordResetTokenCreateManyInput)
    @ValidateNested()
    data!: Array<PasswordResetTokenCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePasswordResetTokenArgs {
    @Field(() => PasswordResetTokenCreateInput, {nullable:false})
    @Type(() => PasswordResetTokenCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof PasswordResetTokenCreateInput>;
}

@ArgsType()
export class DeleteManyPasswordResetTokenArgs {
    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    @Type(() => PasswordResetTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PasswordResetTokenWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOnePasswordResetTokenArgs {
    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
}

@ArgsType()
export class FindFirstPasswordResetTokenOrThrowArgs {
    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    @Type(() => PasswordResetTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PasswordResetTokenWhereInput>;
    @Field(() => [PasswordResetTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PasswordResetTokenOrderByWithRelationInput>;
    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PasswordResetTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PasswordResetTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstPasswordResetTokenArgs {
    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    @Type(() => PasswordResetTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PasswordResetTokenWhereInput>;
    @Field(() => [PasswordResetTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PasswordResetTokenOrderByWithRelationInput>;
    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PasswordResetTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PasswordResetTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyPasswordResetTokenArgs {
    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    @Type(() => PasswordResetTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PasswordResetTokenWhereInput>;
    @Field(() => [PasswordResetTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PasswordResetTokenOrderByWithRelationInput>;
    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PasswordResetTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PasswordResetTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniquePasswordResetTokenOrThrowArgs {
    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
}

@ArgsType()
export class FindUniquePasswordResetTokenArgs {
    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
}

@ArgsType()
export class PasswordResetTokenAggregateArgs {
    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    @Type(() => PasswordResetTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PasswordResetTokenWhereInput>;
    @Field(() => [PasswordResetTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PasswordResetTokenOrderByWithRelationInput>;
    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PasswordResetTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PasswordResetTokenCountAggregateInput>;
    @Field(() => PasswordResetTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PasswordResetTokenMinAggregateInput>;
    @Field(() => PasswordResetTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PasswordResetTokenMaxAggregateInput>;
}

@InputType()
export class PasswordResetTokenCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PasswordResetTokenCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    token!: number;
    @Field(() => Int, {nullable:false})
    expires!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PasswordResetTokenCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;
}

@InputType()
export class PasswordResetTokenCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class PasswordResetTokenCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class PasswordResetTokenEmailTokenCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    token!: string;
}

@ArgsType()
export class PasswordResetTokenGroupByArgs {
    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    @Type(() => PasswordResetTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PasswordResetTokenWhereInput>;
    @Field(() => [PasswordResetTokenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PasswordResetTokenOrderByWithAggregationInput>;
    @Field(() => [PasswordResetTokenScalarFieldEnum], {nullable:false})
    by!: Array<`${PasswordResetTokenScalarFieldEnum}`>;
    @Field(() => PasswordResetTokenScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PasswordResetTokenScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PasswordResetTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PasswordResetTokenCountAggregateInput>;
    @Field(() => PasswordResetTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PasswordResetTokenMinAggregateInput>;
    @Field(() => PasswordResetTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PasswordResetTokenMaxAggregateInput>;
}

@ObjectType()
export class PasswordResetTokenGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
    @Field(() => PasswordResetTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PasswordResetTokenCountAggregate>;
    @Field(() => PasswordResetTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PasswordResetTokenMinAggregate>;
    @Field(() => PasswordResetTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PasswordResetTokenMaxAggregate>;
}

@InputType()
export class PasswordResetTokenMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
}

@ObjectType()
export class PasswordResetTokenMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class PasswordResetTokenMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;
}

@InputType()
export class PasswordResetTokenMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
}

@ObjectType()
export class PasswordResetTokenMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class PasswordResetTokenMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;
}

@InputType()
export class PasswordResetTokenOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;
    @Field(() => PasswordResetTokenCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PasswordResetTokenCountOrderByAggregateInput>;
    @Field(() => PasswordResetTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PasswordResetTokenMaxOrderByAggregateInput>;
    @Field(() => PasswordResetTokenMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PasswordResetTokenMinOrderByAggregateInput>;
}

@InputType()
export class PasswordResetTokenOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;
}

@InputType()
export class PasswordResetTokenScalarWhereWithAggregatesInput {
    @Field(() => [PasswordResetTokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PasswordResetTokenScalarWhereWithAggregatesInput>;
    @Field(() => [PasswordResetTokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PasswordResetTokenScalarWhereWithAggregatesInput>;
    @Field(() => [PasswordResetTokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PasswordResetTokenScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PasswordResetTokenUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class PasswordResetTokenUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class PasswordResetTokenUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class PasswordResetTokenUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class PasswordResetTokenUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class PasswordResetTokenWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => PasswordResetTokenEmailTokenCompoundUniqueInput, {nullable:true})
    email_token?: InstanceType<typeof PasswordResetTokenEmailTokenCompoundUniqueInput>;
    @Field(() => [PasswordResetTokenWhereInput], {nullable:true})
    AND?: Array<PasswordResetTokenWhereInput>;
    @Field(() => [PasswordResetTokenWhereInput], {nullable:true})
    OR?: Array<PasswordResetTokenWhereInput>;
    @Field(() => [PasswordResetTokenWhereInput], {nullable:true})
    NOT?: Array<PasswordResetTokenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PasswordResetTokenWhereInput {
    @Field(() => [PasswordResetTokenWhereInput], {nullable:true})
    AND?: Array<PasswordResetTokenWhereInput>;
    @Field(() => [PasswordResetTokenWhereInput], {nullable:true})
    OR?: Array<PasswordResetTokenWhereInput>;
    @Field(() => [PasswordResetTokenWhereInput], {nullable:true})
    NOT?: Array<PasswordResetTokenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class PasswordResetToken {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date;
}

@ArgsType()
export class UpdateManyPasswordResetTokenArgs {
    @Field(() => PasswordResetTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => PasswordResetTokenUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof PasswordResetTokenUpdateManyMutationInput>;
    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    @Type(() => PasswordResetTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PasswordResetTokenWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOnePasswordResetTokenArgs {
    @Field(() => PasswordResetTokenUpdateInput, {nullable:false})
    @Type(() => PasswordResetTokenUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof PasswordResetTokenUpdateInput>;
    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
}

@ArgsType()
export class UpsertOnePasswordResetTokenArgs {
    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
    @Field(() => PasswordResetTokenCreateInput, {nullable:false})
    @Type(() => PasswordResetTokenCreateInput)
    create!: InstanceType<typeof PasswordResetTokenCreateInput>;
    @Field(() => PasswordResetTokenUpdateInput, {nullable:false})
    @Type(() => PasswordResetTokenUpdateInput)
    update!: InstanceType<typeof PasswordResetTokenUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => BoolFilter, {nullable:true})
    not?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => BoolFilter, {nullable:true})
    _min?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    _max?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class EnumPROGRESS_TYPEFilter {
    @Field(() => PROGRESS_TYPE, {nullable:true})
    equals?: `${PROGRESS_TYPE}`;
    @Field(() => [PROGRESS_TYPE], {nullable:true})
    in?: Array<`${PROGRESS_TYPE}`>;
    @Field(() => [PROGRESS_TYPE], {nullable:true})
    notIn?: Array<`${PROGRESS_TYPE}`>;
    @Field(() => EnumPROGRESS_TYPEFilter, {nullable:true})
    not?: InstanceType<typeof EnumPROGRESS_TYPEFilter>;
}

@InputType()
export class EnumPROGRESS_TYPEWithAggregatesFilter {
    @Field(() => PROGRESS_TYPE, {nullable:true})
    equals?: `${PROGRESS_TYPE}`;
    @Field(() => [PROGRESS_TYPE], {nullable:true})
    in?: Array<`${PROGRESS_TYPE}`>;
    @Field(() => [PROGRESS_TYPE], {nullable:true})
    notIn?: Array<`${PROGRESS_TYPE}`>;
    @Field(() => EnumPROGRESS_TYPEWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumPROGRESS_TYPEWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumPROGRESS_TYPEFilter, {nullable:true})
    _min?: InstanceType<typeof EnumPROGRESS_TYPEFilter>;
    @Field(() => EnumPROGRESS_TYPEFilter, {nullable:true})
    _max?: InstanceType<typeof EnumPROGRESS_TYPEFilter>;
}

@InputType()
export class EnumREADING_STATUSFilter {
    @Field(() => READING_STATUS, {nullable:true})
    equals?: `${READING_STATUS}`;
    @Field(() => [READING_STATUS], {nullable:true})
    in?: Array<`${READING_STATUS}`>;
    @Field(() => [READING_STATUS], {nullable:true})
    notIn?: Array<`${READING_STATUS}`>;
    @Field(() => EnumREADING_STATUSFilter, {nullable:true})
    not?: InstanceType<typeof EnumREADING_STATUSFilter>;
}

@InputType()
export class EnumREADING_STATUSWithAggregatesFilter {
    @Field(() => READING_STATUS, {nullable:true})
    equals?: `${READING_STATUS}`;
    @Field(() => [READING_STATUS], {nullable:true})
    in?: Array<`${READING_STATUS}`>;
    @Field(() => [READING_STATUS], {nullable:true})
    notIn?: Array<`${READING_STATUS}`>;
    @Field(() => EnumREADING_STATUSWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumREADING_STATUSWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumREADING_STATUSFilter, {nullable:true})
    _min?: InstanceType<typeof EnumREADING_STATUSFilter>;
    @Field(() => EnumREADING_STATUSFilter, {nullable:true})
    _max?: InstanceType<typeof EnumREADING_STATUSFilter>;
}

@InputType()
export class EnumSIZEFilter {
    @Field(() => SIZE, {nullable:true})
    equals?: `${SIZE}`;
    @Field(() => [SIZE], {nullable:true})
    in?: Array<`${SIZE}`>;
    @Field(() => [SIZE], {nullable:true})
    notIn?: Array<`${SIZE}`>;
    @Field(() => EnumSIZEFilter, {nullable:true})
    not?: InstanceType<typeof EnumSIZEFilter>;
}

@InputType()
export class EnumSIZEWithAggregatesFilter {
    @Field(() => SIZE, {nullable:true})
    equals?: `${SIZE}`;
    @Field(() => [SIZE], {nullable:true})
    in?: Array<`${SIZE}`>;
    @Field(() => [SIZE], {nullable:true})
    notIn?: Array<`${SIZE}`>;
    @Field(() => EnumSIZEWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumSIZEWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumSIZEFilter, {nullable:true})
    _min?: InstanceType<typeof EnumSIZEFilter>;
    @Field(() => EnumSIZEFilter, {nullable:true})
    _max?: InstanceType<typeof EnumSIZEFilter>;
}

@InputType()
export class EnumSOURCEFilter {
    @Field(() => SOURCE, {nullable:true})
    equals?: `${SOURCE}`;
    @Field(() => [SOURCE], {nullable:true})
    in?: Array<`${SOURCE}`>;
    @Field(() => [SOURCE], {nullable:true})
    notIn?: Array<`${SOURCE}`>;
    @Field(() => EnumSOURCEFilter, {nullable:true})
    not?: InstanceType<typeof EnumSOURCEFilter>;
}

@InputType()
export class EnumSOURCEWithAggregatesFilter {
    @Field(() => SOURCE, {nullable:true})
    equals?: `${SOURCE}`;
    @Field(() => [SOURCE], {nullable:true})
    in?: Array<`${SOURCE}`>;
    @Field(() => [SOURCE], {nullable:true})
    notIn?: Array<`${SOURCE}`>;
    @Field(() => EnumSOURCEWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumSOURCEWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumSOURCEFilter, {nullable:true})
    _min?: InstanceType<typeof EnumSOURCEFilter>;
    @Field(() => EnumSOURCEFilter, {nullable:true})
    _max?: InstanceType<typeof EnumSOURCEFilter>;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatFilter, {nullable:true})
    not?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _sum?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _min?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _max?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: InstanceType<typeof IntFilter>;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: `${NullsOrder}`;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringListFilter {
    @Field(() => [String], {nullable:true})
    equals?: Array<string>;
    @Field(() => String, {nullable:true})
    has?: string;
    @Field(() => [String], {nullable:true})
    hasEvery?: Array<string>;
    @Field(() => [String], {nullable:true})
    hasSome?: Array<string>;
    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateRating {
    @Field(() => RatingCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RatingCountAggregate>;
    @Field(() => RatingAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RatingAvgAggregate>;
    @Field(() => RatingSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RatingSumAggregate>;
    @Field(() => RatingMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RatingMinAggregate>;
    @Field(() => RatingMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RatingMaxAggregate>;
}

@ArgsType()
export class CreateManyRatingArgs {
    @Field(() => [RatingCreateManyInput], {nullable:false})
    @Type(() => RatingCreateManyInput)
    @ValidateNested()
    data!: Array<RatingCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneRatingArgs {
    @Field(() => RatingCreateInput, {nullable:false})
    @Type(() => RatingCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof RatingCreateInput>;
}

@ArgsType()
export class DeleteManyRatingArgs {
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RatingWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneRatingArgs {
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstRatingOrThrowArgs {
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RatingWhereInput>;
    @Field(() => [RatingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RatingOrderByWithRelationInput>;
    @Field(() => RatingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RatingScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RatingScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstRatingArgs {
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RatingWhereInput>;
    @Field(() => [RatingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RatingOrderByWithRelationInput>;
    @Field(() => RatingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RatingScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RatingScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyRatingArgs {
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RatingWhereInput>;
    @Field(() => [RatingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RatingOrderByWithRelationInput>;
    @Field(() => RatingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RatingScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RatingScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueRatingOrThrowArgs {
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueRatingArgs {
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
}

@ArgsType()
export class RatingAggregateArgs {
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RatingWhereInput>;
    @Field(() => [RatingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RatingOrderByWithRelationInput>;
    @Field(() => RatingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RatingCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RatingCountAggregateInput>;
    @Field(() => RatingAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RatingAvgAggregateInput>;
    @Field(() => RatingSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RatingSumAggregateInput>;
    @Field(() => RatingMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RatingMinAggregateInput>;
    @Field(() => RatingMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RatingMaxAggregateInput>;
}

@InputType()
export class RatingAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    count?: true;
    @Field(() => Boolean, {nullable:true})
    maxScore?: true;
    @Field(() => Boolean, {nullable:true})
    score?: true;
}

@ObjectType()
export class RatingAvgAggregate {
    @Field(() => Float, {nullable:true})
    count?: number;
    @Field(() => Float, {nullable:true})
    maxScore?: number;
    @Field(() => Float, {nullable:true})
    score?: number;
}

@InputType()
export class RatingAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    count?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    maxScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    score?: `${SortOrder}`;
}

@InputType()
export class RatingCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    count?: true;
    @Field(() => Boolean, {nullable:true})
    source?: true;
    @Field(() => Boolean, {nullable:true})
    maxScore?: true;
    @Field(() => Boolean, {nullable:true})
    score?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class RatingCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    count!: number;
    @Field(() => Int, {nullable:false})
    source!: number;
    @Field(() => Int, {nullable:false})
    maxScore!: number;
    @Field(() => Int, {nullable:false})
    score!: number;
    @Field(() => Int, {nullable:false})
    bookId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class RatingCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    count?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    maxScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    score?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
}

@InputType()
export class RatingCreateManyBookInputEnvelope {
    @Field(() => [RatingCreateManyBookInput], {nullable:false})
    @Type(() => RatingCreateManyBookInput)
    data!: Array<RatingCreateManyBookInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class RatingCreateManyBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => Float, {nullable:false})
    maxScore!: number;
    @Field(() => Float, {nullable:false})
    score!: number;
}

@InputType()
export class RatingCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => Float, {nullable:false})
    maxScore!: number;
    @Field(() => Float, {nullable:false})
    score!: number;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class RatingCreateNestedManyWithoutBookInput {
    @Field(() => [RatingCreateWithoutBookInput], {nullable:true})
    @Type(() => RatingCreateWithoutBookInput)
    create?: Array<RatingCreateWithoutBookInput>;
    @Field(() => [RatingCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => RatingCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<RatingCreateOrConnectWithoutBookInput>;
    @Field(() => RatingCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => RatingCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof RatingCreateManyBookInputEnvelope>;
    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id'>>;
}

@InputType()
export class RatingCreateOrConnectWithoutBookInput {
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => RatingCreateWithoutBookInput, {nullable:false})
    @Type(() => RatingCreateWithoutBookInput)
    create!: InstanceType<typeof RatingCreateWithoutBookInput>;
}

@InputType()
export class RatingCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => Float, {nullable:false})
    maxScore!: number;
    @Field(() => Float, {nullable:false})
    score!: number;
}

@InputType()
export class RatingCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => Float, {nullable:false})
    maxScore!: number;
    @Field(() => Float, {nullable:false})
    score!: number;
    @Field(() => BookCreateNestedOneWithoutRatingsInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutRatingsInput>;
}

@ArgsType()
export class RatingGroupByArgs {
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RatingWhereInput>;
    @Field(() => [RatingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RatingOrderByWithAggregationInput>;
    @Field(() => [RatingScalarFieldEnum], {nullable:false})
    by!: Array<`${RatingScalarFieldEnum}`>;
    @Field(() => RatingScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof RatingScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RatingCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RatingCountAggregateInput>;
    @Field(() => RatingAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RatingAvgAggregateInput>;
    @Field(() => RatingSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RatingSumAggregateInput>;
    @Field(() => RatingMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RatingMinAggregateInput>;
    @Field(() => RatingMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RatingMaxAggregateInput>;
}

@ObjectType()
export class RatingGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => Float, {nullable:false})
    maxScore!: number;
    @Field(() => Float, {nullable:false})
    score!: number;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => RatingCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RatingCountAggregate>;
    @Field(() => RatingAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RatingAvgAggregate>;
    @Field(() => RatingSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RatingSumAggregate>;
    @Field(() => RatingMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RatingMinAggregate>;
    @Field(() => RatingMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RatingMaxAggregate>;
}

@InputType()
export class RatingListRelationFilter {
    @Field(() => RatingWhereInput, {nullable:true})
    every?: InstanceType<typeof RatingWhereInput>;
    @Field(() => RatingWhereInput, {nullable:true})
    some?: InstanceType<typeof RatingWhereInput>;
    @Field(() => RatingWhereInput, {nullable:true})
    none?: InstanceType<typeof RatingWhereInput>;
}

@InputType()
export class RatingMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    count?: true;
    @Field(() => Boolean, {nullable:true})
    source?: true;
    @Field(() => Boolean, {nullable:true})
    maxScore?: true;
    @Field(() => Boolean, {nullable:true})
    score?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
}

@ObjectType()
export class RatingMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => Float, {nullable:true})
    maxScore?: number;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class RatingMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    count?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    maxScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    score?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
}

@InputType()
export class RatingMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    count?: true;
    @Field(() => Boolean, {nullable:true})
    source?: true;
    @Field(() => Boolean, {nullable:true})
    maxScore?: true;
    @Field(() => Boolean, {nullable:true})
    score?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
}

@ObjectType()
export class RatingMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => Float, {nullable:true})
    maxScore?: number;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class RatingMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    count?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    maxScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    score?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
}

@InputType()
export class RatingOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class RatingOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    count?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    maxScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    score?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    bookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => RatingCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RatingCountOrderByAggregateInput>;
    @Field(() => RatingAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RatingAvgOrderByAggregateInput>;
    @Field(() => RatingMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RatingMaxOrderByAggregateInput>;
    @Field(() => RatingMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RatingMinOrderByAggregateInput>;
    @Field(() => RatingSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RatingSumOrderByAggregateInput>;
}

@InputType()
export class RatingOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    count?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    source?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    maxScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    score?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    bookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => BookOrderByWithRelationInput, {nullable:true})
    book?: InstanceType<typeof BookOrderByWithRelationInput>;
}

@InputType()
export class RatingScalarWhereWithAggregatesInput {
    @Field(() => [RatingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RatingScalarWhereWithAggregatesInput>;
    @Field(() => [RatingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RatingScalarWhereWithAggregatesInput>;
    @Field(() => [RatingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RatingScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    count?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => EnumSOURCEWithAggregatesFilter, {nullable:true})
    source?: InstanceType<typeof EnumSOURCEWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    maxScore?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    score?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bookId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class RatingScalarWhereInput {
    @Field(() => [RatingScalarWhereInput], {nullable:true})
    AND?: Array<RatingScalarWhereInput>;
    @Field(() => [RatingScalarWhereInput], {nullable:true})
    OR?: Array<RatingScalarWhereInput>;
    @Field(() => [RatingScalarWhereInput], {nullable:true})
    NOT?: Array<RatingScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumSOURCEFilter, {nullable:true})
    source?: InstanceType<typeof EnumSOURCEFilter>;
    @Field(() => FloatFilter, {nullable:true})
    maxScore?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    score?: InstanceType<typeof FloatFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class RatingSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    count?: true;
    @Field(() => Boolean, {nullable:true})
    maxScore?: true;
    @Field(() => Boolean, {nullable:true})
    score?: true;
}

@ObjectType()
export class RatingSumAggregate {
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => Float, {nullable:true})
    maxScore?: number;
    @Field(() => Float, {nullable:true})
    score?: number;
}

@InputType()
export class RatingSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    count?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    maxScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    score?: `${SortOrder}`;
}

@InputType()
export class RatingUncheckedCreateNestedManyWithoutBookInput {
    @Field(() => [RatingCreateWithoutBookInput], {nullable:true})
    @Type(() => RatingCreateWithoutBookInput)
    create?: Array<RatingCreateWithoutBookInput>;
    @Field(() => [RatingCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => RatingCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<RatingCreateOrConnectWithoutBookInput>;
    @Field(() => RatingCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => RatingCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof RatingCreateManyBookInputEnvelope>;
    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id'>>;
}

@InputType()
export class RatingUncheckedCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => Float, {nullable:false})
    maxScore!: number;
    @Field(() => Float, {nullable:false})
    score!: number;
}

@InputType()
export class RatingUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => Float, {nullable:false})
    maxScore!: number;
    @Field(() => Float, {nullable:false})
    score!: number;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class RatingUncheckedUpdateManyWithoutBookNestedInput {
    @Field(() => [RatingCreateWithoutBookInput], {nullable:true})
    @Type(() => RatingCreateWithoutBookInput)
    create?: Array<RatingCreateWithoutBookInput>;
    @Field(() => [RatingCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => RatingCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<RatingCreateOrConnectWithoutBookInput>;
    @Field(() => [RatingUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => RatingUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<RatingUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => RatingCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => RatingCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof RatingCreateManyBookInputEnvelope>;
    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id'>>;
    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id'>>;
    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id'>>;
    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id'>>;
    @Field(() => [RatingUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => RatingUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<RatingUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [RatingUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => RatingUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<RatingUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [RatingScalarWhereInput], {nullable:true})
    @Type(() => RatingScalarWhereInput)
    deleteMany?: Array<RatingScalarWhereInput>;
}

@InputType()
export class RatingUncheckedUpdateManyWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => Float, {nullable:true})
    maxScore?: number;
    @Field(() => Float, {nullable:true})
    score?: number;
}

@InputType()
export class RatingUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => Float, {nullable:true})
    maxScore?: number;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class RatingUncheckedUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => Float, {nullable:true})
    maxScore?: number;
    @Field(() => Float, {nullable:true})
    score?: number;
}

@InputType()
export class RatingUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => Float, {nullable:true})
    maxScore?: number;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class RatingUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => Float, {nullable:true})
    maxScore?: number;
    @Field(() => Float, {nullable:true})
    score?: number;
}

@InputType()
export class RatingUpdateManyWithWhereWithoutBookInput {
    @Field(() => RatingScalarWhereInput, {nullable:false})
    @Type(() => RatingScalarWhereInput)
    where!: InstanceType<typeof RatingScalarWhereInput>;
    @Field(() => RatingUpdateManyMutationInput, {nullable:false})
    @Type(() => RatingUpdateManyMutationInput)
    data!: InstanceType<typeof RatingUpdateManyMutationInput>;
}

@InputType()
export class RatingUpdateManyWithoutBookNestedInput {
    @Field(() => [RatingCreateWithoutBookInput], {nullable:true})
    @Type(() => RatingCreateWithoutBookInput)
    create?: Array<RatingCreateWithoutBookInput>;
    @Field(() => [RatingCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => RatingCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<RatingCreateOrConnectWithoutBookInput>;
    @Field(() => [RatingUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => RatingUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<RatingUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => RatingCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => RatingCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof RatingCreateManyBookInputEnvelope>;
    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id'>>;
    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id'>>;
    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id'>>;
    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id'>>;
    @Field(() => [RatingUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => RatingUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<RatingUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [RatingUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => RatingUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<RatingUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [RatingScalarWhereInput], {nullable:true})
    @Type(() => RatingScalarWhereInput)
    deleteMany?: Array<RatingScalarWhereInput>;
}

@InputType()
export class RatingUpdateWithWhereUniqueWithoutBookInput {
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => RatingUpdateWithoutBookInput, {nullable:false})
    @Type(() => RatingUpdateWithoutBookInput)
    data!: InstanceType<typeof RatingUpdateWithoutBookInput>;
}

@InputType()
export class RatingUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => Float, {nullable:true})
    maxScore?: number;
    @Field(() => Float, {nullable:true})
    score?: number;
}

@InputType()
export class RatingUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    count?: number;
    @Field(() => SOURCE, {nullable:true})
    source?: `${SOURCE}`;
    @Field(() => Float, {nullable:true})
    maxScore?: number;
    @Field(() => Float, {nullable:true})
    score?: number;
    @Field(() => BookUpdateOneWithoutRatingsNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutRatingsNestedInput>;
}

@InputType()
export class RatingUpsertWithWhereUniqueWithoutBookInput {
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => RatingUpdateWithoutBookInput, {nullable:false})
    @Type(() => RatingUpdateWithoutBookInput)
    update!: InstanceType<typeof RatingUpdateWithoutBookInput>;
    @Field(() => RatingCreateWithoutBookInput, {nullable:false})
    @Type(() => RatingCreateWithoutBookInput)
    create!: InstanceType<typeof RatingCreateWithoutBookInput>;
}

@InputType()
export class RatingWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [RatingWhereInput], {nullable:true})
    AND?: Array<RatingWhereInput>;
    @Field(() => [RatingWhereInput], {nullable:true})
    OR?: Array<RatingWhereInput>;
    @Field(() => [RatingWhereInput], {nullable:true})
    NOT?: Array<RatingWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumSOURCEFilter, {nullable:true})
    source?: InstanceType<typeof EnumSOURCEFilter>;
    @Field(() => FloatFilter, {nullable:true})
    maxScore?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    score?: InstanceType<typeof FloatFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookScalarRelationFilter>;
}

@InputType()
export class RatingWhereInput {
    @Field(() => [RatingWhereInput], {nullable:true})
    AND?: Array<RatingWhereInput>;
    @Field(() => [RatingWhereInput], {nullable:true})
    OR?: Array<RatingWhereInput>;
    @Field(() => [RatingWhereInput], {nullable:true})
    NOT?: Array<RatingWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumSOURCEFilter, {nullable:true})
    source?: InstanceType<typeof EnumSOURCEFilter>;
    @Field(() => FloatFilter, {nullable:true})
    maxScore?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    score?: InstanceType<typeof FloatFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookScalarRelationFilter>;
}

@ObjectType()
export class Rating {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:true})
    count!: number | null;
    @Field(() => SOURCE, {nullable:false})
    source!: `${SOURCE}`;
    @Field(() => Float, {nullable:false})
    maxScore!: number;
    @Field(() => Float, {nullable:false})
    score!: number;
    @Field(() => String, {nullable:true})
    bookId!: string | null;
    @Field(() => Book, {nullable:true})
    book?: InstanceType<typeof Book> | null;
}

@ArgsType()
export class UpdateManyRatingArgs {
    @Field(() => RatingUpdateManyMutationInput, {nullable:false})
    @Type(() => RatingUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof RatingUpdateManyMutationInput>;
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RatingWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneRatingArgs {
    @Field(() => RatingUpdateInput, {nullable:false})
    @Type(() => RatingUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof RatingUpdateInput>;
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneRatingArgs {
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => RatingCreateInput, {nullable:false})
    @Type(() => RatingCreateInput)
    create!: InstanceType<typeof RatingCreateInput>;
    @Field(() => RatingUpdateInput, {nullable:false})
    @Type(() => RatingUpdateInput)
    update!: InstanceType<typeof RatingUpdateInput>;
}

@ObjectType()
export class AggregateRead {
    @Field(() => ReadCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReadCountAggregate>;
    @Field(() => ReadMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReadMinAggregate>;
    @Field(() => ReadMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReadMaxAggregate>;
}

@ArgsType()
export class CreateManyReadArgs {
    @Field(() => [ReadCreateManyInput], {nullable:false})
    @Type(() => ReadCreateManyInput)
    @ValidateNested()
    data!: Array<ReadCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneReadArgs {
    @Field(() => ReadCreateInput, {nullable:false})
    @Type(() => ReadCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof ReadCreateInput>;
}

@ArgsType()
export class DeleteManyReadArgs {
    @Field(() => ReadWhereInput, {nullable:true})
    @Type(() => ReadWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneReadArgs {
    @Field(() => ReadWhereUniqueInput, {nullable:false})
    @Type(() => ReadWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstReadOrThrowArgs {
    @Field(() => ReadWhereInput, {nullable:true})
    @Type(() => ReadWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadWhereInput>;
    @Field(() => [ReadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadOrderByWithRelationInput>;
    @Field(() => ReadWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReadScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReadScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstReadArgs {
    @Field(() => ReadWhereInput, {nullable:true})
    @Type(() => ReadWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadWhereInput>;
    @Field(() => [ReadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadOrderByWithRelationInput>;
    @Field(() => ReadWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReadScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReadScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyReadArgs {
    @Field(() => ReadWhereInput, {nullable:true})
    @Type(() => ReadWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadWhereInput>;
    @Field(() => [ReadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadOrderByWithRelationInput>;
    @Field(() => ReadWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReadScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReadScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueReadOrThrowArgs {
    @Field(() => ReadWhereUniqueInput, {nullable:false})
    @Type(() => ReadWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueReadArgs {
    @Field(() => ReadWhereUniqueInput, {nullable:false})
    @Type(() => ReadWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ReadAggregateArgs {
    @Field(() => ReadWhereInput, {nullable:true})
    @Type(() => ReadWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadWhereInput>;
    @Field(() => [ReadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadOrderByWithRelationInput>;
    @Field(() => ReadWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReadCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReadCountAggregateInput>;
    @Field(() => ReadMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReadMinAggregateInput>;
    @Field(() => ReadMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReadMaxAggregateInput>;
}

@InputType()
export class ReadCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    finishedDate?: true;
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ReadCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    startDate!: number;
    @Field(() => Int, {nullable:false})
    finishedDate!: number;
    @Field(() => Int, {nullable:false})
    userBookId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ReadCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    finishedDate?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: `${SortOrder}`;
}

@ObjectType()
export class ReadCount {
    @Field(() => Int, {nullable:false})
    readingSessions?: number;
}

@InputType()
export class ReadCreateManyUserBookInputEnvelope {
    @Field(() => [ReadCreateManyUserBookInput], {nullable:false})
    @Type(() => ReadCreateManyUserBookInput)
    data!: Array<ReadCreateManyUserBookInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ReadCreateManyUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
}

@InputType()
export class ReadCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => String, {nullable:false})
    userBookId!: string;
}

@InputType()
export class ReadCreateNestedManyWithoutUserBookInput {
    @Field(() => [ReadCreateWithoutUserBookInput], {nullable:true})
    @Type(() => ReadCreateWithoutUserBookInput)
    create?: Array<ReadCreateWithoutUserBookInput>;
    @Field(() => [ReadCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => ReadCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<ReadCreateOrConnectWithoutUserBookInput>;
    @Field(() => ReadCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => ReadCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof ReadCreateManyUserBookInputEnvelope>;
    @Field(() => [ReadWhereUniqueInput], {nullable:true})
    @Type(() => ReadWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReadWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReadCreateNestedOneWithoutReadingSessionsInput {
    @Field(() => ReadCreateWithoutReadingSessionsInput, {nullable:true})
    @Type(() => ReadCreateWithoutReadingSessionsInput)
    create?: InstanceType<typeof ReadCreateWithoutReadingSessionsInput>;
    @Field(() => ReadCreateOrConnectWithoutReadingSessionsInput, {nullable:true})
    @Type(() => ReadCreateOrConnectWithoutReadingSessionsInput)
    connectOrCreate?: InstanceType<typeof ReadCreateOrConnectWithoutReadingSessionsInput>;
    @Field(() => ReadWhereUniqueInput, {nullable:true})
    @Type(() => ReadWhereUniqueInput)
    connect?: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
}

@InputType()
export class ReadCreateOrConnectWithoutReadingSessionsInput {
    @Field(() => ReadWhereUniqueInput, {nullable:false})
    @Type(() => ReadWhereUniqueInput)
    where!: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
    @Field(() => ReadCreateWithoutReadingSessionsInput, {nullable:false})
    @Type(() => ReadCreateWithoutReadingSessionsInput)
    create!: InstanceType<typeof ReadCreateWithoutReadingSessionsInput>;
}

@InputType()
export class ReadCreateOrConnectWithoutUserBookInput {
    @Field(() => ReadWhereUniqueInput, {nullable:false})
    @Type(() => ReadWhereUniqueInput)
    where!: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
    @Field(() => ReadCreateWithoutUserBookInput, {nullable:false})
    @Type(() => ReadCreateWithoutUserBookInput)
    create!: InstanceType<typeof ReadCreateWithoutUserBookInput>;
}

@InputType()
export class ReadCreateWithoutReadingSessionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => UserBookCreateNestedOneWithoutReadInput, {nullable:false})
    UserBook!: InstanceType<typeof UserBookCreateNestedOneWithoutReadInput>;
}

@InputType()
export class ReadCreateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => ReadingSessionCreateNestedManyWithoutReadInput, {nullable:true})
    readingSessions?: InstanceType<typeof ReadingSessionCreateNestedManyWithoutReadInput>;
}

@InputType()
export class ReadCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => ReadingSessionCreateNestedManyWithoutReadInput, {nullable:true})
    readingSessions?: InstanceType<typeof ReadingSessionCreateNestedManyWithoutReadInput>;
    @Field(() => UserBookCreateNestedOneWithoutReadInput, {nullable:false})
    UserBook!: InstanceType<typeof UserBookCreateNestedOneWithoutReadInput>;
}

@ArgsType()
export class ReadGroupByArgs {
    @Field(() => ReadWhereInput, {nullable:true})
    @Type(() => ReadWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadWhereInput>;
    @Field(() => [ReadOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReadOrderByWithAggregationInput>;
    @Field(() => [ReadScalarFieldEnum], {nullable:false})
    by!: Array<`${ReadScalarFieldEnum}`>;
    @Field(() => ReadScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ReadScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReadCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReadCountAggregateInput>;
    @Field(() => ReadMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReadMinAggregateInput>;
    @Field(() => ReadMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReadMaxAggregateInput>;
}

@ObjectType()
export class ReadGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    startDate!: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => String, {nullable:false})
    userBookId!: string;
    @Field(() => ReadCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReadCountAggregate>;
    @Field(() => ReadMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReadMinAggregate>;
    @Field(() => ReadMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReadMaxAggregate>;
}

@InputType()
export class ReadListRelationFilter {
    @Field(() => ReadWhereInput, {nullable:true})
    every?: InstanceType<typeof ReadWhereInput>;
    @Field(() => ReadWhereInput, {nullable:true})
    some?: InstanceType<typeof ReadWhereInput>;
    @Field(() => ReadWhereInput, {nullable:true})
    none?: InstanceType<typeof ReadWhereInput>;
}

@InputType()
export class ReadMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    finishedDate?: true;
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
}

@ObjectType()
export class ReadMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
}

@InputType()
export class ReadMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    finishedDate?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: `${SortOrder}`;
}

@InputType()
export class ReadMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    finishedDate?: true;
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
}

@ObjectType()
export class ReadMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
}

@InputType()
export class ReadMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    finishedDate?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: `${SortOrder}`;
}

@InputType()
export class ReadOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class ReadOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    finishedDate?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: `${SortOrder}`;
    @Field(() => ReadCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReadCountOrderByAggregateInput>;
    @Field(() => ReadMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReadMaxOrderByAggregateInput>;
    @Field(() => ReadMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReadMinOrderByAggregateInput>;
}

@InputType()
export class ReadOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    finishedDate?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: `${SortOrder}`;
    @Field(() => ReadingSessionOrderByRelationAggregateInput, {nullable:true})
    readingSessions?: InstanceType<typeof ReadingSessionOrderByRelationAggregateInput>;
    @Field(() => UserBookOrderByWithRelationInput, {nullable:true})
    UserBook?: InstanceType<typeof UserBookOrderByWithRelationInput>;
}

@InputType()
export class ReadScalarRelationFilter {
    @Field(() => ReadWhereInput, {nullable:true})
    is?: InstanceType<typeof ReadWhereInput>;
    @Field(() => ReadWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ReadWhereInput>;
}

@InputType()
export class ReadScalarWhereWithAggregatesInput {
    @Field(() => [ReadScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReadScalarWhereWithAggregatesInput>;
    @Field(() => [ReadScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReadScalarWhereWithAggregatesInput>;
    @Field(() => [ReadScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReadScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    finishedDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ReadScalarWhereInput {
    @Field(() => [ReadScalarWhereInput], {nullable:true})
    AND?: Array<ReadScalarWhereInput>;
    @Field(() => [ReadScalarWhereInput], {nullable:true})
    OR?: Array<ReadScalarWhereInput>;
    @Field(() => [ReadScalarWhereInput], {nullable:true})
    NOT?: Array<ReadScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    finishedDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class ReadUncheckedCreateNestedManyWithoutUserBookInput {
    @Field(() => [ReadCreateWithoutUserBookInput], {nullable:true})
    @Type(() => ReadCreateWithoutUserBookInput)
    create?: Array<ReadCreateWithoutUserBookInput>;
    @Field(() => [ReadCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => ReadCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<ReadCreateOrConnectWithoutUserBookInput>;
    @Field(() => ReadCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => ReadCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof ReadCreateManyUserBookInputEnvelope>;
    @Field(() => [ReadWhereUniqueInput], {nullable:true})
    @Type(() => ReadWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReadWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReadUncheckedCreateWithoutReadingSessionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => String, {nullable:false})
    userBookId!: string;
}

@InputType()
export class ReadUncheckedCreateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => ReadingSessionUncheckedCreateNestedManyWithoutReadInput, {nullable:true})
    readingSessions?: InstanceType<typeof ReadingSessionUncheckedCreateNestedManyWithoutReadInput>;
}

@InputType()
export class ReadUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => String, {nullable:false})
    userBookId!: string;
    @Field(() => ReadingSessionUncheckedCreateNestedManyWithoutReadInput, {nullable:true})
    readingSessions?: InstanceType<typeof ReadingSessionUncheckedCreateNestedManyWithoutReadInput>;
}

@InputType()
export class ReadUncheckedUpdateManyWithoutUserBookNestedInput {
    @Field(() => [ReadCreateWithoutUserBookInput], {nullable:true})
    @Type(() => ReadCreateWithoutUserBookInput)
    create?: Array<ReadCreateWithoutUserBookInput>;
    @Field(() => [ReadCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => ReadCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<ReadCreateOrConnectWithoutUserBookInput>;
    @Field(() => [ReadUpsertWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => ReadUpsertWithWhereUniqueWithoutUserBookInput)
    upsert?: Array<ReadUpsertWithWhereUniqueWithoutUserBookInput>;
    @Field(() => ReadCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => ReadCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof ReadCreateManyUserBookInputEnvelope>;
    @Field(() => [ReadWhereUniqueInput], {nullable:true})
    @Type(() => ReadWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReadWhereUniqueInput, 'id'>>;
    @Field(() => [ReadWhereUniqueInput], {nullable:true})
    @Type(() => ReadWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReadWhereUniqueInput, 'id'>>;
    @Field(() => [ReadWhereUniqueInput], {nullable:true})
    @Type(() => ReadWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReadWhereUniqueInput, 'id'>>;
    @Field(() => [ReadWhereUniqueInput], {nullable:true})
    @Type(() => ReadWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReadWhereUniqueInput, 'id'>>;
    @Field(() => [ReadUpdateWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => ReadUpdateWithWhereUniqueWithoutUserBookInput)
    update?: Array<ReadUpdateWithWhereUniqueWithoutUserBookInput>;
    @Field(() => [ReadUpdateManyWithWhereWithoutUserBookInput], {nullable:true})
    @Type(() => ReadUpdateManyWithWhereWithoutUserBookInput)
    updateMany?: Array<ReadUpdateManyWithWhereWithoutUserBookInput>;
    @Field(() => [ReadScalarWhereInput], {nullable:true})
    @Type(() => ReadScalarWhereInput)
    deleteMany?: Array<ReadScalarWhereInput>;
}

@InputType()
export class ReadUncheckedUpdateManyWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
}

@InputType()
export class ReadUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
}

@InputType()
export class ReadUncheckedUpdateWithoutReadingSessionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
}

@InputType()
export class ReadUncheckedUpdateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => ReadingSessionUncheckedUpdateManyWithoutReadNestedInput, {nullable:true})
    readingSessions?: InstanceType<typeof ReadingSessionUncheckedUpdateManyWithoutReadNestedInput>;
}

@InputType()
export class ReadUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => ReadingSessionUncheckedUpdateManyWithoutReadNestedInput, {nullable:true})
    readingSessions?: InstanceType<typeof ReadingSessionUncheckedUpdateManyWithoutReadNestedInput>;
}

@InputType()
export class ReadUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
}

@InputType()
export class ReadUpdateManyWithWhereWithoutUserBookInput {
    @Field(() => ReadScalarWhereInput, {nullable:false})
    @Type(() => ReadScalarWhereInput)
    where!: InstanceType<typeof ReadScalarWhereInput>;
    @Field(() => ReadUpdateManyMutationInput, {nullable:false})
    @Type(() => ReadUpdateManyMutationInput)
    data!: InstanceType<typeof ReadUpdateManyMutationInput>;
}

@InputType()
export class ReadUpdateManyWithoutUserBookNestedInput {
    @Field(() => [ReadCreateWithoutUserBookInput], {nullable:true})
    @Type(() => ReadCreateWithoutUserBookInput)
    create?: Array<ReadCreateWithoutUserBookInput>;
    @Field(() => [ReadCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => ReadCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<ReadCreateOrConnectWithoutUserBookInput>;
    @Field(() => [ReadUpsertWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => ReadUpsertWithWhereUniqueWithoutUserBookInput)
    upsert?: Array<ReadUpsertWithWhereUniqueWithoutUserBookInput>;
    @Field(() => ReadCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => ReadCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof ReadCreateManyUserBookInputEnvelope>;
    @Field(() => [ReadWhereUniqueInput], {nullable:true})
    @Type(() => ReadWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReadWhereUniqueInput, 'id'>>;
    @Field(() => [ReadWhereUniqueInput], {nullable:true})
    @Type(() => ReadWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReadWhereUniqueInput, 'id'>>;
    @Field(() => [ReadWhereUniqueInput], {nullable:true})
    @Type(() => ReadWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReadWhereUniqueInput, 'id'>>;
    @Field(() => [ReadWhereUniqueInput], {nullable:true})
    @Type(() => ReadWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReadWhereUniqueInput, 'id'>>;
    @Field(() => [ReadUpdateWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => ReadUpdateWithWhereUniqueWithoutUserBookInput)
    update?: Array<ReadUpdateWithWhereUniqueWithoutUserBookInput>;
    @Field(() => [ReadUpdateManyWithWhereWithoutUserBookInput], {nullable:true})
    @Type(() => ReadUpdateManyWithWhereWithoutUserBookInput)
    updateMany?: Array<ReadUpdateManyWithWhereWithoutUserBookInput>;
    @Field(() => [ReadScalarWhereInput], {nullable:true})
    @Type(() => ReadScalarWhereInput)
    deleteMany?: Array<ReadScalarWhereInput>;
}

@InputType()
export class ReadUpdateOneRequiredWithoutReadingSessionsNestedInput {
    @Field(() => ReadCreateWithoutReadingSessionsInput, {nullable:true})
    @Type(() => ReadCreateWithoutReadingSessionsInput)
    create?: InstanceType<typeof ReadCreateWithoutReadingSessionsInput>;
    @Field(() => ReadCreateOrConnectWithoutReadingSessionsInput, {nullable:true})
    @Type(() => ReadCreateOrConnectWithoutReadingSessionsInput)
    connectOrCreate?: InstanceType<typeof ReadCreateOrConnectWithoutReadingSessionsInput>;
    @Field(() => ReadUpsertWithoutReadingSessionsInput, {nullable:true})
    @Type(() => ReadUpsertWithoutReadingSessionsInput)
    upsert?: InstanceType<typeof ReadUpsertWithoutReadingSessionsInput>;
    @Field(() => ReadWhereUniqueInput, {nullable:true})
    @Type(() => ReadWhereUniqueInput)
    connect?: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
    @Field(() => ReadUpdateToOneWithWhereWithoutReadingSessionsInput, {nullable:true})
    @Type(() => ReadUpdateToOneWithWhereWithoutReadingSessionsInput)
    update?: InstanceType<typeof ReadUpdateToOneWithWhereWithoutReadingSessionsInput>;
}

@InputType()
export class ReadUpdateToOneWithWhereWithoutReadingSessionsInput {
    @Field(() => ReadWhereInput, {nullable:true})
    @Type(() => ReadWhereInput)
    where?: InstanceType<typeof ReadWhereInput>;
    @Field(() => ReadUpdateWithoutReadingSessionsInput, {nullable:false})
    @Type(() => ReadUpdateWithoutReadingSessionsInput)
    data!: InstanceType<typeof ReadUpdateWithoutReadingSessionsInput>;
}

@InputType()
export class ReadUpdateWithWhereUniqueWithoutUserBookInput {
    @Field(() => ReadWhereUniqueInput, {nullable:false})
    @Type(() => ReadWhereUniqueInput)
    where!: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
    @Field(() => ReadUpdateWithoutUserBookInput, {nullable:false})
    @Type(() => ReadUpdateWithoutUserBookInput)
    data!: InstanceType<typeof ReadUpdateWithoutUserBookInput>;
}

@InputType()
export class ReadUpdateWithoutReadingSessionsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => UserBookUpdateOneRequiredWithoutReadNestedInput, {nullable:true})
    UserBook?: InstanceType<typeof UserBookUpdateOneRequiredWithoutReadNestedInput>;
}

@InputType()
export class ReadUpdateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => ReadingSessionUpdateManyWithoutReadNestedInput, {nullable:true})
    readingSessions?: InstanceType<typeof ReadingSessionUpdateManyWithoutReadNestedInput>;
}

@InputType()
export class ReadUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => ReadingSessionUpdateManyWithoutReadNestedInput, {nullable:true})
    readingSessions?: InstanceType<typeof ReadingSessionUpdateManyWithoutReadNestedInput>;
    @Field(() => UserBookUpdateOneRequiredWithoutReadNestedInput, {nullable:true})
    UserBook?: InstanceType<typeof UserBookUpdateOneRequiredWithoutReadNestedInput>;
}

@InputType()
export class ReadUpsertWithWhereUniqueWithoutUserBookInput {
    @Field(() => ReadWhereUniqueInput, {nullable:false})
    @Type(() => ReadWhereUniqueInput)
    where!: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
    @Field(() => ReadUpdateWithoutUserBookInput, {nullable:false})
    @Type(() => ReadUpdateWithoutUserBookInput)
    update!: InstanceType<typeof ReadUpdateWithoutUserBookInput>;
    @Field(() => ReadCreateWithoutUserBookInput, {nullable:false})
    @Type(() => ReadCreateWithoutUserBookInput)
    create!: InstanceType<typeof ReadCreateWithoutUserBookInput>;
}

@InputType()
export class ReadUpsertWithoutReadingSessionsInput {
    @Field(() => ReadUpdateWithoutReadingSessionsInput, {nullable:false})
    @Type(() => ReadUpdateWithoutReadingSessionsInput)
    update!: InstanceType<typeof ReadUpdateWithoutReadingSessionsInput>;
    @Field(() => ReadCreateWithoutReadingSessionsInput, {nullable:false})
    @Type(() => ReadCreateWithoutReadingSessionsInput)
    create!: InstanceType<typeof ReadCreateWithoutReadingSessionsInput>;
    @Field(() => ReadWhereInput, {nullable:true})
    @Type(() => ReadWhereInput)
    where?: InstanceType<typeof ReadWhereInput>;
}

@InputType()
export class ReadWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [ReadWhereInput], {nullable:true})
    AND?: Array<ReadWhereInput>;
    @Field(() => [ReadWhereInput], {nullable:true})
    OR?: Array<ReadWhereInput>;
    @Field(() => [ReadWhereInput], {nullable:true})
    NOT?: Array<ReadWhereInput>;
    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    finishedDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
    @Field(() => ReadingSessionListRelationFilter, {nullable:true})
    readingSessions?: InstanceType<typeof ReadingSessionListRelationFilter>;
    @Field(() => UserBookScalarRelationFilter, {nullable:true})
    UserBook?: InstanceType<typeof UserBookScalarRelationFilter>;
}

@InputType()
export class ReadWhereInput {
    @Field(() => [ReadWhereInput], {nullable:true})
    AND?: Array<ReadWhereInput>;
    @Field(() => [ReadWhereInput], {nullable:true})
    OR?: Array<ReadWhereInput>;
    @Field(() => [ReadWhereInput], {nullable:true})
    NOT?: Array<ReadWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    finishedDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
    @Field(() => ReadingSessionListRelationFilter, {nullable:true})
    readingSessions?: InstanceType<typeof ReadingSessionListRelationFilter>;
    @Field(() => UserBookScalarRelationFilter, {nullable:true})
    UserBook?: InstanceType<typeof UserBookScalarRelationFilter>;
}

@ObjectType()
export class Read {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    startDate!: Date;
    @Field(() => Date, {nullable:true})
    finishedDate!: Date | null;
    @Field(() => String, {nullable:false})
    userBookId!: string;
    @Field(() => [ReadingSession], {nullable:true})
    readingSessions?: Array<ReadingSession>;
    @Field(() => UserBook, {nullable:false})
    UserBook?: InstanceType<typeof UserBook>;
    @Field(() => ReadCount, {nullable:false})
    _count?: InstanceType<typeof ReadCount>;
}

@ArgsType()
export class UpdateManyReadArgs {
    @Field(() => ReadUpdateManyMutationInput, {nullable:false})
    @Type(() => ReadUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ReadUpdateManyMutationInput>;
    @Field(() => ReadWhereInput, {nullable:true})
    @Type(() => ReadWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneReadArgs {
    @Field(() => ReadUpdateInput, {nullable:false})
    @Type(() => ReadUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ReadUpdateInput>;
    @Field(() => ReadWhereUniqueInput, {nullable:false})
    @Type(() => ReadWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneReadArgs {
    @Field(() => ReadWhereUniqueInput, {nullable:false})
    @Type(() => ReadWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadWhereUniqueInput, 'id'>;
    @Field(() => ReadCreateInput, {nullable:false})
    @Type(() => ReadCreateInput)
    create!: InstanceType<typeof ReadCreateInput>;
    @Field(() => ReadUpdateInput, {nullable:false})
    @Type(() => ReadUpdateInput)
    update!: InstanceType<typeof ReadUpdateInput>;
}

@ObjectType()
export class AggregateReadDate {
    @Field(() => ReadDateCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReadDateCountAggregate>;
    @Field(() => ReadDateMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReadDateMinAggregate>;
    @Field(() => ReadDateMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReadDateMaxAggregate>;
}

@ArgsType()
export class CreateManyReadDateArgs {
    @Field(() => [ReadDateCreateManyInput], {nullable:false})
    @Type(() => ReadDateCreateManyInput)
    @ValidateNested()
    data!: Array<ReadDateCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneReadDateArgs {
    @Field(() => ReadDateCreateInput, {nullable:false})
    @Type(() => ReadDateCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof ReadDateCreateInput>;
}

@ArgsType()
export class DeleteManyReadDateArgs {
    @Field(() => ReadDateWhereInput, {nullable:true})
    @Type(() => ReadDateWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadDateWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneReadDateArgs {
    @Field(() => ReadDateWhereUniqueInput, {nullable:false})
    @Type(() => ReadDateWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstReadDateOrThrowArgs {
    @Field(() => ReadDateWhereInput, {nullable:true})
    @Type(() => ReadDateWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadDateWhereInput>;
    @Field(() => [ReadDateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadDateOrderByWithRelationInput>;
    @Field(() => ReadDateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReadDateScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReadDateScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstReadDateArgs {
    @Field(() => ReadDateWhereInput, {nullable:true})
    @Type(() => ReadDateWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadDateWhereInput>;
    @Field(() => [ReadDateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadDateOrderByWithRelationInput>;
    @Field(() => ReadDateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReadDateScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReadDateScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyReadDateArgs {
    @Field(() => ReadDateWhereInput, {nullable:true})
    @Type(() => ReadDateWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadDateWhereInput>;
    @Field(() => [ReadDateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadDateOrderByWithRelationInput>;
    @Field(() => ReadDateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReadDateScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReadDateScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueReadDateOrThrowArgs {
    @Field(() => ReadDateWhereUniqueInput, {nullable:false})
    @Type(() => ReadDateWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueReadDateArgs {
    @Field(() => ReadDateWhereUniqueInput, {nullable:false})
    @Type(() => ReadDateWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ReadDateAggregateArgs {
    @Field(() => ReadDateWhereInput, {nullable:true})
    @Type(() => ReadDateWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadDateWhereInput>;
    @Field(() => [ReadDateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadDateOrderByWithRelationInput>;
    @Field(() => ReadDateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReadDateCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReadDateCountAggregateInput>;
    @Field(() => ReadDateMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReadDateMinAggregateInput>;
    @Field(() => ReadDateMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReadDateMaxAggregateInput>;
}

@InputType()
export class ReadDateCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    finishedDate?: true;
    @Field(() => Boolean, {nullable:true})
    active?: true;
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ReadDateCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    startDate!: number;
    @Field(() => Int, {nullable:false})
    finishedDate!: number;
    @Field(() => Int, {nullable:false})
    active!: number;
    @Field(() => Int, {nullable:false})
    userBookId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ReadDateCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    finishedDate?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: `${SortOrder}`;
}

@InputType()
export class ReadDateCreateManyUserBookInputEnvelope {
    @Field(() => [ReadDateCreateManyUserBookInput], {nullable:false})
    @Type(() => ReadDateCreateManyUserBookInput)
    data!: Array<ReadDateCreateManyUserBookInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ReadDateCreateManyUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:false})
    active!: boolean;
}

@InputType()
export class ReadDateCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:false})
    active!: boolean;
    @Field(() => String, {nullable:true})
    userBookId?: string;
}

@InputType()
export class ReadDateCreateNestedManyWithoutUserBookInput {
    @Field(() => [ReadDateCreateWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateCreateWithoutUserBookInput)
    create?: Array<ReadDateCreateWithoutUserBookInput>;
    @Field(() => [ReadDateCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<ReadDateCreateOrConnectWithoutUserBookInput>;
    @Field(() => ReadDateCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => ReadDateCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof ReadDateCreateManyUserBookInputEnvelope>;
    @Field(() => [ReadDateWhereUniqueInput], {nullable:true})
    @Type(() => ReadDateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReadDateCreateNestedOneWithoutReadingProgressInput {
    @Field(() => ReadDateCreateWithoutReadingProgressInput, {nullable:true})
    @Type(() => ReadDateCreateWithoutReadingProgressInput)
    create?: InstanceType<typeof ReadDateCreateWithoutReadingProgressInput>;
    @Field(() => ReadDateCreateOrConnectWithoutReadingProgressInput, {nullable:true})
    @Type(() => ReadDateCreateOrConnectWithoutReadingProgressInput)
    connectOrCreate?: InstanceType<typeof ReadDateCreateOrConnectWithoutReadingProgressInput>;
    @Field(() => ReadDateWhereUniqueInput, {nullable:true})
    @Type(() => ReadDateWhereUniqueInput)
    connect?: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
}

@InputType()
export class ReadDateCreateOrConnectWithoutReadingProgressInput {
    @Field(() => ReadDateWhereUniqueInput, {nullable:false})
    @Type(() => ReadDateWhereUniqueInput)
    where!: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
    @Field(() => ReadDateCreateWithoutReadingProgressInput, {nullable:false})
    @Type(() => ReadDateCreateWithoutReadingProgressInput)
    create!: InstanceType<typeof ReadDateCreateWithoutReadingProgressInput>;
}

@InputType()
export class ReadDateCreateOrConnectWithoutUserBookInput {
    @Field(() => ReadDateWhereUniqueInput, {nullable:false})
    @Type(() => ReadDateWhereUniqueInput)
    where!: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
    @Field(() => ReadDateCreateWithoutUserBookInput, {nullable:false})
    @Type(() => ReadDateCreateWithoutUserBookInput)
    create!: InstanceType<typeof ReadDateCreateWithoutUserBookInput>;
}

@InputType()
export class ReadDateCreateWithoutReadingProgressInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:false})
    active!: boolean;
    @Field(() => UserBookCreateNestedOneWithoutReadDatesInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutReadDatesInput>;
}

@InputType()
export class ReadDateCreateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:false})
    active!: boolean;
    @Field(() => ReadingProgressCreateNestedOneWithoutReadDateInput, {nullable:true})
    readingProgress?: InstanceType<typeof ReadingProgressCreateNestedOneWithoutReadDateInput>;
}

@InputType()
export class ReadDateCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:false})
    active!: boolean;
    @Field(() => ReadingProgressCreateNestedOneWithoutReadDateInput, {nullable:true})
    readingProgress?: InstanceType<typeof ReadingProgressCreateNestedOneWithoutReadDateInput>;
    @Field(() => UserBookCreateNestedOneWithoutReadDatesInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutReadDatesInput>;
}

@ArgsType()
export class ReadDateGroupByArgs {
    @Field(() => ReadDateWhereInput, {nullable:true})
    @Type(() => ReadDateWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadDateWhereInput>;
    @Field(() => [ReadDateOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReadDateOrderByWithAggregationInput>;
    @Field(() => [ReadDateScalarFieldEnum], {nullable:false})
    by!: Array<`${ReadDateScalarFieldEnum}`>;
    @Field(() => ReadDateScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ReadDateScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReadDateCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReadDateCountAggregateInput>;
    @Field(() => ReadDateMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReadDateMinAggregateInput>;
    @Field(() => ReadDateMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReadDateMaxAggregateInput>;
}

@ObjectType()
export class ReadDateGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    startDate!: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:false})
    active!: boolean;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => ReadDateCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReadDateCountAggregate>;
    @Field(() => ReadDateMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReadDateMinAggregate>;
    @Field(() => ReadDateMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReadDateMaxAggregate>;
}

@InputType()
export class ReadDateListRelationFilter {
    @Field(() => ReadDateWhereInput, {nullable:true})
    every?: InstanceType<typeof ReadDateWhereInput>;
    @Field(() => ReadDateWhereInput, {nullable:true})
    some?: InstanceType<typeof ReadDateWhereInput>;
    @Field(() => ReadDateWhereInput, {nullable:true})
    none?: InstanceType<typeof ReadDateWhereInput>;
}

@InputType()
export class ReadDateMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    finishedDate?: true;
    @Field(() => Boolean, {nullable:true})
    active?: true;
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
}

@ObjectType()
export class ReadDateMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    userBookId?: string;
}

@InputType()
export class ReadDateMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    finishedDate?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: `${SortOrder}`;
}

@InputType()
export class ReadDateMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    finishedDate?: true;
    @Field(() => Boolean, {nullable:true})
    active?: true;
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
}

@ObjectType()
export class ReadDateMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    userBookId?: string;
}

@InputType()
export class ReadDateMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    finishedDate?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: `${SortOrder}`;
}

@InputType()
export class ReadDateOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class ReadDateOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    finishedDate?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userBookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => ReadDateCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReadDateCountOrderByAggregateInput>;
    @Field(() => ReadDateMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReadDateMaxOrderByAggregateInput>;
    @Field(() => ReadDateMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReadDateMinOrderByAggregateInput>;
}

@InputType()
export class ReadDateOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    finishedDate?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userBookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => ReadingProgressOrderByWithRelationInput, {nullable:true})
    readingProgress?: InstanceType<typeof ReadingProgressOrderByWithRelationInput>;
    @Field(() => UserBookOrderByWithRelationInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookOrderByWithRelationInput>;
}

@InputType()
export class ReadDateScalarRelationFilter {
    @Field(() => ReadDateWhereInput, {nullable:true})
    is?: InstanceType<typeof ReadDateWhereInput>;
    @Field(() => ReadDateWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ReadDateWhereInput>;
}

@InputType()
export class ReadDateScalarWhereWithAggregatesInput {
    @Field(() => [ReadDateScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReadDateScalarWhereWithAggregatesInput>;
    @Field(() => [ReadDateScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReadDateScalarWhereWithAggregatesInput>;
    @Field(() => [ReadDateScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReadDateScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    finishedDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ReadDateScalarWhereInput {
    @Field(() => [ReadDateScalarWhereInput], {nullable:true})
    AND?: Array<ReadDateScalarWhereInput>;
    @Field(() => [ReadDateScalarWhereInput], {nullable:true})
    OR?: Array<ReadDateScalarWhereInput>;
    @Field(() => [ReadDateScalarWhereInput], {nullable:true})
    NOT?: Array<ReadDateScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    finishedDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => BoolFilter, {nullable:true})
    active?: InstanceType<typeof BoolFilter>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class ReadDateUncheckedCreateNestedManyWithoutUserBookInput {
    @Field(() => [ReadDateCreateWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateCreateWithoutUserBookInput)
    create?: Array<ReadDateCreateWithoutUserBookInput>;
    @Field(() => [ReadDateCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<ReadDateCreateOrConnectWithoutUserBookInput>;
    @Field(() => ReadDateCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => ReadDateCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof ReadDateCreateManyUserBookInputEnvelope>;
    @Field(() => [ReadDateWhereUniqueInput], {nullable:true})
    @Type(() => ReadDateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReadDateUncheckedCreateWithoutReadingProgressInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:false})
    active!: boolean;
    @Field(() => String, {nullable:true})
    userBookId?: string;
}

@InputType()
export class ReadDateUncheckedCreateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:false})
    active!: boolean;
    @Field(() => ReadingProgressUncheckedCreateNestedOneWithoutReadDateInput, {nullable:true})
    readingProgress?: InstanceType<typeof ReadingProgressUncheckedCreateNestedOneWithoutReadDateInput>;
}

@InputType()
export class ReadDateUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:false})
    active!: boolean;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => ReadingProgressUncheckedCreateNestedOneWithoutReadDateInput, {nullable:true})
    readingProgress?: InstanceType<typeof ReadingProgressUncheckedCreateNestedOneWithoutReadDateInput>;
}

@InputType()
export class ReadDateUncheckedUpdateManyWithoutUserBookNestedInput {
    @Field(() => [ReadDateCreateWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateCreateWithoutUserBookInput)
    create?: Array<ReadDateCreateWithoutUserBookInput>;
    @Field(() => [ReadDateCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<ReadDateCreateOrConnectWithoutUserBookInput>;
    @Field(() => [ReadDateUpsertWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateUpsertWithWhereUniqueWithoutUserBookInput)
    upsert?: Array<ReadDateUpsertWithWhereUniqueWithoutUserBookInput>;
    @Field(() => ReadDateCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => ReadDateCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof ReadDateCreateManyUserBookInputEnvelope>;
    @Field(() => [ReadDateWhereUniqueInput], {nullable:true})
    @Type(() => ReadDateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>>;
    @Field(() => [ReadDateWhereUniqueInput], {nullable:true})
    @Type(() => ReadDateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>>;
    @Field(() => [ReadDateWhereUniqueInput], {nullable:true})
    @Type(() => ReadDateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>>;
    @Field(() => [ReadDateWhereUniqueInput], {nullable:true})
    @Type(() => ReadDateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>>;
    @Field(() => [ReadDateUpdateWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateUpdateWithWhereUniqueWithoutUserBookInput)
    update?: Array<ReadDateUpdateWithWhereUniqueWithoutUserBookInput>;
    @Field(() => [ReadDateUpdateManyWithWhereWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateUpdateManyWithWhereWithoutUserBookInput)
    updateMany?: Array<ReadDateUpdateManyWithWhereWithoutUserBookInput>;
    @Field(() => [ReadDateScalarWhereInput], {nullable:true})
    @Type(() => ReadDateScalarWhereInput)
    deleteMany?: Array<ReadDateScalarWhereInput>;
}

@InputType()
export class ReadDateUncheckedUpdateManyWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
}

@InputType()
export class ReadDateUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    userBookId?: string;
}

@InputType()
export class ReadDateUncheckedUpdateWithoutReadingProgressInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    userBookId?: string;
}

@InputType()
export class ReadDateUncheckedUpdateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => ReadingProgressUncheckedUpdateOneWithoutReadDateNestedInput, {nullable:true})
    readingProgress?: InstanceType<typeof ReadingProgressUncheckedUpdateOneWithoutReadDateNestedInput>;
}

@InputType()
export class ReadDateUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => ReadingProgressUncheckedUpdateOneWithoutReadDateNestedInput, {nullable:true})
    readingProgress?: InstanceType<typeof ReadingProgressUncheckedUpdateOneWithoutReadDateNestedInput>;
}

@InputType()
export class ReadDateUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
}

@InputType()
export class ReadDateUpdateManyWithWhereWithoutUserBookInput {
    @Field(() => ReadDateScalarWhereInput, {nullable:false})
    @Type(() => ReadDateScalarWhereInput)
    where!: InstanceType<typeof ReadDateScalarWhereInput>;
    @Field(() => ReadDateUpdateManyMutationInput, {nullable:false})
    @Type(() => ReadDateUpdateManyMutationInput)
    data!: InstanceType<typeof ReadDateUpdateManyMutationInput>;
}

@InputType()
export class ReadDateUpdateManyWithoutUserBookNestedInput {
    @Field(() => [ReadDateCreateWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateCreateWithoutUserBookInput)
    create?: Array<ReadDateCreateWithoutUserBookInput>;
    @Field(() => [ReadDateCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<ReadDateCreateOrConnectWithoutUserBookInput>;
    @Field(() => [ReadDateUpsertWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateUpsertWithWhereUniqueWithoutUserBookInput)
    upsert?: Array<ReadDateUpsertWithWhereUniqueWithoutUserBookInput>;
    @Field(() => ReadDateCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => ReadDateCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof ReadDateCreateManyUserBookInputEnvelope>;
    @Field(() => [ReadDateWhereUniqueInput], {nullable:true})
    @Type(() => ReadDateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>>;
    @Field(() => [ReadDateWhereUniqueInput], {nullable:true})
    @Type(() => ReadDateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>>;
    @Field(() => [ReadDateWhereUniqueInput], {nullable:true})
    @Type(() => ReadDateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>>;
    @Field(() => [ReadDateWhereUniqueInput], {nullable:true})
    @Type(() => ReadDateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>>;
    @Field(() => [ReadDateUpdateWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateUpdateWithWhereUniqueWithoutUserBookInput)
    update?: Array<ReadDateUpdateWithWhereUniqueWithoutUserBookInput>;
    @Field(() => [ReadDateUpdateManyWithWhereWithoutUserBookInput], {nullable:true})
    @Type(() => ReadDateUpdateManyWithWhereWithoutUserBookInput)
    updateMany?: Array<ReadDateUpdateManyWithWhereWithoutUserBookInput>;
    @Field(() => [ReadDateScalarWhereInput], {nullable:true})
    @Type(() => ReadDateScalarWhereInput)
    deleteMany?: Array<ReadDateScalarWhereInput>;
}

@InputType()
export class ReadDateUpdateOneRequiredWithoutReadingProgressNestedInput {
    @Field(() => ReadDateCreateWithoutReadingProgressInput, {nullable:true})
    @Type(() => ReadDateCreateWithoutReadingProgressInput)
    create?: InstanceType<typeof ReadDateCreateWithoutReadingProgressInput>;
    @Field(() => ReadDateCreateOrConnectWithoutReadingProgressInput, {nullable:true})
    @Type(() => ReadDateCreateOrConnectWithoutReadingProgressInput)
    connectOrCreate?: InstanceType<typeof ReadDateCreateOrConnectWithoutReadingProgressInput>;
    @Field(() => ReadDateUpsertWithoutReadingProgressInput, {nullable:true})
    @Type(() => ReadDateUpsertWithoutReadingProgressInput)
    upsert?: InstanceType<typeof ReadDateUpsertWithoutReadingProgressInput>;
    @Field(() => ReadDateWhereUniqueInput, {nullable:true})
    @Type(() => ReadDateWhereUniqueInput)
    connect?: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
    @Field(() => ReadDateUpdateToOneWithWhereWithoutReadingProgressInput, {nullable:true})
    @Type(() => ReadDateUpdateToOneWithWhereWithoutReadingProgressInput)
    update?: InstanceType<typeof ReadDateUpdateToOneWithWhereWithoutReadingProgressInput>;
}

@InputType()
export class ReadDateUpdateToOneWithWhereWithoutReadingProgressInput {
    @Field(() => ReadDateWhereInput, {nullable:true})
    @Type(() => ReadDateWhereInput)
    where?: InstanceType<typeof ReadDateWhereInput>;
    @Field(() => ReadDateUpdateWithoutReadingProgressInput, {nullable:false})
    @Type(() => ReadDateUpdateWithoutReadingProgressInput)
    data!: InstanceType<typeof ReadDateUpdateWithoutReadingProgressInput>;
}

@InputType()
export class ReadDateUpdateWithWhereUniqueWithoutUserBookInput {
    @Field(() => ReadDateWhereUniqueInput, {nullable:false})
    @Type(() => ReadDateWhereUniqueInput)
    where!: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
    @Field(() => ReadDateUpdateWithoutUserBookInput, {nullable:false})
    @Type(() => ReadDateUpdateWithoutUserBookInput)
    data!: InstanceType<typeof ReadDateUpdateWithoutUserBookInput>;
}

@InputType()
export class ReadDateUpdateWithoutReadingProgressInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => UserBookUpdateOneWithoutReadDatesNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneWithoutReadDatesNestedInput>;
}

@InputType()
export class ReadDateUpdateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => ReadingProgressUpdateOneWithoutReadDateNestedInput, {nullable:true})
    readingProgress?: InstanceType<typeof ReadingProgressUpdateOneWithoutReadDateNestedInput>;
}

@InputType()
export class ReadDateUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    finishedDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    active?: boolean;
    @Field(() => ReadingProgressUpdateOneWithoutReadDateNestedInput, {nullable:true})
    readingProgress?: InstanceType<typeof ReadingProgressUpdateOneWithoutReadDateNestedInput>;
    @Field(() => UserBookUpdateOneWithoutReadDatesNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneWithoutReadDatesNestedInput>;
}

@InputType()
export class ReadDateUpsertWithWhereUniqueWithoutUserBookInput {
    @Field(() => ReadDateWhereUniqueInput, {nullable:false})
    @Type(() => ReadDateWhereUniqueInput)
    where!: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
    @Field(() => ReadDateUpdateWithoutUserBookInput, {nullable:false})
    @Type(() => ReadDateUpdateWithoutUserBookInput)
    update!: InstanceType<typeof ReadDateUpdateWithoutUserBookInput>;
    @Field(() => ReadDateCreateWithoutUserBookInput, {nullable:false})
    @Type(() => ReadDateCreateWithoutUserBookInput)
    create!: InstanceType<typeof ReadDateCreateWithoutUserBookInput>;
}

@InputType()
export class ReadDateUpsertWithoutReadingProgressInput {
    @Field(() => ReadDateUpdateWithoutReadingProgressInput, {nullable:false})
    @Type(() => ReadDateUpdateWithoutReadingProgressInput)
    update!: InstanceType<typeof ReadDateUpdateWithoutReadingProgressInput>;
    @Field(() => ReadDateCreateWithoutReadingProgressInput, {nullable:false})
    @Type(() => ReadDateCreateWithoutReadingProgressInput)
    create!: InstanceType<typeof ReadDateCreateWithoutReadingProgressInput>;
    @Field(() => ReadDateWhereInput, {nullable:true})
    @Type(() => ReadDateWhereInput)
    where?: InstanceType<typeof ReadDateWhereInput>;
}

@InputType()
export class ReadDateWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [ReadDateWhereInput], {nullable:true})
    AND?: Array<ReadDateWhereInput>;
    @Field(() => [ReadDateWhereInput], {nullable:true})
    OR?: Array<ReadDateWhereInput>;
    @Field(() => [ReadDateWhereInput], {nullable:true})
    NOT?: Array<ReadDateWhereInput>;
    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    finishedDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => BoolFilter, {nullable:true})
    active?: InstanceType<typeof BoolFilter>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
    @Field(() => ReadingProgressScalarRelationFilter, {nullable:true})
    readingProgress?: InstanceType<typeof ReadingProgressScalarRelationFilter>;
    @Field(() => UserBookScalarRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookScalarRelationFilter>;
}

@InputType()
export class ReadDateWhereInput {
    @Field(() => [ReadDateWhereInput], {nullable:true})
    AND?: Array<ReadDateWhereInput>;
    @Field(() => [ReadDateWhereInput], {nullable:true})
    OR?: Array<ReadDateWhereInput>;
    @Field(() => [ReadDateWhereInput], {nullable:true})
    NOT?: Array<ReadDateWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    finishedDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => BoolFilter, {nullable:true})
    active?: InstanceType<typeof BoolFilter>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
    @Field(() => ReadingProgressScalarRelationFilter, {nullable:true})
    readingProgress?: InstanceType<typeof ReadingProgressScalarRelationFilter>;
    @Field(() => UserBookScalarRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookScalarRelationFilter>;
}

@ObjectType()
export class ReadDate {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    startDate!: Date;
    @Field(() => Date, {nullable:true})
    finishedDate!: Date | null;
    @Field(() => Boolean, {nullable:false})
    active!: boolean;
    @Field(() => String, {nullable:true})
    userBookId!: string | null;
    @Field(() => ReadingProgress, {nullable:true})
    readingProgress?: InstanceType<typeof ReadingProgress> | null;
    @Field(() => UserBook, {nullable:true})
    userBook?: InstanceType<typeof UserBook> | null;
}

@ArgsType()
export class UpdateManyReadDateArgs {
    @Field(() => ReadDateUpdateManyMutationInput, {nullable:false})
    @Type(() => ReadDateUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ReadDateUpdateManyMutationInput>;
    @Field(() => ReadDateWhereInput, {nullable:true})
    @Type(() => ReadDateWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadDateWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneReadDateArgs {
    @Field(() => ReadDateUpdateInput, {nullable:false})
    @Type(() => ReadDateUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ReadDateUpdateInput>;
    @Field(() => ReadDateWhereUniqueInput, {nullable:false})
    @Type(() => ReadDateWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneReadDateArgs {
    @Field(() => ReadDateWhereUniqueInput, {nullable:false})
    @Type(() => ReadDateWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadDateWhereUniqueInput, 'id'>;
    @Field(() => ReadDateCreateInput, {nullable:false})
    @Type(() => ReadDateCreateInput)
    create!: InstanceType<typeof ReadDateCreateInput>;
    @Field(() => ReadDateUpdateInput, {nullable:false})
    @Type(() => ReadDateUpdateInput)
    update!: InstanceType<typeof ReadDateUpdateInput>;
}

@ObjectType()
export class AggregateReadingProgress {
    @Field(() => ReadingProgressCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReadingProgressCountAggregate>;
    @Field(() => ReadingProgressAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ReadingProgressAvgAggregate>;
    @Field(() => ReadingProgressSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ReadingProgressSumAggregate>;
    @Field(() => ReadingProgressMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReadingProgressMinAggregate>;
    @Field(() => ReadingProgressMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReadingProgressMaxAggregate>;
}

@ArgsType()
export class CreateManyReadingProgressArgs {
    @Field(() => [ReadingProgressCreateManyInput], {nullable:false})
    @Type(() => ReadingProgressCreateManyInput)
    @ValidateNested()
    data!: Array<ReadingProgressCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneReadingProgressArgs {
    @Field(() => ReadingProgressCreateInput, {nullable:false})
    @Type(() => ReadingProgressCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof ReadingProgressCreateInput>;
}

@ArgsType()
export class DeleteManyReadingProgressArgs {
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    @Type(() => ReadingProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingProgressWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneReadingProgressArgs {
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:false})
    @Type(() => ReadingProgressWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
}

@ArgsType()
export class FindFirstReadingProgressOrThrowArgs {
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    @Type(() => ReadingProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingProgressWhereInput>;
    @Field(() => [ReadingProgressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadingProgressOrderByWithRelationInput>;
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReadingProgressScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReadingProgressScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstReadingProgressArgs {
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    @Type(() => ReadingProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingProgressWhereInput>;
    @Field(() => [ReadingProgressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadingProgressOrderByWithRelationInput>;
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReadingProgressScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReadingProgressScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyReadingProgressArgs {
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    @Type(() => ReadingProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingProgressWhereInput>;
    @Field(() => [ReadingProgressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadingProgressOrderByWithRelationInput>;
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReadingProgressScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReadingProgressScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueReadingProgressOrThrowArgs {
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:false})
    @Type(() => ReadingProgressWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
}

@ArgsType()
export class FindUniqueReadingProgressArgs {
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:false})
    @Type(() => ReadingProgressWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
}

@ArgsType()
export class ReadingProgressAggregateArgs {
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    @Type(() => ReadingProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingProgressWhereInput>;
    @Field(() => [ReadingProgressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadingProgressOrderByWithRelationInput>;
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReadingProgressCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReadingProgressCountAggregateInput>;
    @Field(() => ReadingProgressAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ReadingProgressAvgAggregateInput>;
    @Field(() => ReadingProgressSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ReadingProgressSumAggregateInput>;
    @Field(() => ReadingProgressMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReadingProgressMinAggregateInput>;
    @Field(() => ReadingProgressMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReadingProgressMaxAggregateInput>;
}

@InputType()
export class ReadingProgressAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    capacity?: true;
    @Field(() => Boolean, {nullable:true})
    progress?: true;
}

@ObjectType()
export class ReadingProgressAvgAggregate {
    @Field(() => Float, {nullable:true})
    capacity?: number;
    @Field(() => Float, {nullable:true})
    progress?: number;
}

@InputType()
export class ReadingProgressAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
}

@InputType()
export class ReadingProgressCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    capacity?: true;
    @Field(() => Boolean, {nullable:true})
    progress?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    readDateId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ReadingProgressCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => Int, {nullable:false})
    type!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    readDateId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ReadingProgressCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    readDateId?: `${SortOrder}`;
}

@InputType()
export class ReadingProgressCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    readDateId!: string;
}

@InputType()
export class ReadingProgressCreateNestedOneWithoutReadDateInput {
    @Field(() => ReadingProgressCreateWithoutReadDateInput, {nullable:true})
    @Type(() => ReadingProgressCreateWithoutReadDateInput)
    create?: InstanceType<typeof ReadingProgressCreateWithoutReadDateInput>;
    @Field(() => ReadingProgressCreateOrConnectWithoutReadDateInput, {nullable:true})
    @Type(() => ReadingProgressCreateOrConnectWithoutReadDateInput)
    connectOrCreate?: InstanceType<typeof ReadingProgressCreateOrConnectWithoutReadDateInput>;
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:true})
    @Type(() => ReadingProgressWhereUniqueInput)
    connect?: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
}

@InputType()
export class ReadingProgressCreateOrConnectWithoutReadDateInput {
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:false})
    @Type(() => ReadingProgressWhereUniqueInput)
    where!: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
    @Field(() => ReadingProgressCreateWithoutReadDateInput, {nullable:false})
    @Type(() => ReadingProgressCreateWithoutReadDateInput)
    create!: InstanceType<typeof ReadingProgressCreateWithoutReadDateInput>;
}

@InputType()
export class ReadingProgressCreateWithoutReadDateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReadingProgressCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ReadDateCreateNestedOneWithoutReadingProgressInput, {nullable:false})
    readDate!: InstanceType<typeof ReadDateCreateNestedOneWithoutReadingProgressInput>;
}

@ArgsType()
export class ReadingProgressGroupByArgs {
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    @Type(() => ReadingProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingProgressWhereInput>;
    @Field(() => [ReadingProgressOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReadingProgressOrderByWithAggregationInput>;
    @Field(() => [ReadingProgressScalarFieldEnum], {nullable:false})
    by!: Array<`${ReadingProgressScalarFieldEnum}`>;
    @Field(() => ReadingProgressScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ReadingProgressScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReadingProgressCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReadingProgressCountAggregateInput>;
    @Field(() => ReadingProgressAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ReadingProgressAvgAggregateInput>;
    @Field(() => ReadingProgressSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ReadingProgressSumAggregateInput>;
    @Field(() => ReadingProgressMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReadingProgressMinAggregateInput>;
    @Field(() => ReadingProgressMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReadingProgressMaxAggregateInput>;
}

@ObjectType()
export class ReadingProgressGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => String, {nullable:false})
    readDateId!: string;
    @Field(() => ReadingProgressCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReadingProgressCountAggregate>;
    @Field(() => ReadingProgressAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ReadingProgressAvgAggregate>;
    @Field(() => ReadingProgressSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ReadingProgressSumAggregate>;
    @Field(() => ReadingProgressMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReadingProgressMinAggregate>;
    @Field(() => ReadingProgressMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReadingProgressMaxAggregate>;
}

@InputType()
export class ReadingProgressMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    capacity?: true;
    @Field(() => Boolean, {nullable:true})
    progress?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    readDateId?: true;
}

@ObjectType()
export class ReadingProgressMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    readDateId?: string;
}

@InputType()
export class ReadingProgressMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    readDateId?: `${SortOrder}`;
}

@InputType()
export class ReadingProgressMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    capacity?: true;
    @Field(() => Boolean, {nullable:true})
    progress?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    readDateId?: true;
}

@ObjectType()
export class ReadingProgressMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    readDateId?: string;
}

@InputType()
export class ReadingProgressMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    readDateId?: `${SortOrder}`;
}

@InputType()
export class ReadingProgressOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    readDateId?: `${SortOrder}`;
    @Field(() => ReadingProgressCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReadingProgressCountOrderByAggregateInput>;
    @Field(() => ReadingProgressAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ReadingProgressAvgOrderByAggregateInput>;
    @Field(() => ReadingProgressMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReadingProgressMaxOrderByAggregateInput>;
    @Field(() => ReadingProgressMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReadingProgressMinOrderByAggregateInput>;
    @Field(() => ReadingProgressSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ReadingProgressSumOrderByAggregateInput>;
}

@InputType()
export class ReadingProgressOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    readDateId?: `${SortOrder}`;
    @Field(() => ReadDateOrderByWithRelationInput, {nullable:true})
    readDate?: InstanceType<typeof ReadDateOrderByWithRelationInput>;
}

@InputType()
export class ReadingProgressScalarRelationFilter {
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    is?: InstanceType<typeof ReadingProgressWhereInput>;
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ReadingProgressWhereInput>;
}

@InputType()
export class ReadingProgressScalarWhereWithAggregatesInput {
    @Field(() => [ReadingProgressScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReadingProgressScalarWhereWithAggregatesInput>;
    @Field(() => [ReadingProgressScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReadingProgressScalarWhereWithAggregatesInput>;
    @Field(() => [ReadingProgressScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReadingProgressScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    capacity?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    progress?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => EnumPROGRESS_TYPEWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof EnumPROGRESS_TYPEWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    readDateId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ReadingProgressSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    capacity?: true;
    @Field(() => Boolean, {nullable:true})
    progress?: true;
}

@ObjectType()
export class ReadingProgressSumAggregate {
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
}

@InputType()
export class ReadingProgressSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
}

@InputType()
export class ReadingProgressUncheckedCreateNestedOneWithoutReadDateInput {
    @Field(() => ReadingProgressCreateWithoutReadDateInput, {nullable:true})
    @Type(() => ReadingProgressCreateWithoutReadDateInput)
    create?: InstanceType<typeof ReadingProgressCreateWithoutReadDateInput>;
    @Field(() => ReadingProgressCreateOrConnectWithoutReadDateInput, {nullable:true})
    @Type(() => ReadingProgressCreateOrConnectWithoutReadDateInput)
    connectOrCreate?: InstanceType<typeof ReadingProgressCreateOrConnectWithoutReadDateInput>;
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:true})
    @Type(() => ReadingProgressWhereUniqueInput)
    connect?: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
}

@InputType()
export class ReadingProgressUncheckedCreateWithoutReadDateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReadingProgressUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    readDateId!: string;
}

@InputType()
export class ReadingProgressUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    readDateId?: string;
}

@InputType()
export class ReadingProgressUncheckedUpdateOneWithoutReadDateNestedInput {
    @Field(() => ReadingProgressCreateWithoutReadDateInput, {nullable:true})
    @Type(() => ReadingProgressCreateWithoutReadDateInput)
    create?: InstanceType<typeof ReadingProgressCreateWithoutReadDateInput>;
    @Field(() => ReadingProgressCreateOrConnectWithoutReadDateInput, {nullable:true})
    @Type(() => ReadingProgressCreateOrConnectWithoutReadDateInput)
    connectOrCreate?: InstanceType<typeof ReadingProgressCreateOrConnectWithoutReadDateInput>;
    @Field(() => ReadingProgressUpsertWithoutReadDateInput, {nullable:true})
    @Type(() => ReadingProgressUpsertWithoutReadDateInput)
    upsert?: InstanceType<typeof ReadingProgressUpsertWithoutReadDateInput>;
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    @Type(() => ReadingProgressWhereInput)
    disconnect?: InstanceType<typeof ReadingProgressWhereInput>;
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    @Type(() => ReadingProgressWhereInput)
    delete?: InstanceType<typeof ReadingProgressWhereInput>;
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:true})
    @Type(() => ReadingProgressWhereUniqueInput)
    connect?: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
    @Field(() => ReadingProgressUpdateToOneWithWhereWithoutReadDateInput, {nullable:true})
    @Type(() => ReadingProgressUpdateToOneWithWhereWithoutReadDateInput)
    update?: InstanceType<typeof ReadingProgressUpdateToOneWithWhereWithoutReadDateInput>;
}

@InputType()
export class ReadingProgressUncheckedUpdateWithoutReadDateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReadingProgressUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    readDateId?: string;
}

@InputType()
export class ReadingProgressUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReadingProgressUpdateOneWithoutReadDateNestedInput {
    @Field(() => ReadingProgressCreateWithoutReadDateInput, {nullable:true})
    @Type(() => ReadingProgressCreateWithoutReadDateInput)
    create?: InstanceType<typeof ReadingProgressCreateWithoutReadDateInput>;
    @Field(() => ReadingProgressCreateOrConnectWithoutReadDateInput, {nullable:true})
    @Type(() => ReadingProgressCreateOrConnectWithoutReadDateInput)
    connectOrCreate?: InstanceType<typeof ReadingProgressCreateOrConnectWithoutReadDateInput>;
    @Field(() => ReadingProgressUpsertWithoutReadDateInput, {nullable:true})
    @Type(() => ReadingProgressUpsertWithoutReadDateInput)
    upsert?: InstanceType<typeof ReadingProgressUpsertWithoutReadDateInput>;
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    @Type(() => ReadingProgressWhereInput)
    disconnect?: InstanceType<typeof ReadingProgressWhereInput>;
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    @Type(() => ReadingProgressWhereInput)
    delete?: InstanceType<typeof ReadingProgressWhereInput>;
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:true})
    @Type(() => ReadingProgressWhereUniqueInput)
    connect?: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
    @Field(() => ReadingProgressUpdateToOneWithWhereWithoutReadDateInput, {nullable:true})
    @Type(() => ReadingProgressUpdateToOneWithWhereWithoutReadDateInput)
    update?: InstanceType<typeof ReadingProgressUpdateToOneWithWhereWithoutReadDateInput>;
}

@InputType()
export class ReadingProgressUpdateToOneWithWhereWithoutReadDateInput {
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    @Type(() => ReadingProgressWhereInput)
    where?: InstanceType<typeof ReadingProgressWhereInput>;
    @Field(() => ReadingProgressUpdateWithoutReadDateInput, {nullable:false})
    @Type(() => ReadingProgressUpdateWithoutReadDateInput)
    data!: InstanceType<typeof ReadingProgressUpdateWithoutReadDateInput>;
}

@InputType()
export class ReadingProgressUpdateWithoutReadDateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReadingProgressUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ReadDateUpdateOneRequiredWithoutReadingProgressNestedInput, {nullable:true})
    readDate?: InstanceType<typeof ReadDateUpdateOneRequiredWithoutReadingProgressNestedInput>;
}

@InputType()
export class ReadingProgressUpsertWithoutReadDateInput {
    @Field(() => ReadingProgressUpdateWithoutReadDateInput, {nullable:false})
    @Type(() => ReadingProgressUpdateWithoutReadDateInput)
    update!: InstanceType<typeof ReadingProgressUpdateWithoutReadDateInput>;
    @Field(() => ReadingProgressCreateWithoutReadDateInput, {nullable:false})
    @Type(() => ReadingProgressCreateWithoutReadDateInput)
    create!: InstanceType<typeof ReadingProgressCreateWithoutReadDateInput>;
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    @Type(() => ReadingProgressWhereInput)
    where?: InstanceType<typeof ReadingProgressWhereInput>;
}

@InputType()
export class ReadingProgressWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    readDateId?: string;
    @Field(() => [ReadingProgressWhereInput], {nullable:true})
    AND?: Array<ReadingProgressWhereInput>;
    @Field(() => [ReadingProgressWhereInput], {nullable:true})
    OR?: Array<ReadingProgressWhereInput>;
    @Field(() => [ReadingProgressWhereInput], {nullable:true})
    NOT?: Array<ReadingProgressWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    capacity?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    progress?: InstanceType<typeof IntFilter>;
    @Field(() => EnumPROGRESS_TYPEFilter, {nullable:true})
    type?: InstanceType<typeof EnumPROGRESS_TYPEFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => ReadDateScalarRelationFilter, {nullable:true})
    readDate?: InstanceType<typeof ReadDateScalarRelationFilter>;
}

@InputType()
export class ReadingProgressWhereInput {
    @Field(() => [ReadingProgressWhereInput], {nullable:true})
    AND?: Array<ReadingProgressWhereInput>;
    @Field(() => [ReadingProgressWhereInput], {nullable:true})
    OR?: Array<ReadingProgressWhereInput>;
    @Field(() => [ReadingProgressWhereInput], {nullable:true})
    NOT?: Array<ReadingProgressWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    capacity?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    progress?: InstanceType<typeof IntFilter>;
    @Field(() => EnumPROGRESS_TYPEFilter, {nullable:true})
    type?: InstanceType<typeof EnumPROGRESS_TYPEFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    readDateId?: InstanceType<typeof StringFilter>;
    @Field(() => ReadDateScalarRelationFilter, {nullable:true})
    readDate?: InstanceType<typeof ReadDateScalarRelationFilter>;
}

@ObjectType()
export class ReadingProgress {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:false})
    capacity!: number;
    @Field(() => Int, {nullable:false})
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:false})
    readDateId!: string;
    @Field(() => ReadDate, {nullable:false})
    readDate?: InstanceType<typeof ReadDate>;
}

@ArgsType()
export class UpdateManyReadingProgressArgs {
    @Field(() => ReadingProgressUpdateManyMutationInput, {nullable:false})
    @Type(() => ReadingProgressUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ReadingProgressUpdateManyMutationInput>;
    @Field(() => ReadingProgressWhereInput, {nullable:true})
    @Type(() => ReadingProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingProgressWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneReadingProgressArgs {
    @Field(() => ReadingProgressUpdateInput, {nullable:false})
    @Type(() => ReadingProgressUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ReadingProgressUpdateInput>;
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:false})
    @Type(() => ReadingProgressWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
}

@ArgsType()
export class UpsertOneReadingProgressArgs {
    @Field(() => ReadingProgressWhereUniqueInput, {nullable:false})
    @Type(() => ReadingProgressWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadingProgressWhereUniqueInput, 'id' | 'readDateId'>;
    @Field(() => ReadingProgressCreateInput, {nullable:false})
    @Type(() => ReadingProgressCreateInput)
    create!: InstanceType<typeof ReadingProgressCreateInput>;
    @Field(() => ReadingProgressUpdateInput, {nullable:false})
    @Type(() => ReadingProgressUpdateInput)
    update!: InstanceType<typeof ReadingProgressUpdateInput>;
}

@ObjectType()
export class AggregateReadingSession {
    @Field(() => ReadingSessionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReadingSessionCountAggregate>;
    @Field(() => ReadingSessionAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ReadingSessionAvgAggregate>;
    @Field(() => ReadingSessionSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ReadingSessionSumAggregate>;
    @Field(() => ReadingSessionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReadingSessionMinAggregate>;
    @Field(() => ReadingSessionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReadingSessionMaxAggregate>;
}

@ArgsType()
export class CreateManyReadingSessionArgs {
    @Field(() => [ReadingSessionCreateManyInput], {nullable:false})
    @Type(() => ReadingSessionCreateManyInput)
    @ValidateNested()
    data!: Array<ReadingSessionCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneReadingSessionArgs {
    @Field(() => ReadingSessionCreateInput, {nullable:false})
    @Type(() => ReadingSessionCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof ReadingSessionCreateInput>;
}

@ArgsType()
export class DeleteManyReadingSessionArgs {
    @Field(() => ReadingSessionWhereInput, {nullable:true})
    @Type(() => ReadingSessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingSessionWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneReadingSessionArgs {
    @Field(() => ReadingSessionWhereUniqueInput, {nullable:false})
    @Type(() => ReadingSessionWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstReadingSessionOrThrowArgs {
    @Field(() => ReadingSessionWhereInput, {nullable:true})
    @Type(() => ReadingSessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingSessionWhereInput>;
    @Field(() => [ReadingSessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadingSessionOrderByWithRelationInput>;
    @Field(() => ReadingSessionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReadingSessionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReadingSessionScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstReadingSessionArgs {
    @Field(() => ReadingSessionWhereInput, {nullable:true})
    @Type(() => ReadingSessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingSessionWhereInput>;
    @Field(() => [ReadingSessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadingSessionOrderByWithRelationInput>;
    @Field(() => ReadingSessionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReadingSessionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReadingSessionScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyReadingSessionArgs {
    @Field(() => ReadingSessionWhereInput, {nullable:true})
    @Type(() => ReadingSessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingSessionWhereInput>;
    @Field(() => [ReadingSessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadingSessionOrderByWithRelationInput>;
    @Field(() => ReadingSessionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReadingSessionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReadingSessionScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueReadingSessionOrThrowArgs {
    @Field(() => ReadingSessionWhereUniqueInput, {nullable:false})
    @Type(() => ReadingSessionWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueReadingSessionArgs {
    @Field(() => ReadingSessionWhereUniqueInput, {nullable:false})
    @Type(() => ReadingSessionWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ReadingSessionAggregateArgs {
    @Field(() => ReadingSessionWhereInput, {nullable:true})
    @Type(() => ReadingSessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingSessionWhereInput>;
    @Field(() => [ReadingSessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReadingSessionOrderByWithRelationInput>;
    @Field(() => ReadingSessionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReadingSessionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReadingSessionCountAggregateInput>;
    @Field(() => ReadingSessionAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ReadingSessionAvgAggregateInput>;
    @Field(() => ReadingSessionSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ReadingSessionSumAggregateInput>;
    @Field(() => ReadingSessionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReadingSessionMinAggregateInput>;
    @Field(() => ReadingSessionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReadingSessionMaxAggregateInput>;
}

@InputType()
export class ReadingSessionAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    capacity?: true;
    @Field(() => Boolean, {nullable:true})
    progress?: true;
}

@ObjectType()
export class ReadingSessionAvgAggregate {
    @Field(() => Float, {nullable:true})
    capacity?: number;
    @Field(() => Float, {nullable:true})
    progress?: number;
}

@InputType()
export class ReadingSessionAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
}

@InputType()
export class ReadingSessionCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    capacity?: true;
    @Field(() => Boolean, {nullable:true})
    progress?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    readId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ReadingSessionCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => Int, {nullable:false})
    type!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    readId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ReadingSessionCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    readId?: `${SortOrder}`;
}

@InputType()
export class ReadingSessionCreateManyReadInputEnvelope {
    @Field(() => [ReadingSessionCreateManyReadInput], {nullable:false})
    @Type(() => ReadingSessionCreateManyReadInput)
    data!: Array<ReadingSessionCreateManyReadInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ReadingSessionCreateManyReadInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReadingSessionCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    readId!: string;
}

@InputType()
export class ReadingSessionCreateNestedManyWithoutReadInput {
    @Field(() => [ReadingSessionCreateWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionCreateWithoutReadInput)
    create?: Array<ReadingSessionCreateWithoutReadInput>;
    @Field(() => [ReadingSessionCreateOrConnectWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionCreateOrConnectWithoutReadInput)
    connectOrCreate?: Array<ReadingSessionCreateOrConnectWithoutReadInput>;
    @Field(() => ReadingSessionCreateManyReadInputEnvelope, {nullable:true})
    @Type(() => ReadingSessionCreateManyReadInputEnvelope)
    createMany?: InstanceType<typeof ReadingSessionCreateManyReadInputEnvelope>;
    @Field(() => [ReadingSessionWhereUniqueInput], {nullable:true})
    @Type(() => ReadingSessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReadingSessionCreateOrConnectWithoutReadInput {
    @Field(() => ReadingSessionWhereUniqueInput, {nullable:false})
    @Type(() => ReadingSessionWhereUniqueInput)
    where!: Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>;
    @Field(() => ReadingSessionCreateWithoutReadInput, {nullable:false})
    @Type(() => ReadingSessionCreateWithoutReadInput)
    create!: InstanceType<typeof ReadingSessionCreateWithoutReadInput>;
}

@InputType()
export class ReadingSessionCreateWithoutReadInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReadingSessionCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ReadCreateNestedOneWithoutReadingSessionsInput, {nullable:false})
    read!: InstanceType<typeof ReadCreateNestedOneWithoutReadingSessionsInput>;
}

@ArgsType()
export class ReadingSessionGroupByArgs {
    @Field(() => ReadingSessionWhereInput, {nullable:true})
    @Type(() => ReadingSessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingSessionWhereInput>;
    @Field(() => [ReadingSessionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReadingSessionOrderByWithAggregationInput>;
    @Field(() => [ReadingSessionScalarFieldEnum], {nullable:false})
    by!: Array<`${ReadingSessionScalarFieldEnum}`>;
    @Field(() => ReadingSessionScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ReadingSessionScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReadingSessionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReadingSessionCountAggregateInput>;
    @Field(() => ReadingSessionAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ReadingSessionAvgAggregateInput>;
    @Field(() => ReadingSessionSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ReadingSessionSumAggregateInput>;
    @Field(() => ReadingSessionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReadingSessionMinAggregateInput>;
    @Field(() => ReadingSessionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReadingSessionMaxAggregateInput>;
}

@ObjectType()
export class ReadingSessionGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => String, {nullable:false})
    readId!: string;
    @Field(() => ReadingSessionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReadingSessionCountAggregate>;
    @Field(() => ReadingSessionAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ReadingSessionAvgAggregate>;
    @Field(() => ReadingSessionSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ReadingSessionSumAggregate>;
    @Field(() => ReadingSessionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReadingSessionMinAggregate>;
    @Field(() => ReadingSessionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReadingSessionMaxAggregate>;
}

@InputType()
export class ReadingSessionListRelationFilter {
    @Field(() => ReadingSessionWhereInput, {nullable:true})
    every?: InstanceType<typeof ReadingSessionWhereInput>;
    @Field(() => ReadingSessionWhereInput, {nullable:true})
    some?: InstanceType<typeof ReadingSessionWhereInput>;
    @Field(() => ReadingSessionWhereInput, {nullable:true})
    none?: InstanceType<typeof ReadingSessionWhereInput>;
}

@InputType()
export class ReadingSessionMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    capacity?: true;
    @Field(() => Boolean, {nullable:true})
    progress?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    readId?: true;
}

@ObjectType()
export class ReadingSessionMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    readId?: string;
}

@InputType()
export class ReadingSessionMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    readId?: `${SortOrder}`;
}

@InputType()
export class ReadingSessionMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    capacity?: true;
    @Field(() => Boolean, {nullable:true})
    progress?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    readId?: true;
}

@ObjectType()
export class ReadingSessionMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    readId?: string;
}

@InputType()
export class ReadingSessionMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    readId?: `${SortOrder}`;
}

@InputType()
export class ReadingSessionOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class ReadingSessionOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    readId?: `${SortOrder}`;
    @Field(() => ReadingSessionCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReadingSessionCountOrderByAggregateInput>;
    @Field(() => ReadingSessionAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ReadingSessionAvgOrderByAggregateInput>;
    @Field(() => ReadingSessionMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReadingSessionMaxOrderByAggregateInput>;
    @Field(() => ReadingSessionMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReadingSessionMinOrderByAggregateInput>;
    @Field(() => ReadingSessionSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ReadingSessionSumOrderByAggregateInput>;
}

@InputType()
export class ReadingSessionOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    readId?: `${SortOrder}`;
    @Field(() => ReadOrderByWithRelationInput, {nullable:true})
    read?: InstanceType<typeof ReadOrderByWithRelationInput>;
}

@InputType()
export class ReadingSessionScalarWhereWithAggregatesInput {
    @Field(() => [ReadingSessionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReadingSessionScalarWhereWithAggregatesInput>;
    @Field(() => [ReadingSessionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReadingSessionScalarWhereWithAggregatesInput>;
    @Field(() => [ReadingSessionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReadingSessionScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    capacity?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    progress?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => EnumPROGRESS_TYPEWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof EnumPROGRESS_TYPEWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    readId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ReadingSessionScalarWhereInput {
    @Field(() => [ReadingSessionScalarWhereInput], {nullable:true})
    AND?: Array<ReadingSessionScalarWhereInput>;
    @Field(() => [ReadingSessionScalarWhereInput], {nullable:true})
    OR?: Array<ReadingSessionScalarWhereInput>;
    @Field(() => [ReadingSessionScalarWhereInput], {nullable:true})
    NOT?: Array<ReadingSessionScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    capacity?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    progress?: InstanceType<typeof IntFilter>;
    @Field(() => EnumPROGRESS_TYPEFilter, {nullable:true})
    type?: InstanceType<typeof EnumPROGRESS_TYPEFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    readId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class ReadingSessionSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    capacity?: true;
    @Field(() => Boolean, {nullable:true})
    progress?: true;
}

@ObjectType()
export class ReadingSessionSumAggregate {
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
}

@InputType()
export class ReadingSessionSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    capacity?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    progress?: `${SortOrder}`;
}

@InputType()
export class ReadingSessionUncheckedCreateNestedManyWithoutReadInput {
    @Field(() => [ReadingSessionCreateWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionCreateWithoutReadInput)
    create?: Array<ReadingSessionCreateWithoutReadInput>;
    @Field(() => [ReadingSessionCreateOrConnectWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionCreateOrConnectWithoutReadInput)
    connectOrCreate?: Array<ReadingSessionCreateOrConnectWithoutReadInput>;
    @Field(() => ReadingSessionCreateManyReadInputEnvelope, {nullable:true})
    @Type(() => ReadingSessionCreateManyReadInputEnvelope)
    createMany?: InstanceType<typeof ReadingSessionCreateManyReadInputEnvelope>;
    @Field(() => [ReadingSessionWhereUniqueInput], {nullable:true})
    @Type(() => ReadingSessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReadingSessionUncheckedCreateWithoutReadInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReadingSessionUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    capacity!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    readId!: string;
}

@InputType()
export class ReadingSessionUncheckedUpdateManyWithoutReadNestedInput {
    @Field(() => [ReadingSessionCreateWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionCreateWithoutReadInput)
    create?: Array<ReadingSessionCreateWithoutReadInput>;
    @Field(() => [ReadingSessionCreateOrConnectWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionCreateOrConnectWithoutReadInput)
    connectOrCreate?: Array<ReadingSessionCreateOrConnectWithoutReadInput>;
    @Field(() => [ReadingSessionUpsertWithWhereUniqueWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionUpsertWithWhereUniqueWithoutReadInput)
    upsert?: Array<ReadingSessionUpsertWithWhereUniqueWithoutReadInput>;
    @Field(() => ReadingSessionCreateManyReadInputEnvelope, {nullable:true})
    @Type(() => ReadingSessionCreateManyReadInputEnvelope)
    createMany?: InstanceType<typeof ReadingSessionCreateManyReadInputEnvelope>;
    @Field(() => [ReadingSessionWhereUniqueInput], {nullable:true})
    @Type(() => ReadingSessionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>>;
    @Field(() => [ReadingSessionWhereUniqueInput], {nullable:true})
    @Type(() => ReadingSessionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>>;
    @Field(() => [ReadingSessionWhereUniqueInput], {nullable:true})
    @Type(() => ReadingSessionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>>;
    @Field(() => [ReadingSessionWhereUniqueInput], {nullable:true})
    @Type(() => ReadingSessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>>;
    @Field(() => [ReadingSessionUpdateWithWhereUniqueWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionUpdateWithWhereUniqueWithoutReadInput)
    update?: Array<ReadingSessionUpdateWithWhereUniqueWithoutReadInput>;
    @Field(() => [ReadingSessionUpdateManyWithWhereWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionUpdateManyWithWhereWithoutReadInput)
    updateMany?: Array<ReadingSessionUpdateManyWithWhereWithoutReadInput>;
    @Field(() => [ReadingSessionScalarWhereInput], {nullable:true})
    @Type(() => ReadingSessionScalarWhereInput)
    deleteMany?: Array<ReadingSessionScalarWhereInput>;
}

@InputType()
export class ReadingSessionUncheckedUpdateManyWithoutReadInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReadingSessionUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    readId?: string;
}

@InputType()
export class ReadingSessionUncheckedUpdateWithoutReadInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReadingSessionUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    readId?: string;
}

@InputType()
export class ReadingSessionUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReadingSessionUpdateManyWithWhereWithoutReadInput {
    @Field(() => ReadingSessionScalarWhereInput, {nullable:false})
    @Type(() => ReadingSessionScalarWhereInput)
    where!: InstanceType<typeof ReadingSessionScalarWhereInput>;
    @Field(() => ReadingSessionUpdateManyMutationInput, {nullable:false})
    @Type(() => ReadingSessionUpdateManyMutationInput)
    data!: InstanceType<typeof ReadingSessionUpdateManyMutationInput>;
}

@InputType()
export class ReadingSessionUpdateManyWithoutReadNestedInput {
    @Field(() => [ReadingSessionCreateWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionCreateWithoutReadInput)
    create?: Array<ReadingSessionCreateWithoutReadInput>;
    @Field(() => [ReadingSessionCreateOrConnectWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionCreateOrConnectWithoutReadInput)
    connectOrCreate?: Array<ReadingSessionCreateOrConnectWithoutReadInput>;
    @Field(() => [ReadingSessionUpsertWithWhereUniqueWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionUpsertWithWhereUniqueWithoutReadInput)
    upsert?: Array<ReadingSessionUpsertWithWhereUniqueWithoutReadInput>;
    @Field(() => ReadingSessionCreateManyReadInputEnvelope, {nullable:true})
    @Type(() => ReadingSessionCreateManyReadInputEnvelope)
    createMany?: InstanceType<typeof ReadingSessionCreateManyReadInputEnvelope>;
    @Field(() => [ReadingSessionWhereUniqueInput], {nullable:true})
    @Type(() => ReadingSessionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>>;
    @Field(() => [ReadingSessionWhereUniqueInput], {nullable:true})
    @Type(() => ReadingSessionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>>;
    @Field(() => [ReadingSessionWhereUniqueInput], {nullable:true})
    @Type(() => ReadingSessionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>>;
    @Field(() => [ReadingSessionWhereUniqueInput], {nullable:true})
    @Type(() => ReadingSessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>>;
    @Field(() => [ReadingSessionUpdateWithWhereUniqueWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionUpdateWithWhereUniqueWithoutReadInput)
    update?: Array<ReadingSessionUpdateWithWhereUniqueWithoutReadInput>;
    @Field(() => [ReadingSessionUpdateManyWithWhereWithoutReadInput], {nullable:true})
    @Type(() => ReadingSessionUpdateManyWithWhereWithoutReadInput)
    updateMany?: Array<ReadingSessionUpdateManyWithWhereWithoutReadInput>;
    @Field(() => [ReadingSessionScalarWhereInput], {nullable:true})
    @Type(() => ReadingSessionScalarWhereInput)
    deleteMany?: Array<ReadingSessionScalarWhereInput>;
}

@InputType()
export class ReadingSessionUpdateWithWhereUniqueWithoutReadInput {
    @Field(() => ReadingSessionWhereUniqueInput, {nullable:false})
    @Type(() => ReadingSessionWhereUniqueInput)
    where!: Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>;
    @Field(() => ReadingSessionUpdateWithoutReadInput, {nullable:false})
    @Type(() => ReadingSessionUpdateWithoutReadInput)
    data!: InstanceType<typeof ReadingSessionUpdateWithoutReadInput>;
}

@InputType()
export class ReadingSessionUpdateWithoutReadInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class ReadingSessionUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    capacity?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    progress?: number;
    @Field(() => PROGRESS_TYPE, {nullable:true})
    type?: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => ReadUpdateOneRequiredWithoutReadingSessionsNestedInput, {nullable:true})
    read?: InstanceType<typeof ReadUpdateOneRequiredWithoutReadingSessionsNestedInput>;
}

@InputType()
export class ReadingSessionUpsertWithWhereUniqueWithoutReadInput {
    @Field(() => ReadingSessionWhereUniqueInput, {nullable:false})
    @Type(() => ReadingSessionWhereUniqueInput)
    where!: Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>;
    @Field(() => ReadingSessionUpdateWithoutReadInput, {nullable:false})
    @Type(() => ReadingSessionUpdateWithoutReadInput)
    update!: InstanceType<typeof ReadingSessionUpdateWithoutReadInput>;
    @Field(() => ReadingSessionCreateWithoutReadInput, {nullable:false})
    @Type(() => ReadingSessionCreateWithoutReadInput)
    create!: InstanceType<typeof ReadingSessionCreateWithoutReadInput>;
}

@InputType()
export class ReadingSessionWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [ReadingSessionWhereInput], {nullable:true})
    AND?: Array<ReadingSessionWhereInput>;
    @Field(() => [ReadingSessionWhereInput], {nullable:true})
    OR?: Array<ReadingSessionWhereInput>;
    @Field(() => [ReadingSessionWhereInput], {nullable:true})
    NOT?: Array<ReadingSessionWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    capacity?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    progress?: InstanceType<typeof IntFilter>;
    @Field(() => EnumPROGRESS_TYPEFilter, {nullable:true})
    type?: InstanceType<typeof EnumPROGRESS_TYPEFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    readId?: InstanceType<typeof StringFilter>;
    @Field(() => ReadScalarRelationFilter, {nullable:true})
    read?: InstanceType<typeof ReadScalarRelationFilter>;
}

@InputType()
export class ReadingSessionWhereInput {
    @Field(() => [ReadingSessionWhereInput], {nullable:true})
    AND?: Array<ReadingSessionWhereInput>;
    @Field(() => [ReadingSessionWhereInput], {nullable:true})
    OR?: Array<ReadingSessionWhereInput>;
    @Field(() => [ReadingSessionWhereInput], {nullable:true})
    NOT?: Array<ReadingSessionWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    capacity?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    progress?: InstanceType<typeof IntFilter>;
    @Field(() => EnumPROGRESS_TYPEFilter, {nullable:true})
    type?: InstanceType<typeof EnumPROGRESS_TYPEFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    readId?: InstanceType<typeof StringFilter>;
    @Field(() => ReadScalarRelationFilter, {nullable:true})
    read?: InstanceType<typeof ReadScalarRelationFilter>;
}

@ObjectType()
export class ReadingSession {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:false})
    capacity!: number;
    @Field(() => Int, {nullable:false})
    progress!: number;
    @Field(() => PROGRESS_TYPE, {nullable:false})
    type!: `${PROGRESS_TYPE}`;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:false})
    readId!: string;
    @Field(() => Read, {nullable:false})
    read?: InstanceType<typeof Read>;
}

@ArgsType()
export class UpdateManyReadingSessionArgs {
    @Field(() => ReadingSessionUpdateManyMutationInput, {nullable:false})
    @Type(() => ReadingSessionUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ReadingSessionUpdateManyMutationInput>;
    @Field(() => ReadingSessionWhereInput, {nullable:true})
    @Type(() => ReadingSessionWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReadingSessionWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneReadingSessionArgs {
    @Field(() => ReadingSessionUpdateInput, {nullable:false})
    @Type(() => ReadingSessionUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ReadingSessionUpdateInput>;
    @Field(() => ReadingSessionWhereUniqueInput, {nullable:false})
    @Type(() => ReadingSessionWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneReadingSessionArgs {
    @Field(() => ReadingSessionWhereUniqueInput, {nullable:false})
    @Type(() => ReadingSessionWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReadingSessionWhereUniqueInput, 'id'>;
    @Field(() => ReadingSessionCreateInput, {nullable:false})
    @Type(() => ReadingSessionCreateInput)
    create!: InstanceType<typeof ReadingSessionCreateInput>;
    @Field(() => ReadingSessionUpdateInput, {nullable:false})
    @Type(() => ReadingSessionUpdateInput)
    update!: InstanceType<typeof ReadingSessionUpdateInput>;
}

@ObjectType()
export class AggregateShelf {
    @Field(() => ShelfCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ShelfCountAggregate>;
    @Field(() => ShelfMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ShelfMinAggregate>;
    @Field(() => ShelfMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ShelfMaxAggregate>;
}

@ArgsType()
export class CreateManyShelfArgs {
    @Field(() => [ShelfCreateManyInput], {nullable:false})
    @Type(() => ShelfCreateManyInput)
    @ValidateNested()
    data!: Array<ShelfCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneShelfArgs {
    @Field(() => ShelfCreateInput, {nullable:false})
    @Type(() => ShelfCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof ShelfCreateInput>;
}

@ArgsType()
export class DeleteManyShelfArgs {
    @Field(() => ShelfWhereInput, {nullable:true})
    @Type(() => ShelfWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneShelfArgs {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
}

@ArgsType()
export class FindFirstShelfOrThrowArgs {
    @Field(() => ShelfWhereInput, {nullable:true})
    @Type(() => ShelfWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => [ShelfOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShelfOrderByWithRelationInput>;
    @Field(() => ShelfWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ShelfScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ShelfScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstShelfArgs {
    @Field(() => ShelfWhereInput, {nullable:true})
    @Type(() => ShelfWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => [ShelfOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShelfOrderByWithRelationInput>;
    @Field(() => ShelfWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ShelfScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ShelfScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyShelfArgs {
    @Field(() => ShelfWhereInput, {nullable:true})
    @Type(() => ShelfWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => [ShelfOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShelfOrderByWithRelationInput>;
    @Field(() => ShelfWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ShelfScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ShelfScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueShelfOrThrowArgs {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
}

@ArgsType()
export class FindUniqueShelfArgs {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
}

@ArgsType()
export class ShelfAggregateArgs {
    @Field(() => ShelfWhereInput, {nullable:true})
    @Type(() => ShelfWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => [ShelfOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShelfOrderByWithRelationInput>;
    @Field(() => ShelfWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ShelfCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ShelfCountAggregateInput>;
    @Field(() => ShelfMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ShelfMinAggregateInput>;
    @Field(() => ShelfMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ShelfMaxAggregateInput>;
}

@InputType()
export class ShelfCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    dateTime?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ShelfCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    slug!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    dateTime!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ShelfCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    dateTime?: `${SortOrder}`;
}

@ObjectType()
export class ShelfCount {
    @Field(() => Int, {nullable:false})
    userBooks?: number;
}

@InputType()
export class ShelfCreateManyUserInputEnvelope {
    @Field(() => [ShelfCreateManyUserInput], {nullable:false})
    @Type(() => ShelfCreateManyUserInput)
    data!: Array<ShelfCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ShelfCreateManyUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
}

@InputType()
export class ShelfCreateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
}

@InputType()
export class ShelfCreateNestedManyWithoutUserInput {
    @Field(() => [ShelfCreateWithoutUserInput], {nullable:true})
    @Type(() => ShelfCreateWithoutUserInput)
    create?: Array<ShelfCreateWithoutUserInput>;
    @Field(() => [ShelfCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ShelfCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ShelfCreateOrConnectWithoutUserInput>;
    @Field(() => ShelfCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ShelfCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof ShelfCreateManyUserInputEnvelope>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>>;
}

@InputType()
export class ShelfCreateNestedOneWithoutUserBooksInput {
    @Field(() => ShelfCreateWithoutUserBooksInput, {nullable:true})
    @Type(() => ShelfCreateWithoutUserBooksInput)
    create?: InstanceType<typeof ShelfCreateWithoutUserBooksInput>;
    @Field(() => ShelfCreateOrConnectWithoutUserBooksInput, {nullable:true})
    @Type(() => ShelfCreateOrConnectWithoutUserBooksInput)
    connectOrCreate?: InstanceType<typeof ShelfCreateOrConnectWithoutUserBooksInput>;
    @Field(() => ShelfWhereUniqueInput, {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    connect?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
}

@InputType()
export class ShelfCreateOrConnectWithoutUserBooksInput {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
    @Field(() => ShelfCreateWithoutUserBooksInput, {nullable:false})
    @Type(() => ShelfCreateWithoutUserBooksInput)
    create!: InstanceType<typeof ShelfCreateWithoutUserBooksInput>;
}

@InputType()
export class ShelfCreateOrConnectWithoutUserInput {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
    @Field(() => ShelfCreateWithoutUserInput, {nullable:false})
    @Type(() => ShelfCreateWithoutUserInput)
    create!: InstanceType<typeof ShelfCreateWithoutUserInput>;
}

@InputType()
export class ShelfCreateWithoutUserBooksInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
    @Field(() => UserCreateNestedOneWithoutShelvesInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutShelvesInput>;
}

@InputType()
export class ShelfCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
    @Field(() => UserBookShelvesCreateNestedManyWithoutShelfInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutShelfInput>;
}

@InputType()
export class ShelfCreateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
    @Field(() => UserCreateNestedOneWithoutShelvesInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutShelvesInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutShelfInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutShelfInput>;
}

@ArgsType()
export class ShelfGroupByArgs {
    @Field(() => ShelfWhereInput, {nullable:true})
    @Type(() => ShelfWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => [ShelfOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ShelfOrderByWithAggregationInput>;
    @Field(() => [ShelfScalarFieldEnum], {nullable:false})
    by!: Array<`${ShelfScalarFieldEnum}`>;
    @Field(() => ShelfScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ShelfScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ShelfCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ShelfCountAggregateInput>;
    @Field(() => ShelfMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ShelfMinAggregateInput>;
    @Field(() => ShelfMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ShelfMaxAggregateInput>;
}

@ObjectType()
export class ShelfGroupBy {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
    @Field(() => ShelfCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ShelfCountAggregate>;
    @Field(() => ShelfMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ShelfMinAggregate>;
    @Field(() => ShelfMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ShelfMaxAggregate>;
}

@InputType()
export class ShelfIdentifierCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
}

@InputType()
export class ShelfListRelationFilter {
    @Field(() => ShelfWhereInput, {nullable:true})
    every?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => ShelfWhereInput, {nullable:true})
    some?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => ShelfWhereInput, {nullable:true})
    none?: InstanceType<typeof ShelfWhereInput>;
}

@InputType()
export class ShelfMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    dateTime?: true;
}

@ObjectType()
export class ShelfMaxAggregate {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
}

@InputType()
export class ShelfMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    dateTime?: `${SortOrder}`;
}

@InputType()
export class ShelfMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    slug?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    dateTime?: true;
}

@ObjectType()
export class ShelfMinAggregate {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
}

@InputType()
export class ShelfMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    dateTime?: `${SortOrder}`;
}

@InputType()
export class ShelfOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class ShelfOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    dateTime?: InstanceType<typeof SortOrderInput>;
    @Field(() => ShelfCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ShelfCountOrderByAggregateInput>;
    @Field(() => ShelfMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ShelfMaxOrderByAggregateInput>;
    @Field(() => ShelfMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ShelfMinOrderByAggregateInput>;
}

@InputType()
export class ShelfOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    dateTime?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => UserBookShelvesOrderByRelationAggregateInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookShelvesOrderByRelationAggregateInput>;
}

@InputType()
export class ShelfScalarRelationFilter {
    @Field(() => ShelfWhereInput, {nullable:true})
    is?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => ShelfWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ShelfWhereInput>;
}

@InputType()
export class ShelfScalarWhereWithAggregatesInput {
    @Field(() => [ShelfScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ShelfScalarWhereWithAggregatesInput>;
    @Field(() => [ShelfScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ShelfScalarWhereWithAggregatesInput>;
    @Field(() => [ShelfScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ShelfScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    dateTime?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ShelfScalarWhereInput {
    @Field(() => [ShelfScalarWhereInput], {nullable:true})
    AND?: Array<ShelfScalarWhereInput>;
    @Field(() => [ShelfScalarWhereInput], {nullable:true})
    OR?: Array<ShelfScalarWhereInput>;
    @Field(() => [ShelfScalarWhereInput], {nullable:true})
    NOT?: Array<ShelfScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    dateTime?: InstanceType<typeof StringFilter>;
}

@InputType()
export class ShelfUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [ShelfCreateWithoutUserInput], {nullable:true})
    @Type(() => ShelfCreateWithoutUserInput)
    create?: Array<ShelfCreateWithoutUserInput>;
    @Field(() => [ShelfCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ShelfCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ShelfCreateOrConnectWithoutUserInput>;
    @Field(() => ShelfCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ShelfCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof ShelfCreateManyUserInputEnvelope>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>>;
}

@InputType()
export class ShelfUncheckedCreateWithoutUserBooksInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
}

@InputType()
export class ShelfUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutShelfInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutShelfInput>;
}

@InputType()
export class ShelfUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    slug!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutShelfInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutShelfInput>;
}

@InputType()
export class ShelfUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [ShelfCreateWithoutUserInput], {nullable:true})
    @Type(() => ShelfCreateWithoutUserInput)
    create?: Array<ShelfCreateWithoutUserInput>;
    @Field(() => [ShelfCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ShelfCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ShelfCreateOrConnectWithoutUserInput>;
    @Field(() => [ShelfUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ShelfUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ShelfUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => ShelfCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ShelfCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof ShelfCreateManyUserInputEnvelope>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>>;
    @Field(() => [ShelfUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ShelfUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ShelfUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [ShelfUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ShelfUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ShelfUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [ShelfScalarWhereInput], {nullable:true})
    @Type(() => ShelfScalarWhereInput)
    deleteMany?: Array<ShelfScalarWhereInput>;
}

@InputType()
export class ShelfUncheckedUpdateManyWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
}

@InputType()
export class ShelfUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
}

@InputType()
export class ShelfUncheckedUpdateWithoutUserBooksInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
}

@InputType()
export class ShelfUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutShelfNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutShelfNestedInput>;
}

@InputType()
export class ShelfUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutShelfNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutShelfNestedInput>;
}

@InputType()
export class ShelfUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
}

@InputType()
export class ShelfUpdateManyWithWhereWithoutUserInput {
    @Field(() => ShelfScalarWhereInput, {nullable:false})
    @Type(() => ShelfScalarWhereInput)
    where!: InstanceType<typeof ShelfScalarWhereInput>;
    @Field(() => ShelfUpdateManyMutationInput, {nullable:false})
    @Type(() => ShelfUpdateManyMutationInput)
    data!: InstanceType<typeof ShelfUpdateManyMutationInput>;
}

@InputType()
export class ShelfUpdateManyWithoutUserNestedInput {
    @Field(() => [ShelfCreateWithoutUserInput], {nullable:true})
    @Type(() => ShelfCreateWithoutUserInput)
    create?: Array<ShelfCreateWithoutUserInput>;
    @Field(() => [ShelfCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ShelfCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ShelfCreateOrConnectWithoutUserInput>;
    @Field(() => [ShelfUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ShelfUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ShelfUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => ShelfCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ShelfCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof ShelfCreateManyUserInputEnvelope>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>>;
    @Field(() => [ShelfUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ShelfUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ShelfUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [ShelfUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ShelfUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ShelfUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [ShelfScalarWhereInput], {nullable:true})
    @Type(() => ShelfScalarWhereInput)
    deleteMany?: Array<ShelfScalarWhereInput>;
}

@InputType()
export class ShelfUpdateOneRequiredWithoutUserBooksNestedInput {
    @Field(() => ShelfCreateWithoutUserBooksInput, {nullable:true})
    @Type(() => ShelfCreateWithoutUserBooksInput)
    create?: InstanceType<typeof ShelfCreateWithoutUserBooksInput>;
    @Field(() => ShelfCreateOrConnectWithoutUserBooksInput, {nullable:true})
    @Type(() => ShelfCreateOrConnectWithoutUserBooksInput)
    connectOrCreate?: InstanceType<typeof ShelfCreateOrConnectWithoutUserBooksInput>;
    @Field(() => ShelfUpsertWithoutUserBooksInput, {nullable:true})
    @Type(() => ShelfUpsertWithoutUserBooksInput)
    upsert?: InstanceType<typeof ShelfUpsertWithoutUserBooksInput>;
    @Field(() => ShelfWhereUniqueInput, {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    connect?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
    @Field(() => ShelfUpdateToOneWithWhereWithoutUserBooksInput, {nullable:true})
    @Type(() => ShelfUpdateToOneWithWhereWithoutUserBooksInput)
    update?: InstanceType<typeof ShelfUpdateToOneWithWhereWithoutUserBooksInput>;
}

@InputType()
export class ShelfUpdateToOneWithWhereWithoutUserBooksInput {
    @Field(() => ShelfWhereInput, {nullable:true})
    @Type(() => ShelfWhereInput)
    where?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => ShelfUpdateWithoutUserBooksInput, {nullable:false})
    @Type(() => ShelfUpdateWithoutUserBooksInput)
    data!: InstanceType<typeof ShelfUpdateWithoutUserBooksInput>;
}

@InputType()
export class ShelfUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
    @Field(() => ShelfUpdateWithoutUserInput, {nullable:false})
    @Type(() => ShelfUpdateWithoutUserInput)
    data!: InstanceType<typeof ShelfUpdateWithoutUserInput>;
}

@InputType()
export class ShelfUpdateWithoutUserBooksInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
    @Field(() => UserUpdateOneWithoutShelvesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutShelvesNestedInput>;
}

@InputType()
export class ShelfUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
    @Field(() => UserBookShelvesUpdateManyWithoutShelfNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookShelvesUpdateManyWithoutShelfNestedInput>;
}

@InputType()
export class ShelfUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    dateTime?: string;
    @Field(() => UserUpdateOneWithoutShelvesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutShelvesNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutShelfNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookShelvesUpdateManyWithoutShelfNestedInput>;
}

@InputType()
export class ShelfUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
    @Field(() => ShelfUpdateWithoutUserInput, {nullable:false})
    @Type(() => ShelfUpdateWithoutUserInput)
    update!: InstanceType<typeof ShelfUpdateWithoutUserInput>;
    @Field(() => ShelfCreateWithoutUserInput, {nullable:false})
    @Type(() => ShelfCreateWithoutUserInput)
    create!: InstanceType<typeof ShelfCreateWithoutUserInput>;
}

@InputType()
export class ShelfUpsertWithoutUserBooksInput {
    @Field(() => ShelfUpdateWithoutUserBooksInput, {nullable:false})
    @Type(() => ShelfUpdateWithoutUserBooksInput)
    update!: InstanceType<typeof ShelfUpdateWithoutUserBooksInput>;
    @Field(() => ShelfCreateWithoutUserBooksInput, {nullable:false})
    @Type(() => ShelfCreateWithoutUserBooksInput)
    create!: InstanceType<typeof ShelfCreateWithoutUserBooksInput>;
    @Field(() => ShelfWhereInput, {nullable:true})
    @Type(() => ShelfWhereInput)
    where?: InstanceType<typeof ShelfWhereInput>;
}

@InputType()
export class ShelfWhereUniqueInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    slug?: string;
    @Field(() => ShelfIdentifierCompoundUniqueInput, {nullable:true})
    identifier?: InstanceType<typeof ShelfIdentifierCompoundUniqueInput>;
    @Field(() => [ShelfWhereInput], {nullable:true})
    AND?: Array<ShelfWhereInput>;
    @Field(() => [ShelfWhereInput], {nullable:true})
    OR?: Array<ShelfWhereInput>;
    @Field(() => [ShelfWhereInput], {nullable:true})
    NOT?: Array<ShelfWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    dateTime?: InstanceType<typeof StringFilter>;
    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserScalarRelationFilter>;
    @Field(() => UserBookShelvesListRelationFilter, {nullable:true})
    userBooks?: InstanceType<typeof UserBookShelvesListRelationFilter>;
}

@InputType()
export class ShelfWhereInput {
    @Field(() => [ShelfWhereInput], {nullable:true})
    AND?: Array<ShelfWhereInput>;
    @Field(() => [ShelfWhereInput], {nullable:true})
    OR?: Array<ShelfWhereInput>;
    @Field(() => [ShelfWhereInput], {nullable:true})
    NOT?: Array<ShelfWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    slug?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    dateTime?: InstanceType<typeof StringFilter>;
    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserScalarRelationFilter>;
    @Field(() => UserBookShelvesListRelationFilter, {nullable:true})
    userBooks?: InstanceType<typeof UserBookShelvesListRelationFilter>;
}

@ObjectType()
export class Shelf {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    userId!: string | null;
    @Field(() => String, {nullable:true})
    dateTime!: string | null;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
    @Field(() => [UserBookShelves], {nullable:true})
    userBooks?: Array<UserBookShelves>;
    @Field(() => ShelfCount, {nullable:false})
    _count?: InstanceType<typeof ShelfCount>;
}

@ArgsType()
export class UpdateManyShelfArgs {
    @Field(() => ShelfUpdateManyMutationInput, {nullable:false})
    @Type(() => ShelfUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ShelfUpdateManyMutationInput>;
    @Field(() => ShelfWhereInput, {nullable:true})
    @Type(() => ShelfWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ShelfWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneShelfArgs {
    @Field(() => ShelfUpdateInput, {nullable:false})
    @Type(() => ShelfUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ShelfUpdateInput>;
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
}

@ArgsType()
export class UpsertOneShelfArgs {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'slug' | 'identifier'>;
    @Field(() => ShelfCreateInput, {nullable:false})
    @Type(() => ShelfCreateInput)
    create!: InstanceType<typeof ShelfCreateInput>;
    @Field(() => ShelfUpdateInput, {nullable:false})
    @Type(() => ShelfUpdateInput)
    update!: InstanceType<typeof ShelfUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    @ValidateNested()
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    hashedPassword?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    location?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    hashedRefreshToken?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    passwordUpdatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    avatarImage?: true;
    @Field(() => Boolean, {nullable:true})
    emailVerified?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    username!: number;
    @HideField()
    hashedPassword!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    location!: number;
    @Field(() => Int, {nullable:false})
    bio!: number;
    @HideField()
    hashedRefreshToken!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    passwordUpdatedAt!: number;
    @Field(() => Int, {nullable:false})
    avatarImage!: number;
    @Field(() => Int, {nullable:false})
    emailVerified!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    location?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bio?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    hashedRefreshToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    passwordUpdatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    avatarImage?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    emailVerified?: `${SortOrder}`;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    userBooks?: number;
    @Field(() => Int, {nullable:false})
    shelves?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutShelvesInput {
    @Field(() => UserCreateWithoutShelvesInput, {nullable:true})
    @Type(() => UserCreateWithoutShelvesInput)
    create?: InstanceType<typeof UserCreateWithoutShelvesInput>;
    @Field(() => UserCreateOrConnectWithoutShelvesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutShelvesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutShelvesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutUserBooksInput {
    @Field(() => UserCreateWithoutUserBooksInput, {nullable:true})
    @Type(() => UserCreateWithoutUserBooksInput)
    create?: InstanceType<typeof UserCreateWithoutUserBooksInput>;
    @Field(() => UserCreateOrConnectWithoutUserBooksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserBooksInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserBooksInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateOrConnectWithoutShelvesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutShelvesInput, {nullable:false})
    @Type(() => UserCreateWithoutShelvesInput)
    create!: InstanceType<typeof UserCreateWithoutShelvesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutUserBooksInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutUserBooksInput, {nullable:false})
    @Type(() => UserCreateWithoutUserBooksInput)
    create!: InstanceType<typeof UserCreateWithoutUserBooksInput>;
}

@InputType()
export class UserCreateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => UserBookCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutUserBooksInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => ShelfCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => UserBookCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
    @Field(() => ShelfCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<`${UserScalarFieldEnum}`>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @HideField()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @HideField()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => Date, {nullable:false})
    passwordUpdatedAt!: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    hashedPassword?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    location?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    hashedRefreshToken?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    passwordUpdatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    avatarImage?: true;
    @Field(() => Boolean, {nullable:true})
    emailVerified?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @HideField()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @HideField()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    location?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bio?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    hashedRefreshToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    passwordUpdatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    avatarImage?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    emailVerified?: `${SortOrder}`;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    hashedPassword?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    location?: true;
    @Field(() => Boolean, {nullable:true})
    bio?: true;
    @Field(() => Boolean, {nullable:true})
    hashedRefreshToken?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    passwordUpdatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    avatarImage?: true;
    @Field(() => Boolean, {nullable:true})
    emailVerified?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @HideField()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @HideField()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    location?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bio?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    hashedRefreshToken?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    passwordUpdatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    avatarImage?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    emailVerified?: `${SortOrder}`;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    username?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    hashedPassword?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    location?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    bio?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    hashedRefreshToken?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    passwordUpdatedAt?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    avatarImage?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    emailVerified?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    username?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    hashedPassword?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    location?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    bio?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    hashedRefreshToken?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    passwordUpdatedAt?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    avatarImage?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    emailVerified?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserBookOrderByRelationAggregateInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookOrderByRelationAggregateInput>;
    @Field(() => ShelfOrderByRelationAggregateInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfOrderByRelationAggregateInput>;
}

@InputType()
export class UserScalarRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    username?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    hashedPassword?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    location?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bio?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    hashedRefreshToken?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    passwordUpdatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    avatarImage?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    emailVerified?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutUserBooksInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
}

@InputType()
export class UserUncheckedUpdateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutUserBooksInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
}

@InputType()
export class UserUpdateOneRequiredWithoutUserBooksNestedInput {
    @Field(() => UserCreateWithoutUserBooksInput, {nullable:true})
    @Type(() => UserCreateWithoutUserBooksInput)
    create?: InstanceType<typeof UserCreateWithoutUserBooksInput>;
    @Field(() => UserCreateOrConnectWithoutUserBooksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserBooksInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserBooksInput>;
    @Field(() => UserUpsertWithoutUserBooksInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserBooksInput)
    upsert?: InstanceType<typeof UserUpsertWithoutUserBooksInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutUserBooksInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutUserBooksInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutUserBooksInput>;
}

@InputType()
export class UserUpdateOneWithoutShelvesNestedInput {
    @Field(() => UserCreateWithoutShelvesInput, {nullable:true})
    @Type(() => UserCreateWithoutShelvesInput)
    create?: InstanceType<typeof UserCreateWithoutShelvesInput>;
    @Field(() => UserCreateOrConnectWithoutShelvesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutShelvesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutShelvesInput>;
    @Field(() => UserUpsertWithoutShelvesInput, {nullable:true})
    @Type(() => UserUpsertWithoutShelvesInput)
    upsert?: InstanceType<typeof UserUpsertWithoutShelvesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutShelvesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutShelvesInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutShelvesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutShelvesInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutShelvesInput, {nullable:false})
    @Type(() => UserUpdateWithoutShelvesInput)
    data!: InstanceType<typeof UserUpdateWithoutShelvesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutUserBooksInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutUserBooksInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserBooksInput)
    data!: InstanceType<typeof UserUpdateWithoutUserBooksInput>;
}

@InputType()
export class UserUpdateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => UserBookUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutUserBooksInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => ShelfUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedPassword?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    location?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bio?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    passwordUpdatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    avatarImage?: string;
    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;
    @Field(() => UserBookUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
    @Field(() => ShelfUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpsertWithoutShelvesInput {
    @Field(() => UserUpdateWithoutShelvesInput, {nullable:false})
    @Type(() => UserUpdateWithoutShelvesInput)
    update!: InstanceType<typeof UserUpdateWithoutShelvesInput>;
    @Field(() => UserCreateWithoutShelvesInput, {nullable:false})
    @Type(() => UserCreateWithoutShelvesInput)
    create!: InstanceType<typeof UserCreateWithoutShelvesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutUserBooksInput {
    @Field(() => UserUpdateWithoutUserBooksInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserBooksInput)
    update!: InstanceType<typeof UserUpdateWithoutUserBooksInput>;
    @Field(() => UserCreateWithoutUserBooksInput, {nullable:false})
    @Type(() => UserCreateWithoutUserBooksInput)
    create!: InstanceType<typeof UserCreateWithoutUserBooksInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    username?: string;
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    hashedPassword?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    location?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    bio?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    hashedRefreshToken?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    passwordUpdatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    avatarImage?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    emailVerified?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserBookListRelationFilter, {nullable:true})
    userBooks?: InstanceType<typeof UserBookListRelationFilter>;
    @Field(() => ShelfListRelationFilter, {nullable:true})
    shelves?: InstanceType<typeof ShelfListRelationFilter>;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    username?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    hashedPassword?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    location?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    bio?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    hashedRefreshToken?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    passwordUpdatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    avatarImage?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    emailVerified?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserBookListRelationFilter, {nullable:true})
    userBooks?: InstanceType<typeof UserBookListRelationFilter>;
    @Field(() => ShelfListRelationFilter, {nullable:true})
    shelves?: InstanceType<typeof ShelfListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    username!: string | null;
    @HideField()
    hashedPassword!: string | null;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @Field(() => String, {nullable:true})
    location!: string | null;
    @Field(() => String, {nullable:true})
    bio!: string | null;
    @HideField()
    hashedRefreshToken!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Date, {nullable:false})
    passwordUpdatedAt!: Date;
    @Field(() => String, {nullable:true})
    avatarImage!: string | null;
    @Field(() => Date, {nullable:true})
    emailVerified!: Date | null;
    @Field(() => [UserBook], {nullable:true})
    userBooks?: Array<UserBook>;
    @Field(() => [Shelf], {nullable:true})
    shelves?: Array<Shelf>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}

@ObjectType()
export class AggregateUserBook {
    @Field(() => UserBookCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserBookCountAggregate>;
    @Field(() => UserBookAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserBookAvgAggregate>;
    @Field(() => UserBookSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserBookSumAggregate>;
    @Field(() => UserBookMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserBookMinAggregate>;
    @Field(() => UserBookMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserBookMaxAggregate>;
}

@ArgsType()
export class CreateManyUserBookArgs {
    @Field(() => [UserBookCreateManyInput], {nullable:false})
    @Type(() => UserBookCreateManyInput)
    @ValidateNested()
    data!: Array<UserBookCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserBookArgs {
    @Field(() => UserBookCreateInput, {nullable:false})
    @Type(() => UserBookCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserBookCreateInput>;
}

@ArgsType()
export class DeleteManyUserBookArgs {
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneUserBookArgs {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
}

@ArgsType()
export class FindFirstUserBookOrThrowArgs {
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => [UserBookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserBookOrderByWithRelationInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserBookScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserBookScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstUserBookArgs {
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => [UserBookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserBookOrderByWithRelationInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserBookScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserBookScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyUserBookArgs {
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => [UserBookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserBookOrderByWithRelationInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserBookScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserBookScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueUserBookOrThrowArgs {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
}

@ArgsType()
export class FindUniqueUserBookArgs {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
}

@ArgsType()
export class UpdateManyUserBookArgs {
    @Field(() => UserBookUpdateManyMutationInput, {nullable:false})
    @Type(() => UserBookUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof UserBookUpdateManyMutationInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneUserBookArgs {
    @Field(() => UserBookUpdateInput, {nullable:false})
    @Type(() => UserBookUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserBookUpdateInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
}

@ArgsType()
export class UpsertOneUserBookArgs {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => UserBookCreateInput, {nullable:false})
    @Type(() => UserBookCreateInput)
    create!: InstanceType<typeof UserBookCreateInput>;
    @Field(() => UserBookUpdateInput, {nullable:false})
    @Type(() => UserBookUpdateInput)
    update!: InstanceType<typeof UserBookUpdateInput>;
}

@ArgsType()
export class UserBookAggregateArgs {
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => [UserBookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserBookOrderByWithRelationInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserBookCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserBookCountAggregateInput>;
    @Field(() => UserBookAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserBookAvgAggregateInput>;
    @Field(() => UserBookSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserBookSumAggregateInput>;
    @Field(() => UserBookMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserBookMinAggregateInput>;
    @Field(() => UserBookMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserBookMaxAggregateInput>;
}

@InputType()
export class UserBookAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    rating?: true;
}

@ObjectType()
export class UserBookAvgAggregate {
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
}

@InputType()
export class UserBookAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    rating?: `${SortOrder}`;
}

@InputType()
export class UserBookCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    rating?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    dateAdded?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserBookCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    bookId!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    rating!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    dateAdded!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserBookCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    rating?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    dateAdded?: `${SortOrder}`;
}

@ObjectType()
export class UserBookCount {
    @Field(() => Int, {nullable:false})
    shelves?: number;
    @Field(() => Int, {nullable:false})
    readDates?: number;
    @Field(() => Int, {nullable:false})
    read?: number;
}

@InputType()
export class UserBookCreateManyUserInputEnvelope {
    @Field(() => [UserBookCreateManyUserInput], {nullable:false})
    @Type(() => UserBookCreateManyUserInput)
    data!: Array<UserBookCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class UserBookCreateManyUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    bookId!: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
}

@InputType()
export class UserBookCreateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    bookId!: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
}

@InputType()
export class UserBookCreateNestedManyWithoutUserInput {
    @Field(() => [UserBookCreateWithoutUserInput], {nullable:true})
    @Type(() => UserBookCreateWithoutUserInput)
    create?: Array<UserBookCreateWithoutUserInput>;
    @Field(() => [UserBookCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserBookCreateOrConnectWithoutUserInput>;
    @Field(() => UserBookCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserBookCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserBookCreateManyUserInputEnvelope>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>>;
}

@InputType()
export class UserBookCreateNestedOneWithoutBookInput {
    @Field(() => UserBookCreateWithoutBookInput, {nullable:true})
    @Type(() => UserBookCreateWithoutBookInput)
    create?: InstanceType<typeof UserBookCreateWithoutBookInput>;
    @Field(() => UserBookCreateOrConnectWithoutBookInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutBookInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutBookInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
}

@InputType()
export class UserBookCreateNestedOneWithoutReadDatesInput {
    @Field(() => UserBookCreateWithoutReadDatesInput, {nullable:true})
    @Type(() => UserBookCreateWithoutReadDatesInput)
    create?: InstanceType<typeof UserBookCreateWithoutReadDatesInput>;
    @Field(() => UserBookCreateOrConnectWithoutReadDatesInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutReadDatesInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutReadDatesInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
}

@InputType()
export class UserBookCreateNestedOneWithoutReadInput {
    @Field(() => UserBookCreateWithoutReadInput, {nullable:true})
    @Type(() => UserBookCreateWithoutReadInput)
    create?: InstanceType<typeof UserBookCreateWithoutReadInput>;
    @Field(() => UserBookCreateOrConnectWithoutReadInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutReadInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutReadInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
}

@InputType()
export class UserBookCreateNestedOneWithoutShelvesInput {
    @Field(() => UserBookCreateWithoutShelvesInput, {nullable:true})
    @Type(() => UserBookCreateWithoutShelvesInput)
    create?: InstanceType<typeof UserBookCreateWithoutShelvesInput>;
    @Field(() => UserBookCreateOrConnectWithoutShelvesInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutShelvesInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutShelvesInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
}

@InputType()
export class UserBookCreateOrConnectWithoutBookInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => UserBookCreateWithoutBookInput, {nullable:false})
    @Type(() => UserBookCreateWithoutBookInput)
    create!: InstanceType<typeof UserBookCreateWithoutBookInput>;
}

@InputType()
export class UserBookCreateOrConnectWithoutReadDatesInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => UserBookCreateWithoutReadDatesInput, {nullable:false})
    @Type(() => UserBookCreateWithoutReadDatesInput)
    create!: InstanceType<typeof UserBookCreateWithoutReadDatesInput>;
}

@InputType()
export class UserBookCreateOrConnectWithoutReadInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => UserBookCreateWithoutReadInput, {nullable:false})
    @Type(() => UserBookCreateWithoutReadInput)
    create!: InstanceType<typeof UserBookCreateWithoutReadInput>;
}

@InputType()
export class UserBookCreateOrConnectWithoutShelvesInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => UserBookCreateWithoutShelvesInput, {nullable:false})
    @Type(() => UserBookCreateWithoutShelvesInput)
    create!: InstanceType<typeof UserBookCreateWithoutShelvesInput>;
}

@InputType()
export class UserBookCreateOrConnectWithoutUserInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => UserBookCreateWithoutUserInput, {nullable:false})
    @Type(() => UserBookCreateWithoutUserInput)
    create!: InstanceType<typeof UserBookCreateWithoutUserInput>;
}

@InputType()
export class UserBookCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
    @Field(() => UserCreateNestedOneWithoutUserBooksInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadDateCreateNestedManyWithoutUserBookInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadCreateNestedManyWithoutUserBookInput, {nullable:true})
    read?: InstanceType<typeof ReadCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateWithoutReadDatesInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
    @Field(() => UserCreateNestedOneWithoutUserBooksInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
    @Field(() => BookCreateNestedOneWithoutUserBookInput, {nullable:false})
    book!: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadCreateNestedManyWithoutUserBookInput, {nullable:true})
    read?: InstanceType<typeof ReadCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateWithoutReadInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
    @Field(() => UserCreateNestedOneWithoutUserBooksInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
    @Field(() => BookCreateNestedOneWithoutUserBookInput, {nullable:false})
    book!: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadDateCreateNestedManyWithoutUserBookInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
    @Field(() => UserCreateNestedOneWithoutUserBooksInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
    @Field(() => BookCreateNestedOneWithoutUserBookInput, {nullable:false})
    book!: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
    @Field(() => ReadDateCreateNestedManyWithoutUserBookInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadCreateNestedManyWithoutUserBookInput, {nullable:true})
    read?: InstanceType<typeof ReadCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
    @Field(() => BookCreateNestedOneWithoutUserBookInput, {nullable:false})
    book!: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadDateCreateNestedManyWithoutUserBookInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadCreateNestedManyWithoutUserBookInput, {nullable:true})
    read?: InstanceType<typeof ReadCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
    @Field(() => UserCreateNestedOneWithoutUserBooksInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
    @Field(() => BookCreateNestedOneWithoutUserBookInput, {nullable:false})
    book!: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadDateCreateNestedManyWithoutUserBookInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadCreateNestedManyWithoutUserBookInput, {nullable:true})
    read?: InstanceType<typeof ReadCreateNestedManyWithoutUserBookInput>;
}

@ArgsType()
export class UserBookGroupByArgs {
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => [UserBookOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserBookOrderByWithAggregationInput>;
    @Field(() => [UserBookScalarFieldEnum], {nullable:false})
    by!: Array<`${UserBookScalarFieldEnum}`>;
    @Field(() => UserBookScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserBookScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserBookCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserBookCountAggregateInput>;
    @Field(() => UserBookAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserBookAvgAggregateInput>;
    @Field(() => UserBookSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserBookSumAggregateInput>;
    @Field(() => UserBookMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserBookMinAggregateInput>;
    @Field(() => UserBookMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserBookMaxAggregateInput>;
}

@ObjectType()
export class UserBookGroupBy {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    bookId!: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:false})
    @Validator.ValidateNested()
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
    @Field(() => UserBookCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserBookCountAggregate>;
    @Field(() => UserBookAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserBookAvgAggregate>;
    @Field(() => UserBookSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserBookSumAggregate>;
    @Field(() => UserBookMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserBookMinAggregate>;
    @Field(() => UserBookMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserBookMaxAggregate>;
}

@InputType()
export class UserBookIdentifierCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    bookId!: string;
}

@InputType()
export class UserBookListRelationFilter {
    @Field(() => UserBookWhereInput, {nullable:true})
    every?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    some?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    none?: InstanceType<typeof UserBookWhereInput>;
}

@InputType()
export class UserBookMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    rating?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    dateAdded?: true;
}

@ObjectType()
export class UserBookMaxAggregate {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bookId?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
}

@InputType()
export class UserBookMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    rating?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    dateAdded?: `${SortOrder}`;
}

@InputType()
export class UserBookMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    rating?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    dateAdded?: true;
}

@ObjectType()
export class UserBookMinAggregate {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bookId?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
}

@InputType()
export class UserBookMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    rating?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    dateAdded?: `${SortOrder}`;
}

@InputType()
export class UserBookOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class UserBookOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    rating?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    dateAdded?: `${SortOrder}`;
    @Field(() => UserBookCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserBookCountOrderByAggregateInput>;
    @Field(() => UserBookAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserBookAvgOrderByAggregateInput>;
    @Field(() => UserBookMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserBookMaxOrderByAggregateInput>;
    @Field(() => UserBookMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserBookMinOrderByAggregateInput>;
    @Field(() => UserBookSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserBookSumOrderByAggregateInput>;
}

@InputType()
export class UserBookOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    bookId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    rating?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    dateAdded?: `${SortOrder}`;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => BookOrderByWithRelationInput, {nullable:true})
    book?: InstanceType<typeof BookOrderByWithRelationInput>;
    @Field(() => UserBookShelvesOrderByRelationAggregateInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesOrderByRelationAggregateInput>;
    @Field(() => ReadDateOrderByRelationAggregateInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateOrderByRelationAggregateInput>;
    @Field(() => ReadOrderByRelationAggregateInput, {nullable:true})
    read?: InstanceType<typeof ReadOrderByRelationAggregateInput>;
}

@InputType()
export class UserBookScalarRelationFilter {
    @Field(() => UserBookWhereInput, {nullable:true})
    is?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserBookWhereInput>;
}

@InputType()
export class UserBookScalarWhereWithAggregatesInput {
    @Field(() => [UserBookScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserBookScalarWhereWithAggregatesInput>;
    @Field(() => [UserBookScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserBookScalarWhereWithAggregatesInput>;
    @Field(() => [UserBookScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserBookScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bookId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumREADING_STATUSWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumREADING_STATUSWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    rating?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    dateAdded?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserBookScalarWhereInput {
    @Field(() => [UserBookScalarWhereInput], {nullable:true})
    AND?: Array<UserBookScalarWhereInput>;
    @Field(() => [UserBookScalarWhereInput], {nullable:true})
    OR?: Array<UserBookScalarWhereInput>;
    @Field(() => [UserBookScalarWhereInput], {nullable:true})
    NOT?: Array<UserBookScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
    @Field(() => EnumREADING_STATUSFilter, {nullable:true})
    status?: InstanceType<typeof EnumREADING_STATUSFilter>;
    @Field(() => FloatFilter, {nullable:true})
    rating?: InstanceType<typeof FloatFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    dateAdded?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class UserBookSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    rating?: true;
}

@ObjectType()
export class UserBookSumAggregate {
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
}

@InputType()
export class UserBookSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    rating?: `${SortOrder}`;
}

@InputType()
export class UserBookUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [UserBookCreateWithoutUserInput], {nullable:true})
    @Type(() => UserBookCreateWithoutUserInput)
    create?: Array<UserBookCreateWithoutUserInput>;
    @Field(() => [UserBookCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserBookCreateOrConnectWithoutUserInput>;
    @Field(() => UserBookCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserBookCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserBookCreateManyUserInputEnvelope>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>>;
}

@InputType()
export class UserBookUncheckedCreateNestedOneWithoutBookInput {
    @Field(() => UserBookCreateWithoutBookInput, {nullable:true})
    @Type(() => UserBookCreateWithoutBookInput)
    create?: InstanceType<typeof UserBookCreateWithoutBookInput>;
    @Field(() => UserBookCreateOrConnectWithoutBookInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutBookInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutBookInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
}

@InputType()
export class UserBookUncheckedCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadDateUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    read?: InstanceType<typeof ReadUncheckedCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookUncheckedCreateWithoutReadDatesInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    bookId!: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    read?: InstanceType<typeof ReadUncheckedCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookUncheckedCreateWithoutReadInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    bookId!: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadDateUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUncheckedCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookUncheckedCreateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    bookId!: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
    @Field(() => ReadDateUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    read?: InstanceType<typeof ReadUncheckedCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    bookId!: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadDateUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    read?: InstanceType<typeof ReadUncheckedCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    bookId!: string;
    @Field(() => READING_STATUS, {nullable:false})
    @Validator.IsString()
    status!: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadDateUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReadUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    read?: InstanceType<typeof ReadUncheckedCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [UserBookCreateWithoutUserInput], {nullable:true})
    @Type(() => UserBookCreateWithoutUserInput)
    create?: Array<UserBookCreateWithoutUserInput>;
    @Field(() => [UserBookCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserBookCreateOrConnectWithoutUserInput>;
    @Field(() => [UserBookUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserBookUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserBookUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => UserBookCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserBookCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserBookCreateManyUserInputEnvelope>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>>;
    @Field(() => [UserBookUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserBookUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserBookUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [UserBookUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserBookUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserBookUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [UserBookScalarWhereInput], {nullable:true})
    @Type(() => UserBookScalarWhereInput)
    deleteMany?: Array<UserBookScalarWhereInput>;
}

@InputType()
export class UserBookUncheckedUpdateManyWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bookId?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
}

@InputType()
export class UserBookUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bookId?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
}

@InputType()
export class UserBookUncheckedUpdateOneWithoutBookNestedInput {
    @Field(() => UserBookCreateWithoutBookInput, {nullable:true})
    @Type(() => UserBookCreateWithoutBookInput)
    create?: InstanceType<typeof UserBookCreateWithoutBookInput>;
    @Field(() => UserBookCreateOrConnectWithoutBookInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutBookInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutBookInput>;
    @Field(() => UserBookUpsertWithoutBookInput, {nullable:true})
    @Type(() => UserBookUpsertWithoutBookInput)
    upsert?: InstanceType<typeof UserBookUpsertWithoutBookInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    disconnect?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    delete?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => UserBookUpdateToOneWithWhereWithoutBookInput, {nullable:true})
    @Type(() => UserBookUpdateToOneWithWhereWithoutBookInput)
    update?: InstanceType<typeof UserBookUpdateToOneWithWhereWithoutBookInput>;
}

@InputType()
export class UserBookUncheckedUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadDateUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    read?: InstanceType<typeof ReadUncheckedUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUncheckedUpdateWithoutReadDatesInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bookId?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    read?: InstanceType<typeof ReadUncheckedUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUncheckedUpdateWithoutReadInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bookId?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadDateUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUncheckedUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUncheckedUpdateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bookId?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
    @Field(() => ReadDateUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    read?: InstanceType<typeof ReadUncheckedUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bookId?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadDateUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    read?: InstanceType<typeof ReadUncheckedUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bookId?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadDateUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    read?: InstanceType<typeof ReadUncheckedUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
}

@InputType()
export class UserBookUpdateManyWithWhereWithoutUserInput {
    @Field(() => UserBookScalarWhereInput, {nullable:false})
    @Type(() => UserBookScalarWhereInput)
    where!: InstanceType<typeof UserBookScalarWhereInput>;
    @Field(() => UserBookUpdateManyMutationInput, {nullable:false})
    @Type(() => UserBookUpdateManyMutationInput)
    data!: InstanceType<typeof UserBookUpdateManyMutationInput>;
}

@InputType()
export class UserBookUpdateManyWithoutUserNestedInput {
    @Field(() => [UserBookCreateWithoutUserInput], {nullable:true})
    @Type(() => UserBookCreateWithoutUserInput)
    create?: Array<UserBookCreateWithoutUserInput>;
    @Field(() => [UserBookCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserBookCreateOrConnectWithoutUserInput>;
    @Field(() => [UserBookUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserBookUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserBookUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => UserBookCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserBookCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof UserBookCreateManyUserInputEnvelope>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>>;
    @Field(() => [UserBookUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserBookUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserBookUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [UserBookUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserBookUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserBookUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [UserBookScalarWhereInput], {nullable:true})
    @Type(() => UserBookScalarWhereInput)
    deleteMany?: Array<UserBookScalarWhereInput>;
}

@InputType()
export class UserBookUpdateOneRequiredWithoutReadNestedInput {
    @Field(() => UserBookCreateWithoutReadInput, {nullable:true})
    @Type(() => UserBookCreateWithoutReadInput)
    create?: InstanceType<typeof UserBookCreateWithoutReadInput>;
    @Field(() => UserBookCreateOrConnectWithoutReadInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutReadInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutReadInput>;
    @Field(() => UserBookUpsertWithoutReadInput, {nullable:true})
    @Type(() => UserBookUpsertWithoutReadInput)
    upsert?: InstanceType<typeof UserBookUpsertWithoutReadInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => UserBookUpdateToOneWithWhereWithoutReadInput, {nullable:true})
    @Type(() => UserBookUpdateToOneWithWhereWithoutReadInput)
    update?: InstanceType<typeof UserBookUpdateToOneWithWhereWithoutReadInput>;
}

@InputType()
export class UserBookUpdateOneRequiredWithoutShelvesNestedInput {
    @Field(() => UserBookCreateWithoutShelvesInput, {nullable:true})
    @Type(() => UserBookCreateWithoutShelvesInput)
    create?: InstanceType<typeof UserBookCreateWithoutShelvesInput>;
    @Field(() => UserBookCreateOrConnectWithoutShelvesInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutShelvesInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutShelvesInput>;
    @Field(() => UserBookUpsertWithoutShelvesInput, {nullable:true})
    @Type(() => UserBookUpsertWithoutShelvesInput)
    upsert?: InstanceType<typeof UserBookUpsertWithoutShelvesInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => UserBookUpdateToOneWithWhereWithoutShelvesInput, {nullable:true})
    @Type(() => UserBookUpdateToOneWithWhereWithoutShelvesInput)
    update?: InstanceType<typeof UserBookUpdateToOneWithWhereWithoutShelvesInput>;
}

@InputType()
export class UserBookUpdateOneWithoutBookNestedInput {
    @Field(() => UserBookCreateWithoutBookInput, {nullable:true})
    @Type(() => UserBookCreateWithoutBookInput)
    create?: InstanceType<typeof UserBookCreateWithoutBookInput>;
    @Field(() => UserBookCreateOrConnectWithoutBookInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutBookInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutBookInput>;
    @Field(() => UserBookUpsertWithoutBookInput, {nullable:true})
    @Type(() => UserBookUpsertWithoutBookInput)
    upsert?: InstanceType<typeof UserBookUpsertWithoutBookInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    disconnect?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    delete?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => UserBookUpdateToOneWithWhereWithoutBookInput, {nullable:true})
    @Type(() => UserBookUpdateToOneWithWhereWithoutBookInput)
    update?: InstanceType<typeof UserBookUpdateToOneWithWhereWithoutBookInput>;
}

@InputType()
export class UserBookUpdateOneWithoutReadDatesNestedInput {
    @Field(() => UserBookCreateWithoutReadDatesInput, {nullable:true})
    @Type(() => UserBookCreateWithoutReadDatesInput)
    create?: InstanceType<typeof UserBookCreateWithoutReadDatesInput>;
    @Field(() => UserBookCreateOrConnectWithoutReadDatesInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutReadDatesInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutReadDatesInput>;
    @Field(() => UserBookUpsertWithoutReadDatesInput, {nullable:true})
    @Type(() => UserBookUpsertWithoutReadDatesInput)
    upsert?: InstanceType<typeof UserBookUpsertWithoutReadDatesInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    disconnect?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    delete?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => UserBookUpdateToOneWithWhereWithoutReadDatesInput, {nullable:true})
    @Type(() => UserBookUpdateToOneWithWhereWithoutReadDatesInput)
    update?: InstanceType<typeof UserBookUpdateToOneWithWhereWithoutReadDatesInput>;
}

@InputType()
export class UserBookUpdateToOneWithWhereWithoutBookInput {
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    where?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookUpdateWithoutBookInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutBookInput)
    data!: InstanceType<typeof UserBookUpdateWithoutBookInput>;
}

@InputType()
export class UserBookUpdateToOneWithWhereWithoutReadDatesInput {
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    where?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookUpdateWithoutReadDatesInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutReadDatesInput)
    data!: InstanceType<typeof UserBookUpdateWithoutReadDatesInput>;
}

@InputType()
export class UserBookUpdateToOneWithWhereWithoutReadInput {
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    where?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookUpdateWithoutReadInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutReadInput)
    data!: InstanceType<typeof UserBookUpdateWithoutReadInput>;
}

@InputType()
export class UserBookUpdateToOneWithWhereWithoutShelvesInput {
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    where?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookUpdateWithoutShelvesInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutShelvesInput)
    data!: InstanceType<typeof UserBookUpdateWithoutShelvesInput>;
}

@InputType()
export class UserBookUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => UserBookUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutUserInput)
    data!: InstanceType<typeof UserBookUpdateWithoutUserInput>;
}

@InputType()
export class UserBookUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
    @Field(() => UserUpdateOneRequiredWithoutUserBooksNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserBooksNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadDateUpdateManyWithoutUserBookNestedInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadUpdateManyWithoutUserBookNestedInput, {nullable:true})
    read?: InstanceType<typeof ReadUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateWithoutReadDatesInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
    @Field(() => UserUpdateOneRequiredWithoutUserBooksNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserBooksNestedInput>;
    @Field(() => BookUpdateOneRequiredWithoutUserBookNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneRequiredWithoutUserBookNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadUpdateManyWithoutUserBookNestedInput, {nullable:true})
    read?: InstanceType<typeof ReadUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateWithoutReadInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
    @Field(() => UserUpdateOneRequiredWithoutUserBooksNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserBooksNestedInput>;
    @Field(() => BookUpdateOneRequiredWithoutUserBookNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneRequiredWithoutUserBookNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadDateUpdateManyWithoutUserBookNestedInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
    @Field(() => UserUpdateOneRequiredWithoutUserBooksNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserBooksNestedInput>;
    @Field(() => BookUpdateOneRequiredWithoutUserBookNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneRequiredWithoutUserBookNestedInput>;
    @Field(() => ReadDateUpdateManyWithoutUserBookNestedInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadUpdateManyWithoutUserBookNestedInput, {nullable:true})
    read?: InstanceType<typeof ReadUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
    @Field(() => BookUpdateOneRequiredWithoutUserBookNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneRequiredWithoutUserBookNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadDateUpdateManyWithoutUserBookNestedInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadUpdateManyWithoutUserBookNestedInput, {nullable:true})
    read?: InstanceType<typeof ReadUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => READING_STATUS, {nullable:true})
    @Validator.IsString()
    status?: `${READING_STATUS}`;
    @Field(() => Float, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    dateAdded?: Date | string;
    @Field(() => UserUpdateOneRequiredWithoutUserBooksNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserBooksNestedInput>;
    @Field(() => BookUpdateOneRequiredWithoutUserBookNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneRequiredWithoutUserBookNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadDateUpdateManyWithoutUserBookNestedInput, {nullable:true})
    readDates?: InstanceType<typeof ReadDateUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReadUpdateManyWithoutUserBookNestedInput, {nullable:true})
    read?: InstanceType<typeof ReadUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'bookId' | 'identifier'>;
    @Field(() => UserBookUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutUserInput)
    update!: InstanceType<typeof UserBookUpdateWithoutUserInput>;
    @Field(() => UserBookCreateWithoutUserInput, {nullable:false})
    @Type(() => UserBookCreateWithoutUserInput)
    create!: InstanceType<typeof UserBookCreateWithoutUserInput>;
}

@InputType()
export class UserBookUpsertWithoutBookInput {
    @Field(() => UserBookUpdateWithoutBookInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutBookInput)
    update!: InstanceType<typeof UserBookUpdateWithoutBookInput>;
    @Field(() => UserBookCreateWithoutBookInput, {nullable:false})
    @Type(() => UserBookCreateWithoutBookInput)
    create!: InstanceType<typeof UserBookCreateWithoutBookInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    where?: InstanceType<typeof UserBookWhereInput>;
}

@InputType()
export class UserBookUpsertWithoutReadDatesInput {
    @Field(() => UserBookUpdateWithoutReadDatesInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutReadDatesInput)
    update!: InstanceType<typeof UserBookUpdateWithoutReadDatesInput>;
    @Field(() => UserBookCreateWithoutReadDatesInput, {nullable:false})
    @Type(() => UserBookCreateWithoutReadDatesInput)
    create!: InstanceType<typeof UserBookCreateWithoutReadDatesInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    where?: InstanceType<typeof UserBookWhereInput>;
}

@InputType()
export class UserBookUpsertWithoutReadInput {
    @Field(() => UserBookUpdateWithoutReadInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutReadInput)
    update!: InstanceType<typeof UserBookUpdateWithoutReadInput>;
    @Field(() => UserBookCreateWithoutReadInput, {nullable:false})
    @Type(() => UserBookCreateWithoutReadInput)
    create!: InstanceType<typeof UserBookCreateWithoutReadInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    where?: InstanceType<typeof UserBookWhereInput>;
}

@InputType()
export class UserBookUpsertWithoutShelvesInput {
    @Field(() => UserBookUpdateWithoutShelvesInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutShelvesInput)
    update!: InstanceType<typeof UserBookUpdateWithoutShelvesInput>;
    @Field(() => UserBookCreateWithoutShelvesInput, {nullable:false})
    @Type(() => UserBookCreateWithoutShelvesInput)
    create!: InstanceType<typeof UserBookCreateWithoutShelvesInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    where?: InstanceType<typeof UserBookWhereInput>;
}

@InputType()
export class UserBookWhereUniqueInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bookId?: string;
    @Field(() => UserBookIdentifierCompoundUniqueInput, {nullable:true})
    identifier?: InstanceType<typeof UserBookIdentifierCompoundUniqueInput>;
    @Field(() => [UserBookWhereInput], {nullable:true})
    AND?: Array<UserBookWhereInput>;
    @Field(() => [UserBookWhereInput], {nullable:true})
    OR?: Array<UserBookWhereInput>;
    @Field(() => [UserBookWhereInput], {nullable:true})
    NOT?: Array<UserBookWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => EnumREADING_STATUSFilter, {nullable:true})
    status?: InstanceType<typeof EnumREADING_STATUSFilter>;
    @Field(() => FloatFilter, {nullable:true})
    rating?: InstanceType<typeof FloatFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    dateAdded?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserScalarRelationFilter>;
    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookScalarRelationFilter>;
    @Field(() => UserBookShelvesListRelationFilter, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesListRelationFilter>;
    @Field(() => ReadDateListRelationFilter, {nullable:true})
    readDates?: InstanceType<typeof ReadDateListRelationFilter>;
    @Field(() => ReadListRelationFilter, {nullable:true})
    read?: InstanceType<typeof ReadListRelationFilter>;
}

@InputType()
export class UserBookWhereInput {
    @Field(() => [UserBookWhereInput], {nullable:true})
    AND?: Array<UserBookWhereInput>;
    @Field(() => [UserBookWhereInput], {nullable:true})
    OR?: Array<UserBookWhereInput>;
    @Field(() => [UserBookWhereInput], {nullable:true})
    NOT?: Array<UserBookWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
    @Field(() => EnumREADING_STATUSFilter, {nullable:true})
    status?: InstanceType<typeof EnumREADING_STATUSFilter>;
    @Field(() => FloatFilter, {nullable:true})
    rating?: InstanceType<typeof FloatFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    dateAdded?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserScalarRelationFilter>;
    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookScalarRelationFilter>;
    @Field(() => UserBookShelvesListRelationFilter, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesListRelationFilter>;
    @Field(() => ReadDateListRelationFilter, {nullable:true})
    readDates?: InstanceType<typeof ReadDateListRelationFilter>;
    @Field(() => ReadListRelationFilter, {nullable:true})
    read?: InstanceType<typeof ReadListRelationFilter>;
}

@ObjectType()
export class UserBook {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    bookId!: string;
    @Field(() => READING_STATUS, {nullable:false})
    status!: `${READING_STATUS}`;
    @Field(() => Float, {defaultValue:0,nullable:true})
    rating!: number | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Date, {nullable:false})
    dateAdded!: Date;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => Book, {nullable:false})
    book?: InstanceType<typeof Book>;
    @Field(() => [UserBookShelves], {nullable:true})
    shelves?: Array<UserBookShelves>;
    @Field(() => [ReadDate], {nullable:true})
    readDates?: Array<ReadDate>;
    @Field(() => [Read], {nullable:true})
    read?: Array<Read>;
    @Field(() => UserBookCount, {nullable:false})
    _count?: InstanceType<typeof UserBookCount>;
}

@ObjectType()
export class AggregateUserBookShelves {
    @Field(() => UserBookShelvesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserBookShelvesCountAggregate>;
    @Field(() => UserBookShelvesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserBookShelvesMinAggregate>;
    @Field(() => UserBookShelvesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserBookShelvesMaxAggregate>;
}

@ArgsType()
export class CreateManyUserBookShelvesArgs {
    @Field(() => [UserBookShelvesCreateManyInput], {nullable:false})
    @Type(() => UserBookShelvesCreateManyInput)
    @ValidateNested()
    data!: Array<UserBookShelvesCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserBookShelvesArgs {
    @Field(() => UserBookShelvesCreateInput, {nullable:false})
    @Type(() => UserBookShelvesCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserBookShelvesCreateInput>;
}

@ArgsType()
export class DeleteManyUserBookShelvesArgs {
    @Field(() => UserBookShelvesWhereInput, {nullable:true})
    @Type(() => UserBookShelvesWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookShelvesWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneUserBookShelvesArgs {
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:false})
    @Type(() => UserBookShelvesWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
}

@ArgsType()
export class FindFirstUserBookShelvesOrThrowArgs {
    @Field(() => UserBookShelvesWhereInput, {nullable:true})
    @Type(() => UserBookShelvesWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookShelvesWhereInput>;
    @Field(() => [UserBookShelvesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserBookShelvesOrderByWithRelationInput>;
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserBookShelvesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserBookShelvesScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstUserBookShelvesArgs {
    @Field(() => UserBookShelvesWhereInput, {nullable:true})
    @Type(() => UserBookShelvesWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookShelvesWhereInput>;
    @Field(() => [UserBookShelvesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserBookShelvesOrderByWithRelationInput>;
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserBookShelvesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserBookShelvesScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyUserBookShelvesArgs {
    @Field(() => UserBookShelvesWhereInput, {nullable:true})
    @Type(() => UserBookShelvesWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookShelvesWhereInput>;
    @Field(() => [UserBookShelvesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserBookShelvesOrderByWithRelationInput>;
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserBookShelvesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserBookShelvesScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueUserBookShelvesOrThrowArgs {
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:false})
    @Type(() => UserBookShelvesWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
}

@ArgsType()
export class FindUniqueUserBookShelvesArgs {
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:false})
    @Type(() => UserBookShelvesWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
}

@ArgsType()
export class UpdateManyUserBookShelvesArgs {
    @Field(() => UserBookShelvesUncheckedUpdateManyInput, {nullable:false})
    @Type(() => UserBookShelvesUncheckedUpdateManyInput)
    @ValidateNested()
    data!: InstanceType<typeof UserBookShelvesUncheckedUpdateManyInput>;
    @Field(() => UserBookShelvesWhereInput, {nullable:true})
    @Type(() => UserBookShelvesWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookShelvesWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneUserBookShelvesArgs {
    @Field(() => UserBookShelvesUpdateInput, {nullable:false})
    @Type(() => UserBookShelvesUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserBookShelvesUpdateInput>;
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:false})
    @Type(() => UserBookShelvesWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
}

@ArgsType()
export class UpsertOneUserBookShelvesArgs {
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:false})
    @Type(() => UserBookShelvesWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
    @Field(() => UserBookShelvesCreateInput, {nullable:false})
    @Type(() => UserBookShelvesCreateInput)
    create!: InstanceType<typeof UserBookShelvesCreateInput>;
    @Field(() => UserBookShelvesUpdateInput, {nullable:false})
    @Type(() => UserBookShelvesUpdateInput)
    update!: InstanceType<typeof UserBookShelvesUpdateInput>;
}

@ArgsType()
export class UserBookShelvesAggregateArgs {
    @Field(() => UserBookShelvesWhereInput, {nullable:true})
    @Type(() => UserBookShelvesWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookShelvesWhereInput>;
    @Field(() => [UserBookShelvesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserBookShelvesOrderByWithRelationInput>;
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserBookShelvesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserBookShelvesCountAggregateInput>;
    @Field(() => UserBookShelvesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserBookShelvesMinAggregateInput>;
    @Field(() => UserBookShelvesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserBookShelvesMaxAggregateInput>;
}

@InputType()
export class UserBookShelvesCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
    @Field(() => Boolean, {nullable:true})
    shelfId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserBookShelvesCountAggregate {
    @Field(() => Int, {nullable:false})
    userBookId!: number;
    @Field(() => Int, {nullable:false})
    shelfId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserBookShelvesCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userBookId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    shelfId?: `${SortOrder}`;
}

@InputType()
export class UserBookShelvesCreateManyShelfInputEnvelope {
    @Field(() => [UserBookShelvesCreateManyShelfInput], {nullable:false})
    @Type(() => UserBookShelvesCreateManyShelfInput)
    data!: Array<UserBookShelvesCreateManyShelfInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class UserBookShelvesCreateManyShelfInput {
    @Field(() => String, {nullable:false})
    userBookId!: string;
}

@InputType()
export class UserBookShelvesCreateManyUserBookInputEnvelope {
    @Field(() => [UserBookShelvesCreateManyUserBookInput], {nullable:false})
    @Type(() => UserBookShelvesCreateManyUserBookInput)
    data!: Array<UserBookShelvesCreateManyUserBookInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class UserBookShelvesCreateManyUserBookInput {
    @Field(() => String, {nullable:false})
    shelfId!: string;
}

@InputType()
export class UserBookShelvesCreateManyInput {
    @Field(() => String, {nullable:false})
    userBookId!: string;
    @Field(() => String, {nullable:false})
    shelfId!: string;
}

@InputType()
export class UserBookShelvesCreateNestedManyWithoutShelfInput {
    @Field(() => [UserBookShelvesCreateWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesCreateWithoutShelfInput)
    create?: Array<UserBookShelvesCreateWithoutShelfInput>;
    @Field(() => [UserBookShelvesCreateOrConnectWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesCreateOrConnectWithoutShelfInput)
    connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutShelfInput>;
    @Field(() => UserBookShelvesCreateManyShelfInputEnvelope, {nullable:true})
    @Type(() => UserBookShelvesCreateManyShelfInputEnvelope)
    createMany?: InstanceType<typeof UserBookShelvesCreateManyShelfInputEnvelope>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
}

@InputType()
export class UserBookShelvesCreateNestedManyWithoutUserBookInput {
    @Field(() => [UserBookShelvesCreateWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesCreateWithoutUserBookInput)
    create?: Array<UserBookShelvesCreateWithoutUserBookInput>;
    @Field(() => [UserBookShelvesCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => UserBookShelvesCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof UserBookShelvesCreateManyUserBookInputEnvelope>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
}

@InputType()
export class UserBookShelvesCreateOrConnectWithoutShelfInput {
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:false})
    @Type(() => UserBookShelvesWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
    @Field(() => UserBookShelvesCreateWithoutShelfInput, {nullable:false})
    @Type(() => UserBookShelvesCreateWithoutShelfInput)
    create!: InstanceType<typeof UserBookShelvesCreateWithoutShelfInput>;
}

@InputType()
export class UserBookShelvesCreateOrConnectWithoutUserBookInput {
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:false})
    @Type(() => UserBookShelvesWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
    @Field(() => UserBookShelvesCreateWithoutUserBookInput, {nullable:false})
    @Type(() => UserBookShelvesCreateWithoutUserBookInput)
    create!: InstanceType<typeof UserBookShelvesCreateWithoutUserBookInput>;
}

@InputType()
export class UserBookShelvesCreateWithoutShelfInput {
    @Field(() => UserBookCreateNestedOneWithoutShelvesInput, {nullable:false})
    userBook!: InstanceType<typeof UserBookCreateNestedOneWithoutShelvesInput>;
}

@InputType()
export class UserBookShelvesCreateWithoutUserBookInput {
    @Field(() => ShelfCreateNestedOneWithoutUserBooksInput, {nullable:false})
    shelf!: InstanceType<typeof ShelfCreateNestedOneWithoutUserBooksInput>;
}

@InputType()
export class UserBookShelvesCreateInput {
    @Field(() => UserBookCreateNestedOneWithoutShelvesInput, {nullable:false})
    userBook!: InstanceType<typeof UserBookCreateNestedOneWithoutShelvesInput>;
    @Field(() => ShelfCreateNestedOneWithoutUserBooksInput, {nullable:false})
    shelf!: InstanceType<typeof ShelfCreateNestedOneWithoutUserBooksInput>;
}

@ArgsType()
export class UserBookShelvesGroupByArgs {
    @Field(() => UserBookShelvesWhereInput, {nullable:true})
    @Type(() => UserBookShelvesWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserBookShelvesWhereInput>;
    @Field(() => [UserBookShelvesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserBookShelvesOrderByWithAggregationInput>;
    @Field(() => [UserBookShelvesScalarFieldEnum], {nullable:false})
    by!: Array<`${UserBookShelvesScalarFieldEnum}`>;
    @Field(() => UserBookShelvesScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserBookShelvesScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserBookShelvesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserBookShelvesCountAggregateInput>;
    @Field(() => UserBookShelvesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserBookShelvesMinAggregateInput>;
    @Field(() => UserBookShelvesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserBookShelvesMaxAggregateInput>;
}

@ObjectType()
export class UserBookShelvesGroupBy {
    @Field(() => String, {nullable:false})
    userBookId!: string;
    @Field(() => String, {nullable:false})
    shelfId!: string;
    @Field(() => UserBookShelvesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserBookShelvesCountAggregate>;
    @Field(() => UserBookShelvesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserBookShelvesMinAggregate>;
    @Field(() => UserBookShelvesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserBookShelvesMaxAggregate>;
}

@InputType()
export class UserBookShelvesListRelationFilter {
    @Field(() => UserBookShelvesWhereInput, {nullable:true})
    every?: InstanceType<typeof UserBookShelvesWhereInput>;
    @Field(() => UserBookShelvesWhereInput, {nullable:true})
    some?: InstanceType<typeof UserBookShelvesWhereInput>;
    @Field(() => UserBookShelvesWhereInput, {nullable:true})
    none?: InstanceType<typeof UserBookShelvesWhereInput>;
}

@InputType()
export class UserBookShelvesMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
    @Field(() => Boolean, {nullable:true})
    shelfId?: true;
}

@ObjectType()
export class UserBookShelvesMaxAggregate {
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => String, {nullable:true})
    shelfId?: string;
}

@InputType()
export class UserBookShelvesMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userBookId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    shelfId?: `${SortOrder}`;
}

@InputType()
export class UserBookShelvesMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
    @Field(() => Boolean, {nullable:true})
    shelfId?: true;
}

@ObjectType()
export class UserBookShelvesMinAggregate {
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => String, {nullable:true})
    shelfId?: string;
}

@InputType()
export class UserBookShelvesMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userBookId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    shelfId?: `${SortOrder}`;
}

@InputType()
export class UserBookShelvesOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class UserBookShelvesOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    userBookId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    shelfId?: `${SortOrder}`;
    @Field(() => UserBookShelvesCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserBookShelvesCountOrderByAggregateInput>;
    @Field(() => UserBookShelvesMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserBookShelvesMaxOrderByAggregateInput>;
    @Field(() => UserBookShelvesMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserBookShelvesMinOrderByAggregateInput>;
}

@InputType()
export class UserBookShelvesOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    userBookId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    shelfId?: `${SortOrder}`;
    @Field(() => UserBookOrderByWithRelationInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookOrderByWithRelationInput>;
    @Field(() => ShelfOrderByWithRelationInput, {nullable:true})
    shelf?: InstanceType<typeof ShelfOrderByWithRelationInput>;
}

@InputType()
export class UserBookShelvesScalarWhereWithAggregatesInput {
    @Field(() => [UserBookShelvesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserBookShelvesScalarWhereWithAggregatesInput>;
    @Field(() => [UserBookShelvesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserBookShelvesScalarWhereWithAggregatesInput>;
    @Field(() => [UserBookShelvesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserBookShelvesScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    shelfId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserBookShelvesScalarWhereInput {
    @Field(() => [UserBookShelvesScalarWhereInput], {nullable:true})
    AND?: Array<UserBookShelvesScalarWhereInput>;
    @Field(() => [UserBookShelvesScalarWhereInput], {nullable:true})
    OR?: Array<UserBookShelvesScalarWhereInput>;
    @Field(() => [UserBookShelvesScalarWhereInput], {nullable:true})
    NOT?: Array<UserBookShelvesScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    shelfId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class UserBookShelvesUncheckedCreateNestedManyWithoutShelfInput {
    @Field(() => [UserBookShelvesCreateWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesCreateWithoutShelfInput)
    create?: Array<UserBookShelvesCreateWithoutShelfInput>;
    @Field(() => [UserBookShelvesCreateOrConnectWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesCreateOrConnectWithoutShelfInput)
    connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutShelfInput>;
    @Field(() => UserBookShelvesCreateManyShelfInputEnvelope, {nullable:true})
    @Type(() => UserBookShelvesCreateManyShelfInputEnvelope)
    createMany?: InstanceType<typeof UserBookShelvesCreateManyShelfInputEnvelope>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
}

@InputType()
export class UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput {
    @Field(() => [UserBookShelvesCreateWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesCreateWithoutUserBookInput)
    create?: Array<UserBookShelvesCreateWithoutUserBookInput>;
    @Field(() => [UserBookShelvesCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => UserBookShelvesCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof UserBookShelvesCreateManyUserBookInputEnvelope>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
}

@InputType()
export class UserBookShelvesUncheckedCreateWithoutShelfInput {
    @Field(() => String, {nullable:false})
    userBookId!: string;
}

@InputType()
export class UserBookShelvesUncheckedCreateWithoutUserBookInput {
    @Field(() => String, {nullable:false})
    shelfId!: string;
}

@InputType()
export class UserBookShelvesUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    userBookId!: string;
    @Field(() => String, {nullable:false})
    shelfId!: string;
}

@InputType()
export class UserBookShelvesUncheckedUpdateManyWithoutShelfNestedInput {
    @Field(() => [UserBookShelvesCreateWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesCreateWithoutShelfInput)
    create?: Array<UserBookShelvesCreateWithoutShelfInput>;
    @Field(() => [UserBookShelvesCreateOrConnectWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesCreateOrConnectWithoutShelfInput)
    connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutShelfInput>;
    @Field(() => [UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput)
    upsert?: Array<UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput>;
    @Field(() => UserBookShelvesCreateManyShelfInputEnvelope, {nullable:true})
    @Type(() => UserBookShelvesCreateManyShelfInputEnvelope)
    createMany?: InstanceType<typeof UserBookShelvesCreateManyShelfInputEnvelope>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput)
    update?: Array<UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput>;
    @Field(() => [UserBookShelvesUpdateManyWithWhereWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesUpdateManyWithWhereWithoutShelfInput)
    updateMany?: Array<UserBookShelvesUpdateManyWithWhereWithoutShelfInput>;
    @Field(() => [UserBookShelvesScalarWhereInput], {nullable:true})
    @Type(() => UserBookShelvesScalarWhereInput)
    deleteMany?: Array<UserBookShelvesScalarWhereInput>;
}

@InputType()
export class UserBookShelvesUncheckedUpdateManyWithoutShelfInput {
    @Field(() => String, {nullable:true})
    userBookId?: string;
}

@InputType()
export class UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput {
    @Field(() => [UserBookShelvesCreateWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesCreateWithoutUserBookInput)
    create?: Array<UserBookShelvesCreateWithoutUserBookInput>;
    @Field(() => [UserBookShelvesCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutUserBookInput>;
    @Field(() => [UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput)
    upsert?: Array<UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => UserBookShelvesCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof UserBookShelvesCreateManyUserBookInputEnvelope>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput)
    update?: Array<UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput>;
    @Field(() => [UserBookShelvesUpdateManyWithWhereWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesUpdateManyWithWhereWithoutUserBookInput)
    updateMany?: Array<UserBookShelvesUpdateManyWithWhereWithoutUserBookInput>;
    @Field(() => [UserBookShelvesScalarWhereInput], {nullable:true})
    @Type(() => UserBookShelvesScalarWhereInput)
    deleteMany?: Array<UserBookShelvesScalarWhereInput>;
}

@InputType()
export class UserBookShelvesUncheckedUpdateManyWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    shelfId?: string;
}

@InputType()
export class UserBookShelvesUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => String, {nullable:true})
    shelfId?: string;
}

@InputType()
export class UserBookShelvesUncheckedUpdateWithoutShelfInput {
    @Field(() => String, {nullable:true})
    userBookId?: string;
}

@InputType()
export class UserBookShelvesUncheckedUpdateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    shelfId?: string;
}

@InputType()
export class UserBookShelvesUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => String, {nullable:true})
    shelfId?: string;
}

@InputType()
export class UserBookShelvesUpdateManyWithWhereWithoutShelfInput {
    @Field(() => UserBookShelvesScalarWhereInput, {nullable:false})
    @Type(() => UserBookShelvesScalarWhereInput)
    where!: InstanceType<typeof UserBookShelvesScalarWhereInput>;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutShelfInput, {nullable:false})
    @Type(() => UserBookShelvesUncheckedUpdateManyWithoutShelfInput)
    data!: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutShelfInput>;
}

@InputType()
export class UserBookShelvesUpdateManyWithWhereWithoutUserBookInput {
    @Field(() => UserBookShelvesScalarWhereInput, {nullable:false})
    @Type(() => UserBookShelvesScalarWhereInput)
    where!: InstanceType<typeof UserBookShelvesScalarWhereInput>;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookInput, {nullable:false})
    @Type(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookInput)
    data!: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookInput>;
}

@InputType()
export class UserBookShelvesUpdateManyWithoutShelfNestedInput {
    @Field(() => [UserBookShelvesCreateWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesCreateWithoutShelfInput)
    create?: Array<UserBookShelvesCreateWithoutShelfInput>;
    @Field(() => [UserBookShelvesCreateOrConnectWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesCreateOrConnectWithoutShelfInput)
    connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutShelfInput>;
    @Field(() => [UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput)
    upsert?: Array<UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput>;
    @Field(() => UserBookShelvesCreateManyShelfInputEnvelope, {nullable:true})
    @Type(() => UserBookShelvesCreateManyShelfInputEnvelope)
    createMany?: InstanceType<typeof UserBookShelvesCreateManyShelfInputEnvelope>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput)
    update?: Array<UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput>;
    @Field(() => [UserBookShelvesUpdateManyWithWhereWithoutShelfInput], {nullable:true})
    @Type(() => UserBookShelvesUpdateManyWithWhereWithoutShelfInput)
    updateMany?: Array<UserBookShelvesUpdateManyWithWhereWithoutShelfInput>;
    @Field(() => [UserBookShelvesScalarWhereInput], {nullable:true})
    @Type(() => UserBookShelvesScalarWhereInput)
    deleteMany?: Array<UserBookShelvesScalarWhereInput>;
}

@InputType()
export class UserBookShelvesUpdateManyWithoutUserBookNestedInput {
    @Field(() => [UserBookShelvesCreateWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesCreateWithoutUserBookInput)
    create?: Array<UserBookShelvesCreateWithoutUserBookInput>;
    @Field(() => [UserBookShelvesCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<UserBookShelvesCreateOrConnectWithoutUserBookInput>;
    @Field(() => [UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput)
    upsert?: Array<UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => UserBookShelvesCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof UserBookShelvesCreateManyUserBookInputEnvelope>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesWhereUniqueInput], {nullable:true})
    @Type(() => UserBookShelvesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>>;
    @Field(() => [UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput)
    update?: Array<UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput>;
    @Field(() => [UserBookShelvesUpdateManyWithWhereWithoutUserBookInput], {nullable:true})
    @Type(() => UserBookShelvesUpdateManyWithWhereWithoutUserBookInput)
    updateMany?: Array<UserBookShelvesUpdateManyWithWhereWithoutUserBookInput>;
    @Field(() => [UserBookShelvesScalarWhereInput], {nullable:true})
    @Type(() => UserBookShelvesScalarWhereInput)
    deleteMany?: Array<UserBookShelvesScalarWhereInput>;
}

@InputType()
export class UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput {
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:false})
    @Type(() => UserBookShelvesWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
    @Field(() => UserBookShelvesUpdateWithoutShelfInput, {nullable:false})
    @Type(() => UserBookShelvesUpdateWithoutShelfInput)
    data!: InstanceType<typeof UserBookShelvesUpdateWithoutShelfInput>;
}

@InputType()
export class UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput {
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:false})
    @Type(() => UserBookShelvesWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
    @Field(() => UserBookShelvesUpdateWithoutUserBookInput, {nullable:false})
    @Type(() => UserBookShelvesUpdateWithoutUserBookInput)
    data!: InstanceType<typeof UserBookShelvesUpdateWithoutUserBookInput>;
}

@InputType()
export class UserBookShelvesUpdateWithoutShelfInput {
    @Field(() => UserBookUpdateOneRequiredWithoutShelvesNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneRequiredWithoutShelvesNestedInput>;
}

@InputType()
export class UserBookShelvesUpdateWithoutUserBookInput {
    @Field(() => ShelfUpdateOneRequiredWithoutUserBooksNestedInput, {nullable:true})
    shelf?: InstanceType<typeof ShelfUpdateOneRequiredWithoutUserBooksNestedInput>;
}

@InputType()
export class UserBookShelvesUpdateInput {
    @Field(() => UserBookUpdateOneRequiredWithoutShelvesNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneRequiredWithoutShelvesNestedInput>;
    @Field(() => ShelfUpdateOneRequiredWithoutUserBooksNestedInput, {nullable:true})
    shelf?: InstanceType<typeof ShelfUpdateOneRequiredWithoutUserBooksNestedInput>;
}

@InputType()
export class UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput {
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:false})
    @Type(() => UserBookShelvesWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
    @Field(() => UserBookShelvesUpdateWithoutShelfInput, {nullable:false})
    @Type(() => UserBookShelvesUpdateWithoutShelfInput)
    update!: InstanceType<typeof UserBookShelvesUpdateWithoutShelfInput>;
    @Field(() => UserBookShelvesCreateWithoutShelfInput, {nullable:false})
    @Type(() => UserBookShelvesCreateWithoutShelfInput)
    create!: InstanceType<typeof UserBookShelvesCreateWithoutShelfInput>;
}

@InputType()
export class UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput {
    @Field(() => UserBookShelvesWhereUniqueInput, {nullable:false})
    @Type(() => UserBookShelvesWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookShelvesWhereUniqueInput, 'userBookId_shelfId'>;
    @Field(() => UserBookShelvesUpdateWithoutUserBookInput, {nullable:false})
    @Type(() => UserBookShelvesUpdateWithoutUserBookInput)
    update!: InstanceType<typeof UserBookShelvesUpdateWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateWithoutUserBookInput, {nullable:false})
    @Type(() => UserBookShelvesCreateWithoutUserBookInput)
    create!: InstanceType<typeof UserBookShelvesCreateWithoutUserBookInput>;
}

@InputType()
export class UserBookShelvesUserBookIdShelfIdCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    userBookId!: string;
    @Field(() => String, {nullable:false})
    shelfId!: string;
}

@InputType()
export class UserBookShelvesWhereUniqueInput {
    @Field(() => UserBookShelvesUserBookIdShelfIdCompoundUniqueInput, {nullable:true})
    userBookId_shelfId?: InstanceType<typeof UserBookShelvesUserBookIdShelfIdCompoundUniqueInput>;
    @Field(() => [UserBookShelvesWhereInput], {nullable:true})
    AND?: Array<UserBookShelvesWhereInput>;
    @Field(() => [UserBookShelvesWhereInput], {nullable:true})
    OR?: Array<UserBookShelvesWhereInput>;
    @Field(() => [UserBookShelvesWhereInput], {nullable:true})
    NOT?: Array<UserBookShelvesWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    shelfId?: InstanceType<typeof StringFilter>;
    @Field(() => UserBookScalarRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookScalarRelationFilter>;
    @Field(() => ShelfScalarRelationFilter, {nullable:true})
    shelf?: InstanceType<typeof ShelfScalarRelationFilter>;
}

@InputType()
export class UserBookShelvesWhereInput {
    @Field(() => [UserBookShelvesWhereInput], {nullable:true})
    AND?: Array<UserBookShelvesWhereInput>;
    @Field(() => [UserBookShelvesWhereInput], {nullable:true})
    OR?: Array<UserBookShelvesWhereInput>;
    @Field(() => [UserBookShelvesWhereInput], {nullable:true})
    NOT?: Array<UserBookShelvesWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    shelfId?: InstanceType<typeof StringFilter>;
    @Field(() => UserBookScalarRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookScalarRelationFilter>;
    @Field(() => ShelfScalarRelationFilter, {nullable:true})
    shelf?: InstanceType<typeof ShelfScalarRelationFilter>;
}

@ObjectType()
export class UserBookShelves {
    @Field(() => String, {nullable:false})
    userBookId!: string;
    @Field(() => String, {nullable:false})
    shelfId!: string;
    @Field(() => UserBook, {nullable:false})
    userBook?: InstanceType<typeof UserBook>;
    @Field(() => Shelf, {nullable:false})
    shelf?: InstanceType<typeof Shelf>;
}

@ObjectType()
export class AggregateVerificationToken {
    @Field(() => VerificationTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregate>;
    @Field(() => VerificationTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregate>;
    @Field(() => VerificationTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregate>;
}

@ArgsType()
export class CreateManyVerificationTokenArgs {
    @Field(() => [VerificationTokenCreateManyInput], {nullable:false})
    @Type(() => VerificationTokenCreateManyInput)
    @ValidateNested()
    data!: Array<VerificationTokenCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneVerificationTokenArgs {
    @Field(() => VerificationTokenCreateInput, {nullable:false})
    @Type(() => VerificationTokenCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof VerificationTokenCreateInput>;
}

@ArgsType()
export class DeleteManyVerificationTokenArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneVerificationTokenArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
}

@ArgsType()
export class FindFirstVerificationTokenOrThrowArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VerificationTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstVerificationTokenArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VerificationTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyVerificationTokenArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VerificationTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueVerificationTokenOrThrowArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
}

@ArgsType()
export class FindUniqueVerificationTokenArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
}

@ArgsType()
export class UpdateManyVerificationTokenArgs {
    @Field(() => VerificationTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => VerificationTokenUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof VerificationTokenUpdateManyMutationInput>;
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneVerificationTokenArgs {
    @Field(() => VerificationTokenUpdateInput, {nullable:false})
    @Type(() => VerificationTokenUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof VerificationTokenUpdateInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
}

@ArgsType()
export class UpsertOneVerificationTokenArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
    @Field(() => VerificationTokenCreateInput, {nullable:false})
    @Type(() => VerificationTokenCreateInput)
    create!: InstanceType<typeof VerificationTokenCreateInput>;
    @Field(() => VerificationTokenUpdateInput, {nullable:false})
    @Type(() => VerificationTokenUpdateInput)
    update!: InstanceType<typeof VerificationTokenUpdateInput>;
}

@ArgsType()
export class VerificationTokenAggregateArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token' | 'email_token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => VerificationTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregateInput>;
    @Field(() => VerificationTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregateInput>;
    @Field(() => VerificationTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregateInput>;
}

@InputType()
export class VerificationTokenCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class VerificationTokenCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    token!: number;
    @Field(() => Int, {nullable:false})
    expires!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class VerificationTokenCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;
}

@InputType()
export class VerificationTokenCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class VerificationTokenCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class VerificationTokenEmailTokenCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    token!: string;
}

@ArgsType()
export class VerificationTokenGroupByArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithAggregationInput>;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:false})
    by!: Array<`${VerificationTokenScalarFieldEnum}`>;
    @Field(() => VerificationTokenScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => VerificationTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregateInput>;
    @Field(() => VerificationTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregateInput>;
    @Field(() => VerificationTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregateInput>;
}

@ObjectType()
export class VerificationTokenGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
    @Field(() => VerificationTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregate>;
    @Field(() => VerificationTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregate>;
    @Field(() => VerificationTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregate>;
}

@InputType()
export class VerificationTokenMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
}

@ObjectType()
export class VerificationTokenMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;
}

@InputType()
export class VerificationTokenMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    expires?: true;
}

@ObjectType()
export class VerificationTokenMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;
}

@InputType()
export class VerificationTokenOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;
    @Field(() => VerificationTokenCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountOrderByAggregateInput>;
    @Field(() => VerificationTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxOrderByAggregateInput>;
    @Field(() => VerificationTokenMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinOrderByAggregateInput>;
}

@InputType()
export class VerificationTokenOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;
}

@InputType()
export class VerificationTokenScalarWhereWithAggregatesInput {
    @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class VerificationTokenUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}

@InputType()
export class VerificationTokenUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => Date, {nullable:true})
    expires?: Date | string;
}

@InputType()
export class VerificationTokenWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => VerificationTokenEmailTokenCompoundUniqueInput, {nullable:true})
    email_token?: InstanceType<typeof VerificationTokenEmailTokenCompoundUniqueInput>;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    AND?: Array<VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    OR?: Array<VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    NOT?: Array<VerificationTokenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class VerificationTokenWhereInput {
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    AND?: Array<VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    OR?: Array<VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    NOT?: Array<VerificationTokenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expires?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class VerificationToken {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expires!: Date;
}
