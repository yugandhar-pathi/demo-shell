
import { mountVercelToolbar } from '@vercel/toolbar/vite';


const MICROAPP_URL = import.meta.env.VITE_MICROAPP_URL;

mountVercelToolbar();

function App() {

  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <div style={{borderBottom:'1px solid black'}}>
        <div style={{margin: '20px'}} >Shell</div>
      </div>
      <iframe src={MICROAPP_URL}></iframe>

    </div>
  )
}

export default App
