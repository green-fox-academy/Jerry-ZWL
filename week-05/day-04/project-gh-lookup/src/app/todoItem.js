var React = require('react');
            //create todoitem component
require('./scss/display.scss');
 var TodoItem = React.createClass({
                render:function (){
                     return(
                        <li>
                            <div className = "todo-item">
                            <span className = "item-name">{this.props.item}</span>
                            <span className = "item-delete" onClick = {this.handleDelte}> x</span>
                            </div>
                        </li>
                     );
                 },
                 handleDelte: function() {
                    this.props.onDelete(this.props.item);
                 }
            });

module.exports = TodoItem;            