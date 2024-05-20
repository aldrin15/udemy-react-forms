const Input = ({
    label,
    id,
    error,
    ...props
}: {
    id: string
    label: string
    type: string
    name: string
    value: string
    error: string | boolean
    onBlur: () => void
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}): JSX.Element => {
    return (
        <div className="control no-margin">
            <label htmlFor="email">{label}</label>
            <input
                id={id}
                type={props.type}
                name={props.name}
                value={props.value}
                onBlur={props.onBlur}
                onChange={props.onChange}
            />
            <div className="control-error">{error && <p>{error}</p>}</div>
        </div>
    )
}

export default Input
