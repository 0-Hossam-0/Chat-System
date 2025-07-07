<?php

namespace App\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class Message
{
    use Dispatchable, SerializesModels;
    public string $body;
    public string $chatID;
    /**
     * Create a new event instance.
     */
    public function __construct($chatID, $body)
    {
        $this->body = $body;
        $this->chatID = $chatID;
    }
}
