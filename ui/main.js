//Console code
var button = document.getElementById('counter');
button.onclick=function(){
    //Make a response to the counter endpoint
    
    //Capture the response and store it in a variable
    
    //Render the variable in correct span
    counter=counter + 1;
   var span=document.getElementById('count');
   span.innerHTML = counter.toString();
};