
# URL Shortner 

A Node Based API that can be use to  Shorten any URL


## API Reference

#### Generate short id/link

```http
  POST /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `string` | **Required**. A valid URL

#### Redirect to Original URL

```http
  GET /:shortId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `shortid`      | `string` | **Required**. short id/link

#### Get Number of clicks and Timestamps
```http
  GET /getClicks/:shortId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `shortid`      | `string` | **Required**. short id/link


## Features

- Generate shorter url
- Get number of clicks/analytics


## Run Locally

Clone the project

```bash
  git clone https://github.com/souravghosh01/url-shortner.git
```

Go to the project directory

```bash
  cd url-shortner
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

