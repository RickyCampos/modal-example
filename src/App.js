import React, { Component } from 'react';
import Modal from './Modal.js'
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div className="modalCard">
            <div className="modalHeader">
              <button onClick={this.handleHide.bind(this)} className="closeModal">X</button>
              <p>TEXTO DE CABECERA</p>
            </div>
            <div className="modalBody">
              Este es el texto del cuerpo del modal.
            </div>
          </div>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="app">
        Este div tiene overflow hidden.
        El modal se generará en otro elemento distinto.
        <button onClick={this.handleShow.bind(this)}>Show modal</button>
        {modal}
      </div>
    );
  }
}
