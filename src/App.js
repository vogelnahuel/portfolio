import './App.css';
import perfil from './imagenes/perfil.jpg'
import clima from './imagenes/clima.png'
import criptomonedas from './imagenes/criptomonedas.png'
import mercado from './imagenes/mercado.png'
import citas from './imagenes/citas.png'
import crud from './imagenes/crud.png'
import cotizador from './imagenes/cotizador.png'
import html from './imagenes/html.png'
import css from './imagenes/css.jpeg'
import javascript from './imagenes/javascript.png'
import bootstrap from './imagenes/bootstrap.png'
import sass from './imagenes/sass.png'
import react from './imagenes/react2.png'
import typescript from './imagenes/typescript.png'
import git from './imagenes/git.png'
import java from './imagenes/java.jpg'
import c from './imagenes/C.png'
import cPlusPlus from './imagenes/cPlusPlus.svg'
import node from './imagenes/node.png'
import oracle from './imagenes/oracle.jpg'
import sqlServer from './imagenes/sqlServer.jpg'
import mysql from './imagenes/mysql.png'




function App() {
  return (
    <div className="App">
        <div className="contenedor">
                <h1 className="titulo">   Vogel Nahuel</h1>
                <p> Fullstack developer</p>
                
                <div className="redes">
                    <a className="separacionA"  target="_blank" href="https://www.facebook.com/" rel="noreferrer"><i className="fab fa-facebook"></i></a> 
                    <a className="separacionA" target="_blank" href="https://www.instagram.com/?hl=es-la" rel="noreferrer"><i className="fab fa-instagram-square"></i> </a>
                    <a className="separacionA" target="_blank" href="https://github.com/vogelnahuel" rel="noreferrer"><i className="fab fa-github"></i> </a>
                    <a className="separacionA" target="_blank" href="https://www.linkedin.com/in/nahuel-vogel-a4b681181/" rel="noreferrer"><i className="fab fa-linkedin-in"></i> </a>
                    <a className="separacionA" target="_blank" href="https://twitter.com/home" rel="noreferrer"><i className="fab fa-twitter"></i> </a>
                </div>

                <section className="card">
                    <h2 className="subtitulos">Sobre mi</h2>
                    <div className="contenido-sobre-mi">
                      
                      <img  className="imagen-perfil" src={perfil} alt="perfil"/>
                      <article className="contenido-p">
                        A lo largo de mi vida encontre una pasión  en la informatica desde pequeño
                        a travez de esto me aventure en esta hermosa carrera de ingenieria informatica desde el 2015 estudiando en la universidad
                        nacional de la matanza , encontrando asi  el rubro que mas me gusto, el desarrollo de aplicaciones web

                        <br/>
                        <br/>
                        Cuento con una amplia trayectoria
                       en temas asociados a la programacion con proyectos propios 
                       ,academicos y laborales ademas como desarrollador me ha permitido 
                       tener una visión completa en los diferentes procesos relacionados
                        con del desarrollo de una aplicacion.
                        <br/>
                        <br/>
                        Siempre tengo interes en aprender cosas nuevas.</article>

                    </div>

                </section>

                <section className="card">
                    <h2 className="subtitulos">Proyectos</h2>
                    <div className="proyectos">
                      <div>
                          <a   rel="noreferrer" href="https://vogelnahuel.github.io/Criptomonedas/" target="_blank">
                            <img  className="imagen-captura" src={criptomonedas} alt="perfil"/>
                            <h3>Criptomonedas</h3>
                            <p className="contenido-p"> junio 2020 </p>
                          </a>
                      </div>
                      <div>
                          <a   rel="noreferrer" href="https://vogelnahuel.github.io/Clima-mundial/" target="_blank">
                            <img  className="imagen-captura" src={clima} alt="perfil"/>
                            <h3>Clima mundial</h3>
                            <p className="contenido-p">  enero 2021 </p>
                          </a>
                      </div>
                      <div>
                          <a  rel="noreferrer" href="https://vogelnahuel.github.io/mercado-compras/" target="_blank">
                            <img  className="imagen-captura" src={mercado} alt="perfil"/>
                            <h3>Supermercado online</h3>
                            <p className="contenido-p"> diciembre 2019 </p>
                          </a>
                      </div>
                      <div>
                          <a  rel="noreferrer" href="https://vogelnahuel.github.io/Administrador-De-Citas/" target="_blank">
                            <img  className="imagen-captura" src={citas} alt="perfil"/>
                            <h3>Administrador de citas</h3>
                            <p className="contenido-p"> marzo 2021 </p>
                          </a>
                      </div>
                      <div>
                          <a  rel="noreferrer" href="https://vogelnahuel.github.io/administradorDeCLientes/" target="_blank">
                            <img  className="imagen-captura" src={crud} alt="perfil"/>
                            <h3>Administrador de clientes</h3>
                            <p className="contenido-p"> marzo 2021 </p>
                          </a>
                      </div>
                      <div>
                          <a  rel="noreferrer" href="https://vogelnahuel.github.io/cotizador-de-seguros/" target="_blank">
                            <img  className="imagen-captura" src={cotizador} alt="perfil"/>
                            <h3>Cotizador de prestamos</h3>
                            <p className="contenido-p"> diciembre 2020 </p>
                          </a>
                      </div>
                    </div>
                    
                </section>
                <section className="card">
                    <h2 className="subtitulos">Experiencia laboral</h2>

                    <div className="experiencia">
                           <div className="tamanio-experiencia">
                              <p className="contenido-p"> agosto 2020 -  diciembre 2020 </p>
                              <h3>Empresa : Adv Technology</h3>
                              <p className="contenido-p"> Fullstack developer </p>
                              <p className="contenido-p">Tecnologias utilizadas :<br/>
                                          -Front-End (HTML, CSS, JavaScript) <br/>
                                          -Back-End (C++)<br/>
                                          -Base de Datos (SQL SERVER,PL SQL ORACLE). <br/>
                              </p>
                          </div>
                          <div>
                              <p className="contenido-p">Tareas: realize tanto diseño de paginas , <br/>
                                como su funcionalidad y la integracion con las diferentes bases de datos,<br/>
                                 Utilizando diferentes Patrones de diseño.</p>
                          </div>
                        
                    </div>
                    <hr className="separacion"/>
                    <div className="experiencia">
                           <div className="tamanio-experiencia">
                              <p className="contenido-p"> abril 2021 - actualidad </p>
                              <p className="contenido-p"> FrontEnd developer </p>
                              <h3>Empresa : VirtualDreams</h3>
                              <p className="contenido-p">Tecnologias utilizadas :<br/>
                              -Front-End (HTML5, CSS3,BOOTSTRAP,SASS, JavaScript,TypeScript,REACT.JS) <br/>
                                        <br/>
                                    <br/>
                              </p>
                          </div>
                          <div>
                              <p className="contenido-p">Tareas: en el rol de front realizo el diseño de paginas , <br/>
                              optimizacion de componentes,servicios de integraciones y creacion de documentacion <br/>
                              y analisis para otros pares programadores.</p>
                          </div>
                        
                    </div>
                    
                </section>
                <div className="card">
                    <h2 className="subtitulos">Tecnologias</h2>
                    
                        <img  className="imagen-tecnologia" src={html} alt="perfil"/>
                        <img  className="imagen-tecnologia" src={css} alt="perfil"/>
                        <img  className="imagen-tecnologia" src={bootstrap} alt="perfil"/>                   
                        <img  className="imagen-tecnologia" src={sass} alt="perfil"/>
                   
                   
                        <img  className="imagen-tecnologia" src={javascript} alt="perfil"/>
                        <img  className="imagen-tecnologia" src={typescript} alt="perfil"/>
                        <img  className="imagen-tecnologia" src={react} alt="perfil"/>
                        
                        <img  className="imagen-tecnologia" src={git} alt="perfil"/>
                    
                  
                        <img  className="imagen-tecnologia" src={java} alt="perfil"/>
                        <img  className="imagen-tecnologia" src={c} alt="perfil"/>
                        <img  className="imagen-tecnologia" src={cPlusPlus} alt="perfil"/>
                        <img  className="imagen-tecnologia" src={node} alt="perfil"/>
                  

                        <img  className="imagen-tecnologia" src={oracle} alt="perfil"/>
                        <img  className="imagen-tecnologia" src={sqlServer} alt="perfil"/>
                        <img  className="imagen-tecnologia" src={mysql} alt="perfil"/>
                        
                </div>
                <section className="card">
                    <h2 className="subtitulos">Educacion</h2>
                    <div className="educacion">
                          <div>
                              <p className="contenido-p"> 2012-2015 </p>
                              <h3>Bachillerato en ciencias naturales</h3>
                              <p className="contenido-p"> Escuela secundaria numero 7</p>
                          </div>
                          <div>
                              <p className="contenido-p"> 2015-actualidad </p>
                              <h3>Ingenieria Informatica</h3>
                              <p className="contenido-p"> Universidad Nacional de la matanza</p>
                          </div>
                         
                    </div>
                    
                </section>
                <section className="card">
                    <h2 className="subtitulos">Idiomas</h2>
                    <div className="idiomas">
                      <h2 className="subtitulos">Español</h2>
                      <h2 className="subtitulos">Ingles</h2>
                    </div>
                    
                </section>
                <section className="card">
                    <h2 className="subtitulos">Contacto</h2>
                    <div>
                        <form className="formulario">
                            <div>
                                <input className="input" placeholder="Email" />
                            </div>
                            <div>
                                <input className="input"  placeholder="Asunto" />
                            </div>
                            <div>
                                <textarea  placeholder="Escriba su mensaje"  className="mensaje" name="mensaje" id="mensaje"  rows="10"></textarea>
                            </div>
                            <div>
                                <button className="enviar"> enviar mensaje</button>
                            </div>
                        </form>
                    </div>
                </section>

           </div>
    </div>
  );
}

export default App;
