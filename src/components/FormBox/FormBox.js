import s from './FormBox.module.css'

const FormBox = ({ children, buttonName, action, name }) => {
  return (
    <div className={s.box}>
      <form className={s.formBox} name={name}>
        {children}
        <button type='submit' className={s.button} onClick={action}>{buttonName}</button>
      </form>
    </div>
  )
}

export default FormBox;
