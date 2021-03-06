module.exports = {
  outputDir: '{{output_dir}}',
  productionSourceMap: false,
  filenameHashing: true,
  devServer: {
    port: 8080
  },
  publicPath: '',
  configureWebpack: {
    output: {
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
      devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    resolve: {
      extensions: ['.js', '.vue']
    }
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
    const svgRule = config.module.rule('svg');
    svgRule.use('file-loader').tap(options => {
      options.name = 'img/flags/[contenthash].[ext]';
      return options;
    });
  },
  pwa: {
    name: '{{title}}',
    short_name: '{{short_name}}'
  }
};
