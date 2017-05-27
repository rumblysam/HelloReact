var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message'
    };
  },
  //method--pass anon function
  //a component can't update props
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },

 handleNewData: function (updates) {

    this.setState(updates);
  },

  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    //onSubmit attr is built-into React and expects
    //a function to get passed to it
    return (
      <div>
       
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});
module.exports = Greeter;