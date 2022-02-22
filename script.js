// var a=20;
// console.log(a);
// // comments this is a comment 

// // data types in  java script 
// // undifined null boolen  string symbol number adn object 


// // what is varable 
// // varable i s used to store data 
// // type 
// // const let var 



//  // function and parmeters
//   function ourfunction (a,b){
//   	console.log(a-b);
//   }
//   ourfunction(10,30);

  
//    function addfunction (a,b){
//   	console.log(a-b);
//   }
//   addfunction(10,30);


// // /////
// //  var names =["hole-in -one ","eagle","birdie","par","bogey","double borey" "go to home"]
// //    function golfsocure(par ,stokes){
// //   if (stokes==1){
// //     return  names[0]
// //   }else if (stokes<=par - 2){
// //     return names[1]
// //   }else if (stokes ==par - 1){
// //     return names[2]
// //   }else if (stokes ==par){
// //     return names[3]
// //   }else if (stokes ==par + 1){
// //     return names[4]
// //   }else if (stokes ==par + 2){
// //     return names[5]
// //   }else if (stokes >=par + 3){
// //     return names[6]
// // }
// // }
// // console.log(golfsocure(30 ,2));





// /////////////////////////////

// function chaintoswitch (val){
//     var answers="";

//      switch(val){
//         case"bob":
//         answer="marley";
//         break;
//         case 42:
//         answer="the answers";
//         break;
//         case 1 :
//         answer="there is n#1";
//         break;
//         case 99:
//         answer="missed me nby this  much!";
//         case 7: 
//         answer="ate nine";
//         break;
//     }

// }

//  var holdbet ="";
//  var count =0;
//  function cc(){
//     switch(cc){
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6
//         count ++;
//         break;
//         case 10;
//         case "j";
//         case "q";
//         case "k";
//         case "a";
//      count --;
//      break;
//     }
//     var holdbet="hold"
//     if (count>0){
//         holdbet="bet"    
//     }
//     return count+""+ holdbet;
//  }
// (
// cc(2);cc("k");cc(7);cc("k");cc("a")
// console.log(cc(4))



var myarray =[]
var i =0;

while(i <5){
 myarray.push(i);
 i++;
}
console.log(myarray);
document.write(myarray);

//////////////////////////////////////////////////////
document.write("<br>")

 for (var i=0 ;i< 5 ;i++ ){
    myarray.push(i)
 }
 document.write(myarray )
 /////////////////////////////////////////////////////
 document.write("<br>")
   for (var i =0 ;i<10 ;i+=2){
    myarray.push(i)
   }
    document.write(myarray);


    for (var i =1 ;i<10 ;i+=2){
        myarray.push(i)
    }
    document.write(myarray)
