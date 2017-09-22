let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function(){
        resolve(
            setTimeout(function() {
                new Error('fail');
            }, 1000));
        resolve({
          then: function(onFulfill,onReject) {onFulfill('fullfill!');}
      });
        resolve("Success!!!");
     
    }, 2000);
  });

  myFirstPromise.then((successMessage) => {
      console.log('Yay! ' + successMessage);
      console.log(Promise.race(successMessage));
  }).catch(function(error){
      console.log('error!!!',error);
      console.log(Promise.resolve(error));
  });