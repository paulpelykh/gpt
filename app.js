const express = require('express');
const app = express();
const port = 5000; // You can use any port you prefer

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
        {
          question:
            'Which library in Node.js is used for building web servers?',
          answer: 'Express',
          option1: 'Vue',
          option2: 'Angular',
          option3: 'React',
        },
      ],
    };
    res.json(questionsResponse);
  }, 20000); // Respond after 20 seconds
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
