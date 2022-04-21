# doc
1. Creates a JSON object with the name, description and public properties set to false.
2. Creates a request header with the access token as the Authorization header.
3. Creates a request header with the content type set to application/json.
4. Creates a request body with the JSON object.
5. Makes a POST request to the user's playlist endpoint and passes the playlist ID and the request body.
6. Returns the data in the response.