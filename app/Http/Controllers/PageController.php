<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function getPage($page, $lang)
    {
        $page = Page::where('page', $page)
            ->where('lang', $lang)
            ->first();
        if ($page) {
            return response()->json($page);
        }
        return response()->json(['page'=>'Default','title'=>'Default','description'=>'Default']);
    }
}
