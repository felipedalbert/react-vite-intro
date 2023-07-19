import Titulo from "./Titulo"

function App(){
  return (
    <div>
      <Titulo cor="blue" paragrafo={true} nome="Felipe" />
      <Titulo cor="green" paragrafo={true} nome="João"/>
      <Titulo cor="red" paragrafo={true} nome="Ana"/>
      <Titulo cor="violet" paragrafo={false}/>
    </div>
    
  )
}

export default App