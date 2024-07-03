import React from "react";
import ErrorMessages from "./ErrorMessages";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
