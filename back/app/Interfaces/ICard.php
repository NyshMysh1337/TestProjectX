<?php

namespace App\Interfaces;

use App\Http\Requests\Card\StoreRequest;
use App\Models\PaymentCard;

interface ICard
{
    public function createCard(array $data): PaymentCard;
    public function getAllCard();
}
