"use strict"; 
 // Porting BY EMI INDO with c3addon-ide-plus
{
    const PLUGIN_ID = "MassiveCube_DrawBackground";

    // callMap Deprecated const PLUGIN_VERSION = "0.9.0.0";
    const PLUGIN_CATEGORY = "general";

    // callMap Deprecated let app = null;

    const SDK = globalThis.SDK;
const PLUGIN_CLASS = SDK.Plugins.MassiveCube_DrawBackground = class DrawBackground extends SDK.IPluginBase
    {
        constructor()
        {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("Massive-Cube");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetPluginType("world"); // mark as world plugin, which can draw

            this._info.SetIsResizable(true); // allow to be resized
            this._info.SetIsRotatable(true); // allow to be rotated
            this._info.SetHasImage(false);
            this._info.SetSupportsEffects(true); // allow effects
            this._info.SetMustPreDraw(true);
            this._info.SetIsSingleGlobal(false);
            this._info.SetCanBeBundled(true);
            this._info.SetIsTiled(false);

            this._info.AddCommonPositionACEs();
            this._info.AddCommonSizeACEs();
            this._info.AddCommonAngleACEs();
            this._info.AddCommonAppearanceACEs();
            this._info.AddCommonZOrderACEs();

            // Only support the newer C3 runtime
            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([
                    new SDK.PluginProperty("color", "background-color", [1, 0, 0]),

                    new SDK.PluginProperty("group", "grn1"),
                    new SDK.PluginProperty("link", "website",
            {
                linkCallback: function(sdkType)
                {
                    window.open("https://www.patreon.com/massivecube", "_blank");
                },
                callbackType: "once-for-type"
            })

                ]);

            SDK.Lang.PopContext(); // .properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}