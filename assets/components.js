class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML=` <div id="loader"></div>
        <div class="container">
        <nav class="navbar">
            <div class="logo"><a href="../index.html" ><img src="../img/nigus-logo.png" alt=""></a></div>
            <div class="nav-list">
                <ul id="firstUl">
                    <li class="services"  ><a>Services</a> 
                        <ul  class='dropdown mobiledropdown' data-mobiledropdown id = "hello">
                            <li><a href="../index.html">Web Development</a></li>
                            <li><a href="./appDevelopment.html">App Development</a></li>
                            <li><a href="./softwareDevelopment.html">Software Development</a></li>
                            <li><a href="./ai_ml.html">AI/ML Development</a></li>
                            <li><a href="./systemIntegration.html">System Integration   </a></li>
                            
                        </ul>
                        
                    </li>

                    <li><a href="./solution.html">Solutions</a></li>
                    <li><a href="./industries.html">Industries</a></li>
                    <li><a href="./about_us.html">About Us</a></li>
                    <li><a href="./contactUs.html">Contact Us</a></li>
                    <i class="fa-solid fa-xmark close"></i>
                </ul>
                <i class="fa-solid fa-bars open" data-menuIcon></i>
            </div>
        </nav>
    </div>
`
    }
}
customElements.define('app-navbar',Navbar);


class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<footer class="footer hidden">
        <div class="content-left">
            <a href="../index.html" ><img src="../img/nigus-logo.png" alt=""></a>
            <h3>Nigus Systems Private Limited
            </h3>
            <p>We work across 24 x 7 to help you run your business without any hassle</p>
            <a href="" class="icon"><i class="fa-brands fa-linkedin" target=”_blank”></i></a>
           
        </div>
        <div class="content-right">
            <div class="links">
                <a href="mailto:#"><i class="fa-regular fa-envelope"></i>
                    sales@nigussystems.com</a>
                <a href="tel:#"><i class="fa-solid fa-phone"></i> +91 98806 98312</a>
            </div>
            <div class="btns">
                <button ><i class="fa-regular fa-user"></i>Sales</button>
                <button><i class="fa-solid fa-headphones-simple"></i>Support</button>
            </div>
        </div>
    </footer>
    <h5 class="hidden">© 2024 Nigus Systems Pvt Ltd</h5>`
    }
}
customElements.define('app-footer',Footer);