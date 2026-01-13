function TextInput({ answer, setAnswer }) {
  return (
    <input
      type="text"
      value={answer}
      onChange={(event) => {
        setAnswer(event.target.value);
      }}
    />
  );
}

export default TextInput;
