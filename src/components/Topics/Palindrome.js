import React,{Component} from 'react'

export default class Palindrome extends Component{
    constructor(){
        super()
        this.state={
            userInput:'',
            palindrome:'',
        }
    }
    handleUserInput(e){
        this.setState({
            userInput:e.target.value
        })
    }
    handleOnClick(){
        
        const arr=this.state.userInput.toLowerCase().split('').filter(item=>item!==' ')
        const str=arr.join("")
        const reverseStr=arr.reverse().join('')
        
       reverseStr===str?
       this.setState({palindrome:"true dat"}):
       this.setState({palindrome:"Nope"})
        
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input onChange={e=>this.handleUserInput(e)} className="inputLine"/>
                <button onClick={()=>this.handleOnClick()} className="confirmationButton">Click me</button>
        <span className="resultsBox">{this.state.palindrome}</span>
            </div>
            
        )
    }
}

