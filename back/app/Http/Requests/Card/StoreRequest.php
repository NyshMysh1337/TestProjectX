<?php

namespace App\Http\Requests\Card;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'card_number' => 'required|digits:16|unique:cards',
            'expiry_date' => 'required|digits:4',
            'cvv' => 'required|digits:3',
        ];
    }
}
