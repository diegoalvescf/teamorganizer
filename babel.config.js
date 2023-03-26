module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/presentation/jsx/components',
            '@routes': './src/main/routes',
            '@infra': './src/infra',
            '@screens': './src/presentation/jsx/screens',
            '@storage': './src/infra/database/storage',
            '@theme': './src/common/theme',
            '@utils': '/src/common/utils',
          },
        },
      ],
    ],
  };
};
