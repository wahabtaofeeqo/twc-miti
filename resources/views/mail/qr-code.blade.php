<x-mail::message>
# Congratulations!!!

<p>You have successfully purchased Ticket for FunFiesta</p>

<h4 style="margin-bottom: 5px">Entry Code</h4>
<div style="text-align: center; margin: 10px">
    <img style="width: 200px; margin: auto" src="{{ asset("qrcode/" . $user->code . ".png") }}" alt="QR Code">
</div>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>