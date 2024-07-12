import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable(1).label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});
const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "lamp" },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "green",
    icon: "hanger",
  },
  { label: "Cameras", value: 3, backgroundColor: "blue", icon: "camera" },
  { label: "Cars", value: 4, backgroundColor: "orange", icon: "car" },
  {
    label: "Games",
    value: 5,
    backgroundColor: "purple",
    icon: "controller-classic",
  },
  { label: "Sports", value: 6, backgroundColor: "pink", icon: "football" },
  { label: "Books", value: 7, backgroundColor: "yellow", icon: "book" },
  { label: "Movies & Music", value: 8, backgroundColor: "gold", icon: "music" },
  { label: "Other", value: 9, backgroundColor: "orange", icon: "magnify" },
];

function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="Price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiLine
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
