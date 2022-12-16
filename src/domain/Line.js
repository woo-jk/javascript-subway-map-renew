class Line {
  #name;
  #route;

  constructor(name, upTerminal, downTerminal) {
    this.#name = name;
    this.#route = [upTerminal, downTerminal];
  }

  getName() {
    return this.#name;
  }
}

module.exports = Line;
