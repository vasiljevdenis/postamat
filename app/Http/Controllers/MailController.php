<?php
 
namespace App\Http\Controllers;
 
use Mail;
use App\Mail\MailNotify;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MailController extends Controller
{
     
  public function index($arr)
  {
    $data = [
      "subject"=>"Новое обращение!",
      "body"=>$arr
      ];
    try
    {
      $email = DB::select('select email from users where id = 1');
      Mail::to($email)->send(new MailNotify($data));
      return response()->json(['Great! Successfully send in your mail']);
    }
    catch(Exception $e)
    {
      return response()->json(['Sorry! Please try again later']);
    }
  } 
}