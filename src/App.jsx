import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Titulo from "./Titulo";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App(){
  return (
    <div>
      {/* <Titulo cor="blue" paragrafo={true} nome="Felipe" />
      <Titulo cor="green" paragrafo={true} nome="João"/>
      <Titulo cor="red" paragrafo={true} nome="Ana"/>
      <Titulo cor="violet" paragrafo={false}/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sobre' element={<Sobre/>}></Route>
          <Route path='/contato' element={<Contato/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
    
  )
}

export default App