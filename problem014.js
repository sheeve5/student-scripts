Vectors={

sum(a,b)

{
var ret;
if(a.length==b.length)
{
if(Array.isArray(a[0])&&Array.isArray(b[0]))
{
for(var i = 0; i<a.length; i++)
{
a[i]=Vectors.sum(a[i], b[i]);
if(a[i]==false)
{
ret=false;
break;
}
}
if(ret!=false) {ret =a;}
}
else if (!Array.isArray(a[0])&&!Array.isArray(b[0]))
{
for(var i = 0; i<a.length;i++){a[i]=a[i]+b[i];}
ret = a;
}

else{ret=false;}

}

else{ret=false;}

return ret;

},

mulByScalar(a,b)

{if(!Array.isArray(b)&&(b!='')&&(a!=''))
{
if(Array.isArray(a[0]))
{
for(var i =0; i<a.length; i++) 
{a[i]=Vectors.mulByScalar(a[i],b);}
}
else
{
for(var i =0; i<a.length; i++) {a[i]=a[i]*b;}
}
return a;}
else
{return false;}

}
}