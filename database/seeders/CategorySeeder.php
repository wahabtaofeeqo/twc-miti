<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $payload = [
            'name' => 'Regular',
            'amount' => 10,
            'image' => 'images/reg.jpeg'
        ];

        Category::create($payload);

        $payload = [
            'name' => 'VIP',
            'amount' => 100,
            'image' => 'images/vip.jpeg'
        ];

        Category::create($payload);

        $payload = [
            'name' => 'Premium',
            'amount' => 1000,
            'image' => 'images/premium.jpeg'
        ];

        Category::create($payload);

        $payload = [
            'name' => 'Silver',
            'amount' => 10000,
            'image' => 'images/silver.jpeg'
        ];

        Category::create($payload);

        $payload = [
            'name' => 'Gold',
            'amount' => 100000,
            'image' => 'images/gold.jpeg'
        ];

        Category::create($payload);
    }
}
