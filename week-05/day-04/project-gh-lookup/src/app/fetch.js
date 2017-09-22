// https://api.github.com/repos/greenfox-academy/Jerry-ZWL

'use strict';
const baseUrl = 'https://api.github.com/repos/greenfox-academy';
const username ='Jerry-ZWL';
function parseResponse(response) {
    return response.json();
    
}


var getRepoInfo = function (repoName,repoSetState){
    var basic = 'Basic SmVycnktWldMOjg0YzhhZjc4YmU5ODIwZjQ5NjJlNWUwZjBiYzVjMTgyYzM0NGQwN2I=';
    var token =  localStorage.getItem(username) ||basic;
    var token = basic;
    console.log('token',token, 'url', `${baseUrl}/${repoName}`);
    fetch(`${baseUrl}/${repoName}`,
    {
        method:'get',
        headers:{'Authorization':token}, 
    })
    .then(res => {
        if (res.statusText===404) {
            console.log('status',res.statusText);
            throw Error(res.statusText);}
        else {
            return parseResponse(res);
        }
    })
    .then(res => {
        repoSetState({
            repo: {
                repo: res.name,
                repoDescription:res.description,
                repoLastUpdate:`Last updated at ${res.updated_at}`
            }
        });
    })
    .catch(err => {
        console.log('cought:', err);
        repoSetState(
            {
                repo: {
                    repo: "",
                    repoDescription:"",
                    repoLastUpdate:`Not Found Please check your repo-name`
                }
            });
        }
    )            
}


var getCommitInfo = function (repoName,repoSetState){
    var basic = 'Basic SmVycnktWldMOjg0YzhhZjc4YmU5ODIwZjQ5NjJlNWUwZjBiYzVjMTgyYzM0NGQwN2I=';
    var token =  localStorage.getItem(username) ||basic;
    var token = basic;
    console.log('token',token, 'url', `${baseUrl}/${repoName}`);
    fetch(`${baseUrl}/${repoName}/commits`,
    {
        method:'get',
        headers:{'Authorization':token}, 
    })
    .then(res => {
        if (res.statusText===404) {
            console.log('status',res.statusText);
            throw Error(res.statusText);}
        else {
            return parseResponse(res);
        }
    })
    .then(res => {
        repoSetState({
            commits: [
                res[0].message,
                res[1].message,
                res[2].message,
                res[3].message,
                res[4].message,
                res[5].message                
            ]
        });
    })
    .catch(err => {
        console.log('cought:', err);
        repoSetState(
            {
                commits: ['commits not found all']
            });
        }
    )            
}






module.exports = {getRepoInfo:getRepoInfo, getCommitInfo:getCommitInfo};
