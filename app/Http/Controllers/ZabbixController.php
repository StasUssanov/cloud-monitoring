<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;

class ZabbixController extends Controller
{

    private const BASE_URL = 'http://192.168.0.32/api_jsonrpc.php';
    private const TOKEN = '5e1d1ff8ec018aeb105143dfaf9abcae';

    public function index()
    {
        try {
            $client = new Client();
            $response = $client->request('POST', self::BASE_URL, [
                'json' => [
                    'jsonrpc' => '2.0',
                    'method' => 'item.get',
                    'id' => 1,
                    'auth' => self::TOKEN,
                    'params' => [
                        "hostids" => 10284,
                        "itemids" => [28965, 28966, 28968, 28970],
                        "output" => ["lastclock", "lastvalue", "prevvalue", "units"]
                    ],
                ]
            ]);
            $json = $response->getBody()->getContents();
            $result = json_decode($json);
            return $result->result;
        } catch (GuzzleException $e) {
            dd($e);
        }
    }
}
