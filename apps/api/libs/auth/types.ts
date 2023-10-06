import { Request } from 'express';
import { User } from '../generated-db-types';

export type JwtPayload = {
  email: string;
  userId: string;
};

export type JwtPayloadWithRefreshToken = JwtPayload & {
  refreshToken: string;
};

interface RequestWithUser extends Request {
  user: User;
}

export default RequestWithUser;
