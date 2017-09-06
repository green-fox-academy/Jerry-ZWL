const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US& =${count}`
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () =>
        (request.status === 200) ?
        resolves(JSON.parse(request.response).results) :
        reject(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send()
})

// The then function can be chained on to do something once the promise has been fulfilled. This is called composition. 
getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(
        new Error("cannot load members from randomuser.me"))
)