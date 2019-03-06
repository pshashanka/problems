

function pascalTriangle(num) {
  
  if(num < 1) {
    return;
  }
  
  console.log("1");
  if(num == 1) {
    return;
  }
  
  let prevArr = [1,2,1]
  console.log(prevArr.join(' '));
  if(num == 2) {
    return;
  }
  
  for(let i = 2; i <= num; i++) {
    const temp = []
    prevArr.forEach((val, indx) => {
      
      if(indx === 0) {
        temp.push(val);
        return;
      }
      
      temp.push(val+prevArr[indx - 1])
      
      if(indx === prevArr.length - 1) {
        temp.push(val);
        return;        
      }

    })
    prevArr = temp;
    console.log(prevArr.join(' '));
  }
  
  
}



pascalTriangle(5);
