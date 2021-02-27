var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: 'twin-bed',
      price: 100
    }
  }
};
var sample=[];
function getObjectKey(obj){
    
  for(var index in obj){
    sample.push(index);
  }
  if(index != null){
    getObjectKey(obj[index]);
  }
  return sample;
}