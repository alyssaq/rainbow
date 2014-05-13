module.exports = {
  development: {
    path: 'http://localhost:' +
      '<%= connect.development.options.port %>/'
  },
  production: {
    path: 'http://localhost:' +
      '<%= connect.production.options.port %>/'
  }
};