class API {

  BASE_URL = "https://europe-west1-mackee-news.cloudfunctions.net"

  private async _fetch(uri: string, method: string, body?: object, token?: string) {
    const response = await fetch(`${this.BASE_URL}${uri}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token ? {
          "Authorization": `Bearer ${token}`
        } : {})
      },
      body: body && JSON.stringify(body)
    })

    const data = await response.json()

    if (response.status >= 400)
      throw data

    return data
  }

  private async _get(uri: string, token?: string) {
    return await this._fetch(uri, "GET", undefined, token)
  }

  private async _post(uri: string, body?: object, token?: string) {
    return await this._fetch(uri, "POST", body, token)
  }

  private async _put(uri: string, body?: object, token?: string) {
    return await this._fetch(uri, "PUT", body, token)
  }

  private async _patch(uri: string, body?: object, token?: string) {
    return await this._fetch(uri, "PATCH", body, token)
  }

  private async _delete(uri: string, body?: object, token?: string) {
    return await this._fetch(uri, "DELETE", body, token)
  }

  async createAccount(first_name: string, last_name: string, email: string, password: string) {
    return await this._post("/accounts", { first_name, last_name, email, password })
  }

  async getMe(token: string) {
    return await this._get("/auth/me", token)
  }

  async login(email: string, password: string) {
    return await this._post("/auth/login", { email, password })
  }

  async refreshToken(token: string) {
    return await this._put(`/auth/token/${encodeURIComponent(token)}/refresh`)
  }

  async getFeed(token: string) {
    return await this._get("/posts/feed", token)
  }

}

export default new API()
