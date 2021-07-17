import _ from 'lodash';
import './style.css';
import Icon from './images/icon.png';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function component() {
    const element = document.createElement('button');
  

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('primary');
    element.classList.add('Hi');

    // const myIcon = new Image();
    // myIcon.src = Icon;
  
    // element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());
