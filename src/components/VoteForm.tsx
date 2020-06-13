import React, { FunctionComponent } from 'react';
import { useForm, useField } from 'react-final-form-hooks';
import { VoteFormProps, VoteFormValueType } from '../types';
import calculatePercentage from '../helpers/calculatePercentage';

const validate = (values: VoteFormValueType) => {
  const errors: Partial<VoteFormValueType> = {}

  if (!values.choice) {
    errors.choice = 'Required';
  }

  return errors
};

const VoteForm: FunctionComponent<VoteFormProps> = ({ sendVote, choices, totalVotes }) => {

  const onSubmit = (values: VoteFormValueType) => {
    sendVote(values);
  };

  const { form, handleSubmit, pristine, submitting } = useForm({
    onSubmit,
    validate
  });

  const choiceInput = useField('choice', form);

  return (
    <form onSubmit={handleSubmit}>
      <label>Choices</label>
      {choices.map(({ choice, votes, url }) =>
        <label htmlFor={choice} key={choice}>
          <p>{choice}</p>
          <p>{votes}</p>
          {totalVotes && <p>{calculatePercentage(totalVotes, votes)}</p>}
          <input {...choiceInput.input} type="radio" id={choice} value={url} />
        </label>
      )}
      {choiceInput.meta.touched && choiceInput.meta.error && (
        <span>{choiceInput.meta.error}</span>
      )}
      <button type="submit" disabled={pristine || submitting}>Send Vote</button>
    </form>
  )

};

export default VoteForm;
