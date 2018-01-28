import * as React from "react"

export default (size: number) => (
  <svg viewBox="0 0 64 64" width={size} height={size}>
    <path className="path1"
      fill="#656566"
      d="M0 32.331c0.057-3.521 16.146-18.886 31.937-18.869s32.121 15.269 32.063 18.869c-0.059 3.6-16.080 18.843-32.063 18.859s-31.994-15.339-31.937-18.859zM32.097 43.94c6.657 0 12.053-5.396 12.053-12.053s-5.396-12.053-12.053-12.053c-6.657 0-12.053 5.396-12.053 12.053s5.396 12.053 12.053 12.053z" />
    <path className="path2"
      fill="#656566"
      d="M32.209 38.301c3.535 0 6.4-2.865 6.4-6.4s-2.865-6.4-6.4-6.4c-3.535 0-6.4 2.865-6.4 6.4s2.865 6.4 6.4 6.4z" />
  </svg>
)
