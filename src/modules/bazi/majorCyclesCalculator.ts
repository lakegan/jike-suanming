// majorCyclesCalculator.ts

// Function to calculate the major cycles and annual flows
function calculateMajorCycles(year) {
    const cycles = [];
    // Assuming there are 5 major cycles, represented in years
    const majorCycles = [60, 120, 180, 240, 300];

    majorCycles.forEach(cycle => {
        const endYear = year + cycle;
        cycles.push({ cycle, endYear });
    });
    return cycles;
}

// Example usage
const currentYear = new Date().getUTCFullYear();
const majorCycles = calculateMajorCycles(currentYear);
console.log(majorCycles);
