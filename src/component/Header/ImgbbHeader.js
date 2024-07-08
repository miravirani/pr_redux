import React, { useRef, useState } from "react"
import "../../css/Imgbb.css"
import imgbblogo from "../../Assest/imgbblogo.png"
import { uploadImageSuccess } from "../../redux/actions/ImgbbAction"
import { connect } from "react-redux"


function ImgbbHeader({ uploadFile }) {
    const [selecteFile, setSelecteFile] = useState(null)
    const fileInputRef = useRef(null)

    return (
        <>
            <div className="containers">
                <div>
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
                            setSelecteFile(e.target.value)
                        }}
                        style={{ display: 'none' }}
                    />

                    <button className="imgbtn"
                        onClick={(e) => {
                            e.preventDefault()
                            fileInputRef.current.click()

                            if (selecteFile) {
                                uploadFile(selecteFile.name)
                            }
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
export default connect(mapStateToProps, mapStateToDispatch)(ImgbbHeader);