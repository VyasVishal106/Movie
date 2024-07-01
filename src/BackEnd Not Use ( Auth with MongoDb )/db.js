import mongoose from "mongoose";
// Removed import of 'string' from 'zod'

mongoose.connect('mongodb://127.0.0.1:27017/MoviesNew', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // createIndexes: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

const newSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String, // Corrected type definition
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String, // Corrected type definition
        required: true
    },
    password: {
        type: mongoose.Schema.Types.String, // Corrected type definition
        required: true
    }
});

const Collection = mongoose.model("Collection", newSchema);

export default Collection;
