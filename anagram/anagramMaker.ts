function anagramMaker(str: string): string[]{


  let counter = str.length;  

    const helper = function (input: string) : string[] {
      // ab - ab, ba

        if (input.length < 2) {
            return [input]
        }

        if (input.length == 2) {
          return [input.charAt(0) + input.charAt(1), input.charAt(1) + input.charAt(0)]
      }

      let output : string[] = []
      for (let i = 0; i < counter && i < input.length; i++) {
        const char = input.charAt(0);
        input = input.slice(1)
        const temp = helper(input)
        console.log(input, temp, char)
        
        output.push(...temp.map(item => char + item)) 
        console.log('output', output) 
        input += char      
      }   
      return output
    }

    const results = helper(str)
    return results;
}



console.log(anagramMaker('abcd'))
