// this is a HOC // we will export a function

import React, {Component} from 'react'
import { connect } from 'react-redux'

export default (ChildComponent) => {

    class ComposedComponent extends Component {

        
    // component just rendered
    componentDidMount(){
        this.shouldNavigateAway()
    }

    // component just got updated
    componentDidUpdate(){
        this.shouldNavigateAway()
        
    }

    shouldNavigateAway(){
        if(!this.props.auth){
            //console.log("LEAVE PAGE")
            // below props is from react route which will allow us to navigate away to another component
            this.props.history.push('/') 
        }
    }


        render(){
            // we need to pass props from parent to child- commentBox. Otherwise actions wont be available in 
            // commentBox
            return <ChildComponent {...this.props} />
        }
    }


    function mapStateToProps(state){
        return {auth:state.auth}
    }
    


    return connect(mapStateToProps)(ComposedComponent);
}