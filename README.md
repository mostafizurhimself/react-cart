# React Cart

This is a simple shopping cart built with React and Redux.

## Getting Started

First, clone the repo:

```bash
git clone https://github.com/mostafizurhimself/react-cart.git
```

Go to the project folder and install the dependencies:

```bash
cd react-cart

yarn install

# or

npm install
```

Copy the `.env.example` file to `.env` and fill the `VITE_API_BASE_URL` variable with your `API URL`.

```bash
cp .env.example .env
```

There are build in json-server for the API. To start the API server, run:

```bash
yarn api:start

# or

npm run api:start
```

Your API server will be running on http://localhost:1337. So you can use this URL in the `.env` file.

To start the development server, run:

```bash
yarn dev

# or

npm run dev
```

Your development server will be running on http://localhost:3000.
