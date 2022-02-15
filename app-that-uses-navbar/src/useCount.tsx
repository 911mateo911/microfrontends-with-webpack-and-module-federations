import { useState } from "react"

export const useCount = () => {
    const [state, setState] = useState(0);

    const increase = () => setState(state + 1);

    return [state, increase]
}
