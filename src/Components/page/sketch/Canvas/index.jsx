import React, { useState } from 'react'
import Draw from '../Draw'
import './canvas.scss'

const Canvas = (props) => {
  const [tool, setTool] = useState('')

  const handleClick = (event) => {
    setTool(event.target.name)
  }

  return (
    <>
      <div className='drawBox'>
        <div className="toolBelt">
          <button onClick={handleClick} name="pen" type="radio">Pen</button>
          <button onClick={handleClick} name="rectangle" type="radio">Rectangle</button>
          <button onClick={handleClick} name="circle" type="radio">Circle</button>
        </div>  
        <div id='canvas'>
          <Draw toolSelected={tool} />
        </div>
      </div>
    </>
  )
}

export default Canvas


// class Canvas extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       penSelected: false,
//       rectangleSelected: false,
//       circleSelected: false
      
//     }
//   }
//     componentDidUpdate(prevProps) {
//         const { toolSelected } = this.props
//         if(toolSelected !== prevProps.toolSelected) {
//             console.log(toolSelected)
//             if(toolSelected === 'Pen'){
//                 this.setState({ 
//                     penSelected: true,
//                     rectangleSelected: false,
//                     circleSelected: false
//                 })
//             } else if(toolSelected === 'Rectangle'){
//                 this.setState({ 
//                     penSelected: false,
//                     rectangleSelected: true,
//                     circleSelected: false
//                 })
//             } else if (toolSelected === 'Circle') {
//                 this.setState({ 
//                     penSelected: false,
//                     rectangleSelected: false,
//                     circleSelected: true
//                 })
//             }
//         }
        
//     }

   

//   render() {  
//     return (
//       <>
//         {this.state.penSelected ? <Pen isSelected={this.state.penSelected}/> : ''}
//         {this.state.rectangleSelected ? <Rectangle isSelected={this.state.rectangleSelected}/> : ''}
//         {this.state.circleSelected ? <Circle isSelected={this.state.circleSelected}/> : ''}
//       </>
//     )
//   }

// }

// export default Canvas