import React, { useEffect, useState } from 'react'

const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0})
  const {x, y} = coords;


  useEffect(() => {
    // console.log('componente Message montado')

    const mouseMove = (e) => {
      const coordenadas = { x: e.x, y: e.y }
      setCoords(coordenadas)
    }

    window.addEventListener('mousemove', mouseMove)
    return () => {
      // console.log('componente message desmontado')
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <div>
      <h3>Eres genial! keep it up!</h3>
      <p>
        x: {x}, y: {y}
      </p>
    </div>
  )
}

export default Message
