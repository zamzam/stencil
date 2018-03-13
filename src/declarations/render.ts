import * as d from './index';


export interface RenderOptions {
  canonicalLink?: boolean;
  collapseWhitespace?: boolean;
  inlineAssetsMaxSize?: number;
  inlineLoaderScript?: boolean;
  inlineStyles?: boolean;
  removeUnusedStyles?: boolean;
  ssrIds?: boolean;
  userAgent?: string;
  cookie?: string;
  direction?: string;
  language?: string;
}


export interface PrerenderConfig extends RenderOptions {
  crawl?: boolean;
  include?: PrerenderLocation[];
  prerenderDir?: string;
  maxConcurrent?: number;
  includePathHash?: boolean;
  includePathQuery?: boolean;
  hydrateComponents?: boolean;
}


export interface PrerenderLocation {
  url?: string;
  path?: string;
  status?: 'pending' | 'processing' | 'complete';
}


export interface HydrateResults {
  diagnostics: d.Diagnostic[];
  url?: string;
  host?: string;
  hostname?: string;
  port?: string;
  path?: string;
  pathname?: string;
  search?: string;
  query?: string;
  hash?: string;
  html?: string;
  styles?: string;
  anchors?: HydrateAnchor[];
  root?: HTMLElement;
  components?: HydrateComponent[];
  styleUrls?: string[];
  scriptUrls?: string[];
  imgUrls?: string[];
  opts?: HydrateOptions;
}


export interface HydrateComponent {
  tag: string;
  count?: number;
  depth?: number;
}


export interface HydrateAnchor {
  [attrName: string]: string;
}


export interface HydrateOptions extends RenderOptions {
  req?: {
    protocol: string;
    get: (key: string) => string;
    originalUrl: string;
  };
  html?: string;
  url?: string;
  path?: string;
  referrer?: string;
  userAgent?: string;
  cookie?: string;
  direction?: string;
  language?: string;
  isPrerender?: boolean;
  serializeHtml?: boolean;
  destroyDom?: boolean;
  collectAnchors?: boolean;
  console?: {
    [level: string]: (...msgs: string[]) => void;
  };
  hydrateComponents?: boolean;
}


export interface RendererApi {
  (
    oldVNode: d.VNode | Element,
    newVNode: d.VNode,
    isUpdate?: boolean,
    defaultSlots?: d.DefaultSlot,
    namedSlotsMap?: d.NamedSlots,
    encapsulation?: d.Encapsulation,
    ssrId?: number
  ): d.VNode;
}
