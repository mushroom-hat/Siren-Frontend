const fixedInputClass="mt-3 rounded-full appearance-none relative block w-full px-8 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"

const Input = ({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass,
    autoComplete
}) => {
    return(
      //     <div class="inline-flex items-center justify-center w-full">
//     <hr class="w-96 h-px my-10 bg-gray-200 border-0 dark:bg-gray-500"></hr>
//     <span class="absolute px-2 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-grey">OR</span>
// </div>
      
        <div className="mb-4 mt-2 inline-flex w-full">
            <label htmlFor={labelFor} className="absolute ml-5 px-3 z-20 w-auto h-4 text-s font-semibold text-sm text-black bg-white text-center">
              {labelText}
            </label>
            <input
              {...(id === "username" ? { autoFocus: true } : null)}
              onChange={handleChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className={fixedInputClass+customClass}
              placeholder={placeholder}
              autoComplete={autoComplete}
            />
        </div>
    )
}

export default Input;