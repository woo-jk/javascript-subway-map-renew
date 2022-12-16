const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printMainFeature() {
    MissionUtils.Console.print(
      "\n## 메인 화면\n1. 역 관리\n2. 노선 관리\n3. 구간 관리 \n4. 지하철 노선도 출력\nQ. 종료\n"
    );
  },

  printStationFeature() {
    MissionUtils.Console.print("\n## 역 관리 화면\n1. 역 등록\n2. 역 삭제\n3. 역 조회\nB. 돌아가기\n");
  },

  printLineFeature() {
    MissionUtils.Console.print("\n## 노선 관리 화면\n1. 노선 등록\n2. 노선 삭제\n3. 노선 조회\nB. 돌아가기\n");
  },

  printRouteFeature() {
    MissionUtils.Console.print("## 구간 관리 화면\n1. 구간 등록\n2. 구간 삭제\nB. 돌아가기\n");
  },

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

  printErrorMessage(error) {
    MissionUtils.Console.print(error.message);
  },
};

module.exports = OutputView;
