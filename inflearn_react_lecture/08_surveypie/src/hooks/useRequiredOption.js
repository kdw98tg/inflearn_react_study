import useCurrentQuestion from './useCurrentQuestion';

function useRequiredOption() {
  const question = useCurrentQuestion();
console.log(question?.required );
  return question?.required || false;
}

export default useRequiredOption;
