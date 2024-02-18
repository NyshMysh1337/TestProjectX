import CardItem from "./CardItem";
import React, {FC} from "react";
import {Card} from "../model/Card";

interface CardListProps {
    cardList: Card[]
}

const CardList: FC<CardListProps> = ({cardList}) => {
    return (
        <>
            {
                cardList.map(el => {
                    return <CardItem key={el.id} cardList={el}/>
                })
            }
        </>
    );
};

export default CardList;
