class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = 'active'

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = '')
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                      index / 7 + 0.3
                  }s`)
        })
    }

    handleClick() {
        
        this.mobileMenu.classList.toggle(this.activeClass)
        if (this.navList.classList.toggle(this.activeClass)){
            this.navList.classList.remove('inactive')  
            this.animateLinks()
        } else {
          this.navList.classList.add('inactive')
          this.animateLinks()
        }
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick)
        this.mobileMenu.addEventListener('keyup', (e) => {
            e.preventDefault();
            
            if (e.keyCode === 13){
                this.mobileMenu.click();
            }
        })
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar(
    '.mobile-menu',
    '.nav-header',
    '.nav-header li'
)
mobileNavbar.init()

const btnFooter = document.querySelector('.btn-footer')

btnFooter.addEventListener('click', () => {
    window.scrollTo(0, 0)
})
