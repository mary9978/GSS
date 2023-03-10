import './captchadiv.css';
import ClientCaptcha from "react-client-captcha";
const CaptchaDiv =({formik,CaptchaValidationHandler})=>{

    return(
        <div className={'col-12 div--captcha p-3'}>
            <ClientCaptcha fontSize={20} charsCount={5} fontFamily={'IRANYEKANMEDIUM,san-serif'} backgroundColor={'white'} captchaClassName={'style_captchaContainer'} captchaCode={(code) => CaptchaValidationHandler(code)} />
            <div className={'d-flex flex-column captcha--input'}>
                <label className={'captcha--label py-2'} htmlFor={'captcha'}>کد بالا را وارد کنید</label>
                <input
                    id={'captcha'}
                    name="captcha"
                    type={'text'}
                    className={'input--captcha'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.captcha}
                />
                {formik.errors.captcha && formik.touched.captcha && <div id="error">{formik.errors.captcha}</div>}
            </div>
        </div>
    )
}
export default CaptchaDiv;