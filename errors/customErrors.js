class CustomAPIError extends Error {
  constructor(message) {
    super(message)
  }
}

export default new CustomAPIError()
