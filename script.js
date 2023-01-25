var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function openTab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var typed = new Typed('.typing',{
    strings: ["Software Developer", "Programmer", "a passionate React Developer"],
    loop: true,
    typeSpeed: 65,
    backSpeed: 65
  });

var sidemenu = document.getElementById('side-menu');

function openMenu() {
    sidemenu.style.right = "0";
}

function closeMenu() {
    sidemenu.style.right = "-200px"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwC0YMIe8yovnT4XR_PHuchYdSaFiUK2s03HBfh6Se9EnSt6KhymnNoG79wvgIeZwSm/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })