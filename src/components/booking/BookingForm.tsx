import { FormEvent, useState } from "react";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
export type BookingValues = {
  guestName: string;
  guests: number;
  date: string;
  time: string;
};
type Props = {
  values: BookingValues;
  editing: boolean;
  onChange: (values: BookingValues) => void;
  onSubmit: (values: BookingValues) => void;
  onLogin: () => void;
};
export default function BookingForm({
  values,
  editing,
  onChange,
  onSubmit,
  onLogin,
}: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const update = (key: keyof BookingValues, value: string | number) => {
    onChange({ ...values, [key]: value });
    setErrors((old) => {
      const copy = { ...old };
      delete copy[key];
      return copy;
    });
  };
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!values.guestName.trim())
      next.guestName = "Please enter the booking name.";
    if (
      !Number.isInteger(values.guests) ||
      values.guests < 1 ||
      values.guests > 20
    )
      next.guests = "Choose between 1 and 20 guests.";
    if (!values.date) next.date = "Please select a date.";
    if (!values.time) next.time = "Please select a time.";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    onSubmit(values);
  };
  const chooseDate = (date: string) => {
    onChange({ ...values, date, time: "" });
    setErrors((old) => {
      const copy = { ...old };
      delete copy.date;
      delete copy.time;
      return copy;
    });
  };
  return (
    <form noValidate onSubmit={submit}>
      <h2 className="form-title">
        {editing ? "Edit Your Booking" : "Book a Table"}
      </h2>
      <p className="form-subtitle">
        Our dining atmosphere is casual and comfortable.
      </p>
      <Field
        label="Name"
        value={values.guestName}
        error={errors.guestName}
        onChange={(value) => update("guestName", value)}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Number of guests"
          type="number"
          value={String(values.guests)}
          error={errors.guests}
          onChange={(value) => update("guests", Number(value))}
        />
        <div className="mt-5">
          <DatePicker
            value={values.date}
            error={errors.date}
            onChange={chooseDate}
          />
        </div>
      </div>
      <div className="mt-5">
        <TimePicker
          value={values.time}
          disabled={!values.date}
          error={errors.time}
          onChange={(value) => update("time", value)}
        />
      </div>
      <button className="primary">
        {editing ? "Update Reservation" : "Book a Table"}
      </button>
      <button
        type="button"
        onClick={onLogin}
        className="mt-3 w-full text-sm text-[#f8d49e] underline"
      >
        Need another account? Login First
      </button>
    </form>
  );
}
function Field({
  label,
  value,
  error,
  type = "text",
  onChange,
}: {
  label: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mt-5">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={error ? "border-[#ff4d4f]" : ""}
      />
      {error && <p className="mt-1.5 text-xs text-[#ff7778]">{error}</p>}
    </div>
  );
}
