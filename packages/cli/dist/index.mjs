#! /usr/bin/env node
import { createJiti } from "../../../node_modules/.pnpm/jiti@2.4.2/node_modules/jiti/lib/jiti.mjs";

const jiti = createJiti(import.meta.url, {
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
const _module = await jiti.import("D:/Personal Code/Npm/packages/cli/src/index.ts");

export default _module?.default ?? _module;