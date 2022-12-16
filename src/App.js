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
    if (command === "1") console.log("123");
    if (command === "2") console.log("23");
    if (command === "3") console.log("3");
    if (command === "4") console.log("12eqwe3");
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
