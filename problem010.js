function deepCopy(a)
{var ret=[];
  for(var i=0; i<a.length; i++)
  {
    
    if(Array.isArray(a[i]))
     {ret[i]=deepCopy(a[i]);}
    else
      ret[i]=a[i];
      
      }
  
  return ret;
  
}