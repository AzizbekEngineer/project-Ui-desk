let navBar = document.getElementById('header__nav__hamburger--btn');
let navList = document.getElementById('header__nav--list');
let bactop = document.getElementById('bactop');
let navShrink = document.getElementById('navshrink')
let modeBtn = document.getElementById('mode__btn')


window.addEventListener('scroll' , function(){
    showBactop()
    showNavShrink()
})

navBar.addEventListener('click'  ,function(){
    navList.classList.toggle('show-header__nav-list')
})

modeBtn.addEventListener("click", function () {
    if (document.body.className != "light") {
        this.firstElementChild.src = "images/dark.svg";
    } else {
        this.firstElementChild.src = "images/light.svg";
    }
    document.body.classList.toggle("light");
});

function showBactop(){
    if(scrollY > 200){
        bactop.classList.add('show-bactop')
    }
    else {
        bactop.classList.remove('show-bactop')
    }
}

function showNavShrink() {
    if (scrollY > 0) {
        navShrink.classList.add('show-shrink')
    }
    else {
        navShrink.classList.remove('show-shrink')
    }
}