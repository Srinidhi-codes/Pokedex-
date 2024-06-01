import express from 'express'
import { createPokemon, deletePokemon, getAllPokemon, getPokemonByName, updatePokemon } from '../controllers/pokemonController.js'

const router = express.Router();

router.get('/', getAllPokemon);
router.post('/', createPokemon);
router.get('/:name', getPokemonByName);
router.put('/:name', updatePokemon);
router.delete('/:name', deletePokemon);



export default router;