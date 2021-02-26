<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    /**
     * Аутентификация пользователя и генерация токена
     *
     * @param null $_
     * @param array<string, mixed> $args
     * @return Authenticatable|null
     */
    public function login($_, array $args): ?Authenticatable
    {
        $guard = Auth::guard('api');
        if ($args['remember']) $guard->setTTL(365 * 24 * 60);
        if (!$token = $guard->attempt(['email' => $args['email'], 'password' => $args['password']])) return null;
        $user = $guard->user();
        $user['token'] = $token;
        return $user;
    }

    /**
     * Обновление текущего токена
     *
     * @return string
     */
    public function refreshToken(): string
    {
        return Auth::refresh();
    }

    /**
     * Удаление из базы текущего токена пользователя
     *
     * @return Authenticatable|null
     */
    public function logout(): ?Authenticatable
    {
        $user = Auth::user();
        Auth::logout();
        return $user;
    }

    /**
     * Проверка email в базе
     *
     * @param null $_
     * @param array<string, mixed> $args
     * @return bool
     */
    public function checkEmail($_, array $args): bool
    {
        return is_null(User::where('email', $args['email'])->value('email'));
    }

    /**
     * Проверка токена
     *
     * @return bool
     */
    public function checkToken(): bool
    {
        return Auth::check();
    }
}
