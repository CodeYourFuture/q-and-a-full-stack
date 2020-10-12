# Starter Kit

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

 - [x] Full stack ES8+ with [Babel]
 - [x] [Node] LTS support (verified working on 10.x, 12.x and 14.x LTS releases)
 - [x] [Express] server
 - [x] [React] client with [Webpack]
 - [x] Linting with [ESLint]
 - [x] Dev mode (watch modes for client and server, proxy to avoid CORS issues)
 - [x] Production build (single deployment artifact, React loaded via CDN)
 - [x] [Heroku Postgres] database
 - [x] [Heroku] deployment
 - [x] [Cloud Foundry] deployment
 - [x] [Docker] build

## Setup

Pick one member of the team to own the repository and pipeline. That person should do the following:

 1. Create a fork of this repository for the team, and rename it something appropriate for your project.
 2. Click the "Deploy to Heroku" button and create a Heroku account when prompted.
 3. Fill in the name of the application, select Europe, then click "Deploy App".
 4. Create a Heroku | Postgres | Hobby dev database. You have to connect the database to your existing application (Provision this add-on to an app).
 5. If everything goes fine, you will have a DATABASE_URL config variable, in your project settings | config vars. You don't need to set it manually, it will be picked up when your app runs in Heroku. Since it's set only in the Heroku, the default local settings will be applied otherwise (see db.js in case you need to change it !!)  
 6. Once it has deployed successfully, click the "Manage app" button to view the application details.
 7. Go to the "Deploy" tab, select "Connect to GitHub" and choose your repo.
 8. Click "Enable automatic deploys".

Whenever you commit to master (or e.g. merge a [pull request]) it will get automatically deployed!

You should now make sure all of the project team are [collaborators] on the repository.

## Scripts

Various scripts are provided in the package file, but many are helpers for other scripts; here are the ones you'll
commonly use:

 - `dev`: starts the frontend and backend in dev mode, with file watching (note that the backend runs on port 3100, and
    the frontend is proxied to it).
 - `lint`: runs ESLint against all the JavaScript in the project.
 - `serve`: builds and starts the app in production mode locally.

### Debugging

While running the dev mode using `npm run dev`, you can attach the Node debugger to the server process via port 9229.
If you're using VS Code, a debugging configuration is provided for this.

There is also a VS Code debugging configuration for the Chrome debugger, which requires the recommended Chrome
extension, for debugging the client application.

### Troubleshooting

See the guidance in the [wiki].

  [Babel]: https://babeljs.io/
  [Cloud Foundry]: https://www.cloudfoundry.org/
  [collaborators]: https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository
  [Docker]: https://www.docker.com
  [ESLint]: https://eslint.org/
  [Express]: https://expressjs.com/
  [Express router]: https://expressjs.com/en/guide/routing.html#express-router
  [Heroku]: https://www.heroku.com/
  [Heroku Postgres]: https://www.heroku.com/postgres
  [Node]: https://nodejs.org/en/
  [pull request]: https://help.github.com/en/articles/about-pull-requests
  [React]: https://reactjs.org/
  [Webpack]: https://webpack.js.org/
  [wiki]: https://github.com/textbook/starter-kit/wiki
