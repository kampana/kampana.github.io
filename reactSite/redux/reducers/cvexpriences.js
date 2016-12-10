const initialState = {
	expriences : [],
	fetched : false,
	fetching : false 
}

export default function reducer(state = initialState, action) {
	switch(action.type) {
		case "FETCH_EXPRIENCE_FULFILLED" : {
			return {
				...state, 
				fetched: true, 
				fetching: false, 
				expriences: [...state.expriences.concat(action.payload)]
			}
		}
	}
	
	return state;
};

