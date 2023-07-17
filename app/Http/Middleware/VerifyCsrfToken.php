<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        '/feedback/send',
        '/api/images/all',
        '/api/slider/update',
        '/api/slider/delete',
        '/api/slider/new',
        '/api/page/title',
        '/api/postamats/new',
        '/api/page/image',
        '/api/page/text',
        '/login',
        '/register'
    ];
}
