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
    updatedAt = "updatedAt"
}

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    hashedPassword = "hashedPassword",
    hashedRefreshToken = "hashedRefreshToken",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ShelfScalarFieldEnum {
    id = "id",
    name = "name",
    userId = "userId",
    dateTime = "dateTime"
}

export enum ReviewScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    content = "content",
    userBookId = "userBookId",
    spoilers = "spoilers",
    userId = "userId",
    bookId = "bookId"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum LikedReviewScalarFieldEnum {
    id = "id",
    likedAt = "likedAt",
    userId = "userId",
    reviewId = "reviewId"
}

export enum JournalEntryScalarFieldEnum {
    id = "id",
    readingNotes = "readingNotes",
    dateRead = "dateRead",
    createdAt = "createdAt",
    currentPage = "currentPage",
    pagesRead = "pagesRead",
    currentPercent = "currentPercent",
    userId = "userId",
    userBookId = "userBookId"
}

export enum CommentScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    content = "content",
    userId = "userId",
    reviewId = "reviewId"
}

export enum BookScalarFieldEnum {
    id = "id",
    title = "title",
    author = "author",
    publishedDate = "publishedDate",
    publisher = "publisher",
    coverImage = "coverImage",
    description = "description",
    pageCount = "pageCount",
    categories = "categories"
}

registerEnumType(BookScalarFieldEnum, { name: 'BookScalarFieldEnum', description: undefined })
registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
registerEnumType(JournalEntryScalarFieldEnum, { name: 'JournalEntryScalarFieldEnum', description: undefined })
registerEnumType(LikedReviewScalarFieldEnum, { name: 'LikedReviewScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(ReviewScalarFieldEnum, { name: 'ReviewScalarFieldEnum', description: undefined })
registerEnumType(ShelfScalarFieldEnum, { name: 'ShelfScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
registerEnumType(UserBookScalarFieldEnum, { name: 'UserBookScalarFieldEnum', description: undefined })
registerEnumType(UserBookShelvesScalarFieldEnum, { name: 'UserBookShelvesScalarFieldEnum', description: undefined })

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
    cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
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
    pageCount?: keyof typeof SortOrder;
}

@InputType()
export class BookCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    author?: true;
    @Field(() => Boolean, {nullable:true})
    publishedDate?: true;
    @Field(() => Boolean, {nullable:true})
    publisher?: true;
    @Field(() => Boolean, {nullable:true})
    coverImage?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    pageCount?: true;
    @Field(() => Boolean, {nullable:true})
    categories?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class BookCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    author!: number;
    @Field(() => Int, {nullable:false})
    publishedDate!: number;
    @Field(() => Int, {nullable:false})
    publisher!: number;
    @Field(() => Int, {nullable:false})
    coverImage!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pageCount!: number;
    @Field(() => Int, {nullable:false})
    categories!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class BookCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    author?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    publishedDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    publisher?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    coverImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pageCount?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categories?: keyof typeof SortOrder;
}

@ObjectType()
export class BookCount {
    @Field(() => Int, {nullable:false})
    userBook?: number;
    @Field(() => Int, {nullable:false})
    reviews?: number;
}

@InputType()
export class BookCreateManyInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
}

@InputType()
export class BookCreateNestedOneWithoutReviewsInput {
    @Field(() => BookCreateWithoutReviewsInput, {nullable:true})
    @Type(() => BookCreateWithoutReviewsInput)
    create?: InstanceType<typeof BookCreateWithoutReviewsInput>;
    @Field(() => BookCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutReviewsInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
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
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
}

@InputType()
export class BookCreateOrConnectWithoutReviewsInput {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
    @Field(() => BookCreateWithoutReviewsInput, {nullable:false})
    @Type(() => BookCreateWithoutReviewsInput)
    create!: InstanceType<typeof BookCreateWithoutReviewsInput>;
}

@InputType()
export class BookCreateOrConnectWithoutUserBookInput {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
    @Field(() => BookCreateWithoutUserBookInput, {nullable:false})
    @Type(() => BookCreateWithoutUserBookInput)
    create!: InstanceType<typeof BookCreateWithoutUserBookInput>;
}

@InputType()
export class BookCreateWithoutReviewsInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => UserBookCreateNestedManyWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookCreateWithoutUserBookInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => ReviewCreateNestedManyWithoutBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => UserBookCreateNestedManyWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedManyWithoutBookInput>;
    @Field(() => ReviewCreateNestedManyWithoutBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutBookInput>;
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
    by!: Array<keyof typeof BookScalarFieldEnum>;
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
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
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
    title?: true;
    @Field(() => Boolean, {nullable:true})
    author?: true;
    @Field(() => Boolean, {nullable:true})
    publishedDate?: true;
    @Field(() => Boolean, {nullable:true})
    publisher?: true;
    @Field(() => Boolean, {nullable:true})
    coverImage?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    pageCount?: true;
    @Field(() => Boolean, {nullable:true})
    categories?: true;
}

@ObjectType()
export class BookMaxAggregate {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
}

@InputType()
export class BookMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    author?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    publishedDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    publisher?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    coverImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pageCount?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categories?: keyof typeof SortOrder;
}

@InputType()
export class BookMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    author?: true;
    @Field(() => Boolean, {nullable:true})
    publishedDate?: true;
    @Field(() => Boolean, {nullable:true})
    publisher?: true;
    @Field(() => Boolean, {nullable:true})
    coverImage?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    pageCount?: true;
    @Field(() => Boolean, {nullable:true})
    categories?: true;
}

@ObjectType()
export class BookMinAggregate {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
}

@InputType()
export class BookMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    author?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    publishedDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    publisher?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    coverImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pageCount?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categories?: keyof typeof SortOrder;
}

@InputType()
export class BookOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    author?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    publishedDate?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    publisher?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    coverImage?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    pageCount?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    categories?: InstanceType<typeof SortOrderInput>;
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
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    author?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    publishedDate?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    publisher?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    coverImage?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    pageCount?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    categories?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserBookOrderByRelationAggregateInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookOrderByRelationAggregateInput>;
    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewOrderByRelationAggregateInput>;
}

@InputType()
export class BookRelationFilter {
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
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    author?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    publishedDate?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    publisher?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    coverImage?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pageCount?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categories?: InstanceType<typeof StringWithAggregatesFilter>;
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
    pageCount?: keyof typeof SortOrder;
}

@InputType()
export class BookUncheckedCreateWithoutReviewsInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => UserBookUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateWithoutUserBookInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => ReviewUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => UserBookUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedCreateNestedManyWithoutBookInput>;
    @Field(() => ReviewUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedCreateNestedManyWithoutBookInput>;
}

@InputType()
export class BookUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
}

@InputType()
export class BookUncheckedUpdateWithoutReviewsInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => UserBookUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUncheckedUpdateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => ReviewUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => UserBookUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedUpdateManyWithoutBookNestedInput>;
    @Field(() => ReviewUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
}

