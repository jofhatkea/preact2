import { Component } from 'preact';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.buttonClicked=this.buttonClicked.bind(this);
        this.formChanged=this.formChanged.bind(this);
        this.state = {
            message: ''
        }
    }
    buttonClicked(e){
        e.preventDefault();
        //console.log(this.state.message)
        this.props.parentMethod(this.state.message);
        this.setState({
            message: ''
        })
    }
    formChanged(e){
        this.setState({
            message:e.target.value
        })
    }
	render() {
		return (
			<form>
                <input onKeyUp={this.formChanged} type="text" value={this.state.message}/>
                <button onClick={this.buttonClicked}>Add item</button>
            </form>
		);
	}
}
