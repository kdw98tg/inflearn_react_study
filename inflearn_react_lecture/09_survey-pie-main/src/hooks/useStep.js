import { useParams } from 'react-router-dom';

function useStep() {
  const params = useParams();

  return parseInt(params.step);
}

export default useStep;
