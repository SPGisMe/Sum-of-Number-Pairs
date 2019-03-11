var sum_pairs = function(ints, s){
  const values = {}
  
  for (i = 0; i < ints.length; i++) {
  //add key:value pairs for the solution
    if (values[ints[i]] !== undefined) {
      return [values[ints[i]], ints[i]];
    } else {
      let diff = s - ints[i];
      values[diff] = ints [i];
    }
  }
  return undefined;
}
