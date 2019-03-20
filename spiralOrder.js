var spiralOrder = function(matrix) {
    let left = -1,
        right = Array.isArray(matrix[0]) ? matrix[0].length : 0,
        top = 0,
        bottom = matrix.length,
        row = 0,
        col = 0;
    const out = [],
          totalLength = Array.isArray(matrix[0]) ? (matrix[0].length * matrix.length) : 0;

    while (out.length <= totalLength) {
      for(; col < right && out.length < totalLength; col++) { out.push(matrix[row][col]); }
      
      if (out.length >= totalLength) {
        break;
      }
      
      right -= 1
      col -= 1
      row += 1
      
      for(; row < bottom && out.length < totalLength; row++) { out.push(matrix[row][col]); }
      
      if (out.length >= totalLength) {
        break;
      }      
      
      bottom -= 1
      row -= 1
      col -= 1
      
      for(; col > left && out.length < totalLength; col--) { out.push(matrix[row][col]); }
      
      if (out.length >= totalLength) {
        break;
      }      
      
      left += 1
      col += 1
      row -= 1
      
      for(; row > top && out.length < totalLength; row--) { out.push(matrix[row][col]); }
      
      if (out.length >= totalLength) {
        break;
      }      
      
      top += 1
      row += 1
      col += 1
      
    }

    return out;
};
