import React from 'react';
import StyleContext from 'isomorphic-style-loader/StyleContext';

const insertCss = (...styles) => {
  return () => {};
};

const ClientCssContextMock = ({ children }) => (
  <StyleContext.Provider value={{ insertCss }}>{children}</StyleContext.Provider>
);

export default ClientCssContextMock;
