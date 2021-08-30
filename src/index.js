  
module.exports = function check(str, bracketsConfig) {
  let bracketsLength = str.length;
  for (i = 0; i < bracketsLength; i++) {
    if (str.length > 1) {
      for (x = 0; x - 1 < str.length; x++) {
        for (brackets of bracketsConfig) { 
          if (str[x] === brackets[0]) {        
              if (str[x + 1] === brackets[1]) {   
                str = str.substring(0, x) + str.substring(x + 2)}}}}}};
 
  if (str === "") {return true}
    else {return false};
}