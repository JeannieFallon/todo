import { useState } from 'react';
import { getOrganizedTasks } from './utils/openai';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOutput('');

    try {
      const organizedTasks = await getOrganizedTasks(input);
      setOutput(organizedTasks);
    } catch (error) {
      console.error(error);
      setOutput('Sorry, something went wrong with generating your TODO list.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h1>TODO List Generator</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Brain dump your tasks here..."
          rows="8"
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}
        >
          {loading ? 'Generating...' : 'Generate TODO List'}
        </button>
      </form>

      {output && (
        <div style={{ marginTop: '30px', whiteSpace: 'pre-wrap', background: '#f4f4f4', padding: '20px' }}>
          <h2>TODO List:</h2>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}

export default App;
