import React from 'react';

class Card extends React.Component {
  render() {
    const {
      cardID,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteButton = false,
      handlerFuncDelete = () => '',
    } = this.props;
    return (
      <section>
        <h1 data-testid="name-card">{cardName}</h1>
        <img src={cardImage} alt={cardName} data-testid="image-card"></img>
        <p data-testid="description-card">{cardDescription}</p>
        <ul>
          <li data-testid="attr1-card">{cardAttr1}</li>
          <li data-testid="attr2-card">{cardAttr2}</li>
          <li data-testid="attr3-card">{cardAttr3}</li>
        </ul>
        <span data-testid="rare-card">{cardRare}</span>
        <div>
          {
            cardTrunfo === true && (
              <span data-testid="trunfo-card">Super Trunfo</span>
            )
          }
        </div>
        {
          deleteButton === true && (
            <button
              type="button"
              name={`button-${cardID}${cardTrunfo === true ? '-Trunfo' : ''}`}
              onClick={handlerFuncDelete}
              data-testid="delete-button"
            >
              Excluir
            </button>
          )
        }
      </section>
    );
  }
}

export default Card;