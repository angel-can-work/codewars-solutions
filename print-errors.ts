/*
Given a string, return the error rate of the printer as a string representing 
a rational whose numerator is the number of errors (letters n to Z) and 
the denominator the length of the control string.

The string has a length greater or equal to one and contains only letters from a to z.
Ex. s = "aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"
*/

export class G964 {
    public static printerError(s: string): string {
        let num: number = 0;
        const dem: number = s.length;

        for (var i = 0; i < s.length; i++) {
            if (s.charCodeAt(i) > 109) {
                num += 1
            }
        }
        return num + "/" + dem;
    }
}