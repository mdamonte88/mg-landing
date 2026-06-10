/* eslint no-console: 0 */

import path from 'path';
import express from 'express';
import opn from 'opn';
import { chalkInfo, chalkProcessing } from './chalkConfig';
import historyApiFallback from 'connect-history-api-fallback';

console.log(chalkProcessing('Opening production build...'));

const port = 3004;
const app = express();
const cacheTime = '1y';

const setStaticCacheHeaders = (res, filePath) => {
  const normalizedPath = filePath.replace(/\\/g, '/');

  if (normalizedPath.endsWith('index.html') || normalizedPath.endsWith('pwa.html')) {
    res.setHeader('Cache-Control', 'no-cache');
    return;
  }

  if (
    /\.(js|css|png|jpe?g|gif|svg|ico|mp4|webm|ogg|woff2?|ttf|eot)$/i
      .test(normalizedPath)
  ) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
};

app.use(historyApiFallback());
app.get(/\.js$|\.css$/, (req, res, next) => {
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(__dirname + '/../dist', {
  maxAge: cacheTime,
  immutable: true,
  setHeaders: setStaticCacheHeaders,
}));
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
  console.info(chalkInfo(`==> distServer onStart.`));
  if (err) {
    console.log(err);
  }
  console.info(chalkInfo(`==> Listening on port ${port}. Open up http://0.0.0.0:${port}/ in your browser.`));
  
  if (process.env.NODE_ENV !== 'production' && process.env.OPEN_BROWSER !== 'false') {
    opn(`http://0.0.0.0:${port}`);
  }
});
