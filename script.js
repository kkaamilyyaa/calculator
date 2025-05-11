document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateDowry);

function calculateDowry() {
  let basePrice = 100;

  const educationCoeff = parseFloat(document.getElementById("education").value);
  const netWorthCoeff = parseFloat(document.getElementById("netWorth").value);
  const casteBonus = parseInt(document.getElementById("caste").value);

  const ageRadios = document.querySelectorAll('input[name="age"]');
  let ageCoeff = 1;
  ageRadios.forEach((radio) => {
    if (radio.checked) ageCoeff = parseFloat(radio.value);
  });

  let skillsBonus = 0;
  document.querySelectorAll(".skill").forEach((skill) => {
    if (skill.checked) skillsBonus += parseInt(skill.value);
  });

  let repCoeff = 1;
  document.querySelectorAll(".reputation").forEach((rep) => {
    if (rep.checked) repCoeff *= parseFloat(rep.value);
  });

  let repFlatPenalty = 0;
  document.querySelectorAll(".reputation-flat").forEach((rep) => {
    if (rep.checked) repFlatPenalty -= 20;
  });

  let finalPrice = basePrice;
  finalPrice *= educationCoeff;
  finalPrice *= netWorthCoeff;
  finalPrice *= ageCoeff;
  finalPrice *= repCoeff;
  finalPrice += casteBonus + skillsBonus + repFlatPenalty;

  finalPrice = Math.round(finalPrice);

  document.getElementById("price").textContent = finalPrice;

  const resultDiv = document.getElementById("result");
  resultDiv.style.backgroundColor = finalPrice >= 300 ? "#d1ffd1" : "#ffd1d1";
  resultDiv.style.borderLeftColor = finalPrice >= 300 ? "#2f852f" : "#852f2f";
}
