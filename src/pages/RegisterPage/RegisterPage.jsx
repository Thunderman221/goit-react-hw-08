import { Formik, Form, Field } from "formik";
import s from "./RegisterPage.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <div className={s.formGroup}>
            <label className={s.label}>Username</label>
            <Field type="text" name="name" placeholder="Enter username" />
          </div>
          <div className={s.formGroup}>
            <label className={s.label}>Email</label>
            <Field type="email" name="email" placeholder="Enter email" />
          </div>
          <div className={s.formGroup}>
            <label className={s.label}>Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className={s.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
