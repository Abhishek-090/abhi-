import React, { Component } from 'react'

class MyErrorBoundry extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             errorFound:false 
        }
    }
    static getDerivedStateFromError(error)
    {
        return {
            errorFound:true 
        }
    }
    componentDidCatch(error,info)
    {
        console.table({error,info})
        
    }
    render() {
            if(this.state.errorFound)
            return(
                <h2>Something went wrong</h2>
            )        
            
        return (
            this.props.children
        )
    }
}

export default MyErrorBoundry
