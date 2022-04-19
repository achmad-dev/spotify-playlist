# doc
1. We are using the useState hook to create a state variable called tracks and setTracks() to change the state variable.
2. We are creating the onSuccessSearch() function which will be called when the search is successful.
3. The onSuccessSearch() function will take the tracks as an argument and then call the filterSelectedTracks() function.
4. The filterSelectedTracks() function will filter out all the tracks that have been selected.
5. The setSelected() function will set the selected state variable to the array of selected tracks.
6. We are using the toggleSelect() function to add or remove tracks from the selected array.
7. The toggleSelect() function will take the track as an argument and then call the filterSelectedTracks() function.
8. The filterSelectedTracks() function will filter out all the tracks that have been selected.
9. We are using the filterSelectedTracks() function to filter out all the tracks that have been selected. 

# code
1. Creates a component that returns the search bar and a list of the tracks
2. When the search bar is clicked the onSuccess function is called and the search results are displayed
3. The onSuccess function takes in the search result and filters out the tracks that are already selected
4. The search results are then displayed in a grid format
5. When a track is clicked the toggleSelect function is called. 
6. The toggleSelect function takes in the track and checks if the track is already in the selected array.
7. If the track is not in the selected array it is added to the selected array and the track is added to the grid
8. If the track is already in the selected array it is removed from the selected array and the track is removed from the grid