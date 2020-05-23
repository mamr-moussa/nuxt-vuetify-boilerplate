const { env } = process
const variables = {
  development: {
    baseURL: 'https://api-dot-bites-development.appspot.com',
    port: 4000
  },
  production: {
    baseURL: 'https://api.server.com',
    port: 4000
  }
}
module.exports = variables[env.NODE_ENV] || variables.development
