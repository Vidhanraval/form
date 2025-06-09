"use client"

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false,
  });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const target = e.target as HTMLInputElement;
  const { name, value, type, checked } = target;
  setFormData(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value,
  }));
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Email Address *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Query Type *</label>
        <div className="flex gap-4 mt-1">
          <label className="flex items-center border px-4 py-2 rounded cursor-pointer">
            <input
              type="radio"
              name="queryType"
              value="General Enquiry"
              checked={formData.queryType === 'General Enquiry'}
              onChange={handleChange}
              required
              className="mr-2"
            />
            General Enquiry
          </label>
          <label className="flex items-center border px-4 py-2 rounded cursor-pointer">
            <input
              type="radio"
              name="queryType"
              value="Support Request"
              checked={formData.queryType === 'Support Request'}
              onChange={handleChange}
              required
              className="mr-2"
            />
            Support Request
          </label>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full border px-3 py-2 rounded"
        ></textarea>
      </div>

      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mr-2"
        />
        <label className="text-sm">I consent to being contacted by the team *</label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-emerald-700 text-white py-2 rounded hover:bg-emerald-800 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
