import { Modal } from 'bootstrap';

const myModal = new Modal(document.getElementById('my-modal'));

myModal.$body.prepend('Hello, world!');
