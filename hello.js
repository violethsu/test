// function Hello() { 
//     var name; 
//     this.setName = function(theName) { 
//         name = theName; 
//     }; 
//     this.sayHello = function() { 
//         console.log('Hello ' + name); 
//     }; 
//     this.execute = function(funName, value) {
//         funName(value);
//     };
// }; 
// module.exports = Hello;

// var wait1000 = () => new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000)
// })
// wait1000()
//     .then(function() {
//         console.log('Yay!')
//         return wait1000()
//     })
//     .then(function() {
//         console.log('Wheeyee!')
//     });

    function letExample(value) {
        if (value) {
        let letValue = value;
        console.log('inside block', letValue);
        // [SyntaxError] redeclaration of letValue would be a SyntaxError
       let letValue = 'foo'; //let can't be redecalare 
        }
        try {
        // [SyntaxError] Accessing letValue is a Reference Error because it 
        // was defined w/in if-block
       console.log(letValue);
        // if we get here, it means that the JS engine didn’t 
        // throw an exception, which means that the engine 
        // (or transpiled code) did not faithfully reproduce 
        // how let should work
       console.log('let not faithfully handled');
        } catch (e) {
        // e is a ReferenceError 
        console.log('letValue not accessible', e);
        }
       }
       letExample(2);