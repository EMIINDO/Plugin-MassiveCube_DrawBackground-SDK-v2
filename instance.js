"use strict";

{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.MassiveCube_DrawBackground;

    PLUGIN_CLASS.Instance = class DrawBackgroundInstance extends SDK.IWorldInstanceBase
    {
        constructor(sdkType, inst)
        {
            super(sdkType, inst);
            this._col = this._inst.GetPropertyValue("background-color");
        }

        Release()
        {}
        OnCreate()
        {}

        OnPlacedInLayout()
        {
            // Initialise to size of image
            // this.OnMakeOriginalSize();
        }

        Draw(iRenderer, iDrawParams)
        {
            /*const texture = this.GetTexture();
			
			if (texture)
			{
				this._inst.ApplyBlendMode(iRenderer);
				iRenderer.SetTexture(texture);
				iRenderer.SetColor(this._inst.GetColor());
				iRenderer.Quad3(this._inst.GetQuad(), this.GetTexRect());
			}
			else
			{*/

            iRenderer.SetAlphaBlend();
            iRenderer.SetColorFillMode();
            iRenderer.SetColorRgba(this._col.getR(), this._col.getG(), this._col.getB(), this._inst.GetOpacity());
            iRenderer.Quad(this._inst.GetQuad());
        }

        /*
		IsOriginalSizeKnown()
		{
			return true;
		}
		
		GetOriginalWidth()
		{
			return this.GetObjectType().GetImage().GetWidth();
		}
		
		GetOriginalHeight()
		{
			return this.GetObjectType().GetImage().GetHeight();
		}
		
		OnMakeOriginalSize()
		{
			const image = this.GetObjectType().GetImage();
			this._inst.SetSize(image.GetWidth(), image.GetHeight());
		}
		*/

        HasDoubleTapHandler()
        {
            return true;
        }

        OnDoubleTap()
        {
            //this.GetObjectType().EditImage();
        }

        OnPropertyChanged(id, value)
        {
            this._col = this._inst.GetPropertyValue("background-color");
        }

        LoadC2Property(name, valueString)
        {
            return false;
        }
    };
}