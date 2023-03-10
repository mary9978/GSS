import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const nationalCodeRegex = /^[0-9]{10}$/g;
export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, 'نام باید حداقل 4 کاراکتر باشد!')
        .max(10, 'نام  باید حداکثر 10 کاراکتر باشد!')
        .required('الزامی'),
    lastname: Yup.string()
        .min(4, 'نام خانوادگی  باید حداقل 4 کاراکتر باشد!')
        .max(20, 'نام خانوادگی  باید حداکثر 20 کاراکتر باشد!!')
        .required('الزامی'),
    nationalcode: Yup.string().matches(nationalCodeRegex,'کد ملی معتبر نیست').required('الزامی'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'موبایل معتبر نیست').required('الزامی'),
    email: Yup.string().email('ایمیل وارد شده نامعتبر هست').required('الزامی'),
    captcha: Yup.string().required('الزامی')
});
