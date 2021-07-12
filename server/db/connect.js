const mongoose = require('mongoose');

module.exports = async () => {
  const messageId = setInterval(() => {
    console.log('Connecting to database...');
  }, 500);
  try {
    await mongoose.connect(
      'mongodb+srv://nttuan:nttuan@cluster0.4mvdb.mongodb.net/test_graphql?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 10000,
      }
    );
    clearInterval(messageId);
    console.log('Connected database successfully!');
  } catch (e) {
    clearInterval(messageId);
    console.log('Connect to database failure!');
    console.log(e.message);
  }
};
