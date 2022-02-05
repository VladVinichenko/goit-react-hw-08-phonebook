import s from './Input.module.css'
import propTypes from 'prop-types';

const Input = ({ name, children, value, inputData, tel, placeholder, type }) => {
  return (
    <div className={s.box}>
      <p className={s.name}>{children}</p>

      {!tel ? <input className={s.input}
        onChange={inputData}
        value={value}
        name={name}
        type={type ? type : 'text'}
        placeholder={placeholder}
        required
      /> : <input className={s.input}
        onChange={inputData}
        value={value}
        name={name}
        type="tel"
        placeholder={placeholder}
        // pattern="\+?\d{1, 4}?[-.\s]?\(?\d{1, 3}?\)?[-.\s]?\d{1, 4}[-.\s]?\d{1, 4}[-.\s]?\d{1, 9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />}
    </div>
  )
}

Input.propTypes = {
  name: propTypes.string.isRequired
}

export default Input;
