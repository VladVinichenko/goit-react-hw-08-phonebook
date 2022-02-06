import s from './FormBox.module.css'

const FormBox = ({ children, buttonName, action, name, title }) => {
  const onSubmit = evt => {
    evt.preventDefault()
    action(evt)
  }

  return (
    <div className={s.box}>
      <form className={s.formBox} name={name} onSubmit={onSubmit}>
        {title && <h2 className={s.title}>{title}</h2>}
        {children}
        <button type='submit' className={s.button} >{buttonName}</button>
      </form>
    </div>
  )
}

export default FormBox;
