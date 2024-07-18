// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseUrl = 'http://HP-HP-ELITEBOOK-840-G2';

export const environment = {
  apiUrl: baseUrl,
  production: true,
  PUBLIC: {
    TASK_API: baseUrl+"/public/login",
  },
 
  FRONTEND_ROUTES: {
    LIST: "",
    CREATE:"404",
    DETAILS:"login",
  },
};