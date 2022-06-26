import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterView from './FilterView';
import './Filtered.sass';

function Filtered({
  filteredPriceMethod, filteredCountryMethod, showModalWindow, cancelFilterMethod
}) {
  const [initCountry] = useState(['Ukraine', 'Poland', 'USA', 'UK', 'Canada']);  

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
    />
  );
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
