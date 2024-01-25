const path = require('path');

module.exports = {
  plugins: [
    [
      'postcss-import',
      {
        path: [path.relative(process.cwd(), '../')],
      },
    ],
    require.resolve('./postcss-ui-system'),
    'postcss-hover-media-feature',
    'postcss-custom-media',
  ],
};
