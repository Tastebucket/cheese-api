# Cheese API

This api will allow the users of our react front-end application to CRUD cheeses and the molds that grow on them.

This application uses token authentication instead of sessions.

## Resources

### Cheeses

###### Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET   | `/cheeses`             | `cheeses#index`    |
| GET   | `/cheeses/:id`             | `cheeses#show`    |
| POST   | `/cheeses`             | `cheeses#create`    |
| PATCH  | `/cheeses/:id` | `cheeses#update`  |
| DELETE | `/cheeses/:id`        | `cheeses#delete`   |

### Users

###### Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

### Molds

###### Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/molds/:cheeseId`             | `molds#create`    |
| PATCH  | `/molds/:cheeseId/:moldId` | `molds#update`  |
| DELETE | `/molds/:cheeseId/:moldId`        | `molds#delete`   |