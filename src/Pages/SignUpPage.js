import './signup.css';
import {RamznegarSif} from '../components/GetAllImages';
import FormList from "../components/FormList/FormList";
import ImageContainer from "../components/ImageContainer/ImageContainer";
const SignUpPage = () =>{
    return (
        <section className={'signup--section min-vh-100'}>
            <div className={'container-fluid bg--form'}>
                <div className="row">
                    <div className="col-md-5 ">
                        <div className={'logo p-3'}>
                            <img src={RamznegarSif} alt="Ramznegar sif" width={'48px'}/>
                        </div>
                        <FormList/>
                    </div>
                    <div className="col-md-7 bg--style min-vh-100 d-flex justify-content-center">
                        <ImageContainer/>
                    </div>

                </div>
            </div>
        </section>

    )
}
export default SignUpPage