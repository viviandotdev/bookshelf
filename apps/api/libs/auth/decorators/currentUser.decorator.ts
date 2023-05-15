import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { JwtPayloadWithRefreshToken } from '../types';
import { GqlExecutionContext } from '@nestjs/graphql';

export const getCurrentUserByContext = (
  data: keyof JwtPayloadWithRefreshToken | undefined,
  context: ExecutionContext,
) => {
  const ctx = GqlExecutionContext.create(context);
  const req = ctx.getContext().req;
  if (data) {
    return req.user;
  } else {
    const accessToken = req.headers.authorization.split(' ')[1];
    return accessToken;
  }
};

export const CurrentUser = createParamDecorator(
  (
    data: keyof JwtPayloadWithRefreshToken | undefined,
    context: ExecutionContext,
  ) => getCurrentUserByContext(data, context),
);
