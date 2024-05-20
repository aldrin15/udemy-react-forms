import { isEmail, isNotEmpty, hasMinLength } from '../../util/validation'
import Input from '../Input/Input'
import inputHook from '../../hooks/input'

const StateLogin = () => {
    const {
        value: emailValue,
        handleInputBlur: handleEmailBlur,
        handleInputChange: handleEmailChange,
        hasError: emailHasError,
    } = inputHook('', (value: string) => {
        return isEmail(value) && isNotEmpty(value)
    })

    const {
        value: passwordValue,
        handleInputBlur: handlePasswordBlur,
        handleInputChange: handlePasswordChange,
        hasError: passwordHasError,
    } = inputHook('', (value: string) => hasMinLength(value, 6))

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        if (emailHasError || passwordHasError) {
            return
        }

        console.log('Email: ', emailValue)
        console.log('Password: ', passwordValue)
    }

    return (
        <form>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    id="email"
                    label="email"
                    type="email"
                    name="email"
                    value={emailValue}
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    error={emailHasError && 'Please enter a valid email'}
                />

                <Input
                    id="password"
                    label="password"
                    type="password"
                    name="password"
                    value={passwordValue}
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                    error={passwordHasError && 'Please enter a valid password'}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button type="button" className="button" onClick={handleSubmit}>
                    Login
                </button>
            </p>
        </form>
    )
}

export default StateLogin
