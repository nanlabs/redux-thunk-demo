import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPeople } from './peopleActions';

import PeopleList from './components/PeopleList';
import Loader from '../common/loader';

class People extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="personContainer">
        <h1>People Fetcher</h1>
        <button
          onClick={() => this.props.fetchPeople()}
        >
          Fetch People
        </button>
        {this.props.loading ?
          <Loader /> :
          <PeopleList people={this.props.people} />
        }
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  people: state.people,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchPeople }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(People);