<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @viteReactRefresh
    @vite('resources/js/index.tsx')
    @inertiaHead
</head>
<body>
    <div id="app" data-page="{{ json_encode($page) }}"></div>
    @inertia
</body>
</html>
{{-- @if (session('Error'))
<script>
    window.sessionStorage.setItem('Error', "{{ session('Error') }}");
</script>
@endif --}}
{{-- <div id="root"></div> --}}