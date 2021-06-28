# @ajmchambers/pouchdb-prebuilt

This is a prebuilt browser-ready version of PouchDB, as well as `pouchdb-find` and `pouchdb-live-find` plugins in ES module.

It's based on [@svouch/pouchdb](https://github.com/rixo/svouch/tree/main/pouchdb), but includes typescript definitions.

This package is a convenience to be able to use PouchDB in the browser easily, without having to butcher your build config.

```js
import { PouchDB, find, liveFind } from '@ajmchambers/pouchdb-prebuilt'

PouchDB.plugin(find)
PouchDB.plugin(liveFind)

// do something with PouchDB!
```