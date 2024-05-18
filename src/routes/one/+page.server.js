import { fail } from "@sveltejs/kit"

let data = []

export const load = () => {
  return { data }
}

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData()
    const name = formData.get('name')

    if (name.length < 3) {
      return fail(400, {
        error: true,
        message: 'Name must be at least two characters',
        name
      })
    }

    const id = crypto.randomUUID()

    const datum = {
      id,
      name,
    }

    data.push(datum)

    //throw redirect(303, '/')
    return { success: true }
  },

  delete: async ({ request }) => {
    const formData = await request.formData()
    const id = formData.get('id')

    data = data.filter(a => a.id != id)

    return { success: true }
  }
}
