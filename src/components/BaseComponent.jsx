import React, { Component } from 'react'

class BaseComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             address:'Muzaffarpur'
        }
    }
    showAddress = () =>
    {
        console.log("it is from base class")
    }
    render() {
        console.log(this)
        // this.showAddress()
        return (
            <div>
                <h1 className="ddd">Base class {5+5}</h1>
            </div>
        )
    }
}

class ChildComponent extends BaseComponent
{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render()
    {
        console.log(this.props.user.username)
        this.showAddress()
        return false;
    }
}

export default ChildComponent





