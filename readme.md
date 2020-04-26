# @bemoje/arr-partition-index

Linear-time Partitioning. Runtime: O(n). Chooses a pivot and re-arrages the array so that everything on the left is <= pivot and everything on the right is > pivot

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-partition-index" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-partition-index" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-partition-index" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-partition-index.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-partition-index" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-partition-index.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-partition-index" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-partition-index" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-partition-index/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-partition-index" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-partition-index
npm install --save @bemoje/arr-partition-index
npm install --save-dev @bemoje/arr-partition-index
```

## Usage

```javascript
import arrPartitionIndex from '@bemoje/arr-partition-index'

const arr = [1, 2, 3, 4]

arrPartitionIndex(arr, 1, 2)
//=> 1

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrPartitionIndex

Linear-time Partitioning. Runtime: O(n). Chooses a pivot and re-arrages the array so that everything on the left is &lt;= pivot and everything on the right is > pivot

##### Parameters

-   `arr` **[Array][3]** 

-   `lo` **[number][4]** start index

-   `hi` **[number][4]** end index

##### Returns
**[number][4]** pivot index

[1]: #arrpartitionindex

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number