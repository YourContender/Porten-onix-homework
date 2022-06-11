import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

export default function FilterView({showModalWindow, filterMethod, cancelFilterMethod, country, filterCountryMethod}) {
    return (
        <>
            <ButtonGroup>
                <div>
                    <Button 
                        onClick={() => showModalWindow()}
                    >
                        Добавить
                    </Button>
                </div>

                <div className='filter_price'>
                    <DropdownButton as={ButtonGroup} title="Сортировка" id="bg-1">
                        <Dropdown.Item eventKey="1" onClick={() => filterMethod('1')}>По нарастанию цены</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={() => filterMethod('2')}>По убыванию цены</Dropdown.Item>
                        <Dropdown.Item eventKey="3" onClick={() => cancelFilterMethod()}>сброс фильтра</Dropdown.Item>
                    </DropdownButton>
                </div>

                <div className='filter_country'>
                    <DropdownButton as={ButtonGroup} title="Страны" id="bg-2">
                        {
                            country.map((item, i) => {
                                return (
                                    <Dropdown.Item  eventKey={i} key={i} onClick={() => filterCountryMethod(item)}>{item}</Dropdown.Item>
                                )
                            })
                        }
                        <Dropdown.Item key={country.length + 1} onClick={() => cancelFilterMethod()}>сброс</Dropdown.Item>
                    </DropdownButton>
                </div>
            </ButtonGroup>
        </>
    )
}