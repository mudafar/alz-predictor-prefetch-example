import React from "react"
import ContentLoader from "react-content-loader"

export default function Loader(props) {
  return (
    <ContentLoader
      speed={2}
      width={476}
      height={145}
      viewBox="0 0 476 145"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="3" y="7" rx="3" ry="3" width="88" height="6" />
      <rect x="1" y="41" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <rect x="3" y="25" rx="3" ry="3" width="178" height="6" />
      <rect x="2" y="100" rx="3" ry="3" width="88" height="6" />
      <rect x="0" y="134" rx="3" ry="3" width="52" height="6" />
      <rect x="-2" y="114" rx="3" ry="3" width="178" height="6" />
    </ContentLoader>
  )
}
