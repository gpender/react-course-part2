import{createStore} from 'redux';


const incrementCount = ({incrementBy=1}={}) =>(
    {
        type:'INCREMENT',
        incrementBy
    });
const decrementCount = ({decrementBy=1}={}) => (
    {
        type:'DECREMENT',
        decrementBy
    });
const setCount = ({count=1}={}) => (
    {
        type:'SET',
        count
    }
)
const resetCount = () => (
    {
        type:'RESET'
    }
)

const store = createStore((state = {count:0}, action)=>{
    console.log('running');
    switch(action.type){
        case 'INCREMENT':
            return{
                count:state.count + action.incrementBy
            };
        case 'DECREMENT':
            return{
                count:state.count - action.decrementBy
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

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(incrementCount({incrementBy:99}));
//unsubscribe();

store.dispatch(decrementCount({decrementBy:777}));

store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({count:89}));

// store.dispatch({
//     type:'SET',
//     count:99
// }); 
