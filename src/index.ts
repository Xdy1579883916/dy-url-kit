export function parseURLProtocol(url: string, protocol = 'https:') {
  if (/^\/\//.test(url))
    return protocol + url
  else if (!/:\/\//.test(url))
    return `${protocol}//${url}`
  else
    return url
}

export interface TParsesURLRes {
  href: string
  url: string
  origin: string
  protocol: string
  host: string
  port: string
  pathname: string
  search: string
  hash: string
  params: any
  file: string
  domain: string
}

export function parseURL(url: string, baseOrigin?: string | URL | undefined): TParsesURLRes {
  const getHostName = (url: string): string | null => {
    const match = url.match(/:\/\/(www\d?\.)?(.[^/:]+)/i)
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0)
      return match[2]
    else return null
  }
  const getDomain = (url: string): string => {
    const hostName = getHostName(url)
    let domain = hostName

    if (hostName != null) {
      const parts = hostName.split('.').reverse()
      if (parts != null && parts.length > 1) {
        domain = `${parts[1]}.${parts[0]}`
        if (hostName.toLowerCase().includes('.co.uk') && parts.length > 2)
          domain = `${parts[2]}.${domain}`
      }
    }
    return domain || ''
  }

  const createURL = () => {
    try {
      return new URL(url, baseOrigin || location.origin)
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (e) {
      return new URL(parseURLProtocol(url))
    }
  }
  const a = createURL()
  return {
    href: a.href,
    url: `${a.protocol}//${a.hostname}${a.pathname.replace(/^([^/])/, '/$1')}${a.search}`,
    origin: `${a.protocol}//${a.hostname}`,
    protocol: a.protocol,
    host: a.hostname,
    port: a.port,
    pathname: a.pathname.replace(/^([^/])/, '/$1'),
    search: a.search,
    hash: a.hash.replace('#', ''),
    params: (function () {
      const ret: any = {} as object
      const seg = a.search.replace(/^\?/, '').split('&')
      const len = seg.length
      let i = 0

      for (; i < len; i++) {
        if (!seg[i])
          continue

        const [key, value] = seg[i].split('=')
        ret[key] = value
      }
      return ret
    })(),
    file: (a.pathname.match(/\/([^/?#]+)$/) || [''])[1],
    domain: getDomain(a.href),
  }
}
