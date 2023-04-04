import './captchadiv.css';
import ClientCaptcha from "react-client-captcha";
const CaptchaDiv =({formik,CaptchaValidationHandler})=>{
    return (
      <div className={"col-12 bg-captcha rounded p-3"}>
        <ClientCaptcha
          width={150}
          fontSize={20}
          charsCount={5}
          borderRadius={5}
          fontFamily={"IRANYEKANMEDIUM,san-serif"}
          backgroundColor={"white"}
          captchaClassName={"style_captchaContainer"}
          captchaCode={(code) => CaptchaValidationHandler(code)}
        />
        <div className={"d-flex flex-column"}>
          <label
            className={
              "text-grayBorder text-base font-IRANMed py-2 font-normal"
            }
            htmlFor={"captcha"}
          >
            کد بالا را وارد کنید
          </label>
          <input
            id={"captcha"}
            name="captcha"
            type={"text"}
            className={
              "outline-none bg-white rounded p-2.5 border border-white"
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.captcha}
          />
          {formik.errors.captcha && formik.touched.captcha && (
            <div className="IRANBold  font-bold text-sm text-error mt-2">
              {formik.errors.captcha}
            </div>
          )}
        </div>
      </div>
    );
}
export default CaptchaDiv;