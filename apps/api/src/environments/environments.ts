import * as process from 'node:process';

export const apiEnv: IApiEnv = {
  isProd: process.env.NODE_ENV === 'production',
  api: {
    port: Number(process.env.BOOKCUE_API_PORT),
  },
  db: {
    url: process.env.BOOKCUE_DB_URL,
  },
};

export interface IApiEnv {
  isProd: boolean;
  api: {
    port: number;
  };
  db: {
    url: string;
  };
}
