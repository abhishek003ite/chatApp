<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Likes::class, function (Faker $faker) {
    return [
        'user_id' => function() {
            return User::all()->random();
        }
    ];
});
