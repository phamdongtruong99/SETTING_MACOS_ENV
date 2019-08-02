# STEP FOR INIT PROJECT WITH HEROKU

- Make package.json like this:

```javascript
{
  "name": "reactbot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "engines": {
    "node": "12.6.0",
    "npm": "6.9.0"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

- Heroku create
- Git commit
- git push heroku master
