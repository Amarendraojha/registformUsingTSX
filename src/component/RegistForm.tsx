import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from './InputField';
import TextArea from './TextArea';
import Checkbox from './Checkbox';

interface FormData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNo: string;
  billingAddress: string;
  shippingAddress: string;
}

const RegistForm: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [billingAddress, setBillingAddress] = useState<string>('');
  const [shippingAddress, setShippingAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const handleCheckboxChange = () => {
    setIsChecked(prevState => {
      const newState = !prevState;
      if (newState) {
        setShippingAddress(billingAddress);
      } else {
        setShippingAddress(''); 
      }
      return newState;
    });
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Form submitted successfully!');
      console.log(data);
      reset(); 
      setBillingAddress('');
      setShippingAddress('');
      setIsChecked(false);
    }, 3000);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[rgb(154,194,61)] py-5 md:py-20">
      <form className="rounded-3xl p-6 max-w-lg w-full bg-white" id="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-4xl text-center mb-8" id="heading1">Shipping Address Form</h1>

        <div className="flex flex-col md:flex-row justify-between mb-4 space-y-4 md:space-y-0 md:space-x-4">
          <InputField
            label="First Name"
            name="firstName"
            placeholder="First Name"
            register={register}
            errors={errors}
            disabled={loading}
          />
          <InputField
            label="Last Name"
            name="lastName"
            placeholder="Last Name"
            register={register}
            errors={errors}
            disabled={loading}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between mb-4 space-y-4 md:space-y-0 md:space-x-4">
          <InputField
            label="Email"
            name="emailAddress"
            type="email"
            placeholder="Email@example.com"
            register={register}
            errors={errors}
            disabled={loading}
          />
          <InputField
            label="Phone No."
            name="phoneNo"
            placeholder="Phone No."
            register={register}
            errors={errors}
            disabled={loading}
          />
        </div>

        <TextArea
          label="Billing Address"
          name="billingAddress"
          placeholder="123 sector, City, Country"
          register={register}
          errors={errors}
          value={billingAddress}
          onChange={(e) => {
            setBillingAddress(e.target.value);
            if (isChecked) {
              setShippingAddress(e.target.value);
            }
          }}
          disabled={loading}
        />

        <Checkbox
          label="Shipping address is the same as billing address"
          name="shippingAddressCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          disabled={loading}
        />

        <TextArea
          label="Shipping Address"
          name="shippingAddress"
          placeholder="123 sector, City, Country"
          register={register}
          errors={errors}
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          disabled={loading}
        />

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-full md:w-auto text-white p-3 rounded-lg bg-green-500 hover:bg-green-600 transition duration-300"
            id="submit_button"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistForm;
