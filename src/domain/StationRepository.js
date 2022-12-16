class StationRepository {
  #stations = [];

  stations() {
    return this.#stations;
  }

  isExistStation(name) {
    let isExist = false;
    this.#stations.forEach((station) => {
      if (station.getName() === name) isExist = true;
    });
    return isExist;
  }

  addStation(station) {
    if (this.isExistStation(station.getName())) throw new Error("[ERROR] 이미 등록된 역 이름입니다.");
    this.#stations.push(station);
  }

  deleteStation(name) {
    this.#stations = this.#stations.filter((station) => station.getName() !== name);
  }
}

module.exports = StationRepository;
