// complete the given function

function palindrome(str){
 const arrayValues = str.split('');

    
    const reverseArrayValues = arrayValues.reverse();

    
    const reverseString = reverseArrayValues.join('');
           if(str != reverseString) {
            return false;
		   }
        }
    }
 
    return true;
	
 
    
}
module.exports = palindrome
