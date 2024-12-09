<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Table;

class TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Table::query()->delete();

        // Gold
        for ($i=0; $i < 28; $i++) { 
            Table::create([
                'label' => $i + 1,
                'type' => 'Gold'
            ]);
        }

        // Silver
        for ($i=0; $i < 18; $i++) { 
            Table::create([
                'label' => $i + 1,
                'type' => 'Silver'
            ]);
        }

        // Platinum
        for ($i=0; $i < 20; $i++) { 
            Table::create([
                'label' => $i + 1,
                'type' => 'Platinum'
            ]);
        }

        // Premium
        for ($i=0; $i < 30; $i++) { 
            Table::create([
                'label' => $i + 1,
                'type' => 'Premium'
            ]);
        }
    }
}
