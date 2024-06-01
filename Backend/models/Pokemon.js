import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
    name: String,
    id: Number,
    types: [String],
    sprite: String
});

export default mongoose.model('Pokemon', PokemonSchema);
