#! /usr/bin/env node
const { createJiti } = require("../../../node_modules/.pnpm/jiti@2.4.2/node_modules/jiti/lib/jiti.cjs")

const jiti = createJiti(__filename, {
  "interopDefault": true,
  "alias": {
    "@zxiaosi/cli": "D:/Personal Code/Npm/packages/cli"
  },
  "transformOptions": {
    "babel": {
      "plugins": []
    }
  }
})

/** @type {import("D:/Personal Code/Npm/packages/cli/src/index")} */
module.exports = jiti("D:/Personal Code/Npm/packages/cli/src/index.ts")