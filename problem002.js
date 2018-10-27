function stringRotate(a,b)
{if(isNaN(b))
{return "";}
if(b>=0)
{return a.substring(b,a.length)+a.substring(0,b);}
 else
{return "";}

}