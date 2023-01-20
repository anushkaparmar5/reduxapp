//import{ React,component }from "react";
import React, {component} from "react";
import { connect } from "react-redux";
class App extends React.Component{

    
    //  
    render(){
        return(
            <>
            <div>Age: <span>{this.state.age}</span></div>  
            <button onClick={this.onAgeup }> page up</button>
            <button onClick={this.onAgrdown}>page down</button>
            </>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        age:state.age
    }

}
const mapDispatchToProps=(dispach)=>{
    return{
        onAgeUp:()=>dispach({type:"AGE_UP"}),
        onAgrdown:()=>dispach({type:"AGE_DOWN"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);