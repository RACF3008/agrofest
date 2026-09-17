interface InputTextProps {
  tag: string;
  placeholder: string;
}

const Input = ({ placeholder }: InputTextProps) => {
  return (
    <div>
      <input type="text" placeholder={placeholder}></input>
    </div>
  );
};

export default Input;
