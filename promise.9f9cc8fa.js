const fetchUserFromServer=(e,o,s)=>{console.log(`Fetching data for ${e}`),setTimeout((()=>{o("success value")}),2e3)},onFetchSuccess=e=>{console.log(e)},onFetchError=e=>{console.error(e)};fetchUserFromServer("Mango",onFetchSuccess);const makePromise=(e,o)=>new Promise((s=>{setTimeout((()=>s(e)),o)})),promiseA=makePromise("promiseA value",1e3),promiseB=makePromise("promiseB value",3e3);Promise.all([promiseA,promiseB]).then((e=>console.log(e))).catch((e=>console.log(e)));
//# sourceMappingURL=promise.9f9cc8fa.js.map
