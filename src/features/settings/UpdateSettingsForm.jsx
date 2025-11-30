// import Form from "../.. /ui/Form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSetting } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const {
    isPending,
    setting: {
      minBookingLengthDays,
      maxBookingLengthDays,
      maxGuestPerBookings,
      breakfastPrice,
    } = {},
    error,
  } = useSetting();

  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isPending) return <div>Loading</div>;
  if (error) return <div>Error: {error.message}</div>;

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLengthDays")}
          defaultValue={minBookingLengthDays}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingLengthDays")}
          defaultValue={maxBookingLengthDays}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxGuestPerBookings")}
          defaultValue={maxGuestPerBookings}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          defaultValue={breakfastPrice}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
