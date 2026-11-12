# Mekaela Stevenson — Agricultural Data Scientist

Portfolio website built with React and Create React App.

## Run locally

```sh
npm install
npm start
```

The app uses a local `src/firestore.js` configuration file for its blog data.
That file is excluded from Git, so it must be present in your local checkout to
build the site.

## Deploy to GitHub Pages

The source HTML template is [`public/index.html`](./public/index.html). Running
the production build generates the deployable `build/index.html` along with the
bundled assets. The configured site URL is
<https://mekaela.github.io/react-portfolio/>.

1. Push the source changes to the `main` branch.
2. Ensure the local `src/firestore.js` configuration file is present.
3. Run:

   ```sh
   npm run deploy
   ```

   The `predeploy` script builds the site; `gh-pages` publishes the `build`
   directory to the `gh-pages` branch.
4. In the repository's **Settings → Pages**, select **Deploy from a branch**,
   then choose the `gh-pages` branch and `/ (root)` folder.

The app uses hash-based routes, so portfolio, blog, and FAQ pages work from the
GitHub Pages project URL without additional server-side routing configuration.

## Other scripts

- `npm test` runs the test suite.
- `npm run build` creates a production build in `build/`.
