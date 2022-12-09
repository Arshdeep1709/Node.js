import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('Please turn off the motor !');
  setTimeout(() => {
      console.log('Please turn off the motor ! Its a gentle reminder');
    
  },10000);

});
myEmitter.emit('waterfull');    