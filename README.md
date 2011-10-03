# Banner

Banner creates headers automatically, by parsing `package.json`,
the [npm](http://npmjs.org) standard for versioning nodejs packages. It also
uses [git describe](http://ds.io/qUSuQz) to add a git tag & revision.

It's used in [Wax](https://github.com/mapbox/wax) to eliminate one of the
headaches of distributed-client-library development.

Include it in your devDependencies, like

    "devDependencies": {
      "banner": "0.0.x"
    }

Then use it in a makefile, like

    BANNER = ./node_modules/.bin/banner

    dist_setup:
        mkdir dist
        $(BANNER) package.json > dist/header.js

And then you'll have less of a headache figuring out what version of a
client-side library you, or someone else, is using, since every file has
a concise comment describing the specific version and, if it's a development
build beyond a certain tag, the exact git tree it was built from.

Minification tools like [uglifyjs](https://github.com/mishoo/UglifyJS) maintain
the first comment in a file, so even minified versions will retain this
versioning information.

## Authors

* Tom MacWright (tmcw)
