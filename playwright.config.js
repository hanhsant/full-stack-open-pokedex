import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './test/e2e-tests',
  webServer: {
    command: 'npm start',
    url: 'http://localhost:8080',
    timeout: 10 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:8080/',
  },
})