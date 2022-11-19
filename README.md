1. install all packages using `yarn`
2. run `index.ts` using `yarn ts-node src/index.ts`

this error will occur

```bash
Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: No "exports" main defined in /home/satyam/Desktop/code/js-libp2p/node_modules/libp2p/package.json
    at new NodeError (node:internal/errors:393:5)
    at throwExportsNotFound (node:internal/modules/esm/resolve:358:9)
    at packageExportsResolve (node:internal/modules/esm/resolve:612:7)
    at resolveExports (node:internal/modules/cjs/loader:529:36)
    at Function.Module._findPath (node:internal/modules/cjs/loader:569:31)
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:981:27)
    at Function.Module._resolveFilename.sharedData.moduleResolveFilenameHook.installedValue [as _resolveFilename] (/home/satyam/Desktop/code/js-libp2p/node_modules/@cspotcode/source-map-support/source-map-support.js:811:30)
    at Function.Module._load (node:internal/modules/cjs/loader:841:27)
    at Module.require (node:internal/modules/cjs/loader:1061:19)
    at require (node:internal/modules/cjs/helpers:103:18) {
  code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```
