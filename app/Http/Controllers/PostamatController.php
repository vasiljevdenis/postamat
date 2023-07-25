<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class PostamatController extends Controller
{
    function apiError($msg)
    {
        $result = array(
            "status" => false,
            "message" => $msg
        );
        return json_encode($result);
    }

    public function checkPackage(Request $request)
    {
        $courier_code = $request->input('courier_code');
        $package = DB::select('select * from packages where courier_code = ?', [$courier_code]);
        if ($package) {
            $postamat_id = $package[0]->postamat_id;
            $domofon_code = DB::select('select domofon_code from postamats where number = ?', [$postamat_id])[0]->domofon_code;
            $cell = $package[0]->cell_count;
            if (mb_strlen($cell) == 1) {
                $cell = '0' . $cell;
            }
            $result = array(
                "status" => true,
                "domofon_code" => $domofon_code,
                "postamat_id" => $postamat_id,
                "cell" => $cell
            );
            return json_encode($result);
        } else {
            return $this->apiError('Не верно введен код проверки');
        }
    }

    public function openCell(Request $request)
    {
        $postamat_id = $request->input('postamat_id');
        $cell = $request->input('cell');
        if ($postamat_id) {
            $body = array(
                [
                    "topic" => "cams/{$postamat_id}",
                    "payload" => "ON"
                ],
                [
                    "topic" => "locks/{$postamat_id}/cells/{$cell}",
                    "payload" => "open"
                ]
            );
            $token = "Lfn80gOjdvkq53MxA45TGmV8po9M1dFjRPrvIDvDyUAdJ2Xl0byVAl8T";
            $response = Http::withHeaders([
                "Authorization" => "Token {$token}",

            ])->withBody(json_encode($body))->post('https://dash.wqtt.ru/api/broker/publish');
            if ($response->ok()) {
                $result = array(
                    "status" => true,
                    "postamat_id" => $postamat_id,
                    "cell" => $cell
                );
                return json_encode($result);
            } else {
                return $this->apiError('Неизвестная ошибка!');
            }
        } else {
            return $this->apiError('Ошибка!');
        }
    }
}
