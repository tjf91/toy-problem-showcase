import React,{Component} from 'react'

export default class FilterString extends Component{
    constructor(){
        super()
        this.state={
            unFiltereredArray: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ],
            userInput:'',
            filteredArray:[],
        }
    }

    handleUserInput(e){
        this.setState({
            userInput:e.target.value.toLowerCase()
        })
    }
    handleOnClick(){
        const filteredArray=this.state.unFiltereredArray.filter(item=>item.toLowerCase()===this.state.userInput)
        this.setState({
            filteredArray,
            userInput:'',
        })
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
        <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unFiltereredArray)}</span>
                <input onChange={e=>this.handleUserInput(e)} className='inputLine' value={this.state.userInput}/>
                <button onClick={()=>this.handleOnClick()} className="confirmationButton">Click MEEEE</button>
                <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray)} </span>
            </div>
        
            
        )
    }
}

