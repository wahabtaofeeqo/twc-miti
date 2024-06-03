<?php

return [
    'pub' => env('PAYSTACK_PUB_KEY', ''),
    'sec' => env('PAYSTACK_SEC_KEY', ''),
    'url' => env('PAYSTACK_URL', "https://api.flutterwave.com/v3/payments"),
];