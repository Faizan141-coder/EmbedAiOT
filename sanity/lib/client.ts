import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token: "sktri4nMUbEQJ0DedxqBucPzqeEmCwYURHLOPZcvPyoJO3ZG52zdKo2E8PRhh4yAO3u7qlITP1b6pEIa9ZXRXu1QW9jXFM1ytrZzn0Nrh9EkQDtP0PPSwIhfIBvXJTorBlccSMgTuAYJm4vKj25EhyzZch0i0hjjeTKqUlG12rW8nLWwo5Nr"
})
