var React = require('react');
require('./scss/index.scss');
var Header = React.createClass({
    render:function(){
        return(
            <header>
            <a href="https://github.com/">GitHub</a>
            <a href="https://developer.mozilla.org/en-US/">MDN</a>
            <a href="https://stackoverflow.com/">Stack Overflow</a>
            </header>
        );
    },
});

module.exports = Header;