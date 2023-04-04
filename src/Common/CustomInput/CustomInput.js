import './custominput.css';
const CustomInput =({formik,name,type,label})=>{
    return (
      <div className={"input-group my-4"}>
        <div
          className={
            formik.errors[name] && formik.touched[name]
              ? "absolute bg-white bottom-[60px] mr-[13px]"
              : "absolute bg-white bottom-[34px] mr-[13px]"
          }
        >
          {name === "companyName" || name === "captcha" ? (
            <label htmlFor={name}>{label}</label>
          ) : (
            <label htmlFor={name}>
              {label}
              <span className={"text-error text-base"}>*</span>
            </label>
          )}
        </div>
        <input
          type={type}
          id={name}
          className={
            "w-100 outline-none bg-white rounded p-2.5 border border-grayBorder "
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
        />
        {formik.errors[name] && formik.touched[name] && (
          <div className="IRANBold text-center font-bold text-sm text-error mt-2">
            {formik.errors[name]}
          </div>
        )}
      </div>
    );
}
export default CustomInput;