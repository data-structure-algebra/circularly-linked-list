# Usage

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

First, require the polyfill at the entry point of your application
```js
require( 'regenerator-runtime/runtime' );
// or
import 'regenerator-runtime/runtime.js' ;
```

Then, import the library where needed
```js
const cll = require( '@data-structure-algebra/circularly-linked-list' ) ;
// or
import * as cll from '@data-structure-algebra/circularly-linked-list' ;
```
