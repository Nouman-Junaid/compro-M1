const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
@media (max-width: 477px){
    .section-p1 {
        padding:20px ;

    }
    #header {
        padding: 10px 30px;

    }
    h1 {
        font-size: 38px:
    }
    h2 {
        font-size: 32px;
    }
    #hero {
      padding:0 20px;
      background-position: 55%;

    }
}