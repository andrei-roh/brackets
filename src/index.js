module.exports = function check(str, bracketsConfig) {
  for (k = 0; k < bracketsConfig.length + 100; k++){
    for (i = 0; i < bracketsConfig.length; i++){
      for (j = 0; j <= str.length; j++){
        if (str[j] + str[j + 1] == bracketsConfig[i].join('')){
          str = str.replace(str[j] + str[j + 1],'');
        }
      }
    }
  }
  if(str.length === 0){
    return true
    }
  else {
    return false
    }
}
