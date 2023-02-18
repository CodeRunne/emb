<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscribe;

class SubscribeController extends Controller
{
    public function store(Request $request) {
        $request->validate([
            'email' => ['required', 'email', 'unique:subscribe']
        ]);

        Subscribe::create([
            'email' => request('email')
        ]);

        return response()->json("You've successfully subscribed to our newsletter");
    }
}
