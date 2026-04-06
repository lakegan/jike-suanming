// Heavenly Stems
const heavenlyStems = [
    'Jia', 'Yi', 'Bing', 'Ding', 'Wu',
    'Jia', 'Geng', 'Xin', 'Ren', 'Gui'
];

// Earthly Branches
const earthlyBranches = [
    'Zi', 'Chou', 'Yin', 'Mao', 'Chen',
    'Si', 'Wu', 'Wei', 'Shen', 'You',
    'Xu', 'Hai'
];

// Five Elements Relationships
const fiveElements = {
    wood: { generates: ['fire'], destroyed_by: ['metal'] },
    fire: { generates: ['earth'], destroyed_by: ['water'] },
    earth: { generates: ['metal'], destroyed_by: ['wood'] },
    metal: { generates: ['water'], destroyed_by: ['fire'] },
    water: { generates: ['wood'], destroyed_by: ['earth'] }
};

// Ten Gods Definitions
const tenGods = {
    '1': 'Jia - represents power',
    '2': 'Yi - represents communication',
    '3': 'Bing - represents action',
    '4': 'Ding - represents insight',
    '5': 'Wu - represents strength',
    '6': 'Jia - represents transformation',
    '7': 'Geng - represents resilience',
    '8': 'Xin - represents structure',
    '9': 'Ren - represents wisdom',
    '10': 'Gui - represents intuition'
};

// Heavenly Stem Combinations
const heavenlyStemCombinations = {
    'Jia': ['Yin', 'Chen'],
    'Yi': ['Mao', 'Wei'],
    'Bing': ['Si', 'Wu'],
    'Ding': ['You', 'Shen'],
    // add other combinations...
};

// Branch Relationships
const branchRelationships = {
    'Zi': ['Chou', 'Yin'],
    'Chou': ['Zi', 'Mao'],
    // additional relationships...
};

export {
    heavenlyStems,
    earthlyBranches,
    fiveElements,
    tenGods,
    heavenlyStemCombinations,
    branchRelationships
};