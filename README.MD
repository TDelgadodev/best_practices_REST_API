# Crossfit WOD API

This README provides an overview of the Crossfit WOD API, its structure, and how to set it up.

## Table of Contents

- [Crossfit WOD API](#crossfit-wod-api)
  - [Table of Contents](#table-of-contents)
  - [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [API Documentation](#api-documentation)
    - [Workouts](#workouts)
      - [Get Workouts](#get-workouts)
      - [Get One Workout](#get-one-workout)
      - [Get Record for Workout](#get-record-for-workout)
      - [Create New Workout](#create-new-workout)
      - [Update One Workout](#update-one-workout)
      - [Delete One Workout](#delete-one-workout)
      - [Get Record For Workout](#get-record-for-workout-1)

## Setup

### Prerequisites

- Node.js installed

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
    ```bash
        cd <project-directory>
    ```
3. Install dependencies:
    ```bash
        npm install
    ```

## API Documentation

The API documentation is generated using Swagger and is available at [http://localhost:3000/api/v1/docs](http://localhost:3000/api/v1/docs). Explore the endpoints, parameters, and responses through the Swagger UI.

### Workouts

#### Get Workouts

- **Endpoint:** `GET /api/v1/workouts`
- **Description:** Get a list of workouts.
- **Parameters:**
  - `mode` (optional): The mode of a workout.
- **Responses:**
  - `200 OK`: Successful response with an array of workouts.
  - `5XX FAILED`: Failed response with an error message.

#### Get One Workout

- **Endpoint:** `GET /api/v1/workouts/:workoutId`
- **Description:** Get details of a specific workout.
- **Parameters:**
  - `workoutId`: ID of the workout.
- **Responses:**
  - `200 OK`: Successful response with details of the workout.
  - `5XX FAILED`: Failed response with an error message.

#### Get Record for Workout

- **Endpoint:** `GET /api/v1/workouts/:workoutId/record`
- **Description:** Get records for a specific workout.
- **Parameters:**
  - `workoutId`: ID of the workout.
- **Responses:**
  - `200 OK`: Successful response with records for the workout.
  - `5XX FAILED`: Failed response with an error message.

#### Create New Workout

- **Endpoint:** `POST /api/v1/workouts`
- **Description:** Create a new workout.
- **Request Body Example:**
  ```json
  {
    "name": "New Workout",
    "mode": "For Time",
    "equipment": ["barbell", "rope"],
    "exercises": ["Exercise 1", "Exercise 2"],
    "trainerTips": ["Tip 1", "Tip 2"]
  }
  ```
- **Responses:**
  - `200 OK`: Successful response with records for the workout.
  - `5XX FAILED`: Failed response with an error message.

#### Update One Workout

- **Endpoint**: PATCH /api/v1/workouts/:workoutId
- **Description**: Update details of a specific workout.
- **Parameters**:
    - workoutId: ID of the workout.
    - Request Body Example:
        ```json
            {
                "name": "Updated Workout",
                "mode": "AMRAP 10"
            }
        ```
- **Responses:**
  - `200 OK`: Successful response with records for the workout.
  - `5XX FAILED`: Failed response with an error message.


#### Delete One Workout

- **Endpoint**: DELETE /api/v1/workouts/:workoutId.
- **Description**: Delete a specific workout.
- **Parameters**:
    - workoutId: ID of the workout.
- **Responses:**
  - `204 OK`: Successful response indicating the deletion.
  - `5XX FAILED`: Failed response with an error message.

#### Get Record For Workout
- **Endpoint**: GET /api/v1/workouts/:workoutId/record
- **Description**: Get the record for a specific workout.
- **Parameters**:
    - workoutId: ID of the workout.
    - Responses:
        - `200 OK`: Successful response with the record for the workout.
        - `5XX FAILED`: Failed response with an error message.