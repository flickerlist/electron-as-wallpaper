import { BrowserWindow } from 'electron';

interface AttachOptions {
    /**
     * Makes the window transparent.
     * @default false
     */
    transparent?: boolean;
    /**
     * Forward mouse input-forwarding to the window.
     * @default false
     */
    forwardMouseInput?: boolean;
    /**
     * Forward keyboard input-forwarding to the window.
     * @default false
     */
    forwardKeyboardInput?: boolean;
}
declare const setTopWin: (win: BrowserWindow) => void;
/**
 * Set window behind desktop icons
 */
declare const attach: (win: BrowserWindow, options?: AttachOptions) => void;
/**
 * Remove a window from desktop icons
 */
declare const detach: (win: BrowserWindow) => void;
/**
 * Refresh desktop
 */
declare const refresh: () => void;

export { type AttachOptions, attach, detach, refresh, setTopWin };
