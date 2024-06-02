<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitee extends Model
{
    use HasFactory;

    protected $fillable = [
        'ref', 'booker_id', 'inviter_id'];

    /**
     * Get the user that owns the Invitee
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function booker()
    {
        return $this->belongsTo(Booker::class);
    }

    public function inviter()
    {
        return $this->belongsTo(Booker::class, 'inviter_id');
    }
}
