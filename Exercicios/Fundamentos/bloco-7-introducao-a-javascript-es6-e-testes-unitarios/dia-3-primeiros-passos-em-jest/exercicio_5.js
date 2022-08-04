const techList = (array, nome) => {
    let obj = [];
    if (array.length === 0){
      return 'Vazio!';
    } else {
      let i = 0;
      while(obj.length < array.length){
        
        if(i > array.length) {
          i = 0;
        }
        
        if(array[i] === 'CSS' && obj.length === 0){
          obj.push({tech:array[i], name:nome})} 
        
        else if (array[i] === 'HTML' && obj.length === 1) {
            obj.push({tech:array[i],name:nome})} 
        
        else if (array[i] === 'JavaScript' && obj.length === 2) {
          obj.push({tech:array[i], name:nome})} 
        
        else if (array[i] === 'Jest' && obj.length === 3) {
          obj.push({tech:array[i], name:nome})} 
        
        else if (array[i] === 'React' && obj.length === 4) {
          obj.push({tech:array[i], name:nome})}
          ++i
      }
      return obj;
    }
  }

  console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

  module.exports = techList;