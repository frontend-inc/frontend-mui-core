import React, { useContext } from 'react'
import { LoginForm, AuthScreen, Loader } from '../..'
import { useAuth } from 'frontend-js'
import { useRouter } from 'next/router'
import { AppContext } from '../../../context'

export type LoginProps = {
	title?: string
	subtitle?: string
	forgotPasswordUrl?: string
	signupUrl?: string
	oneTimePasswordUrl?: string
	disableUsername?: boolean
	enableGoogle?: boolean
  navigateUrl: string
}

const Login: React.FC<LoginProps> = (props) => {

  const { clientUrl } = useContext(AppContext)
 
	const {
		navigateUrl,
		title = 'Sign In',
		subtitle = 'Log in to your account',
		forgotPasswordUrl,
		signupUrl,
		oneTimePasswordUrl,
		enableGoogle = false,
	} = props || {}

	const router = useRouter()
	const { errors, loading, user, handleChange, login } = useAuth()

	const handleSubmit = async () => {
		let resp = await login(user)
		if (resp?.id) {
			router.push(`${clientUrl}${navigateUrl}`)
		}
	}

	const handleGoogleSuccess = () => {
		router.push(`${clientUrl}${navigateUrl}`)
	}

	const handleSignup = () => {
    if(signupUrl){
      router.push(`${clientUrl}${signupUrl}`)
    }
	}

	const handleForgotPassword = () => {
    if(forgotPasswordUrl){
      router.push(`${clientUrl}${forgotPasswordUrl}`)
    }
	}

	const handleOneTimePassword = () => {
    if(oneTimePasswordUrl){
      router.push(`${clientUrl}${oneTimePasswordUrl}`)
    }
	}

	return (
		<>
			<Loader loading={loading} />
      { !loading && (
        <AuthScreen title={title} subtitle={subtitle}>
          <LoginForm
            errors={errors}
            loading={loading}
            user={user}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleOneTimePassword={oneTimePasswordUrl ? handleOneTimePassword : false}
            handleSignup={signupUrl ? handleSignup : false}
            handleForgotPassword={forgotPasswordUrl ? handleForgotPassword : false}
            enableGoogle={enableGoogle}
            handleGoogleSuccess={handleGoogleSuccess}
          />
        </AuthScreen>
      )}      
		</>
	)
}

export default Login
