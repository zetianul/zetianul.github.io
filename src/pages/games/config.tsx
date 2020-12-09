import React from 'react';
import Tetris from './tetris';
import TwoZereFourEight from './2048';

export const games = [
  {
    name: '2048',
    component: <TwoZereFourEight />
  },
  {
    name: 'tetris', 
    component: <Tetris />
  },
]