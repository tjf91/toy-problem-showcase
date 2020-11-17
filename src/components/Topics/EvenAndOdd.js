import React,{Component} from 'react'

export default class EvenAndOdd extends Component{
    constructor(){
        super()

        this.state={
            evenArray:[],
            oddArray:[],
            userInput:'',
        }
    }

    handleUserInput(e){
        this.setState({
            userInput:e.target.value
        }) 
        console.log(this.state)
    }
    handleClick(){
        const userInput= this.state.userInput.split(/\W/).filter(item=>item!=='')
        console.log(userInput)
        const evens = userInput.filter(item=>item%2===0)
        const odds = userInput.filter(item=>item%2===1)
        this.setState({
            evenArray:[...evens],
            oddArray:[...odds],
            userInput:'',
        })
    }


    render(){
        return(
            
            <div className='puzzleBox evenAndOddPB'>
               <h4>Even And Odd</h4>
                <input onChange={(e)=>this.handleUserInput(e)} className='inputLine'/>
                <button onClick={()=>this.handleClick()} className="confirmationButton">MAGIC</button>
        <span className='resultsBox'>Evens: {this.state.evenArray.map(item=>`${item}, `)}</span>
                <span className='resultsBox'>Odds: {this.state.oddArray.map(item=>`${item}, `)}</span>

            </div>
            
        )
    }
}

