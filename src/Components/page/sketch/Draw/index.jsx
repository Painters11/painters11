import React, { useRef, useState, useEffect } from 'react'
import './draw.scss'

const Draw = (props) => {
    const [drawing, setDrawing] = useState(false)

    const toolSelected = props.toolSelected
    const colorSelected = props.colorSelected
    const brushSize = props.brushSizeSelected
    const canvasRef = useRef(null)
    const ctxRef = useRef(null)
    const startXRef = useRef(null)
    const startYRef = useRef(null)
    const endXRef = useRef(null)
    const endYRef = useRef(null)
    const backgroundRef = useRef(null)
    const circleRef = useRef(null)
  
    useEffect(() => {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth * 2
        canvas.height = window.innerHeight * 2
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`

        const ctx = canvas.getContext("2d")
        ctx.scale(2, 2)
        ctx.lineCap = "round"
        ctx.strokeStyle = "black"
        ctx.lineWidth = 5
        ctxRef.current = ctx
        
        backgroundRef.current = window.getComputedStyle(document.body)["backgroundColor"]
       
    }, [])
    const getMousePos = (canvas, e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        }
    }
    const handleMouseDown = (event) => {
        const pos = getMousePos(canvasRef.current, event)
        const startX = pos.x
        const startY = pos.y
        startXRef.current = startX
        startYRef.current = startY
        ctxRef.current.strokeStyle = colorSelected
        ctxRef.current.lineWidth = brushSize
        
        if(toolSelected === 'pen') {
            ctxRef.current.beginPath()
            ctxRef.current.moveTo(pos.x, pos.y)
            setDrawing(true)
        } else if (toolSelected === 'circle' || toolSelected === 'rectangle') {
            ctxRef.current.beginPath()
            setDrawing(true)
        } else if(toolSelected === 'eraser') {
            ctxRef.current.beginPath()
            ctxRef.current.strokeStyle = backgroundRef.current
            ctxRef.current.moveTo(pos.x, pos.y)
            setDrawing(true)
        }
    }

    const handleMouseMove = (event) => {
        if(!drawing) {
            return
        }
        const pos = getMousePos(canvasRef.current, event)
        if(toolSelected === 'pen' || toolSelected === 'eraser') {
            ctxRef.current.lineTo(pos.x, pos.y)
            ctxRef.current.stroke()
        } 
    }

    const handleMouseUp = (event) => {
        const pos = getMousePos(canvasRef.current, event)
        endXRef.current = pos.x
        endYRef.current = pos.y
        if(toolSelected === 'pen' || toolSelected === 'eraser') {
            ctxRef.current.closePath()
            setDrawing(false)
        } else if(toolSelected === 'circle') {
            const radius = Math.sqrt(Math.pow((startXRef.current - endXRef.current), 2) + Math.pow((startYRef.current - endYRef.current), 2))
            circleRef.current = ctxRef.current.arc(startXRef.current, startYRef.current, radius, 0, 2 * Math.PI)
            ctxRef.current.stroke()   
            ctxRef.current.closePath()
            
            setDrawing(false)
        } else if (toolSelected === 'rectangle') {
            const width = endXRef.current - startXRef.current
            const height = endYRef.current - startYRef.current
            ctxRef.current.strokeRect(startXRef.current, startYRef.current, width, height)
            ctxRef.current.closePath()
            setDrawing(false)
        }
    }
    return (
      <>
        <canvas id="canvas"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          ref={canvasRef}
          >
            Paint
            
        </canvas>
      </>

    )
}

export default Draw