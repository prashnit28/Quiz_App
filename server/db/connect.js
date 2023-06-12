const mongoose = require('mongoose');
cons


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`connection is succesfull`);
}).catch((err) => console.log(`Error connecting ${err}`));