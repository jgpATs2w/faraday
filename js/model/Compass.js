// Copyright 2002-2013, University of Colorado Boulder

/**
 * Compass model.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {

  var Easel = require( 'easel' );
  var Logger = require( 'common/util/Logger' );
  var Property = require( 'common/model/Property' );
  var CompassKinematics = require( 'model/CompassKinematics' );

  /**
   * @param {Point} location
   * @param {Boolean} visible
   * @param {BarMagnet} magnet
   * @constructor
   */
  function Compass( location, visible, magnet ) {

    var logger = new Logger( 'Compass' ); // logger for this source file

    // initialize properties
    this.location = new Property( location );
    this.visible = new Property( visible );
    this.orientation = new Property( 0 ); // radians
    this.kinematics = new CompassKinematics( this, magnet );

    //DEBUG
    if ( false ) {
      this.location.addObserver( function( newValue ) {
        logger.debug( 'location=' + newValue );
      } );
      this.visible.addObserver( function( newValue ) {
        logger.debug( 'visible=' + newValue );
      } );
      this.orientation.addObserver( function( newValue ) {
        logger.debug( 'orientation=' + newValue );
      } );
    }
  }

  // Resets all properties
  Compass.prototype.reset = function() {
    this.location.reset();
    this.visible.reset();
  };

  // Animates the compass needle
  Compass.prototype.tick = function() {
    var frames = Easel.Ticker.getInterval() / ( 1000 / Easel.Ticker.getFPS() );
    this.kinematics.animateOrientation( frames );
  };

  /**
   * Workaround to get the compass moving immediately.
   * In some situations, such as when the magnet polarity is flipped,
   * it can take quite awhile for the needle to start moving.
   */
  Compass.prototype.startMovingNow = function() {
    this.kinematics.startMovingNow();
  };

  return Compass;
} );
