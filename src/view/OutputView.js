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

  printRegisterLine() {
    MissionUtils.Console.print("\n[INFO] 지하철 노선이 등록되었습니다.");
  },

  printdeleteLine() {
    MissionUtils.Console.print("\n[INFO] 지하철 노선이 삭제되었습니다.");
  },

  printLines(lines) {
    MissionUtils.Console.print("\n## 노선 목록");
    lines.forEach((line) => MissionUtils.Console.print(`[INFO] ${line.getName()}`));
  },
};

module.exports = OutputView;