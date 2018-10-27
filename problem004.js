function getTotalNumberOfNewYaersEveSundays(a,b)
{var counter=0;
 for(var i=b-a; i>-1; i--) 
   {
    if ((37+(a+i-1)%100+Math.floor(((a+i-1)%100)/4)+Math.floor(Math.floor((a+i-1)/100)/4)-2*Math.floor((a+i-1)/100))%7===1)
     {counter++;}
   }
 return counter;
}