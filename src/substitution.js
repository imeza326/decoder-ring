// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    input.toLowerCase(); 
    
    
    let message = ""; 
    
    

    if(!uniqueCheck(alphabet)) //no unique characters
       return false;
    
    //if not 26 character
    if (!input || !alphabet || alphabet.length !== 26) {
       return false;
                                                   }
      
    
    
    let standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
   
    
    function uniqueCheck(str) {
   
      
      if(str === undefined)//no string
        return false
      
      const duplicate = {}; 
    
      
      
      for (var i = 0; i < str.length; i++) {
        
       //not unique
       if (duplicate[str[i]] != null){
         duplicate[str[i]] = 1;
         return false; 
       } else {
         
         //unique
         duplicate[str[i]] = 0; 
         
       }
      
      }
      
      return true; 
      
    }
  
    try {
      
      
      if (encode === true){
        
        for(let i = 0; i < input.length; i++){
          
          let index = standardAlphabet.indexOf(input[i]);
          console.log(index); 
          if (index === -1 && input[i] === " "){
            
            message += " ";
            
          } else {
            
            message += alphabet[index]; 
            
          }
          
        }
        
        
      } else if (!encode) {//decoding
        
        for (let i = 0; i < input.length; i++){
          
          let index = alphabet.indexOf(input[i]);
          console.log(index); 
          if (index === -1 && input[i] === " "){
            
            message += " ";
            
          } else {
            
            message += standardAlphabet[index]; 
            
          }
          
        }
        
      } 
      
      return message;
           
    } catch (error) {
      
      return error; 
      
    }
       
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
