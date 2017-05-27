var React = require('react');
var ReactDOM = require('react-dom');

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    

    if (name.length > 0) {
      this.refs.name.value = '';
        updates.name = name;
      
    }
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render:function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div><input type="text" ref="name" placeholder="enter name"/><br/></div>
        <div><textarea type="text" rows="4" col="50" ref="message" placeholder="enter message"></textarea><br/></div>
        <button>Submit</button>
      </form>
    );
  }
});
module.exports = GreeterForm;