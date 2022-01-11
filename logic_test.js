let dataAnagram = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']

function anagram(dataAnagram) {
    let result = [];
    let indexDataHaveBeenApplied = [];

    for (let i = 0; i < dataAnagram.length; i++) {
        let temporaryResult = [];
        const data = dataAnagram[i];

        for (let j = 0; j < dataAnagram.length; j++) {
            const dataComparison = dataAnagram[j];

            if (i === j && indexDataHaveBeenApplied[j] !== undefined) {
                continue;
            }

            if ( indexDataHaveBeenApplied[j] === undefined && isAnagram(data, dataComparison)) {
                temporaryResult.push(dataComparison);
                indexDataHaveBeenApplied[j] = true;
            }

        }

        if (temporaryResult.length > 0) {
            result.push(temporaryResult);
        }
    }

    console.log(result);
}

function isAnagram(dataString, startingComparison) {
    if (dataString.length !== startingComparison.length) {
        return false;
    }

    let totalStringShouldExists = dataString.length;
    let totalCurrentString = 0;

    for (let index = 0; index < dataString.length; index++) {
        const character = dataString[index];
        for (let indexComparison = 0; indexComparison < startingComparison.length; indexComparison++) {
            const characterComparison = startingComparison[indexComparison];
            if (character === characterComparison) {
                totalCurrentString++;
                break;
            }
        }
    }

    return totalCurrentString === totalStringShouldExists;
}

anagram(dataAnagram);