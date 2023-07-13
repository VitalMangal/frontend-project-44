#!/usr/bin/env node

import {greeting} from '../src/cli.js';
import {isNumEven} from '../src/isNumEven.js';
import {rndm} from '../src/rndm.js';
import {evenLogic} from '../src/evenLogic.js';


console.log('brain-even');
console.log('Welcome to the Brain Games!');
greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenLogic();