/* eslint-disable import/prefer-default-export */
import React from 'react';
import './src/styles/index.css';
import { StoreContextProvider } from './src/store';

export const wrapRootElement = ({ element }) => (
  <StoreContextProvider>{element}</StoreContextProvider>
);
