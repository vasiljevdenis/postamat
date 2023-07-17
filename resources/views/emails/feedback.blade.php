<!DOCTYPE html>
<html>
<head>
    <title>Новое обращение!</title>
</head>
<body>
    <div style="text-align: center; padding: 5px 1px;">
        <h1 style="text-align: center;">Новое обращение!</h1>
    </div>
    <br>
    <div style="text-align: center; padding: 5px 1px;">
        <h2 style="text-align: center;">{{ $subject }}</h2>
    </div>
    <br>
    <p><span style="font-weight: 600;">Имя:</span>&nbsp;<span>{{ $name }}</span></p>
    <p><span style="font-weight: 600;">Телефон:</span>&nbsp;<span>{{ $phone }}</span></p>
    @if (mb_strlen($email) > 0)
        <p><span style="font-weight: 600;">Email:</span>&nbsp;<span>{{ $email }}</span></p>
    @endif
    @if (mb_strlen($text) > 0)
        <p>{{ $text }}</p>
    @endif
</body>
</html>