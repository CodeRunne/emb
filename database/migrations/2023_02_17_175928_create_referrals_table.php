<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('referrals', function (Blueprint $table) {
            $table->unsignedBigInteger('referrer_id');
            $table->unsignedBigInteger('referee_id')->nullable();
            $table->string('referral_code')->unique();
            $table->timestamps();

            $table->foreign('referrer_id')->references('id')->on('users');
            $table->foreign('referee_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('referrals');
    }
};
