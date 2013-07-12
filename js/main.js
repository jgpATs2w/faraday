// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main entry point for the 'Faraday's Electromagnetic Lab' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
require(
  [
    'easel',
    'i18n!../nls/faraday-strings',
    'common/view/CanvasQuirks',
    'common/util/Logger',
    'common/view/ModelViewTransform2D',
    'common/view/PrototypeDialog',
    'model/FaradayModel',
    'view/OptionsPanel',
    'view/FaradayStage'
  ],
  function( Easel, strings, CanvasQuirks, Logger, ModelViewTransform2D, PrototypeDialog, FaradayModel, OptionsPanel, FaradayStage ) {

    Logger.enabled = true;

    // Title --------------------------------------------------------------------

    $( 'title' ).html( strings.title );

    // Canvas --------------------------------------------------------------------

    var canvas = document.getElementById( 'faraday-canvas' );
    CanvasQuirks.fixTextCursor( canvas );

    // MVC --------------------------------------------------------------------

    var model = new FaradayModel();
    var stage = new FaradayStage( canvas, model );
    OptionsPanel.init( strings, model, stage );

    // Animation loop ----------------------------------------------------------

    Easel.Ticker.addListener( model );
    Easel.Ticker.addListener( stage );
    Easel.Ticker.addListener( stage.frameRateDisplay );
    Easel.Ticker.setFPS( 60 );
    Easel.Touch.enable( stage, false, false );

    PrototypeDialog.init( strings.title );
  } );
