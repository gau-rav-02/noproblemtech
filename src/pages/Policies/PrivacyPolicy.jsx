import React from 'react';
import './styles.css';

const PrivacyPolicy = () => {
    return (
        <div className="policy-container">
            <h1>Privacy Policy</h1>
            <p>At NPTECH, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services.</p>
            <h2>Information We Collect</h2>
            <ul>
                <li>Personal details such as name, email, and contact information for account creation.</li>
                <li>Usage data to improve our services and enhance user experience.</li>
            </ul>
            <h2>How We Use Your Information</h2>
            <ul>
                <li>To provide and maintain our services.</li>
                <li>To communicate updates and respond to queries.</li>
                <li>To ensure data security and prevent fraud.</li>
            </ul>
            <h2>Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information. Contact us for any privacy-related concerns.</p>
        </div>
    );
};

export default PrivacyPolicy;