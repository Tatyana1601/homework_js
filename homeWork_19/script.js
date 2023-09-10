 const getData = async (url) => {
        try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
       console.log(response.ok);
        const data = await response.json();
        console.log (data);  
    }catch(e){
        console.log("Error")
    }
    }
getData();


