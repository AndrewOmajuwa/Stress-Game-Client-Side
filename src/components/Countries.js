import React, { Component } from 'react'
import { connect } from "react-redux";
import { getcountries } from "../actions/listcountries";

class Countries extends Component {

    componentDidMount(){
        this.props.getcountries()
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
      countries: reduxState.countries
    };
  };

export default connect(
    mapStateToProps,
    { getcountries }
  )(Countries);
  