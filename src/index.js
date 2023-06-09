/**
 * React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
		return (
			<button 
			className="square" 
			onClick={props.onClick}>
				{props.value}
			</button>
		);
	}

/**
 *react has different kinds of components. 
 *here only React.Component is used.
 */
class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true
		};
	}
	renderSquare(i) {
		return <Square 
		value={this.state.squares[i]}
		onClick={()=> {
			this.handleClick(i);
		}}
			/>;	

	}

	handleClick(i) {
		const squares = this.state.squares.slice();
		if(squares[i] != null){
			return;
		}
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext
		});
	}

	render() {
		const status = 'Next player: X';

		return (
			<div>
			<div className="status">{status}</div>
			<div className="board-row">
				{this.renderSquare(0)}
				{this.renderSquare(1)}
				{this.renderSquare(2)}
			</div>
			<div className="board-row">
				{this.renderSquare(3)}
				{this.renderSquare(4)}
				{this.renderSquare(5)}
			</div>
			<div className="board-row">
				{this.renderSquare(6)}
				{this.renderSquare(7)}
				{this.renderSquare(8)}
			</div>
			</div>
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

