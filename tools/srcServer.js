/* eslint no-console: 0 */

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import opn from 'opn';
import config from '../webpack/webpack.config.dev';
import { chalkInfo } from './chalkConfig';

const port = 3004;
const app = express();

console.log(config.output.publicPath);
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../dist/index.html');

  middleware.waitUntilValid(() => {
    try {
      const html = middleware.fileSystem.readFileSync(indexPath);
      res.write(html);
      res.end();
    } catch (error) {
      console.error(error);
      res.status(500).send('Build is not ready yet. Please reload in a few seconds.');
    }
  });
});

app.listen(port, '0.0.0.0', (err) => {
  console.log('srcServer onStart');
  if (err) {
    console.log(err);
  }
  console.info(chalkInfo(`==> Listening on port ${port}. Open up http://0.0.0.0:${port}/ in your browser.`));
  opn(`http://localhost:${port}`);
});
