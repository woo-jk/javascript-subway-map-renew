const Validator = {
  valdateMainCommand(command) {
    if (command !== "1" && command !== "2" && command !== "3" && command !== "4" && command !== "Q") {
      throw new Error("[ERROR] 1, 2, 3, 4, Q 중에 하나를 입력해야 합니다.");
    }
  },
};

module.exports = Validator;
