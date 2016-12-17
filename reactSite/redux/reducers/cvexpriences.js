const initialState = {
	expriences : [],
	fetched : false,
	fetching : true 
}

export default function reducer(state = initialState, action) {
	switch(action.type) {
		case "FETCH_EXPRIENCE_PENDING" : {
			return {
				...state,
				fetching : true,
				fetched: false
			}
		}
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

