// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDAjf2Ited7zpOyPLwMg9s1flV14Ft1oyk',
    authDomain: 'angular-firebase-devsgt.firebaseapp.com',
    databaseURL: 'https://angular-firebase-devsgt.firebaseio.com',
    projectId: 'angular-firebase-devsgt',
    storageBucket: 'angular-firebase-devsgt.appspot.com',
    messagingSenderId: '634174505890'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
