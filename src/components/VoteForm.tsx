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
      <div className="columns is-multiline">
        <div className="column is-full">
          {choices.map(({ choice, votes, url }) =>
            <div>
              <input {...choiceInput.input} type="radio" id={choice} value={url} />
              <label htmlFor={choice} key={choice} className="box">
                <div className="columns">
                  <div className="column is-2">
                    <p className="title is-4">{choice}</p>
                  </div>
                  <div className="column is-6 is-offset-4 percentage-container">
                    <p className="votes-value">Votes: {votes}</p><progress className="progress" value={calculatePercentage(totalVotes, votes)} max="100">{`${calculatePercentage(totalVotes, votes)}%`}</progress>
                  </div>
                </div>
              </label>
            </div>
          )}
        </div>
        <div className="column is-full">
          {choiceInput.meta.touched && choiceInput.meta.error && (
            <span>{choiceInput.meta.error}</span>
          )}
          <button type="submit" className="button is-primary" disabled={pristine || submitting}>Send Vote</button>
        </div>
      </div>
    </form>
  )

};

export default VoteForm;
