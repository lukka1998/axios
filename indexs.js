// //Task:
// You will be working with a sample API to practice making requests using Axios. Your task is to:

// GET all the data from the API and display each item’s title and id in the console using a loop.
// POST a new item to the API. After successfully creating it, log the new item’s id and title.
// PUT (update) an existing item. Log the updated item’s details.
// DELETE an item, then log a confirmation message.
// Check status codes for each operation using an if() statement and log appropriate success or failure messages based on the response.

// Base URL: https://jsonplaceholder.typicode.com
// Attention "Not to be static numbers use function ${id}"


async function getdata(){
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response);
        for( let i = 0 ;i < response.data.length;i++){
        console.log(response.data[i].title);
        console.log(response.data[i].id);
        
    }
    if(response.status===200){
        console.log("success")
    }
    else{
        console.log("failure")
    }
    } catch (error) {
        console.log("errors")
    }
    
}
getdata();
async function postdata(id) {
    try {
        const postdata = { //create const variable in order to use post method
            userId: id,     
            title: `changed title`,  
        };
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postdata);
        // console.log(`new item  with id: ${response.data.id}, title: ${response.data.title}`);
        console.log(response.data)
        if(response.status===200){
            console.log("success")
        }
        else{
            console.log("failure")
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

postdata(6); 
async function putdata(id){
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title:"changed title",
            userId:20
        })
        console.log(response.data);
        if(response.status===200){
            console.log(" success")
        }
        else{
            console.log("failure")
        }
    } catch (error) {
        
    }
}
putdata(5)
async function deletedata(id){
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log("item with id deleted")
        if(response.status===200){
            console.log("success")
        }
        else{
            console.log("failure")
        }
    } catch (error) {
        console.log(error)
    }

}
deletedata();



