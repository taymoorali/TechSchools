
const sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbysr_Kk6gLPCu9Q9ar7cR_8SQ4J5aLgMM9i6fWcF6UfwNIr6KSlMrzppojQ0IKXzGouIA/exec'
const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        window.alert("Thanks for contacting us!")
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  const faqItems = Array.from(document.querySelectorAll('.cs-item'));
  for (const item of faqItems) {
      const onClick = () => {
      item.classList.toggle('active')
  }
  item.addEventListener('click', onClick)
  }

  function alertUser(){
    let email = document.getElementById("cs-email").value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if ((email != "" ) && (regex.test(email) == true)){
      alert("You have successfully signed up for our newsletter!");
      return true;
    }
    else{
      alert("Invalid input! Try again");
      return (false);
    }
  }

  function ValidateEmail(){
    let email = document.getElementById("email").value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (regex.test(email))
  {
    return (true);
  }
    alert("You have entered an invalid email address!");
    return (false);
}
    