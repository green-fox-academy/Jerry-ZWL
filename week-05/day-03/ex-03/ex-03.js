var counter =0;
class MyPromise{
  constructor(exec){
    console.log('construct');
    this.resParam; 
    this.rejParam;
    console.log('exec',exec);
    console.log(this.fakeRes);
    exec(this.fakeRes.bind(this), this.fakeRej.bind(this));
  }
  fakeRes (param) {
    counter++;
    console.log('param',param,'resFunc',this.resFunc);
    if(typeof this.resFunc ==='function'){
      console.log('1');
      this.resFunc(param);
    }else{
      this.resParam = param;
      console.log('restParam', counter,'param',param);
      console.log('2');
      return param;
    }
  }
  fakeRej (param) {
    console.log('fakeRej');
    if(typeof this.rejFunc ==='function'){
      this.rejFunc(param);
    }else{
      this.rejParam =  param;
    }
  }

  then(resFunc,rejFunc){
    console.log('then->resFunc',resFunc,'then-rejFunc',rejFunc);
    this.resFunc = resFunc;
    this.rejFunc = rejFunc || undefined;
    if(this.resFunc){
    resFunc(this.resParam);
    }
    console.log('then.this', this);
    return this;
  }
  catch(rejFunc){
    console.log('catch');
    this.rejFunc = rejFunc;
    if(this.rejFunc){
    rejFunc(this.rejParam);}
    return this;
  }
}

// var prom = new MyPromise(function (res,rej) {
//   res(res(res(setTimeout(function(){ 
//     console.log('setTimeout');
//     res(5); }, 10))));
// });
// // var prom = new MyPromise(function (res,rej) {
//   setTimeout(function(){ 
//     console.log('setTimeout');
//     res(5); }, 2000);
//   });

// var prom = new MyPromise(function (res,rej) {
//   res(res(res(setTimeout(function(){ 
//     console.log('setTimeout');
//     res(5); }, 2000))));
// });


// var prom = new MyPromise(function (res,rej) {
//   res(res(res(function(){ 
//     return res(5);})));
// });
var prom = new MyPromise(function (res,rej) {
  res(res(res(function(){ 
    res(5);})));
});

prom.then(
  function (value){
  console.log(value);
}).catch(
  function (err) {
  console.log(err);
  }
);




