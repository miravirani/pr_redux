import React, { useRef, useState } from "react"
import "../../css/Imgbb.css"
import imgbblogo from "../../Assest/imgbblogo.png"
import { uploadImageSuccess } from "../../redux/actions/ImgbbAction"
import { connect } from "react-redux"
import ImgbbView from "../ImgbbView"


function ImgbbHeader({ uploadFile }) {
    const [selectedFile, setSelectedFile] = useState(null)
    const [uploadImgbb, setUploadImgbb] = useState(false)
    const fileInputRef = useRef(null)

    if (uploadImgbb) {

        return <ImgbbView selectedFile={selectedFile} />;
    }

    return (
        <>
            <div className="containers">
                <div className="logo">
                    <h2>Logo</h2>
                </div>

                <div>
                    <img className="img" src={imgbblogo} />
                </div>

                <div>
                    <input type="file"
                        ref={fileInputRef}
                        onChange={(e) => {
                            e.preventDefault()
                            setSelectedFile(e.target.files[0])
                            uploadFile(e.target.files[0].name)
                            setUploadImgbb(true)
                        }}
                        style={{ display: 'none' }}
                    />

                    <button className="imgbtn"
                        onClick={(e) => {
                            e.preventDefault()
                            fileInputRef.current.click()

                        }
                        }>
                        UPLOAD
                    </button>

                </div>

            </div>
            <hr style={{ marginTop: "5px" }} />
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapStateToDispatch = (dispatch) => ({
    uploadFile: (imageUrl) => (dispatch(uploadImageSuccess(imageUrl)))
})
export default connect(mapStateToProps, mapStateToDispatch)(ImgbbHeader)