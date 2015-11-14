import alt from './alt';

class MyActions {
  addThing() {
    const seconds = (new Date()).getSeconds();
    this.dispatch(String(seconds));
  }
}

export default alt.createActions(MyActions);
