import { AsyncThunkAction, unwrapResult } from "@reduxjs/toolkit"
import { useCallback } from "react"
import useAppDispatch from "./useAppDispatch"
export default function useUnwrapAsyncThunk() {
	const dispatch = useAppDispatch()
	return useCallback(
		<R extends any>(asyncThunk: AsyncThunkAction<R, any, any>): Promise<R> =>
			dispatch(asyncThunk).then(unwrapResult),
		[dispatch]
	)
}
