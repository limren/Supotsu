<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use App\Models\Clicks;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{

    public function index()
    {
        return Articles::all();
    }

    public function add(Request $request)
    {
        // $table->string("title");
        // $table->string("content");
        // $table->string("path");
        // $table->string("category");
        $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'path' => 'required|string',
            'category' => 'required|string'
        ]);

        $article = Articles::create([
            'title' => $request->title,
            'content' => $request->content,
            'path' => $request->path,
            'category' => $request->category
        ]);
        Clicks::create([
            "article_id" => $article->id,
            "number_clicks" => 0
        ]);
        return $article;
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'path' => 'required|string',
            'category' => 'required|string'
        ]);
        $article = Articles::find($id);
        return $article->update($request->all());
    }
    public function delete(Request $request, $id)
    {
        $article = Articles::find($id);
        return $article->delete();
    }
}