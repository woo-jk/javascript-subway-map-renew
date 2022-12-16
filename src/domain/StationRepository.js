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
    this.#stations.push(station);
  }

  deleteStation(name) {
    this.#stations = this.#stations.filter((station) => station.getName() !== name);
  }
}

module.exports = StationRepository;
