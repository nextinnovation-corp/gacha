import * as _links from './links';  // Webstorm can not detect direct exports

export const links = _links;
export const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
