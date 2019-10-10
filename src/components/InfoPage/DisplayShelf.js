import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
    componentDidMount = () =>{
        this.props.dispatch({ type: 'GET_ITEM' });

    }    
    render (){
        return (
            <div>
                {JSON.stringify(this.props.reduxState.shelfReducer)}
                {/* {this.props.reduxState.shelfReducer.map(item => {
                    <div key= {item.id}>
                    {item.description}
                    <img src={item.image_url} alt={item.description}/>
                    </div>
                }) } */}
            </div>
        )
    }
} 
const mapToState = reduxState => ({
    reduxState,
})
export default connect(mapToState)(Display);