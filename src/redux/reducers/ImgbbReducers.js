import { UPLOAD_IMAGE } from "../actions/allAction";

const initialState = {
    uplodingFile: []
}

const ImgbbReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPLOAD_IMAGE:

            return {
                ...state,
                uplodingFile: [
                    ...state.uplodingFile, {
                        
                        name: action.data.imageUrl
                    }
                ]
            }

        default:
            return state
    }
};

export default ImgbbReducer
