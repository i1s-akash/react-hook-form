import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormDataTwo } from "../../formData.interface";
import { FamilyMember } from "./familyMember.interface";
import styles from "../../style.module.scss";

interface StepTwoProps {
  onSubmitStepTwo: (data: FormDataTwo) => void;
}

const StepTwo: React.FC<StepTwoProps> = (Props) => {
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([
    { id: 1, name: "", isOpen: true },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataTwo>();

  const addFamilyMember = (): void => {
    const newId: number = familyMembers.length + 1;
    setFamilyMembers([...familyMembers, { id: newId, name: "", isOpen: true }]);
  };

  const removeFamilyMember = (id: number): void => {
    let tempFamilyMembers: FamilyMember[] = [...familyMembers];
    tempFamilyMembers.splice(id, 1);
    setFamilyMembers(tempFamilyMembers);
  };

  const toggleForm = (id: number): void => {
    setFamilyMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id ? { ...member, isOpen: !member.isOpen } : member
      )
    );
  };

  const onSubmit = (data: FormDataTwo): void => {
    Props.onSubmitStepTwo(data);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      {familyMembers.map((member: FamilyMember, index: number) => (
        <div key={member.id} className={styles.inputContainer}>
          {familyMembers.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => removeFamilyMember(index)}
                className={styles.removeButton}
              >
                Remove
              </button>
              <button
                type="button"
                onClick={() => toggleForm(member.id)}
                className={styles.toggleButton}
              >
                {member.isOpen ? "Collapse" : "Expand"}
              </button>
            </>
          )}
          <div
            style={{
              display: member.isOpen ? "flex" : "none",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: 10 }}>{`${index + 1}`}</span>
            <input
              type="text"
              className={styles.inputField}
              {...register(`familyMembers[${member.id - 1}].name`, {
                required: true,
              })}
            />
          </div>
          <div>
            {errors.familyMembers?.[member.id - 1]?.name && (
              <span className={styles.error}>
                This field is required, either fill or remove it.
              </span>
            )}
          </div>
        </div>
      ))}
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={addFamilyMember}
          className={styles.addButton}
        >
          Add More Family Member
        </button>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
