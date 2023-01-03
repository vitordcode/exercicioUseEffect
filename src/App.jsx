import { useEffect, useState } from 'react'
import Produto from './Produto'

export function App() {
  const [produto, setProduto] = useState(null)

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal !== null) setProduto(produtoLocal)
  }, [])

  useEffect(() => {
    if(produto != null) window.localStorage.setItem('produto', produto)
  }, [produto])

  function handleClick({target}) {
    setProduto(target.innerText)
  }

  return (
    <>
      <h1>Preferencia: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: 'rem' }}>
        notebook
      </button>
      <button onClick={handleClick} style={{ marginRight: 'rem' }}>
        smartphone
      </button>

      <Produto produto={produto}/>
    </>
  )
}