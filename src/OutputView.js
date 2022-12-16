const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printRegisterStation() {
    MissionUtils.Console.print("\n[INFO] 지하철 역이 등록되었습니다.");
  },
  printdeleteStation() {
    MissionUtils.Console.print("\n[INFO] 지하철 역이 삭제되었습니다.");
  },
  printStations(stations) {
    MissionUtils.Console.print("\n## 역 목록");
    stations.forEach((station) => MissionUtils.Console.print(`[INFO] ${station.getName()}`));
  },
};

module.exports = OutputView;
