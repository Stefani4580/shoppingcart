import React, { Component } from 'react';
import LineItem from "./LineItem";

export default class ShoppingCart extends Component {
    constructor(){
        super();
        this.state ={
            applesQuantity : 0,
            applesCost : 1,
            orangesQuantity : 0,
            orangesCost : 2,
            total : 0
        }
    }

    addApples = () => {
        console.log("Inside ShoppingCart.addApple");
        this.setState({
            applesQuantity : this.state.applesQuantity + 1
        })
        this.updateTotal();
    }

    minusApples = () => {
        console.log("Inside ShoppingCart.minusApple");
        this.setState({
            applesQuantity : this.state.appleQuantity - 1
        })
        this.updateTotal();
    }

    addOranges = () => {
        console.log("Inside ShoppingCart.addApple");
        this.setState({
            orangesQuantity : this.state.orangesQuantity + 1,
        })
        this.updateTotal();
    }

    minusOranges = () => {
        console.log("Inside ShoppingCart.minusApple");
        this.setState({
            orangesQuantity : this.state.orangesQuantity - 1,
        })
        this.updateTotal();
    }

    updateTotal = () => {
        console.log("Inside updateTotal");
        this.setState({
            total : (this.state.applesQuantity * this.state.applesCost)
                    + (this.state.orangesQuantity * this.state.orangesCost)
        })
    }


    render() {
        return (
            <div className="shoppingCart">
                <LineItem name = "Apples" cost = "$1.00" quantity = {this.state.applesQuantity}/>
                <button id="plusApples" onClick={this.addApples}>+</button>
                <button id="minusApples" onClick={this.minusApples}>-</button>
                <input type="checkbox" id="giftApple" name="giftApple" value="giftWrapApple"/>
                <LineItem name = "Oranges" cost = "$2.00" quantity = {this.state.orangesQuantity}/>
                <button id="plusOranges" onClick={this.addOranges}>+</button>
                <button id="minusOranges" onClick={this.minusOranges}>-</button>
                <input type="checkbox" id="giftOrange" name="giftOrange" value="giftWrapOrange"/>
                <h1>Total: ${this.state.total.toFixed(2)} </h1>
            </div>
        )
    }
}
