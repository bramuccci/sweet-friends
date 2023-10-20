import './App.scss'
import cookie from './assets/fotos-postres/cookie.png'
import cupcake from './assets/fotos-postres/cupcake.png'
import donut from './assets/fotos-postres/donut.png'
import flan from './assets/fotos-postres/flan.png'
import brownie from './assets/fotos-postres/brownie.png'
import pannaCotta from './assets/fotos-postres/panna-cotta.png'
import logo from './assets/sweet-friends-logo.svg'
import cake from './assets/piece-of-cake.png'
import lamOne from './assets/fotos-lam/foto-lam.jpeg'
import lamTwo from './assets/fotos-lam/foto-lam-2.jpeg'

function App() {
    return (
        <>
            <nav>
                <div>
                    <img src={cookie} alt="" />
                </div>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#productos">Productos</a>
                    </li>
                    <li>
                        <a href="#about">Sobre nosotros</a>
                    </li>
                    <li>
                        <a href="#footer">Contacto</a>
                    </li>
                </ul>
            </nav>
            <header>
                <div className="header-content" id="home">
                    <div>
                        <img src={logo} alt="" className="header-logo" />
                        <p>Descubrí el sabor de la ternura</p>
                        <button>Explorar</button>
                    </div>
                    <img className="cake-img" src={cake} alt="" />
                </div>
            </header>
            <section className="section-productos" id="productos">
                <h2>Productos</h2>
                <p>Conocé lo que nuestra pastelería tiene para ofrecer.</p>
                <div className="galeria-productos">
                    <div>
                        <img src={brownie} alt="" />
                        <h3 className="nombre">Brownies</h3>
                    </div>
                    <div>
                        <img src={cookie} alt="" />
                        <h3 className="nombre">Choco cookies</h3>
                    </div>
                    <div>
                        <img src={donut} alt="" />
                        <h3 className="nombre">Donuts</h3>
                    </div>
                    <div>
                        <img src={flan} alt="" />
                        <h3 className="nombre">Postres</h3>
                    </div>
                    <div>
                        <img src={cupcake} alt="" />
                        <h3 className="nombre">Cupcakes</h3>
                    </div>
                    <div>
                        <img src={pannaCotta} alt="" />
                        <h3 className="nombre">Frutillas con crema</h3>
                    </div>
                </div>
            </section>
            <section className="about" id="about">
                <div className="sobre-nosotros">
                    <img src={lamOne} alt="" />
                    <div>
                        <h2>Sobre nosotros</h2>
                        <p>
                            Nuestra pastelería &quot;Sweet Friends&quot; se basa
                            en ofrecer postres simples y de alta calidad,
                            enfocados en la excelencia tanto en sabor como en
                            presentación. Nos especializamos en Brownies,
                            Donuts, Choco Cookies, Postres de frutilla y
                            chocolate, Cupcakes, y otros productos horneados,
                            utilizando ingredientes frescos y naturales. Además,
                            nos enorgullece la dedicación y cariño puestos en
                            cada una de nuestras recetas.
                        </p>
                    </div>
                </div>
                <div className="amigos">
                    <div>
                        <h2>Siete amigos, una pasión</h2>
                        <p>
                            La gastronomía es un rubro que de una u otra manera
                            nos une a todos y nuestro caso no fue distinto. Nos
                            unimos con el fin de explorar la pastelería, de
                            disfrutarla, crearla y compartirla. Confiamos en que
                            la dulzura de nuestros productos equipara la de
                            nuestra amistad.
                        </p>
                    </div>
                    <img src={lamTwo} alt="" />
                </div>
            </section>

            <footer id="footer">
                <div>
                    <h3>E-mail</h3>
                    <p>contact@sweetfriends.com</p>
                </div>
                <div>
                    <ul>
                        <li>Facebook: Sweet Friends Arg</li>
                        <li>Instagram: @sweetfriendsarg</li>
                        <li>Twitter: @sweetfriendsarg</li>
                        <li>Whatsapp: +11 3444 5555</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default App
