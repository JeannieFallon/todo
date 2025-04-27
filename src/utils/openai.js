const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export async function getOrganizedTasks(userInput) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are an assistant that organizes messy brain dumps into clean, prioritized to-do task lists.' },
        { role: 'user', content: userInput }
      ],
      temperature: 0.2,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch organized tasks');
  }

  const data = await response.json();
  return data.choices[0].message.content.trim();
}
