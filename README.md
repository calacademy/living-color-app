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

## Build Notes

The build script includes a process that compresses the distribution files in a
.zip file in project root. This file is excluded from git repo but is pushed to
AWS in Elastic Beanstalk deployment process.

## Development and Production Builds

Webpack build init scripts in package.json.

```
yarn dev
yarn build
```

## Deploy Notes

### .elasticbeanstalk/config.yml for eb cli deploy
This directory/file should be placed in project root. Zipped file for this asset
can be found in team technical documentation for project.

```
eb deploy
```
