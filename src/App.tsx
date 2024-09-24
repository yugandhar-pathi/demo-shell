
const MICROAPP_URL = import.meta.env.MICROAPP_URL;

function App() {

  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <div style={{borderBottom:'1px solid black'}}>
        <div style={{margin: '20px'}} >Header</div>
      </div>
      <iframe src={MICROAPP_URL}></iframe>

    </div>
  )
}

export default App
