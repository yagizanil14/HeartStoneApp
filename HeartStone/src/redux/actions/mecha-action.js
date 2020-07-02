export const UPDATE_MECHA = "UPDATE_MECHA"

export function updateMecha(newMecha){
    return{
        type:UPDATE_MECHA,
        payload:newMecha
    }
}

