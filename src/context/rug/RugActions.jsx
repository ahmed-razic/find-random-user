const RUG_URL = 'https://randomuser.me/api/'

export const getRandomMale = async () => {
  const params = new URLSearchParams({
    gender: 'male',
    exc: 'registered, login',
  })

  const response = await fetch(`${RUG_URL}?${params}`)

  if (response.status === '404') {
    window.location = '/notfound'
  } else {
    const data = await response.json()
    return data.results
  }
}

export const getRandomFemale = async () => {
  const params = new URLSearchParams({
    gender: 'female',
    exc: 'registered, login',
  })

  const response = await fetch(`${RUG_URL}?${params}`)

  if (response.status === '404') {
    window.location = '/notfound'
  } else {
    const data = await response.json()
    return data.results
  }
}
