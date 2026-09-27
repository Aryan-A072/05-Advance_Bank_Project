# backend-ledger

A lightweight Node.js + Express backend for managing users, accounts, and ledger-style transactions with MongoDB. The service supports user authentication, account creation, balance checks, and transaction processing with idempotency and ledger entries.

## Features

- User registration, login, and logout
- JWT-based authentication
- Cookie-based token handling
- Account creation and retrieval
- Per-account balance calculation from ledger entries
- Transaction processing with MongoDB sessions
- Idempotency key support for safe retries
- Initial funds transaction support
- Email notifications for registration and transaction events

## Tech Stack

- Node.js
- Express
- MongoDB with Mongoose
- JWT
- bcryptjs
- cookie-parser
- nodemailer
- dotenv

## Project Structure

```text
backend-ledger/
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── src/
    ├── app.js
    ├── config/
    │   └── db.js
    ├── controllers/
    │   ├── account.controller.js
    │   ├── auth.controller.js
    │   └── transaction.controller.js
    ├── middleware/
    │   └── auth.middleware.js
    ├── models/
    │   ├── account.model.js
    │   ├── blackList.model.js
    │   ├── ledger.model.js
    │   ├── transaction.model.js
    │   └── user.model.js
    ├── routes/
    │   ├── account.routes.js
    │   ├── auth.routes.js
    │   └── transaction.routes.js
    └── services/
        └── email.service.js
