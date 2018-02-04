import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = evt => {
    if (evt.keyCode === 27) { //esc
      evt.preventDefault();
      this.props.onClose()
    }
  };

  render() {
    const { onClose, children } = this.props;
    return (
      <div className="modal">
        <div className="modal-overlay" onClick={onClose} />
        <div className="cancel-button" onClick={onClose}>×</div>
        <div className="modal-block">
          {children}
        </div>
      </div>
    )
  }
}

export default Modal;
