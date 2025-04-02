// js/main.js

// Dummy users for demo purposes
const mockUsers = [
    {
      email: "1234567890@student.csn.edu",
      nshe: "1234567890",
      role: "student"
    },
    {
      email: "jdoe@csn.edu",
      password: "Teach@123",
      role: "faculty"
    }
  ];
  
  // Faculty password validation (basic, real-world safe)
  function isValidFacultyPassword(pw) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(pw);
  }
  
  // Student email validation
  function isValidStudentEmail(email) {
    const pattern = /^\d{10}@student\.csn\.edu$/;
    return pattern.test(email);
  }
  
  // Get NSHE number from email
  function extractNSHE(email) {
    return email.split("@")[0];
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");
    const errorMsg = document.querySelector(".error-msg");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = document.querySelector("#email").value.trim();
      const password = document.querySelector("#password").value.trim();
  
      // Student login logic
      if (isValidStudentEmail(email)) {
        const nshe = extractNSHE(email);
        const match = mockUsers.find(u => u.role === "student" && u.email === email && u.nshe === password);
  
        if (match) {
            // Save student info to localStorage for later
            localStorage.setItem("userRole", "student");
            localStorage.setItem("studentName", "Student McStudentFace");
            localStorage.setItem("studentEmail", email);
            localStorage.setItem("studentNSHE", password); // password is NSHE#
            window.location.href = "student-dashboard.html";
            return;
          }          
      }
  
      // Faculty login logic
      if (email.endsWith("@csn.edu") && !email.endsWith("@student.csn.edu")) {
        if (isValidFacultyPassword(password)) {
          const match = mockUsers.find(u => u.role === "faculty" && u.email === email && u.password === password);
  
          if (match) {
            window.location.href = "faculty-dashboard.html";
            return;
          }
        }
      }
  
      // If nothing matched:
      errorMsg.style.display = "block";
    });
  });
  