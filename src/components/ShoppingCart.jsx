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
            applesQuantity : this.state.applesQuantity + 1,
            total : this.state.total + this.state.applesCost
        })
    }

    minusApples = () => {
        console.log("Inside ShoppingCart.minusApple");
        if (this.state.applesQuantity !== 0) {
        this.setState({
            applesQuantity : this.state.applesQuantity - 1,
            total : this.state.total - this.state.applesCost
        })            
        }
    }

    addOranges = () => {
        console.log("Inside ShoppingCart.addApple");
        this.setState({
            orangesQuantity : this.state.orangesQuantity + 1,
            total : this.state.total + this.state.orangesCost
        })
    }

    minusOranges = () => {
        console.log("Inside ShoppingCart.minusApple");
        this.setState({
            orangesQuantity : this.state.orangesQuantity - 1,
            total : this.state.total - this.state.orangesCost
        })
    }

    addGiftWrap = (e) =>{

    }

    calculateTax = () => {
       return (this.state.total !== 0) ? (this.state.total + (this.state.total * 0.08)).toFixed(2) : 0.00
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
                <input type="checkbox" onChange={this.addGiftWrap} id="giftOrange" name="giftOrange" value="giftWrapOrange"/>
                <h1>Subtotal: ${this.state.total.toFixed(2)} </h1>
                <h1>Tax: ${this.calculateTax}</h1>

            </div>
        )
    }
}
