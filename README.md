# node-webshot-server
Node based server for taking webshots using [node-webshot](https://github.com/brenden/node-webshot). Includes heroku config.

## Getting started

    $ npm install
    $ node server.js
    open your browser at http://localhost:5000?url=google.com

## Heroku

    $ heroku create [name]
    $ heroku config:add LD_LIBRARY_PATH=/usr/local/lib:/usr/lib:/lib:/app/vendor/phantomjs/lib
    $ heroku config:add PATH=/usr/local/bin:/usr/bin:/bin:/app/vendor/phantomjs/bin
    $ git push heroku master
    open your browser at http://appname.herokuapps.com?url=google.com

## Service options

### Resizing
    http://localhost:5000?url=google.com&width=500
    http://localhost:5000?url=google.com&height=300
    http://localhost:5000?url=google.com&width=200&height=400
