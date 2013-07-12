// Copyright 2002-2013, University of Colorado Boulder

/**
 * Math utilities.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function() {

  function MathUtil() {
  }

  MathUtil.toRadians = function( degrees ) {
    return degrees * Math.PI / 180;
  };

  MathUtil.toDegrees = function( radians ) {
    return radians * 180 / Math.PI;
  };

  return MathUtil;
} );