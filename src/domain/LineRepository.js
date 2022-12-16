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

  getLines() {
    return this.#lines;
  }

  #isExistLine(name) {
    for (let line of this.#lines) {
      if (line.getName() === name) return true;
    }
    return false;
  }

  getLine(name) {
    if (!this.#isExistLine(name)) throw new Error("[ERROR] 해당 노선이 존재하지 않습니다.");

    return this.#lines.filter((line) => line.getName() === name)[0];
  }
}

module.exports = LineRepository;
