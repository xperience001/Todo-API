# Todo API

## Simple Todo API using Node + Express + Typescript + PostgreSQL

## How to Run the Code

1. Clone the Repository:

```
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install Dependencies:

```
npm install
```

3. Configure the PostgreSQL Database:

   Ensure you have a PostgreSQL server running.
   Create a new PostgreSQL database for the project.
   Update the config.js file with your PostgreSQL connection details.

4. Run Database Migrations:

```
npm run migrate
```

5. Run the Application:

```
npm start
```

The server will be running at http://localhost:3000.

# Extending to Support User Management

To extend the project to support a user management system with PostgreSQL:

1. User Registration:

Implement an endpoint for user registration, storing user details securely in the PostgreSQL database.

2. User Authentication:

Add authentication middleware to secure the existing endpoints.
Implement a login endpoint that generates and returns a JWT (JSON Web Token) upon successful authentication.

3. Todo Ownership:

Modify the existing Todo model to include a reference to the user who created it.
Update the endpoints to filter and return only the todos associated with the authenticated user.

4. User-Specific Endpoints:

Create new endpoints for managing user-specific information, such as profile details or preferences.

## Example API Endpoints:

Register a User:

```
POST /api/register
{
  "username": "user123",
  "password": "securepassword"
}
```

User Login:

```
POST /api/login
{
  "username": "user123",
  "password": "securepassword"
}
```

Get User's Todos:

```
GET /api/todos
```

Create a Todo for the User:

```
POST /api/todos
{
  "title": "New Todo",
  "description": "This is a new task."
}
```
