import CustomInput from "../../Common/CustomInput/CustomInput";
import './formlist.css';
import {useFormik} from "formik";
import {SignupSchema} from "../../Schema/Schema";
import { useState} from "react";
import CaptchaDiv from "../CaptchaDiv/CaptchaDiv";
const FormList = () =>{
    const [setFormValue]=useState(null);
    const [captchaCode,setCaptchaCode]=useState('');
    const [error,setError]=useState('');
    const formik = useFormik({
        initialValues: {
            name: "",
            lastname: "",
            nationalcode:"",
            phoneNumber:"",
            email: "",
            companyName:"",
            captcha:"",
        },
        onSubmit: values => {
            if(captchaCode === values.captcha){
                setFormValue(values);
                //call api and send info
                setError('');
                formik.resetForm();
            }
            else{
                setError('کد وارد شده صحیح نمی باشد');
            }
        },
        validationSchema: SignupSchema
    });
    const CaptchaValidationHandler =(Code)=>{
        setCaptchaCode(Code);
    }
    return (
        <div className="col-md-12">
            <h6 className={'form--title'}>ثبت نام</h6>
            <p className={'form--login mt-3'}> قبلا ثبت ‌نام کردید؟<sapn href={'#'} className={'link'}>  وارد شوید</sapn></p>
            <div className={'col-10 col-md-8 d-table mx-auto'}>
                <form  onSubmit={formik.handleSubmit}>
                    <CustomInput formik={formik} name="name" label={'نام'} type={'text'}/>
                    <CustomInput formik={formik} name="lastname" label={'نام خانوادگی'} type={'text'}/>
                    <CustomInput formik={formik} name="nationalcode" label={'کد ملی'} type={'text'}/>
                    <CustomInput formik={formik} name="phoneNumber" label={'شماره تلفن'} type={'text'}/>
                    <CustomInput formik={formik} name="email" label={'آدرس ایمیل'} type={'email'}/>
                    <CustomInput formik={formik} name="companyName" label={'نام شرکت'} type={'text'}/>
                    <CaptchaDiv formik={formik} CaptchaValidationHandler={CaptchaValidationHandler}/>
                    {error ? <span id={'error'}>{error}</span> : '' }
                    <button type={'submit'}  className={'text-white w-100 btn--signup my-2'}>ثبـــــت نام</button>
                </form>
            </div>
        </div>
    )
}
export default FormList