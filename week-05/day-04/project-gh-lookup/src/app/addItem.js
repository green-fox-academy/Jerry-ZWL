var React = require('react');
require('./scss/searchRepos.scss');
var AddItem = React.createClass({
    render:function(){
        return(
            <form id = 'search-bar' onSubmit= {this.handleSubmit}>
                <span className = 'organization'>greenfox-academy/ </span>
                <input type = "text" placeholder = "repository name" required ref="newItem"/>
                <input type="submit" value="Go"/>
            </form>
        );
    },
    //Custom functions
    handleSubmit:function (e) {
        e.preventDefault();
        this.props.searchRepo(this.refs.newItem.value);
    }

});

module.exports = AddItem;