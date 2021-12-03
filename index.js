function main() {
    showHome()
    console.log(localStorage.username);
    if (localStorage.username) {
        navbarIsLoginTrue()
    } else {
        navbarIsLoginFalse()
    }
}
function showHome() {
  let register = document.getElementById("signup-form");
  let program_list = document.getElementById("program-list");
  
  register.style.display = "none";
  program_list.style.display = "block";
}

function navbarIsLoginFalse(){
    let guest = document.getElementById("isGuest");
    let member = document.getElementById("isMember");
    guest.style.display = "block";
    member.style.display = "none";
}

function navbarIsLoginTrue(){
    let guest = document.getElementById("isGuest");
    let member = document.getElementById("isMember");
    let greet = document.getElementById("greet-text");
    guest.style.display = "none";
    member.style.display = "block";
    greet.innerText=`Hello ${localStorage.username}`
    
}

function showSignup() {
  let register = document.getElementById("signup-form");
  let program_list = document.getElementById("program-list");
  register.style.display = "block";
  program_list.style.display = "none";
}

function createAccount(event) {
  event.preventDefault();
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let source = document.getElementById("source");
  let source_data = source.options[source.selectedIndex].value;
  console.log(firstName, lastName, email, password, source_data);
  if (firstName != "" && lastName != "" && email != "" && password != "") {
    localStorage.setItem("username", firstName)
    showHome()
    navbarIsLoginTrue()
  } else {
    alert("Please fill the fields that are required");
  }
}

function signout() {
    localStorage.clear()
    navbarIsLoginFalse()
}
main();
