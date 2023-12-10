//  this config type is used for loadRemoteModule in Components (Usually for angular/elements in this POC)
export type WrapperConfig = {
  remoteName: string;
  exposedModule: string;
  elementName: string;
};

export const initWrapperConfig: WrapperConfig = {
  remoteName: '',
  exposedModule: '',
  elementName: '',
};
