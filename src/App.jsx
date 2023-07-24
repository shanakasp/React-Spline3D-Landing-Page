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
      </div>
    </nav>
    
    </div> 
  );
}

export default App;