// components/NewsletterForm.js
import { useState } from 'react';

export function NewsletterForm () {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setMessage(error.response?.data?.message || 'An error occurred while subscribing');
    }
  };

  return (
    <div>
      <h1 className="mt-5 text-[40px] font-semibold">
        Subscribe to our<span className="text-blue-400"> Newsletter!!!</span>
      </h1>
      <form onSubmit={handleSubmit} className="mt-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        style={{ width: '300px' }}
        className="mr-2 rounded-lg border px-4 py-2"
      />
        <button type="submit" className="rounded-lg bg-blue-400 px-4 py-2">
          Subscribe
        </button>
      </form>
      {message && <p className="mt-3 text-green-500">{message}</p>}
    </div>
  );
};