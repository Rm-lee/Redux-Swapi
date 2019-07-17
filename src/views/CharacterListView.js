import React from "react";
import { connect } from "react-redux";
import { getCharsFromApi } from '../actions/index'
import { CharacterList } from "../components";

// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharsFromApi()
  }

  render() {
    
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return  <p>..loading</p> 
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mapDispatchToProps = {
  getCharsFromApi:getCharsFromApi
}

const mapStateToProps = (state) => {

 return {
     characters:state.charsReducer.characters,
     fetching:state.charsReducer.fetching
 };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,mapDispatchToProps
)(CharacterListView);



