<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use App\Models\Clicks;
use Illuminate\Http\Request;

class ClicksController extends Controller
{
    public function index()
    {
        return Clicks::all();
    }
    public function add(Request $request)

    {
        $request->validate([
            'article_id' => 'required|integer',
            'number_clicks' => 'required|integer',
        ]);

        return Clicks::create($request->all());
    }

    public function increment($article_id)
    {
        $click = Clicks::where("article_id", "=", $article_id)->first();
        return $click->update([
            "article_id" => $article_id,
            "number_clicks" => $click->number_clicks + 1
        ]);
    }
    public function getNumberClicksByArticleID($article_id)
    {
        $click = Clicks::where("article_id", "=", $article_id)->first();
        return $click->number_clicks;
    }
}