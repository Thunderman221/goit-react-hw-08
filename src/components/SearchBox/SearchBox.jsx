import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilters } from "../../redux/filters/slice";
import { Formik, Field, Form } from "formik";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleInputChange = (e, setFieldValue) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
    setFieldValue("filter", value);
  };

  return (
    <Formik initialValues={{ filter: filters?.name || "" }} onSubmit={() => {}}>
      {({ values, setFieldValue }) => (
        <Form className={s.form}>
          <Field
            type="text"
            name="filter"
            className={s.field}
            placeholder="Search contacts"
            value={values.filter}
            onChange={(e) => handleInputChange(e, setFieldValue)}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;
