<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function getPage($page)
    {
        $page = Page::where('page', $page)->first();
        if ($page) {
            return response()->json($page);
        }
        return response()->json(['page'=>'Default','title'=>'Default','description'=>'Default']); // Повертаємо помилку, якщо товар не знайдено
    }
}
