import React, { Component } from "react";
// import Placedata from '../data/placedata';
import Posts from "../data/posts";
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
} from "@syncfusion/ej2-react-grids";
import { DataManager, ODataV4Adaptor } from "@syncfusion/ej2/data";
import {
	ordersData,
	contextMenuItems,
	authorGrid,
	ordersGrid,
} from "../data/dummy";
import { Header } from "../components";

export class Placeholder extends Component {
	state = {
		posts: [],
	};

	gridTemplate(props) {
		return (
			<div>
				<p>Leanne Graham</p>
			</div>
		);
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => {
				// res.words.length;
				this.setState({ posts: data, authorGrid });
			})
			.catch(console.log);
	}

	render() {
		return (
			<div>
				<Posts posts={this.state.posts} />
			</div>
		);
	}
}

export default Placeholder;
