<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
// use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::post('/api/page/text', function (Request $request) {
    $page = $request->input('page');
    $text = $request->input('text');
    $json = DB::update('update data set text = :text where page = :page', ['text' => $text, 'page' => $page]);
    return $json;
});
Route::post('/api/page/title', function (Request $request) {
    $page = $request->input('page');
    $title = $request->input('title');
    $json = DB::update('update data set title = :title where page = :page', ['title' => $title, 'page' => $page]);
    return $json;
});
Route::post('/api/page/image', function (Request $request) {
        // Storage::makeDirectory('/public/images/');
        $path = $request->image->storeAs('/public/images/', $request->input('page').'.'.$request->image->extension());
        $page = $request->input('page');
        $image = '/storage/images/' . $request->input('page').'.'.$request->image->extension();
        $json = DB::update('update data set image = :image where page = :page', ['image' => $image, 'page' => $page]);
        return $json;
});
Route::get('/api/page/{page}', function ($page) {
    $json = DB::select('select * from data where page = :page', ['page' => $page]);
    return $json;
});
Route::view('/{path}', 'welcome')
    ->where('path', '.*');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
