document.getElementById("b").addEventListener("click", calc);
function calc()
{
    let str=document.getElementById("a");
    // console.log( str.value.length);
    let counter=0;
    let sum=0;
    console.log(/[0-9]/g.test(str.value));
    if(/[0-9]/g.test(str.value)==true)
    {
        console.log("into if");
    for(let i=0;i<str.value.length;i++)
    {
        // console.log(str.value.charAt(i));
        // str.value.charAt(i);
        if(/[0-9]/g.test(str.value.charAt(i))==true){
            counter++;
            sum=sum+parseInt(str.value.charAt(i));
            console.log(str.value.charAt(i));
            console.log(sum);
        }
        
    }
}
else{
    alert("no digits found in given string");
}
document.getElementById("c").innerHTML=str.value;
document.getElementById("d").innerHTML=counter;
document.getElementById("e").innerHTML=sum;
}