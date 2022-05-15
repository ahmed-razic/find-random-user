const RUG_URL = 'https://randomuser.me/api/'

export const getRandomUsers = async () => {
  const params = new URLSearchParams({
    exc: 'registered',
    results: '33',
  })

  const response = await fetch(`${RUG_URL}?${params}`)

  if (response.status === '404') {
    window.location = '/notfound'
  } else {
    const data = await response.json()
    return data.results
  }
}

export const getUser = async (users, id) => {
  const user = await users.filter((item) => item.login.uuid === id)
  console.log(user)
  return user
}
