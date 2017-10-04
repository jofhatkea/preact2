import { Component } from 'preact';

export default class TodoItem extends Component {
    constructor(props){
        super(props);
        this.itemClicked = this.itemClicked.bind(this);
    }
    itemClicked(){
        this.props.childClicked(this.props.task)
    }
	render() {
        let classString = ""; 
        if(this.props.complete){
            classString= "completedLineThrough";
        }
		return (
			<li 
                onClick={this.itemClicked} 
                class={classString}>
                    {this.props.task}
            </li>
		);
	}
}
