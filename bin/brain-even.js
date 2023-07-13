#!/usr/bin/env node

import {greeting} from '../src/cli.js';
import {evenLogic} from '../src/evenLogic.js';


console.log('brain-even');
console.log('Welcome to the Brain Games!');
const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenLogic(userName);
