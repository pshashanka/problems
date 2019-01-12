var minWindow = function (s, t) {
    let minStr = ""
    for (let i = 0; i < s.length; i++) {

        if (t.indexOf(s[i]) >= 0) {

            let localStr = s[i]
            let matched = t.replace(s[i], '')
            for (let j = i + 1; j < s.length && matched.length < t.length && matched.length > 0; j++) {
                if (t.indexOf(s[j]) >= 0) {
 
                    matched = matched.replace(s[j], '')
                } 
                
                localStr += s[j]
            }
            
            let adjusted = localStr.length
            for (let p=localStr.length-1; p >= 0; p--) {
                if (t.indexOf(localStr[p]) >= 0) {
                    break;
                } else {
                    adjusted--
                }
            }  
            localStr = localStr.substring(0,adjusted)
            if (matched.length == 0 && (minStr.length <= 0 || minStr.length >= localStr.length)) {
                minStr = localStr
            }

        }

    }


        return minStr

    }
