// export async function proxyRequestToRgs<TRequest, TResponse>(
//   providerName: string,
//   rgsUrlPath: string,
//   method: 'GET' | 'POST' | 'PUT' = 'POST',
//   requestBody?: TRequest,
//   platformUserToken?: string
// ): Promise<TResponse> {
//   const providerConfig = PROVIDER_CONFIGS[providerName]
//   if (!providerConfig) {
//     throw new RgsProxyError(`Unsupported provider: ${providerName}`, 400)
//   }

//   const url = `${providerConfig.rgsBaseUrl}${rgsUrlPath}`
//   const headers: Record<string, string> = {
//     'Content-Type': 'application/json',
//     ...(providerConfig.apiKey && { 'X-API-Key': providerConfig.apiKey }),
//     ...(platformUserToken && { 'X-User-Token': platformUserToken }),
//     ...providerConfig.extraHeaders,
//   }

//   try {
//     const response = await fetch(url, {
//       method,
//       headers,
//       body: requestBody ? JSON.stringify(requestBody) : undefined,
//     })

//     if (!response.ok) {
//       let errorData
//       try {
//         errorData = await response.json()
//       } catch (e) {
//         // If we can't parse the error response, use the status text
//         throw new RgsProxyError(
//           `RGS request failed with status ${response.status}: ${response.statusText}`,
//           response.status
//         )
//       }

//       throw new RgsProxyError(errorData.message || 'RGS request failed', response.status, errorData)
//     }

//     return (await response.json()) as TResponse
//   } catch (error) {
//     if (error instanceof RgsProxyError) {
//       throw error
//     }
//     throw new RgsProxyError(
//       error instanceof Error ? error.message : 'Unknown error occurred',
//       500,
//       { cause: error }
//     )
//   }
// }

// // Provider configuration type
interface GameProviderConfig {
  rgsBaseUrl: string
  apiKey?: string
  settingsPath: (providerGameId: string) => string
  spinPath: (providerGameId: string) => string
  providerUserIdPrefix?: string
  extraHeaders?: Record<string, string>
}

// // Provider configurations
export const PROVIDER_CONFIGS: Record<string, GameProviderConfig> = {
  RTG: {
    rgsBaseUrl: process.env['RTG_RGS_BASE_URL'] || 'https://gserver-rtg.redtiger.com/rtg/platform/game/',
    apiKey: process.env['RTG_API_KEY'],
    settingsPath: (providerGameId: string) => `/client/${providerGameId}/settings`,
    spinPath: (providerGameId: string) => `/client/${providerGameId}/spin`,
    providerUserIdPrefix: 'rtg_',
  },
  // Add other providers here
}
