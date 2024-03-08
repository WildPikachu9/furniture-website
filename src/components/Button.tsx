import "../App.scss";

interface ButtonProps {
  children: string | JSX.Element;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className='button-main'>{children}</button>;
};
