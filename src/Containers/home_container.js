import React, { Component } from 'react';
import axios from 'axios';

import {connect} from 'react-redux'
import {artistListAll, artistList} from '../Actions'
import {bindActionCreators} from 'redux'

import Search from '../components/search'
import Artistlist from '../components/artistlist';

class HomeContainer extends Component { 

    componentWillMount(){
        this.props.artistListAll()
    }
  

    getKeywords = (event) => {
        let key = event.target.value;
        
        this.props.artistList(key)
    }

    render(){
      
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                <Artistlist artists={this.props.artists.artistList}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        artists:state.artists
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({artistListAll, artistList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)