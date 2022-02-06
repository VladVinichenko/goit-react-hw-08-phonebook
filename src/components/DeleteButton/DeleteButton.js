import s from './DeleteButton.module.css'

const DeleteButton = ({ onDeleteContact, id }) => {
  return (
    <button type="button" name='deleteButton' className={s.button} onClick={() => onDeleteContact(id)} data-remove={id}>Delete</button>
  )
}


export default DeleteButton;
