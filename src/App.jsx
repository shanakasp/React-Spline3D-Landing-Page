import Spline from '@splinetool/react-spline';
import "./styles/main.scss"
import Logo from "./images/logo.png"
import Instagram from "./images/instagram.svg"
import Facebook from "./images/facebook.svg"
import Linkedin from "./images/linkedin.svg"

function App() {
  return (

    <div className='App'> <Spline scene="https://prod.spline.design/pw-g5Gz9TjN1701F/scene.splinecode" />
    <nav>
      <div className='itemContainer'>
        <div className='logo'
        >
          <img src={Logo} alt='logo'></img>
        </div>
        <div className='navList'>
          <ul>
            <li>
              <a href='/'>home</a>
            </li>

            <li>
              <a href='/'>about</a>
            </li>

            <li>
              <a href='/'>prooject</a>
            </li>

            <li>
              <a href='/'>contact</a>
            </li>

          </ul>
        </div>
        <div className='burgerContainer'>
          <div className='burgerTrigger'></div>
          <div className='burgerMenu'></div>
        </div>
      </div>
    </nav>
    <section > <div className='contents'>
      <h1>Let's Build This <span>Awesome Project</span></h1>
      <p>This is a sample paragraph.</p> </div>
      <div className='buttons'>
        <button className='one'>Get Started.</button>
        <button className='two'>oour Story.</button>
         
      </div>
    </section>
    <footer>
      <div className='contents'>
        <ul>
          <li><a href='/'><img src={Instagram} alt='instagram'></img></a></li>
          <li><a href='/'><img src={Linkedin} alt='linkedin'></img></a></li>
          <li><a href='/'><img src={Facebook} alt='facebook'></img></a></li>
        </ul>
        <div className='creator'>
          <p>Done with React and Slipe3D</p>
        </div>
      </div>
    </footer>

    </div> 
  );
}

export default App;