export function isSubsequence(searchValue:string, itemName:string) {
    searchValue = searchValue.toLowerCase();
    itemName = itemName.toLowerCase();
  
    let i = 0; // pointer for searchValue
    for (let char of itemName) {
      if (char === searchValue[i]) i++;
      if (i === searchValue.length) return true;
    }
    return false;
  }
  