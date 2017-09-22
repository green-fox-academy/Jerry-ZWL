var React = require('react');
require('./scss/repos.scss');
var Repo = React.createClass({
    render:function(){
        return(
            <div className = "current-repo">
            <div className = "repo-name">{this.props.repo}</div>
            <div className = "repo-description">{this.props.repoDescription}</div>
            <div className = "repo-lastUpdate">{this.props.repoLastUpdate}</div>
            </div>
        );
    },
});

module.exports = Repo;