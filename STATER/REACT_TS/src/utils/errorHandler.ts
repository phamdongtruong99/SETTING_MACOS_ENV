import * as Sentry from '@sentry/browser'

export const errorHandler = (error: any) => {
  if (error?.code === 'UserNotFoundException')
    return {
      isAuthError: true
    }
  Sentry.captureException(error.originalError || error.error || error)
}
