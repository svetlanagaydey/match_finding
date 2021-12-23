import React from 'react';
import './style.css'
//import CurrentCard from './CurrentCard.jsx'

class Cards extends React.Component {
  state = {
    currentCard: 0,
    cards: [
      {
        id: 333,
        img: 'https://picsum.photos/200/300?random=1',
        likes: 0,
        dislikes: 0
      },
      {
        id: 332,
        img: 'https://picsum.photos/200/300?random=2',
        likes: 0,
        dislikes: 0
      },
      {
        id: 330,
        img: 'https://picsum.photos/200/300?random=3',
        likes: 0,
        dislikes: 0
      }
    ]   
  }
  addLike = () => {
    const newElement = this.state.cards.find(i => this.state.cards.indexOf(i)===this.state.currentCard);
    if(newElement) {
      newElement.likes = this.state.cards[this.state.currentCard].likes + 1;
    }
    return this.setState({defaul: [...this.state.cards]})
  };
  
  addDisLike = () => {
    const newElem = this.state.cards.find(i => this.state.cards.indexOf(i)===this.state.currentCard);
    if(newElem) {
      newElem.dislikes = this.state.cards[this.state.currentCard].dislikes + 1;
    }
    return this.setState({defaul: [...this.state.cards]})
  };

  showNextCard = () => {
    if (this.state.currentCard<this.state.cards.length-1) {
    this.setState({currentCard: this.state.currentCard + 1})
    }
  }
  showPrevCard = () => {
    if (this.state.currentCard >0) {
    this.setState({currentCard: this.state.currentCard - 1})
    }
  }
  render () {
    let showedCard = this.state.cards[this.state.currentCard]; 
    return(
      
      <div className='container'>
        <button onClick={this.showNextCard}>Next</button>

        <div className='card'>
          <img src={showedCard.img} alt=""/>
          
          <div id={showedCard.id} onClick={this.addLike}>Like</div>
          <span>LikesCount {showedCard.likes}</span>

          <div  id={showedCard.id} onClick={this.addDisLike}>DisLike</div>
          <span>DissLikesCount {showedCard.dislikes}</span>
        </div>

        <button onClick={this.showPrevCard}>Previos</button>
      </div>
    )
  }
}
export default Cards;