function parametricSort(a,b)

{if(b=='asc')

{return  a.sort(compareAsc)}

else if(b=='desc')

{return a.sort(compareDesc)}

else{return false;}}


function compareAsc(a, b)

{ if (a < b)

{return -1;}

 if (a >= b)

{return 1;}  } 


function compareDesc(a, b)

{ if (a > b)

{return -1;}

 if (a <=b)

{return 1;}  } 




