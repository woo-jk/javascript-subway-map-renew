const Validator = require("./Validator");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  #lineRepository;
  #stationRepository;

  constructor() {
    this.#lineRepository = new LineRepository();
    this.#stationRepository = new StationRepository();
  }

  play() {
    this.requestMainFeature();
  }

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

const app = new App();
app.play();

module.exports = App;
