const poll = {
  question: "What is your favourite programming language?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let pollNumber = Number(
      prompt(
        `${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n(Write option number)`
      )
    );
    while (pollNumber > this.options.length) {
      alert("Please input a valid option");
      pollNumber = Number(
        prompt(
          `${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n(Write option number)`
        )
      );
    }
    if (pollNumber === null) return;
    else if (pollNumber === 0) {
      this.answers[pollNumber]++;
      console.log(this.answers);
      // return this.answers;
    } else if (pollNumber === 1) {
      this.answers[pollNumber]++;
      console.log(this.answers);
      // return this.answers;
    } else if (pollNumber === 2) {
      this.answers[pollNumber]++;
      console.log(this.answers);
      // return this.answers;
    } else if (pollNumber === 3) {
      this.answers[pollNumber]++;
      console.log(this.answers);
      // return this.answers;
    }
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
