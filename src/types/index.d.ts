declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    INSTAGRAM_APP_ID: string;
    INSTAGRAM_APP_SECRET: string;
    REDIRECT_URI: string;
    AUTH_CODE: string 
    SHORT_LIVED_AT: string
    LONG_LIVED_AT: string
  }
}