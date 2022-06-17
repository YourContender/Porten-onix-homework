import React from 'react';
import PropTypes from 'prop-types';
import FilterView from './FilterView';
import './Filtered.sass';

class Filtered extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: ['Ukraine', 'Poland', 'USA', 'UK', 'Canada']
    };
  }

  filterMethod = (id) => {
    return this.props.filteredPriceMethod(id);
  };

  filterCountryMethod = (country) => {
    return this.props.filteredCountryMethod(country);
  };

  render() {
    return (
      <FilterView 
        showModalWindow={this.props.showModalWindow}
        cancelFilterMethod={this.props.cancelFilterMethod}
        filterCountryMethod={this.filterCountryMethod}
        filterMethod={this.filterMethod}
        country={this.state.country}
      />
    );
  }
}

export default Filtered;

Filtered.propTypes = {
  showModalWindow: PropTypes.func,
  filteredCountryMethod: PropTypes.func,
  cancelFilterMethod: PropTypes.func
};
