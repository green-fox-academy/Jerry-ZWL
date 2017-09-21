var React = require('react');
var ReactDOM = require('react-dom');

GalleryFrame = React.createClass({
    render: function() {
        return ( 
        <div id='todo-list'>    
            <ul>{todos}</ul>                
        </div>
        );
    }
});





ReactDOM.render( <GalleryFrame /> ,
    document.getElementById('todo-wrapper'));