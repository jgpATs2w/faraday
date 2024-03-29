// Copyright 2002-2013, University of Colorado Boulder

/*
 * RequireJS configuration file for the 'Faraday's Electromagnetic Lab' sim.
 * Paths are relative to the location of this file.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
require.config(
  {
    deps: ['main'],

    config: {
      i18n: {
        locale: 'en_us' // test i18n by changing this
      }
    },

    paths: {
      // contrib
      easel: '../contrib/easel-0.5.0',
      i18n: '../contrib/i18n-2.0.2',
      image: '../contrib/image-0.2.1',
      tpl: '../contrib/tpl-0.2',
    },

    shim: {
      easel: {
        exports: 'createjs'
      }
    },

    urlArgs: new Date().getTime()  // cache buster to make browser refresh load all included scripts
  } );