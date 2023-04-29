#!/usr/bin/env node

import {
  gameRules,
  generateNewQuestion,
  generateCorrectAnswer,
} from '../games/brain-prime-game.js';
import runGame from '../src/index.js';

runGame(gameRules, generateNewQuestion, generateCorrectAnswer);
