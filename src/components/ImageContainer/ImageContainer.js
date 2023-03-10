import {SignUpImage} from "../GetAllImages";
import './imagecontainer.css';
const ImageContainer = () =>{
    return (
        <div className={'col-md-7 d-table my-auto res--display'}>
            <img src={SignUpImage} alt="GSS Sign Up" width={'100%'}/>
        </div>
    )
}
export default ImageContainer