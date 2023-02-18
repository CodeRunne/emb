<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\{StorePostRequest, UpdatePostRequest};
use App\Http\Resources\{PostResource, PostCollection};

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new PostCollection(Post::latest()->paginate(4));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePostRequest $request)
    {
        $validate = $request->validated();

        Post::create([
            'user_id' => Auth::id(),
            'title' => $validate['title'],
            'body' => $validate['body'],
            'published_at' => $validate['published_at']
        ]);

        return response()->json('Post have been successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $post->update($request->validated());
        return response()->json('Post has been successfully updated');
    }

    public function search($post) {
        return Post::where('title', 'like', "%{$post}%")->paginate(4);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json('Post deleted successfully');
    }
}
