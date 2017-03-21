export const searchFormValidate = (values) => {
  const errors = {}
  if (!values.location || values.location.trim() === '') {
    errors.location = 'Location is required'
  }
  if (values.checkin && !values.checkout) {
    errors.checkout = 'Checkout needs to be set'
  }
  return errors
}
