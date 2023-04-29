#!/usr/bin/env node

import {
  gameRules,
  generateNewQuestion,
  generateCorrectAnswer,
} from '../games/brain-even-game.js';
import runGame from '../src/index.js';

runGame(gameRules, generateNewQuestion, generateCorrectAnswer);
