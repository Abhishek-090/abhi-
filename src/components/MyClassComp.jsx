import React,{Component} from 'react'

class MyClassComp extends Component
{
    // this : it is the default object of all the class
    // it is used inside the class only.
    // props : it is properties of the class
    // access : object.property name

    render()
    {

        const {username,age} = this.props.user 
        return(
            <>
                <h1>Class Component </h1>
                <p>
                    {/* username = {this.props.username} */}
                    {/* username = {this.props.user.username} */}
                </p>
                <h3>User name is {username} and age is {age} years old.</h3>
            </>
            
        );
    }
}


export default MyClassComp;