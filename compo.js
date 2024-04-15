class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML=` <div id="loader"></div>
        <div class="container">
        <nav class="navbar">
            <div class="logo"><a href="index.html" ><img src="img/nigus-logo.png" alt=""></a></div>
            <div class="nav-list">
                <ul id="firstUl">
                    <li class="services"  ><a>Services</a> 
                        <ul  class='dropdown mobiledropdown' data-mobiledropdown id = "hello">
                            <li><a href="index.html">Web Development</a></li>
                            <li><a href="Pages/appDev/index.html">App Development</a></li>
                            <li><a href="Pages/softDev/SoftwareDev.html">Software Development</a></li>
                            <li><a href="Pages/ALML/AI_ML.html">AI/ML Development</a></li>
                            <li><a href="Pages/systemIntegration/index.html">System Integration   </a></li>
                            
                        </ul>
                        
                    </li>

                    <li><a href="Pages/Solution/index.html">Solutions</a></li>
                    <li><a href="Pages/Industries/index.html">Industries</a></li>
                    <li><a href="Pages/About us/index.html">About Us</a></li>
                    <li><a href="Pages/Contact Us/index.html">Contact Us</a></li>
                    <i class="fa-solid fa-xmark" onclick="closeMenu()"></i>
                </ul>
                <i class="fa-solid fa-bars" onclick="openMenu()" data-menuIcon></i>
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
            <a href="index.html" ><img src="img/nigus-logo.png" alt=""></a>
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