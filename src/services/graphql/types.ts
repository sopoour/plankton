export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = _Node & {
  __typename?: 'Asset';
  _id: Scalars['ID']['output'];
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetCursorCollection = {
  __typename?: 'AssetCursorCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  generellCollection?: Maybe<GenerellCollection>;
  generellCursorCollection?: Maybe<GenerellCursorCollection>;
  releaseCollection?: Maybe<ReleaseCollection>;
  releaseCursorCollection?: Maybe<ReleaseCursorCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsGenerellCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsGenerellCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsReleaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsReleaseCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CursorPages = {
  __typename?: 'CursorPages';
  next?: Maybe<Scalars['String']['output']>;
  prev?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryCursorCollection = {
  __typename?: 'EntryCursorCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/generell) */
export type Generell = Entry & _Node & {
  __typename?: 'Generell';
  _id: Scalars['ID']['output'];
  about?: Maybe<Scalars['String']['output']>;
  aboutBild?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  datenschutz?: Maybe<Scalars['String']['output']>;
  heroVideo?: Maybe<Asset>;
  impressum?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<GenerellLinkingCollections>;
  soMeLinks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  version?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/generell) */
export type GenerellAboutArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/generell) */
export type GenerellAboutBildArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/generell) */
export type GenerellDatenschutzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/generell) */
export type GenerellHeroVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/generell) */
export type GenerellImpressumArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/generell) */
export type GenerellLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/generell) */
export type GenerellSoMeLinksArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/generell) */
export type GenerellSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/generell) */
export type GenerellVersionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenerellCollection = {
  __typename?: 'GenerellCollection';
  items: Array<Maybe<Generell>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type GenerellCursorCollection = {
  __typename?: 'GenerellCursorCollection';
  items: Array<Maybe<Generell>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type GenerellFilter = {
  AND?: InputMaybe<Array<InputMaybe<GenerellFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GenerellFilter>>>;
  about?: InputMaybe<Scalars['String']['input']>;
  aboutBild_exists?: InputMaybe<Scalars['Boolean']['input']>;
  about_contains?: InputMaybe<Scalars['String']['input']>;
  about_exists?: InputMaybe<Scalars['Boolean']['input']>;
  about_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  about_not?: InputMaybe<Scalars['String']['input']>;
  about_not_contains?: InputMaybe<Scalars['String']['input']>;
  about_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  datenschutz?: InputMaybe<Scalars['String']['input']>;
  datenschutz_contains?: InputMaybe<Scalars['String']['input']>;
  datenschutz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  datenschutz_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  datenschutz_not?: InputMaybe<Scalars['String']['input']>;
  datenschutz_not_contains?: InputMaybe<Scalars['String']['input']>;
  datenschutz_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  impressum?: InputMaybe<Scalars['String']['input']>;
  impressum_contains?: InputMaybe<Scalars['String']['input']>;
  impressum_exists?: InputMaybe<Scalars['Boolean']['input']>;
  impressum_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  impressum_not?: InputMaybe<Scalars['String']['input']>;
  impressum_not_contains?: InputMaybe<Scalars['String']['input']>;
  impressum_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  soMeLinks_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  soMeLinks_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  soMeLinks_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  soMeLinks_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_exists?: InputMaybe<Scalars['Boolean']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GenerellLinkingCollections = {
  __typename?: 'GenerellLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type GenerellLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type GenerellLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum GenerellOrder {
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC'
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/konzert) */
export type Konzert = Entry & _Node & {
  __typename?: 'Konzert';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  datum?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<KonzertLinkingCollections>;
  ort?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  ticketLink?: Maybe<Scalars['String']['output']>;
  ticketNote?: Maybe<Scalars['String']['output']>;
  venue?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/konzert) */
export type KonzertDatumArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/konzert) */
export type KonzertLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/konzert) */
export type KonzertOrtArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/konzert) */
export type KonzertTicketLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/konzert) */
export type KonzertTicketNoteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/konzert) */
export type KonzertVenueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type KonzertCollection = {
  __typename?: 'KonzertCollection';
  items: Array<Maybe<Konzert>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type KonzertCursorCollection = {
  __typename?: 'KonzertCursorCollection';
  items: Array<Maybe<Konzert>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type KonzertFilter = {
  AND?: InputMaybe<Array<InputMaybe<KonzertFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<KonzertFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  datum?: InputMaybe<Scalars['DateTime']['input']>;
  datum_exists?: InputMaybe<Scalars['Boolean']['input']>;
  datum_gt?: InputMaybe<Scalars['DateTime']['input']>;
  datum_gte?: InputMaybe<Scalars['DateTime']['input']>;
  datum_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  datum_lt?: InputMaybe<Scalars['DateTime']['input']>;
  datum_lte?: InputMaybe<Scalars['DateTime']['input']>;
  datum_not?: InputMaybe<Scalars['DateTime']['input']>;
  datum_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  ort?: InputMaybe<Scalars['String']['input']>;
  ort_contains?: InputMaybe<Scalars['String']['input']>;
  ort_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ort_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ort_not?: InputMaybe<Scalars['String']['input']>;
  ort_not_contains?: InputMaybe<Scalars['String']['input']>;
  ort_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  ticketLink?: InputMaybe<Scalars['String']['input']>;
  ticketLink_contains?: InputMaybe<Scalars['String']['input']>;
  ticketLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ticketLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ticketLink_not?: InputMaybe<Scalars['String']['input']>;
  ticketLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  ticketLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ticketNote?: InputMaybe<Scalars['String']['input']>;
  ticketNote_contains?: InputMaybe<Scalars['String']['input']>;
  ticketNote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ticketNote_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ticketNote_not?: InputMaybe<Scalars['String']['input']>;
  ticketNote_not_contains?: InputMaybe<Scalars['String']['input']>;
  ticketNote_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venue?: InputMaybe<Scalars['String']['input']>;
  venue_contains?: InputMaybe<Scalars['String']['input']>;
  venue_exists?: InputMaybe<Scalars['Boolean']['input']>;
  venue_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venue_not?: InputMaybe<Scalars['String']['input']>;
  venue_not_contains?: InputMaybe<Scalars['String']['input']>;
  venue_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type KonzertLinkingCollections = {
  __typename?: 'KonzertLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type KonzertLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type KonzertLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum KonzertOrder {
  DatumAsc = 'datum_ASC',
  DatumDesc = 'datum_DESC',
  OrtAsc = 'ort_ASC',
  OrtDesc = 'ort_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TicketLinkAsc = 'ticketLink_ASC',
  TicketLinkDesc = 'ticketLink_DESC',
  TicketNoteAsc = 'ticketNote_ASC',
  TicketNoteDesc = 'ticketNote_DESC',
  VenueAsc = 'venue_ASC',
  VenueDesc = 'venue_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/liveSession) */
export type LiveSession = Entry & _Node & {
  __typename?: 'LiveSession';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<LiveSessionLinkingCollections>;
  sys: Sys;
  titel?: Maybe<Scalars['String']['output']>;
  videoLink?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/liveSession) */
export type LiveSessionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/liveSession) */
export type LiveSessionTitelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/liveSession) */
export type LiveSessionVideoLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LiveSessionCollection = {
  __typename?: 'LiveSessionCollection';
  items: Array<Maybe<LiveSession>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LiveSessionCursorCollection = {
  __typename?: 'LiveSessionCursorCollection';
  items: Array<Maybe<LiveSession>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type LiveSessionFilter = {
  AND?: InputMaybe<Array<InputMaybe<LiveSessionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LiveSessionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  titel?: InputMaybe<Scalars['String']['input']>;
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  titel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titel_not?: InputMaybe<Scalars['String']['input']>;
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoLink?: InputMaybe<Scalars['String']['input']>;
  videoLink_contains?: InputMaybe<Scalars['String']['input']>;
  videoLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoLink_not?: InputMaybe<Scalars['String']['input']>;
  videoLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  videoLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LiveSessionLinkingCollections = {
  __typename?: 'LiveSessionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type LiveSessionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LiveSessionLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum LiveSessionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC',
  VideoLinkAsc = 'videoLink_ASC',
  VideoLinkDesc = 'videoLink_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  assetCursorCollection?: Maybe<AssetCursorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  generell?: Maybe<Generell>;
  generellCollection?: Maybe<GenerellCollection>;
  generellCursorCollection?: Maybe<GenerellCursorCollection>;
  konzert?: Maybe<Konzert>;
  konzertCollection?: Maybe<KonzertCollection>;
  konzertCursorCollection?: Maybe<KonzertCursorCollection>;
  liveSession?: Maybe<LiveSession>;
  liveSessionCollection?: Maybe<LiveSessionCollection>;
  liveSessionCursorCollection?: Maybe<LiveSessionCursorCollection>;
  release?: Maybe<Release>;
  releaseCollection?: Maybe<ReleaseCollection>;
  releaseCursorCollection?: Maybe<ReleaseCursorCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAssetCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryGenerellArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGenerellCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GenerellOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GenerellFilter>;
};


export type QueryGenerellCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GenerellOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GenerellFilter>;
};


export type QueryKonzertArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryKonzertCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<KonzertOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<KonzertFilter>;
};


export type QueryKonzertCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<KonzertOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<KonzertFilter>;
};


export type QueryLiveSessionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLiveSessionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LiveSessionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LiveSessionFilter>;
};


export type QueryLiveSessionCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LiveSessionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LiveSessionFilter>;
};


export type QueryReleaseArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryReleaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ReleaseOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ReleaseFilter>;
};


export type QueryReleaseCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ReleaseOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ReleaseFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/release) */
export type Release = Entry & _Node & {
  __typename?: 'Release';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  coverBild?: Maybe<Asset>;
  linkedFrom?: Maybe<ReleaseLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/release) */
export type ReleaseCoverBildArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/release) */
export type ReleaseLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/robuchbniafj/content_types/release) */
export type ReleaseTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReleaseCollection = {
  __typename?: 'ReleaseCollection';
  items: Array<Maybe<Release>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ReleaseCursorCollection = {
  __typename?: 'ReleaseCursorCollection';
  items: Array<Maybe<Release>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type ReleaseFilter = {
  AND?: InputMaybe<Array<InputMaybe<ReleaseFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ReleaseFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  coverBild_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReleaseLinkingCollections = {
  __typename?: 'ReleaseLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type ReleaseLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ReleaseLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ReleaseOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte?: InputMaybe<Scalars['String']['input']>;
  /** Preview content starting from a given timestamp */
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};
