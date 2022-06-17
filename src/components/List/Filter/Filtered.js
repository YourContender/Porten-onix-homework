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
    const { filteredPriceMethod } = this.props;
    return filteredPriceMethod(id);
  };

  filterCountryMethod = (country) => {
    const { filteredCountryMethod } = this.props;
    return filteredCountryMethod(country);
  };

  render() {
    const { country } = this.state;
    const { showModalWindow, cancelFilterMethod } = this.props;
    return (
      <FilterView 
        showModalWindow={showModalWindow}
        cancelFilterMethod={cancelFilterMethod}
        filterCountryMethod={this.filterCountryMethod}
        filterMethod={this.filterMethod}
        country={country}
      />
    );
  }
}

export default Filtered;

Filtered.propTypes = {
  showModalWindow: PropTypes.func,
  filteredPriceMethod: PropTypes.func,
  filteredCountryMethod: PropTypes.func,
  cancelFilterMethod: PropTypes.func
};

Filtered.defaultProps = { 
  showModalWindow: () => null,
  filteredCountryMethod: () => null,
  filteredPriceMethod: () => null,
  cancelFilterMethod: () => null
};
