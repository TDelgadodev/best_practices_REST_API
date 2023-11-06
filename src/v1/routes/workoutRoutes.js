const express = require('express');
const {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    deleteOneWorkout,
    updateOneWorkout
} = require('../../controllers/workoutController')
const router = express.Router();

router
    .get('/',getAllWorkouts)
    .get('/:workoutId',getOneWorkout)
    .post('/',createNewWorkout)
    .put('/:workoutId',updateOneWorkout)
    .delete('/:workoutId',deleteOneWorkout)

module.exports = router