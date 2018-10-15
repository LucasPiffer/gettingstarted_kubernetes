const express = require('express');
const app = express();
const port = process.env.PORT || 5000

const router = express.Router();

router.route('/Name')
  .get((req, res) => {
     const name = 'Lucas';
     res.send("You should use " + name)
   })

app.use('/api', router);

app.listen(port, () => {
  console.log('Running on porta ' + port);
})
