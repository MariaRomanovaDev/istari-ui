import registerRequireContextHook from "babel-plugin-require-context-hook/register";
import 'jest-styled-components';
import 'regenerator-runtime/runtime';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

registerRequireContextHook();

ReactDOM.createPortal = jest.fn((element, node) => {
  return element;
});

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn()
  };
});

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  function(callback) {
    setTimeout(callback, 0);
  };
