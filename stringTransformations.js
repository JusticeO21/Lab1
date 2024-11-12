function capitalize(str){
    if(!str || typeof(str) !== 'string') return str;

    if(str.length == 1 ) return str.toLocaleUpperCase();
    
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
}

function reverse(str) {
    if (!str || typeof (str) !== 'string') return str;
    
    return [...str].reverse().join('');
}


function isPalindrome(str){
    if (!str || typeof (str) !== 'string') return str;

    const cleanedString = str.replace(/[^a-zA-Z0-9]/g, '')
    
    let left = 0;
    let right = str.length - 1;	

    // Using the two pointers method to determine whether the string is polydrome or not
    while (left < right) { 
        if (cleanedString[left] !== cleanedString[right]) {
            return false
        }

        left += 1;
        right -= 1;
    }

    return true;
}

function wordCount(str){
    if (!str || typeof (str) !== 'string') return str;
    
    const trimedStr = str.trim();

    return trimedStr
        .split(/\s+/)
        .filter((word) => word.length > 0)
        .length
}
