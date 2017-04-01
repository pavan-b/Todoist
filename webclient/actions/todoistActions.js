export function valueOnChange(value) {
  return {
    type: "ON_CHANGE",
    payload: value
  }
}

export function valueOnSubmit(value) {
  return {
    type: "ON_SUBMIT",
    payload: value
  }
}
