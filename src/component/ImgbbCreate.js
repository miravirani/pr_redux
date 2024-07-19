import React, { useState, useRef } from "react"
import { connect } from "react-redux"
import "../css/Imgbb.css"
import { uploadImageSuccess } from "../redux/actions/ImgbbAction"
import ImgbbView from "./ImgbbView"

const ImgbbCreate = ({ uploadFile }) => {

    const [selectedFile, setSelectedFile] = useState(null)
    const [uploadImgbb, setUploadImgbb] = useState(false)
    const fileInputRef = useRef(null)

    if (uploadImgbb) {

        return <ImgbbView selectedFile={selectedFile} />;
    }

    return (
        <div className="main">
            <h3>Upload and share your images.</h3>
            <p>Drag and drop anywhere you want and start uploading your images now. 32 MB limit.
                Direct image links, BBCode and HTML thumbnails.</p>

            <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => {
                    e.preventDefault()
                    setSelectedFile(e.target.files[0])
                    uploadFile(e.target.files[0].name)
                    setUploadImgbb(true)
                }}
                style={{ display: 'none' }}
            />

            <button
                className="startbtn"
                onClick={(e) => {
                    e.preventDefault()
                    fileInputRef.current.click()
                }}
            >
                START UPLOADING
            </button>
        </div>
    );
}

const mapStateToProps = (state) => ({ })

const mapStateToDispatch = (dispatch) => ({
    uploadFile: (imgUrl) => (dispatch(uploadImageSuccess(imgUrl))) 
})

export default connect(mapStateToProps, mapStateToDispatch)(ImgbbCreate)

// import React, { useState, useRef } from "react";
// import { connect } from "react-redux";
// import "../css/Imgbb.css";
// import { uploadImageSuccess } from "../redux/actions/ImgbbAction";
// import ImgbbView from "./ImgbbView";

// const ImgbbCreate = ({ uploadFile }) => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [uploadImgbb, setUploadImgbb] = useState(false);
//     const [preview, setPreview] = useState(null);
//     const fileInputRef = useRef(null);

//     const handleFileChange = (file) => {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setPreview(reader.result);
//         };
//         reader.readAsDataURL(file);
//     };

//     if (uploadImgbb) {
//         return <ImgbbView selectedFile={preview} />;
//     }

//     return (
//         <div className="main">
//             <h3>Upload and share your images.</h3>
//             <p>Drag and drop anywhere you want and start uploading your images now. 32 MB limit.
//                 Direct image links, BBCode, and HTML thumbnails.</p>

//             <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={(e) => {
//                     e.preventDefault();
//                     const file = e.target.files[0];
//                     setSelectedFile(file);
//                     handleFileChange(file);
//                     uploadFile(file.name);
//                     setUploadImgbb(true);
//                 }}
//                 style={{ display: 'none' }}
//             />

//             <button
//                 className="startbtn"
//                 onClick={(e) => {
//                     e.preventDefault();
//                     fileInputRef.current.click();
//                 }}
//             >
//                 START UPLOADING
//             </button>
//         </div>
//     );
// }

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({
//     uploadFile: (imgUrl) => dispatch(uploadImageSuccess(imgUrl)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ImgbbCreate);
