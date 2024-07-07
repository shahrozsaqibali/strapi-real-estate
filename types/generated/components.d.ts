import type { Schema, Attribute } from '@strapi/strapi';

export interface BuyingreasonBuyingreason extends Schema.Component {
  collectionName: 'components_buyingreason_buyingreasons';
  info: {
    displayName: 'buyingreason';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    details: Attribute.Blocks;
  };
}

export interface FurtherdetailsFurtherdetails extends Schema.Component {
  collectionName: 'components_furtherdetails_furtherdetails';
  info: {
    displayName: 'furtherdetails';
    description: '';
  };
  attributes: {
    details: Attribute.Blocks & Attribute.Required;
  };
}

export interface KeydetailsKeydetails extends Schema.Component {
  collectionName: 'components_keydetails_keydetails';
  info: {
    displayName: 'keydetails';
    description: '';
  };
  attributes: {
    map: Attribute.JSON &
      Attribute.Required &
      Attribute.CustomField<'plugin::google-maps.location-picker'>;
    details: Attribute.Blocks & Attribute.Required;
  };
}

export interface ProjectassetsProjectAssets extends Schema.Component {
  collectionName: 'components_projectassets_project_assets';
  info: {
    displayName: 'ProjectAssets';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    assets: Attribute.Media & Attribute.Required;
  };
}

export interface ProjecthighlightProjecthighlights extends Schema.Component {
  collectionName: 'components_projecthighlight_projecthighlights';
  info: {
    displayName: 'projecthighlights';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    details: Attribute.Blocks & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'buyingreason.buyingreason': BuyingreasonBuyingreason;
      'furtherdetails.furtherdetails': FurtherdetailsFurtherdetails;
      'keydetails.keydetails': KeydetailsKeydetails;
      'projectassets.project-assets': ProjectassetsProjectAssets;
      'projecthighlight.projecthighlights': ProjecthighlightProjecthighlights;
    }
  }
}
