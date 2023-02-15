/**
 * It's a React component that renders a select element with a label and a list of options
 * @param  - cat.SelectProps
 * @returns A JSX element
 */
function Select({ children, selectOnChange, selected, type }: cat.SelectProps): JSX.Element {
  return (
    <div>
      <label
        htmlFor={type}
        className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400"
      >
        Select a breed
        <select
          name={type}
          onChange={selectOnChange}
          value={selected}
          className="appearance-none block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#18181b] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {children}
        </select>
      </label>
    </div>
  );
}

export default Select;
