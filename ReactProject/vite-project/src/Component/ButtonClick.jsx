let ButtonClick = function(){
    let count = 0;
    function handleCLick(){
        console.log("Clicked");
        console.log(count);  //this will give the count value before incrementing
        count++;
    }


    return <>
    <div className="container m-5 p-5">
        <button onClick={handleCLick}> CLICK ME.. </button>
        <div>{count}</div>
        <div className="bg-success test-light">{count}</div>
        </div>
        </>
}
export default ButtonClick;