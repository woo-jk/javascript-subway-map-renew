const Validator = require("./Validator");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  play() {}

  requestMainFeature() {
    InputView.readMainFeature((command) => {
      if (!this.handleError(Validator.valdateMainCommand, command)) {
        this.requestMainFeature();
        return;
      }
    });
  }

  handleError(validate, input) {
    try {
      validate(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  }
}

module.exports = App;
