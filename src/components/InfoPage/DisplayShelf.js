import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_ITEM' });
    }

    render (){
        return (
            <div>
                {this.props.shelf.map((shelfItem) => { return ( 
                    <div key = {shelfItem.id}>
                        {shelfItem.description}
                        <br/>
                        <img src={shelfItem.image_url}/>
                    </div>
                )})}

            </div>
        )
    }
} 
const mapToState = reduxState => ({
    shelf: reduxState.shelfReducer,
})
export default connect(mapToState)(Display);