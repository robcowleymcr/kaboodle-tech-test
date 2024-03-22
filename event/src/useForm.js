import { useState } from "react";

function useForm({ additionalData }) {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const formEndpoint = "http://localhost:3000/event"

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const formEndpoint = e.target.action;
    const data = Array.from(e.target.elements)
      .filter((input) => input.name)
      .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});
    if (additionalData) {
      Object.assign(data, additionalData);
    }

    fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 201) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => {
        setMessage("Event successfully created");
        setStatus('success');
      })
      .catch((err) => {
        setMessage(err.toString());
        setStatus('error');
      });
  };

  return { handleSubmit, status, message };
}

export default useForm;