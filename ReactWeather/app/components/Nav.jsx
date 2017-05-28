var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Nav bar</h2>
                <Link to="/">Get Weather</Link><br/>
                <Link to="/about">About</Link><br/>
                <Link to="/examples">Example</Link>
            </div>
        );
    }
});
module.exports = Nav