<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use App\Models\Favorites;
use Illuminate\Http\Request;

class FavoritesController extends Controller
{
    //

    public function add(Request $request)
    {
        $request->validate([
            "user_id" => "required",
            "article_id" => "required",
        ]);

        return Favorites::create($request->all());
    }
    public function getByUserId($user_id)
    {
        return Favorites::where("user_id", "=", $user_id)->pluck("article_id");
    }
    public function getFavoritesArticlesByUserId($user_id)
    {
        $favorites_articles = [];
        $favorites_articles_id = Favorites::where("user_id", "=", $user_id)->pluck("article_id");

        foreach ($favorites_articles_id as $favorite_article_id) {
            array_push(
                $favorites_articles,
                Articles::where("id", "=", $favorite_article_id)->get()
            );
        }
        return $favorites_articles;
    }
}