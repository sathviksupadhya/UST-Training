import { useState } from "react";
export default function Counter(){
    //let count =0;
    let [count, setCount] = useState(0);
    function handleincrement(){
        setCount(count+1);
        console.log(count);
    }
    function handleDecrement(){
        setCount(count-1);
        console.log(count);
    }
    return <>
        <div className="container m-5 p-5">
            <h2>
            <button className="btn btn-warning" onClick={handleDecrement}>-</button>
            <span className="mx-5 badge bg-success">{count}</span>
            <button className="btn btn-warning" onClick={handleincrement}>+</button>
            </h2>
        </div>
        </>
}