<?php

use App\Http\Controllers\Admin\CmsPageController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard/Index');
    })->name('dashboard');

    Route::resource('users', UserController::class);
    Route::resource('cms-pages', CmsPageController::class)->names([
        'index' => 'admin.cms-pages.index',
        'create' => 'admin.cms-pages.create',
        'store' => 'admin.cms-pages.store',
        'edit' => 'admin.cms-pages.edit',
        'update' => 'admin.cms-pages.update',
        'destroy' => 'admin.cms-pages.destroy',
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
