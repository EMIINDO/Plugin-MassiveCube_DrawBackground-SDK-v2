"use strict";

{
    const SDK = globalThis.SDK;
const PLUGIN_CLASS = SDK.Plugins.MassiveCube_DrawBackground;

    PLUGIN_CLASS.Type = class DrawBackgroundType extends SDK.ITypeBase
    {
        constructor(sdkPlugin, iObjectType)
        {
            super(sdkPlugin, iObjectType);
        }
    };
}