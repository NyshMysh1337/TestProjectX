<?php

namespace App\Http\Controllers;

use App\Http\Requests\Card\StoreRequest;
use App\Http\Services\CardService;
use App\Models\PaymentCard;
use Illuminate\Http\Request;

class CardController extends Controller
{

    private CardService $cardService;

    public function __construct(
        CardService $cardService
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
