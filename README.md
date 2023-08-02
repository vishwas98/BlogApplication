# Blog Application

This project is a Blog Application built using Next.js and OpenAI. It features a Stripe checkout integration for payments. Before deploying the project, make sure to set up the necessary environment variables.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Blog Application is a web-based platform that allows users to create and share blog posts. It is built using the Next.js framework, which provides server-side rendering and a smooth client-side experience. Additionally, OpenAI integration adds natural language processing capabilities for advanced content generation.

## Installation

To get started with the Blog Application, follow these steps:

1. Clone the repository to your local machine using the following command:
   ```
   git clone https://github.com/vishwas98/BlogApplication.git
   ```

2. Navigate to the project directory and install the dependencies using npm:
   ```
   cd blog-application
   npm install
   ```

## Configuration
The Blog Application requires environment variables for configuration. Before deploying the application, create a .env file in the root directory and add the following variables:

makefile
 ```
AUTH0_SECRET=
AUTH0_BASE_URL=
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
OPENAI_API_KEY=
MONGODB_URI=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRODUCT_PRICE_ID=
 ```
Make sure to fill in the values for each of these variables as they correspond to the required API keys and secrets for Auth0, OpenAI, Stripe, and MongoDB. These variables are essential for the proper functioning of the application.
## Deployment

Before deploying the application, ensure that you have set up the required environment variables. These variables might include API keys for OpenAI and Stripe, database connection strings, and any other sensitive information.

To deploy the application, run the following commands:

1. Build the project:
   ```
   npm run build
   ```

2. Start the development server:
   ```
   npm run dev
   ```

This will launch the Blog Application locally, and you can access it by opening your web browser and navigating to `http://localhost:3000`.

## Usage

Once the Blog Application is up and running, users can access the platform to create, read, update, and delete blog posts. Additionally, the integration with OpenAI enables advanced features, such as generating content based on user input.

Users can also interact with the Stripe checkout feature to make payments for premium content or other services offered on the platform.

## Contributing

We welcome contributions to the Blog Application project! If you find any issues or have ideas for enhancements, feel free to create a pull request or open an issue on GitHub.

## License

The Blog Application is open-source and released under the [MIT License](LICENSE.md). You are free to use, modify, and distribute the code as per the terms of the license.

For more information, please refer to the [LICENSE](LICENSE.md) file.

---

Thank you for your interest in the Blog Application. If you have any questions or need further assistance, please don't hesitate to reach out to me. Happy blogging!
