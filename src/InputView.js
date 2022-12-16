const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readMainFeature(callback) {
    MissionUtils.Console.readLine(
      "## 메인 화면\n1. 역 관리\n2. 노선 관리\n3.구간 관리 \n4. 지하철 노선도 출력\nQ. 종료\n\n## 원하는 기능을 선택하세요.\n",
      callback
    );
  },

  readStationFeature(callback) {
    MissionUtils.Console.readLine(
      "## 역 관리 화면\n1. 역 등록\n2. 역 삭제\n3. 역 조회\nB. 돌아가기\n\n## 원하는 기능을 선택하세요.\n",
      callback
    );
  },

  readRegisterStation(callback) {
    MissionUtils.Console.readLine("## 등록할 역 이름을 입력하세요", callback);
  },

  readDeleteStation(callback) {
    MissionUtils.Console.readLine("## 삭제할 역 이름을 입력하세요", callback);
  },

  readLineFeature(callback) {
    MissionUtils.Console.readLine(
      "## 노선 관리 화면\n1. 노선 등록\n2. 노선 삭제\n3. 노선 조회\nB. 돌아가기\n\n## 원하는 기능을 선택하세요.\n",
      callback
    );
  },

  readRegisterLine(callback) {
    MissionUtils.Console.readLine("## 등록할 노선 이름을 입력하세요", callback);
  },

  readUpStation(callback) {
    MissionUtils.Console.readLine("## 등록할 노선의 상행 종점역 이름을 입력하세요.", callback);
  },

  readDownStation(callback) {
    MissionUtils.Console.readLine("## 등록할 노선의 하행 종점역 이름을 입력하세요.", callback);
  },

  readDeleteLine(callback) {
    MissionUtils.Console.readLine("## 삭제할 노선 이름을 입력하세요", callback);
  },
};

module.exports = InputView;
