var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Sam',
  location: 'Austin'
};

var objTwo = {
  age: 28,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>new app</h1>,
  document.getElementById('app')
);