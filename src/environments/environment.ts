// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseUrl = 'http://192.168.0.202:8080';
export const environment = {
  apiUrl: baseUrl,
  production: true,
  PUBLIC: {
    TASK_API: baseUrl+"/tasks",
  },
 
  FRONTEND_ROUTES: {
    LIST: "",
    ADD:"add",
    EDIT:"edit",
    DETAILS:"details",
  },
};


