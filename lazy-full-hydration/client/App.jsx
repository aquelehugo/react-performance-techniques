import React, { useEffect, useState } from 'react'

const useIsHydrated = () => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return isHydrated
}

const useEmailForm = () => {
  const [email, setEmail] = useState('')

  const onChangeEmail = (e) => setEmail(e.target.value)

  const onSubmitEmail = (e) => {
    e.preventDefault()

    alert(email ? `E-mail successfully submitted to ${email}` : 'Type your e-mail')
  }

  return {
    email,
    onChangeEmail,
    onSubmitEmail
  }
}

const App = () => {
  const isHydrated = useIsHydrated()
  const { email, onChangeEmail, onSubmitEmail } = useEmailForm()

  return (
    <div>
      <h1>React Lazy Full Hidration Example</h1>
      <div>
        <p>
          When using SSR, we render all elements server-side but the hydration of the entire app will not kick in until you interact with the form below.
        </p>
        <p>To achieve this, we add an focus listener to the form out of React. That listener is responsible for triggering the hydration and removing itself</p>
        <p>This technique is useful for applications that are mainly focused on displaying content but have a few interactive parts</p>
        <p>HYDRATED: <code>{isHydrated ? 'yes' : 'no'}</code></p>
      </div>
      <form onSubmit={onSubmitEmail} data-hydrateonfocus action="#">
        <input type="email" placeholder="user@provider.com" value={email} onChange={onChangeEmail} />
        <button type="submit">SEND</button>
      </form>
    </div>
  )
}

export default App
