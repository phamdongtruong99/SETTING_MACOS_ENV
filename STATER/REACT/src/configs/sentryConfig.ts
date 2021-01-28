import { RewriteFrames } from '@sentry/integrations'

export const SentryCredentials = {
  dsn: process.env.REACT_APP_SENTRY_DSN as string,
  environment: (process.env.REACT_APP_NODE_ENV as string) || 'local',
  integrations: [new RewriteFrames()]
}
