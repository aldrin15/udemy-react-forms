import { useCallback, useState } from 'react'

const inputHook = (defaultValue: string | Function, valFn: Function) => {
    const [inputVal, setInputVal] = useState(defaultValue)
    const [isEdit, setIsEdit] = useState(false)

    const isValueValid = valFn(inputVal)

    const handleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setInputVal((event.target as HTMLInputElement).value)
            setIsEdit(false)
        },
        [isEdit]
    )

    const handleInputBlur = useCallback(() => {
        setIsEdit(true)
    }, [isEdit])

    return {
        value: inputVal as string,
        handleInputBlur,
        handleInputChange,
        hasError: isEdit && !isValueValid,
    }
}

export default inputHook
