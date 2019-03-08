## Router Lab

_Introduction_
In this lab you will write a Kitten router and a Doggo router for handling CRUD operations on those two resources

### Set up
- clone down this repo
- run `npm install`
- `createdb pets_lab_db`
- `npm run resetDb`
- `npm start`

## The Kitten

#### The Router
- create a `routes/` directory
- require `Router` with `const { Router } = require('express');`
- Define a `kittenRouter` with `Router()`
- Add an INDEX route for the Kitten, be sure to import the `Kitten` model from the models file
- export the `kitternRouter` with `module.exports . . .`
- import the kittenRouter from server.js and mount it to app under the `/kittens` path using `app.use`

Test that hitting the `/kittens` endpoint returns an empty array

### Create

- add a `CREATE` route handler for the `Kitten` resource.
- Verify that `CREATE` works with `axios`
- Also verify that the `INDEX` route returns a non-empty array after creating a few kittens

### Show
- Add a `SHOW` route handler for the `Kitten` resource.
- Verify that `SHOW` works with `axios`

## Doggo Router
- rinse and repeat for Doggos!

## DELETE
- Add a `DELETE` route handler for both the `Kitten` and `Doggo` resources
- Note how adding the same RESTful action is remarkably similar for each resource.  Appreciate this symmetry.

## Bonus
- Try adding an `UPDATE` route handler to both resources