# stylelint-config-crishpeen-order

[![NPM version](http://img.shields.io/npm/v/@crishpeen/stylelint-config-crishpeen-order.svg)](https://www.npmjs.org/package/@crishpeen/stylelint-config-crishpeen-order)
[![Build Status](https://travis-ci.org/crishpeen/stylelint-config-crishpeen-order.svg?branch=master)](https://travis-ci.org/crishpeen/stylelint-config-crishpeen-order)
[![dependency Status](https://david-dm.org/crishpeen/stylelint-config-crishpeen-order/status.svg)](https://david-dm.org/crishpeen/stylelint-config-crishpeen-order)
[![peerDependency Status](https://david-dm.org/crishpeen/stylelint-config-crishpeen-order/peer-status.svg)](https://david-dm.org/crishpeen/stylelint-config-crishpeen-order?type=peer)
[![devDependency Status](https://david-dm.org/crishpeen/stylelint-config-crishpeen-order/dev-status.svg)](https://david-dm.org/crishpeen/stylelint-config-crishpeen-order?type=dev)

Crishpeen' shareable config of properties order for
[Stylelint](https://github.com/stylelint/stylelint).

This config allows linting properties by defined [order](./index.js). It requires
[Stylelint](https://github.com/stylelint/stylelint) and its
[stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin.

1. Install `stylelint`, `stylelint-order` and this config:

    ```sh
    $ npm install --save-dev stylelint stylelint-order @crishpeen/stylelint-config-crishpeen-order
    ```

2. Add `"extends": "@crishpeen/stylelint-config-crishpeen-order"` to your `.stylelintrc` file.
