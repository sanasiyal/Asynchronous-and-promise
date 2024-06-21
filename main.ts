// // Question # 1
// // Write a simple asynchronous TypeScript function fetchGreeting that returns a
// // greeting message after a 2-second delay using setTimeout.

async function fetchGreeting(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("hello dear john")
        },2000)
    })
}
fetchGreeting().then((result)=>{
    console.log(result);
    
}).catch((error)=>{
    console.log(error);
    
})

//  // Question # 2
//  // Write a function simulateTask that simulates a task by logging "Task started",
//  // waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
let simulateTask=()=>{
    console.log("task started");
    setTimeout(()=>{
        console.log("task completed");
        },1000)
    

}
simulateTask()

//  // Question # 3
//  // Write a function fetchData that returns a Promise which resolves with the string
//  // "Data fetched successfully!" after a delay of 1 second.
let fetchData1=()=>{
return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("data fetched sucessfully!")
    },1000)
    
})
}
fetchData1().then((result)=>{
    console.log(result);
    })
//  // Question # 4
//  // Write a function fetchWithError that returns a Promise. It should randomly either
//  // resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
//  // delay of 1 second. Handle the rejection using .catch
let fetchWithError=()=>{
    return new Promise((res,rej)=>{
        res("data fetched sucessfully!")
        rej("data fetch failed!");
        setTimeout(()=>{
            if(Math.random()>0.5){
                res("data fetched sucessfully!")}
                else{rej("data fetch failed!")}
        },1000)
    })
}
fetchWithError().catch((error)=>{console.log(error);
}).then((message)=>{console.log(message);
})

// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.
 
    let fetchData=()=>{
        return new Promise((res:any,rej:any)=>{
            res("data fetch sucessfully!")
            setTimeout(()=>{
                console.log(fetchData);              
            },1000)
        })
    };
    let processData=()=>{
        return new Promise((res:any,rej:any)=>{
            res("data processed sucessfully!")
            setTimeout(()=>{console.log(processData);
            },2000)
 }) 
   }
let executeSequentially=()=>{
    fetchData().then((data)=>console.log(data));
    processData().then((data)=>console.log(data))
};
executeSequentially()

 
