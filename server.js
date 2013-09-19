var flatiron = require('flatiron')
  , app = flatiron.app
  , webshot = require('webshot')
  , url = require('url');

app.use(flatiron.plugins.http);

app.router.get('/', function(request, response) {

  var self = this;

  options = {
  	screenSize: {
	    width: 1024
	  , height: 768
	 }
  };
  
  webshot(self.req.query.url, options, function(err, renderStream) {
    renderStream.pipe(self.res);
  });
});

app.start(8888);