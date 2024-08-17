import './App.css'
import conf from './conf/conf'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  console.log(conf.appwriteUrl);
  return (
    <>
      <p>Blog with Appwirte</p>
    </>
  )
}

export default App
