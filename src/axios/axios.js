

import axios from "axios"
const  axiosGet =function(url,callback,obj){
	
	   if(arguments.length==3){
	   	   axios.get(url,obj)
	   	    .then(function (response) {
			    callback(response.data)
			}).catch(function (error) {
			    console.log(error);
			});
	   }else{
	   	      axios.get(url)
				  .then(function (response) {
				      callback(response.data)
				  }).catch(function (error) {
				     console.log(error);
				  });
	   }
  		
  	}
export default axiosGet