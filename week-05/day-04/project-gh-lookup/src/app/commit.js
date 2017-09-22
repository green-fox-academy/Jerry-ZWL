var React = require('react');
require('./scss/commit.scss');
var Commit = React.createClass({
    render:function(){
        return(
            <div className = "commit">
            <p className = "commit-name">{this.props.commit}</p>
            <p className = "commit-lastUpdate">{this.props.commitLastUpdate}</p>
            </div>
        );
    },
});

module.exports = Commit;