// Copyright 2002-2013, University of Colorado Boulder

/**
 * Transform between model and view coordinate frames.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {

  var Point2D = require( 'common/math/Point2D' );

  /**
   * @constructor
   * @param {Number} scale when going from model to view coordinates. 1 unit in the model is this many view units.
   * @param {Vector2} offset when going from model to view coordinates
   */
  function ModelViewTransform2D( scale, offset ) {

    /*
     * Transformation a value from model to view coordinates.
     * @param {Number|Point2D} value
     * @return {Number|Point2D}
     */
    this.modelToView = function( value ) {
      if ( typeof( value ) === 'number' ) {
        return value * scale;
      }
      else if ( value instanceof Point2D ) {
        return new Point2D( ( value.x + offset.x ) * scale, ( value.y + offset.y ) * scale );
      }
      else {
        throw new Error( 'value has unsupported type: ' + typeof( value ) );
      }
    };

    /*
     * Transformation a value from view to model coordinates.
     * @param {Number|Point2D} value
     * @return {Number|Point2D}
     */
    this.viewToModel = function( value ) {
      if ( typeof( value ) === 'number' ) {
        return value / scale;
      }
      else if ( value instanceof Point2D ) {
        return new Point2D( ( value.x / scale ) - offset.x, ( value.y / scale ) - offset.y );
      }
      else {
        throw new Error( 'value has unsupported type: ' + typeof( value ) );
      }
    };
  }

  return ModelViewTransform2D;
} );
