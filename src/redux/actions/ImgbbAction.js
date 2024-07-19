import { UPLOAD_IMAGE } from "./allAction";

export const uploadImageSuccess = (imageUrl) => {
    return {
        type: UPLOAD_IMAGE,
        data: {
            imageUrl
        }
    }
}

// export const uploadImageFailure = (error) => ({
//     type: UPLOAD_IMAGE_FAILURE,
//     data: error
// })
// export const uploadImageRequest = () => ({
//     type : UPLOAD_IMAGE_FAILURE
// })
// redux/actions/ImgbbAction.js
