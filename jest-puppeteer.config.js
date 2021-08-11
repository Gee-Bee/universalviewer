module.exports = {
  launch: {
    headless: process.env.CI === 'true',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  server: {
    command: 'npm run server',
    port: 4444,
  },
  setupFilesAfterEnv: [
    './jest.setup.js'
  ]
}
