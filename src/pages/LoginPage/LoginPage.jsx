import { Formik, Form, Field } from "formik";
import s from "./LoginPage.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values));
    options.resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Incorrect email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className={s.wrapper}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className={s.form}>
            <div className={s.formGroup}>
              <label htmlFor="email" className={s.label}>
                Email
              </label>
              <Field type="email" name="email" placeholder="Enter email" />
            </div>
            <div className={s.formGroup}>
              <label htmlFor="password" className={s.label}>
                Password
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className={s.btn}>
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
