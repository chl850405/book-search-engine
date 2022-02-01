const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://chl850405:L3tsc0de@cluster0.gbemj.mongodb.net/b00ks34rch?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
