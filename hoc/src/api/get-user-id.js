const fakeId = (Math.random() < 0.5) ? 10 : 0

function getUserId() {
  return fakeId
}

export default getUserId