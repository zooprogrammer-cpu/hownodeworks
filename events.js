class EventEmitter {
  #listeners = [];

  on(e, fn) {
    this.#listeners.push({ event: e, fn });
  }

  emit(e, ...args) {
    const toUpdate = this.#listeners.filter(lsn => lsn.event === e);
    toUpdate.forEach(lsn => lsn.fn(...args));
  }
}

const emitter = new EventEmitter();

emitter.on('sale', price => {
  console.log(`New graphics card sold for ${price}$!`);
});

emitter.on('sale', (_, stock) => {
  console.log(`${stock} items left in stock.`);
});

emitter.on('restock', () => {
  console.log('Graphics cards fully restocked!');
});

emitter.emit('sale', 1000, 10);
emitter.emit('restock');



