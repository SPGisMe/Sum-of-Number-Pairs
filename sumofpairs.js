//ints is the array you want to search through with 's' as the value you want.
var sum_pairs = function(ints, s){
  const values = {}
  
  for (i = 0; i < ints.length; i++) {
  //add key:value pairs for the solution
    if (values[ints[i]] !== undefined) {
      return [values[ints[i]], ints[i]];
    } else {
      let diff = s - ints[i];
      values[diff] = ints [i]; //stores the difference between array value and s as the key for ints[i] in values object
    }
  }
  return undefined;
}
