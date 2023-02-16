import styles from '@styles/Breed.module.css';

/**
 * It's a React component that renders a select element with a label and a list of options
 * @param  - cat.SelectProps
 * @returns A JSX element
 */
function Select({ children, selectOnChange, selected, type }: cat.SelectProps): JSX.Element {
  return (
    <div>
      <label htmlFor={type} className={styles.label}>
        Select a breed
        <select name={type} onChange={selectOnChange} value={selected} className={styles.select}>
          {children}
        </select>
      </label>
    </div>
  );
}

export default Select;
