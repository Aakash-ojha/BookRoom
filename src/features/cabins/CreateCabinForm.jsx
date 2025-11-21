import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin";
import useEditCabin from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {} }) {
  // console.log(cabinToEdit);
  // To created cabin
  const { createCabin, isCreatingCabin } = useCreateCabin();

  // To edit cabin
  const { editCabin, isEditingCabin } = useEditCabin();

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditCabin = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditCabin ? editValues : "",
  });

  const { errors } = formState;
  // console.log(errors);

  const isSaving = isCreatingCabin || isEditingCabin;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    const cabinData = { ...data, image };

    if (isEditCabin) {
      editCabin(
        { newCabinData: cabinData, id: cabinToEdit.id },
        { onSuccess: (data) => reset(data) }
      );
    } else {
      createCabin(cabinData, { onSuccess: () => reset() });
    }
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isSaving}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isSaving}
          min={1}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="RegularPrice" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isSaving}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow label="Discount Price" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isSaving}
          defaultValue=""
          {...register("discount", {
            required: "This field is required",

            validate: (value) =>
              Number(value) < Number(getValues().regularPrice) ||
              "Discount should be less than the regular Price",

            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          id="description"
          disabled={isSaving}
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin Photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          disabled={isSaving}
          accept="image/*"
          {...register("image", {
            required: isEditCabin ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isSaving}>
          {isEditCabin ? "Edit Cabin" : "Create Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
