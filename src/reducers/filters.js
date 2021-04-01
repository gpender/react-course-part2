const filtersDefaultState = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
};

export default (state=filtersDefaultState, action) =>{
    switch(action.type){
        case 'SORT_BY_AMOUNT':
            return{
                ...state,sortBy:'amount'
            }        
        case 'SORT_BY_DATE':
            return{
                ...state,sortBy:'date'
            }
        case 'SET_TEXT_FILTER':
            return {...state, text:action.text}
        case 'SET_START_DATE':
            return {...state, startDate:action.startDate}
        case 'SET_END_DATE':
            return {...state, endDate:action.endDate}
        default:
            return state;
    }
};
