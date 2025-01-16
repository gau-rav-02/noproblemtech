import React from 'react';
import './styles.css';

const SecurityPolicy = () => {
    return (
        <div className="policy-container">
            <h1>Security Policy</h1>
            <p>NPTECH prioritizes the security of your data. We implement robust measures to protect your information from unauthorized access, alteration, or destruction.</p>
            <h2>Security Measures</h2>
            <ul>
                <li>Encrypted data storage and transmission.</li>
                <li>Regular security audits and updates.</li>
                <li>Strict access control policies for user data.</li>
            </ul>
            <h2>Reporting Security Concerns</h2>
            <p>If you notice any security vulnerabilities or suspicious activity, please report them to our support team immediately.</p>
        </div>
    );
};

export default SecurityPolicy;