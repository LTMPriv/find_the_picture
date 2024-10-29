// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  apiUrl: 'http://localhost:4000',
  firebase: {
    apiKey: "AIzaSyDKBciQZ9jsyFn8NmEs4hknZwxQqtK_1MA",
    authDomain: "find-the-picture-a65cd.firebaseapp.com",
    projectId: "find-the-picture-a65cd",
    storageBucket: "find-the-picture-a65cd.appspot.com",
    messagingSenderId: "947079567364",
    appId: "1:947079567364:web:17f3ccbfcd5ab0b6b43d51"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
