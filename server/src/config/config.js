module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'dbcollect',
    user: process.env.DB_USER || 'dbcollect',
    password: process.env.DB_PASS || 'dbcollect',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'localhost',
      storage: './dbcollect.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
