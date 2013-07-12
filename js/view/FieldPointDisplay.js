// Copyright 2002-2013, University of Colorado Boulder

/**
 * Visualization of the B-field vector at a specific static location.
 * This is a specialized compass needle that knows its location.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {

  var Inheritance = require( 'common/util/Inheritance' );
  var CompassNeedleDisplay = require( 'view/CompassNeedleDisplay' );

  /**
   * @param {Dimension2D} size
   * @param {Point2D} location
   * @constructor
   */
  function FieldPointDisplay( size, location ) {
    CompassNeedleDisplay.call( this, size ); // constructor stealing
    this.location = location;
  }

  // prototype chaining
  Inheritance.inheritPrototype( FieldPointDisplay, CompassNeedleDisplay );

  return FieldPointDisplay;
} );
