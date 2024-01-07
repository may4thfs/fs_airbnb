import { memo } from "react"

const detail = memo(() => {
  return <div>detail</div>
})

detail.displayName = "detail"

export default detail
