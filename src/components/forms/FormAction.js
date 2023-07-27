const FormAction = ({handleSubmit, type='Button', action='submit', text}) => {

    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
                onSubmit={handleSubmit}
            >
                {text}
            </button>
            :
            <></>
        }
        </>
    )
}

export default FormAction;