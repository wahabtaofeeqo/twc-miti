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
        $categories = [
            [
            'name' => 'Regular',
            'amount' => 10,
            'image' => 'images/reg.jpeg',
            'is_active' => true
            ],
            [
            'name' => 'VIP',
            'amount' => 100,
            'image' => 'images/vip.jpeg',
             'is_active' => true
            ],
            [
            'name' => 'Premium',
            'amount' => 1000,
            'image' => 'images/premium.jpeg',
            'is_active' => true
            ],
            [
            'name' => 'Silver',
            'amount' => 10000,
            'image' => 'images/silver.jpeg',
            'is_active' => true
            ],
            [
            'name' => 'Gold',
            'amount' => 100000,
            'image' => 'images/gold.jpeg',
            'is_active' => true
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
