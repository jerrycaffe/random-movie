import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomMovie } from './actions';

class MovieDetails extends Component{

  // make AJAX call when the component mount
  componentDidMount(){
    this.props.dispatch(getRandomMovie());
  }
  render(){
    const { Title, Plot, Year, Poster } =this.props
    return (
        <div>
          <section>
            <h1>{Title}</h1>
            <h1>{Year}</h1>
            <p>{Plot}</p>
            <img src={Poster} alt=""/>
          </section>
        </div>
    )
  }
  
}
// After Actions are dispatched, add the redux states onto props for the component
const mapStateToProps = (state, ownProps)=>{
  return state.omdbData
}
//Connect it with redux and export it out
export default connect(mapStateToProps)(MovieDetails);