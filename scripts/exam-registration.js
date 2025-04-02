document.addEventListener("DOMContentLoaded", () => {
    const nameField = document.querySelector("#name");
    const nsheField = document.querySelector("#nshe");
    const emailField = document.querySelector("#email");
  
    const name = localStorage.getItem("studentName");
    const nshe = localStorage.getItem("studentNSHE");
    const email = localStorage.getItem("studentEmail");
  
    if (name && nshe && email) {
      nameField.value = name;
      nsheField.value = nshe;
      emailField.value = email;
    } else {
      window.location.href = "index.html"; // force login
    }
  });
  