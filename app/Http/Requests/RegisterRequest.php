<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use \Illuminate\Contracts\Validation\Validator;
use \Illuminate\Http\Exceptions\HttpResponseException;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
                    'firstName' => "required|regex:/^[A-Z][a-zA-Z]{1,}$/",
                    'secondName' => "required|regex:/^[A-Z][a-zA-Z]{1,}$/",
                    'username' => ['required','unique:users','string', 'min:2', 'regex:/^[A-Za-z0-9]{2,}$/'],
                    'email' => ['required', 'string', 'unique:users','regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i'], // Ensures valid email format, uniqueness, and max length.
                    'password' => 'required|string|min:8|max:100',       // Requires password confirmation.
                    'repeated_password' => 'required|same:password',       // Requires password confirmation.
                    // 'phone' => 'required|regex:/^(\+?\d{1,4}[-.\s]?)?(\d{10})$/', // Validates phone number format (e.g., 10-digit numbers, optional country code).
                    'gender' => ['required', 'in:Male,Female,Other'],             // Ensures gender matches allowed values.
                ];
            }

    public function messages(){
        return [
            'firstName.required' => "The first name field is required.",
            'firstName.regex' => "The first name field must start with an uppercase letter and contain only alphabetic characters.",
            'secondName.required' => "The second name field is required.",
            'secondName.regex' => "The second name field must start with an uppercase letter and contain only alphabetic characters.",
            'username.required' => 'The username field is required.',
            'username.min' => 'The username have at least 2 characters.',
            'username.unique' => 'This username is already been used.',
            'username.regex' => 'The username must not contain spaces.',
            'email.required' => 'The email field is required.',
            'email.email' => 'Please provide a valid email address.',
            'email.unique' => 'This email is already been used.',
            'password.required' => 'The password field is required.',
            'repeated_password.same' => 'The password confirmation does not match.',
            'password.min' => 'The password must be at least 8 characters long.',
            'phone.required' => 'The phone number is required.',
            'phone.regex' => 'Please provide a valid phone number.',
            'gender.required' => 'The gender field is required.',
            'gender.in' => 'The gender must be male, female, or other.',
        ];
    }
    /**
     * Handle a failed validation attempt.
     *
     * @param \Illuminate\Contracts\Validation\Validator $validator
     *
     * @throws \Illuminate\Http\Exceptions\HttpResponseException
     */
    protected function failedValidation(Validator $validator)
    {
        // Throw a HttpResponseException with a JSON response
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
