function getWaitTimeInformation(a,b){
	 var sum = 0;
	 var max = 0;
	 var X=0;
	 for(var x=0.01;x<1;x=x+0.01){
		var  wt =  100* Math.pow(x,a-1)*Math.pow(1-x,b-1);
		sum = sum + wt;
		if(wt>max){
			max = wt;
			X = x;
		}
	 }
	 return  {avg:sum/99,maxima:X,maximumValue:max,diff:max-sum/99};
}

function getClosest(resultForYellow,resultForRed,resultForBlue){
	if(resultForYellow.diff < resultForRed.diff && resultForYellow.diff<resultForBlue.diff){
		return 'yellow';
	}else if(resultForRed.diff < resultForYellow.diff && resultForRed.diff < resultForBlue.diff){
			return 'red';
	}else{
		return 'blue';
	}
}


let resultForYellow  = getWaitTimeInformation(2,5);
let resultForRed  = getWaitTimeInformation(2,2);
let resultForBlue  = getWaitTimeInformation(5,1);
console.log('1. ) Given for only Yello customer (a=2 and b=5) ');
console.log('Average : '+resultForYellow.avg+ " and maximum customer wait time : "+resultForYellow.maximumValue);

console.log('2. ) Given for only red customer (a=2 and b=2) ');
console.log('Average : '+resultForRed.avg+ " and maximum queue length : "+Math.floor(resultForRed.maximumValue));

console.log('3. ) Which type customer will give closest value between average and maximum customer waiting time ')
console.log(getClosest(resultForYellow,resultForRed,resultForBlue));
