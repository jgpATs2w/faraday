// Copyright 2002-2013, University of Colorado Boulder

/**
 * B-Field Meter model.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {

  var Logger = require( 'common/util/Logger' );
  var Property = require( 'common/model/Property' );

  function FieldMeter( location, visible, magnet ) {

    var logger = new Logger( 'FieldMeter' ); // logger for this source file

    // initialize properties
    this.location = new Property( location );
    this.visible = new Property( visible );
    this.value = new Property( magnet.getFieldAt( location ) );

    // Update the value displayed by the meter.
    var that = this;
    var updateValue = function() {
      that.value.set( magnet.getFieldAt( that.location.get() ) );
    };
    this.location.addObserver( updateValue );
    magnet.location.addObserver( updateValue );
    magnet.strength.addObserver( updateValue );
    magnet.orientation.addObserver( updateValue );

    //DEBUG
    if ( false ) {
      this.location.addObserver( function( newValue ) {
        logger.debug( 'location=' + newValue );
      } );
      this.visible.addObserver( function( newValue ) {
        logger.debug( 'visible=' + newValue );
      } );
      this.value.addObserver( function( newValue ) {
        logger.debug( 'value=' + newValue );
      } );
    }
  }

  // Resets all properties
  FieldMeter.prototype.reset = function() {
    this.location.reset();
    this.visible.reset();
    // this.value is derived
  };

  return FieldMeter;
} );
