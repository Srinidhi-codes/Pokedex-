import Pokemon from "../models/Pokemon.js";

export const getAllPokemon = async (req, res) => {
    try {
        const allPokemon = await Pokemon.find();
        res.json(allPokemon);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createPokemon = async (req, res) => {
    const { name, id, types, sprite } = req.body;
    try {
        const newPokemon = await Pokemon.create({ name, id, types, sprite });
        res.status(201).json(newPokemon);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getPokemonByName = async (req, res) => {
    const { name } = req.params;
    const namesArray = name.split(",");
    try {
        const pokemon = await Pokemon.find({ name: { $in: namesArray } });
        res.status(200).send({
            success: true,
            message: "Fetched Data",
            pokemon
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updatePokemon = async (req, res) => {
    const { name } = req.params;
    const { id, types, sprite } = req.body;
    try {
        const updatedPokemon = await Pokemon.findOneAndUpdate(
            { name },
            { id, types, sprite },
            { new: true }
        );
        res.json(updatedPokemon);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deletePokemon = async (req, res) => {
    const { name } = req.params;
    try {
        await Pokemon.findOneAndDelete({ name });
        res.json({ message: 'Pokemon deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
