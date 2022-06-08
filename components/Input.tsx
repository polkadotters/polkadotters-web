const Input = ({label, name, type='text', placeholder='', className=''}) => {
    return <div className={`relative flex flex-col gap-0 w-full ${className}`}>
        <label htmlFor={name} className={'absolute left-2 top-2 text-primary-700 font-display font-bold text-xl'}>{label}</label>
        <input width={"auto"} type={type} className={'w-full transition-all duration-200 border-2 ring-0 border-cream-300 px-0 text-2xl pt-10 px-2 py-2 bg-white focus:border-primary-500 focus:ring-0 ring-cream-900 outline-cream-900'} placeholder={placeholder} />
    </div>
}

export default Input;