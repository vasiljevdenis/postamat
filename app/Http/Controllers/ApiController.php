<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    public function getPostamats(Request $request)
    {
        $postamats = DB::select('select * from postamats');
        $result = [];
        for ($i = 0; $i < count($postamats); $i++) {
            $el = $postamats[$i];
            $obj = array(
                "id" => $el->number,
                "address" => $el->address,
                "coords" => json_decode($el->coords),
                "schedule" => array(
                    "from" => $el->schedule_from,
                    "to" => $el->schedule_to
                ),
                "cell_count" => $el->count,
                "cell_category" => $el->cell_category,
                "cell_properties" => array(
                    "width" => $el->width,
                    "height" => $el->height,
                    "depth" => $el->depth,
                    "weight" => $el->weight
                ),
                "rent_price" => $el->rent_price
            );
            array_push($result, $obj);
        }
        return dd($result);
    }

    public function newPackage(Request $request)
    {
        function apiError()
        {
            $result = array(
                "status" => false,
                "message" => "API error"
            );
            return dd($result);
        }

        $number = $request->postamat_id;
        if (DB::select('select * from postamats where number = ?', [$number])) {
            $count = $request->cell_count;
            $width = $request->width;
            $height = $request->height;
            $depth = $request->depth;
            $weight = $request->weight;
            $courier_code = rand(100000, 999999);
            $db = DB::insert(
                "insert into packages (postamat_id, cell_count, width, height, depth, weight, status, courier_code) values (:number, :count, :width, :height, :depth, :weight, :status, :courier_code)",
                [
                    'number' => $number,
                    'count' => $count,
                    'width' => $width,
                    'height' => $height,
                    'depth' => $depth,
                    'weight' => $weight,
                    'status' => 50,
                    'courier_code' => $courier_code
                ]
            );
            if ($db) {
                $result = array(
                    "status" => true,
                    "package_id" => DB::getPdo()->lastInsertId(),
                    "courier_code" => $courier_code
                );
                return dd($result);
            } else {
                return apiError();
            }
        } else {
            return apiError();
        }
    }
}
