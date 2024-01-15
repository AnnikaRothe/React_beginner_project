import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';



class App extends Component {
    state = {  
        items: []
    } 

    addItem = (amount, name, price) =>{
        let currentItems = this.state.items;
   
        let existingItem = this.state.items.find(item => item.name ==name);
        if(existingItem) {
            existingItem.amount++;
        } else {
        currentItems.push( {
            amount, 
            name, 
            price
        });
    }
        this.setState({items: currentItems });
        console.table(this.state);
      
    }

    render() { 
        return <React.Fragment>
            <Navbar/>
            <div className='main-container'>
            <div className='product-container'>
                <Product onAdd={() =>this.addItem(1, 'Tomato', 2.99)} image="tomato.jpg" title="Tomato" description="please buy me" />
                <Product onAdd={() =>this.addItem(1, 'Broccoli', 3.99)} image="broccoli.jpg" title="Broccoli" description="I am healthy af"/>
                <Product onAdd={() =>this.addItem(1, 'Pumpkin', 4.99)} image="pumpkin.jpg" title="Pumpkin" description="spooky and delicious"/>
                <Product onAdd={() =>this.addItem(1, 'Cucumber', 1.99)} image="cucumber.jpg" title="Cucumber" description="eat me..please?"/>
            </div>
            </div>
            <ShoppingCart items={this.state.items}/>
        </React.Fragment>;
    }
}
 
export default App;