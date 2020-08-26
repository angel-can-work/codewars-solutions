export function SeriesSum(n: number): string {
    if (n === 0) {
        return "0.00";
    }
    let result: number = 1;
    let den: number = 4;

    for (let i = 1; i < n; i++) {
        result += (1 / den)
        den += 3;
    }
    return result.toFixed(2);
}