class LineRepository {
  #lines = [];

  lines() {
    return this.#lines;
  }

  addLine(line) {
    this.#lines.push(line);
  }

  deleteStation(name) {
    this.#lines = this.#lines.filter((line) => line.getName() !== name);
  }
}

module.exports = LineRepository;
