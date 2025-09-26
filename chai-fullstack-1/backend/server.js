import express from 'express';

const app = express();
const port = process.env.PORT || 3000;


/*
 * Bad practice: after build the frontend, people move it to backend. then serve it as static files.
 * and it will be served on the root path '/'
 * 
 * but any changes in frontend, will require rebuild and redeploy the backend server. Otherwise it will not work.
*/
app.use(express.static('dist'));

/* 
 * better practice is to use a dedicated server for frontend and backend separately
 * and use proxy to resolve CORS issue
 */


// app.get('/', (req, res) => {
//   res.send('Sever is ready');
// });

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
  // list of 5 jokes
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 2,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "Why don't skeletons fight each other?",
      content: "They don't have the guts.",
    },
    {
      id: 4,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
    {
      id: 5,
      title: "Why did the bicycle fall over?",
      content: "Because it was two-tired!",
    },
  ];

  res.json(jokes);
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});