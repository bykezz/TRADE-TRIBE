import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessages from "./ErrorMessages";

function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  width,
  numberOfColumns,
  placeholder,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
