function Number(){
    let evenNumber =[2,4,6,8,10,12,14];
    let oddNumber =[1,3,5,7,9,11,13];
    let mappedoddnumber= evenNumber.map((eachodd)=><li>{eachodd}</li>);
    let mappedevennumber= oddNumber.map((eacheven)=><li>{eacheven}</li>);
    let combinedArray = [...mappedevennumber,mappedoddnumber];
    let mappedCombinedArray =combinedArray.map((eachnumber)=><li>{eachnumber}</li>);
    
    return(

        <>

        
            <h5> Neater way of listing...</h5>
            <ol>{mappedoddnumber}</ol>
            <h5> Neater way of listing...</h5>
            <ol>{mappedevennumber}</ol>
            <h5>combined araay</h5>
            <h1>Combined Array</h1>
            <ol>{mappedCombinedArray}</ol>
            
        </>
    );
    
}
export default Number;