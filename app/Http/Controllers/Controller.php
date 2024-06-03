<?php

namespace App\Http\Controllers;

abstract class Controller
{
    
    public function okResponse($message, $data, $code = 200)
    {
        return response([
            'status' => true,
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    public function errResponse($message, $code = 400, $error = null)
    {
        return response([
            'status' => false,
            'message' => $message,
            'error' => $error,
        ], $code);
    }
}
