import useToggle from '../../hooks/useToggle';

const FormExtra = () => {
    const [check, toggleCheck] = useToggle('remember-me', false);

    return(
        <div className="flex items-center justify-between">
        <div className="flex items-center mt-4">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-primary focus:border-primary focus:ring-primary border-gray-300 rounded"
            onChange={toggleCheck}
            checked={check}
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember this device  
          </label>
        </div>

        <div className="text-sm mt-4 text-right">
          <a href="#" className="font-medium text-primary hover:text-indigo-600">
            Forgot your password?
          </a>
        </div>
      </div>

    )
}

export default FormExtra;