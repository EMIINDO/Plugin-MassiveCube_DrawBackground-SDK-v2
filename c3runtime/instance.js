"use strict";

{
    const C3 = globalThis.C3;
    const tempQuad = new C3.Quad();

    C3.Plugins.MassiveCube_DrawBackground.Instance = class DrawingInstance extends globalThis.ISDKWorldInstanceBase
    {
        constructor()
        {
            super();

            const properties = this._getInitProperties();
            this._color = properties[0];

            this._winfo = getBoundingQuad();

        }

        _release()
        {
            super._release();
        }

        _draw(renderer)
        {
            const wi = getBoundingQuad();
            const quad = wi.GetBoundingQuad();
            renderer.SetAlphaBlend();
            renderer.SetColorFillMode();
            renderer.SetColorRgba(this._color[0], this._color[1], this._color[2], wi.GetOpacity());
            renderer.Quad(quad);
        }

        _saveToJson()
        {
            return {};
        }

        _loadFromJson(o)
        {}
    };

}