# Hope's React-Nginx Example App
This repo is made to test out a possible optimized app configuration. It was created with create-react-app, uses Express for API calls, and hosts static files on an nginx server.

## Starting the app
Configure an nginx server to point to the server.js file in the build folder of this repo. Before starting your nginx server, run `npm run build` from the root of the repo. Then start your nginx server. Once your nginx server is up, run `node server.js` from the root of the repo. This starts the express server. Finally, run `npm run start` to launch your react app on the nginx server.
