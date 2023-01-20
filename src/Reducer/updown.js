const inintialstate=0;
const changetheNumber=(state=inintialstate,action)=>{
        switch(action.type){
            case "INCREMENY" :return  state+1;

            case "DECREMENT" :return  state-1;
            default :return state;
        }
}

export default changetheNumber;