import React,{Component} from 'react'

export default class FilterObject extends Component{
    constructor(){
        super()

        this.state={
            unFiltereredArray: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ],
            userInput:'',
            filteredArray:[],
        }
    }
    handleUserInput(e){
        this.setState({
            userInput:e.target.value
        })
        
    }
    handleClick(){
        const filteredArray = this.state.unFiltereredArray.filter(obj=>obj.hasOwnProperty(this.state.userInput))
        console.log(filteredArray)
        this.setState({
            filteredArray,
            userInput:''
        })
    }

    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
        <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unFiltereredArray)}</span>
                <input onChange={e=> this.handleUserInput(e)} className='inputLine' value={this.state.userInput} />
                <button onClick={()=>this.handleClick()} className='confirmationButton'>Click here</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
            
        )
    }
}

