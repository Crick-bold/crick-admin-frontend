import styles from './styles.module.css'
const Button = ({ value, onClick = () => {}, type = 'primary', disabled = false }) => {
  return (
    <>
      <button
        onClick={() => onClick()}
        disabled={disabled}
        className={
          {
            primary: styles.primary,
            submit: styles.primary,
            secondary: styles.secondary
          }[type]
        }
      >
        {value}
      </button>
    </>
  )
}

export default Button
