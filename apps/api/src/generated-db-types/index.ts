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
    dateStarted = "dateStarted",
    dateFinished = "dateFinished"
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

export enum BookScalarFieldEnum {
    id = "id",
    title = "title",
    author = "author",
    pubDate = "pubDate",
    publisher = "publisher",
    coverImage = "coverImage",
    description = "description",
    pageNum = "pageNum",
    categories = "categories"
}

registerEnumType(BookScalarFieldEnum, { name: 'BookScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
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
    pageNum?: true;
}

@ObjectType()
export class BookAvgAggregate {
    @Field(() => Float, {nullable:true})
    pageNum?: number;
}

@InputType()
export class BookAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    pageNum?: keyof typeof SortOrder;
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
    pubDate?: true;
    @Field(() => Boolean, {nullable:true})
    publisher?: true;
    @Field(() => Boolean, {nullable:true})
    coverImage?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    pageNum?: true;
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
    pubDate!: number;
    @Field(() => Int, {nullable:false})
    publisher!: number;
    @Field(() => Int, {nullable:false})
    coverImage!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    pageNum!: number;
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
    pubDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    publisher?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    coverImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pageNum?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categories?: keyof typeof SortOrder;
}

@ObjectType()
export class BookCount {
    @Field(() => Int, {nullable:false})
    userBook?: number;
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
    pubDate?: string;
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
    pageNum?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
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
export class BookCreateOrConnectWithoutUserBookInput {
    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id'>;
    @Field(() => BookCreateWithoutUserBookInput, {nullable:false})
    @Type(() => BookCreateWithoutUserBookInput)
    create!: InstanceType<typeof BookCreateWithoutUserBookInput>;
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
    pubDate?: string;
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
    pageNum?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
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
    pubDate?: string;
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
    pageNum?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => UserBookCreateNestedManyWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookCreateNestedManyWithoutBookInput>;
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
    pubDate?: string;
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
    pageNum?: number;
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
    pubDate?: true;
    @Field(() => Boolean, {nullable:true})
    publisher?: true;
    @Field(() => Boolean, {nullable:true})
    coverImage?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    pageNum?: true;
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
    pubDate?: string;
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
    pageNum?: number;
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
    pubDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    publisher?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    coverImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pageNum?: keyof typeof SortOrder;
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
    pubDate?: true;
    @Field(() => Boolean, {nullable:true})
    publisher?: true;
    @Field(() => Boolean, {nullable:true})
    coverImage?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    pageNum?: true;
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
    pubDate?: string;
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
    pageNum?: number;
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
    pubDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    publisher?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    coverImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pageNum?: keyof typeof SortOrder;
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
    pubDate?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    publisher?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    coverImage?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    pageNum?: InstanceType<typeof SortOrderInput>;
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
    pubDate?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    publisher?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    coverImage?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    pageNum?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    categories?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserBookOrderByRelationAggregateInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookOrderByRelationAggregateInput>;
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
    pubDate?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    publisher?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    coverImage?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pageNum?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categories?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class BookSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    pageNum?: true;
}

@ObjectType()
export class BookSumAggregate {
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    pageNum?: number;
}

@InputType()
export class BookSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    pageNum?: keyof typeof SortOrder;
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
    pubDate?: string;
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
    pageNum?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
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
    pubDate?: string;
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
    pageNum?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => UserBookUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedCreateNestedManyWithoutBookInput>;
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
    pubDate?: string;
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
    pageNum?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
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
    pubDate?: string;
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
    pageNum?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
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
    pubDate?: string;
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
    pageNum?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => UserBookUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUncheckedUpdateManyWithoutBookNestedInput>;
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
    pubDate?: string;
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
    pageNum?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
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
export class BookUpdateToOneWithWhereWithoutUserBookInput {
    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: InstanceType<typeof BookWhereInput>;
    @Field(() => BookUpdateWithoutUserBookInput, {nullable:false})
    @Type(() => BookUpdateWithoutUserBookInput)
    data!: InstanceType<typeof BookUpdateWithoutUserBookInput>;
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
    pubDate?: string;
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
    pageNum?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
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
    pubDate?: string;
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
    pageNum?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categories?: string;
    @Field(() => UserBookUpdateManyWithoutBookNestedInput, {nullable:true})
    userBook?: InstanceType<typeof UserBookUpdateManyWithoutBookNestedInput>;
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
    pubDate?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    publisher?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    coverImage?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    pageNum?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    categories?: InstanceType<typeof StringFilter>;
    @Field(() => UserBookListRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookListRelationFilter>;
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
    pubDate?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    publisher?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    coverImage?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    pageNum?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    categories?: InstanceType<typeof StringFilter>;
    @Field(() => UserBookListRelationFilter, {nullable:true})
    userBook?: InstanceType<typeof UserBookListRelationFilter>;
}

@ObjectType()
export class Book {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    author!: string | null;
    @Field(() => String, {nullable:true})
    pubDate!: string | null;
    @Field(() => String, {nullable:true})
    publisher!: string | null;
    @Field(() => String, {nullable:true})
    coverImage!: string | null;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => Int, {nullable:true})
    pageNum!: number | null;
    @Field(() => String, {nullable:true})
    categories!: string | null;
    @Field(() => [UserBook], {nullable:true})
    userBook?: Array<UserBook>;
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
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    hashedRefreshToken?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
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
    hashedRefreshToken?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
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
    hashedRefreshToken?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
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
    dateStarted?: true;
    @Field(() => Boolean, {nullable:true})
    dateFinished?: true;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating!: number;
    @Field(() => Int, {nullable:false})
    dateStarted!: number;
    @Field(() => Int, {nullable:false})
    dateFinished!: number;
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
    dateStarted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateFinished?: keyof typeof SortOrder;
}

@ObjectType()
export class UserBookCount {
    @Field(() => Int, {nullable:false})
    shelves?: number;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => UserCreateNestedOneWithoutUserBooksInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutUserBookInput>;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => UserCreateNestedOneWithoutUserBooksInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
    @Field(() => BookCreateNestedOneWithoutUserBookInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => BookCreateNestedOneWithoutUserBookInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutUserBookInput>;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => UserCreateNestedOneWithoutUserBooksInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutUserBooksInput>;
    @Field(() => BookCreateNestedOneWithoutUserBookInput, {nullable:true})
    book?: InstanceType<typeof BookCreateNestedOneWithoutUserBookInput>;
    @Field(() => UserBookShelvesCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesCreateNestedManyWithoutUserBookInput>;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
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
    dateStarted?: true;
    @Field(() => Boolean, {nullable:true})
    dateFinished?: true;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
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
    dateStarted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateFinished?: keyof typeof SortOrder;
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
    dateStarted?: true;
    @Field(() => Boolean, {nullable:true})
    dateFinished?: true;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
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
    dateStarted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateFinished?: keyof typeof SortOrder;
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
    @Field(() => SortOrderInput, {nullable:true})
    dateStarted?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    dateFinished?: InstanceType<typeof SortOrderInput>;
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
    @Field(() => SortOrderInput, {nullable:true})
    dateStarted?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    dateFinished?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => BookOrderByWithRelationInput, {nullable:true})
    book?: InstanceType<typeof BookOrderByWithRelationInput>;
    @Field(() => UserBookShelvesOrderByRelationAggregateInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesOrderByRelationAggregateInput>;
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
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    dateStarted?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    dateFinished?: InstanceType<typeof StringWithAggregatesFilter>;
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
    @Field(() => StringFilter, {nullable:true})
    dateStarted?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    dateFinished?: InstanceType<typeof StringFilter>;
}

@InputType()
export class UserBookSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    rating?: true;
}

@ObjectType()
export class UserBookSumAggregate {
    @Field(() => Int, {nullable:true})
    @Validator.Min(1)
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput>;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput>;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedCreateNestedManyWithoutUserBookInput>;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput>;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput>;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUncheckedUpdateManyWithoutUserBookNestedInput>;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => UserUpdateOneWithoutUserBooksNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutUserBooksNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => UserUpdateOneWithoutUserBooksNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutUserBooksNestedInput>;
    @Field(() => BookUpdateOneWithoutUserBookNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutUserBookNestedInput>;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => BookUpdateOneWithoutUserBookNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutUserBookNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
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
    @Validator.Min(1)
    @Validator.Max(5)
    @Validator.IsInt()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.ValidateNested()
    dateStarted?: string;
    @Field(() => String, {nullable:true})
    dateFinished?: string;
    @Field(() => UserUpdateOneWithoutUserBooksNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutUserBooksNestedInput>;
    @Field(() => BookUpdateOneWithoutUserBookNestedInput, {nullable:true})
    book?: InstanceType<typeof BookUpdateOneWithoutUserBookNestedInput>;
    @Field(() => UserBookShelvesUpdateManyWithoutUserBookNestedInput, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
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
    @Field(() => StringFilter, {nullable:true})
    dateStarted?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    dateFinished?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => BookRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookRelationFilter>;
    @Field(() => UserBookShelvesListRelationFilter, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesListRelationFilter>;
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
    @Field(() => StringFilter, {nullable:true})
    dateStarted?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    dateFinished?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => BookRelationFilter, {nullable:true})
    book?: InstanceType<typeof BookRelationFilter>;
    @Field(() => UserBookShelvesListRelationFilter, {nullable:true})
    shelves?: InstanceType<typeof UserBookShelvesListRelationFilter>;
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
    @Field(() => Int, {nullable:true})
    rating!: number | null;
    @Field(() => String, {nullable:true})
    dateStarted!: string | null;
    @Field(() => String, {nullable:true})
    dateFinished!: string | null;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
    @Field(() => Book, {nullable:true})
    book?: InstanceType<typeof Book> | null;
    @Field(() => [UserBookShelves], {nullable:true})
    shelves?: Array<UserBookShelves>;
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
