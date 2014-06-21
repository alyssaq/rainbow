# Rainbow

#### Play here: https://alyssaq.github.io/rainbow

![rainbow.png](rainbow.png)

RGB color mixer and picker.
Go wild and see rgb turn to hex.

## Building

1. Install [Node.js & NPM](http://nodejs.org/)
1. Install [Grunt.js](https://github.com/gruntjs/grunt/wiki/Getting-started)
1. Run `npm install` to fetch all build dependencies.

## Running

#### Development

1. Run `grunt dev`
1. Open <http://localhost:9000/>

#### Production

1. Run `grunt prod`
1. Open <http://localhost:9002/>

#### Publish to gh-pages

1. Run `grunt publish`
2. It will create a `ghpages` folder. Edit index.html and remove js and css folder.
3. Test it by starting a HTTP server in the `ghpages` folder. E.g python -m SimpleHTTPServer
4. If all good, run `grunt ghpages` to push to gh-pages

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
MIT