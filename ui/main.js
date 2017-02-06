//Console code
var button = document.getElementById('counter');


button.onclick = function(){
    
    //Create a request  object
    var request = new XMLHttpRequest(); 
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var counter = request.responseText; 
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
   
            }
        }
        //Not done yet
    };
   //Make the request
    request.open('GET','http://akoshta07.imad.hasura-app.io/counter',true);
    request.send(null);
};
//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit =documnet.getElementById('submit_btn');
Submit.onclick = function(){
    //Maki a request to the server and sent the name
    
    //Capture a list of name and render it as a list
    var names =['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++){
        list += '<li>' + name[i] +'</li>';
    }
    var ul=document.getElemnetById('namelist');
    ul.innerHTML = list;
};