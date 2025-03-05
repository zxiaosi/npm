#! /usr/bin/env node

import { handlePrompts } from './core';

class CLI {
  constructor() {}

  async run() {
    handlePrompts();
  }
}

new CLI().run();
