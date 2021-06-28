# @ajmchambers/pouchdb-prebuilt

This is a prebuilt browser-ready version of [PouchDB](https://www.npmjs.com/package/pouchdb-browser), as well as [`pouchdb-find`](https://www.npmjs.com/package/pouchdb-find) and [`pouchdb-live-find`](https://www.npmjs.com/package/pouchdb-live-find) plugins in ES module.

This package is a convenience to be able to use PouchDB in the browser easily, without having to butcher your build config.

It's based on [@svouch/pouchdb](https://github.com/rixo/svouch/tree/main/pouchdb), but has been modified to also include typescript definitions:

- [`@types/pouchdb-browser`](https://www.npmjs.com/package/@types/pouchdb-browser)
- [`@types/pouchdb-find`](https://www.npmjs.com/package/@types/pouchdb-find)
- [`@types/pouchdb-live-find`](https://www.npmjs.com/package/@types/pouchdb-live-find)

```js
import { PouchDB, find, liveFind } from '@ajmchambers/pouchdb-prebuilt'

PouchDB.plugin(find)
PouchDB.plugin(liveFind)

// do something with PouchDB!
```