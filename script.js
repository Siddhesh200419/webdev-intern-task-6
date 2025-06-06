document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("successMsg");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email format";
    valid = false;
  }

  if (message === "") {
    messageError.textContent = "Message is required";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    // Reset form values
    document.getElementById("contactForm").reset();
  }
});
