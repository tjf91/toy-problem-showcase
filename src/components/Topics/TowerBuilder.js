import React, {Component} from 'react'

export default class TowerBuilder extends Component{    
    constructor() {
        super();
        this.state={
            userInput:0,
            nFloors:[],
        }
    }
    handleInput(e){
        this.setState({
            userInput:Number(e.target.value),
        })        
    }

    towerBuilder(no) {
        const arr =[]
        const space = " "
        const star = '*'     
        
        for(let i=1;i<=no;i++){
            arr.push(space.repeat(no-i)+star.repeat(2*i-1)+space.repeat(no-i))
            
        }
            return arr
            
        }

    handleOnClick(){
        const nFloors=this.towerBuilder(this.state.userInput)
        console.log(nFloors)
        this.setState({
            
            nFloors:[...nFloors],
            userInput:'',
        })
        
        
    }


      




      render(){



    return (
        <div className='puzzleBox'>
            <h4>Tower Build</h4>
            <input onChange={e=>this.handleInput(e)} className='inputLine' placeholder="Insert number of floors"/>
            <button onClick={()=>this.handleOnClick()} className="confirmationButton">Build</button>
    <span className='towerBox'>{this.state.nFloors.map(item=><div key={item}>{item}</div>)}</span>
        </div>
    )
    }

    
}