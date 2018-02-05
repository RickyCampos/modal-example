import { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return ReactDOM.createPortal(this.props.children,modalRoot);
  }
}
