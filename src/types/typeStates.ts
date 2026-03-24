import type { userAuth } from "../utils/api";

export type stateApp = { status: 'success', data: userAuth} | { status: 'idle' } | {status:'none'}
export type stateLoad = { status: 'idle' } | { status: 'load' }
export type stateForm = { status: 'login' } | { status: 'register' } | { status: 'success'; data: string }
export type stateMessage = { status: 'idle' } | { status: 'success'; data: string } | { status: 'error'; error: string }
