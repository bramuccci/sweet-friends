import './App.scss'

function App() {
    return (
        <>
            <nav>
                <div>
                    <img src="src\assets\fotos-postres\cookie.png" alt="" />
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
                        <img
                            src="src/assets/sweet-friends-logo.svg"
                            alt=""
                            className="header-logo"
                        />
                        <p>Descubrí el sabor de la ternura</p>
                        <button>Explorar</button>
                    </div>
                    <img
                        className="cake-img"
                        src="src\assets\piece-of-cake.png"
                        alt=""
                    />
                </div>
            </header>
            <section className="section-productos" id="productos">
                <h2>Productos</h2>
                <p>Conocé lo que nuestra pastelería tiene para ofrecer.</p>
                <div className="galeria-productos">
                    <div>
                        <img
                            src="src\assets\fotos-postres\brownie.png"
                            alt=""
                        />
                        <h3 className="nombre">Brownies</h3>
                    </div>
                    <div>
                        <img src="src\assets\fotos-postres\cookie.png" alt="" />
                        <h3 className="nombre">Choco cookies</h3>
                    </div>
                    <div>
                        <img src="src\assets\fotos-postres\donut.png" alt="" />
                        <h3 className="nombre">Donuts</h3>
                    </div>
                    <div>
                        <img src="src\assets\fotos-postres\flan.png" alt="" />
                        <h3 className="nombre">Postres</h3>
                    </div>
                    <div>
                        <img
                            src="src\assets\fotos-postres\cupcake.png"
                            alt=""
                        />
                        <h3 className="nombre">Cupcakes</h3>
                    </div>
                    <div>
                        <img
                            src="src\assets\fotos-postres\panna-cotta.png"
                            alt=""
                        />
                        <h3 className="nombre">Frutillas con crema</h3>
                    </div>
                </div>
            </section>
            <section className="about" id="about">
                <div className="sobre-nosotros">
                    <img src="src\assets\fotos-lam\foto-lam.jpeg" alt="" />
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
                    <img src="src\assets\fotos-lam\foto-lam-2.jpeg" alt="" />
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
