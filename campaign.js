let startbtn = document.querySelector("#start");
startbtn.addEventListener("click", startfun);

function startfun () {
     let container = document.querySelector("#container");
     container.innerHTML = null;

     container.innerText = "Your project will be able to raise funds. Funds sent to a bank account located outside the US are charged a $25 International Transfer Fee."
     
}


// --------------------------NAVBAR-------------------------NABAR
// let dropbtn = document.querySelector("#dropbtn");
// dropbtn.addEventListener("click", () => {
//     document.getElementById("myDropdown").classList.toggle("show");
// })

// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }