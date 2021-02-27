var apartment = {
	bedroom: {
	  area: 20,
	  bed: {
		type: 'twin-bed',
		price: 100
	  }
	}
  };
  
  function getObjectKey(obj){
	for(var index in obj){
	  console.log(index);
	}
	if(index != null){
	  getObjectKey(obj[index]);
	}
  }
  getObjectKey(apartment)