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
    .post('/:workoutId',createNewWorkout)
    .patch('/:workoutId',updateOneWorkout)
    .delete('/:workoutId',deleteOneWorkout)

module.exports = router