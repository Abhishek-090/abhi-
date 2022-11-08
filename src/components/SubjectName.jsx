import React, { Component } from 'react'

class SubjectName extends Component {
    render() {
        if(this.props.sname=="Apple")
        {
            throw new Error("Not a Subject Name")
        }
        return (
            <div>
                <h3>Subject Name : {this.props.sname} </h3>                
            </div>
        )
    }
}

export default SubjectName
