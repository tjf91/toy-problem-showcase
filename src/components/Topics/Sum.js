import React,{Component} from 'react'

export default class Sum extends Component{
    constructor(){
        super()
        this.state={
            num1:0,
            num2:0,
            sum:null,
        }
    }
    handleInput1(e){
        this.setState({
            num1:Number(e.target.value)
        })
    }
    handleInput2(e){
        this.setState({
            num2:Number(e.target.value)
        })
    }
    handleClick(){
        const sum=this.state.num1+this.state.num2
        this.setState({
            sum,
        })
    }



    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>SUM</h4>
                <input onChange={e=>this.handleInput1(e)} className='inputLine'/>
                <input onChange={e=>this.handleInput2(e)} className='inputLine'/>
                <button onClick={()=>this.handleClick()} className="confirmationButton">SUM UP</button>
        <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
            
        )
    }
}

