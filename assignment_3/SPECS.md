# Assignment 3: User Authentication and Web Service Integration

## Overview

This assignment extends the gig-work app from Assignment 2.

Students add:
- registration
- login
- optional session persistence
- protected API access using JWT bearer tokens
- shared state for protected gig records

## Scope and Boundaries

This assignment assesses:
- Module 4: State Management Patterns and Feature Extension
- Module 5: Authentication and Secure Web Services

Out of scope:
- social login
- forgot-password flows
- refresh tokens
- hardware features
- role-based authorization

## Learning Outcomes Assessed

- CO2: Write and evaluate mobile application code
- CO3: Integrate advanced features such as state management, authentication, and web services into mobile applications

## Using the Backend

Assignment 3 uses the backend's authenticated API.

Students should:
- run the backend project locally
- register or log in with the backend
- send bearer-authenticated requests to `/entries`
- use protected `GET /entries` and `POST /entries` in the app

Students should no longer use `GET /sample-entries` for assignment requirements once authentication is introduced.

## Existing Application Requirements

The app must continue to support the previous assignment work where appropriate, including:
- dashboard or home flow
- gig entry
- gig list
- gig metrics
- navigation between app screens

## What You Will Build

Students extend the app so users can:

1. register a new account
2. log in with an existing account
3. optionally restore a prior session
4. fetch protected gig records from the backend
5. create a new protected gig record
6. log out and return to the auth flow

## Minimum Required Implementation

At minimum, the app must demonstrate:
- registration, login, and logout
- one protected request sent using `Authorization: Bearer <token>`
- protected `GET /entries`
- protected `POST /entries`
- shared state used to render fetched records
- local shared state updated after create without requiring an immediate re-fetch

## Backend Overview

For the complete local-backend contract and startup instructions, read [../BACKEND.md](../BACKEND.md) and [backend/README.md](../backend/README.md). The backend supports:

For pre-auth read-only work in Assignment 2, the backend also exposes:
- `GET /sample-entries`

Assignment 3 should no longer use that route. From this point forward, students should use the authenticated collection below.

### Public authentication
- `POST /auth/register`
- `POST /auth/login`

### Protected authentication
- `GET /auth/me`

### Protected gig records
- `GET /entries`
- `POST /entries`

Protected requests must send:

```http
Authorization: Bearer <token>
```

## Networking Notes

When connecting to the local backend from React Native or Expo:

- **Android emulator:** use `http://10.0.2.2:<port>`.
- **iOS simulator:** `http://localhost:<port>` usually works.
- **Physical device:** use the computer's LAN IP, such as `http://192.168.x.x:<port>`.

Start the backend before testing registration, login, or protected requests. Android development builds may also need cleartext HTTP traffic enabled.

## Functional Requirements

### 1. Registration Flow

Students must implement a registration screen or route where users can:
- enter a name
- enter an email address
- enter a password
- submit the form

The app must validate required fields, show feedback, and call `POST /auth/register`.

### 2. Login Flow

Students must implement a login screen or route where users can:
- enter an email address
- enter a password
- submit the form

The app must validate input, show feedback, and call `POST /auth/login`.

### 3. Session Persistence

Session persistence is recommended but not required for the minimum assignment requirements.

If implemented, the app should:
- store the access token
- attempt to restore the session on app launch
- optionally validate the restored session using `GET /auth/me`

### 4. Authenticated State Management

Students must implement shared authenticated state that tracks:
- whether the user is authenticated
- the current authenticated user
- the current access token

If session persistence is implemented, the shared authenticated state should also track whether a session is being restored.

### 5. Protected Gig Record API Access

Authenticated users must be able to:
- fetch protected gig records using `GET /entries`
- create a new gig record using `POST /entries`
- render fetched and newly created records in the app
- handle `401 Unauthorized` gracefully

### 6. Shared Gig Record State

The app must move beyond isolated screen-level fetches and use shared state for protected gig records.

At minimum:
- Gig Entry submits to protected `POST /entries`
- successful creation updates shared state
- Gig List or Gig Metrics reflects the update without an immediate re-fetch

### 7. Protected App Access and Logout

The app must distinguish between authenticated and unauthenticated users.

At minimum:
- unauthenticated users are kept out of the protected app area
- authenticated users can access the protected app area
- logout clears session state
- logout returns the user to the auth flow

## Data and Response Expectations

### Registration Request

```json
{
  "name": "Student Name",
  "email": "student@example.com",
  "password": "Password123!"
}
```

### Login Request

```json
{
  "email": "student@example.com",
  "password": "Password123!"
}
```

### Example Auth Response

```json
{
  "message": "Login successful",
  "token": "<jwt-token>",
  "user": {
    "id": "user_seed_001",
    "name": "Student Name",
    "email": "student@example.com"
  }
}
```

### Example Protected Gig Record Response

```json
{
  "records": [
    {
      "id": 1,
      "userId": "user_seed_001",
      "date": "2026-02-10",
      "title": "Downtown lunch delivery",
      "category": "Food Delivery",
      "value": 24.5,
      "rating": 4
    }
  ]
}
```

## State Management Expectations

Use the shared-state approach demonstrated in class. The authenticated state must support registration, login, logout, protected API access, fetching and creating gig records, and reuse of records across authenticated screens. Session restoration is an optional extension.

## Implementation Expectations

The app will be evaluated by running it and confirming that users can register, log in, log out, fetch and create protected gig records with a bearer token, see shared state update after creation, and receive basic feedback for invalid sessions. Earlier screens must remain functional where appropriate.

## Technical Constraints

- Continue using **React Native with Expo** and the application from Assignments 1 and 2.
- Use the provided local backend for authentication and protected record access.
- Use only tools and techniques demonstrated or approved in class.
- Do not add social login, refresh tokens, role-based authorization, device hardware features, edit/delete requirements, or third-party state libraries unless approved.

## Validation and Self-Checking

Before submitting, confirm that:

- registration, login, and logout work
- unauthenticated users cannot access protected app areas
- protected `GET /entries` and `POST /entries` requests include a bearer token
- fetched and newly created records render from shared state
- a `401 Unauthorized` response is handled gracefully
- existing navigation and app features remain functional
- no runtime errors occur during normal use

## Evaluation Criteria

> Submissions must build and run in order to be graded. A submission that does not build or run may receive a grade of zero.

Evaluation is based primarily on observable runtime behaviour. Demonstrate incremental development through regular, meaningful commits, document external resources, and be prepared to explain your code.

| Category | Marks | Description |
|---|---:|---|
| Registration and Login Flows | 4 | Registration and login validate input and provide clear feedback for success and failure. |
| Auth State and Session Persistence | 3 | Authenticated state, token handling, and logout work. Session persistence is assessed only if implemented. |
| Protected API Integration | 4 | Bearer-authenticated `GET /entries` and `POST /entries` work. |
| Shared State and Record Updates | 3 | Records are shared and update after creation without an immediate re-fetch. |
| Protected Navigation and User Access | 1 | Protected screens are unavailable before login, and logout returns the user to the auth flow. |
| Code Organization | 1 | Auth, API, and shared-state code are logically separated. |
| Reflection | 4 | Written reflection demonstrates understanding. |

**Total: 20 marks**

## Tips for Success

- Confirm the backend is running before debugging the app.
- Implement and test registration and login before adding session persistence.
- Centralize token attachment for protected requests.
- Test logout and `401` handling deliberately.
- Commit each meaningful milestone.

## Submission Checklist

Before submitting, confirm that:

- the app runs without errors
- authentication and navigation work correctly
- commits show incremental progress
- the reflection is complete

