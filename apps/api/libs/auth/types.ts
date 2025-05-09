import { Request } from 'express';
import { User } from '../../src/generated-db-types';

export type JwtPayload = {
    email: string;
    userId: string;
    username: string;
    exp?: number;
};

export type JwtPayloadWithRefreshToken = JwtPayload & {
    refreshToken: string;
};

interface RequestWithUser extends Request {
    user: User;
}

export default RequestWithUser;
