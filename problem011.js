function deepFindAndCount(a,b)
{var counter=0;
  for(var i=0; i<a.length; i++)
  {
    if(Array.isArray(a[i]))
    {counter=counter+deepFindAndCount(a[i],b);}
    else
    {if(a[i]==b) {counter++;}
      
    }
  }
  
return counter;  
  
}