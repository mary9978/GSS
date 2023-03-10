import './custominput.css';
const CustomInput =({formik,name,type,label})=>{
    return(
        <div className={'input-group my-4'}>
            <div
                className={formik.errors[name] && formik.touched[name] ? 'label--error' :'label--div'}
                // className={'label--div'}
            >
                {name==="companyName" || name==="captcha"?
                    <label  htmlFor={name}>{label}</label>
                    :
                    <label  htmlFor={name}>{label}<span className={'required'}>*</span></label>
                }

            </div>
               <input  type={type} id={name}
                       className={formik.errors[name] && formik.touched[name] ? 'w-100 input--style input--error' :'w-100 input--style'}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values[name]}
               />
            {formik.errors[name] && formik.touched[name] && <div id="error">{formik.errors[name]}</div>}
        </div>
    )
}
export default CustomInput;