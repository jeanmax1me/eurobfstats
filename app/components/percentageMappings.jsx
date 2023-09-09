// percentageMappings.js

const percentageMappings = {
    age: {
        "18-20": "6.25",  
        "20-25": "8.75",  
        "25-30": "11.25", 
        "30-35": "11.25", 
        "35-40": "11.25", 
        "40-45": "10",    
        "45-50": "8.75",  
        "50-55": "6.25",  
        "55-65": "6.25",  
      },
    height: {
      "160": "92.5",  // Middle number of "90% to 95%"
      "165": "82.5",  // Middle number of "80% to 85%"
      "170": "72.5",  // Middle number of "70% to 75%"
      "175": "62.5",  // Middle number of "60% to 65%"
      "180": "47.5",  // Middle number of "45% to 50%"
      "185": "32.5",  // Middle number of "30% to 35%"
      "190": "17.5",  // Middle number of "15% to 20%"
    },
    looks: {
        "1": "2",   // Middle number of "2%"
        "2": "8",   // Middle number of "8%"
        "3": "10",  // Middle number of "10%"
        "4": "20",  // Middle number of "20%"
        "5": "20",  // Middle number of "20%"
        "6": "20",  // Middle number of "20%"
        "7": "20",  // Middle number of "20%"
        "8": "5",   // Middle number of "5%"
        "9": "3",   // Middle number of "3%"
        "10": "2",  // Middle number of "2%"
      },
      income: {
        "15000": "85",     // Middle number of "80% to 90%"
        "20000": "75",     // Middle number of "70% to 80%"
        "25000": "65",     // Middle number of "60% to 70%"
        "30000": "55",     // Middle number of "50% to 60%"
        "40000": "35",     // Middle number of "30% to 40%"
        "50000": "25",     // Middle number of "20% to 30%"
        "60000": "15",     // Middle number of "10% to 20%"
        "75000": "7.5",    // Middle number of "5% to 10%"
        "100000": "3.5",   // Middle number of "2% to 5%"
        "150000": "1.5",   // Middle number of "1% to 2%"
        "200000": "0.75",  // Middle number of "0.5% to 1%"
        "250000": "0.35",  // Middle number of "0.2% to 0.5%"
        "300000": "0.15",  // Middle number of "0.1% to 0.2%"
        "400000": "0.05",  // Very small percentage, less than 0.1%
        "500000": "0.03",  // Very small percentage, less than 0.1%
      },
      married: {
        "18-20": "10",   // Middle number of "5% to 15%"
        "20-25": "27.5", // Middle number of "20% to 35%"
        "25-30": "37.5", // Middle number of "30% to 45%"
        "30-35": "47.5", // Middle number of "40% to 55%"
        "35-40": "52.5", // Middle number of "45% to 60%"
        "40-45": "57.5", // Middle number of "50% to 65%"
        "45-50": "62.5", // Middle number of "55% to 70%"
        "50-55": "67.5", // Middle number of "60% to 75%"
        "55-65": "72.5", // Middle number of "65% to 80%"
      },
  };

  // Define the percentage mappings for age ranges
export const agePercentageMappings = [
    { label: "18-20", percentage: 7 },
    { label: "20-25", percentage: 9 },
    { label: "25-30", percentage: 9 },
    { label: "30-35", percentage: 9 },
    { label: "35-40", percentage: 8 },
    { label: "40-45", percentage: 9 },
    { label: "45-50", percentage: 7 },
    { label: "50-55", percentage: 5 },
    { label: "55-65", percentage: 4 },
  ];
  
// Function to calculate the total percentage for selected age range
export function calculateAgeRange(minAge, maxAge) {
    const ageMappings = percentageMappings.age;
    const minAgeValue = ageMappings[minAge];
    const maxAgeValue = ageMappings[maxAge];
  
    if (!minAgeValue || !maxAgeValue) {
      return 0; // Return 0 if age range values are missing
    }
  
    return (
      Object.values(ageMappings)
        .slice(
          Object.keys(ageMappings).indexOf(minAge),
          Object.keys(ageMappings).indexOf(maxAge) + 1
        )
        .reduce((acc, value) => acc + parseFloat(value), 0) / 100
    );
  }
  
  
  export default percentageMappings;
  