const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");
const sendBtn = document.querySelector(".send-btn");
const plane = document.getElementById("planeFly");

const fields = {
  name: document.getElementById("name"),
  surname: document.getElementById("surname"),
  email: document.getElementById("email"),
  subject: document.getElementById("subject"),
  message: document.getElementById("message")
};

const errors = {
  name: document.getElementById("nameError"),
  surname: document.getElementById("surnameError"),
  email: document.getElementById("emailError"),
  subject: document.getElementById("subjectError"),
  message: document.getElementById("messageError")
};

function clearErrors(){
  Object.values(errors).forEach(e => e.textContent = "");
}

function isGmail(mail){
  return /^[^\s@]+@gmail\.com$/i.test(mail.trim());
}

function flyPlane(){
  plane.classList.remove("fly");
  void plane.offsetWidth;
  plane.classList.add("fly");
  setTimeout(()=>plane.classList.remove("fly"), 1300);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();
  successMsg.style.display = "none";

  let ok = true;

  if (!fields.name.value.trim()) { errors.name.textContent = "Nombre obligatorio"; ok = false; }
  if (!fields.surname.value.trim()) { errors.surname.textContent = "Apellido obligatorio"; ok = false; }

  if (!fields.email.value.trim()) {
    errors.email.textContent = "Email obligatorio";
    ok = false;
  } else if (!isGmail(fields.email.value)) {
    errors.email.textContent = "Debe terminar en @gmail.com";
    ok = false;
  }

  if (!fields.subject.value.trim()) { errors.subject.textContent = "Asunto obligatorio"; ok = false; }
  if (!fields.message.value.trim()) { errors.message.textContent = "Mensaje obligatorio"; ok = false; }

  if (!ok) return;

  sendBtn.classList.add("loading");
  sendBtn.innerHTML = `<i class="fa-solid fa-circle-notch"></i> Enviando...`;

  setTimeout(() => {
    sendBtn.classList.remove("loading");
    sendBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Enviar`;

    successMsg.style.display = "flex";
    flyPlane();
    form.reset();

    setTimeout(() => { successMsg.style.display = "none"; }, 5000);
  }, 1200);
});
