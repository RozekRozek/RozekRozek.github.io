// Funkcja do dodawania diva i obrazka po wywołaniu
function Add_Sculpture() {
    var div = document.createElement('div');
    div.setAttribute("id","SculptureStand");
    var img = document.createElement('img');
    img.src = '../misc/Dawid.jpg';
    document.getElementById('Holder').appendChild(div);
    document.getElementById('SculptureStand').appendChild(img);
    var button = document.getElementById('SculptureButton');
    button.disabled = "disabled"
} 