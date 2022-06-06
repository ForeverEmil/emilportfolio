// opacity on scroll
$(window).scroll(function () {
    var elem = $('.logo');
    var hdr = $('.nav-header');
    var sci = $('.sci');
    setTimeout(function () {
        elem.css({ "opacity": "1", "transition": "0.7s" });
        hdr.css({ "opacity": "1", "transition": "0.7s" });
        sci.css({ "opacity": "1", "transition": "0.7s" });
    }, 2000);
    elem.css({ "opacity": "0", "transition": "0.7s" });
    hdr.css({ "opacity": "0", "transition": "0.7s" });
    sci.css({ "opacity": "0", "transition": "0.7s" });
});

// toggle navbar
function toggle() {
    var main = document.getElementById('main');
    var nav = document.getElementById('navigation');
    var hdr = document.getElementById('hdr');
    var asd = document.getElementById('asd')
    main.classList.toggle('active');
    nav.classList.toggle('active');
    hdr.classList.toggle('active');
    asd.classList.toggle('active');
}

// observer
const tabs = document.querySelectorAll(".tab")
const pages = document.querySelectorAll(".banner")
const scrollToTop = document.querySelector(".scrollToTop")

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(pages).indexOf(entry.target)
            tabs.forEach(tab => {
                tab.classList.remove("activeTab")
            })
            tabs[index].classList.add("activeTab")
        }
    })
}, {
    threshold: 0.25,
})


pages.forEach(page => {
    observer.observe(page)
})

