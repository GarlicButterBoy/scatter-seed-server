declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    REDIS_URL: string;
    PORT: string;
    SESSION_SECRET: string;
    HOSTNAME: string;
    WEATHER_API_KEY: string;
  }
}
