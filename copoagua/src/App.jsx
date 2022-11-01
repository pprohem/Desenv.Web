import { useState } from 'react'
import copo from './assets/img/agua1.webp'
import './components/styles.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [quantidade, setQuantidade] = useState(400)
  const [total, setTotal] = useState(0)
  const [meta, setMeta] = useState(2000)
  const [mensagem,setMensagem] = useState("")
  const [cups, setCups] = useState([])
 
  function drink(numeroCopo) {
    const dataHora = new Date
    setCups([
      ...cups, 
      {cup: numeroCopo, dataHora}
    ])
  }
const calcular = () => {
 
   if(quantidade > 0){
    if(meta>0){
      const countTemp = count+1
      setCount(countTemp)
      setTotal(quantidade*countTemp)
      setMensagem("")
      calcularMeta()
      drink(countTemp)
    }else{
      setMensagem("Não é possivel informar uma quantidade negativa")
    }
  }else{
  setMensagem("Não é possivel informar uma quantidade negativa")
  }
}
const zerarTotal = () => {
  setTotal(0)
  setCount(0)
  setMensagem("")
  setCups([])
}

const calcularMeta = () => {
  if(quantidade*(count+1) >= meta){
    setMensagem("Você concluiu sua meta diaria!")
  } 
  




}
console.log(cups)
  return (
    <body>
      
      <div className="App">
      
      
      
      <div className="inputs"> 
        
        
            <h3>Informe a capacidade do copo (ML)</h3>
                <input type="number" min={0} 
                          value={quantidade} placeHolder="Informe a capacidade do copo.."  
                       onChange={e => setQuantidade(parseInt(e.target.value))}/>
                <h3>Informe sua meta de ingestão diária(ML)</h3>
                <input type="number" min={0} 
                      value={meta}placeHolder="Informe a meta de agua a se ingerir" 
                      onChange={e => setMeta(parseInt(e.target.value))}/>
          
            
              <h3>"Diario de Água"</h3>
            {cups.map((copo,index)=><ul key={index}>   
                    <li >Copo N:{copo.cup}││{copo.dataHora.toString()}</li>
             </ul>
            )}
       

        
        
      </div>
      
     
      <div className="texto"> 
        <h1 className='qtdCopos'>Quantos copos foram bebidos?</h1>
        <h2 className='totalCopos'>{count} copos</h2>
        <h3> O total de agua ingerido foi {total} ml</h3>
        <h3>{mensagem}</h3>
        
        <div className="botoes">
        <button onClick={calcular}>+1 COPO</button>
        <button onClick={zerarTotal}>Clique aqui para zerar a quantidade de copos bebidos.</button>
        </div>
        
        
      </div>
      
     
    </div>
    </body>
    
    
  )
}

export default App
