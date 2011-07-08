# Banner

creates headers automatically. Use it in a makefile, like

    dist_setup:
        mkdir dist
        $(BANNER) package.json > dist/header.js

And it'll be easier to keep track of versions and commits in
minified files. It tracks both `package.json` versions and git commits,
if you're in a git repo.
