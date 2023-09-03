const fiveNumbers = [1, 2, 3, 4, 5];

const personalInfo = {
  name: "Henry",
  age: 24,
  height: 178,
  location: "London",
  nationality: "British",
};

const nextThreeNumbers = [6, 7, 8];

const allNumbers = [...fiveNumbers, ...nextThreeNumbers];

const additionalInfo = {
  occupation: "Product engineer",
  hobby: "Golf",
  education: "Ms degree",
};

const fullInfo = { ...personalInfo, ...additionalInfo };

const [firstNum, secondNum, thirdNum] = fiveNumbers;

const { name, location, nationality } = personalInfo;