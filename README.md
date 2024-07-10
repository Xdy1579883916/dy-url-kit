# URL 处理工具

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]

## 功能描述
这是一个 TypeScript 工具，用于解析 URL 并提供详细的 URL 信息。

## 函数列表

### parseURLProtocol
将 URL 转换为带有协议的完整 URL。

**参数：**
- `url` (string): 需要解析的 URL 字符串。
- `protocol` (string, 默认值 'https:'): 如果 URL 不包含协议，则添加此协议。

**返回值：**
- 返回带有正确协议的 URL 字符串。

### TParsesURLRes
定义了解析 URL 后返回的对象结构。

**属性：**
- `href`: 完整的 URL。
- `url`: 格式化后的 URL。
- `origin`: URL 的起源，包括协议和主机名。
- `protocol`: URL 的协议部分。
- `host`: URL 的主机名。
- `port`: URL 的端口号。
- `pathname`: URL 的路径。
- `search`: URL 的查询字符串。
- `hash`: URL 的哈希部分。
- `params`: 查询字符串解析后的参数对象。
- `file`: URL 路径中的文件名。
- `domain`: URL 的顶级域名。

### parseURL
解析 URL 并返回详细的 URL 组件。

**参数：**
- `url` (string): 需要解析的 URL 字符串。
- `baseOrigin` (string | URL, 可选): 基础 URL，用于解析相对 URL。

**返回值：**
- 返回一个 `TParsesURLRes` 类型的对象，包含 URL 的各个组件。

## 示例代码

```js
import { parseURL } from 'dy-url-kit'

// 1. parseURL("https://github.com/Xdy1579883916/url-kit")
// 2. parseURL("//github.com/Xdy1579883916/url-kit")
// 3. parseURL("/Xdy1579883916/url-kit", "https://github.com/")

// 他们的输出都是下面的结果

// {
//   "href": "https://github.com/Xdy1579883916/url-kit",
//   "url": "https://github.com/Xdy1579883916/url-kit",
//   "origin": "https://github.com",
//   "protocol": "https:",
//   "host": "github.com",
//   "port": "",
//   "pathname": "/Xdy1579883916/url-kit",
//   "search": "",
//   "hash": "",
//   "params": {},
//   "file": "url-kit",
//   "domain": "github.com"
// }
```

## License

[MIT](./LICENSE) License © 2024-PRESENT [XiaDeYu](https://github.com/Xdy1579883916)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/url-kit?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/url-kit
[npm-downloads-src]: https://img.shields.io/npm/dm/url-kit?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/url-kit
[bundle-src]: https://img.shields.io/bundlephobia/minzip/url-kit?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=url-kit
[license-src]: https://img.shields.io/github/license/Xdy1579883916/url-kit.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/Xdy1579883916/url-kit/blob/main/LICENSE
