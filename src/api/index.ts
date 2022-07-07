class API {

  BASE_URL = "https://europe-west1-mackee-news.cloudfunctions.net"

  private async _get(uri, body) {
    const response = await fetch(`${this.BASE_URL}${uri}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()

    if (response.status >= 400)
      throw data

    return data
  }

  private async _post(uri, body) {
    const response = await fetch(`${this.BASE_URL}${uri}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()

    if (response.status >= 400)
      throw data

    return data
  }

  async createAccount({ first_name, last_name, email, password }) {
    return await this._post("/accounts", { first_name, last_name, email, password })
  }

  async login({ email, password }) {
    return await this._post("/auth/login", { email, password })
  }

}

export default new API()
