<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chat_user', function (Blueprint $table) {
            // $table->foreignId('chat_id')->constrained('chat', 'id')->onDelete('cascade');
            // $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');
            $table->uuid('chat_id');
            $table->uuid('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chat_user');

    }
};
