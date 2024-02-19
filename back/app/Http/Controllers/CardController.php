<?php

namespace App\Http\Controllers;

use App\Http\Requests\Card\StoreRequest;
use App\Interfaces\ICard;

class CardController extends Controller
{

    private ICard $cardService;

    public function __construct(
        ICard $cardService
    ) {
        $this->cardService = $cardService;
    }


    public function index()
    {
        $cards = $this->cardService->getAllCard();

        return response()->json($cards, 200);
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        $card = $this->cardService->createCard($data);

        return response()->json($card, 201);
    }
}
