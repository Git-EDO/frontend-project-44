#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { showMessage } from '../src/utils.js';

showMessage('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);
