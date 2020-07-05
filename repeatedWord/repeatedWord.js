function repeatedWord(str){
    let result=[];
    let arr = str.toLowerCase().split(" ");
    for(let i=0 ; i<arr.length;i++){
      if(result.includes(arr[i])){
        return arr[i];}
      else{
        result.push(arr[i]);}
    }
    return 'No Repetition';
  }

  module.exports = repeatedWord;