class StationRepository {
  #stations = [];

  stations() {
    return this.#stations;
  }

  addStation(station) {
    this.#stations.push(station);
  }

  deleteStation(name) {
    this.#stations = this.#stations.filter((station) => station.getName() !== name);
  }
}
