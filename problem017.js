function compose2(args, b)
{if(b!=null&&args!=null)
{var ret=b;
for(var i=args.length-1;i>=0;i--)
  {ret=args[i](ret);}
  return ret;}
  else
  {return b;}
}

function compose()
{var args=[];
if(arguments.length==0)
{ return compose2.bind([], null);}
else
{if(typeof arguments[arguments.length-1]=='function')
{for(var i = 0; i<arguments.length; i++)
{ args[i]=arguments[i];}
return compose2.bind(null, args);}
else{return compose2(arguments[arguments.length-1])}}
}

