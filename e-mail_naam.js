document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let naam = email.slice(0, email.indexOf("@")); 
    naam = naam.replace(/[._]/g, " ")
    document.getElementById("antwoord").textContent = naam
});