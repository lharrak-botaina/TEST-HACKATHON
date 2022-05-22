
 function reload (event) {
    event.preventDefault();
    
};



function Display(){
    // event.preventDefault();
    let message;
    document.getElementById('bigpic').style.display='block';
    document.getElementById('story').style.display='none';
    message =document.getElementById("demo").innerHTML = "Maintenant vous devrez passer le ballon à le bon joueure";
}
function TryAgain(){
    let message;
    message =document.getElementById("demo").innerHTML = "Try again";
    document.getElementById('bigpic').style.display='none';
    document.getElementById('story').style.display='none';
    document.getElementById('tryAgain').style.display='none';
            var img = document.createElement('img');
			img.src =
            'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
			document.getElementById('divImag').appendChild(img);
		
           creatBtn("recommencer")
            // let newElement=document.createElement('div')
            //    console.log(newElement) ;
           
            
           

            // document.body.innerHTML='<button>new button</button>';
}
const creatBtn= (text='no text')=>{
    const btn=document.createElement('button');
    btn.innerHTML=text;
    document.getElementById('btn').appendChild(btn);
    return btn;
}










// function FbotonOn() { 
  
//     if(document.getElementById('button').innerHTML)
//         document.getElementById('texto').innerHTML = "Thank you";
//     else
//         document.getElementById('texto').innerHTML = "Good Bye";
// }