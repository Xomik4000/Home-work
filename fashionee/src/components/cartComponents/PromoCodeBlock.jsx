import buttonArrow from "../../assets/icons/button-arrow.svg";

function PromoCodeBlock() {
  return (
    <div className='promo-code-wrapper'>
      <div className='info'>
        <h3 className='title'>You Have A Promo Code?</h3>
        <p className='description'>
          To receive up-to-date promotional codes, subscribe to us on social
          networks.
        </p>
      </div>
      <div className='promo-code'>
        <input
          type='text'
          name='promo-code'
          className='input'
          placeholder='Enter promo code'
        />
        <div className='button-wrapper'>
          <button className='button'>
            <img src={buttonArrow} alt='button-arrow' />
          </button>
          <div className='vertical-line'></div>
        </div>
      </div>
      <div className='find-us'>
        <p className='find-us-text'>Find us here:</p>
        <ul className='find-us-links'>
          <li className='find-us-link'>
            <a href=''>FB</a>
          </li>
          <li className='line'></li>
          <li className='find-us-link'>
            <a href=''>TW</a>
          </li>
          <li className='line'></li>
          <li className='find-us-link'>
            <a href=''>INS</a>
          </li>
          <li className='line'></li>
          <li className='find-us-link'>
            <a href=''>PT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PromoCodeBlock;