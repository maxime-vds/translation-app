import img from "./assets/image.webp"
import './App.css'
import Translate from "./components/translator"




function App() {

  return (
    <div className="App bg-beige min-h-screen">
        {/**title*/}
      <div>
        <h1 className="text-3xl font-bold text-beige bg-bleu  text-center pt-10 pb-10">
          TRANSLATOR GAME
        </h1>
      </div><br />
      {/**Game quiz */}
      <div className="p-6 flex flex-col lg:flex-row justify-center items-center">
          <div className="mb-4 lg:mr-36 lg:mb-0">
            <img src={img} className="h-auto rounded-xl opacity-80 md:opacity-100" />
          </div>
            <div className="pt-3">
          < Translate />
          </div>
      </div>
   
          {/**footer */}
        <footer className="font-serif text-center pt-20 text-xs md:text-base ">
          Create by Student @BeCode 2023.
        </footer>

  </div>
    
  )
}

export default App
