export class G964 {
    public static printerError(s: string): string {
      let num: number = 0;
      const dem: number = s.length;
      
      for (var i= 0; i < s.length; i++){
        if(s.charCodeAt(i) > 109){
          num += 1
        }
      }
      return num + "/" + dem;
    }
  }