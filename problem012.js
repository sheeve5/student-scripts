function objectsDiff(a, b)
{
var ret=[];
for(var propertyA in a)
{
for (var propertyB in b)
{
if(propertyB==propertyA)
{
delete a[propertyA];
delete b[propertyB];
break;
}
}
}

for(var propertyA in a)
{
ret.push(propertyA);
}

for(var propertyB in b)
{
ret.push(propertyB);
}
return ret;
}