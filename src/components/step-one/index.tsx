import React from "react";
import { useForm } from "react-hook-form";
import { FormDataOne } from "../../formData.interface";
import styles from "../../style.module.scss";

interface StepOneProps {
  onSubmitStepOne: (data: FormDataOne) => void;
}

const StepOne: React.FC<StepOneProps> = (Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataOne>();

  const onSubmit = (data: FormDataOne): void => {
    Props.onSubmitStepOne(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="firstName" className={styles.label}>
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          {...register("firstName", { required: true })}
          className={styles.inputField}
        />
        {errors.firstName && (
          <span className={styles.error}>This field is required</span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="lastName" className={styles.label}>
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          {...register("lastName", { required: true })}
          className={styles.inputField}
        />
        {errors.lastName && (
          <span className={styles.error}>This field is required</span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="fatherName" className={styles.label}>
          Father's Name
        </label>
        <input
          type="text"
          id="fatherName"
          {...register("fatherName", { required: true })}
          className={styles.inputField}
        />
        {errors.fatherName && (
          <span className={styles.error}>This field is required</span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="motherName" className={styles.label}>
          Mother's Name
        </label>
        <input
          type="text"
          id="motherName"
          {...register("motherName", { required: true })}
          className={styles.inputField}
        />
        {errors.motherName && (
          <span className={styles.error}>This field is required</span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="phoneNumber" className={styles.label}>
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          {...register("phoneNumber", {
            required: true,
            pattern: /^\d{10}$/,
          })}
          className={styles.inputField}
        />
        {errors.phoneNumber && errors.phoneNumber.type === "required" && (
          <span className={styles.error}>This field is required</span>
        )}
        {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
          <span className={styles.error}>Phone number must be 10 digits</span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          className={styles.inputField}
        />
        {errors.email && errors.email.type === "required" && (
          <span className={styles.error}>This field is required</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span className={styles.error}>Invalid email address</span>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="address" className={styles.label}>
          Address
        </label>
        <textarea
          id="address"
          {...register("address", { required: true })}
          className={styles.inputField}
        />
        {errors.address && (
          <span className={styles.error}>This field is required</span>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.submitButtonStepOne}>
          Next Step
        </button>
      </div>
    </form>
  );
};

export default StepOne;
