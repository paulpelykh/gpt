const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.post('/api/questions', (req, res) => {
  setTimeout(() => {
    const questionsResponse = {
      questions: [
        {
          question: 'What is the runtime environment for Node.js?',
          answer: 'JavaScript',
          option1: 'Java',
          option2: 'Ruby',
          option3: 'Python',
        },
      ],
    };
    res.json(questionsResponse);
  }, 5000); // Respond after 5 seconds
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
