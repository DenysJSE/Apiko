function calculateWordsInString(str){
  str = str.replace(/(^\s*)|(\s*$)/gi,"");
  str = str.replace(/[ ]{2,}/gi," ");
  str = str.replace(/\n /,"\n"); 
  console.log(str.split(' ').filter(function(string){return string != "";}).length);
}

calculateWordsInString("I am Denys")
calculateWordsInString("I   am    Denys   ")
calculateWordsInString("I  am Denys   pro")