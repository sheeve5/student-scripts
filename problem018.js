function reverse(a)

{ function b()

{var args=[];

for(var i =arguments.length-1; i>=0; i--)

{args[arguments.length-1-i]=arguments[i];}

return a.apply(null,args);}

 return b;}