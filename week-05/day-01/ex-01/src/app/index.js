var React = require('react');
var ReactDOM = require('react-dom');
import {Router,Route,browserHistory} from 'react-router';

//Module reuqire
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

var App = React.createClass({
    render: function(){
        return(
            <Router history= {browserHistory}>
            <Route path={'/'} component = {TodoComponent}></Route>
            <Route path={'/about'} component = {About}></Route>
            </Router>
        );}
});
require('./css/index.css');
//Create Component
var TodoComponent = React.createClass({
            getInitialState: function () {
                return {
                    todos:['wash up', 'eat some cheese','take a nap','haha']
                }
            },
            render: function() {
                var todos = this.state.todos;
                todos = todos.map(function(item, index){
                    return(
                        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
                    );
                }.bind(this));
                return ( 
                    <div id='todo-list'>    
                        <p> The busiest people have the most leisure...</p>
                        <ul>{todos}</ul> 
                        <AddItem onAdd={this.onAdd}/>               
                    </div>
                );
                },//render
                  //Creat functions
                onDelete:function (item) {
                    var updatedTodos = this.state.todos.filter(function(val,index){
                        return item !== val;
                    });
                    this.setState({
                        todos:updatedTodos
                    });
                },
                onAdd: function(item) {
                    var updatedTodos = this.state.todos;
                    updatedTodos.push(item);
                    this.setState({
                        todos: updatedTodos
                    });
                },

                //lifecycle functions
                componentWillMount: function(){
                    console.log('componentWillMount');
                },
                componentDidMount: function(){
                    console.log('componentDidmount');
                }

            });
          





ReactDOM.render(<TodoComponent />, 
        document.getElementById('todo-wrapper'));