const MissionUtils = require("@woowacourse/mission-utils");
const Line = require("./domain/Line");
const LineRepository = require("./domain/LineRepository");
const Station = require("./domain/Station");
const StationRepository = require("./domain/StationRepository");
const Validator = require("./Validator");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

const initStations = ["교대역", "강남역", "역삼역", "남부터미널역", "양재역", "양재시민의숲역", "매봉역"];

const initLines = [
  new Line("2호선", "교대역", "역삼역"),
  new Line("3호선", "교대역", "매봉역"),
  new Line("신분당선", "강남역", "양재시민의숲역"),
];

class App {
  #lineRepository;
  #stationRepository;

  constructor() {
    this.#lineRepository = new LineRepository();
    this.#stationRepository = new StationRepository();
    this.initSetting();
  }

  #initStation() {
    initStations.forEach((name) => this.#stationRepository.addStation(new Station(name)));
  }

  #initLine() {
    initLines[0].addRoute("강남역", 2);
    initLines[1].addRoute("남부터미널역", 2);
    initLines[1].addRoute("양재역", 3);
    initLines[2].addRoute("양재역", 2);
    initLines.forEach((line) => this.#lineRepository.addLine(line));
  }

  initSetting() {
    this.#initStation();
    this.#initLine();
  }

  play() {
    this.showMainFeature();
  }

  showMainFeature() {
    OutputView.printMainFeature();
    this.requestMainFeature();
  }

  requestMainFeature() {
    InputView.readFeature((command) => {
      this.handleError(this.executeMainFeature.bind(this, command), this.requestMainFeature.bind(this));
    });
  }

  executeMainFeature(command) {
    Validator.valdateMainCommand(command);
    if (command === "1") this.showStationFeature();
    if (command === "2") console.log("미구현");
    if (command === "3") console.log("미구현");
    if (command === "4") console.log("미구현");
    if (command === "Q") this.end();
  }

  showStationFeature() {
    OutputView.printStationFeature();
    this.requestStationFeature();
  }

  requestStationFeature() {
    InputView.readFeature((command) => {
      this.handleError(this.executeStationFeature.bind(this, command), this.showStationFeature.bind(this));
    });
  }

  executeStationFeature(command) {
    Validator.validateStationCommand(command);
    if (command === "1") this.requestRegisterStation();
    if (command === "2") this.requestDeleteStation();
    if (command === "B") this.showMainFeature();
  }

  requestRegisterStation() {
    InputView.readRegisterStation((name) => {
      this.handleError(() => {
        this.#stationRepository.addStation(new Station(name));
        OutputView.printRegisterStation();
        this.showMainFeature();
      }, this.showStationFeature.bind(this));
    });
  }

  requestDeleteStation() {
    InputView.readDeleteStation((name) => {
      this.handleError(() => {
        this.#stationRepository.deleteStation(name);
        OutputView.printdeleteStation();
        this.showMainFeature();
      }, this.showStationFeature.bind(this));
    });
  }

  end() {
    MissionUtils.Console.close();
  }

  handleError(callback, request) {
    try {
      callback();
    } catch (error) {
      OutputView.printErrorMessage(error);
      request();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
