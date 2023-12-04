import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const SubcribeToNewsletter = ({
  _toggledleSubmitYourContentModal,
  _setToggledleSubmitYourContentModal,
  toggleSubmitYourContentModal,
}) => {
  //
  //
  //
  //
  //
  //
  //
  const handleSubmitYourContentClose = () => {
    _setToggledleSubmitYourContentModal(false);
    _toggledleSubmitYourContentModal(false);
  };

  const handleSubmitYourContentShow = () => {
    _setToggledleSubmitYourContentModal(true);
    _toggledleSubmitYourContentModal(true);
  };

  //
  //
  //
  //
  //
  //
  return (
    <Modal
      show={toggleSubmitYourContentModal}
      onHide={handleSubmitYourContentClose}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h4 className="submitYourContent_modal_header_1">
            Subscribe To Our Mailer
          </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="subscribeToMailer_img_parent_1">
            <img
              src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/web-mail-subscription-1.png"
              alt="placeholder"
              className="subscribeToMailer_form_img_1"
            />
          </div>
          <p className="subscribeToMailer_text_1">
            Stay updated with our latest news and updates by subscribing to our
            mailing list.
          </p>
          <div className="subscribeToMailer_form_parent_1">
            <div className="subscribeToMailer_input_parent_1">
              {/* <label for="name">Name:</label> */}
              <input
                placeholder="Enter Your Name"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="subscribeToMailer_input_parent_1">
              {/* <label for="email">Email:</label> */}
              <input
                placeholder="Enter Your Email"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="subscribeToMailer_button_parent_1">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          variant="secondary"
          className="submitYourContent_parent_1"
          onClick={handleSubmitYourContentClose}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default SubcribeToNewsletter;
