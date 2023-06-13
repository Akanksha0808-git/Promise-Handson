// // // Write one example explaining how you can write a callback function.

function calculate(a,b){
    return a*b
}
console.log(calculate(5,4))


 function displayData(name,age){
    console.log(`${name} : age is ${age}`);
 }
 displayData("ak",calculate(5,4));

// // // Q2 "Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 
// // //Explain callback hell.
// // // Numbers
// // // 1
// // // 2
// // // 3
// // // 4
// // // 5
// // // 6
// // // 7"
 setTimeout(()=>{
    console.log("1");
    setTimeout(()=>{
        console.log("2");
        setTimeout(()=>{
            console.log("3");  
            setTimeout(()=>{
                console.log("4"); 
                setTimeout(()=>{
                    console.log("5");
                    setTimeout(()=>{
                        console.log("6");
                        setTimeout(()=>{
                            console.log("7");
                            
                        },7000)
                    },6000)
                 },5000)
            },4000)
        },3000)
    },2000)
 },1000)

 



// // // Q3- "Write the promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 
// // // Numbers
// // // 1
// // // 2
// // // 3
// // // 4
// // // 5
// // // 6
// // // 7"

function printNumbers() {
  for (let i = 1; i <= 7; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

printNumbers();








// // //Q4- "Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed 
// then it should go to reject the state and catch the error and print Promise Rejected "


let variable="Yes"

function myPromise(p){
    return new Promise((resolve,reject)=>{
    if(p==="Yes")
    {
        resolve("Promise Resolved");
}else
{
        reject(Error("Promise Rejected"));

}
})
}
myPromise(variable)
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
    


//Q5-------------------Create examples to explain callback function
    function greet(name, callback) {
      console.log(`Hello, ${name}!`);
      callback();
    }
    
    function sayGoodbye() {
      console.log("Goodbye!");
    }
    
    greet("John", sayGoodbye);
    


    //Q6----------Create examples to explain callback hell function
    setTimeout(()=>{
      console.log("1");
      setTimeout(()=>{
          console.log("2");
          setTimeout(()=>{
              console.log("3");  
              setTimeout(()=>{
                  console.log("4"); 
                  setTimeout(()=>{
                      console.log("5");
                      setTimeout(()=>{
                          console.log("6");
                          setTimeout(()=>{
                              console.log("7");
                              
                          },7000)
                      },6000)
                   },5000)
              },4000)
          },3000)
      },2000)
   },1000)


  //  Q7------Create examples to explain promises function


  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved successfully");
  }, 2000);
})
promise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});





//Q8---
function display(alpha, timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(alpha);
        resolve();
      }, timeout);
    });
  }
  
  async function visible() {
    await display("a", 2000);
    await display("e", 4000);
    await display("i", 1000);
    await display("o", 2000);
    await display("u", 5000);
  }
  
  visible();
  

  
  // Q9-------------Create examples to explain promise.all function

  const promise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(" promise 1 resolve")
    },2000)
  })
    const promise2= new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("Promise2 resolve")
      },1000)
    })
    const promise3= new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("Promise3 resolve")
      },1500)
    })
    Promise.all ([promise1,promise2,promise3])
    .then((result)=>{
   console.group("All promises done")
    })