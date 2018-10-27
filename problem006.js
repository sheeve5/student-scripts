function divisible()
{var div = true;
	for(var i =arguments.length -1;  i >0;i--)
	{
		if(arguments[0]%arguments[i]!==0)
		{
			div=false;
			break;
		}
	}
	return div;
}