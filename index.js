import './style';
import { Component } from 'preact';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
var Loader = require('halogen/PacmanLoader');

export default class App extends Component {
	constructor(props){
		super(props);
		let myList=[];
		if (typeof window !== "undefined") {
			if(localStorage.list){
				myList=JSON.parse(localStorage.list);
			} 
		}
		this.state = {
			list:myList
		}
		this.addItem = this.addItem.bind(this);
		this.childClicked = this.childClicked.bind(this);
	}
	addItem(data){
		console.log(data, this);
		let newData = this.state.list;
		let newItem = {
			task: data,
			completed:false
		}
		newData.push(newItem);
		this.setState({
			list: newData
		});
		if (typeof window !== "undefined") {
			localStorage.setItem('list', JSON.stringify(newData))
		}

	}
	childClicked(data){
		console.log(data)
		let newData = this.state.list;
		let item = newData.findIndex(o=>{
			return o.task===data
		})
		newData[item].completed = !newData[item].completed;
		this.setState({
			list: newData
		})
		console.log(item)
		if (typeof window !== "undefined") {
			localStorage.setItem('list', JSON.stringify(newData))
		}
	}
	render() {
		let tasks = this.state.list.map(item=>{
			return <TodoItem 
				childClicked={this.childClicked} 
				task={item.task} 
				complete={item.completed} 
			/>
		});
		return (
			<div>
				<h1>Hello, World!</h1>
				<Form parentMethod={this.addItem} />
				<Loader color="#26A65B" size="16px" margin="4px"/>
				<ul>
					{tasks}
				</ul>
			</div>
		);
	}
}
