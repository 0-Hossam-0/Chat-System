<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('message_user', function (Blueprint $table) {
            // $table->foreignId('message_id')->constrained('messages', 'id')->onDelete('cascade');
            // $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');
            $table->uuid('message_id');
            $table->uuid('user_id');
            $table->boolean('seen')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
