function Color(){
    let allColors =["Red", "Green", "Blue"];
    let mappedAllColors= allColors.map((eachColor)=><li>{eachColor}</li>);
    
    return(
        <>
        <h3> This Is Color Component</h3>
        <h5>{allColors}</h5>
        <ul>
            { allColors.map((eachColor) =>(
                 <li> {eachColor} </li>
                 ) ) }
        </ul>
        <h5> Neater way of listing...</h5>
        <ol>{mappedAllColors}</ol>
        </>
    );
    
}
export default Color;