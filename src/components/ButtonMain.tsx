import "../App.scss";

interface ButtonProps {
  children: string | JSX.Element;
}

export const ButtonMain = ({ children }: ButtonProps) => {
  return <button className='button-main'>{children}</button>;
};
