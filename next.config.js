module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^cardinal$/,
        contextRegExp: /./,
      })
    );
  },
};
