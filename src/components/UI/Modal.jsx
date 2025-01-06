import react, { Fragment } from "react";
import ReactDom from "react-dom";
import "./Modal.css"

const Backdrop=()=>{
    return <div className="backdrop"></div>
}
const Overlay=(props)=>{
    return(
        <div className="overlay">{props.children}</div>
    )
}
const Modal=(props)=>{
    const portalElement=document.getElementById('overlays');
    return <Fragment>
        {ReactDom.createPortal(<Backdrop />, portalElement)}
        {ReactDom.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
        </Fragment>
}
export default Modal;