## Install all project dependencies:
`npm run link-modules` (old style):
please use local packages.json for latest modules:
npm install

## Run tests on local dev machine
`npm test`

## Runs tests on other environment such as CI box
`npm run ciTest`

## Runs tests on other environment such as SIT1
`npm run sit1`

## Tips and tricks

- All commands above are run from the api-tests folder
- If you need to skip a test or tests, do it.skip() or describe.skip()
- If you need to run a particular test or tests, do it.only() or describe.only()
