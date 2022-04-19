# doc
1. We first have a useEffect hook which will check if the window.location.hash has an access_token.
2. If the access_token is there, then we will use the fetch api to get the user profile.
3. Then we will dispatch the action to the reducer.
4. Then we will redirect the user to the /create-playlist route. 