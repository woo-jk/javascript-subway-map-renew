class Line {
  #name;
  #route;

  constructor(name, upTerminalStation, downTerminalStation) {
    this.#name = name;
    this.#route = [upTerminalStation, downTerminalStation];
  }

  addRoute(station, position) {
    this.#route.splice(position - 1, 0, station);
  }

  getName() {
    return this.#name;
  }
}

module.exports = Line;
