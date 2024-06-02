<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class PagesController extends Controller
{

    public function index() {
        return Inertia::render('Index', [
            'status' => session('status'),
        ]);
    }

    public function tickets() {
        return Inertia::render('Ticket', [
            'status' => session('status'),
        ]);
    }
}
