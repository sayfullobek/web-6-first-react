import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { toast } from "react-toastify"
export const ComponentTask = () => {
    const boss = () => {
        alert('salom qozi')
    }
    const [text,setText] = useState('')
    return(
        <div>
            <button className="btn btn-success" onDoubleClick={()=>boss()}>boss</button>
            <div className="w-25">
            <input type="text" className="form-control" value={text} onChange={e=>setText(e.target.value)}/>
            <CopyToClipboard text={text}>
                <button className="btn btn-success" onClick={()=>toast.success("Copy")}>Copy to clipboard</button>
            </CopyToClipboard>
            </div>
        </div>
    )
}