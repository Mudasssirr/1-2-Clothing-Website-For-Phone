// FOR PROFILE PAGE

import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, doc, setDoc, db, getDoc } from './firebase.js'

// GETTING CURRENT USER

const getCurrentUser = async (uid) => {
  let spinnerpfp = document.getElementById('spinner');
  let blurBack = document.getElementById('blur-background');
  spinner.style.display = 'block'
  const docRef = doc(db, "users", uid);
  let userNamePfp = document.getElementById('user-name')
  let userEmailPfp = document.getElementById('user-email')
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    userNamePfp.value = docSnap.data().name;
    userEmailPfp.value = docSnap.data().email;
    blurBack.style.filter = 'blur(0px)'
    spinnerpfp.style.display = 'none'
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    blurBack.style.filter = 'blur(0px)'
    spinner.style.display = 'none'
  }
  
}


//FOR CHECKING IF USER IS LOGGED IN

onAuthStateChanged(auth, (user) => {
  if (user) {
    getCurrentUser(user.uid)
    let signOutBtn = document.getElementById('sign-out')
    let pfpLoginBtn = document.getElementById('profile-login-btn');
    let pfpSignupBtn = document.getElementById('profile-signup-btn');
    const uid = user.uid;
    pfpLoginBtn.style.display = 'none';
    pfpSignupBtn.style.display = 'none';
    signOutBtn.style.display = 'initial';
  } else {
    let signOutBtn = document.getElementById('sign-out')
    let pfpLoginBtn = document.getElementById('profile-login-btn');
    let pfpSignupBtn = document.getElementById('profile-signup-btn');
    let blurBack = document.getElementById('blur-background');
    pfpLoginBtn.style.display = 'inline-block';
    pfpSignupBtn.style.display = 'inline-block';
    signOutBtn.style.display = 'none';
    blurBack.style.filter = 'blur(0px)';
  }
});

// FOR SIGNING UP USER

let signupbtn = document.getElementById('signup-btn');
let loader = document.getElementById('loader');
let btnTxt = document.getElementById('button-text');
let errorMessages = document.getElementById('error');

const signup = () => {
  let fullName = document.getElementById('fullName');
  let email = document.getElementById('emailInput');
  let password = document.getElementById('passwordInput');
  loader.style.display = 'inline-block';
  btnTxt.style.color = 'transparent';
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then( async (userCredential) => {
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      name: fullName.value,
      email: email.value,
      password: password.value
    });
    loader.style.display = 'none';
    btnTxt.style.color = 'white';
    swal("Congrats!", "You've Signed up, you can now Login!", "success");
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    loader.style.display = 'none';
    btnTxt.style.color = 'white';
    errorMessages.style.display = 'block';
    errorMessages.innerHTML = `<p class="inc-data" id="errorMessage"><i class="bi bi-x-circle-fill"></i>${errorMessage}</p>`;
  });
}

signupbtn && signupbtn.addEventListener('click', signup);

//FOR LOGING THE USER IN

let loginBtn = document.getElementById('loginBtn');
let btnTxtLogin = document.getElementById('button-text-login');

const login = () => {
  let spinner = document.getElementById('spinner')
  let email = document.getElementById('emailInput-login');
  let password = document.getElementById('passwordInput-login');
  spinner.style.display = 'inline-block';
  btnTxtLogin.style.color = 'transparent';
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    spinner.style.display = 'none';
    btnTxtLogin.style.color = 'white';
    location.href = 'profile.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    spinner.style.display = 'none';
    btnTxtLogin.style.color = 'white'
    errorMessages.style.display = 'block';
    errorMessages.innerHTML = `<p class="inc-data" id="errorMessage"><i class="bi bi-x-circle-fill"></i>${errorMessage}</p>`;
  });
}

loginBtn && loginBtn.addEventListener('click', login)

//FOR SIGNING THE USER OUT

let signOutBtn = document.getElementById('sign-out');

const signOutFnc = () => {
  swal({
    title: "Are you sure?",
    text: "Are you sure you want to signout?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      signOut(auth).then(() => {
        // swal("You've Signed Out");
        location.reload();
      }).catch((error) => {
       new swal("ERROR!", "There was an error Signing you Out", "error");
      })
    } else {

    }
  });  
}

signOutBtn && signOutBtn.addEventListener('click', signOutFnc);

// FOR SHOWING PASSWORD IN SIGNUP
const passwordCheckbox = document.getElementById("passwordCheckbox");

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("passwordInput");

  if (passwordCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

passwordCheckbox && passwordCheckbox.addEventListener("change", togglePasswordVisibility);

//FOR SHOWING PASSWORD IN LOGIN

const passwordCheckboxLogin = document.getElementById('passwordCheckbox-Login')

function togglePasswordVisibilityLogin() {
  const passwordInputLogin = document.getElementById("passwordInput-login");

  if (passwordCheckboxLogin.checked) {
    passwordInputLogin.type = "text";
  } else {
    passwordInputLogin.type = "password";
  }
}

passwordCheckboxLogin && passwordCheckboxLogin.addEventListener("change", togglePasswordVisibilityLogin);

//FOR SHOWING FOOTER CONTENT

const footerContent = document.querySelectorAll('.footer-content');

footerContent.forEach((footerContent) => {
  footerContent.addEventListener('click', function(event) {
    const toggle = event.target.closest('.dropdown-toggle');
    if (toggle) {
      const plusMinus = toggle.querySelector('.plus-minus');
      plusMinus.textContent = (toggle.getAttribute('aria-expanded') === 'true') ? '+' : '-';
    }
  });
});
