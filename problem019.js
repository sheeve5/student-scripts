function carry(a)
{
function b() {
if(isNaN(a.apply(null,arguments)))
{ return carry(a.bind(null,arguments[0]))}
else
{ return a.apply(null, arguments)}}

return b;
}