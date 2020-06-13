export type Question = {
  question: string
  published_at: string
  url: string
  choices: Choice[]
}

export type Choice = {
  choice: string
  votes: number
  url: string
}

export type StateProviderProps = {
  reducer: any
  initialState: ContextType
  children: React.ReactNode
}

export type StateType = {
  questions: Question[]
  loading: boolean
  error?: string
}

export type ActionsType = {
  type: 'setQuestions' | 'toggleLoading' | 'setError' | 'updateQuestion' | 'addNewQuestion'
  payload: any
}

export type VoteFormProps = {
  sendVote: (values: VoteFormValueType) => void
  choices: Choice[]
  totalVotes: number
}

export type QuestionFormProps = {
  sendQuestion: (values: processedQuestionFormValuesType) => void
}

export type VoteFormValueType = {
  choice: string;
}

export type QuestionFormValueType = {
  question: string;
  choices: string;
}

export type processedQuestionFormValuesType = {
  question: string;
  choices: string[];
}

export type getQuestionsCallbackType = (questions: Question[], error?: string) => void
export type voteOnQuestionCallbackType = (updatedChoice: Choice, error?: string) => void
export type QuestionFormCallbackType = (newQuestion: Question, error?: string) => void
