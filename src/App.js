
import './App.css'
import img from "./5.jpg"
function App() {
  return (
    <div style={{margin:"auto"}}>

      <div style={{ border: "solid 1px noir", maxWidth: "100vw" }}>
        <h1 class="title red">Votre nom ici</h1>

        <br />

        <img src={img} />

        <br />

        <img src="/jiji.jpg" />

      </div>

      <video width="320" height="240" controls>

        <source src="maVideo.mp4" type="video/mp4" />

      </video>
    </div>
  )
}

export default App;
