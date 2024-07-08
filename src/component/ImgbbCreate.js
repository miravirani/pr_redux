import React, { useState, useRef } from "react"
import "../css/Imgbb.css"
import { connect } from "react-redux"
import { uploadImageSuccess } from "../redux/actions/ImgbbAction"

const ImgbbCreate = ({ uploadFile }) => {
    const [selecteFile, setSelecteFile] = useState(null)
    const fileInputRef = useRef(null)

    return (
        <>
            <div className="main">
                <h3 className="h3">Upload and share your images.</h3>
                <p className="p">Drag and drop anywhere you want and start uploading your images now. 32 MB limit.
                    Direct image links, BBCode and HTML thumbnails.</p>

                <input type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                        e.preventDefault()
                        setSelecteFile(e.target.value)
                    }}
                    style={{ display: 'none' }}
                />

                <button className="startbtn"
                    onClick={(e) => {
                        e.preventDefault()
                        fileInputRef.current.click()

                        if (selecteFile) {
                            uploadFile(selecteFile.name)
                        }
                    }
                    }>
                    START UPLOADING
                </button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapStateToDispatch = (dispatch) => ({
    uploadFile: (imageUrl) => (dispatch(uploadImageSuccess(imageUrl)))
})

export default connect(mapStateToProps, mapStateToDispatch)(ImgbbCreate)