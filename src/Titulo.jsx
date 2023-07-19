import { useState } from "react"

function Titulo(props) {

    const [texto, setTexto] = useState("Um texto do estado inicial")
    const [titulo, setTitulo] = useState(`Olá, sou ${props.nome ? props.nome : "ninguém"}`)

    const urlImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrtaXGkXhkLIV4Du-Lg0JPJ5I84RQb8RvIA&usqp=CAU"

    return (

        <div>
            <h1 style={{color: props.cor}}>{titulo}</h1>
            <input style={{display: "block"}} value={titulo} onChange={(e) =>{setTitulo(e.target.value)}} />
            <img width={250} src={urlImg} />
            {props.paragrafo &&
                <p>{texto}</p> 
            }
            
            <button onClick={() => {setTexto(prompt("escreva algo para mudar o parágrafo"))}}>Mudar</button>
        </div >  
    )
}

export default Titulo