const lastModifiedDate = document.lastModified;
document.querySelector("#lastModifiedDate").textContent = lastModifiedDate;

function enterName () {
    const userName = document.getElementById("yourName").value;
    document.getElementById("name").innerHTML = userName;
}


function read() {
    let number = document.getElementById("number").value;
    document.getElementById("number").innerHTML = number;

}