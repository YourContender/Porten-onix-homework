import {
  Button, Form, Modal, Row 
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'; 
import './ModalWindow.sass';

export default function ModalWindowView({ 
  showModalWindow, onSubmit, setUrl, setPrice, setTitle, setDescription, setCurrency, setCountry 
}) {
  const { t } = useTranslation();
  return (
    <div className="modal_container">
      <Modal.Dialog size="lg" className="modal_dialog">
        <div className="modal_window">
          <Modal.Header>
            <Modal.Title>{t('add-new-item')}</Modal.Title>
          </Modal.Header>

          <Form className="modal_form">
            <Row className="mb-3, ml-3">
              <div className="modal_form_container">
                <span className="modal_form_text">{t('add-title')}</span>
                <input 
                  className="modal_form_input" 
                  name="title" 
                  onChange={(e) => setTitle(e.target.value)} 
                  type="text" 
                  placeholder="enter title"
                />
              </div>

              <div className="modal_form_container">
                <span className="modal_form_text">{t('add-price')}</span>
                <input 
                  className="modal_form_input" 
                  name="price" 
                  onChange={(e) => setPrice(e.target.value)} 
                  type="text" 
                  placeholder="enter price"
                />
              </div>

              <div className="modal_form_container">
                <span className="modal_form_text">{t('add-description')}</span>
                <input 
                  className="modal_form_input" 
                  name="description" 
                  onChange={(e) => setDescription(e.target.value)} 
                  type="text" 
                  placeholder="enter description"
                />
              </div>

              <div className="modal_form_container">
                <span className="modal_form_text">{t('add-url')}</span>
                <input 
                  className="modal_form_input" 
                  name="url" 
                  onChange={(e) => setUrl(e.target.value)}  
                  type="text" 
                  placeholder="enter url photo"
                />
              </div>
            </Row>

            <Row className="mb-3">
              <Form.Group controlId="form-5">
                <Form.Label><p className="modal_form_choose">{t('add-currency')}</p></Form.Label>
                <Form.Select 
                  name="currency" 
                  onChange={(e) => setCurrency(e.target.value)} 
                  defaultValue="Choose currency"
                >
                  <option>{t('choose-currency')}</option>
                  <option>UAH</option>
                  <option>USD</option>
                  <option>EUR</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="form-6">
                <Form.Label><p className="modal_form_choose">{t('add-country')}</p></Form.Label>
                <Form.Select 
                  name="country" 
                  onChange={(e) => setCountry(e.target.value)}  
                  defaultValue="Choose country"
                >
                  <option>{t('choose-country')}</option>
                  <option>{t('ua')}</option>
                  <option>{t('pl')}</option>
                  <option>{t('uk')}</option>
                  <option>{t('us')}</option>
                  <option>{t('cd')}</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button 
              variant="primary"
              className="modal_btn"
              onClick={() => onSubmit()}
            >
              {t('submit')}
            </Button>
          </Form>

          <Modal.Footer>
            <Button 
              variant="secondary"
              onClick={() => showModalWindow()}
            >
              {t('close')}
            </Button>
          </Modal.Footer>
        </div>
      </Modal.Dialog>
    </div>
  );
}

ModalWindowView.propTypes = {
  showModalWindow: PropTypes.func,  
  onSubmit: PropTypes.func,
  setUrl: PropTypes.func, 
  setPrice: PropTypes.func, 
  setTitle: PropTypes.func, 
  setDescription: PropTypes.func, 
  setCurrency: PropTypes.func, 
  setCountry: PropTypes.func 
};

ModalWindowView.defaultProps = { 
  showModalWindow: () => null,  
  onSubmit: () => null,
  setUrl: () => null, 
  setPrice: () => null, 
  setTitle: () => null, 
  setDescription: () => null, 
  setCurrency: () => null, 
  setCountry: () => null 
};
