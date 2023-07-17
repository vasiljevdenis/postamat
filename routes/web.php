<?php

use App\Http\Controllers\MailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

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

Route::fallback(function () {
    return redirect("/notpaid");
});

Route::get('/notpaid', function () {
    return view('notpaid');
});

// Route::get('/api/images/all', function () {
//     $files = Storage::allFiles('/public/images');
//     foreach ($files as $key => $value) {
//         $files[$key] = '/' . Str::replace('public', 'storage', $value);
//     }
//     return $files;
// });

// Route::get('/api/slider', function () {
//     $json = DB::select('select * from slider');
//     return $json;
// });

// Route::post('/api/slider/update', function (Request $request) {
//     $slider = json_decode($request->input('slider'), true);
//     foreach ($slider as $el) {
//         $priority = $el['priority'];
//         $id = $el['id'];
//         $json = DB::update('update slider set priority = :priority where id = :id', ['priority' => $priority, 'id' => $id]);
//     }
// });

// Route::post('/api/slider/delete', function (Request $request) {
//     $id = $request->input('id');
//     $json = DB::delete('delete from slider where id = :id', ['id' => $id]);
//     return $json;
// });

// Route::post('/api/slider/new', function (Request $request) {
//     $image = '';
//     $uniqid = uniqid();
//     if ($request->hasFile('image')) {
//         $path = $request->image->storeAs('/public/images/', $uniqid . '.' . $request->image->extension());
//         $image = '/storage/images/' . $uniqid . '.' . $request->image->extension();
//     } else {
//         $image = $request->input('image');
//     }
//     $target = $request->input('target');
//     $priority = $request->input('priority');
//     $link = $request->input('link');
//     $json = DB::insert('insert into slider (image, link, priority, target) values (?, ?, ?, ?)', [$image, $link, $priority, $target]);
//     return $json;
// });

// Route::get('/api/postamats', function () {
//     $json = DB::select('select * from postamats');
//     return $json;
// });

// Route::post('/api/postamats/new', function (Request $request) {
//     $image = 'https://cdn.stocksnap.io/img-thumbs/960w/cardboard-box_USP4WCYPBW.jpg';
//     $uniqid = uniqid();
//     if ($request->hasFile('image')) {
//         $path = $request->image->storeAs('/public/images/', $uniqid . '.' . $request->image->extension());
//         $image = '/storage/images/' . $uniqid . '.' . $request->image->extension();
//     }
//     $address = $request->input('address');
//     $coords = $request->input('coords');
//     $text = $request->input('text');
//     $json = DB::insert('insert into postamats (address, description, coords, image) values (?, ?, ?, ?)', [$address, $text, $coords, $image]);
//     return $json;
// });

// Route::post('/api/page/text', function (Request $request) {
//     $page = $request->input('page');
//     $text = $request->input('text');
//     $json = DB::update('update data set text = :text where page = :page', ['text' => $text, 'page' => $page]);
//     return $json;
// });
// Route::post('/api/page/title', function (Request $request) {
//     $page = $request->input('page');
//     $title = $request->input('title');
//     $json = DB::update('update data set title = :title where page = :page', ['title' => $title, 'page' => $page]);
//     return $json;
// });
// Route::post('/api/page/image', function (Request $request) {
//     // Storage::makeDirectory('/public/images/');
//     $path = $request->image->storeAs('/public/images/', $request->input('page') . '.' . $request->image->extension());
//     $page = $request->input('page');
//     $image = '/storage/images/' . $request->input('page') . '.' . $request->image->extension();
//     $json = DB::update('update data set image = :image where page = :page', ['image' => $image, 'page' => $page]);
//     return $json;
// });
// Route::get('/api/page/{page}', function ($page) {
//     $json = DB::select('select * from data where page = :page', ['page' => $page]);
//     return $json;
// });
// Route::view('/{path}', 'welcome')
//     ->where('path', '.*');

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Route::post('/feedback/send', function(Request $request) {
//     $arr = [
//         'name' => $request->input('name'),
//         'phone' => $request->input('phone'),
//         'email' => $request->input('email'),
//         'subject' => $request->input('subject'),
//         'text' => $request->input('text')
//     ];
//     $mc = new MailController();
//     return $mc->index($arr);
// });
