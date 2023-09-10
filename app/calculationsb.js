import percentageMappings from "./components/percentageMappings";

export function calculateRarity(
    minAge,
    maxAge,
    isMarried,
    minLooks,
    minIncome,
    minHeight
) {
    console.log("minAge:", minAge);
    console.log("maxAge:", maxAge);
    console.log("isMarried:", isMarried);
    console.log("minLooks:", minLooks);
    console.log("minIncome:", minIncome);
    console.log("minHeight:", minHeight);
    minAge = parseFloat(minAge);
    maxAge = parseFloat(maxAge);
    isMarried = isMarried === "married"; // Convert to boolean

    const agePercentages = [];
    for (let age = minAge; age <= maxAge; age++) {
        const agePercentage = parseFloat(percentageMappings.age[age.toString()]);
        if (!isNaN(agePercentage)) {
            agePercentages.push(agePercentage);
        }
    }

    const ageResult = agePercentages.reduce((sum, percentage) => sum + percentage, 0);

    const heightPercentage = parseFloat(percentageMappings.height[minHeight.toString()]);

    const looksPercentage = calculateLooksPercentage(minLooks);

    const incomePercentage = calculateIncomePercentage(minIncome);

    let marriedResult = 1;
    if (!isMarried) {
        marriedResult = calculateMarriedPercentage(minAge, maxAge);
    }

    let rarityResult = ageResult * (1 - marriedResult) * (1 - heightPercentage) * (1 - looksPercentage) * (1 - incomePercentage);

    rarityResult = rarityResult * 100;

    const rarityFraction = `1 out of ${Math.round(1 / (rarityResult / 100)).toLocaleString()} European citizens aged 18 to 65`;

    return `${rarityResult.toFixed(5)}% / Your desired boyfriend is ${rarityFraction}`;
}

function calculateLooksPercentage(minLooks) {
    minLooks = parseInt(minLooks);
    const looksPercentage = percentageMappings.looks;
    let looksResultPercentage = 0;

    for (let looks = 1; looks <= minLooks; looks++) {
        const looksString = looks.toString();
        if (looksPercentage[looksString]) {
            looksResultPercentage += parseFloat(looksPercentage[looksString]);
        }
    }

    return looksResultPercentage;
}

function calculateIncomePercentage(minIncome) {
    minIncome = parseFloat(minIncome);
    const incomePercentage = percentageMappings.income[minIncome.toString()];
    return incomePercentage;
}

function calculateMarriedPercentage(minAge, maxAge) {
    minAge = parseFloat(minAge);
    maxAge = parseFloat(maxAge);
    const ageRange = [];
    for (let age = minAge; age <= maxAge; age++) {
        ageRange.push(age);
    }

    let sumPercentage = 0;
    for (const age of ageRange) {
        const percentage = parseFloat(percentageMappings.married[age.toString()]);
        sumPercentage += parseFloat(percentage);
    }

    const marriedResult = sumPercentage / ageRange.length;
    return marriedResult;
}
