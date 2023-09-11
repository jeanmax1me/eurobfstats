import percentageMappings from "./components/percentageMappings";

function calculateAgeRangePercentage(minAge, maxAge) {


  minAge = parseFloat(minAge);
  maxAge = parseFloat(maxAge);

  const agePercentages = [];
  for (let age = minAge; age <= maxAge; age++) {
    const ageString = age.toString();
    if (!isNaN(percentageMappings.age[ageString])) {
      agePercentages.push(parseFloat(percentageMappings.age[ageString]));
    }
  }

  const ageResult = agePercentages.reduce((sum, percentage) => sum + percentage, 0);

  return ageResult.toFixed(5);
}

function calculateLooksPercentage(minLooks) {
  minLooks = parseInt(minLooks);
  let looksResultPercentage = 0;

  for (let looks = 1; looks < minLooks; looks++) {
    const looksString = looks.toString();
    if (percentageMappings.looks[looksString]) {
      looksResultPercentage += parseFloat(percentageMappings.looks[looksString]);
    }
  }

  // Add console logs for debugging
  console.log(`minLooks: ${minLooks}`);
  console.log(`looksResultPercentage: ${looksResultPercentage}`);

  return looksResultPercentage;
}




function calculateHeightPercentage(minHeight) {
  minHeight = parseFloat(minHeight);
  const heightString = minHeight.toString();
  if (!isNaN(percentageMappings.height[heightString])) {
    const heightPercentage = parseFloat(percentageMappings.height[heightString]);
    return heightPercentage;
  }
  return "0.00000";
}

function calculateIncomePercentage(minIncome) {
  minIncome = parseFloat(minIncome);
  const incomeString = minIncome.toString();
  if (!isNaN(percentageMappings.income[incomeString])) {
    const incomePercentage = parseFloat(percentageMappings.income[incomeString]);
    return incomePercentage;
  }
  return "0.00000";
}

function calculateMarriedPercentage(minAge, maxAge) {
  minAge = parseFloat(minAge);
  maxAge = parseFloat(maxAge);
  let sumPercentage = 0;
  let count = 0;

  for (let age = minAge; age <= maxAge; age++) {
    const ageString = age.toString();
    if (!isNaN(percentageMappings.married[ageString])) {
      sumPercentage += parseFloat(percentageMappings.married[ageString]);
      count++;
    }
  }

  if (count === 0) return "0.00000";
  return (sumPercentage / count).toFixed(5);
}

export function calculateRarity(
  minAge,
  maxAge,
  isMarried,
  minLooks,
  minIncome,
  minHeight
) {
// Correct the variable assignments
const tempMinLooks = minLooks;
const tempMinIncome = minIncome;
const tempMinHeight = minHeight;

// Add console logs for the temporary values
console.log(`tempMinLooks: ${tempMinLooks}`);
console.log(`tempMinIncome: ${tempMinIncome}`);
console.log(`tempMinHeight: ${tempMinHeight}`);

minLooks = tempMinIncome;
minIncome = tempMinHeight;
minHeight = tempMinLooks;



// Add console logs for the updated values
console.log(`minLooks: ${minLooks}`);
console.log(`minIncome: ${minIncome}`);
console.log(`minHeight: ${minHeight}`);
    // Add console logs to check prop values
    console.log(`minAge: ${minAge}`);
    console.log(`maxAge: ${maxAge}`);
    console.log(`isMarried: ${isMarried}`);
    console.log(`minLooks: ${minLooks}`);
    console.log(`minIncome: ${minIncome}`);
    console.log(`minHeight: ${minHeight}`);
  let rarityResult = calculateAgeRangePercentage(minAge, maxAge);
  console.log(`Rarity Result After Age Percentage: ${rarityResult}`);

  if (!isMarried) {
    const marriedResult = calculateMarriedPercentage(minAge, maxAge);
    console.log(`Married Result: ${marriedResult}`);
    rarityResult *= 1 - marriedResult;
  }

  const looksReduction = calculateLooksPercentage(minLooks);
  console.log(`Looks Reduction: ${looksReduction}`);
  rarityResult *= 1 - looksReduction;

  const incomeReduction = calculateIncomePercentage(minIncome);
  console.log(`Income Reduction: ${incomeReduction}`);
  rarityResult *= incomeReduction;

  const heightReduction = calculateHeightPercentage(minHeight);
  console.log(`Height Reduction: ${heightReduction}`);
  rarityResult *= heightReduction;

  const rarityPercentage = (rarityResult * 100).toFixed(5);
  const rarityFraction = `1 out of ${Math.round(1 / rarityResult).toLocaleString()} European men`;

  console.log(`Final Rarity Result: ${rarityResult}`);

  const percentage = (rarityResult * 100).toFixed(5);
  const fraction = `1 out of ${Math.round(1 / rarityResult).toLocaleString()} European men`;

  return {
    rarityPercentage: percentage,
    rarityFraction: fraction,
  };  
}

 

