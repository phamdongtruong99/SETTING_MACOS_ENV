import { useMemo } from "react"
import useTypedSelector from "./useTypedSelector"

export default function useCacheSelector<S extends (...args: any[]) => any, P>(
	selector: () => S,
	props?: P
): ReturnType<S> {
	const memoSelector = useMemo<S>(selector, [])
	return useTypedSelector((state) => memoSelector(state, props))
}
