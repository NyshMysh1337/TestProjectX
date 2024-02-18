import React, {FC} from 'react';
import {Card} from "../model/Card";

interface CardItemProps {
    cardList: Card
}

const CardItem: FC<CardItemProps> = ({cardList}) => {
    const lastNumber = String(cardList.card_number).slice(-4)
    const mount = cardList.expiry_date.slice(-2)
    const year = cardList.expiry_date.slice(0, 2)

    return (
        <div className="card-item">
            <div className="card-info">
                <span className="card-number">•••• {lastNumber}</span><br/>
                <span className="card-data">{year} / {mount}</span>
            </div>
        </div>
    );
};

export default CardItem;
