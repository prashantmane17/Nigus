class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` <div data-overlay></div>
        <div id="loader" class=""></div>
    
        <div class="container navBarWrapper">
        <nav class="navbar">
            <div class="logo"><a href="../../index.html" ><img src="../img/nigus-logo.png" alt=""></a></div>
            <div class="nav-list">
                <ul id="firstUl">
                    <li class="services"  ><a>Services</a> 
                        <ul  class='dropdown mobiledropdown' data-mobiledropdown id = "hello">
                            <li><a href="../../index.html">Web Development</a></li>
                            <li><a href="../HTML/appDevelopment.html">App Development</a></li>
                            <li><a href="../HTML/softwareDevelopment.html">Software Development</a></li>
                            <li><a href="../HTML/ai_ml.html">AI/ML Development</a></li>
                            <li><a href="../HTML/systemIntegration.html">System Integration   </a></li>
                            
                        </ul>
                        
                    </li>

                    <li><a href="../HTML/solution.html">Solutions</a></li>
                    <li><a href="../HTML/industries.html">Industries</a></li>
                    <li><a href="../HTML/about_us.html">About Us</a></li>
                    <li><a href="../HTML/contactUs.html">Contact Us</a></li>
                    <i class="fa-solid fa-xmark close"></i>
                </ul>
                <i class="fa-solid fa-bars open" data-menuIcon></i>
            </div>
        </nav>
    </div>
`
    }
}
customElements.define('app-navbar', Navbar);


class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="footer hidden">
        <div class="content-left">
            <a href="../../index.html" ><img src="../img/nigus-logo.png" alt=""></a>
            <h3>Nigus Systems Private Limited
            </h3>
            <p>We work across 24 x 7 to help you run your business without any hassle</p>
            <a href="" class="icon"><i class="fa-brands fa-linkedin" target=”_blank”></i></a>
           
        </div>
        <div class="content-right">
            <div class="links">
                <a href="mailto:sales@nigussystems.com"><i class="fa-regular fa-envelope"></i>
                    sales@nigussystems.com</a>
                <a href="tel:98806 98312"><i class="fa-solid fa-phone"></i> +91 98806 98312</a>
            </div>
            <div class="btns">
            <a href="../../contactUs.html" class="button"><i class="fa-regular fa-user"></i>Sales</a>
            <a href="../../contactUs.html" class="button"><i class="fa-solid fa-headphones-simple"></i>Support</a>
            </div>
        </div>
    </footer>
    <h5 class="copyRight hidden">© 2024 Nigus Systems Pvt Ltd</h5>`
    }
}
customElements.define('app-footer', Footer);