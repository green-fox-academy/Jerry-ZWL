var React = require('react');
var ReactDOM = require('react-dom');


//Module reuqire
var Header = require('./header');
var Repo = require('./repos');
var Auth = require('./auth');
var Commit = require('./commit');
var Recommend = require('./recommend');
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var fetchFunc = require('./fetch');

var repoData;
require('./scss/index.scss');
//Create Component
var TodoComponent = React.createClass({
            getInitialState: function () {
                return {
                    todos:['wash up', 'eat some cheese','take a nap','haha'],
                    repo:{repo: '',repoDescription:'',repoLastUpdate:''},
                    commits:['','','','','',''],
                    recommended:[]

                }
            },
            render: function() {
                // var todos = this.state.todos;
                // todos = todos.map(function(item, index){
                //     return(
                //         <TodoItem item={item} key={index} onDelete={this.onDelete}/>
                //     );
                // }.bind(this));
                var repo = this.state.repo;
                var commits = this.state.commits;
                commits = commits.map(function (item, index) {
                    return (
                        <Commit/>
                    );
                })
                return ( 
                    <div id='todo-list'>
                        <Header/>    
                        <AddItem searchRepo={this.searchRepo}/>
                        <div className='first-row'>
                        <Repo repo={repo.repo} repoDescription={repo.repoDescription} 
                        repoLastUpdate={repo.repoLastUpdate}/>
                         <Auth logIn={this.logIn}/>
                        </div>
                        <div className='titles'>
                        <div>Commits numbersHere</div> 
                        <div>Recommended</div> 
                        </div> 
                        <div className='second-row'>
                        <Commit/> <Recommend/>
                        </div>                                                                                                                              
                    </div>
                );
                },//render
                 //<ul>{todos}</ul> 
                  //Creat functions
                //   searchRepo:function (item) {
                //     var updatedTodos = this.state.todos.filter(function(val,index){
                //         return item !== val;
                //     });
                //     this.setState({
                //         todos:updatedTodos
                //     });
                // },
                searchRepo:function(repoName){
                    fetchFunc.getRepoInfo(repoName,this.setState.bind(this));
                    console.log(this);
                                        
                },
                logIn: function(token, username) {
                   localStorage.setItem(username,token)
                },

                //lifecycle functions
                componentWillMount: function(){
                    console.log('componentWillMount');
                },
                componentDidMount: function(){
                    console.log('componentDidmount');
                }

            });
          





ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));