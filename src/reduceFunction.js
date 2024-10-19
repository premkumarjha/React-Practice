

//reduce function
const arr = [1,2,3,4]

const res=arr.reduce((acc,curr)=>{

}, 10);

//vvvvv iimmp=>https://dev.to/sanspanic/the-javascript-reduce-method-3j8l    =>me below mentioned

//table header=>initialValue	    accumulator	                    currentValue
///table row=>not passed	       accumulator = array[0]	         currentValue = array[1]
//tavle row =>passed	           accumulator = initialValue	      currentValue = array[0]

//accumulator=>The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

//currentValue =>The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

//currentIndex =>The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.