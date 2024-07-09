import React, { useState, useRef } from "react"
import { connect } from "react-redux"
import { uploadImageSuccess } from "../redux/actions/ImgbbAction"

const ImgbbCreate = ({ uploadFile }) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const fileInputRef = useRef(null)

    return (
        <div className="main">
            <h3>Upload and share your images.</h3>
            <p>Drag and drop anywhere you want and start uploading your images now. 32 MB limit.
                Direct image links, BBCode and HTML thumbnails.</p>

            <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => {
                    e.preventDefault();
                    setSelectedFile(e.target.files[0]);
                }}
                style={{ display: 'none' }}
            />

            <button
                className="startbtn"
                onClick={(e) => {
                    e.preventDefault();
                    fileInputRef.current.click()

                    if (selectedFile) {
                        const reader = new FileReader()
                        reader.onloadend = () => {
                            uploadFile(reader.result)
                        };
                        reader.readAsDataURL(selectedFile)
                    }
                    //         if (selecteFile) {
                    //             uploadFile(selecteFile.name)
                    //           }
                }}
            >
                START UPLOADING
            </button>
        </div>
    );
}

const mapStateToProps = (state) => ({})

const mapStateToDispatch = (dispatch) => ({
    uploadFile: (imgUrl) => (dispatch(uploadImageSuccess(imgUrl)))
})

export default connect(mapStateToProps, mapStateToDispatch)(ImgbbCreate)