@InputType()
export class BookUpdateOneWithoutReviewsNestedInput {
    @Field(() => BookCreateWithoutReviewsInput, {nullable:true})
    @Type(() => BookCreateWithoutReviewsInput)
    create?: InstanceType<typeof BookCreateWithoutReviewsInput>;
    @Field(() => BookCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutReviewsInput>;
    @Field(() => BookUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => BookUpsertWithoutReviewsInput)
    upsert?: InstanceType<typeof BookUpsertWithoutReviewsInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    disconnect?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    delete?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
    @Field(() => BookUpdateToOneWithWhereWithoutReviewsInput, {nullable:true})
    @Type(() => BookUpdateToOneWithWhereWithoutReviewsInput)
    update?: InstanceType<typeof BookUpdateToOneWithWhereWithoutReviewsInput>;
}

@InputType()
export class BookUpdateOneWithoutUserBookNestedInput {
    @Field(() => BookCreateWithoutUserBookInput, {nullable:true})
    @Type(() => BookCreateWithoutUserBookInput)
    create?: InstanceType<typeof BookCreateWithoutUserBookInput>;
    @Field(() => BookCreateOrConnectWithoutUserBookInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: InstanceType<typeof BookCreateOrConnectWithoutUserBookInput>;
    @Field(() => BookUpsertWithoutUserBookInput, {nullable:true})
    @Type(() => BookUpsertWithoutUserBookInput)
    upsert?: InstanceType<typeof BookUpsertWithoutUserBookInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    disconnect?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    delete?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
    @Field(() => BookUpdateToOneWithWhereWithoutUserBookInput, {nullable:true})
    @Type(() => BookUpdateToOneWithWhereWithoutUserBookInput)
    update?: InstanceType<typeof BookUpdateToOneWithWhereWithoutUserBookInput>;
}

@InputType()
export class BookUpdateToOneWithWhereWithoutReviewsInput {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => BookUpdateWithoutReviewsInput)
    data!: InstanceType<typeof BookUpdateWithoutReviewsInput>;
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
export class BookUpdateWithoutReviewsInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => UserBookUpdateManyWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUpdateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => ReviewUpdateManyWithoutBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    author?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publishedDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    publisher?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    coverImage?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageCount?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => UserBookUpdateManyWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateManyWithoutBookNestedInput>;
    @Field(() => ReviewUpdateManyWithoutBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUpdateManyWithoutBookNestedInput>;
}

@InputType()
export class BookUpsertWithoutReviewsInput {
    @Field(() => BookUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => BookUpdateWithoutReviewsInput)
    update!: InstanceType<typeof BookUpdateWithoutReviewsInput>;
    @Field(() => BookCreateWithoutReviewsInput, {nullable:false})
    @Type(() => BookCreateWithoutReviewsInput)
    create!: InstanceType<typeof BookCreateWithoutReviewsInput>;
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
    @Field(() => [BookWhereInput], {nullable:true})
    AND?: Array<BookWhereInput>;
    @Field(() => [BookWhereInput], {nullable:true})
    OR?: Array<BookWhereInput>;
    @Field(() => [BookWhereInput], {nullable:true})
    NOT?: Array<BookWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    author?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    publishedDate?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    publisher?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    coverImage?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    pageCount?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    categories?: InstanceType<typeof StringFilter>;
    @Field(() => UserBookListRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookListRelationFilter>;
    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: InstanceType<typeof ReviewListRelationFilter>;
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
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    author?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    publishedDate?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    publisher?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    coverImage?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    pageCount?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    categories?: InstanceType<typeof StringFilter>;
    @Field(() => UserBookListRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookListRelationFilter>;
    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: InstanceType<typeof ReviewListRelationFilter>;
}

@ObjectType()
export class Book {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    author!: string | null;
    @Field(() => String, {nullable:true})
    publishedDate!: string | null;
    @Field(() => String, {nullable:true})
    publisher!: string | null;
    @Field(() => String, {nullable:true})
    coverImage!: string | null;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => Int, {nullable:true})
    pageCount!: number | null;
    @Field(() => String, {nullable:true})
    categories!: string | null;
    @Field(() => [UserBook], {nullable:true})
    userBook?: Array<UserBook>;
    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;
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
}

@ArgsType()
export class DeleteOneBookArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
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
    cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookScalarFieldEnum>;
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
    cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookScalarFieldEnum>;
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
    cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueBookOrThrowArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueBookArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
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
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneBookArgs {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
    @Field(() => BookCreateInput, {nullable:false})
    @Type(() => BookCreateInput)
    create!: InstanceType<typeof BookCreateInput>;
    @Field(() => BookUpdateInput, {nullable:false})
    @Type(() => BookUpdateInput)
    update!: InstanceType<typeof BookUpdateInput>;
}

@ObjectType()
export class AggregateComment {
    @Field(() => CommentCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregate>;
    @Field(() => CommentMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregate>;
    @Field(() => CommentMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregate>;
}

@ArgsType()
export class CommentAggregateArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CommentCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregateInput>;
    @Field(() => CommentMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregateInput>;
    @Field(() => CommentMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregateInput>;
}

@InputType()
export class CommentCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    reviewId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CommentCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    reviewId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CommentCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;
}

@InputType()
export class CommentCreateManyReviewInputEnvelope {
    @Field(() => [CommentCreateManyReviewInput], {nullable:false})
    @Type(() => CommentCreateManyReviewInput)
    data!: Array<CommentCreateManyReviewInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CommentCreateManyReviewInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class CommentCreateManyUserInputEnvelope {
    @Field(() => [CommentCreateManyUserInput], {nullable:false})
    @Type(() => CommentCreateManyUserInput)
    data!: Array<CommentCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CommentCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class CommentCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class CommentCreateNestedManyWithoutReviewInput {
    @Field(() => [CommentCreateWithoutReviewInput], {nullable:true})
    @Type(() => CommentCreateWithoutReviewInput)
    create?: Array<CommentCreateWithoutReviewInput>;
    @Field(() => [CommentCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutReviewInput>;
    @Field(() => CommentCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyReviewInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyReviewInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentCreateNestedManyWithoutUserInput {
    @Field(() => [CommentCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateWithoutUserInput)
    create?: Array<CommentCreateWithoutUserInput>;
    @Field(() => [CommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
    @Field(() => CommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyUserInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentCreateOrConnectWithoutReviewInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentCreateWithoutReviewInput, {nullable:false})
    @Type(() => CommentCreateWithoutReviewInput)
    create!: InstanceType<typeof CommentCreateWithoutReviewInput>;
}

@InputType()
export class CommentCreateOrConnectWithoutUserInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentCreateWithoutUserInput, {nullable:false})
    @Type(() => CommentCreateWithoutUserInput)
    create!: InstanceType<typeof CommentCreateWithoutUserInput>;
}

@InputType()
export class CommentCreateWithoutReviewInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutCommentsInput>;
}

@InputType()
export class CommentCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => ReviewCreateNestedOneWithoutCommentsInput, {nullable:true})
    review?: InstanceType<typeof ReviewCreateNestedOneWithoutCommentsInput>;
}

@InputType()
export class CommentCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutCommentsInput>;
    @Field(() => ReviewCreateNestedOneWithoutCommentsInput, {nullable:true})
    review?: InstanceType<typeof ReviewCreateNestedOneWithoutCommentsInput>;
}

@ArgsType()
export class CommentGroupByArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithAggregationInput>;
    @Field(() => [CommentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CommentScalarFieldEnum>;
    @Field(() => CommentScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CommentScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CommentCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregateInput>;
    @Field(() => CommentMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregateInput>;
    @Field(() => CommentMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregateInput>;
}

@ObjectType()
export class CommentGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
    @Field(() => CommentCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregate>;
    @Field(() => CommentMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregate>;
    @Field(() => CommentMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregate>;
}

@InputType()
export class CommentListRelationFilter {
    @Field(() => CommentWhereInput, {nullable:true})
    every?: InstanceType<typeof CommentWhereInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    some?: InstanceType<typeof CommentWhereInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    none?: InstanceType<typeof CommentWhereInput>;
}

@InputType()
export class CommentMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    reviewId?: true;
}

@ObjectType()
export class CommentMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class CommentMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;
}

@InputType()
export class CommentMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    reviewId?: true;
}

@ObjectType()
export class CommentMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class CommentMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;
}

@InputType()
export class CommentOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class CommentOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    content?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    reviewId?: InstanceType<typeof SortOrderInput>;
    @Field(() => CommentCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommentCountOrderByAggregateInput>;
    @Field(() => CommentMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommentMaxOrderByAggregateInput>;
    @Field(() => CommentMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommentMinOrderByAggregateInput>;
}

@InputType()
export class CommentOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    content?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    reviewId?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => ReviewOrderByWithRelationInput, {nullable:true})
    review?: InstanceType<typeof ReviewOrderByWithRelationInput>;
}

@InputType()
export class CommentScalarWhereWithAggregatesInput {
    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommentScalarWhereWithAggregatesInput>;
    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommentScalarWhereWithAggregatesInput>;
    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommentScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    reviewId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class CommentScalarWhereInput {
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    AND?: Array<CommentScalarWhereInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    OR?: Array<CommentScalarWhereInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    NOT?: Array<CommentScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    reviewId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class CommentUncheckedCreateNestedManyWithoutReviewInput {
    @Field(() => [CommentCreateWithoutReviewInput], {nullable:true})
    @Type(() => CommentCreateWithoutReviewInput)
    create?: Array<CommentCreateWithoutReviewInput>;
    @Field(() => [CommentCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutReviewInput>;
    @Field(() => CommentCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyReviewInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyReviewInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [CommentCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateWithoutUserInput)
    create?: Array<CommentCreateWithoutUserInput>;
    @Field(() => [CommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
    @Field(() => CommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyUserInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentUncheckedCreateWithoutReviewInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class CommentUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class CommentUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutReviewNestedInput {
    @Field(() => [CommentCreateWithoutReviewInput], {nullable:true})
    @Type(() => CommentCreateWithoutReviewInput)
    create?: Array<CommentCreateWithoutReviewInput>;
    @Field(() => [CommentCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutReviewInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutReviewInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutReviewInput>;
    @Field(() => CommentCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyReviewInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyReviewInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutReviewInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutReviewInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutReviewInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutReviewInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutReviewInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutReviewInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [CommentCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateWithoutUserInput)
    create?: Array<CommentCreateWithoutUserInput>;
    @Field(() => [CommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => CommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyUserInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class CommentUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class CommentUncheckedUpdateWithoutReviewInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class CommentUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class CommentUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class CommentUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
}

@InputType()
export class CommentUpdateManyWithWhereWithoutReviewInput {
    @Field(() => CommentScalarWhereInput, {nullable:false})
    @Type(() => CommentScalarWhereInput)
    where!: InstanceType<typeof CommentScalarWhereInput>;
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentUpdateManyMutationInput)
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
}

@InputType()
export class CommentUpdateManyWithWhereWithoutUserInput {
    @Field(() => CommentScalarWhereInput, {nullable:false})
    @Type(() => CommentScalarWhereInput)
    where!: InstanceType<typeof CommentScalarWhereInput>;
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentUpdateManyMutationInput)
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
}

@InputType()
export class CommentUpdateManyWithoutReviewNestedInput {
    @Field(() => [CommentCreateWithoutReviewInput], {nullable:true})
    @Type(() => CommentCreateWithoutReviewInput)
    create?: Array<CommentCreateWithoutReviewInput>;
    @Field(() => [CommentCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutReviewInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutReviewInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutReviewInput>;
    @Field(() => CommentCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyReviewInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyReviewInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutReviewInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutReviewInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutReviewInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutReviewInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutReviewInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUpdateManyWithoutUserNestedInput {
    @Field(() => [CommentCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateWithoutUserInput)
    create?: Array<CommentCreateWithoutUserInput>;
    @Field(() => [CommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => CommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyUserInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUpdateWithWhereUniqueWithoutReviewInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutReviewInput, {nullable:false})
    @Type(() => CommentUpdateWithoutReviewInput)
    data!: InstanceType<typeof CommentUpdateWithoutReviewInput>;
}

@InputType()
export class CommentUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutUserInput, {nullable:false})
    @Type(() => CommentUpdateWithoutUserInput)
    data!: InstanceType<typeof CommentUpdateWithoutUserInput>;
}

@InputType()
export class CommentUpdateWithoutReviewInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => UserUpdateOneWithoutCommentsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutCommentsNestedInput>;
}

@InputType()
export class CommentUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => ReviewUpdateOneWithoutCommentsNestedInput, {nullable:true})
    review?: InstanceType<typeof ReviewUpdateOneWithoutCommentsNestedInput>;
}

@InputType()
export class CommentUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => UserUpdateOneWithoutCommentsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutCommentsNestedInput>;
    @Field(() => ReviewUpdateOneWithoutCommentsNestedInput, {nullable:true})
    review?: InstanceType<typeof ReviewUpdateOneWithoutCommentsNestedInput>;
}

@InputType()
export class CommentUpsertWithWhereUniqueWithoutReviewInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutReviewInput, {nullable:false})
    @Type(() => CommentUpdateWithoutReviewInput)
    update!: InstanceType<typeof CommentUpdateWithoutReviewInput>;
    @Field(() => CommentCreateWithoutReviewInput, {nullable:false})
    @Type(() => CommentCreateWithoutReviewInput)
    create!: InstanceType<typeof CommentCreateWithoutReviewInput>;
}

@InputType()
export class CommentUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutUserInput, {nullable:false})
    @Type(() => CommentUpdateWithoutUserInput)
    update!: InstanceType<typeof CommentUpdateWithoutUserInput>;
    @Field(() => CommentCreateWithoutUserInput, {nullable:false})
    @Type(() => CommentCreateWithoutUserInput)
    create!: InstanceType<typeof CommentCreateWithoutUserInput>;
}

@InputType()
export class CommentWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    reviewId?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => ReviewRelationFilter, {nullable:true})
    review?: InstanceType<typeof ReviewRelationFilter>;
}

@InputType()
export class CommentWhereInput {
    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    reviewId?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => ReviewRelationFilter, {nullable:true})
    review?: InstanceType<typeof ReviewRelationFilter>;
}

@ObjectType()
export class Comment {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:true})
    content!: string | null;
    @Field(() => String, {nullable:true})
    userId!: string | null;
    @Field(() => String, {nullable:true})
    reviewId!: string | null;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
    @Field(() => Review, {nullable:true})
    review?: InstanceType<typeof Review> | null;
}

@ArgsType()
export class CreateManyCommentArgs {
    @Field(() => [CommentCreateManyInput], {nullable:false})
    @Type(() => CommentCreateManyInput)
    @ValidateNested()
    data!: Array<CommentCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCommentArgs {
    @Field(() => CommentCreateInput, {nullable:true})
    @Type(() => CommentCreateInput)
    @ValidateNested()
    data?: InstanceType<typeof CommentCreateInput>;
}

@ArgsType()
export class DeleteManyCommentArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CommentWhereInput>;
}

@ArgsType()
export class DeleteOneCommentArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstCommentOrThrowArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommentScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCommentArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommentScalarFieldEnum>;
}

@ArgsType()
export class FindManyCommentArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommentScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCommentOrThrowArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueCommentArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyCommentArgs {
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CommentWhereInput>;
}

@ArgsType()
export class UpdateOneCommentArgs {
    @Field(() => CommentUpdateInput, {nullable:false})
    @Type(() => CommentUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof CommentUpdateInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneCommentArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentCreateInput, {nullable:false})
    @Type(() => CommentCreateInput)
    create!: InstanceType<typeof CommentCreateInput>;
    @Field(() => CommentUpdateInput, {nullable:false})
    @Type(() => CommentUpdateInput)
    update!: InstanceType<typeof CommentUpdateInput>;
}

@ObjectType()
export class AggregateJournalEntry {
    @Field(() => JournalEntryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof JournalEntryCountAggregate>;
    @Field(() => JournalEntryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof JournalEntryAvgAggregate>;
    @Field(() => JournalEntrySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof JournalEntrySumAggregate>;
    @Field(() => JournalEntryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof JournalEntryMinAggregate>;
    @Field(() => JournalEntryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof JournalEntryMaxAggregate>;
}

@ArgsType()
export class CreateManyJournalEntryArgs {
    @Field(() => [JournalEntryCreateManyInput], {nullable:false})
    @Type(() => JournalEntryCreateManyInput)
    @ValidateNested()
    data!: Array<JournalEntryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneJournalEntryArgs {
    @Field(() => JournalEntryCreateInput, {nullable:false})
    @Type(() => JournalEntryCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof JournalEntryCreateInput>;
}

@ArgsType()
export class DeleteManyJournalEntryArgs {
    @Field(() => JournalEntryWhereInput, {nullable:true})
    @Type(() => JournalEntryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof JournalEntryWhereInput>;
}

@ArgsType()
export class DeleteOneJournalEntryArgs {
    @Field(() => JournalEntryWhereUniqueInput, {nullable:false})
    @Type(() => JournalEntryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstJournalEntryOrThrowArgs {
    @Field(() => JournalEntryWhereInput, {nullable:true})
    @Type(() => JournalEntryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof JournalEntryWhereInput>;
    @Field(() => [JournalEntryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JournalEntryOrderByWithRelationInput>;
    @Field(() => JournalEntryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [JournalEntryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof JournalEntryScalarFieldEnum>;
}

@ArgsType()
export class FindFirstJournalEntryArgs {
    @Field(() => JournalEntryWhereInput, {nullable:true})
    @Type(() => JournalEntryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof JournalEntryWhereInput>;
    @Field(() => [JournalEntryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JournalEntryOrderByWithRelationInput>;
    @Field(() => JournalEntryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [JournalEntryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof JournalEntryScalarFieldEnum>;
}

@ArgsType()
export class FindManyJournalEntryArgs {
    @Field(() => JournalEntryWhereInput, {nullable:true})
    @Type(() => JournalEntryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof JournalEntryWhereInput>;
    @Field(() => [JournalEntryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JournalEntryOrderByWithRelationInput>;
    @Field(() => JournalEntryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [JournalEntryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof JournalEntryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueJournalEntryOrThrowArgs {
    @Field(() => JournalEntryWhereUniqueInput, {nullable:false})
    @Type(() => JournalEntryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueJournalEntryArgs {
    @Field(() => JournalEntryWhereUniqueInput, {nullable:false})
    @Type(() => JournalEntryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class JournalEntryAggregateArgs {
    @Field(() => JournalEntryWhereInput, {nullable:true})
    @Type(() => JournalEntryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof JournalEntryWhereInput>;
    @Field(() => [JournalEntryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JournalEntryOrderByWithRelationInput>;
    @Field(() => JournalEntryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => JournalEntryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof JournalEntryCountAggregateInput>;
    @Field(() => JournalEntryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof JournalEntryAvgAggregateInput>;
    @Field(() => JournalEntrySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof JournalEntrySumAggregateInput>;
    @Field(() => JournalEntryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof JournalEntryMinAggregateInput>;
    @Field(() => JournalEntryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof JournalEntryMaxAggregateInput>;
}

@InputType()
export class JournalEntryAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    currentPage?: true;
    @Field(() => Boolean, {nullable:true})
    pagesRead?: true;
    @Field(() => Boolean, {nullable:true})
    currentPercent?: true;
}

@ObjectType()
export class JournalEntryAvgAggregate {
    @Field(() => Float, {nullable:true})
    currentPage?: number;
    @Field(() => Float, {nullable:true})
    pagesRead?: number;
    @Field(() => Float, {nullable:true})
    currentPercent?: number;
}

@InputType()
export class JournalEntryAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    currentPage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pagesRead?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currentPercent?: keyof typeof SortOrder;
}

@InputType()
export class JournalEntryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    readingNotes?: true;
    @Field(() => Boolean, {nullable:true})
    dateRead?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    currentPage?: true;
    @Field(() => Boolean, {nullable:true})
    pagesRead?: true;
    @Field(() => Boolean, {nullable:true})
    currentPercent?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class JournalEntryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    readingNotes!: number;
    @Field(() => Int, {nullable:false})
    dateRead!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    currentPage!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pagesRead!: number;
    @Field(() => Int, {nullable:false})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    userBookId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class JournalEntryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    readingNotes?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateRead?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currentPage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pagesRead?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currentPercent?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: keyof typeof SortOrder;
}

@InputType()
export class JournalEntryCreateManyUserBookInputEnvelope {
    @Field(() => [JournalEntryCreateManyUserBookInput], {nullable:false})
    @Type(() => JournalEntryCreateManyUserBookInput)
    data!: Array<JournalEntryCreateManyUserBookInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class JournalEntryCreateManyUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    currentPage!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pagesRead!: number;
    @Field(() => Int, {nullable:false})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent!: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
}

@InputType()
export class JournalEntryCreateManyUserInputEnvelope {
    @Field(() => [JournalEntryCreateManyUserInput], {nullable:false})
    @Type(() => JournalEntryCreateManyUserInput)
    data!: Array<JournalEntryCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class JournalEntryCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    currentPage!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pagesRead!: number;
    @Field(() => Int, {nullable:false})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent!: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userBookId?: string;
}

@InputType()
export class JournalEntryCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    currentPage!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pagesRead!: number;
    @Field(() => Int, {nullable:false})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent!: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userBookId?: string;
}

@InputType()
export class JournalEntryCreateNestedManyWithoutUserBookInput {
    @Field(() => [JournalEntryCreateWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryCreateWithoutUserBookInput)
    create?: Array<JournalEntryCreateWithoutUserBookInput>;
    @Field(() => [JournalEntryCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserBookInput>;
    @Field(() => JournalEntryCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => JournalEntryCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof JournalEntryCreateManyUserBookInputEnvelope>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
}

@InputType()
export class JournalEntryCreateNestedManyWithoutUserInput {
    @Field(() => [JournalEntryCreateWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryCreateWithoutUserInput)
    create?: Array<JournalEntryCreateWithoutUserInput>;
    @Field(() => [JournalEntryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserInput>;
    @Field(() => JournalEntryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => JournalEntryCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof JournalEntryCreateManyUserInputEnvelope>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
}

@InputType()
export class JournalEntryCreateOrConnectWithoutUserBookInput {
    @Field(() => JournalEntryWhereUniqueInput, {nullable:false})
    @Type(() => JournalEntryWhereUniqueInput)
    where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
    @Field(() => JournalEntryCreateWithoutUserBookInput, {nullable:false})
    @Type(() => JournalEntryCreateWithoutUserBookInput)
    create!: InstanceType<typeof JournalEntryCreateWithoutUserBookInput>;
}

@InputType()
export class JournalEntryCreateOrConnectWithoutUserInput {
    @Field(() => JournalEntryWhereUniqueInput, {nullable:false})
    @Type(() => JournalEntryWhereUniqueInput)
    where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
    @Field(() => JournalEntryCreateWithoutUserInput, {nullable:false})
    @Type(() => JournalEntryCreateWithoutUserInput)
    create!: InstanceType<typeof JournalEntryCreateWithoutUserInput>;
}

@InputType()
export class JournalEntryCreateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    currentPage!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pagesRead!: number;
    @Field(() => Int, {nullable:false})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent!: number;
    @Field(() => UserCreateNestedOneWithoutJournalEntriesInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutJournalEntriesInput>;
}

@InputType()
export class JournalEntryCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    currentPage!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pagesRead!: number;
    @Field(() => Int, {nullable:false})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent!: number;
    @Field(() => UserBookCreateNestedOneWithoutJournalEntryInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutJournalEntryInput>;
}

@InputType()
export class JournalEntryCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    currentPage!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pagesRead!: number;
    @Field(() => Int, {nullable:false})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent!: number;
    @Field(() => UserCreateNestedOneWithoutJournalEntriesInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutJournalEntriesInput>;
    @Field(() => UserBookCreateNestedOneWithoutJournalEntryInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutJournalEntryInput>;
}

@ArgsType()
export class JournalEntryGroupByArgs {
    @Field(() => JournalEntryWhereInput, {nullable:true})
    @Type(() => JournalEntryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof JournalEntryWhereInput>;
    @Field(() => [JournalEntryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<JournalEntryOrderByWithAggregationInput>;
    @Field(() => [JournalEntryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof JournalEntryScalarFieldEnum>;
    @Field(() => JournalEntryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof JournalEntryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => JournalEntryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof JournalEntryCountAggregateInput>;
    @Field(() => JournalEntryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof JournalEntryAvgAggregateInput>;
    @Field(() => JournalEntrySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof JournalEntrySumAggregateInput>;
    @Field(() => JournalEntryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof JournalEntryMinAggregateInput>;
    @Field(() => JournalEntryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof JournalEntryMaxAggregateInput>;
}

@ObjectType()
export class JournalEntryGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:false})
    dateRead!: Date | string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    currentPage!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pagesRead!: number;
    @Field(() => Int, {nullable:false})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent!: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userBookId?: string;
    @Field(() => JournalEntryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof JournalEntryCountAggregate>;
    @Field(() => JournalEntryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof JournalEntryAvgAggregate>;
    @Field(() => JournalEntrySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof JournalEntrySumAggregate>;
    @Field(() => JournalEntryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof JournalEntryMinAggregate>;
    @Field(() => JournalEntryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof JournalEntryMaxAggregate>;
}

@InputType()
export class JournalEntryListRelationFilter {
    @Field(() => JournalEntryWhereInput, {nullable:true})
    every?: InstanceType<typeof JournalEntryWhereInput>;
    @Field(() => JournalEntryWhereInput, {nullable:true})
    some?: InstanceType<typeof JournalEntryWhereInput>;
    @Field(() => JournalEntryWhereInput, {nullable:true})
    none?: InstanceType<typeof JournalEntryWhereInput>;
}

@InputType()
export class JournalEntryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    readingNotes?: true;
    @Field(() => Boolean, {nullable:true})
    dateRead?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    currentPage?: true;
    @Field(() => Boolean, {nullable:true})
    pagesRead?: true;
    @Field(() => Boolean, {nullable:true})
    currentPercent?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
}

@ObjectType()
export class JournalEntryMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    currentPage?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pagesRead?: number;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userBookId?: string;
}

@InputType()
export class JournalEntryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    readingNotes?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateRead?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currentPage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pagesRead?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currentPercent?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: keyof typeof SortOrder;
}

@InputType()
export class JournalEntryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    readingNotes?: true;
    @Field(() => Boolean, {nullable:true})
    dateRead?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    currentPage?: true;
    @Field(() => Boolean, {nullable:true})
    pagesRead?: true;
    @Field(() => Boolean, {nullable:true})
    currentPercent?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
}

@ObjectType()
export class JournalEntryMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    currentPage?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pagesRead?: number;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userBookId?: string;
}

@InputType()
export class JournalEntryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    readingNotes?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateRead?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currentPage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pagesRead?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currentPercent?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: keyof typeof SortOrder;
}

@InputType()
export class JournalEntryOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class JournalEntryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    readingNotes?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    dateRead?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currentPage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pagesRead?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currentPercent?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    userBookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => JournalEntryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof JournalEntryCountOrderByAggregateInput>;
    @Field(() => JournalEntryAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof JournalEntryAvgOrderByAggregateInput>;
    @Field(() => JournalEntryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof JournalEntryMaxOrderByAggregateInput>;
    @Field(() => JournalEntryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof JournalEntryMinOrderByAggregateInput>;
    @Field(() => JournalEntrySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof JournalEntrySumOrderByAggregateInput>;
}

@InputType()
export class JournalEntryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    readingNotes?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    dateRead?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currentPage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pagesRead?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currentPercent?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    userBookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => UserBookOrderByWithRelationInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookOrderByWithRelationInput>;
}

@InputType()
export class JournalEntryScalarWhereWithAggregatesInput {
    @Field(() => [JournalEntryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<JournalEntryScalarWhereWithAggregatesInput>;
    @Field(() => [JournalEntryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<JournalEntryScalarWhereWithAggregatesInput>;
    @Field(() => [JournalEntryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<JournalEntryScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    readingNotes?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    dateRead?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    currentPage?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pagesRead?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    currentPercent?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class JournalEntryScalarWhereInput {
    @Field(() => [JournalEntryScalarWhereInput], {nullable:true})
    AND?: Array<JournalEntryScalarWhereInput>;
    @Field(() => [JournalEntryScalarWhereInput], {nullable:true})
    OR?: Array<JournalEntryScalarWhereInput>;
    @Field(() => [JournalEntryScalarWhereInput], {nullable:true})
    NOT?: Array<JournalEntryScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    readingNotes?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    dateRead?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => IntFilter, {nullable:true})
    currentPage?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    pagesRead?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    currentPercent?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class JournalEntrySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    currentPage?: true;
    @Field(() => Boolean, {nullable:true})
    pagesRead?: true;
    @Field(() => Boolean, {nullable:true})
    currentPercent?: true;
}

@ObjectType()
export class JournalEntrySumAggregate {
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    currentPage?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pagesRead?: number;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent?: number;
}

@InputType()
export class JournalEntrySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    currentPage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pagesRead?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    currentPercent?: keyof typeof SortOrder;
}

@InputType()
export class JournalEntryUncheckedCreateNestedManyWithoutUserBookInput {
    @Field(() => [JournalEntryCreateWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryCreateWithoutUserBookInput)
    create?: Array<JournalEntryCreateWithoutUserBookInput>;
    @Field(() => [JournalEntryCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserBookInput>;
    @Field(() => JournalEntryCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => JournalEntryCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof JournalEntryCreateManyUserBookInputEnvelope>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
}

@InputType()
export class JournalEntryUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [JournalEntryCreateWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryCreateWithoutUserInput)
    create?: Array<JournalEntryCreateWithoutUserInput>;
    @Field(() => [JournalEntryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserInput>;
    @Field(() => JournalEntryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => JournalEntryCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof JournalEntryCreateManyUserInputEnvelope>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
}

@InputType()
export class JournalEntryUncheckedCreateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    currentPage!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pagesRead!: number;
    @Field(() => Int, {nullable:false})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent!: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
}

@InputType()
export class JournalEntryUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    currentPage!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pagesRead!: number;
    @Field(() => Int, {nullable:false})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent!: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userBookId?: string;
}

@InputType()
export class JournalEntryUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    currentPage!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pagesRead!: number;
    @Field(() => Int, {nullable:false})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent!: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userBookId?: string;
}

@InputType()
export class JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput {
    @Field(() => [JournalEntryCreateWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryCreateWithoutUserBookInput)
    create?: Array<JournalEntryCreateWithoutUserBookInput>;
    @Field(() => [JournalEntryCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserBookInput>;
    @Field(() => [JournalEntryUpsertWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryUpsertWithWhereUniqueWithoutUserBookInput)
    upsert?: Array<JournalEntryUpsertWithWhereUniqueWithoutUserBookInput>;
    @Field(() => JournalEntryCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => JournalEntryCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof JournalEntryCreateManyUserBookInputEnvelope>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryUpdateWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryUpdateWithWhereUniqueWithoutUserBookInput)
    update?: Array<JournalEntryUpdateWithWhereUniqueWithoutUserBookInput>;
    @Field(() => [JournalEntryUpdateManyWithWhereWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryUpdateManyWithWhereWithoutUserBookInput)
    updateMany?: Array<JournalEntryUpdateManyWithWhereWithoutUserBookInput>;
    @Field(() => [JournalEntryScalarWhereInput], {nullable:true})
    @Type(() => JournalEntryScalarWhereInput)
    deleteMany?: Array<JournalEntryScalarWhereInput>;
}

@InputType()
export class JournalEntryUncheckedUpdateManyWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    currentPage?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pagesRead?: number;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
}

@InputType()
export class JournalEntryUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [JournalEntryCreateWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryCreateWithoutUserInput)
    create?: Array<JournalEntryCreateWithoutUserInput>;
    @Field(() => [JournalEntryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserInput>;
    @Field(() => [JournalEntryUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<JournalEntryUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => JournalEntryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => JournalEntryCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof JournalEntryCreateManyUserInputEnvelope>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<JournalEntryUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [JournalEntryUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<JournalEntryUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [JournalEntryScalarWhereInput], {nullable:true})
    @Type(() => JournalEntryScalarWhereInput)
    deleteMany?: Array<JournalEntryScalarWhereInput>;
}

@InputType()
export class JournalEntryUncheckedUpdateManyWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    currentPage?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pagesRead?: number;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userBookId?: string;
}

@InputType()
export class JournalEntryUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    currentPage?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pagesRead?: number;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userBookId?: string;
}

@InputType()
export class JournalEntryUncheckedUpdateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    currentPage?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pagesRead?: number;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
}

@InputType()
export class JournalEntryUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    currentPage?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pagesRead?: number;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userBookId?: string;
}

@InputType()
export class JournalEntryUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    currentPage?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pagesRead?: number;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userBookId?: string;
}

@InputType()
export class JournalEntryUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    currentPage?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pagesRead?: number;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent?: number;
}

@InputType()
export class JournalEntryUpdateManyWithWhereWithoutUserBookInput {
    @Field(() => JournalEntryScalarWhereInput, {nullable:false})
    @Type(() => JournalEntryScalarWhereInput)
    where!: InstanceType<typeof JournalEntryScalarWhereInput>;
    @Field(() => JournalEntryUpdateManyMutationInput, {nullable:false})
    @Type(() => JournalEntryUpdateManyMutationInput)
    data!: InstanceType<typeof JournalEntryUpdateManyMutationInput>;
}

@InputType()
export class JournalEntryUpdateManyWithWhereWithoutUserInput {
    @Field(() => JournalEntryScalarWhereInput, {nullable:false})
    @Type(() => JournalEntryScalarWhereInput)
    where!: InstanceType<typeof JournalEntryScalarWhereInput>;
    @Field(() => JournalEntryUpdateManyMutationInput, {nullable:false})
    @Type(() => JournalEntryUpdateManyMutationInput)
    data!: InstanceType<typeof JournalEntryUpdateManyMutationInput>;
}

@InputType()
export class JournalEntryUpdateManyWithoutUserBookNestedInput {
    @Field(() => [JournalEntryCreateWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryCreateWithoutUserBookInput)
    create?: Array<JournalEntryCreateWithoutUserBookInput>;
    @Field(() => [JournalEntryCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserBookInput>;
    @Field(() => [JournalEntryUpsertWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryUpsertWithWhereUniqueWithoutUserBookInput)
    upsert?: Array<JournalEntryUpsertWithWhereUniqueWithoutUserBookInput>;
    @Field(() => JournalEntryCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => JournalEntryCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof JournalEntryCreateManyUserBookInputEnvelope>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryUpdateWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryUpdateWithWhereUniqueWithoutUserBookInput)
    update?: Array<JournalEntryUpdateWithWhereUniqueWithoutUserBookInput>;
    @Field(() => [JournalEntryUpdateManyWithWhereWithoutUserBookInput], {nullable:true})
    @Type(() => JournalEntryUpdateManyWithWhereWithoutUserBookInput)
    updateMany?: Array<JournalEntryUpdateManyWithWhereWithoutUserBookInput>;
    @Field(() => [JournalEntryScalarWhereInput], {nullable:true})
    @Type(() => JournalEntryScalarWhereInput)
    deleteMany?: Array<JournalEntryScalarWhereInput>;
}

@InputType()
export class JournalEntryUpdateManyWithoutUserNestedInput {
    @Field(() => [JournalEntryCreateWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryCreateWithoutUserInput)
    create?: Array<JournalEntryCreateWithoutUserInput>;
    @Field(() => [JournalEntryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<JournalEntryCreateOrConnectWithoutUserInput>;
    @Field(() => [JournalEntryUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<JournalEntryUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => JournalEntryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => JournalEntryCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof JournalEntryCreateManyUserInputEnvelope>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryWhereUniqueInput], {nullable:true})
    @Type(() => JournalEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>>;
    @Field(() => [JournalEntryUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<JournalEntryUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [JournalEntryUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => JournalEntryUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<JournalEntryUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [JournalEntryScalarWhereInput], {nullable:true})
    @Type(() => JournalEntryScalarWhereInput)
    deleteMany?: Array<JournalEntryScalarWhereInput>;
}

@InputType()
export class JournalEntryUpdateWithWhereUniqueWithoutUserBookInput {
    @Field(() => JournalEntryWhereUniqueInput, {nullable:false})
    @Type(() => JournalEntryWhereUniqueInput)
    where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
    @Field(() => JournalEntryUpdateWithoutUserBookInput, {nullable:false})
    @Type(() => JournalEntryUpdateWithoutUserBookInput)
    data!: InstanceType<typeof JournalEntryUpdateWithoutUserBookInput>;
}

@InputType()
export class JournalEntryUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => JournalEntryWhereUniqueInput, {nullable:false})
    @Type(() => JournalEntryWhereUniqueInput)
    where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
    @Field(() => JournalEntryUpdateWithoutUserInput, {nullable:false})
    @Type(() => JournalEntryUpdateWithoutUserInput)
    data!: InstanceType<typeof JournalEntryUpdateWithoutUserInput>;
}

@InputType()
export class JournalEntryUpdateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    currentPage?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pagesRead?: number;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent?: number;
    @Field(() => UserUpdateOneWithoutJournalEntriesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutJournalEntriesNestedInput>;
}

@InputType()
export class JournalEntryUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    currentPage?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pagesRead?: number;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent?: number;
    @Field(() => UserBookUpdateOneWithoutJournalEntryNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneWithoutJournalEntryNestedInput>;
}

@InputType()
export class JournalEntryUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    readingNotes?: string;
    @Field(() => Date, {nullable:true})
    dateRead?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    currentPage?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pagesRead?: number;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(100)
    @Validator.IsInt()
    currentPercent?: number;
    @Field(() => UserUpdateOneWithoutJournalEntriesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutJournalEntriesNestedInput>;
    @Field(() => UserBookUpdateOneWithoutJournalEntryNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneWithoutJournalEntryNestedInput>;
}

@InputType()
export class JournalEntryUpsertWithWhereUniqueWithoutUserBookInput {
    @Field(() => JournalEntryWhereUniqueInput, {nullable:false})
    @Type(() => JournalEntryWhereUniqueInput)
    where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
    @Field(() => JournalEntryUpdateWithoutUserBookInput, {nullable:false})
    @Type(() => JournalEntryUpdateWithoutUserBookInput)
    update!: InstanceType<typeof JournalEntryUpdateWithoutUserBookInput>;
    @Field(() => JournalEntryCreateWithoutUserBookInput, {nullable:false})
    @Type(() => JournalEntryCreateWithoutUserBookInput)
    create!: InstanceType<typeof JournalEntryCreateWithoutUserBookInput>;
}

@InputType()
export class JournalEntryUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => JournalEntryWhereUniqueInput, {nullable:false})
    @Type(() => JournalEntryWhereUniqueInput)
    where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
    @Field(() => JournalEntryUpdateWithoutUserInput, {nullable:false})
    @Type(() => JournalEntryUpdateWithoutUserInput)
    update!: InstanceType<typeof JournalEntryUpdateWithoutUserInput>;
    @Field(() => JournalEntryCreateWithoutUserInput, {nullable:false})
    @Type(() => JournalEntryCreateWithoutUserInput)
    create!: InstanceType<typeof JournalEntryCreateWithoutUserInput>;
}

@InputType()
export class JournalEntryWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [JournalEntryWhereInput], {nullable:true})
    AND?: Array<JournalEntryWhereInput>;
    @Field(() => [JournalEntryWhereInput], {nullable:true})
    OR?: Array<JournalEntryWhereInput>;
    @Field(() => [JournalEntryWhereInput], {nullable:true})
    NOT?: Array<JournalEntryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    readingNotes?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    dateRead?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => IntFilter, {nullable:true})
    currentPage?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    pagesRead?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    currentPercent?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => UserBookRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookRelationFilter>;
}

@InputType()
export class JournalEntryWhereInput {
    @Field(() => [JournalEntryWhereInput], {nullable:true})
    AND?: Array<JournalEntryWhereInput>;
    @Field(() => [JournalEntryWhereInput], {nullable:true})
    OR?: Array<JournalEntryWhereInput>;
    @Field(() => [JournalEntryWhereInput], {nullable:true})
    NOT?: Array<JournalEntryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    readingNotes?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    dateRead?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => IntFilter, {nullable:true})
    currentPage?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    pagesRead?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    currentPercent?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => UserBookRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookRelationFilter>;
}

@ObjectType()
export class JournalEntry {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    readingNotes!: string | null;
    @Field(() => Date, {nullable:false})
    dateRead!: Date;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Int, {nullable:false})
    currentPage!: number;
    @Field(() => Int, {nullable:false})
    pagesRead!: number;
    @Field(() => Int, {nullable:false})
    currentPercent!: number;
    @Field(() => String, {nullable:true})
    userId!: string | null;
    @Field(() => String, {nullable:true})
    userBookId!: string | null;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
    @Field(() => UserBook, {nullable:true})
    userBook?: InstanceType<typeof UserBook> | null;
}

@ArgsType()
export class UpdateManyJournalEntryArgs {
    @Field(() => JournalEntryUpdateManyMutationInput, {nullable:false})
    @Type(() => JournalEntryUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof JournalEntryUpdateManyMutationInput>;
    @Field(() => JournalEntryWhereInput, {nullable:true})
    @Type(() => JournalEntryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof JournalEntryWhereInput>;
}

@ArgsType()
export class UpdateOneJournalEntryArgs {
    @Field(() => JournalEntryUpdateInput, {nullable:false})
    @Type(() => JournalEntryUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof JournalEntryUpdateInput>;
    @Field(() => JournalEntryWhereUniqueInput, {nullable:false})
    @Type(() => JournalEntryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneJournalEntryArgs {
    @Field(() => JournalEntryWhereUniqueInput, {nullable:false})
    @Type(() => JournalEntryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<JournalEntryWhereUniqueInput, 'id'>;
    @Field(() => JournalEntryCreateInput, {nullable:false})
    @Type(() => JournalEntryCreateInput)
    create!: InstanceType<typeof JournalEntryCreateInput>;
    @Field(() => JournalEntryUpdateInput, {nullable:false})
    @Type(() => JournalEntryUpdateInput)
    update!: InstanceType<typeof JournalEntryUpdateInput>;
}

@ObjectType()
export class AggregateLikedReview {
    @Field(() => LikedReviewCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LikedReviewCountAggregate>;
    @Field(() => LikedReviewAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof LikedReviewAvgAggregate>;
    @Field(() => LikedReviewSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof LikedReviewSumAggregate>;
    @Field(() => LikedReviewMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LikedReviewMinAggregate>;
    @Field(() => LikedReviewMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LikedReviewMaxAggregate>;
}

@ArgsType()
export class CreateManyLikedReviewArgs {
    @Field(() => [LikedReviewCreateManyInput], {nullable:false})
    @Type(() => LikedReviewCreateManyInput)
    @ValidateNested()
    data!: Array<LikedReviewCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneLikedReviewArgs {
    @Field(() => LikedReviewCreateInput, {nullable:false})
    @Type(() => LikedReviewCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof LikedReviewCreateInput>;
}

@ArgsType()
export class DeleteManyLikedReviewArgs {
    @Field(() => LikedReviewWhereInput, {nullable:true})
    @Type(() => LikedReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LikedReviewWhereInput>;
}

@ArgsType()
export class DeleteOneLikedReviewArgs {
    @Field(() => LikedReviewWhereUniqueInput, {nullable:false})
    @Type(() => LikedReviewWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstLikedReviewOrThrowArgs {
    @Field(() => LikedReviewWhereInput, {nullable:true})
    @Type(() => LikedReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LikedReviewWhereInput>;
    @Field(() => [LikedReviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LikedReviewOrderByWithRelationInput>;
    @Field(() => LikedReviewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LikedReviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LikedReviewScalarFieldEnum>;
}

@ArgsType()
export class FindFirstLikedReviewArgs {
    @Field(() => LikedReviewWhereInput, {nullable:true})
    @Type(() => LikedReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LikedReviewWhereInput>;
    @Field(() => [LikedReviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LikedReviewOrderByWithRelationInput>;
    @Field(() => LikedReviewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LikedReviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LikedReviewScalarFieldEnum>;
}

@ArgsType()
export class FindManyLikedReviewArgs {
    @Field(() => LikedReviewWhereInput, {nullable:true})
    @Type(() => LikedReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LikedReviewWhereInput>;
    @Field(() => [LikedReviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LikedReviewOrderByWithRelationInput>;
    @Field(() => LikedReviewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LikedReviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LikedReviewScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueLikedReviewOrThrowArgs {
    @Field(() => LikedReviewWhereUniqueInput, {nullable:false})
    @Type(() => LikedReviewWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueLikedReviewArgs {
    @Field(() => LikedReviewWhereUniqueInput, {nullable:false})
    @Type(() => LikedReviewWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
}

@ArgsType()
export class LikedReviewAggregateArgs {
    @Field(() => LikedReviewWhereInput, {nullable:true})
    @Type(() => LikedReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LikedReviewWhereInput>;
    @Field(() => [LikedReviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LikedReviewOrderByWithRelationInput>;
    @Field(() => LikedReviewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LikedReviewCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LikedReviewCountAggregateInput>;
    @Field(() => LikedReviewAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LikedReviewAvgAggregateInput>;
    @Field(() => LikedReviewSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LikedReviewSumAggregateInput>;
    @Field(() => LikedReviewMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LikedReviewMinAggregateInput>;
    @Field(() => LikedReviewMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LikedReviewMaxAggregateInput>;
}

@InputType()
export class LikedReviewAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class LikedReviewAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class LikedReviewAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class LikedReviewCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    likedAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    reviewId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class LikedReviewCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    likedAt!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    reviewId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class LikedReviewCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    likedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;
}

@InputType()
export class LikedReviewCreateManyReviewInputEnvelope {
    @Field(() => [LikedReviewCreateManyReviewInput], {nullable:false})
    @Type(() => LikedReviewCreateManyReviewInput)
    data!: Array<LikedReviewCreateManyReviewInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class LikedReviewCreateManyReviewInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class LikedReviewCreateManyUserInputEnvelope {
    @Field(() => [LikedReviewCreateManyUserInput], {nullable:false})
    @Type(() => LikedReviewCreateManyUserInput)
    data!: Array<LikedReviewCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class LikedReviewCreateManyUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:false})
    reviewId!: string;
}

@InputType()
export class LikedReviewCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:false})
    reviewId!: string;
}

@InputType()
export class LikedReviewCreateNestedManyWithoutReviewInput {
    @Field(() => [LikedReviewCreateWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewCreateWithoutReviewInput)
    create?: Array<LikedReviewCreateWithoutReviewInput>;
    @Field(() => [LikedReviewCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<LikedReviewCreateOrConnectWithoutReviewInput>;
    @Field(() => LikedReviewCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => LikedReviewCreateManyReviewInputEnvelope)
    createMany?: InstanceType<typeof LikedReviewCreateManyReviewInputEnvelope>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
}

@InputType()
export class LikedReviewCreateNestedManyWithoutUserInput {
    @Field(() => [LikedReviewCreateWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewCreateWithoutUserInput)
    create?: Array<LikedReviewCreateWithoutUserInput>;
    @Field(() => [LikedReviewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LikedReviewCreateOrConnectWithoutUserInput>;
    @Field(() => LikedReviewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LikedReviewCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof LikedReviewCreateManyUserInputEnvelope>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
}

@InputType()
export class LikedReviewCreateOrConnectWithoutReviewInput {
    @Field(() => LikedReviewWhereUniqueInput, {nullable:false})
    @Type(() => LikedReviewWhereUniqueInput)
    where!: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
    @Field(() => LikedReviewCreateWithoutReviewInput, {nullable:false})
    @Type(() => LikedReviewCreateWithoutReviewInput)
    create!: InstanceType<typeof LikedReviewCreateWithoutReviewInput>;
}

@InputType()
export class LikedReviewCreateOrConnectWithoutUserInput {
    @Field(() => LikedReviewWhereUniqueInput, {nullable:false})
    @Type(() => LikedReviewWhereUniqueInput)
    where!: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
    @Field(() => LikedReviewCreateWithoutUserInput, {nullable:false})
    @Type(() => LikedReviewCreateWithoutUserInput)
    create!: InstanceType<typeof LikedReviewCreateWithoutUserInput>;
}

@InputType()
export class LikedReviewCreateWithoutReviewInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutLikedReviewsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutLikedReviewsInput>;
}

@InputType()
export class LikedReviewCreateWithoutUserInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => ReviewCreateNestedOneWithoutLikesInput, {nullable:false})
    review!: InstanceType<typeof ReviewCreateNestedOneWithoutLikesInput>;
}

@InputType()
export class LikedReviewCreateInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => ReviewCreateNestedOneWithoutLikesInput, {nullable:false})
    review!: InstanceType<typeof ReviewCreateNestedOneWithoutLikesInput>;
    @Field(() => UserCreateNestedOneWithoutLikedReviewsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutLikedReviewsInput>;
}

@ArgsType()
export class LikedReviewGroupByArgs {
    @Field(() => LikedReviewWhereInput, {nullable:true})
    @Type(() => LikedReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LikedReviewWhereInput>;
    @Field(() => [LikedReviewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LikedReviewOrderByWithAggregationInput>;
    @Field(() => [LikedReviewScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LikedReviewScalarFieldEnum>;
    @Field(() => LikedReviewScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof LikedReviewScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LikedReviewCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LikedReviewCountAggregateInput>;
    @Field(() => LikedReviewAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LikedReviewAvgAggregateInput>;
    @Field(() => LikedReviewSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LikedReviewSumAggregateInput>;
    @Field(() => LikedReviewMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LikedReviewMinAggregateInput>;
    @Field(() => LikedReviewMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LikedReviewMaxAggregateInput>;
}

@ObjectType()
export class LikedReviewGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    likedAt!: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:false})
    reviewId!: string;
    @Field(() => LikedReviewCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LikedReviewCountAggregate>;
    @Field(() => LikedReviewAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof LikedReviewAvgAggregate>;
    @Field(() => LikedReviewSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof LikedReviewSumAggregate>;
    @Field(() => LikedReviewMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LikedReviewMinAggregate>;
    @Field(() => LikedReviewMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LikedReviewMaxAggregate>;
}

@InputType()
export class LikedReviewListRelationFilter {
    @Field(() => LikedReviewWhereInput, {nullable:true})
    every?: InstanceType<typeof LikedReviewWhereInput>;
    @Field(() => LikedReviewWhereInput, {nullable:true})
    some?: InstanceType<typeof LikedReviewWhereInput>;
    @Field(() => LikedReviewWhereInput, {nullable:true})
    none?: InstanceType<typeof LikedReviewWhereInput>;
}

@InputType()
export class LikedReviewMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    likedAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    reviewId?: true;
}

@ObjectType()
export class LikedReviewMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class LikedReviewMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    likedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;
}

@InputType()
export class LikedReviewMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    likedAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    reviewId?: true;
}

@ObjectType()
export class LikedReviewMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class LikedReviewMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    likedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;
}

@InputType()
export class LikedReviewOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class LikedReviewOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    likedAt?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;
    @Field(() => LikedReviewCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LikedReviewCountOrderByAggregateInput>;
    @Field(() => LikedReviewAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LikedReviewAvgOrderByAggregateInput>;
    @Field(() => LikedReviewMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LikedReviewMaxOrderByAggregateInput>;
    @Field(() => LikedReviewMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LikedReviewMinOrderByAggregateInput>;
    @Field(() => LikedReviewSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LikedReviewSumOrderByAggregateInput>;
}

@InputType()
export class LikedReviewOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    likedAt?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;
    @Field(() => ReviewOrderByWithRelationInput, {nullable:true})
    review?: InstanceType<typeof ReviewOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class LikedReviewScalarWhereWithAggregatesInput {
    @Field(() => [LikedReviewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LikedReviewScalarWhereWithAggregatesInput>;
    @Field(() => [LikedReviewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LikedReviewScalarWhereWithAggregatesInput>;
    @Field(() => [LikedReviewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LikedReviewScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    likedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    reviewId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class LikedReviewScalarWhereInput {
    @Field(() => [LikedReviewScalarWhereInput], {nullable:true})
    AND?: Array<LikedReviewScalarWhereInput>;
    @Field(() => [LikedReviewScalarWhereInput], {nullable:true})
    OR?: Array<LikedReviewScalarWhereInput>;
    @Field(() => [LikedReviewScalarWhereInput], {nullable:true})
    NOT?: Array<LikedReviewScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    likedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    reviewId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class LikedReviewSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class LikedReviewSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class LikedReviewSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class LikedReviewUncheckedCreateNestedManyWithoutReviewInput {
    @Field(() => [LikedReviewCreateWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewCreateWithoutReviewInput)
    create?: Array<LikedReviewCreateWithoutReviewInput>;
    @Field(() => [LikedReviewCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<LikedReviewCreateOrConnectWithoutReviewInput>;
    @Field(() => LikedReviewCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => LikedReviewCreateManyReviewInputEnvelope)
    createMany?: InstanceType<typeof LikedReviewCreateManyReviewInputEnvelope>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
}

@InputType()
export class LikedReviewUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [LikedReviewCreateWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewCreateWithoutUserInput)
    create?: Array<LikedReviewCreateWithoutUserInput>;
    @Field(() => [LikedReviewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LikedReviewCreateOrConnectWithoutUserInput>;
    @Field(() => LikedReviewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LikedReviewCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof LikedReviewCreateManyUserInputEnvelope>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
}

@InputType()
export class LikedReviewUncheckedCreateWithoutReviewInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class LikedReviewUncheckedCreateWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:false})
    reviewId!: string;
}

@InputType()
export class LikedReviewUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:false})
    reviewId!: string;
}

@InputType()
export class LikedReviewUncheckedUpdateManyWithoutReviewNestedInput {
    @Field(() => [LikedReviewCreateWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewCreateWithoutReviewInput)
    create?: Array<LikedReviewCreateWithoutReviewInput>;
    @Field(() => [LikedReviewCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<LikedReviewCreateOrConnectWithoutReviewInput>;
    @Field(() => [LikedReviewUpsertWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewUpsertWithWhereUniqueWithoutReviewInput)
    upsert?: Array<LikedReviewUpsertWithWhereUniqueWithoutReviewInput>;
    @Field(() => LikedReviewCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => LikedReviewCreateManyReviewInputEnvelope)
    createMany?: InstanceType<typeof LikedReviewCreateManyReviewInputEnvelope>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewUpdateWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewUpdateWithWhereUniqueWithoutReviewInput)
    update?: Array<LikedReviewUpdateWithWhereUniqueWithoutReviewInput>;
    @Field(() => [LikedReviewUpdateManyWithWhereWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewUpdateManyWithWhereWithoutReviewInput)
    updateMany?: Array<LikedReviewUpdateManyWithWhereWithoutReviewInput>;
    @Field(() => [LikedReviewScalarWhereInput], {nullable:true})
    @Type(() => LikedReviewScalarWhereInput)
    deleteMany?: Array<LikedReviewScalarWhereInput>;
}

@InputType()
export class LikedReviewUncheckedUpdateManyWithoutReviewInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class LikedReviewUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [LikedReviewCreateWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewCreateWithoutUserInput)
    create?: Array<LikedReviewCreateWithoutUserInput>;
    @Field(() => [LikedReviewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LikedReviewCreateOrConnectWithoutUserInput>;
    @Field(() => [LikedReviewUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<LikedReviewUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => LikedReviewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LikedReviewCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof LikedReviewCreateManyUserInputEnvelope>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<LikedReviewUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [LikedReviewUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<LikedReviewUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [LikedReviewScalarWhereInput], {nullable:true})
    @Type(() => LikedReviewScalarWhereInput)
    deleteMany?: Array<LikedReviewScalarWhereInput>;
}

@InputType()
export class LikedReviewUncheckedUpdateManyWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class LikedReviewUncheckedUpdateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class LikedReviewUncheckedUpdateWithoutReviewInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class LikedReviewUncheckedUpdateWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class LikedReviewUncheckedUpdateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    reviewId?: string;
}

@InputType()
export class LikedReviewUpdateManyMutationInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}

@InputType()
export class LikedReviewUpdateManyWithWhereWithoutReviewInput {
    @Field(() => LikedReviewScalarWhereInput, {nullable:false})
    @Type(() => LikedReviewScalarWhereInput)
    where!: InstanceType<typeof LikedReviewScalarWhereInput>;
    @Field(() => LikedReviewUpdateManyMutationInput, {nullable:false})
    @Type(() => LikedReviewUpdateManyMutationInput)
    data!: InstanceType<typeof LikedReviewUpdateManyMutationInput>;
}

@InputType()
export class LikedReviewUpdateManyWithWhereWithoutUserInput {
    @Field(() => LikedReviewScalarWhereInput, {nullable:false})
    @Type(() => LikedReviewScalarWhereInput)
    where!: InstanceType<typeof LikedReviewScalarWhereInput>;
    @Field(() => LikedReviewUpdateManyMutationInput, {nullable:false})
    @Type(() => LikedReviewUpdateManyMutationInput)
    data!: InstanceType<typeof LikedReviewUpdateManyMutationInput>;
}

@InputType()
export class LikedReviewUpdateManyWithoutReviewNestedInput {
    @Field(() => [LikedReviewCreateWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewCreateWithoutReviewInput)
    create?: Array<LikedReviewCreateWithoutReviewInput>;
    @Field(() => [LikedReviewCreateOrConnectWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewCreateOrConnectWithoutReviewInput)
    connectOrCreate?: Array<LikedReviewCreateOrConnectWithoutReviewInput>;
    @Field(() => [LikedReviewUpsertWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewUpsertWithWhereUniqueWithoutReviewInput)
    upsert?: Array<LikedReviewUpsertWithWhereUniqueWithoutReviewInput>;
    @Field(() => LikedReviewCreateManyReviewInputEnvelope, {nullable:true})
    @Type(() => LikedReviewCreateManyReviewInputEnvelope)
    createMany?: InstanceType<typeof LikedReviewCreateManyReviewInputEnvelope>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewUpdateWithWhereUniqueWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewUpdateWithWhereUniqueWithoutReviewInput)
    update?: Array<LikedReviewUpdateWithWhereUniqueWithoutReviewInput>;
    @Field(() => [LikedReviewUpdateManyWithWhereWithoutReviewInput], {nullable:true})
    @Type(() => LikedReviewUpdateManyWithWhereWithoutReviewInput)
    updateMany?: Array<LikedReviewUpdateManyWithWhereWithoutReviewInput>;
    @Field(() => [LikedReviewScalarWhereInput], {nullable:true})
    @Type(() => LikedReviewScalarWhereInput)
    deleteMany?: Array<LikedReviewScalarWhereInput>;
}

@InputType()
export class LikedReviewUpdateManyWithoutUserNestedInput {
    @Field(() => [LikedReviewCreateWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewCreateWithoutUserInput)
    create?: Array<LikedReviewCreateWithoutUserInput>;
    @Field(() => [LikedReviewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LikedReviewCreateOrConnectWithoutUserInput>;
    @Field(() => [LikedReviewUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<LikedReviewUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => LikedReviewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LikedReviewCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof LikedReviewCreateManyUserInputEnvelope>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewWhereUniqueInput], {nullable:true})
    @Type(() => LikedReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>>;
    @Field(() => [LikedReviewUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<LikedReviewUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [LikedReviewUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => LikedReviewUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<LikedReviewUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [LikedReviewScalarWhereInput], {nullable:true})
    @Type(() => LikedReviewScalarWhereInput)
    deleteMany?: Array<LikedReviewScalarWhereInput>;
}

@InputType()
export class LikedReviewUpdateWithWhereUniqueWithoutReviewInput {
    @Field(() => LikedReviewWhereUniqueInput, {nullable:false})
    @Type(() => LikedReviewWhereUniqueInput)
    where!: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
    @Field(() => LikedReviewUpdateWithoutReviewInput, {nullable:false})
    @Type(() => LikedReviewUpdateWithoutReviewInput)
    data!: InstanceType<typeof LikedReviewUpdateWithoutReviewInput>;
}

@InputType()
export class LikedReviewUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => LikedReviewWhereUniqueInput, {nullable:false})
    @Type(() => LikedReviewWhereUniqueInput)
    where!: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
    @Field(() => LikedReviewUpdateWithoutUserInput, {nullable:false})
    @Type(() => LikedReviewUpdateWithoutUserInput)
    data!: InstanceType<typeof LikedReviewUpdateWithoutUserInput>;
}

@InputType()
export class LikedReviewUpdateWithoutReviewInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => UserUpdateOneWithoutLikedReviewsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutLikedReviewsNestedInput>;
}

@InputType()
export class LikedReviewUpdateWithoutUserInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => ReviewUpdateOneRequiredWithoutLikesNestedInput, {nullable:true})
    review?: InstanceType<typeof ReviewUpdateOneRequiredWithoutLikesNestedInput>;
}

@InputType()
export class LikedReviewUpdateInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
    @Field(() => ReviewUpdateOneRequiredWithoutLikesNestedInput, {nullable:true})
    review?: InstanceType<typeof ReviewUpdateOneRequiredWithoutLikesNestedInput>;
    @Field(() => UserUpdateOneWithoutLikedReviewsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutLikedReviewsNestedInput>;
}

@InputType()
export class LikedReviewUpsertWithWhereUniqueWithoutReviewInput {
    @Field(() => LikedReviewWhereUniqueInput, {nullable:false})
    @Type(() => LikedReviewWhereUniqueInput)
    where!: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
    @Field(() => LikedReviewUpdateWithoutReviewInput, {nullable:false})
    @Type(() => LikedReviewUpdateWithoutReviewInput)
    update!: InstanceType<typeof LikedReviewUpdateWithoutReviewInput>;
    @Field(() => LikedReviewCreateWithoutReviewInput, {nullable:false})
    @Type(() => LikedReviewCreateWithoutReviewInput)
    create!: InstanceType<typeof LikedReviewCreateWithoutReviewInput>;
}

@InputType()
export class LikedReviewUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => LikedReviewWhereUniqueInput, {nullable:false})
    @Type(() => LikedReviewWhereUniqueInput)
    where!: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
    @Field(() => LikedReviewUpdateWithoutUserInput, {nullable:false})
    @Type(() => LikedReviewUpdateWithoutUserInput)
    update!: InstanceType<typeof LikedReviewUpdateWithoutUserInput>;
    @Field(() => LikedReviewCreateWithoutUserInput, {nullable:false})
    @Type(() => LikedReviewCreateWithoutUserInput)
    create!: InstanceType<typeof LikedReviewCreateWithoutUserInput>;
}

@InputType()
export class LikedReviewWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => [LikedReviewWhereInput], {nullable:true})
    AND?: Array<LikedReviewWhereInput>;
    @Field(() => [LikedReviewWhereInput], {nullable:true})
    OR?: Array<LikedReviewWhereInput>;
    @Field(() => [LikedReviewWhereInput], {nullable:true})
    NOT?: Array<LikedReviewWhereInput>;
    @Field(() => DateTimeFilter, {nullable:true})
    likedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    reviewId?: InstanceType<typeof StringFilter>;
    @Field(() => ReviewRelationFilter, {nullable:true})
    review?: InstanceType<typeof ReviewRelationFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class LikedReviewWhereInput {
    @Field(() => [LikedReviewWhereInput], {nullable:true})
    AND?: Array<LikedReviewWhereInput>;
    @Field(() => [LikedReviewWhereInput], {nullable:true})
    OR?: Array<LikedReviewWhereInput>;
    @Field(() => [LikedReviewWhereInput], {nullable:true})
    NOT?: Array<LikedReviewWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    likedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    reviewId?: InstanceType<typeof StringFilter>;
    @Field(() => ReviewRelationFilter, {nullable:true})
    review?: InstanceType<typeof ReviewRelationFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class LikedReview {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    likedAt!: Date;
    @Field(() => String, {nullable:true})
    userId!: string | null;
    @Field(() => String, {nullable:false})
    reviewId!: string;
    @Field(() => Review, {nullable:false})
    review?: InstanceType<typeof Review>;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
}

@ArgsType()
export class UpdateManyLikedReviewArgs {
    @Field(() => LikedReviewUpdateManyMutationInput, {nullable:false})
    @Type(() => LikedReviewUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof LikedReviewUpdateManyMutationInput>;
    @Field(() => LikedReviewWhereInput, {nullable:true})
    @Type(() => LikedReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LikedReviewWhereInput>;
}

@ArgsType()
export class UpdateOneLikedReviewArgs {
    @Field(() => LikedReviewUpdateInput, {nullable:false})
    @Type(() => LikedReviewUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof LikedReviewUpdateInput>;
    @Field(() => LikedReviewWhereUniqueInput, {nullable:false})
    @Type(() => LikedReviewWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneLikedReviewArgs {
    @Field(() => LikedReviewWhereUniqueInput, {nullable:false})
    @Type(() => LikedReviewWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LikedReviewWhereUniqueInput, 'id'>;
    @Field(() => LikedReviewCreateInput, {nullable:false})
    @Type(() => LikedReviewCreateInput)
    create!: InstanceType<typeof LikedReviewCreateInput>;
    @Field(() => LikedReviewUpdateInput, {nullable:false})
    @Type(() => LikedReviewUpdateInput)
    update!: InstanceType<typeof LikedReviewUpdateInput>;
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
    sort!: keyof typeof SortOrder;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: keyof typeof NullsOrder;
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
    mode?: keyof typeof QueryMode;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
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
    mode?: keyof typeof QueryMode;
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
export class AggregateReview {
    @Field(() => ReviewCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReviewCountAggregate>;
    @Field(() => ReviewMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReviewMinAggregate>;
    @Field(() => ReviewMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReviewMaxAggregate>;
}

@ArgsType()
export class CreateManyReviewArgs {
    @Field(() => [ReviewCreateManyInput], {nullable:false})
    @Type(() => ReviewCreateManyInput)
    @ValidateNested()
    data!: Array<ReviewCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneReviewArgs {
    @Field(() => ReviewCreateInput, {nullable:true})
    @Type(() => ReviewCreateInput)
    @ValidateNested()
    data?: InstanceType<typeof ReviewCreateInput>;
}

@ArgsType()
export class DeleteManyReviewArgs {
    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReviewWhereInput>;
}

@ArgsType()
export class DeleteOneReviewArgs {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstReviewOrThrowArgs {
    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReviewWhereInput>;
    @Field(() => [ReviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewOrderByWithRelationInput>;
    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewScalarFieldEnum>;
}

@ArgsType()
export class FindFirstReviewArgs {
    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReviewWhereInput>;
    @Field(() => [ReviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewOrderByWithRelationInput>;
    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewScalarFieldEnum>;
}

@ArgsType()
export class FindManyReviewArgs {
    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReviewWhereInput>;
    @Field(() => [ReviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewOrderByWithRelationInput>;
    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ReviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueReviewOrThrowArgs {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueReviewArgs {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ReviewAggregateArgs {
    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReviewWhereInput>;
    @Field(() => [ReviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewOrderByWithRelationInput>;
    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReviewCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReviewCountAggregateInput>;
    @Field(() => ReviewMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReviewMinAggregateInput>;
    @Field(() => ReviewMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReviewMaxAggregateInput>;
}

@InputType()
export class ReviewCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
    @Field(() => Boolean, {nullable:true})
    spoilers?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ReviewCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @Field(() => Int, {nullable:false})
    userBookId!: number;
    @Field(() => Int, {nullable:false})
    spoilers!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    bookId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ReviewCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    spoilers?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
}

@ObjectType()
export class ReviewCount {
    @Field(() => Int, {nullable:false})
    likes?: number;
    @Field(() => Int, {nullable:false})
    comments?: number;
}

@InputType()
export class ReviewCreateManyBookInputEnvelope {
    @Field(() => [ReviewCreateManyBookInput], {nullable:false})
    @Type(() => ReviewCreateManyBookInput)
    data!: Array<ReviewCreateManyBookInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ReviewCreateManyBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class ReviewCreateManyUserBookInputEnvelope {
    @Field(() => [ReviewCreateManyUserBookInput], {nullable:false})
    @Type(() => ReviewCreateManyUserBookInput)
    data!: Array<ReviewCreateManyUserBookInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ReviewCreateManyUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class ReviewCreateManyUserInputEnvelope {
    @Field(() => [ReviewCreateManyUserInput], {nullable:false})
    @Type(() => ReviewCreateManyUserInput)
    data!: Array<ReviewCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ReviewCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class ReviewCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class ReviewCreateNestedManyWithoutBookInput {
    @Field(() => [ReviewCreateWithoutBookInput], {nullable:true})
    @Type(() => ReviewCreateWithoutBookInput)
    create?: Array<ReviewCreateWithoutBookInput>;
    @Field(() => [ReviewCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutBookInput>;
    @Field(() => ReviewCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof ReviewCreateManyBookInputEnvelope>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReviewCreateNestedManyWithoutUserBookInput {
    @Field(() => [ReviewCreateWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewCreateWithoutUserBookInput)
    create?: Array<ReviewCreateWithoutUserBookInput>;
    @Field(() => [ReviewCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserBookInput>;
    @Field(() => ReviewCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof ReviewCreateManyUserBookInputEnvelope>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReviewCreateNestedManyWithoutUserInput {
    @Field(() => [ReviewCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateWithoutUserInput)
    create?: Array<ReviewCreateWithoutUserInput>;
    @Field(() => [ReviewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserInput>;
    @Field(() => ReviewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof ReviewCreateManyUserInputEnvelope>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReviewCreateNestedOneWithoutCommentsInput {
    @Field(() => ReviewCreateWithoutCommentsInput, {nullable:true})
    @Type(() => ReviewCreateWithoutCommentsInput)
    create?: InstanceType<typeof ReviewCreateWithoutCommentsInput>;
    @Field(() => ReviewCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof ReviewCreateOrConnectWithoutCommentsInput>;
    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
}

@InputType()
export class ReviewCreateNestedOneWithoutLikesInput {
    @Field(() => ReviewCreateWithoutLikesInput, {nullable:true})
    @Type(() => ReviewCreateWithoutLikesInput)
    create?: InstanceType<typeof ReviewCreateWithoutLikesInput>;
    @Field(() => ReviewCreateOrConnectWithoutLikesInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutLikesInput)
    connectOrCreate?: InstanceType<typeof ReviewCreateOrConnectWithoutLikesInput>;
    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
}

@InputType()
export class ReviewCreateOrConnectWithoutBookInput {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewCreateWithoutBookInput, {nullable:false})
    @Type(() => ReviewCreateWithoutBookInput)
    create!: InstanceType<typeof ReviewCreateWithoutBookInput>;
}

@InputType()
export class ReviewCreateOrConnectWithoutCommentsInput {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewCreateWithoutCommentsInput, {nullable:false})
    @Type(() => ReviewCreateWithoutCommentsInput)
    create!: InstanceType<typeof ReviewCreateWithoutCommentsInput>;
}

@InputType()
export class ReviewCreateOrConnectWithoutLikesInput {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewCreateWithoutLikesInput, {nullable:false})
    @Type(() => ReviewCreateWithoutLikesInput)
    create!: InstanceType<typeof ReviewCreateWithoutLikesInput>;
}

@InputType()
export class ReviewCreateOrConnectWithoutUserBookInput {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewCreateWithoutUserBookInput, {nullable:false})
    @Type(() => ReviewCreateWithoutUserBookInput)
    create!: InstanceType<typeof ReviewCreateWithoutUserBookInput>;
}

@InputType()
export class ReviewCreateOrConnectWithoutUserInput {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewCreateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCreateWithoutUserInput)
    create!: InstanceType<typeof ReviewCreateWithoutUserInput>;
}

@InputType()
export class ReviewCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => UserBookCreateNestedOneWithoutReviewsInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutReviewsInput>;
    @Field(() => LikedReviewCreateNestedManyWithoutReviewInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewCreateNestedManyWithoutReviewInput>;
    @Field(() => CommentCreateNestedManyWithoutReviewInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutReviewInput>;
    @Field(() => UserCreateNestedOneWithoutReviewsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutReviewsInput>;
}

@InputType()
export class ReviewCreateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => UserBookCreateNestedOneWithoutReviewsInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutReviewsInput>;
    @Field(() => LikedReviewCreateNestedManyWithoutReviewInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewCreateNestedManyWithoutReviewInput>;
    @Field(() => UserCreateNestedOneWithoutReviewsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutReviewsInput>;
    @Field(() => BookCreateNestedOneWithoutReviewsInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutReviewsInput>;
}

@InputType()
export class ReviewCreateWithoutLikesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => UserBookCreateNestedOneWithoutReviewsInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutReviewsInput>;
    @Field(() => CommentCreateNestedManyWithoutReviewInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutReviewInput>;
    @Field(() => UserCreateNestedOneWithoutReviewsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutReviewsInput>;
    @Field(() => BookCreateNestedOneWithoutReviewsInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutReviewsInput>;
}

@InputType()
export class ReviewCreateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => LikedReviewCreateNestedManyWithoutReviewInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewCreateNestedManyWithoutReviewInput>;
    @Field(() => CommentCreateNestedManyWithoutReviewInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutReviewInput>;
    @Field(() => UserCreateNestedOneWithoutReviewsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutReviewsInput>;
    @Field(() => BookCreateNestedOneWithoutReviewsInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutReviewsInput>;
}

@InputType()
export class ReviewCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => UserBookCreateNestedOneWithoutReviewsInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutReviewsInput>;
    @Field(() => LikedReviewCreateNestedManyWithoutReviewInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewCreateNestedManyWithoutReviewInput>;
    @Field(() => CommentCreateNestedManyWithoutReviewInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutReviewInput>;
    @Field(() => BookCreateNestedOneWithoutReviewsInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutReviewsInput>;
}

@InputType()
export class ReviewCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => UserBookCreateNestedOneWithoutReviewsInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedOneWithoutReviewsInput>;
    @Field(() => LikedReviewCreateNestedManyWithoutReviewInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewCreateNestedManyWithoutReviewInput>;
    @Field(() => CommentCreateNestedManyWithoutReviewInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutReviewInput>;
    @Field(() => UserCreateNestedOneWithoutReviewsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutReviewsInput>;
    @Field(() => BookCreateNestedOneWithoutReviewsInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutReviewsInput>;
}

@ArgsType()
export class ReviewGroupByArgs {
    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReviewWhereInput>;
    @Field(() => [ReviewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewOrderByWithAggregationInput>;
    @Field(() => [ReviewScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewScalarFieldEnum>;
    @Field(() => ReviewScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ReviewScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ReviewCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReviewCountAggregateInput>;
    @Field(() => ReviewMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReviewMinAggregateInput>;
    @Field(() => ReviewMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReviewMaxAggregateInput>;
}

@ObjectType()
export class ReviewGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:false})
    spoilers!: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => ReviewCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ReviewCountAggregate>;
    @Field(() => ReviewMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ReviewMinAggregate>;
    @Field(() => ReviewMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ReviewMaxAggregate>;
}

@InputType()
export class ReviewListRelationFilter {
    @Field(() => ReviewWhereInput, {nullable:true})
    every?: InstanceType<typeof ReviewWhereInput>;
    @Field(() => ReviewWhereInput, {nullable:true})
    some?: InstanceType<typeof ReviewWhereInput>;
    @Field(() => ReviewWhereInput, {nullable:true})
    none?: InstanceType<typeof ReviewWhereInput>;
}

@InputType()
export class ReviewMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
    @Field(() => Boolean, {nullable:true})
    spoilers?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
}

@ObjectType()
export class ReviewMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class ReviewMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    spoilers?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
}

@InputType()
export class ReviewMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    userBookId?: true;
    @Field(() => Boolean, {nullable:true})
    spoilers?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    bookId?: true;
}

@ObjectType()
export class ReviewMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class ReviewMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userBookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    spoilers?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
}

@InputType()
export class ReviewOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ReviewOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    content?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    userBookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    spoilers?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    bookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => ReviewCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ReviewCountOrderByAggregateInput>;
    @Field(() => ReviewMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ReviewMaxOrderByAggregateInput>;
    @Field(() => ReviewMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ReviewMinOrderByAggregateInput>;
}

@InputType()
export class ReviewOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    content?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    userBookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    spoilers?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    bookId?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserBookOrderByWithRelationInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookOrderByWithRelationInput>;
    @Field(() => LikedReviewOrderByRelationAggregateInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewOrderByRelationAggregateInput>;
    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: InstanceType<typeof CommentOrderByRelationAggregateInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => BookOrderByWithRelationInput, {nullable:true})
    book?: InstanceType<typeof BookOrderByWithRelationInput>;
}

@InputType()
export class ReviewRelationFilter {
    @Field(() => ReviewWhereInput, {nullable:true})
    is?: InstanceType<typeof ReviewWhereInput>;
    @Field(() => ReviewWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ReviewWhereInput>;
}

@InputType()
export class ReviewScalarWhereWithAggregatesInput {
    @Field(() => [ReviewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReviewScalarWhereWithAggregatesInput>;
    @Field(() => [ReviewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReviewScalarWhereWithAggregatesInput>;
    @Field(() => [ReviewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReviewScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    spoilers?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bookId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ReviewScalarWhereInput {
    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    AND?: Array<ReviewScalarWhereInput>;
    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    OR?: Array<ReviewScalarWhereInput>;
    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    NOT?: Array<ReviewScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    spoilers?: InstanceType<typeof BoolFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class ReviewUncheckedCreateNestedManyWithoutBookInput {
    @Field(() => [ReviewCreateWithoutBookInput], {nullable:true})
    @Type(() => ReviewCreateWithoutBookInput)
    create?: Array<ReviewCreateWithoutBookInput>;
    @Field(() => [ReviewCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutBookInput>;
    @Field(() => ReviewCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof ReviewCreateManyBookInputEnvelope>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReviewUncheckedCreateNestedManyWithoutUserBookInput {
    @Field(() => [ReviewCreateWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewCreateWithoutUserBookInput)
    create?: Array<ReviewCreateWithoutUserBookInput>;
    @Field(() => [ReviewCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserBookInput>;
    @Field(() => ReviewCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof ReviewCreateManyUserBookInputEnvelope>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReviewUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [ReviewCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateWithoutUserInput)
    create?: Array<ReviewCreateWithoutUserInput>;
    @Field(() => [ReviewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserInput>;
    @Field(() => ReviewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof ReviewCreateManyUserInputEnvelope>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
}

@InputType()
export class ReviewUncheckedCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => LikedReviewUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUncheckedCreateNestedManyWithoutReviewInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutReviewInput>;
}

@InputType()
export class ReviewUncheckedCreateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => LikedReviewUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUncheckedCreateNestedManyWithoutReviewInput>;
}

@InputType()
export class ReviewUncheckedCreateWithoutLikesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutReviewInput>;
}

@InputType()
export class ReviewUncheckedCreateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => LikedReviewUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUncheckedCreateNestedManyWithoutReviewInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutReviewInput>;
}

@InputType()
export class ReviewUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => LikedReviewUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUncheckedCreateNestedManyWithoutReviewInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutReviewInput>;
}

@InputType()
export class ReviewUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => LikedReviewUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUncheckedCreateNestedManyWithoutReviewInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutReviewInput>;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutBookNestedInput {
    @Field(() => [ReviewCreateWithoutBookInput], {nullable:true})
    @Type(() => ReviewCreateWithoutBookInput)
    create?: Array<ReviewCreateWithoutBookInput>;
    @Field(() => [ReviewCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutBookInput>;
    @Field(() => [ReviewUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => ReviewCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof ReviewCreateManyBookInputEnvelope>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [ReviewUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutUserBookNestedInput {
    @Field(() => [ReviewCreateWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewCreateWithoutUserBookInput)
    create?: Array<ReviewCreateWithoutUserBookInput>;
    @Field(() => [ReviewCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserBookInput>;
    @Field(() => [ReviewUpsertWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutUserBookInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutUserBookInput>;
    @Field(() => ReviewCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof ReviewCreateManyUserBookInputEnvelope>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewUpdateWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutUserBookInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutUserBookInput>;
    @Field(() => [ReviewUpdateManyWithWhereWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutUserBookInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutUserBookInput>;
    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [ReviewCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateWithoutUserInput)
    create?: Array<ReviewCreateWithoutUserInput>;
    @Field(() => [ReviewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserInput>;
    @Field(() => [ReviewUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => ReviewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof ReviewCreateManyUserInputEnvelope>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [ReviewUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUncheckedUpdateManyWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class ReviewUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
}

@InputType()
export class ReviewUncheckedUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => LikedReviewUncheckedUpdateManyWithoutReviewNestedInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUncheckedUpdateManyWithoutReviewNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutReviewNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutReviewNestedInput>;
}

@InputType()
export class ReviewUncheckedUpdateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => LikedReviewUncheckedUpdateManyWithoutReviewNestedInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUncheckedUpdateManyWithoutReviewNestedInput>;
}

@InputType()
export class ReviewUncheckedUpdateWithoutLikesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => CommentUncheckedUpdateManyWithoutReviewNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutReviewNestedInput>;
}

@InputType()
export class ReviewUncheckedUpdateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => LikedReviewUncheckedUpdateManyWithoutReviewNestedInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUncheckedUpdateManyWithoutReviewNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutReviewNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutReviewNestedInput>;
}

@InputType()
export class ReviewUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => LikedReviewUncheckedUpdateManyWithoutReviewNestedInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUncheckedUpdateManyWithoutReviewNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutReviewNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutReviewNestedInput>;
}

@InputType()
export class ReviewUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    userBookId?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    bookId?: string;
    @Field(() => LikedReviewUncheckedUpdateManyWithoutReviewNestedInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUncheckedUpdateManyWithoutReviewNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutReviewNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutReviewNestedInput>;
}

@InputType()
export class ReviewUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
}

@InputType()
export class ReviewUpdateManyWithWhereWithoutBookInput {
    @Field(() => ReviewScalarWhereInput, {nullable:false})
    @Type(() => ReviewScalarWhereInput)
    where!: InstanceType<typeof ReviewScalarWhereInput>;
    @Field(() => ReviewUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewUpdateManyMutationInput)
    data!: InstanceType<typeof ReviewUpdateManyMutationInput>;
}

@InputType()
export class ReviewUpdateManyWithWhereWithoutUserBookInput {
    @Field(() => ReviewScalarWhereInput, {nullable:false})
    @Type(() => ReviewScalarWhereInput)
    where!: InstanceType<typeof ReviewScalarWhereInput>;
    @Field(() => ReviewUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewUpdateManyMutationInput)
    data!: InstanceType<typeof ReviewUpdateManyMutationInput>;
}

@InputType()
export class ReviewUpdateManyWithWhereWithoutUserInput {
    @Field(() => ReviewScalarWhereInput, {nullable:false})
    @Type(() => ReviewScalarWhereInput)
    where!: InstanceType<typeof ReviewScalarWhereInput>;
    @Field(() => ReviewUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewUpdateManyMutationInput)
    data!: InstanceType<typeof ReviewUpdateManyMutationInput>;
}

@InputType()
export class ReviewUpdateManyWithoutBookNestedInput {
    @Field(() => [ReviewCreateWithoutBookInput], {nullable:true})
    @Type(() => ReviewCreateWithoutBookInput)
    create?: Array<ReviewCreateWithoutBookInput>;
    @Field(() => [ReviewCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutBookInput>;
    @Field(() => [ReviewUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => ReviewCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof ReviewCreateManyBookInputEnvelope>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [ReviewUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUpdateManyWithoutUserBookNestedInput {
    @Field(() => [ReviewCreateWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewCreateWithoutUserBookInput)
    create?: Array<ReviewCreateWithoutUserBookInput>;
    @Field(() => [ReviewCreateOrConnectWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutUserBookInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserBookInput>;
    @Field(() => [ReviewUpsertWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutUserBookInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutUserBookInput>;
    @Field(() => ReviewCreateManyUserBookInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyUserBookInputEnvelope)
    createMany?: InstanceType<typeof ReviewCreateManyUserBookInputEnvelope>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewUpdateWithWhereUniqueWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutUserBookInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutUserBookInput>;
    @Field(() => [ReviewUpdateManyWithWhereWithoutUserBookInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutUserBookInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutUserBookInput>;
    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUpdateManyWithoutUserNestedInput {
    @Field(() => [ReviewCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateWithoutUserInput)
    create?: Array<ReviewCreateWithoutUserInput>;
    @Field(() => [ReviewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutUserInput>;
    @Field(() => [ReviewUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => ReviewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof ReviewCreateManyUserInputEnvelope>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
    @Field(() => [ReviewUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [ReviewUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}

@InputType()
export class ReviewUpdateOneRequiredWithoutLikesNestedInput {
    @Field(() => ReviewCreateWithoutLikesInput, {nullable:true})
    @Type(() => ReviewCreateWithoutLikesInput)
    create?: InstanceType<typeof ReviewCreateWithoutLikesInput>;
    @Field(() => ReviewCreateOrConnectWithoutLikesInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutLikesInput)
    connectOrCreate?: InstanceType<typeof ReviewCreateOrConnectWithoutLikesInput>;
    @Field(() => ReviewUpsertWithoutLikesInput, {nullable:true})
    @Type(() => ReviewUpsertWithoutLikesInput)
    upsert?: InstanceType<typeof ReviewUpsertWithoutLikesInput>;
    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewUpdateToOneWithWhereWithoutLikesInput, {nullable:true})
    @Type(() => ReviewUpdateToOneWithWhereWithoutLikesInput)
    update?: InstanceType<typeof ReviewUpdateToOneWithWhereWithoutLikesInput>;
}

@InputType()
export class ReviewUpdateOneWithoutCommentsNestedInput {
    @Field(() => ReviewCreateWithoutCommentsInput, {nullable:true})
    @Type(() => ReviewCreateWithoutCommentsInput)
    create?: InstanceType<typeof ReviewCreateWithoutCommentsInput>;
    @Field(() => ReviewCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof ReviewCreateOrConnectWithoutCommentsInput>;
    @Field(() => ReviewUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => ReviewUpsertWithoutCommentsInput)
    upsert?: InstanceType<typeof ReviewUpsertWithoutCommentsInput>;
    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    disconnect?: InstanceType<typeof ReviewWhereInput>;
    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    delete?: InstanceType<typeof ReviewWhereInput>;
    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => ReviewUpdateToOneWithWhereWithoutCommentsInput)
    update?: InstanceType<typeof ReviewUpdateToOneWithWhereWithoutCommentsInput>;
}

@InputType()
export class ReviewUpdateToOneWithWhereWithoutCommentsInput {
    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: InstanceType<typeof ReviewWhereInput>;
    @Field(() => ReviewUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutCommentsInput)
    data!: InstanceType<typeof ReviewUpdateWithoutCommentsInput>;
}

@InputType()
export class ReviewUpdateToOneWithWhereWithoutLikesInput {
    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: InstanceType<typeof ReviewWhereInput>;
    @Field(() => ReviewUpdateWithoutLikesInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutLikesInput)
    data!: InstanceType<typeof ReviewUpdateWithoutLikesInput>;
}

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutBookInput {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewUpdateWithoutBookInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutBookInput)
    data!: InstanceType<typeof ReviewUpdateWithoutBookInput>;
}

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutUserBookInput {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewUpdateWithoutUserBookInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutUserBookInput)
    data!: InstanceType<typeof ReviewUpdateWithoutUserBookInput>;
}

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutUserInput)
    data!: InstanceType<typeof ReviewUpdateWithoutUserInput>;
}

@InputType()
export class ReviewUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => UserBookUpdateOneWithoutReviewsNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneWithoutReviewsNestedInput>;
    @Field(() => LikedReviewUpdateManyWithoutReviewNestedInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUpdateManyWithoutReviewNestedInput>;
    @Field(() => CommentUpdateManyWithoutReviewNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutReviewNestedInput>;
    @Field(() => UserUpdateOneWithoutReviewsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutReviewsNestedInput>;
}

@InputType()
export class ReviewUpdateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => UserBookUpdateOneWithoutReviewsNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneWithoutReviewsNestedInput>;
    @Field(() => LikedReviewUpdateManyWithoutReviewNestedInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUpdateManyWithoutReviewNestedInput>;
    @Field(() => UserUpdateOneWithoutReviewsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutReviewsNestedInput>;
    @Field(() => BookUpdateOneWithoutReviewsNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutReviewsNestedInput>;
}

@InputType()
export class ReviewUpdateWithoutLikesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => UserBookUpdateOneWithoutReviewsNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneWithoutReviewsNestedInput>;
    @Field(() => CommentUpdateManyWithoutReviewNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutReviewNestedInput>;
    @Field(() => UserUpdateOneWithoutReviewsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutReviewsNestedInput>;
    @Field(() => BookUpdateOneWithoutReviewsNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutReviewsNestedInput>;
}

@InputType()
export class ReviewUpdateWithoutUserBookInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => LikedReviewUpdateManyWithoutReviewNestedInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUpdateManyWithoutReviewNestedInput>;
    @Field(() => CommentUpdateManyWithoutReviewNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutReviewNestedInput>;
    @Field(() => UserUpdateOneWithoutReviewsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutReviewsNestedInput>;
    @Field(() => BookUpdateOneWithoutReviewsNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutReviewsNestedInput>;
}

@InputType()
export class ReviewUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => UserBookUpdateOneWithoutReviewsNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneWithoutReviewsNestedInput>;
    @Field(() => LikedReviewUpdateManyWithoutReviewNestedInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUpdateManyWithoutReviewNestedInput>;
    @Field(() => CommentUpdateManyWithoutReviewNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutReviewNestedInput>;
    @Field(() => BookUpdateOneWithoutReviewsNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutReviewsNestedInput>;
}

@InputType()
export class ReviewUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Boolean, {nullable:true})
    spoilers?: boolean;
    @Field(() => UserBookUpdateOneWithoutReviewsNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateOneWithoutReviewsNestedInput>;
    @Field(() => LikedReviewUpdateManyWithoutReviewNestedInput, {nullable:true})
    likes?: InstanceType<typeof LikedReviewUpdateManyWithoutReviewNestedInput>;
    @Field(() => CommentUpdateManyWithoutReviewNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutReviewNestedInput>;
    @Field(() => UserUpdateOneWithoutReviewsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutReviewsNestedInput>;
    @Field(() => BookUpdateOneWithoutReviewsNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutReviewsNestedInput>;
}

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutBookInput {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewUpdateWithoutBookInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutBookInput)
    update!: InstanceType<typeof ReviewUpdateWithoutBookInput>;
    @Field(() => ReviewCreateWithoutBookInput, {nullable:false})
    @Type(() => ReviewCreateWithoutBookInput)
    create!: InstanceType<typeof ReviewCreateWithoutBookInput>;
}

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutUserBookInput {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewUpdateWithoutUserBookInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutUserBookInput)
    update!: InstanceType<typeof ReviewUpdateWithoutUserBookInput>;
    @Field(() => ReviewCreateWithoutUserBookInput, {nullable:false})
    @Type(() => ReviewCreateWithoutUserBookInput)
    create!: InstanceType<typeof ReviewCreateWithoutUserBookInput>;
}

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutUserInput)
    update!: InstanceType<typeof ReviewUpdateWithoutUserInput>;
    @Field(() => ReviewCreateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCreateWithoutUserInput)
    create!: InstanceType<typeof ReviewCreateWithoutUserInput>;
}

@InputType()
export class ReviewUpsertWithoutCommentsInput {
    @Field(() => ReviewUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutCommentsInput)
    update!: InstanceType<typeof ReviewUpdateWithoutCommentsInput>;
    @Field(() => ReviewCreateWithoutCommentsInput, {nullable:false})
    @Type(() => ReviewCreateWithoutCommentsInput)
    create!: InstanceType<typeof ReviewCreateWithoutCommentsInput>;
    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: InstanceType<typeof ReviewWhereInput>;
}

@InputType()
export class ReviewUpsertWithoutLikesInput {
    @Field(() => ReviewUpdateWithoutLikesInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutLikesInput)
    update!: InstanceType<typeof ReviewUpdateWithoutLikesInput>;
    @Field(() => ReviewCreateWithoutLikesInput, {nullable:false})
    @Type(() => ReviewCreateWithoutLikesInput)
    create!: InstanceType<typeof ReviewCreateWithoutLikesInput>;
    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: InstanceType<typeof ReviewWhereInput>;
}

@InputType()
export class ReviewWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [ReviewWhereInput], {nullable:true})
    AND?: Array<ReviewWhereInput>;
    @Field(() => [ReviewWhereInput], {nullable:true})
    OR?: Array<ReviewWhereInput>;
    @Field(() => [ReviewWhereInput], {nullable:true})
    NOT?: Array<ReviewWhereInput>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    spoilers?: InstanceType<typeof BoolFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
    @Field(() => UserBookRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookRelationFilter>;
    @Field(() => LikedReviewListRelationFilter, {nullable:true})
    likes?: InstanceType<typeof LikedReviewListRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => BookRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookRelationFilter>;
}

@InputType()
export class ReviewWhereInput {
    @Field(() => [ReviewWhereInput], {nullable:true})
    AND?: Array<ReviewWhereInput>;
    @Field(() => [ReviewWhereInput], {nullable:true})
    OR?: Array<ReviewWhereInput>;
    @Field(() => [ReviewWhereInput], {nullable:true})
    NOT?: Array<ReviewWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userBookId?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    spoilers?: InstanceType<typeof BoolFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
    @Field(() => UserBookRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookRelationFilter>;
    @Field(() => LikedReviewListRelationFilter, {nullable:true})
    likes?: InstanceType<typeof LikedReviewListRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => BookRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookRelationFilter>;
}

@ObjectType()
export class Review {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:true})
    content!: string | null;
    @Field(() => String, {nullable:true})
    userBookId!: string | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    spoilers!: boolean;
    @Field(() => String, {nullable:true})
    userId!: string | null;
    @Field(() => String, {nullable:true})
    bookId!: string | null;
    @Field(() => UserBook, {nullable:true})
    userBook?: InstanceType<typeof UserBook> | null;
    @Field(() => [LikedReview], {nullable:true})
    likes?: Array<LikedReview>;
    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
    @Field(() => Book, {nullable:true})
    book?: InstanceType<typeof Book> | null;
    @Field(() => ReviewCount, {nullable:false})
    _count?: InstanceType<typeof ReviewCount>;
}

@ArgsType()
export class UpdateManyReviewArgs {
    @Field(() => ReviewUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ReviewUpdateManyMutationInput>;
    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ReviewWhereInput>;
}

@ArgsType()
export class UpdateOneReviewArgs {
    @Field(() => ReviewUpdateInput, {nullable:false})
    @Type(() => ReviewUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ReviewUpdateInput>;
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneReviewArgs {
    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
    @Field(() => ReviewCreateInput, {nullable:false})
    @Type(() => ReviewCreateInput)
    create!: InstanceType<typeof ReviewCreateInput>;
    @Field(() => ReviewUpdateInput, {nullable:false})
    @Type(() => ReviewUpdateInput)
    update!: InstanceType<typeof ReviewUpdateInput>;
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
}

@ArgsType()
export class DeleteOneShelfArgs {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
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
    cursor?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ShelfScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShelfScalarFieldEnum>;
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
    cursor?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ShelfScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShelfScalarFieldEnum>;
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
    cursor?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ShelfScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShelfScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueShelfOrThrowArgs {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class FindUniqueShelfArgs {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
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
    cursor?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
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
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateTime?: keyof typeof SortOrder;
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
    connect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
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
    connect?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
}

@InputType()
export class ShelfCreateOrConnectWithoutUserBooksInput {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => ShelfCreateWithoutUserBooksInput, {nullable:false})
    @Type(() => ShelfCreateWithoutUserBooksInput)
    create!: InstanceType<typeof ShelfCreateWithoutUserBooksInput>;
}

@InputType()
export class ShelfCreateOrConnectWithoutUserInput {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
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
    by!: Array<keyof typeof ShelfScalarFieldEnum>;
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
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateTime?: keyof typeof SortOrder;
}

@InputType()
export class ShelfMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
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
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateTime?: keyof typeof SortOrder;
}

@InputType()
export class ShelfOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ShelfOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
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
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
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
export class ShelfRelationFilter {
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
    connect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
}

@InputType()
export class ShelfUncheckedCreateWithoutUserBooksInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
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
    set?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
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
    set?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [ShelfWhereUniqueInput], {nullable:true})
    @Type(() => ShelfWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>>;
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
    connect?: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
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
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
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
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
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
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
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
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    dateTime?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => UserBookShelvesListRelationFilter, {nullable:true})
    userBooks?: InstanceType<typeof UserBookShelvesListRelationFilter>;
}

@ObjectType()
export class Shelf {
    @Field(() => ID, {nullable:false})
    id!: string;
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
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class UpsertOneShelfArgs {
    @Field(() => ShelfWhereUniqueInput, {nullable:false})
    @Type(() => ShelfWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ShelfWhereUniqueInput, 'id' | 'identifier'>;
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
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
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
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
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
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
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
    hashedRefreshToken?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
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
    @HideField()
    hashedRefreshToken!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedRefreshToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    userBooks?: number;
    @Field(() => Int, {nullable:false})
    shelves?: number;
    @Field(() => Int, {nullable:false})
    journalEntries?: number;
    @Field(() => Int, {nullable:false})
    reviews?: number;
    @Field(() => Int, {nullable:false})
    comments?: number;
    @Field(() => Int, {nullable:false})
    likedReviews?: number;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutCommentsInput {
    @Field(() => UserCreateWithoutCommentsInput, {nullable:true})
    @Type(() => UserCreateWithoutCommentsInput)
    create?: InstanceType<typeof UserCreateWithoutCommentsInput>;
    @Field(() => UserCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCommentsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutJournalEntriesInput {
    @Field(() => UserCreateWithoutJournalEntriesInput, {nullable:true})
    @Type(() => UserCreateWithoutJournalEntriesInput)
    create?: InstanceType<typeof UserCreateWithoutJournalEntriesInput>;
    @Field(() => UserCreateOrConnectWithoutJournalEntriesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutJournalEntriesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutJournalEntriesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutLikedReviewsInput {
    @Field(() => UserCreateWithoutLikedReviewsInput, {nullable:true})
    @Type(() => UserCreateWithoutLikedReviewsInput)
    create?: InstanceType<typeof UserCreateWithoutLikedReviewsInput>;
    @Field(() => UserCreateOrConnectWithoutLikedReviewsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLikedReviewsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutLikedReviewsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}

@InputType()
export class UserCreateNestedOneWithoutReviewsInput {
    @Field(() => UserCreateWithoutReviewsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewsInput)
    create?: InstanceType<typeof UserCreateWithoutReviewsInput>;
    @Field(() => UserCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReviewsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
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
export class UserCreateOrConnectWithoutCommentsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutCommentsInput, {nullable:false})
    @Type(() => UserCreateWithoutCommentsInput)
    create!: InstanceType<typeof UserCreateWithoutCommentsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutJournalEntriesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutJournalEntriesInput, {nullable:false})
    @Type(() => UserCreateWithoutJournalEntriesInput)
    create!: InstanceType<typeof UserCreateWithoutJournalEntriesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutLikedReviewsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutLikedReviewsInput, {nullable:false})
    @Type(() => UserCreateWithoutLikedReviewsInput)
    create!: InstanceType<typeof UserCreateWithoutLikedReviewsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutReviewsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserCreateWithoutReviewsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewsInput)
    create!: InstanceType<typeof UserCreateWithoutReviewsInput>;
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
export class UserCreateWithoutCommentsInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
    @Field(() => ShelfCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
    @Field(() => JournalEntryCreateNestedManyWithoutUserInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryCreateNestedManyWithoutUserInput>;
    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
    @Field(() => LikedReviewCreateNestedManyWithoutUserInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutJournalEntriesInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
    @Field(() => ShelfCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => LikedReviewCreateNestedManyWithoutUserInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutLikedReviewsInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
    @Field(() => ShelfCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
    @Field(() => JournalEntryCreateNestedManyWithoutUserInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryCreateNestedManyWithoutUserInput>;
    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutReviewsInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
    @Field(() => ShelfCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
    @Field(() => JournalEntryCreateNestedManyWithoutUserInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => LikedReviewCreateNestedManyWithoutUserInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewCreateNestedManyWithoutUserInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
    @Field(() => JournalEntryCreateNestedManyWithoutUserInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryCreateNestedManyWithoutUserInput>;
    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => LikedReviewCreateNestedManyWithoutUserInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewCreateNestedManyWithoutUserInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ShelfCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
    @Field(() => JournalEntryCreateNestedManyWithoutUserInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryCreateNestedManyWithoutUserInput>;
    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => LikedReviewCreateNestedManyWithoutUserInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewCreateNestedManyWithoutUserInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookCreateNestedManyWithoutUserInput>;
    @Field(() => ShelfCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfCreateNestedManyWithoutUserInput>;
    @Field(() => JournalEntryCreateNestedManyWithoutUserInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryCreateNestedManyWithoutUserInput>;
    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutUserInput>;
    @Field(() => LikedReviewCreateNestedManyWithoutUserInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewCreateNestedManyWithoutUserInput>;
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
    by!: Array<keyof typeof UserScalarFieldEnum>;
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
    @HideField()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
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
    hashedRefreshToken?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
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
    @HideField()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedRefreshToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
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
    hashedRefreshToken?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
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
    @HideField()
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hashedRefreshToken?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    username?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    hashedPassword?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    hashedRefreshToken?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
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
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    username?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    hashedPassword?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    hashedRefreshToken?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserBookOrderByRelationAggregateInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookOrderByRelationAggregateInput>;
    @Field(() => ShelfOrderByRelationAggregateInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfOrderByRelationAggregateInput>;
    @Field(() => JournalEntryOrderByRelationAggregateInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryOrderByRelationAggregateInput>;
    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewOrderByRelationAggregateInput>;
    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: InstanceType<typeof CommentOrderByRelationAggregateInput>;
    @Field(() => LikedReviewOrderByRelationAggregateInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
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
    hashedRefreshToken?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutCommentsInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => LikedReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutJournalEntriesInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => LikedReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutLikedReviewsInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutReviewsInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => LikedReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUncheckedCreateNestedManyWithoutUserInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => LikedReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUncheckedCreateNestedManyWithoutUserInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => LikedReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUncheckedCreateNestedManyWithoutUserInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ShelfUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => LikedReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUncheckedCreateNestedManyWithoutUserInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedUpdateWithoutCommentsInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => LikedReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutJournalEntriesInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => LikedReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutLikedReviewsInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutReviewsInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => LikedReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUncheckedUpdateManyWithoutUserNestedInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => LikedReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUncheckedUpdateManyWithoutUserNestedInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => LikedReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUncheckedUpdateManyWithoutUserNestedInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ShelfUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => JournalEntryUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => LikedReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUncheckedUpdateManyWithoutUserNestedInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUpdateOneWithoutCommentsNestedInput {
    @Field(() => UserCreateWithoutCommentsInput, {nullable:true})
    @Type(() => UserCreateWithoutCommentsInput)
    create?: InstanceType<typeof UserCreateWithoutCommentsInput>;
    @Field(() => UserCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCommentsInput>;
    @Field(() => UserUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => UserUpsertWithoutCommentsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutCommentsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCommentsInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutCommentsInput>;
}

@InputType()
export class UserUpdateOneWithoutJournalEntriesNestedInput {
    @Field(() => UserCreateWithoutJournalEntriesInput, {nullable:true})
    @Type(() => UserCreateWithoutJournalEntriesInput)
    create?: InstanceType<typeof UserCreateWithoutJournalEntriesInput>;
    @Field(() => UserCreateOrConnectWithoutJournalEntriesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutJournalEntriesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutJournalEntriesInput>;
    @Field(() => UserUpsertWithoutJournalEntriesInput, {nullable:true})
    @Type(() => UserUpsertWithoutJournalEntriesInput)
    upsert?: InstanceType<typeof UserUpsertWithoutJournalEntriesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutJournalEntriesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutJournalEntriesInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutJournalEntriesInput>;
}

@InputType()
export class UserUpdateOneWithoutLikedReviewsNestedInput {
    @Field(() => UserCreateWithoutLikedReviewsInput, {nullable:true})
    @Type(() => UserCreateWithoutLikedReviewsInput)
    create?: InstanceType<typeof UserCreateWithoutLikedReviewsInput>;
    @Field(() => UserCreateOrConnectWithoutLikedReviewsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLikedReviewsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutLikedReviewsInput>;
    @Field(() => UserUpsertWithoutLikedReviewsInput, {nullable:true})
    @Type(() => UserUpsertWithoutLikedReviewsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutLikedReviewsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutLikedReviewsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutLikedReviewsInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutLikedReviewsInput>;
}

@InputType()
export class UserUpdateOneWithoutReviewsNestedInput {
    @Field(() => UserCreateWithoutReviewsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewsInput)
    create?: InstanceType<typeof UserCreateWithoutReviewsInput>;
    @Field(() => UserCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReviewsInput>;
    @Field(() => UserUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReviewsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutReviewsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutReviewsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReviewsInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutReviewsInput>;
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
export class UserUpdateOneWithoutUserBooksNestedInput {
    @Field(() => UserCreateWithoutUserBooksInput, {nullable:true})
    @Type(() => UserCreateWithoutUserBooksInput)
    create?: InstanceType<typeof UserCreateWithoutUserBooksInput>;
    @Field(() => UserCreateOrConnectWithoutUserBooksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserBooksInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserBooksInput>;
    @Field(() => UserUpsertWithoutUserBooksInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserBooksInput)
    upsert?: InstanceType<typeof UserUpsertWithoutUserBooksInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
    @Field(() => UserUpdateToOneWithWhereWithoutUserBooksInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutUserBooksInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutUserBooksInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutCommentsInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommentsInput)
    data!: InstanceType<typeof UserUpdateWithoutCommentsInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutJournalEntriesInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutJournalEntriesInput, {nullable:false})
    @Type(() => UserUpdateWithoutJournalEntriesInput)
    data!: InstanceType<typeof UserUpdateWithoutJournalEntriesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutLikedReviewsInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutLikedReviewsInput, {nullable:false})
    @Type(() => UserUpdateWithoutLikedReviewsInput)
    data!: InstanceType<typeof UserUpdateWithoutLikedReviewsInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutReviewsInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewsInput)
    data!: InstanceType<typeof UserUpdateWithoutReviewsInput>;
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
export class UserUpdateWithoutCommentsInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
    @Field(() => ShelfUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
    @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUpdateManyWithoutUserNestedInput>;
    @Field(() => ReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
    @Field(() => LikedReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutJournalEntriesInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
    @Field(() => ShelfUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
    @Field(() => ReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => LikedReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutLikedReviewsInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
    @Field(() => ShelfUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
    @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUpdateManyWithoutUserNestedInput>;
    @Field(() => ReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutReviewsInput {
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
    @Field(() => ShelfUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
    @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => LikedReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUpdateManyWithoutUserNestedInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
    @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUpdateManyWithoutUserNestedInput>;
    @Field(() => ReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => LikedReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUpdateManyWithoutUserNestedInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ShelfUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
    @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUpdateManyWithoutUserNestedInput>;
    @Field(() => ReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => LikedReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUpdateManyWithoutUserNestedInput>;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookUpdateManyWithoutUserNestedInput, {nullable:true})
    userBooks?: InstanceType<typeof UserBookUpdateManyWithoutUserNestedInput>;
    @Field(() => ShelfUpdateManyWithoutUserNestedInput, {nullable:true})
    shelves?: InstanceType<typeof ShelfUpdateManyWithoutUserNestedInput>;
    @Field(() => JournalEntryUpdateManyWithoutUserNestedInput, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryUpdateManyWithoutUserNestedInput>;
    @Field(() => ReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutUserNestedInput>;
    @Field(() => LikedReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpsertWithoutCommentsInput {
    @Field(() => UserUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommentsInput)
    update!: InstanceType<typeof UserUpdateWithoutCommentsInput>;
    @Field(() => UserCreateWithoutCommentsInput, {nullable:false})
    @Type(() => UserCreateWithoutCommentsInput)
    create!: InstanceType<typeof UserCreateWithoutCommentsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutJournalEntriesInput {
    @Field(() => UserUpdateWithoutJournalEntriesInput, {nullable:false})
    @Type(() => UserUpdateWithoutJournalEntriesInput)
    update!: InstanceType<typeof UserUpdateWithoutJournalEntriesInput>;
    @Field(() => UserCreateWithoutJournalEntriesInput, {nullable:false})
    @Type(() => UserCreateWithoutJournalEntriesInput)
    create!: InstanceType<typeof UserCreateWithoutJournalEntriesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutLikedReviewsInput {
    @Field(() => UserUpdateWithoutLikedReviewsInput, {nullable:false})
    @Type(() => UserUpdateWithoutLikedReviewsInput)
    update!: InstanceType<typeof UserUpdateWithoutLikedReviewsInput>;
    @Field(() => UserCreateWithoutLikedReviewsInput, {nullable:false})
    @Type(() => UserCreateWithoutLikedReviewsInput)
    create!: InstanceType<typeof UserCreateWithoutLikedReviewsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutReviewsInput {
    @Field(() => UserUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewsInput)
    update!: InstanceType<typeof UserUpdateWithoutReviewsInput>;
    @Field(() => UserCreateWithoutReviewsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewsInput)
    create!: InstanceType<typeof UserCreateWithoutReviewsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
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
    hashedRefreshToken?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserBookListRelationFilter, {nullable:true})
    userBooks?: InstanceType<typeof UserBookListRelationFilter>;
    @Field(() => ShelfListRelationFilter, {nullable:true})
    shelves?: InstanceType<typeof ShelfListRelationFilter>;
    @Field(() => JournalEntryListRelationFilter, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryListRelationFilter>;
    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: InstanceType<typeof ReviewListRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => LikedReviewListRelationFilter, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewListRelationFilter>;
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
    hashedRefreshToken?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserBookListRelationFilter, {nullable:true})
    userBooks?: InstanceType<typeof UserBookListRelationFilter>;
    @Field(() => ShelfListRelationFilter, {nullable:true})
    shelves?: InstanceType<typeof ShelfListRelationFilter>;
    @Field(() => JournalEntryListRelationFilter, {nullable:true})
    journalEntries?: InstanceType<typeof JournalEntryListRelationFilter>;
    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: InstanceType<typeof ReviewListRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => LikedReviewListRelationFilter, {nullable:true})
    likedReviews?: InstanceType<typeof LikedReviewListRelationFilter>;
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
    @HideField()
    hashedRefreshToken!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [UserBook], {nullable:true})
    userBooks?: Array<UserBook>;
    @Field(() => [Shelf], {nullable:true})
    shelves?: Array<Shelf>;
    @Field(() => [JournalEntry], {nullable:true})
    journalEntries?: Array<JournalEntry>;
    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;
    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;
    @Field(() => [LikedReview], {nullable:true})
    likedReviews?: Array<LikedReview>;
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
}

@ArgsType()
export class DeleteOneUserBookArgs {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
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
    cursor?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserBookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserBookScalarFieldEnum>;
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
    cursor?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserBookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserBookScalarFieldEnum>;
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
    cursor?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserBookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserBookScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserBookOrThrowArgs {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class FindUniqueUserBookArgs {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
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
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
}

@ArgsType()
export class UpsertOneUserBookArgs {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
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
    cursor?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
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
    rating?: number;
}

@InputType()
export class UserBookAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
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
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserBookCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class UserBookCount {
    @Field(() => Int, {nullable:false})
    shelves?: number;
    @Field(() => Int, {nullable:false})
    journalEntry?: number;
    @Field(() => Int, {nullable:false})
    reviews?: number;
}

@InputType()
export class UserBookCreateManyBookInputEnvelope {
    @Field(() => [UserBookCreateManyBookInput], {nullable:false})
    @Type(() => UserBookCreateManyBookInput)
    data!: Array<UserBookCreateManyBookInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class UserBookCreateManyBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserBookCreateNestedManyWithoutBookInput {
    @Field(() => [UserBookCreateWithoutBookInput], {nullable:true})
    @Type(() => UserBookCreateWithoutBookInput)
    create?: Array<UserBookCreateWithoutBookInput>;
    @Field(() => [UserBookCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<UserBookCreateOrConnectWithoutBookInput>;
    @Field(() => UserBookCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => UserBookCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof UserBookCreateManyBookInputEnvelope>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
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
    connect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
}

@InputType()
export class UserBookCreateNestedOneWithoutJournalEntryInput {
    @Field(() => UserBookCreateWithoutJournalEntryInput, {nullable:true})
    @Type(() => UserBookCreateWithoutJournalEntryInput)
    create?: InstanceType<typeof UserBookCreateWithoutJournalEntryInput>;
    @Field(() => UserBookCreateOrConnectWithoutJournalEntryInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutJournalEntryInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutJournalEntryInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
}

@InputType()
export class UserBookCreateNestedOneWithoutReviewsInput {
    @Field(() => UserBookCreateWithoutReviewsInput, {nullable:true})
    @Type(() => UserBookCreateWithoutReviewsInput)
    create?: InstanceType<typeof UserBookCreateWithoutReviewsInput>;
    @Field(() => UserBookCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutReviewsInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
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
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
}

@InputType()
export class UserBookCreateOrConnectWithoutBookInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => UserBookCreateWithoutBookInput, {nullable:false})
    @Type(() => UserBookCreateWithoutBookInput)
    create!: InstanceType<typeof UserBookCreateWithoutBookInput>;
}

@InputType()
export class UserBookCreateOrConnectWithoutJournalEntryInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => UserBookCreateWithoutJournalEntryInput, {nullable:false})
    @Type(() => UserBookCreateWithoutJournalEntryInput)
    create!: InstanceType<typeof UserBookCreateWithoutJournalEntryInput>;
}

@InputType()
export class UserBookCreateOrConnectWithoutReviewsInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => UserBookCreateWithoutReviewsInput, {nullable:false})
    @Type(() => UserBookCreateWithoutReviewsInput)
    create!: InstanceType<typeof UserBookCreateWithoutReviewsInput>;
}

@InputType()
export class UserBookCreateOrConnectWithoutShelvesInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => UserBookCreateWithoutShelvesInput, {nullable:false})
    @Type(() => UserBookCreateWithoutShelvesInput)
    create!: InstanceType<typeof UserBookCreateWithoutShelvesInput>;
}

@InputType()
export class UserBookCreateOrConnectWithoutUserInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => UserBookCreateWithoutUserInput, {nullable:false})
    @Type(() => UserBookCreateWithoutUserInput)
    create!: InstanceType<typeof UserBookCreateWithoutUserInput>;
}

@InputType()
export class UserBookCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutUserBooksInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutUserBookInput>;
    @Field(() => JournalEntryCreateNestedManyWithoutUserBookInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReviewCreateNestedManyWithoutUserBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateWithoutJournalEntryInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutUserBooksInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
    @Field(() => BookCreateNestedOneWithoutUserBookInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReviewCreateNestedManyWithoutUserBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateWithoutReviewsInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutUserBooksInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
    @Field(() => BookCreateNestedOneWithoutUserBookInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutUserBookInput>;
    @Field(() => JournalEntryCreateNestedManyWithoutUserBookInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutUserBooksInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
    @Field(() => BookCreateNestedOneWithoutUserBookInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
    @Field(() => JournalEntryCreateNestedManyWithoutUserBookInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReviewCreateNestedManyWithoutUserBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => BookCreateNestedOneWithoutUserBookInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutUserBookInput>;
    @Field(() => JournalEntryCreateNestedManyWithoutUserBookInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReviewCreateNestedManyWithoutUserBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookCreateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutUserBooksInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
    @Field(() => BookCreateNestedOneWithoutUserBookInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutUserBookInput>;
    @Field(() => JournalEntryCreateNestedManyWithoutUserBookInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReviewCreateNestedManyWithoutUserBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutUserBookInput>;
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
    by!: Array<keyof typeof UserBookScalarFieldEnum>;
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
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:false})
    @Validator.ValidateNested()
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserBookMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserBookMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserBookOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class UserBookOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    rating?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
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
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    rating?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => BookOrderByWithRelationInput, {nullable:true})
    book?: InstanceType<typeof BookOrderByWithRelationInput>;
    @Field(() => UserBookShelvesOrderByRelationAggregateInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesOrderByRelationAggregateInput>;
    @Field(() => JournalEntryOrderByRelationAggregateInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryOrderByRelationAggregateInput>;
    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewOrderByRelationAggregateInput>;
}

@InputType()
export class UserBookRelationFilter {
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
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rating?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
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
    @Field(() => StringFilter, {nullable:true})
    status?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    rating?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class UserBookSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    rating?: true;
}

@ObjectType()
export class UserBookSumAggregate {
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
}

@InputType()
export class UserBookSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
}

@InputType()
export class UserBookUncheckedCreateNestedManyWithoutBookInput {
    @Field(() => [UserBookCreateWithoutBookInput], {nullable:true})
    @Type(() => UserBookCreateWithoutBookInput)
    create?: Array<UserBookCreateWithoutBookInput>;
    @Field(() => [UserBookCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<UserBookCreateOrConnectWithoutBookInput>;
    @Field(() => UserBookCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => UserBookCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof UserBookCreateManyBookInputEnvelope>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
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
    connect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
}

@InputType()
export class UserBookUncheckedCreateWithoutBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookUncheckedCreateWithoutJournalEntryInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    bookId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookUncheckedCreateWithoutReviewsInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    userId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    bookId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUncheckedCreateNestedManyWithoutUserBookInput>;
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
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    bookId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedCreateNestedManyWithoutUserBookInput>;
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
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => JournalEntryUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUncheckedCreateNestedManyWithoutUserBookInput>;
    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedCreateNestedManyWithoutUserBookInput>;
}

@InputType()
export class UserBookUncheckedUpdateManyWithoutBookNestedInput {
    @Field(() => [UserBookCreateWithoutBookInput], {nullable:true})
    @Type(() => UserBookCreateWithoutBookInput)
    create?: Array<UserBookCreateWithoutBookInput>;
    @Field(() => [UserBookCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<UserBookCreateOrConnectWithoutBookInput>;
    @Field(() => [UserBookUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => UserBookUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<UserBookUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => UserBookCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => UserBookCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof UserBookCreateManyBookInputEnvelope>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => UserBookUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<UserBookUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [UserBookUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => UserBookUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<UserBookUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [UserBookScalarWhereInput], {nullable:true})
    @Type(() => UserBookScalarWhereInput)
    deleteMany?: Array<UserBookScalarWhereInput>;
}

@InputType()
export class UserBookUncheckedUpdateManyWithoutBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    set?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserBookUncheckedUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReviewUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUncheckedUpdateWithoutJournalEntryInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bookId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReviewUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUncheckedUpdateWithoutReviewsInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    userId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bookId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput>;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReviewUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    bookId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReviewUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedUpdateManyWithoutUserBookNestedInput>;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUncheckedUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReviewUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUncheckedUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserBookUpdateManyWithWhereWithoutBookInput {
    @Field(() => UserBookScalarWhereInput, {nullable:false})
    @Type(() => UserBookScalarWhereInput)
    where!: InstanceType<typeof UserBookScalarWhereInput>;
    @Field(() => UserBookUpdateManyMutationInput, {nullable:false})
    @Type(() => UserBookUpdateManyMutationInput)
    data!: InstanceType<typeof UserBookUpdateManyMutationInput>;
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
export class UserBookUpdateManyWithoutBookNestedInput {
    @Field(() => [UserBookCreateWithoutBookInput], {nullable:true})
    @Type(() => UserBookCreateWithoutBookInput)
    create?: Array<UserBookCreateWithoutBookInput>;
    @Field(() => [UserBookCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<UserBookCreateOrConnectWithoutBookInput>;
    @Field(() => [UserBookUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => UserBookUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<UserBookUpsertWithWhereUniqueWithoutBookInput>;
    @Field(() => UserBookCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => UserBookCreateManyBookInputEnvelope)
    createMany?: InstanceType<typeof UserBookCreateManyBookInputEnvelope>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => UserBookUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<UserBookUpdateWithWhereUniqueWithoutBookInput>;
    @Field(() => [UserBookUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => UserBookUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<UserBookUpdateManyWithWhereWithoutBookInput>;
    @Field(() => [UserBookScalarWhereInput], {nullable:true})
    @Type(() => UserBookScalarWhereInput)
    deleteMany?: Array<UserBookScalarWhereInput>;
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
    set?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
    @Field(() => [UserBookWhereUniqueInput], {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>>;
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
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => UserBookUpdateToOneWithWhereWithoutShelvesInput, {nullable:true})
    @Type(() => UserBookUpdateToOneWithWhereWithoutShelvesInput)
    update?: InstanceType<typeof UserBookUpdateToOneWithWhereWithoutShelvesInput>;
}

@InputType()
export class UserBookUpdateOneWithoutJournalEntryNestedInput {
    @Field(() => UserBookCreateWithoutJournalEntryInput, {nullable:true})
    @Type(() => UserBookCreateWithoutJournalEntryInput)
    create?: InstanceType<typeof UserBookCreateWithoutJournalEntryInput>;
    @Field(() => UserBookCreateOrConnectWithoutJournalEntryInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutJournalEntryInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutJournalEntryInput>;
    @Field(() => UserBookUpsertWithoutJournalEntryInput, {nullable:true})
    @Type(() => UserBookUpsertWithoutJournalEntryInput)
    upsert?: InstanceType<typeof UserBookUpsertWithoutJournalEntryInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    disconnect?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    delete?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => UserBookUpdateToOneWithWhereWithoutJournalEntryInput, {nullable:true})
    @Type(() => UserBookUpdateToOneWithWhereWithoutJournalEntryInput)
    update?: InstanceType<typeof UserBookUpdateToOneWithWhereWithoutJournalEntryInput>;
}

@InputType()
export class UserBookUpdateOneWithoutReviewsNestedInput {
    @Field(() => UserBookCreateWithoutReviewsInput, {nullable:true})
    @Type(() => UserBookCreateWithoutReviewsInput)
    create?: InstanceType<typeof UserBookCreateWithoutReviewsInput>;
    @Field(() => UserBookCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => UserBookCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: InstanceType<typeof UserBookCreateOrConnectWithoutReviewsInput>;
    @Field(() => UserBookUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => UserBookUpsertWithoutReviewsInput)
    upsert?: InstanceType<typeof UserBookUpsertWithoutReviewsInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    disconnect?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    delete?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookWhereUniqueInput, {nullable:true})
    @Type(() => UserBookWhereUniqueInput)
    connect?: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => UserBookUpdateToOneWithWhereWithoutReviewsInput, {nullable:true})
    @Type(() => UserBookUpdateToOneWithWhereWithoutReviewsInput)
    update?: InstanceType<typeof UserBookUpdateToOneWithWhereWithoutReviewsInput>;
}

@InputType()
export class UserBookUpdateToOneWithWhereWithoutJournalEntryInput {
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    where?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookUpdateWithoutJournalEntryInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutJournalEntryInput)
    data!: InstanceType<typeof UserBookUpdateWithoutJournalEntryInput>;
}

@InputType()
export class UserBookUpdateToOneWithWhereWithoutReviewsInput {
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    where?: InstanceType<typeof UserBookWhereInput>;
    @Field(() => UserBookUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutReviewsInput)
    data!: InstanceType<typeof UserBookUpdateWithoutReviewsInput>;
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
export class UserBookUpdateWithWhereUniqueWithoutBookInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => UserBookUpdateWithoutBookInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutBookInput)
    data!: InstanceType<typeof UserBookUpdateWithoutBookInput>;
}

@InputType()
export class UserBookUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => UserBookUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutUserInput)
    data!: InstanceType<typeof UserBookUpdateWithoutUserInput>;
}

@InputType()
export class UserBookUpdateWithoutBookInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUpdateOneWithoutUserBooksNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutUserBooksNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
    @Field(() => JournalEntryUpdateManyWithoutUserBookNestedInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReviewUpdateManyWithoutUserBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateWithoutJournalEntryInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUpdateOneWithoutUserBooksNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutUserBooksNestedInput>;
    @Field(() => BookUpdateOneWithoutUserBookNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutUserBookNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReviewUpdateManyWithoutUserBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateWithoutReviewsInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUpdateOneWithoutUserBooksNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutUserBooksNestedInput>;
    @Field(() => BookUpdateOneWithoutUserBookNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutUserBookNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
    @Field(() => JournalEntryUpdateManyWithoutUserBookNestedInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateWithoutShelvesInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUpdateOneWithoutUserBooksNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutUserBooksNestedInput>;
    @Field(() => BookUpdateOneWithoutUserBookNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutUserBookNestedInput>;
    @Field(() => JournalEntryUpdateManyWithoutUserBookNestedInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReviewUpdateManyWithoutUserBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => BookUpdateOneWithoutUserBookNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutUserBookNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
    @Field(() => JournalEntryUpdateManyWithoutUserBookNestedInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReviewUpdateManyWithoutUserBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    status?: string;
    @Field(() => Int, {nullable:true})
    @Validator.Min(0)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => Date, {nullable:true})
    @Validator.ValidateNested()
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUpdateOneWithoutUserBooksNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutUserBooksNestedInput>;
    @Field(() => BookUpdateOneWithoutUserBookNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutUserBookNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
    @Field(() => JournalEntryUpdateManyWithoutUserBookNestedInput, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryUpdateManyWithoutUserBookNestedInput>;
    @Field(() => ReviewUpdateManyWithoutUserBookNestedInput, {nullable:true})
    reviews?: InstanceType<typeof ReviewUpdateManyWithoutUserBookNestedInput>;
}

@InputType()
export class UserBookUpsertWithWhereUniqueWithoutBookInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => UserBookUpdateWithoutBookInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutBookInput)
    update!: InstanceType<typeof UserBookUpdateWithoutBookInput>;
    @Field(() => UserBookCreateWithoutBookInput, {nullable:false})
    @Type(() => UserBookCreateWithoutBookInput)
    create!: InstanceType<typeof UserBookCreateWithoutBookInput>;
}

@InputType()
export class UserBookUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => UserBookWhereUniqueInput, {nullable:false})
    @Type(() => UserBookWhereUniqueInput)
    where!: Prisma.AtLeast<UserBookWhereUniqueInput, 'id' | 'identifier'>;
    @Field(() => UserBookUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutUserInput)
    update!: InstanceType<typeof UserBookUpdateWithoutUserInput>;
    @Field(() => UserBookCreateWithoutUserInput, {nullable:false})
    @Type(() => UserBookCreateWithoutUserInput)
    create!: InstanceType<typeof UserBookCreateWithoutUserInput>;
}

@InputType()
export class UserBookUpsertWithoutJournalEntryInput {
    @Field(() => UserBookUpdateWithoutJournalEntryInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutJournalEntryInput)
    update!: InstanceType<typeof UserBookUpdateWithoutJournalEntryInput>;
    @Field(() => UserBookCreateWithoutJournalEntryInput, {nullable:false})
    @Type(() => UserBookCreateWithoutJournalEntryInput)
    create!: InstanceType<typeof UserBookCreateWithoutJournalEntryInput>;
    @Field(() => UserBookWhereInput, {nullable:true})
    @Type(() => UserBookWhereInput)
    where?: InstanceType<typeof UserBookWhereInput>;
}

@InputType()
export class UserBookUpsertWithoutReviewsInput {
    @Field(() => UserBookUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => UserBookUpdateWithoutReviewsInput)
    update!: InstanceType<typeof UserBookUpdateWithoutReviewsInput>;
    @Field(() => UserBookCreateWithoutReviewsInput, {nullable:false})
    @Type(() => UserBookCreateWithoutReviewsInput)
    create!: InstanceType<typeof UserBookCreateWithoutReviewsInput>;
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
    @Field(() => StringFilter, {nullable:true})
    bookId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    status?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    rating?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => BookRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookRelationFilter>;
    @Field(() => UserBookShelvesListRelationFilter, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesListRelationFilter>;
    @Field(() => JournalEntryListRelationFilter, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryListRelationFilter>;
    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: InstanceType<typeof ReviewListRelationFilter>;
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
    @Field(() => StringFilter, {nullable:true})
    status?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    rating?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => BookRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookRelationFilter>;
    @Field(() => UserBookShelvesListRelationFilter, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesListRelationFilter>;
    @Field(() => JournalEntryListRelationFilter, {nullable:true})
    journalEntry?: InstanceType<typeof JournalEntryListRelationFilter>;
    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: InstanceType<typeof ReviewListRelationFilter>;
}

@ObjectType()
export class UserBook {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    bookId!: string;
    @Field(() => String, {nullable:false})
    status!: string;
    @Field(() => Int, {nullable:true,defaultValue:0})
    rating!: number | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
    @Field(() => Book, {nullable:true})
    book?: InstanceType<typeof Book> | null;
    @Field(() => [UserBookShelves], {nullable:true})
    shelves?: Array<UserBookShelves>;
    @Field(() => [JournalEntry], {nullable:true})
    journalEntry?: Array<JournalEntry>;
    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;
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
    distinct?: Array<keyof typeof UserBookShelvesScalarFieldEnum>;
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
    distinct?: Array<keyof typeof UserBookShelvesScalarFieldEnum>;
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
    distinct?: Array<keyof typeof UserBookShelvesScalarFieldEnum>;
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
    userBookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    shelfId?: keyof typeof SortOrder;
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
    by!: Array<keyof typeof UserBookShelvesScalarFieldEnum>;
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
    userBookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    shelfId?: keyof typeof SortOrder;
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
    userBookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    shelfId?: keyof typeof SortOrder;
}

@InputType()
export class UserBookShelvesOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class UserBookShelvesOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    userBookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    shelfId?: keyof typeof SortOrder;
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
    userBookId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    shelfId?: keyof typeof SortOrder;
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
    @Field(() => UserBookRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookRelationFilter>;
    @Field(() => ShelfRelationFilter, {nullable:true})
    shelf?: InstanceType<typeof ShelfRelationFilter>;
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
    @Field(() => UserBookRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookRelationFilter>;
    @Field(() => ShelfRelationFilter, {nullable:true})
    shelf?: InstanceType<typeof ShelfRelationFilter>;
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
