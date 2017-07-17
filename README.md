# living-color-app

VueJS web application for "Living Color" interactive touchscreen exhibit.

## Installation

Clone living-color-app repo locally.

Unpack node modules via Yarn:

```
$ cd living-color-app
$ yarn
```

Find fonts.zip, images.zip, movies.zip files in team Google Drive:
```
+-- DME: Web & Interactive
|   +-- Exhibit Interactives
|   |   +-- Living Color App
|   |   |   +-- Technical
```

Unzip and copy 'fonts,' 'images,' and 'movies' directories into local root
'static' directory.

## Testing

A testing framework is set up for the project, but currently there is only a
trivial placeholder unit test in place.

```
yarn test
```

## Development and Production Builds

Webpack dev and build init scripts in package.json.

```
yarn dev
yarn build
```

## Deploy Notes

The deploy script deletes s3://living-color.calacademy.org content and copies
local dist folder contents to s3://living-color.calacademy.org.

```
yarn deploy
```
