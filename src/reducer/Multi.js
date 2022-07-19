
const initialstate = 5;


const changemult = (state = initialstate , action) => {
   switch (action.type) {
       case "MULTIFICATION" : return state * action.payload;
       case "DIVISION" : return state / 5;
       default : return state;
   }
}

export default changemult;