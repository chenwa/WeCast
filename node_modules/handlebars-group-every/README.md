# handlebars-group-every
Helpers for handlebars and express to conditionally render open and closing tags in order to group list items

## Installation
With npm
```bash
npm install handlebars-group-every
```
### Or
Copy the functions from [index.js](https://github.com/stsourlidakis/handlebars-group-every/blob/master/index.js) and add them to your helpers object
```javascript
var hbs = exphbs.create({
	defaultLayout: 'main',
	partialsDir: ['views/partials/'],
	helpers: {
		ifGroupEveryOpen: function (index, every, options) {
			if( index%every === 0 ){
				return options.fn(this);
			} else {
				return options.inverse(this);
			}
		},
		ifGroupEveryClose: function (index, every, options) {
			if( options.data.last || (index + 1)%every === 0 ){
				return options.fn(this);
			} else {
				return options.inverse(this);
			}
		}
	}
});
```

## Usage
### With [Express Handlebars](https://github.com/ericf/express-handlebars)
```javascript
const groupEvery = require('handlebars-group-every');

hbs.handlebars.registerHelper('ifGroupEveryOpen', groupEvery.ifGroupEveryOpen);
hbs.handlebars.registerHelper('ifGroupEveryClose', groupEvery.ifGroupEveryClose);
```

```handlebars
<!-- will wrap every 3 items in <div class="row"> </div> -->
{{#each listItems}}
	{{#ifGroupEveryOpen @index 3}}
	<div class="row">
	{{/ifGroupEveryOpen}}
	
		<div class="col-md-4">{{this}}</div>

	{{#ifGroupEveryClose @index 3}}
	</div>
	{{/ifGroupEveryClose}}
{{/each}}
```
