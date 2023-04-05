declare namespace NodeJS {
  export interface ProcessEnv {
    STRIPE_PUBLISH_KEY: string;
    STRIPE_SECRET_KEY: string;
  }
}

declare module "next-stripe";
declare module "next-stripe/client";
