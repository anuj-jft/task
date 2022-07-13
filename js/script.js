const colorChange = () =>{
  let color;
    if (document.getElementById('red').checked) {
        color = document.getElementById('red').value;
      }
     else if (document.getElementById('green').checked) {
        color = document.getElementById('green').value;
      }
     else if (document.getElementById('blue').checked) {
       color = document.getElementById('blue').value;
      }
      console.log(color);
      document.getElementById("box1").style.backgroundColor = color;
      document.getElementById("box2").style.backgroundColor = color;
      document.getElementById("box3").style.backgroundColor = color;
      document.getElementById("box4").style.backgroundColor = color;
      document.getElementById("box5").style.backgroundColor = color;
      document.getElementById("box6").style.backgroundColor = color;

    let boxes = document.getElementById("block");
    let divBox = boxes.getElementsByClassName("s-box");
   
}