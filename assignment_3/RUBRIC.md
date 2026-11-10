# Detailed Rubric

## Registration and Login Flows (4 marks)

| Level | Description |
|------|-------------|
| **Excellent (4)** | Registration and login flows are complete, validated, and provide clear feedback for success and failure. |
| **Good (3)** | Registration and login work with only minor issues. |
| **Satisfactory (2)** | Basic auth flow works, but feedback or validation is inconsistent. |
| **Needs Work (1)** | Auth flow is only partially implemented. |
| **Poor / Incomplete (0)** | Registration and login are missing or non-functional. |

## Auth State and Session Persistence (3 marks)

| Level | Description |
|------|-------------|
| **Excellent (3)** | Authenticated state is managed correctly, including login, logout, and token handling. Session persistence, if implemented, works correctly. |
| **Good (2.5)** | Authenticated state is mostly managed correctly with only minor issues. |
| **Satisfactory (2)** | Auth state works at a basic level but is inconsistent. |
| **Needs Work (1)** | Auth state is only partially implemented or behaves unreliably. |
| **Poor / Incomplete (0)** | Authenticated state is missing or does not function correctly. |

## Protected Gig Record API Integration (4 marks)

| Level | Description |
|------|-------------|
| **Excellent (4)** | Protected requests are sent correctly with bearer authentication. Protected gig records are fetched, and new records are created successfully through the backend. |
| **Good (3)** | Protected GET and POST work with only minor issues. |
| **Satisfactory (2)** | Fetching or creation works, but not both consistently. |
| **Needs Work (1)** | Protected API integration is only partially implemented. |
| **Poor / Incomplete (0)** | Protected requests are missing, broken, or do not use authentication correctly. |

## Shared Gig Record State Management (3 marks)

| Level | Description |
|------|-------------|
| **Excellent (3)** | Shared application state is used to manage gig records across protected screens. After creating a new record, the UI updates without requiring an immediate re-fetch. |
| **Good (2.5)** | Shared state is used appropriately with only minor issues. |
| **Satisfactory (2)** | Shared state is present but inconsistently applied. |
| **Needs Work (1)** | State management is weak, fragmented, or only partially shared. |
| **Poor / Incomplete (0)** | Shared gig record state is missing or not used meaningfully. |

## Protected Navigation and User Access (1 mark)

| Level | Description |
|------|-------------|
| **Excellent (1)** | Unauthenticated and authenticated flows are separated correctly. Protected screens are not directly accessible without login, and logout returns the user to the auth flow. |
| **Good (0.75)** | Navigation and access control work with only minor issues. |
| **Satisfactory (0.5)** | Basic separation exists, but protected access or logout behaviour is inconsistent. |
| **Needs Work (0.25)** | Access control is weak or unreliable. |
| **Poor / Incomplete (0)** | Protected and unauthenticated flows are not separated correctly. |

## Project Structure and Component Use (1 mark)

| Level | Description |
|------|-------------|
| **Excellent (1)** | Project structure is clear and logical with appropriate separation of screens, shared state, and reusable components. |
| **Good (0.75)** | Project structure is mostly clear with only minor issues. |
| **Satisfactory (0.5)** | Code functions but organization could be improved. |
| **Needs Work (0.25)** | Project structure is confusing or poorly organized. |
| **Poor / Incomplete (0)** | Project structure is unclear or incomplete. |

## Reflection (4 marks)

| Level | Description |
|------|-------------|
| **Excellent (4)** | Reflection clearly answers all prompts with references to files, components, or implementation decisions. Demonstrates strong understanding of authentication, state management, and protected API access. |
| **Good (3)** | Reflection addresses most prompts clearly and demonstrates good understanding. |
| **Satisfactory (2)** | Reflection answers prompts but remains brief or general. |
| **Needs Work (1)** | Reflection responses are incomplete or show minimal understanding. |
| **Poor / Incomplete (0)** | Reflection is missing or does not address the required prompts. |
