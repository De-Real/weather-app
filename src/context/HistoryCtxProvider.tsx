import React, { useState, useEffect } from 'react'

import HistoryContext from "./history-ctx";

const HistoryContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, setState] = useState<string[]>([]);

	useEffect(() => {
		const value = localStorage.getItem('historyRequests');
		if (value) {
			setState(JSON.parse(value));
		}

	}, [])

	useEffect(() => {
		localStorage.setItem('historyRequests', JSON.stringify(state))
	}, [state])

	const addHistoryRequest = (request: string) => {
		setState((curState) => {
			if (curState.includes(request)) {
				return curState;
			} else {
				return [...curState, request];
			}
		});
	}

	const value = {
		historyRequests: state,
		addHistoryRequest,
	}

	return <HistoryContext.Provider value={value}>
		{children}
	</HistoryContext.Provider>
}

export default HistoryContextProvider;