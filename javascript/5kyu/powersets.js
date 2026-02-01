/*
For the given set S its powerset is the set of all possible subsets of S.

Given an array of integers nums, your task is to return the powerset of its elements.

Implement an algorithm that does it in a depth-first search fashion. That is, for every integer in the set, we can either choose to take or not take it. At first, we choose NOT to take it, then we choose to take it(see more details in exampele).
*/

function powerset(nums) {
    const numsReverse = [...nums].reverse()
    const result = [[]]
    // Iterate over subsets
    for(let item = 0; item < numsReverse.length; item++){
        const currentLength = result.length

        // new subset
        for(let i = 0; i < currentLength; i++) {
            const newSet = [numsReverse[item], ...result[i]]
            result.push(newSet)
        }
    }
    return result
}
