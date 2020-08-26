/* 
Create a fibonacci function that given a signature array/list, 
returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; 
if n == 0, then return an empty array
*/

export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    let sequence: number[] = [];
    let signature = [a, b, c];
    let next: number = 0;

    sequence = signature;

    while (sequence.length < n) {
        next = signature.reduce((a, b) => a + b, 0);
        sequence.push(next);
        signature = sequence.slice(Math.max(sequence.length - 3, 1));
    }

    return sequence.slice(0, n);;
}