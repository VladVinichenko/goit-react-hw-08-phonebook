import s from './Button.module.css'

const Button = ({ name, action, children, type }) => {
  return (
    <button className={type === 'red' ? s.buttonRed : s.button} name={name} onClick={action}>{children}</button >
  )
}

export default Button;
