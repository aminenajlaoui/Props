import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Photo from'./profile/profile.jpg'
import Profile from './profile/profile';
import PropTypes from 'prop-types';
function App() {
  const FullName="Amine Najlaoui"
  const bio="I am Web developper"
  const profession="I Make a Website Application"
  const handleName = () => {
    alert (`Welcome ${FullName}`)
}
  return (
<div className='card' style={{textAlign:"center",border:1,borderColor:"black",borderStyle:'solid',width:1900,height:950,backgroundColor:'black'}}>
  <header className='apph' style={{width:700,height:450,backgroundColor:'white',position:"absolute",left:550}} >
{/* <img style={{width:100, borderRadius:100}} src={Photo} alt='Mypic'/> */}
    <Profile style={{color:'Blue'}} FullName={FullName} bio={bio} profession={profession} handleName={handleName}>
      </Profile>
      </header>
  </div>
  );
}

export default App;