import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

const Settings = () => {
  return (
    <>
      <Heading as="h1">Update hotel Settings</Heading>
      <Row>
        <UpdateSettingsForm />
      </Row>
    </>
  );
};

export default Settings;
