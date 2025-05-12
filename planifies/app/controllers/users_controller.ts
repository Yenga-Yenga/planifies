import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async showSignup({ view }: HttpContext) {
    return view.render('security/signup')
  }
}
