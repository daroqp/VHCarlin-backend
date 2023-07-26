import { type Router } from 'express'

export default (router: Router): void => {
  router.get('/', (req, res) => res.json({ message: 'successfully' }))
}
