import "../../../index.scss";
import headerImg from "../../../img/img3.jpg";

export const SecondaryHeader = () => {
  return (
    <div className='secondary-header-component'>
      <img
        src={headerImg}
        alt='anso-home'
        className='secondary-header-img'
        loading='lazy'
      />
    </div>
  );
};
