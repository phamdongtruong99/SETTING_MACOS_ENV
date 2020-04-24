const twit = require('twit');

export twitter = new twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET,
  timeout_ms: 60*1000,
})

// https://www.youtube.com/watch?v=zM0BiSb33h8