var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <ul className="nav-list">
                    <li>
                        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink><br/>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link><br/>
                    </li>
                    <li>
                        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
                    </li>
                </ul>
                
            </div>
        );
    }
});
module.exports = Nav