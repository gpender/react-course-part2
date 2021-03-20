import{createStore} from 'redux';

const store = createStore((state = {count:0}, action)=>{
    console.log('running');
    switch(action.type){
        case 'INCREMENT':
            const incrementBy = typeof(action.IncrementBy) === 'number' ? action.IncrementBy : 1;
            return{
                count:state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof(action.DecrementBy) === 'number' ? action.DecrementBy : 1;
            return{
                count:state.count-decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return{
                count:0
            };
        default:
            return state;
    };
});

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(
{
    type:'INCREMENT',
    IncrementBy:5
});
//unsubscribe();

store.dispatch(
{
    type:'DECREMENT',
    DecrementBy:8
});
store.dispatch(
{
    type:'DECREMENT'
});

store.dispatch({
    type:'RESET'
});
store.dispatch({
    type:'SET',
    count:99
}); 
