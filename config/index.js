import * as _links from './links';  // Webstorm can not detect direct exports

export const links = _links;
export const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
export const googleMap = {
  API_KEY: 'AIzaSyCHMeBTi1jOPIx_L_oROVvBo4lbHwciZPg',
};
