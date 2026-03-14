# Express JS CSRF Token Demo
Simulates how a CRSF token flows from server to client to server again. (Inspired by Django).

## Steps:
1. Clone this repository `git clone https://github.com/khianvictorycalderon/express-js-csrf-token-demo.git`
2. run `npm install` to install dependencies.
3. `npm run server` to test the server.

## API Routes:
- `/` (GET) - Use to test if API is working correctly.
- `/api/token` (GET) - Use to retrieve valid CSRF tokens from server. (SAMPLE TOKENS ONLY).
- `/api/validate` (POST) - Use to verify data integrity along with `CSRF-KEY` header from request.

## Usage
1. Go to [Apixer](https://apixer.vercel.app/) website to test this project.
2. Fetch `http://localhost:3000/api/token` path using GET method and copy the given token.
3. Put it in header like this:
  ```json
  {
    "CSRF-KEY": "your-csrf-key"
  }
  ```
4. Now fetch to `http://localhost:3000/api/validate` path using POST method with the following JSON format for the body:
  ```json
  {
    "name": "your-sample-name"
  }
  ```
5. Enjoy! Only two outcomes per validate request, if it is a valid CSRF token, then it will output `Hello there <name>!`, if not, it will output that the CSRF Key is invalid.

---

## Dependencies & Configuration
The following is a list of installed dependencies and configuration settings used in this project.
You don’t need to install anything manually, as all dependencies are already managed through `package.json`.
This section is provided for reference only, to give you insight into how the project was set up.

---

## Dependencies
- `npm install express mongoose cors`
- `npm install --save-dev nodemon`

## Configuration Dependencies
- Update `package.json`:
  ```json
  "scripts": {
    "server": "node index.js",
  },
  ```