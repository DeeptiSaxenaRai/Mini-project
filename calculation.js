const inputHeight = document.getElementById("inputHeight");
const ageValue = document.getElementById("selectValue");
const resultValue = document.querySelector("#showResult");

const calculateWeight = () => {
  let resultValue = "";
  switch (inputHeight.value !== "" && ageValue.value) {
    case "year1":
      resultValue = `According to age, Ideal weight for male kids is 9.66kg & female kids is 9.25kg`;
      break;
    case "year2":
      resultValue = `According to age, Ideal weight for male kids is 12.47kg & female kids is 12.02kg`;
      break;
    case "year3":
      resultValue = `According to age, Ideal weight for male kids is 14.06kg & female kids is 14.29kg`;
      break;
    case "year4":
      resultValue = `According to age, Ideal weight for male kids is 16.33kg & female kids is 15.42kg`;
      break;
    case "year5":
      resultValue = `According to age, Ideal weight for male kids is 18.37 kg & female kids is 17.92kg`;
      break;
    default:
      resultValue = "Fill the correct Value";
  }
  showResult.textContent = resultValue;
};
