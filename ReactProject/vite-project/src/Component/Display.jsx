import DisplayProps from "./DisplayProps";
function Display(){
    let name = "MARK";
    let allColors =["RED","GREEN","BLUE","BLACK"]; 
    return(
        <>
            <h3> Display Component</h3>
            
            <p>HELLO BOB!!!</p>
            <p> Hello {name}</p>
            <p> ALLCOLORS: {allColors}</p>
            <DisplayProps name = "Will" greeting = "hello" > </DisplayProps>
            <DisplayProps name = "RAj" greeting = "Namaskara" > </DisplayProps>
            </>
    );
}
//export default Display;