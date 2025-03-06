#! /usr/bin/env node

import handlePrompts from './handlePrompts';

class CLI {
  constructor() {}

  async run() {
    handlePrompts();
  }
}

new CLI().run();
