var Stack=
{l:0,
push(a,b)
{if(arguments[1]===undefined){b=1;}
for(var i=0; i<b-1;i++)
{
this[this.l+i]=null;
}
this[this.l+b-1]=a;
this.l=this.l+b;
},
pop(a)
{if(arguments[0]===undefined){a=1;}
for(var i=1;i<a;i++)
{
delete this[this.l-i];
}
var ret=this[this.l-a];
delete this[this.l-a];
this.l=this.l-a;
return ret;
}

}