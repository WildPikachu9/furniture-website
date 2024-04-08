import "../../../index.scss";
import headerImg from "../../../img/img3.jpg";

interface SecondaryHeaderProps {
  children?: string | JSX.Element;
}

export const SecondaryHeader = ({ children }: SecondaryHeaderProps) => {
  return (
    <div className='secondary-header-component'>
      <h1 className='header-text'>{children}</h1>
      <img src={headerImg} alt='asrmeble.' className='secondary-header-img' />
    </div>
  );
};
