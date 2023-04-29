#!/usr/bin/env node

import runGame from '../src/index.js';
import {
  gameRules,
  generateNewQuestion,
  generateCorrectAnswer,
} from '../games/brain-calc-game.js';

runGame(gameRules, generateNewQuestion, generateCorrectAnswer);
