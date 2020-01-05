function repeatInt(arr){
  const myHash = {};
  for(let i = 0; i<arr.length; i++){
    if(arr[i] in myHash){
      return [myHash[arr[i]], arr[i]]
    }
    myHash[arr[i]] = i;
  }
}

//displays [1,3]. 1 is the index of the first reocurring item, and 3 is the number itself
repeatInt([2,3,3,2,1,3,5,2,3])