function DisplayProps({name,greeting}){//instead of destructing the props at line 5
    //we can destructure we can recieve it as arguements
    // let myname = props.name;
    // let mygreeting = props.greeting;
    //let {name, greeting} = props;
    return (
        <>
        <h3> DISPLAY PROPS COMPONENT!</h3>
        <h4> {greeting} {name}</h4>
        </>
    );
}
//export default DisplayProps;