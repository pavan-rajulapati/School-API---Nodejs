const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();
const schoolRoutes = require('./routes/school.routes');

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use('/api', schoolRoutes);

// app.use('/', (req, res) => {
//     res.send('From backend')
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
