import { useRef, useState } from 'react'

const UseStateLogin = () => {
    const [emailIsInvalid, setEmailIsInvalid] = useState(false)

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredEmail = emailRef.current?.value
        const enteredPassword = passwordRef.current?.value

        const emailIsValid = enteredEmail?.includes('@')

        console.log('Creds: ', enteredEmail + ' ' + enteredPassword)
        console.log('emailIsValid: ', !emailIsValid)

        if (!emailIsValid) {
            setEmailIsInvalid(true)

            return
        }

        setEmailIsInvalid(false)

        console.log('Sending HTTP request...')
    }

    return (
        <form>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        ref={emailRef}
                    />
                    <div className="control-error">
                        {emailIsInvalid && (
                            <p>Please enter a valid email address</p>
                        )}
                    </div>
                </div>
                <div className="control no-margin">
                    <label htmlFor="email">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        ref={passwordRef}
                    />
                </div>
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

export default UseStateLogin
