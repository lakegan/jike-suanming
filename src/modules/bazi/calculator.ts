// calculator.ts

// Bazi Calculation Module (Four Pillars of Destiny)

// Type definitions for Heavenly Stems and Earthly Branches
const heavenlyStems = ["Jia", "Yi", "Bing", "Ding", "Wu", "Ji", "Geng", "Xin", "Ren", "Gui"];
const earthlyBranches = ["Zi", "Chou", "Yin", "Mao", "Chen", "Si", "Wu", "Wei", "Shen", "You", "Xu", "Hai"];

// Function to calculate Four Pillars
function calculateBazi(dateOfBirth: string): { year: string, month: string, day: string, hour: string } {
    const date = new Date(dateOfBirth);
    const year = calculateHeavenlyStemAndEarthlyBranch(date.getFullYear());
    const month = calculateMonth(date);
    const day = calculateDay(date);
    const hour = calculateHour(date);

    return { year, month, day, hour };
}

// Calculate Heavenly Stem and Earthly Branch
function calculateHeavenlyStemAndEarthlyBranch(year: number): string {
    const stemIndex = (year - 4) % 10;
    const branchIndex = (year - 4) % 12;
    return `${heavenlyStems[stemIndex]} ${earthlyBranches[branchIndex]}`;
}

// Calculate Month Pillar based on the day of the month
function calculateMonth(date: Date): string {
    // Month calculation (simplified)
    const monthIndex = date.getMonth(); // 0-11
    const year = date.getFullYear();
    const stemIndex = (year - 4 + monthIndex + 1) % 10;
    const branchIndex = (year - 4 + monthIndex + 1) % 12;
    return `${heavenlyStems[stemIndex]} ${earthlyBranches[branchIndex]}`;
}

// Calculate Day Pillar
function calculateDay(date: Date): string {
    // Day calculation (simplified)
    // This requires the use of a more complex algorithm or table mapping specific to the date.
    const dayIndex = (date.getDate() + 9) % 10; // Placeholder logic
    const stemIndex = dayIndex; // Simplified Calculation
    const branchIndex = (date.getDate() + 3) % 12; // Simplified Calculation
    return `${heavenlyStems[stemIndex]} ${earthlyBranches[branchIndex]}`;
}

// Calculate Hour Pillar
function calculateHour(date: Date): string {
    // Hour calculation based on Chinese time division (2-hour intervals)
    const hourIndex = Math.floor(date.getHours() / 2); // Each hour block corresponds to a branch
    const year = date.getFullYear();
    const stemIndex = (year - 4 + hourIndex + 1) % 10;
    const branchIndex = (year - 4 + hourIndex + 1) % 12;
    return `${heavenlyStems[stemIndex]} ${earthlyBranches[branchIndex]}`;
}

// Example usage:
const bazi = calculateBazi('2026-04-06');
console.log(bazi);
