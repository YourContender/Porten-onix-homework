import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterView from './FilterView';
import './Filtered.sass';

function Filtered({
  filteredPriceMethod, filteredCountryMethod, showModalWindow, cancelFilterMethod, getRequest
}) {
  const [initCountry] = useState(['ua', 'pl', 'us', 'uk', 'cd']);  

  const filterMethod = (id) => {
    return filteredPriceMethod(id);
  };

  const filterCountryMethod = (country) => {
    return filteredCountryMethod(country);
  };

  return (
    <FilterView 
      showModalWindow={showModalWindow}
      cancelFilterMethod={cancelFilterMethod}
      filterCountryMethod={filterCountryMethod}
      filterMethod={filterMethod}
      country={initCountry}
      getRequest={getRequest}
    />
  );
}

export default Filtered;

Filtered.propTypes = {
  showModalWindow: PropTypes.func,
  filteredPriceMethod: PropTypes.func,
  filteredCountryMethod: PropTypes.func,
  cancelFilterMethod: PropTypes.func,
  getRequest: PropTypes.func
};

Filtered.defaultProps = { 
  showModalWindow: () => null,
  filteredCountryMethod: () => null,
  filteredPriceMethod: () => null,
  cancelFilterMethod: () => null,
  getRequest: () => null
};
