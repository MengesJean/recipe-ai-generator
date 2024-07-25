# Recipe-AI-Generator

## Introduction

Recipe-AI-Generator is a Next.js application where you can generate recipes based on the ingredients you provide. The generated recipes can be saved in a Firebase database. The project uses OpenAI for recipe generation and Clerk for authentication.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Features

- **AI Recipe Generator**: Generate recipes based on the ingredients you have.
- **Cook Book**: Save and manage your favorite recipes in a Firebase database.
- **Clerk Auth**: Secure user authentication with Clerk.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/recipe-ai-generator.git
   cd recipe-ai-generator
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start development server**
   ```bash
   npm run dev
   ```

## Configuration

Set up your environment variables by creating a .env.local file in the root of your project with the following keys:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key

OPENAI_API_KEY=your_openai_api_key
```
## Usage
Once the project is set up and running, you can:

- Generate Recipes: Enter ingredients and get a generated recipe using AI.
- Save Recipes: Save your generated recipes to your personal cookbook.

## Dependencies
- Next.js: The React framework for production.
- Firebase: For database and storage.
- OpenAI: For AI-powered recipe generation.
- Clerk: For user authentication.

## Examples
Here are some example usages of the Recipe-AI-Generator:

1. **Log in via Clerk if not already authenticated.**
1. **Generate a Recipe:**
- Enter ingredients in the input field.
- Click on the "Call GPT" button.
- View the AI-generated recipe.
2. **Save a Recipe:**
- After generating a recipe, click the "Save Recipe" button.
- The recipe will be saved to your cookbook.

## Troubleshooting
- Issue: Unable to generate a recipe.
    - Solution: Ensure your OpenAI API key is correctly set in the .env.local file.
- Issue: Unable to save recipes.
    - Solution: Check your Firebase configuration and make sure you are authenticated via Clerk.

## Contributores
- Menges Jean

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.