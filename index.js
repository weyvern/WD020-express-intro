import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app
  .route('/restaurants')
  .get((req, res) => {
    const restaurants = [
      { id: 1, name: 'Tacos and Fun' },
      { id: 2, name: 'Wurst and Fun' }
    ];
    res.json(restaurants);
  })
  .post((req, res) => res.send('POST restaurant'));

app
  .route('/restaurants/:id')
  .get((req, res) => res.send('<h1>Hello there</h1>'))
  .put((req, res) => res.send('PUT restaurant'))
  .delete((req, res) => {
    // Delete logic
    res.status(500).json({ success: false, message: 'Oops' });
  });

app.get('/cities', (req, res) => res.send('here are some cities'));

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
