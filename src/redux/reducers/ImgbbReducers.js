import { UPLOAD_IMAGE } from "../actions/allAction";


const initialState = {
    uploadFile: []
}

const ImgbbReducers = (state = initialState, action) => {
    switch (action.type) {


        case UPLOAD_IMAGE: {
            return {
                ...state,
                uploadFile: [
                    ...state.uploadFile,
                    {
                        name: action.data.imageUrl
                    }
                ]
            }
        }

        default:
            return state

    }
}

export default ImgbbReducers