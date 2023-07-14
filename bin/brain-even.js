#!/usr/bin/env node

import {greeting} from '../src/cli.js';
import {gameBase} from '../src/index.js';


console.log('brain-even');
const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenLogic(userName);
