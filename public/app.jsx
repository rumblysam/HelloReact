var GreeterMessage = React.createClass({
  render:function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});
//this is a component
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

var first_name = 'Sam';

ReactDOM.render(
  <Greeter name={first_name} message="Hello"/>,
  document.getElementById('app')
);
//Greeter pass message
//GreeterMessage access props and set it to a variable and show variable inside paragraph tag