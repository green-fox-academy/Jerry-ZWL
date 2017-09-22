let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function(){
      resolve({
          then: function(onFulfill,onReject) {onFulfill('fullfill!');}
      }); // Yay! Everything went well!
    }, 2000);
  });

  myFirstPromise.then((successMessage) => {
      console.log('Yay! ' + successMessage);
      console.log(Promise.resolve(successMessage));
  }).catch(function(statusText){
      console.log('error!!!',statusText);
  });