var myList =document.getElementsByTagName('li');
var myTaste= document.getElementById('taste');

for(var i=0; i<myList.length; i++){
    var myExit = document.createElement('span');
    var myNode = document.createTextNode('\u00D7');
    myExit.appendChild(myNode);
    myExit.className='close'
    myList[i].appendChild(myExit);
    var myRemove = document.getElementsByClassName('close');
    for(let i=0; i<myRemove.length;i++){
        myRemove[i].onclick=function(){
            var div=this.parentElement;
            div.style.display='none';
        }
    }
}
var myList =document.getElementsByTagName('li');
for(var i=0; i<myList.length; i++){
    var myWorld = document.createElement('span');
    var input = document.createElement('input');
    input.type='radio';
    //input.name='name1'
    input.id='flex'
    myWorld.appendChild(input)
    myList[[i]].appendChild(myWorld)
}

var myText=document.getElementById('text');
function myAdd(){
    //myText.style.cursor='pointer'
    var myValue=myText.value;
    var newList=document.createElement('li');
    var newNode=document.createTextNode(myValue);
    newList.appendChild(newNode);
    var myExit = document.createElement('span');
    var myNode = document.createTextNode('\u00D7');
    myExit.appendChild(myNode);
    myExit.className='close'
    newList.appendChild(myExit);

    var myWorld = document.createElement('span');
    var input = document.createElement('input');
    input.type='radio';
    input.id='flex'
    myWorld.appendChild(input)
    newList.appendChild(myWorld)
    //The closure
    myTaste.appendChild(newList);
    myText.value=''; //return to empty string

    var myEnd = document.getElementsByClassName('close');
    for(let i=0; i<myEnd.length;i++){
        myEnd[i].onclick=function(){
            //newList.style.display='none'
            var div=this.parentElement;
            div.style.display='none';
        }
    }
}

