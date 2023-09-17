declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: "test" | "development" | "production";
      HOST?: string;
      PORT?: string;
      DATABASE_URL?: string;
      USER?: string;
      PASSWORD?: string;
      DB_HOST?: string;
      DB_PORT?: string;
      DATABASE?: string;
    }
  }
}

export {};
