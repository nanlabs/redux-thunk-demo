import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPeople } from './peopleActions';

import Person from './components/Person';

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
          (
            <div id="loader">
              <div id="bouncer1" />
              <div id="bouncer2" />
            </div>
          ) : (
            <div id="peopleList">
              {this.props.people.map(person => (
                <Person
                  key={person.id}
                  name={person.name}
                  age={person.age}
                />
              ))}
            </div>
          )
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