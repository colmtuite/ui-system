const path = require('path');

module.exports = {
  plugins: [
    [
      'postcss-import',
      {
        path: [path.relative(process.cwd(), '../')],
      },
    ],
    require.resolve('./postcss-workds'),
    'postcss-hover-media-feature',
    'postcss-custom-media',
  ],
};
