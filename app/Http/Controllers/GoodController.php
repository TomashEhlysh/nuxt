<?php

namespace App\Http\Controllers;

use App\Models\Good;
use Illuminate\Http\Request;

class GoodController extends Controller
{
    // Отримати всі товари
    public function getAllGoods()
    {
        $goods = Good::all(); // Отримуємо всі товари з бази даних
        return response()->json($goods);
    }

    // Отримати товар по ID
    public function getGoodById($id)
    {
        $good = Good::find($id); // Шукаємо товар за ID
        if ($good) {
            return response()->json($good);
        }
        return response()->json(['message' => 'Товар не знайдено'], 404); // Повертаємо помилку, якщо товар не знайдено
    }

    // Додати товар
    public function addGood(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255', // Перевіряємо, чи є поле 'name' і чи є воно рядком
            'price' => 'required|integer',
        ]);

        $good = Good::create([
            'name' => $request->name, // Додаємо товар у базу даних
            'price' => $request->price,
        ]);

        return response()->json($good, 201); // Повертаємо доданий товар з кодом 201 (Created)
    }

    // Видалити товар
    public function deleteGood($id)
    {
        $good = Good::find($id);

        if ($good) {
            $good->delete(); // Видаляємо товар з бази даних
            return response()->json(['message' => 'Товар видалено успішно']);
        }

        return response()->json(['message' => 'Товар не знайдено'], 404); // Якщо товар не знайдено
    }
}
