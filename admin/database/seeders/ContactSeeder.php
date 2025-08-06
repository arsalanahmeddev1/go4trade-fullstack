<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $contacts = [
            [
                'name' => 'John Doe',
                'email' => 'john.doe@example.com',
                'phone' => '+1-555-0123',
                'subject' => 'General Inquiry',
                'message' => 'Hello, I would like to know more about your trading platform. Can you provide me with some information about the features and benefits?',
                'status' => 'unread',
            ],
            [
                'name' => 'Jane Smith',
                'email' => 'jane.smith@example.com',
                'phone' => '+1-555-0456',
                'subject' => 'Technical Support',
                'message' => 'I am having trouble logging into my account. The system keeps showing an error message. Can you help me resolve this issue?',
                'status' => 'read',
            ],
            [
                'name' => 'Mike Johnson',
                'email' => 'mike.johnson@example.com',
                'phone' => '+1-555-0789',
                'subject' => 'Account Verification',
                'message' => 'I submitted my documents for account verification but haven\'t received any confirmation yet. How long does the verification process usually take?',
                'status' => 'replied',
            ],
            [
                'name' => 'Sarah Wilson',
                'email' => 'sarah.wilson@example.com',
                'phone' => '+1-555-0321',
                'subject' => 'Trading Features',
                'message' => 'I am interested in learning about the advanced trading features. Do you offer demo accounts for testing the platform?',
                'status' => 'unread',
            ],
            [
                'name' => 'David Brown',
                'email' => 'david.brown@example.com',
                'phone' => '+1-555-0654',
                'subject' => 'Withdrawal Request',
                'message' => 'I submitted a withdrawal request 3 days ago but the funds haven\'t been transferred to my bank account yet. Can you check the status?',
                'status' => 'read',
            ],
            [
                'name' => 'Emily Davis',
                'email' => 'emily.davis@example.com',
                'phone' => '+1-555-0987',
                'subject' => 'Mobile App Support',
                'message' => 'I am using the mobile app and experiencing some lag issues. Is there a way to optimize the performance or should I reinstall the app?',
                'status' => 'unread',
            ],
            [
                'name' => 'Robert Taylor',
                'email' => 'robert.taylor@example.com',
                'phone' => '+1-555-0124',
                'subject' => 'Market Data',
                'message' => 'I need real-time market data for my trading strategy. What data feeds do you provide and are there any additional costs?',
                'status' => 'replied',
            ],
            [
                'name' => 'Lisa Anderson',
                'email' => 'lisa.anderson@example.com',
                'phone' => '+1-555-0457',
                'subject' => 'Security Concerns',
                'message' => 'I am concerned about the security of my account. What measures do you have in place to protect user data and funds?',
                'status' => 'read',
            ],
        ];

        foreach ($contacts as $contact) {
            Contact::create($contact);
        }
    }
}
