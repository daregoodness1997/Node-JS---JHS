const EventEmiiter = require('events');

const customEmitter = new EventEmiiter();

customEmitter.on('response', (name, id) => {
  console.log(`data recieved ${name} with id:${id}`);
});

customEmitter.on('response', () => {
  console.log('some other logic');
});
customEmitter.emit('response', 'john', 34);
