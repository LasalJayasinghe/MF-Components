const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Add a CSS loader rule to handle CSS files
  singleSpaWebpackConfig.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  });

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
