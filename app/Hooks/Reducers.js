export const initialState = {
    bucketList: [],
    doneList: [],
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'add_entry':
            console.log("...........ADD ENTRY")
            state.bucketList.push(action.payload)
            return state

        case 'delete_entry':
            console.log("...........DELETE ENTRY")
            const updatedBucketList = state.bucketList.filter(value => value.id !== action.id)
            state.bucketList = updatedBucketList
            return state

        case 'entry_done':
            console.log("...........DONE ENTRY")
            const item = state.bucketList[action.index]
            state.doneList.push(item)
            const newBucketList = state.bucketList.filter(value => value.id !== item.id)
            state.bucketList = newBucketList
            return state

        case 'update_entry':
            console.log("...........UPDATE ENTRY")
            state.bucketList[action.index] = action.payload
            return state

        case 'undo_entry':
            console.log("...........UNDO ENTRY")
            const doneItem = state.doneList[action.index]
            doneItem.done = false
            state.bucketList.push(doneItem)
            const newDoneList = state.doneList.filter(object => object.id !== doneItem.id)
            state.doneList = newDoneList
            updateStateStorage(state)
            return state

        case 'initialize_state':
            if(action.payload){
                state = JSON.parse(action.payload)
            }
            return state
        default:
            return state
    }
}