import fsMod from 'node:fs';
import type { Plugin as VitePlugin } from 'vite';
import type { AstroIntegration, AstroSettings } from '../@types/astro.js';
export default function astroActions({ fs, settings, }: {
    fs?: typeof fsMod;
    settings: AstroSettings;
}): AstroIntegration;
/**
 * This plugin is responsible to load the known file `actions/index.js` / `actions.js`
 * If the file doesn't exist, it returns an empty object.
 * @param settings
 */
export declare function vitePluginUserActions({ settings }: {
    settings: AstroSettings;
}): VitePlugin;
