<?php

namespace Database\Seeders;

use App\Models\CmsPage;
use Illuminate\Database\Seeder;

class CmsPageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pages = [
            [
                'title' => 'About Us',
                'slug' => 'about-us',
                'description' => '<h2>Welcome to Our Company</h2><p>We are a leading provider of innovative solutions in the industry. Our team is dedicated to delivering excellence and exceeding customer expectations.</p><h3>Our Mission</h3><p>To provide world-class services and products that make a difference in people\'s lives.</p><h3>Our Vision</h3><p>To be the most trusted and respected company in our field.</p>',
                'seo_title' => 'About Us - Learn More About Our Company',
                'meta_description' => 'Discover our company\'s mission, vision, and values. Learn about our team and what makes us unique in the industry.',
                'meta_keywords' => 'about us, company, mission, vision, team',
                'is_active' => true,
            ],
            [
                'title' => 'Privacy Policy',
                'slug' => 'privacy-policy',
                'description' => '<h2>Privacy Policy</h2><p>Last updated: '.date('F d, Y').'</p><h3>Information We Collect</h3><p>We collect information that you provide directly to us, including name, email address, and other contact details.</p><h3>How We Use Your Information</h3><p>We use the information we collect to provide, maintain, and improve our services.</p><h3>Data Security</h3><p>We implement appropriate security measures to protect your personal information.</p>',
                'seo_title' => 'Privacy Policy - How We Protect Your Data',
                'meta_description' => 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
                'meta_keywords' => 'privacy policy, data protection, security, personal information',
                'is_active' => true,
            ],
            [
                'title' => 'Terms and Conditions',
                'slug' => 'terms-and-conditions',
                'description' => '<h2>Terms and Conditions</h2><p>Please read these terms and conditions carefully before using our service.</p><h3>Acceptance of Terms</h3><p>By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.</p><h3>Use License</h3><p>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</p>',
                'seo_title' => 'Terms and Conditions - User Agreement',
                'meta_description' => 'Review our terms and conditions to understand the rules and regulations for using our services.',
                'meta_keywords' => 'terms and conditions, user agreement, terms of service',
                'is_active' => true,
            ],
            [
                'title' => 'Contact Us',
                'slug' => 'contact-us',
                'description' => '<h2>Get in Touch</h2><p>We\'d love to hear from you! Whether you have a question about our services, need support, or just want to say hello, feel free to reach out.</p><h3>Contact Information</h3><ul><li><strong>Email:</strong> info@example.com</li><li><strong>Phone:</strong> +1 (555) 123-4567</li><li><strong>Address:</strong> 123 Business Street, Suite 100, City, State 12345</li></ul><h3>Business Hours</h3><p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM<br>Sunday: Closed</p>',
                'seo_title' => 'Contact Us - Get in Touch',
                'meta_description' => 'Contact us for any questions, support, or inquiries. We\'re here to help!',
                'meta_keywords' => 'contact us, support, customer service, get in touch',
                'is_active' => true,
            ],
            [
                'title' => 'FAQ',
                'slug' => 'faq',
                'description' => '<h2>Frequently Asked Questions</h2><h3>What services do you offer?</h3><p>We offer a wide range of services tailored to meet your needs. Please visit our services page for more details.</p><h3>How can I get started?</h3><p>Getting started is easy! Simply contact us or sign up on our website.</p><h3>Do you offer customer support?</h3><p>Yes, we provide 24/7 customer support to assist you with any questions or issues.</p><h3>What are your payment options?</h3><p>We accept all major credit cards, PayPal, and bank transfers.</p>',
                'seo_title' => 'FAQ - Frequently Asked Questions',
                'meta_description' => 'Find answers to commonly asked questions about our services, pricing, and support.',
                'meta_keywords' => 'faq, questions, answers, help, support',
                'is_active' => true,
            ],
        ];

        foreach ($pages as $page) {
            CmsPage::create($page);
        }
    }
}
