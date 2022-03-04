import { devices } from '@playwright/test'

const config = {
  testDir:"src/tests/playwright",
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: 'on-first-retry',
    viewport: { width: 2080, height: 2020 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry'
  },
  webServer: {
    command: 'npm start',
    url:"http://localhost:3000/",
    timeout: 120 * 1000,
    reuseExistingServer: false
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
}

export default config;