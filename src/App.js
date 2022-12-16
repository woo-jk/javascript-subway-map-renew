const InputView = require("./InputView");

class App {
  play() {}
  requestMainFeature() {
    InputView.readMainFeature((command) => {});
  }
}

module.exports = App;
