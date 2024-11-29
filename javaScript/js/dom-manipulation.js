function display(){
    //first grabhold of <p> through its id
    document.getElementById("para1");
    alert(document.getElementById("para1"));
    document.getElementById("para1").innerHTML = "new content display";
}