<?php

namespace App\Http\Services;

use App\Interfaces\ICard;
use App\Models\PaymentCard;

class CardService implements ICard
{
    public function createCard(array $data): PaymentCard
    {
        $card = PaymentCard::create($data);
        return $card;
    }

    public function getAllCard()
    {
        return PaymentCard::all();
    }
}
