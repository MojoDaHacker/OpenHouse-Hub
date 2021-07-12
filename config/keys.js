if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

exports.module = {
  MatthewMcKenzie_dbPass: process.env.MatthewMcKenzie_dbPass
}