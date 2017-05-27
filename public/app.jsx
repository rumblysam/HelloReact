var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var first_name = 'Sam';

ReactDOM.render(
  <Greeter name={first_name} message="Hello"/>,
  document.getElementById('app')
);
//Greeter pass message
//GreeterMessage access props and set it to a variable and show variable inside paragraph tag