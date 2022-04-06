let a=0;
let b=0;
let c=0;
let d=0;
let ms1=document.getElementById('time_area4')
let ms2=document.getElementById('time_area3')
let s1=document.getElementById('time_area2')
let s2=document.getElementById('time_area1')
ms1.innerHTML=d;
ms2.innerHTML=c;
s2.innerHTML=a;
s1.innerHTML=b;
function start(){

}
setTimeout(function goto_ms2(){

    d++;
    ms1.innerHTML=d;
    if(d>9 && c<9){
        c++;
    ms2.innerHTML=c;
   
     d=0;
     ms1.innerHTML=d;
    
    }
   
if(c==9 && d>9){
    goto_s();

    console.log("entered")
}

goto_ms2()
},100);
setTimeout(function goto_s(){


    if(c==9 && d>9 && b<9){
    c=0;
    d=0;
    b++;
    s1.innerHTML=b;
    ms1.innerHTML=d;
    ms2.innerHTML=c;
    }
else{
 goto_s2();
    console.log("hello"+`${b}`)
}

},1000)
setTimeout(function goto_s2(){
    
        b=0
        c=0
        d=0
        a++;
        s1.innerHTML=b;
        ms1.innerHTML=d;
        ms2.innerHTML=c;
        s2.innerHTML=a;
        goto_ms2;
    },1000)
