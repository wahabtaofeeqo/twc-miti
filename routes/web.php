<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', 'PagesController@index');
Route::get('/reserve', 'PagesController@reserve');
Route::get('/tickets', 'PagesController@tickets');
Route::post('/bookings', 'PaymentController@init');
Route::get('/bookings/verification/{id}', 'PagesController@booked');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', 'PagesController@dashboard')->name('dashboard');
    Route::get('/dashboard/export-qr', 'PagesController@exportQr')->name('export');
    Route::post('create-user', 'PaymentController@createUser')->name('users.create');
    Route::get('/dashboard/bookers', 'PagesController@bookers')->name('dashboard.bookers');
    Route::get('/dashboard/send-qr/{id}', 'PaymentController@sendQr')->name('dashboard.sendqr');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
