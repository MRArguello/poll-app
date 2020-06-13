import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";
import { useForm, useField } from 'react-final-form-hooks';
import { QuestionFormProps, QuestionFormValueType, processedQuestionFormValuesType } from '../types';

const validate = (values: QuestionFormValueType) => {
  const errors: Partial<QuestionFormValueType> = {}

  if (!values.choices) {
    errors.choices = 'Required';
  } else if (typeof (values.choices) === 'string' && !values.choices.match(", [a-zA-Z]")) {
    errors.choices = 'Please provide more than one option, separated by commas. Example: Kiwi, banana, apple';
  }

  if (!values.question) {
    errors.question = 'Required';
  }

  return errors
};

const QuestionForm: FunctionComponent<QuestionFormProps> = ({ sendQuestion }) => {
  const onSubmit = (values: QuestionFormValueType) => {
    let formValues: processedQuestionFormValuesType = {
      question: '',
      choices: []
    };

    formValues.question = values.question;
    formValues.choices = values.choices.split(', ');

    sendQuestion(formValues);
  };

  const { form, handleSubmit, pristine, submitting } = useForm({
    onSubmit,
    validate
  });

  const question = useField('question', form);
  const choices = useField('choices', form);

  return (
    <form onSubmit={handleSubmit}>
      <div className="columns is-multiline">
        <div className="column is-full">
          <div className="field">
            <label className="label">Question:</label>
            <div className="control">
              <input className="input" type="text" {...question.input} />
              {question.meta.touched && question.meta.error && (
                <span className="help is-danger">{question.meta.error}</span>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Answer choices:</label>
            <p className="help">Please provide your choices separated with commas. Example: Kiwi, banana, apple.</p>
            <div className="control">
              <textarea className="textarea"  {...choices.input} ></textarea>
              {choices.meta.touched && choices.meta.error && (
                <span className="help is-danger">{choices.meta.error}</span>
              )}
            </div>
          </div>
        </div>

        <div className="column is-full">
          <div className="field is-grouped is-grouped-right">
            <p className="control">
              <button type="submit" className="button is-primary" disabled={pristine || submitting}>Save question</button>
            </p>
            <p className="control">
              <Link to='/' className="button is-light">
                Return Home
            </Link>
            </p>
          </div>


        </div>
      </div>
    </form>
  )
};

export default QuestionForm;
