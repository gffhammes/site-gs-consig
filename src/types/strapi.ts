export interface IImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}

export interface IImage {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: null;
      caption: null;
      width: number;
      height: number;
      formats: {
        large: IImageFormat;
        small: IImageFormat;
        medium: IImageFormat;
        thumbnail: IImageFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      provider_metadata: {
        public_id: string;
        resource_type: string;
      };
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface IButton {
  id: number;
  texto: string;
}

export interface IHomeBanner {
  id: number;
  texto: string;
  botao: IButton;
  foto: IImage;
}
