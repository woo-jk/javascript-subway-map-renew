const Line = require("./domain/Line");
const Station = require("./domain/Station");
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

  initSetting() {
    ["2호선", "3호선", "신분당선"].forEach((name) => this.#lineRepository.addLine(new Line(name)));

    ["교대역", "강남역", "역삼역", "남부터미널역", "양재역", "양재시민의숲역", "매봉역"].forEach((name) =>
      this.#stationRepository.addStation(new Station(anme))
    );
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
