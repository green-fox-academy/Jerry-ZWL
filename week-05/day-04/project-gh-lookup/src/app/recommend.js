var React = require('react');
require('./scss/recommend.scss');
var Recommended = React.createClass({
    render:function(){
        return(
            <div className = "recommend">
            <p className = "recommend-name">{this.props.commit}</p>
            </div>
        );
    },
});

module.exports = Recommended;