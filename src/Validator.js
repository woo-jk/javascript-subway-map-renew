const Validator = {
  valdateMainCommand(command) {
    if (command !== "1" && command !== "2" && command !== "3" && command !== "4" && command !== "Q") {
      throw new Error("[ERROR] 선택할 수 없는 기능입니다.");
    }
  },

  validateStationCommand(command) {
    if (command !== "1" && command !== "2" && command !== "3" && command !== "B") {
      throw new Error("[ERROR] 선택할 수 없는 기능입니다.");
    }
  },
};

module.exports = Validator;
