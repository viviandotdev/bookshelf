export default () => ({
  isProd: process.env.NODE_ENV === 'production',
  api: {
    port: Number(process.env.BOOKCUE_API_PORT),
  },
  database: {
    url: process.env.BOOKCUE_DB_URL,
  },
  jwt: {
    access: process.env.JWT_ACCESS_SECRET,
    refresh: process.env.JWT_REFRESH_SECRET,
    accessExpiration: process.env.JWT_ACCESS_EXPIRATION_TIME,
    refreshExpiration: process.env.JWT_REFRESH_EXPIRATION_TIME,
  },
});
