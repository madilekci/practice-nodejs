function getData(data){
        return new Promise((resolve,reject)=>{
            console.log("Collecting data ...");

            // Here we should do some operations to collect data
            if(data){
                // Call resolve() function if everthing went right.
                resolve("Data received");
            }else{
                reject("Something went wrong while trying to get data.");
            }
        });
}

function processData(receivedData){
    return new Promise((resolve,reject)=>{
        console.log("Processing  received data ...");
        // Here we should do some processing on the data
        if(receivedData){
            // Call resolve() function if everthing went right.
            resolve("Data processed");
        }else{
            reject("Something went wrong while data processing.");
        }
    });
}

getData(true)
.then((result) =>{
    console.log("Result : ", result);
    return processData(true);
}).then((result)=>{
    console.log("Result : ",result);
})
.catch( ()=> {
    console.log("Result : ", result);
    return processData(false);
});

