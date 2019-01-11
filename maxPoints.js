/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */


var maxPoints = function(points) {
    
    if (points.length < 1) {
        return 0
    }
    
    if (points.length == 1) {
        return 1
    }    
    
    let max = 0
    points.forEach((a, i) => {
        const mp = {}
        // const str1 = 'x:'+a.x +'y:'+a.y+':s::'
        const str1 = ':s::'
        let samePoint = 1
        for(let j = i+1; j < points.length; j++) {
            if(a.x == points[j].x && a.y == points[j].y) {
                samePoint++
            } else {
                const sl = slope(a, points[j]);
                mp[str1+sl] = mp[str1+sl] ? (mp[str1+sl] + 1) : 1;                
            }
        }
        
        let localMax = getMax(mp)
        localMax += samePoint
        max = localMax > max ? localMax : max
    })
    

    return max
};

const getMax = (mp) => {
    console.log(mp)
    let max = 0
    for(k in mp) {
        if(mp[k] > max) {
            max = mp[k]
        }
    }
    
    return max    
}

const slope = function(p1, p2) {
    
    if (p2.x == p1.x) {
        return NaN
    }
    
    const r =  1000000000000.0 * (p2.y - p1.y) / (p2.x - p1.x)
    
    // if (r < 0) {
    //     return r * -1
    // }
    
    return r
}

