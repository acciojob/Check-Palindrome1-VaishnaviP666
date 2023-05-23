// complete the given function

function palindrome(str){
 let j = str.length - 1;
	if(str.length/2==0)
	{
    for (let i = 0; i < j / 2; i++) {
        let x = str[i];
        let y = str[j - i];
        if (x != y) {
           
            return false;
        }
    }
 
    return true;
	}else
	{
		 for (let i = 0; (i < j / 2) + 1; i++) {
        let x = str[i];
        let y = str[j - i];
        if (x != y) {
           
            return false;
        }
    }
 
    return true;
	}
}
module.exports = palindrome
