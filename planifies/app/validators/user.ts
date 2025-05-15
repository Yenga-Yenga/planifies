import vine from '@vinejs/vine'

export const signupValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(3),
    email: vine.string().email().minLength(254),
    password: vine.string().minLength(6),
  })
)
export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().minLength(254),
    password: vine.string().minLength(6),
  })
)
