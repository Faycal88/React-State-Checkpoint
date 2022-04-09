import React, {useState,useEffect} from 'react';
import './App.css';
import pic from './pic.jpg';


const stylePic = { width: "200px", height: "200px", borderRadius: "50%" }  // inline styling


class Profile extends React.Component {
  state = {
    fullName: "Faycal",
    bio: "web developer",
    imgSrc: { pic },
    profession: 'GMC Student',
    show : this.props.show
  };
  render() {
    return (
      <div>
        <img style={stylePic} src={pic} alt="profile_pic"/>
        <h1>Hello {this.state.fullName} you are a {this.state.bio} and a { this.state.profession}</h1>
      </div>
    )
    }
}


function App() {
    
  const [show, Setshow] = useState(false);
  const [time,Settime] = useState(0);

  useEffect(() => { 
    let timesRun = 0;
    var interval = setInterval(function(){
        timesRun += 1;
      Settime(timesRun);
    }, 1000);

    return () => clearInterval(interval);
  },[show]);
  
  function handleClick() {
    Setshow(() => !show);
  }

  if (!show) {
    return (
      <div className="App">
        <h1>No information found!</h1>
        <h1></h1>
        <h1>{time} seconds since you last clicked</h1>
        <button onClick={() => handleClick()} >Click me</button>
        </div>
    )
  }

  return (
    <div className="App">
      <Profile></Profile>
      <h1>{time} seconds since you last clicked</h1>
      <button onClick={() => handleClick()} >Click me</button>
      </div>
  )

  

}

export default App;
