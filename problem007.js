function findMax()
{var max=arguments[0];
  for(var i = arguments.length-1; i>0; i--)
  {
    if(arguments[i]>max)
      {
        max=arguments[i];        
      }
    
  }
  return max;
}