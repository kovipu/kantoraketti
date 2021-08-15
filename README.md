# Kantoraketti

This is a Jamstack website built to be used by organizations.
Work in progress.

Technologies used
* Gatsby
* Contentful
* Tailwind

## How to develop

Place secrets in .env
```
export CONTENTFUL_ACCESS_TOKEN=<token>
export CONTENTFUL_SPACE_ID=<space id>
```

Run gatsby dev server
```
source .env
npm install
npm start
```

## Import/export Contentful content model

These require you to have contentful-cli installed.

To import a content model run
```
contentful space import\
  --space-id <SPACE_ID>\
  --management-token <MANAGEMENT_TOKEN>\
  --content-file content-model.json
```

To export a content model run
```
contentful space export\
  --space-id <SPACE_ID>\
  --management-token <MANAGEMENT_TOKEN>\
  --skip-webhooks\
  --skip-roles\
  --content-file content-model.json
```

To export only the content model run
```
contentful space export\
  --space-id <SPACE_ID>\
  --management-token <MANAGEMENT_TOKEN>\
  --skip-webhooks\
  --skip-content\
  --skip-roles\
  --content-file content-model.json