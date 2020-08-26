export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    let sequence: number[] = [];
    let signature = [a,b,c];
    let next: number = 0;
    
    sequence = signature;
    
    while(sequence.length < n){
      next = signature.reduce((a, b) => a + b, 0);
      sequence.push(next);
      signature = sequence.slice(Math.max(sequence.length - 3, 1));
    }
    
    return sequence.slice(0, n);;
  }