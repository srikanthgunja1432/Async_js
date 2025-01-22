const getData = (userName)=>{
    return new Promise((resolve, reject)=>{
        if(userName=='srikanth')
        {
           setTimeout(()=>{
            resolve({name:'srikanth'})
           }
           ,8000
           )
        }
        else{
            reject('User not found');
        }
    })
}

getData('srikanth')
.then((data)=>console.log(data))
.catch((error)=>console.log(error));



async function getdata(){
    try{
        const data = await getData('srikanth');
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}
        
getdata()
           