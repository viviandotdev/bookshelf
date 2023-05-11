import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ID } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    hashedPassword = "hashedPassword",
    hashedRefreshToken = "hashedRefreshToken",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
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

registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

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
    where!: InstanceType<typeof UserWhereUniqueInput>;
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
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
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
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
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
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
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
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
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
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
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
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
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
}
