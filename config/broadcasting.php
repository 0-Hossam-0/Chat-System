<?php

return [
    'default' => env('BROADCAST_DRIVER', 'null'),

    'connections' => [
        'pusher' => [
            'driver' => 'pusher',
            'key' => env('1928059'),
            'secret' => env('844646c54555a2cecd6f'),
            'app_id' => env('1928059'),
            'options' => [
                'cluster' => env('eu'),
                'useTLS' => false,
            ],
        ],

        'redis' => [
            'driver' => 'redis',
            'connection' => 'default',
        ],

        'log' => [
            'driver' => 'log',
        ],

        'null' => [
            'driver' => 'null',
        ],
    ],
];