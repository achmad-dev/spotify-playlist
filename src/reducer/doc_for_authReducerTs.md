# documentation
# step explanation

1. Create a new slice called authSlice.
2. Create a new reducer called login. This reducer will be the action creator.
3. Create a new action called login which will be used to dispatch this reducer.
4. The reducer receives the state and the action.
5. We check the action.type property. If it is equal to login, we update the state.
6. We set the accessToken and user properties.
7. We return the state

# code explanation
1. createSlice() is a function that takes as input the name of our slice, 
and the initial state (which is an object)
2. The initial state is an object that contains the state of the slice. 
The initial state can be a function that returns an object. This is the 
way to pass parameters to the initial state.
3. The reducers property is an object that contains all reducers for the slice. 
Reducers are functions that take in the current state of the slice and an action, 
and return the new state of the slice.
4. The slice can have more than one reducer. The reducers are functions that take in the 
current state of the slice and an action, and return the new state of the slice. 
We can have as many reducers as we need.
5. The slice can have more than one action. The actions are functions that take in the 
state of the slice and return a payload.
6. The slice can have more than one action. The actions are functions that take in the 
state of the slice and return a payload.