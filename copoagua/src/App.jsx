import { useState } from 'react'
import copo from './assets/img/aagua.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [quantidade, setQuantidade] = useState(400)
  const [total, setTotal] = useState(0)
  const [meta, setMeta] = useState(2000)
  const [mensagem,setMensagem] = useState("")
 
const calcular = () => {
 
   if(quantidade > 0){
    if(meta>0){
      setCount(prevState => prevState+1)
      setTotal(quantidade*(count+1))
      setMensagem("")
      calcularMeta()
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
}

const calcularMeta = () => {
  if(quantidade*(count+1) >= meta){
    setMensagem("Você concluiu sua meta diaria!")
  } else {
    

  }
}

  return (
    <div className="App">
      <img src={copo} alt="" />
      <h1>Quantos copos foram bebidos?</h1>
      
      
      <h2>{count} copos</h2>
      <h3> O total de agua ingerido foi {total} ml</h3>
      <h3>{mensagem}</h3>
      <input type="number" min={0} value={quantidade} placeHolder="Informe a capacidade do copo.."  onChange={e => setQuantidade(parseInt(e.target.value))}/>
      <input type="number" min={0} value={meta}placeHolder="Informe a meta de agua a se ingerir"  onChange={e => setMeta(parseInt(e.target.value))}/>
      <button onClick={calcular}> Clique aqui pra somar quantos copos foram bebidos</button>
      <button onClick={zerarTotal}>Clique aqui para zerar a quantidade de copos bebidos.</button>
      
     
    </div>
    
  )
}

export default App
