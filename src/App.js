import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стілець сірий',
          img: 'chair-grey.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стіл',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Диван білий',
          img: 'sofa-white.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'sofas',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Диван чорний',
          img: 'sofa-black.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'sofas',
          price: '519.99',
        },
        {
          id: 5,
          title: 'Лампа настінна',
          img: 'wall-light.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'lights',
          price: '24.99'
        },
        {
          id: 6,
          title: 'Стілець білий',
          img: 'chair-white.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'chairs',
          price: '52.99'
        },
        {
          id: 7,
          title: 'Стілець зелений',
          img: 'chair-green.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'chairs',
          price: '64.99'
        },
        {
          id: 8,
          title: 'Диван сірий',
          img: 'sofa-grey.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'sofas',
          price: '498.99'
        },
        {
          id: 9,
          title: 'Стілець коричневий',
          img: 'chair-brown.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'chairs',
          price: '79.99'
        },

      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className="wrapper" >
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem
          onAdd={this.addToOrder}
          item={this.state.fullItem}
          onShowItem={this.onShowItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
