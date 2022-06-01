import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import React from 'react';
import './Filtered.sass';

class Filtered extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            country: ['Ukraine', 'Poland', 'USA', 'UK', 'Canada']
        }
    }

    filterMethod = (id) => {
        return this.props.filteredPriceMethod(id)
    }

    filterCountryMethod = (country) => {
        return this.props.filteredCountryMethod(country);
    }

    render() {
        const { country } = this.state;
        const { showModalWindow, cancelFilterMethod } = this.props;

        return(
            <>
                <ButtonGroup>
                    <Button 
                        className='filter_first'
                        onClick={() => showModalWindow()}
                    >
                        Добавить
                    </Button>

                    <DropdownButton className='filter_price' style={{ marginLeft: '5px' }} as={ButtonGroup} title="Сортировка" id="bg-1">
                        <Dropdown.Item eventKey="1" onClick={() => this.filterMethod('1')}>По нарастанию цены</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={() => this.filterMethod('2')}>По убыванию цены</Dropdown.Item>
                        <Dropdown.Item eventKey="3" onClick={() => cancelFilterMethod()}>сброс фильтра</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton style={{ marginLeft: '5px' }} as={ButtonGroup} title="Страны" id="bg-2">
                        {
                            country.map((item, i) => {
                                return (
                                    <Dropdown.Item  eventKey={i} key={i} onClick={() => this.filterCountryMethod(item)}>{item}</Dropdown.Item>
                                )
                            })
                        }
                        <Dropdown.Item key={country.length + 1} onClick={() => cancelFilterMethod()}>сброс</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </>
        )
    }
}

export default Filtered;