<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'created_at' => Carbon::now(),
            'name' => 'Администратор',
            'email' => 'admin@dl24',
            'password' => password_hash('admin', PASSWORD_DEFAULT),
        ]);
    }
}
