function Person(){
    let onePerson = {
        personId:101,
        personName:"John Doe",
        personAge:30
    };
    return (
        <>
            <h3>Person Component</h3>
            <h6>personId: {onePerson.personId}</h6>
            <h6>personName: {onePerson.personName}</h6>
            <h6>personAge: {onePerson.personAge}</h6>
        </>
    );
    

}
export default Person;