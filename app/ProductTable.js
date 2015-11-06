
import React from 'react';

const DATA = [
    { id: 0, category: "Sports Goods", name: "Footbal", price: "10.00" },
    { id: 1, category: "Sports Goods", name: "Bascketball", price: "20.00" },
    { id: 2, category: "Sports Goods", name: "Baseball", price: "5.00" },
    { id: 3, category: "Electronics", name: "iPad", price: "600.00" },
    { id: 4, category: "Electronics", name: "Nexus 5", price: "700.00" },
    { id: 4, category: "Car", name: "Tesla", price: "700K" }
];

class CategoryListItem extends React.Component {
    render () {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td> $ {this.props.price}</td>
            </tr>
        );
    }
}

class CategoryList extends React.Component {
    render () {
        let rows = this.props.categoryItems.map(function(item){
            return (<CategoryListItem key={item.id} name={item.name} price={item.price} ></CategoryListItem>);
        });
        return (
            <tbody>
                <tr>
                    <td colSpan="2">
                        <strong>{this.props.categoryName}</strong>
                    </td>
                </tr>
                {rows}
            </tbody>
        );
    }
}

class ProductLsit extends React.Component {
    render () {
        return (
            <table>
                { 
                    this.props.products.map(item => <CategoryList key={item.id} categoryName = {item.categoryName} 
                        categoryItems = {item.categoryItems}></CategoryList> )
                }
            </table>
        );
    }
}

class SearchTable extends React.Component {

    handleInput(){
        this.props.onInputChange(this.refs.searchText.value);
    }

    render () {
        return (
            <form>
                <input type="text" ref="searchText" onChange={this.handleInput.bind(this)}/>
            </form>
        );
    }
}

class ProductTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products: DATA
        }
    }
    
    inputChange(val){
        this.setState({
            products: DATA.filter(function(item){
                return item.name.indexOf(val) > -1;
            })
        });
    }

    render () {
        let map = {}, products = [];
        this.state.products.forEach(function(data){
            if(!map[data.category]) map[data.category] = [];
            map[data.category].push(data);
        });
        products = Object.keys(map).map(function(key, index){
            return { id: "group" + (index++), categoryName: key, categoryItems: map[key] }
        });
        return (
            <div>
                <SearchTable onInputChange={this.inputChange.bind(this)}></SearchTable>
                <ProductLsit products = {products}></ProductLsit>
            </div>
        );
    }
}

export default ProductTable;



