aa=function (a) 
{
	t=""; 
	// t=t+a+","; 
	temp_number1=1;
	temp_number2=1;
	temp_count=0
	console.log(a);
	a=a-2;
	for(i=1;i<=a; i++)
	{
		temp_count = temp_number1 + temp_number2;
		temp_number1 = temp_number2;
		temp_number2 = temp_count;

		t=t+temp_count+",";
		//i=temp_count;
		//console.log();

	} 
	console.log(temp_count)
}