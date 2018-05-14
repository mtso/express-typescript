import app from './app'

interface AddressInfo {
  port: number
}

const listener = app.listen(process.env.PORT, () => {
  let address = listener.address() as AddressInfo
  console.log(`Listening on port ${address.port}`)
})
