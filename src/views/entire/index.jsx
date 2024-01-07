import { memo } from "react"

const entire = memo(() => {
  return <div>entire</div>
})

entire.displayName = "entire"

export default entire
