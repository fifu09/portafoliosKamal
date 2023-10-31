
export function hashIndex(string) {
    let hashValue = 0;
  
    for (let i = 0; i < string.length; i++) {
      hashValue += string.charCodeAt(i);
    }
    return hashValue.toString();
  }