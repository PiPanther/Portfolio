import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:ashish301201@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <footer className='p-6 bg-gray-800 text-white'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
        <input
          type='text'
          placeholder='Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='p-3 rounded-md border border-gray-700 bg-gray-900 text-white'
          required
        />
        <input
          type='email'
          placeholder='Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='p-3 rounded-md border border-gray-700 bg-gray-900 text-white'
          required
        />
        <textarea
          placeholder='Your Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='p-3 rounded-md border border-gray-700 bg-gray-900 text-white'
          rows='5'
          required
        />
        <button
          type='submit'
          className='inline-flex items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 h-12 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
        >
          Send Email
        </button>
      </form>
    </footer>
  );
};

export default ContactForm;
