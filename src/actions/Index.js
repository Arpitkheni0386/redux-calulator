

export const IncNumber = (num) => {
    return{
        type:"INCREMENT",
        payload:num
    }
}



export const DecNumber = () => {
    return{
        type:"DECRIMENT",
       
    }
}


export const MulNumber = (num) => {
    return{
        type:"MULTIFICATION",
        payload:num
    
    }
}



export const DivNumber = () => {
    return{
        type:"DIVISION",
       
    }
}