import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { loginValidator, signupValidator } from '#validators/user'

export default class UsersController {
  async showSignup({ view }: HttpContext) {
    return view.render('security/signup')
  }
  async showLogin({ view }: HttpContext) {
    return view.render('security/login')
  }
  public async register({ request, response }: HttpContext) {
    const data = await request.validateUsing(signupValidator)

    await User.create({
      email: data.email,
      password: data.password,
      fullName: data.fullName,
    })
    return response.redirect('/login')
  }
  public async login({ auth, request, response }: HttpContext) {
    const data = await request.validateUsing(loginValidator)

    const user = await User.findByOrFail('email', data.email)
    try {
      if (!(await user.verifyPassword(data.password))) {
        return response.badRequest('Invalid credentials')
      }
      await auth.use('web').login(user)
    } catch {
      return response.badRequest('Invalid credentials')
    }
    return response.redirect('/dashboard')
  }
}
