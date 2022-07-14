import {
  Button, ButtonGroup, Dropdown, DropdownButton 
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'; 

export default function FilterView({
  showModalWindow, filterMethod, cancelFilterMethod, country, filterCountryMethod, getRequest
}) {
  const { t } = useTranslation();
  return (
    <ButtonGroup>
      <div>
        <Button 
          onClick={() => showModalWindow()}
        >
          {t('add')}
        </Button>
      </div>

      <div className="filter_price">
        <DropdownButton as={ButtonGroup} title={t('sort')} id="bg-1">
          <Dropdown.Item eventKey="1" onClick={() => filterMethod('1')}>{t('ascending')}</Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={() => filterMethod('2')}>{t('descending')}</Dropdown.Item>
          <Dropdown.Item eventKey="3" onClick={() => cancelFilterMethod()}>{t('reset')}</Dropdown.Item>
        </DropdownButton>
      </div>

      <div className="filter_country">
        <DropdownButton as={ButtonGroup} title={t('country')} id="bg-2">
          {
                country.map((item, i) => (
                  <Dropdown.Item 
                    eventKey={i} 
                    key={item} 
                    onClick={() => filterCountryMethod(item)}
                  >
                    {t(item)}
                  </Dropdown.Item>
                ))
            }
          <Dropdown.Item key={country.length + 1} onClick={cancelFilterMethod}>{t('reset')}</Dropdown.Item>
        </DropdownButton>
      </div>

      <Button 
        onClick={() => getRequest()}
        >
          обновить
        </Button>
    </ButtonGroup>
  );
}

FilterView.propTypes = { 
  showModalWindow: PropTypes.func, 
  filterMethod: PropTypes.func, 
  cancelFilterMethod: PropTypes.func, 
  country: PropTypes.arrayOf(PropTypes.string), 
  filterCountryMethod: PropTypes.func 
};

FilterView.defaultProps = { 
  country: [], 
  showModalWindow: () => null, 
  filterMethod: () => null, 
  cancelFilterMethod: () => null, 
  filterCountryMethod: () => null 
};
