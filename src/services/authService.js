import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

class AuthService {
  constructor() {
    this.form = document.getElementById('login_form');
    this.events();
  }

  events() {
    this.form.addEventListener('submit', (e) => {
        this.handleSubmit(e);
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const isCredentialsCorrect = await this.validateSignIn();

    if (isCredentialsCorrect) {
      location.href += "pages/home.html"
    }
  }

  async validateSignIn() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    let isCorrect = true;

    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
        const user = userCredential.user;
        console.log(user);
    } catch (error) {
        isCorrect = false;
        const errorCode = error.code;
        const errorMessage = error.message;
    }

    return isCorrect;
  }
}

export { AuthService };