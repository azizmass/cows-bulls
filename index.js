  var numRandom=newnum();
  var nb=0;
  var nbBull;
  var nbCow;
  var start=false;
var res=numRandom.toString();
$(".submit").click(function(){
        var valopperateur = $("#myInput").val();
        $(".submit").serialize();
        start=verifier(valopperateur);
        if(!start){
        nbBull=nbBulls(valopperateur);
        nbCow=nbCows(valopperateur);
        start=ajoutLine(nb,nbCow,nbBull,valopperateur);
        nb++;  }
      });
  $(".give-up").click(function(){
    $("."+nb).after("<p>you were very close to the answer but any way the result was "+numRandom+"<p><br><button type='button' class='start-again btn btn-outline-success' name='button'>start again</button>");
    $(".submit").fadeOut();
    $(".give-up").fadeOut();
    $(".start-again").click(function(){
      location.reload();
    });
  }) ;
   function verifier(valopperateur) {var test=true;
     var i=0;
     while(test && (i<4)) {
       test=(valopperateur.length==4)&&((valopperateur[i]=='0')||(valopperateur[i]=='1')||(valopperateur[i]=='2')||(valopperateur[i]=='3')||(valopperateur[i]=='4')||(valopperateur[i]=='5')||(valopperateur[i]=='6')||(valopperateur[i]=='7')||(valopperateur[i]=='8')||(valopperateur[i]=='9')) ;
    i++; }
    if (!test) alert("yezzi blaa bledaa 7il 3inik ichtiktib!!!");
    return !test;
   }

   function nbBulls(valopperateur) { var p=0;
     for (var i = 0; i < valopperateur.length; i++) {
       for(var j=0;j<4;j++){
         if ((valopperateur[i]==res[j])&&(i==j)) p++;
       }
     }
     return(p);
   }
   function nbCows(valopperateur) {
     var p=0;
       for (var i = 0; i < 4; i++) {
         for(var j=0;j<4;j++){
           if ((valopperateur[i]==res[j])&&(i!==j)) p++;
         }
       }
       return(p);
   }
   function ajoutLine(nb,nbCow,nbBull,valopperateur1){var p=nb+1;
       $("."+nb).after("<p class='"+p+"'> "+valopperateur1+":  C = "+nbCow+" B = "+nbBull+"<p>");
       if (nbBull==4) return true;
       else {
         return false;
       }
   }
   function end(start) {
if (start==true) { var p=nb+1;
  $("."+nb).after("<p class='"+p+"'> congratulation you did it in only "+p+" turns and the number was :"+res+"<p><br><button type='button' class='start-again btn btn-outline-success' name='button'>start again</button>");
  $(".submit").fadeOut();
  $(".give-up").fadeOut();
  $(".start-again").click(function(){
    location.reload();
  });
}}
function newnum() { var res="";
  var t=['0','1','2','3','4','5','6','7','8','9'];
var n1=Math.floor(Math.random()*10);
res=res+t[n1];
t.splice(n1,1);
console.log(t);
var n2=Math.floor(Math.random()*9);
res=res+t[n2];
t.splice(n2,1);
console.log(t);
var n3=Math.floor(Math.random()*8);
res=res+t[n3];
t.splice(n3,1);
console.log(t);
var n4=Math.floor(Math.random()*7);
res=res+t[n4];
t.splice(n4,1);
console.log(t);
return res;
}
