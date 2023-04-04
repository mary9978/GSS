// import './signup.css';
import {RamznegarSif} from '../components/GetAllImages';
import FormList from "../components/FormList/FormList";
import ImageContainer from "../components/ImageContainer/ImageContainer";
const SignUpPage = () =>{
    return (
      <section className={"bg-gray min-vh-100"}>
        <div className={"container-fluid bg-white"}>
          <div className="row">
            <div className="col-md-5">
              <div className={"p-3"}>
                <img src={RamznegarSif} alt="Ramznegar sif" width={"48px"} />
              </div>
              <FormList />
            </div>
            <div className="hidden md:flex col-md-7 relative bg-gradient-to-t from-gradient-100 to-gradient-200 rounded-r-lg min-vh-100 justify-content-center">
              <ImageContainer />
            </div>
          </div>
        </div>
      </section>
    );
}
export default SignUpPage