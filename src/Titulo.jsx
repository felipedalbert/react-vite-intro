function Titulo(props) {

    const urlImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrtaXGkXhkLIV4Du-Lg0JPJ5I84RQb8RvIA&usqp=CAU"

    return (

        <div>
            <h1 style={{color: props.cor}}>Olá, sou {props.nome ? props.nome : "ninguém"}</h1>
            <img width={250} src={urlImg} />
            {props.paragrafo &&
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero corporis amet quasi dolorum veniam nesciunt sit, officia eos fugit, tenetur autem dolores! Eaque blanditiis nobis ad labore facilis praesentium alias?</p> 
            }
            
        </div >  
    )
}

export default Titulo