/*
Input -> output
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/
export function accum(s: string): string {
    let i = 1;
    let returnString = '';
    let newString = '';

    for (var c of s) {
        newString = c.repeat(i).toLowerCase();
        newString = newString.replace(newString[0], newString.charAt(0).toUpperCase());
        returnString.length == 0 ? returnString += newString : returnString += ("-" + newString);
        i++;
    }
    return returnString;
}