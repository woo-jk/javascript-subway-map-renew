const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readFeature(callback) {
    MissionUtils.Console.readLine("\n## 원하는 기능을 선택하세요.\n", callback);
  },

  readRegisterStation(callback) {
    MissionUtils.Console.readLine("## 등록할 역 이름을 입력하세요", callback);
  },

  readDeleteStation(callback) {
    MissionUtils.Console.readLine("## 삭제할 역 이름을 입력하세요", callback);
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
