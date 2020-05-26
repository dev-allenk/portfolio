export default class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
    this.observers = [];
  }

  subscribe(callback) {
    this.observers.push(callback);
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.notify();
  }

  notify() {
    this.observers.forEach((callback) => callback());
  }
}
