interface LabelWithInputProps {
  label: string;
  placeholder: string;
  type: string;
  divClass: string;
  ipClass: string;
}

const Settings = () => {
  return (
    <div>
      <p className="font-semibold text-2xl">Settings</p>
      <div className="mt-4 space-y-6">
        <LabelWithInput
          label={"Email"}
          placeholder={"user@gmail.com"}
          type={"text"}
          divClass={""}
          ipClass={"w-1/2"}
        />
        <LabelWithInput
          label={"Password"}
          placeholder={"************"}
          type={"password"}
          divClass={""}
          ipClass={"w-1/2"}
        />
        <LabelWithInput
          label={"Phone"}
          placeholder={"9876543210"}
          type={"number"}
          divClass={""}
          ipClass={"w-1/2"}
        />
        <div className="flex gap-6">
          <LabelWithInput
            label={"First Name"}
            placeholder={"User"}
            type={"text"}
            divClass={""}
            ipClass={""}
          />
          <LabelWithInput
            label={"Last Name"}
            placeholder={"Name"}
            type={"text"}
            divClass={""}
            ipClass={""}
          />
        </div>
        <button className="border rounded-md bg-green-500 text-white p-1">
          Update Settings
        </button>
      </div>
    </div>
  );
};

function LabelWithInput({
  label,
  placeholder,
  type,
  divClass,
  ipClass,
}: LabelWithInputProps) {
  return (
    <div className={`${divClass}flex flex-col`}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`${ipClass} border rounded-md p-1 outline-none`}
      />
    </div>
  );
}

export default Settings;
