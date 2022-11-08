import react from "react";
function About(props){
    console.log(props)
    return (
        <div>
            info = {props.info}, version = {props.version}
            <p>
                {props.children}
            </p>
        </div>
        
    );
}

export default About;