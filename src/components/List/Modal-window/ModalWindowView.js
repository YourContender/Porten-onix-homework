import { Button, Form, Modal, Row } from "react-bootstrap";
import PropTypes                    from 'prop-types';
import './ModalWindow.sass';

export default function ModalWindowView({ handleInput, showModalWindow, onSubmit }) {
    return (
        <div className="modal_container">
            <Modal.Dialog size="lg" className="modal_dialog">
                <div className="modal_window">
                    <Modal.Header>
                        <Modal.Title>Добавление нового товара: </Modal.Title>
                    </Modal.Header>

                    <Form className="modal_form">
                        <Row className="mb-3, ml-3">
                            <div className="modal_form_container">
                                <span className='modal_form_text'>Enter title: </span>
                                <input 
                                    className='modal_form_input' 
                                    name='title' 
                                    onChange={handleInput} 
                                    type="text" 
                                    placeholder="enter title"
                                />
                            </div>

                            <div className="modal_form_container">
                                <span className='modal_form_text'>Enter price: </span>
                                <input 
                                    className='modal_form_input' 
                                    name='price' 
                                    onChange={handleInput} 
                                    type="text" 
                                    placeholder="enter price"
                                />
                            </div>

                            <div className="modal_form_container">
                                <span className='modal_form_text'>Enter description: </span>
                                <input 
                                    className='modal_form_input' 
                                    name='description' 
                                    onChange={handleInput} 
                                    type="text" 
                                    placeholder="enter description"
                                />
                            </div>

                            <div className="modal_form_container">
                                <span className='modal_form_text'>Enter url: </span>
                                <input 
                                    className='modal_form_input' 
                                    name='url' 
                                    onChange={handleInput} 
                                    type="text" 
                                    placeholder="enter url photo"
                                />
                            </div>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="form-5">
                                <Form.Label><p className='modal_form_choose'>Choose currency</p></Form.Label>
                                <Form.Select 
                                    style={{width: '80%', margin: '0 auto'}} 
                                    name='currency' 
                                    onChange={handleInput} 
                                    defaultValue="Choose currency"
                                >
                                    <option>UAH</option>
                                    <option>USD</option>
                                    <option>EUR</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="form-6">
                                <Form.Label><p className='modal_form_choose'>Choose country</p></Form.Label>
                                <Form.Select 
                                    style={{width: '80%', margin: '0 auto'}} 
                                    name='country' 
                                    onChange={handleInput} 
                                    defaultValue="Choose country"
                                >
                                    <option>Ukraine</option>
                                    <option>Poland</option>
                                    <option>UK</option>
                                    <option>USA</option>
                                    <option>Canada</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Button 
                            variant="primary"
                            className='modal_btn'
                            onClick={() => onSubmit()}
                        >
                            Submit
                        </Button>
                    </Form>

                    <Modal.Footer>
                        <Button 
                            variant="secondary"
                            onClick={() => showModalWindow()}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal.Dialog>
        </div>
    )
}

ModalWindowView.propTypes = {
    handleInput: PropTypes.func,
    showModalWindow: PropTypes.func,  
    onSubmit: PropTypes.func
}