import Head from 'next/head'
import React from 'react'

import { APP_NAME, DESCRIPTION, SHORT_DESCRIPTION, URL } from 'common/constants'

import faviconSrc from './assets/favicon.png'

const SEO = () => {
  return (
    <Head>
      <link rel="shortcut icon" href={faviconSrc} />

      <title>{`${APP_NAME} - ${SHORT_DESCRIPTION}`}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="image" content={`${URL}static/share.png`} />

      <meta property="og:url" content={URL} />
      <meta property="og:title" content={APP_NAME} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={`${URL}static/share.png`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={APP_NAME} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={`${URL}static/share.png`} />
    </Head>
  )
}

export default SEO
