import {SignUpImage} from "../GetAllImages";
const ImageContainer = () =>{
    return (
        <div className={'hidden md:block col-md-7 d-table my-auto'}>
            <img src={SignUpImage} alt="GSS Sign Up" width={'100%'}/>
        </div>
    )
}
export default ImageContainer