import { useState } from "react";

export default function JsonPlaceholer(){
    const [allPosts,setAllPosts]= useState([]);
    function handleClick(){
        let baseurl ='https://jsonplaceholder.typicode.com/posts'
        fetch(baseurl)
       .then(response => response.json())
       .then(data => {
            console.log(data);
            setAllPosts([...data]);
       

       });
    }

    let mappedAllPosts= allPosts.map((eachPost) =>(
        <tr key ={eachPost.id}>
            <td>{eachPost.id}</td>
            <td>{eachPost.title}</td>
            <td>{eachPost.userId}</td>
            <td>{eachPost.body}</td>
        
        </tr>
    ));

    return (
        <>  
            <div className="container m-2">
                <button className="btn btn-success" onClick={handleClick}>
                    Click to get the post from JsonPlaceholder</button>
                <table className="table table-striped">
                    <thead>
                        <tr className="table-dark">
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>USER ID</th>
                            <th>POST</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mappedAllPosts}
                    </tbody>
                </table>
            </div>
        </>
        );
}