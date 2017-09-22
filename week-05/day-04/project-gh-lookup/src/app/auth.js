var React = require('react');
require('./scss/auth.scss');
var Auth = React.createClass({
    render:function(){
        return(
            <form id = 'log-in' onSubmit= {this.handleSubmit}>
                <div className = 'auth'>Authenticate</div>
                <input type = "text" placeholder = "username" required ref="username"/>
                <input type = "text" placeholder = "Token or password" required ref="token"/>
                <input type="submit" value="Login"/>
            </form>
        );
    },
    //Custom functions
    handleSubmit:function (e) {
        e.preventDefault();
        this.props.logIn(this.refs.token.value,this.refs.username.value);
    }

});

module.exports = Auth;