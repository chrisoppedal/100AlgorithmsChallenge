export function electionsWinners(votes: number[], k: number): number {
    // return number with chance to win with k remaining votes
    let remainingCandidates: number = 0;
    const mostVotes: number = Math.max(...votes);
    for (let i = 0; i < votes.length; i++) {
        if (votes[i] + k > mostVotes) {
            remainingCandidates++;
        }
    }
    return remainingCandidates;
}

console.log(electionsWinners([2, 3, 5, 2], 3));